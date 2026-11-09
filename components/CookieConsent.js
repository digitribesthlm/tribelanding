import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'cookie-consent';
const CONSENT_VERSION = 2;

const ConsentContext = createContext(null);

export function ConsentProvider({ children }) {
  const [consent, setConsent] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (stored && stored.version === CONSENT_VERSION) {
        setConsent({ analytics: !!stored.analytics, marketing: !!stored.marketing });
      } else if (stored && stored.version === 1) {
        setConsent({ analytics: !!stored.analytics, marketing: false });
      }
    } catch {
      // ignore malformed storage
    }
    setIsReady(true);
  }, []);

  const savePreferences = useCallback((preferences) => {
    const next = {
      analytics: !!preferences.analytics,
      marketing: !!preferences.marketing,
    };
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          ...next,
          version: CONSENT_VERSION,
          timestamp: new Date().toISOString(),
        })
      );
    } catch {
      // storage unavailable — choice still applies for this session
    }
    setConsent(next);
    setIsSettingsOpen(false);
  }, []);

  const openSettings = useCallback(() => setIsSettingsOpen(true), []);

  const value = {
    consent,
    isReady,
    hasConsent: (category) => Boolean(consent && consent[category]),
    savePreferences,
    acceptAll: () => savePreferences({ analytics: true, marketing: true }),
    rejectAll: () => savePreferences({ analytics: false, marketing: false }),
    openSettings,
  };

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {isReady && consent === null && !isSettingsOpen && (
        <CookieBanner
          onSettings={openSettings}
          onAcceptAll={value.acceptAll}
          onRejectAll={value.rejectAll}
        />
      )}
      {isReady && isSettingsOpen && (
        <CookieSettings
          consent={consent}
          onClose={() => setIsSettingsOpen(false)}
          onSave={savePreferences}
        />
      )}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  return useContext(ConsentContext);
}

function CookieBanner({ onSettings, onAcceptAll, onRejectAll }) {
  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <p className="flex-1 text-sm text-gray-600">
          We use essential cookies to run this site. With your consent, we also
          use cookies for statistics and marketing.{' '}
          <Link
            href="/cookies"
            className="text-blue-600 underline hover:text-blue-700"
          >
            Read our Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            onClick={onSettings}
            className="flex-1 rounded-full px-5 py-2.5 font-medium text-gray-700 underline-offset-2 transition-colors hover:text-blue-600 hover:underline md:flex-none"
          >
            Settings
          </button>
          <button
            onClick={onRejectAll}
            className="flex-1 rounded-full border-2 border-gray-300 px-6 py-2.5 font-medium text-gray-700 transition-colors hover:border-gray-400 md:flex-none"
          >
            Reject all
          </button>
          <button
            onClick={onAcceptAll}
            className="flex-1 rounded-full bg-blue-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 md:flex-none"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}

function CookieSettings({ consent, onClose, onSave }) {
  const [analytics, setAnalytics] = useState(consent?.analytics ?? false);
  const [marketing, setMarketing] = useState(consent?.marketing ?? false);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Cookie settings"
        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-2xl font-bold text-gray-900">Cookie settings</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Choose which cookies we may use. You can change your choice at any time
          via “Cookie settings” in the footer. Read more in our{' '}
          <Link href="/cookies" className="text-blue-600 underline hover:text-blue-700">
            Cookie Policy
          </Link>
          .
        </p>

        <div className="space-y-5">
          <CategoryRow
            title="Necessary"
            description="Required for the site to work, for example remembering your cookie choice. Always on."
            checked
            disabled
          />
          <CategoryRow
            title="Statistics"
            description="Allows us to measure how the site is used so we can improve it, for example with Google Analytics."
            checked={analytics}
            onChange={setAnalytics}
          />
          <CategoryRow
            title="Marketing"
            description="Allows us to measure and target advertising, for example with LinkedIn Ads and similar platforms."
            checked={marketing}
            onChange={setMarketing}
          />
        </div>

        <div className="flex flex-col gap-3 mt-8 sm:flex-row">
          <button
            onClick={() => onSave({ analytics: false, marketing: false })}
            className="flex-1 rounded-full border-2 border-gray-300 px-5 py-2.5 font-medium text-gray-700 transition-colors hover:border-gray-400"
          >
            Reject all
          </button>
          <button
            onClick={() => onSave({ analytics, marketing })}
            className="flex-1 rounded-full border-2 border-blue-600 px-5 py-2.5 font-medium text-blue-600 transition-colors hover:bg-blue-50"
          >
            Save preferences
          </button>
          <button
            onClick={() => onSave({ analytics: true, marketing: true })}
            className="flex-1 rounded-full bg-blue-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}

function CategoryRow({ title, description, checked, disabled, onChange }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
          checked ? 'bg-blue-600' : 'bg-gray-300'
        } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0.5'
          }`}
        />
      </button>
    </div>
  );
}
