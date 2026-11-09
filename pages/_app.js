import "@/styles/globals.css";
import { ConsentProvider } from "@/components/CookieConsent";

export default function App({ Component, pageProps }) {
  return (
    <ConsentProvider>
      <Component {...pageProps} />
    </ConsentProvider>
  );
}
