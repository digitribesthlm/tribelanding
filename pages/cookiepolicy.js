import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cookiepolicy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Head>
        <title>Cookiepolicy | DigiTribe</title>
        <meta
          name="description"
          content="Cookiepolicy – vilka kakor och liknande tekniker vi använder, varför och hur du ändrar ditt val."
        />
      </Head>

      <Navbar />

      <main className="flex-grow pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-2">Cookiepolicy</h1>
          <p className="text-sm text-gray-500 mb-8">Senast uppdaterad: 9 november 2026</p>

          <div className="prose max-w-none">
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                1. Kakor och liknande tekniker
              </h2>
              <p>
                Webbplatsen använder kakor (cookies) och lokal lagring i din
                webbläsare. Kakor är små textfiler som sparas på din enhet och
                som gör att webbplatsen kan fungera och komma ihåg dina val.
                Lokal lagring (localStorage) fungerar på liknande sätt men sparas
                inte som en kaka.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">2. Rättslig grund</h2>
              <p>
                För kakor och liknande tekniker som inte är nödvändiga för att
                webbplatsen ska fungera krävs ditt samtycke enligt 9 kap. lagen
                (2022:482) om elektronisk kommunikation. Samtycket ska vara
                frivilligt, specifikt, informerat och otvetydigt.
              </p>
              <p className="mt-4">
                Nödvändig lagring, som krävs för att tillhandahålla den tjänst du
                uttryckligen begärt, är undantagen från samtyckeskravet. Vi lägger
                aldrig på valfria kakor i förväg – de aktiveras först om du
                accepterar dem.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                3. Vad vi använder på webbplatsen
              </h2>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                Nödvändig lagring (kräver inget samtycke)
              </h3>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  <strong>cookie-consent</strong> (localStorage): sparar om du
                  har accepterat eller avböjt valfria kakor, samt när valet
                  gjordes. Syftet är att komma ihåg ditt val så att du inte får
                  frågan varje gång. Uppgiften sparas tills du ändrar ditt val
                  eller rensar din webbläsardata.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                Valfri lagring och valfria tjänster (kräver samtycke)
              </h3>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  <strong>Statistik (valfri):</strong> om du samtycker kan vi
                  använda statistikverktyg, till exempel Google Analytics, för
                  att förstå hur webbplatsen används och förbättra den. Sådana
                  kakor sätts endast efter ditt samtycke.
                </li>
                <li>
                  <strong>Marknadsföring (valfri):</strong> om du samtycker kan
                  vi använda verktyg för att mäta och rikta annonsering, till
                  exempel LinkedIn Ads. Sådana kakor sätts endast efter ditt
                  samtycke.
                </li>
                <li>
                  <strong>Chattfunktionen</strong> (endast på de sidor där
                  chatten visas): chatten laddar kod och stilmallar från
                  jsDelivr, ett tredjepartsnätverk för leverans av filer (CDN).
                  När chatten laddas överförs din IP-adress och information om
                  din webbläsare till jsDelivr. Chatten kan också spara tekniska
                  uppgifter om sessionen i din webbläsare för att samtalet ska
                  fungera. Chattens meddelanden skickas till vår egen server och
                  behandlas enligt vår integritetspolicy.
                </li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">4. Sammanställning</h2>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full text-sm border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-2 border-b border-gray-200">Namn</th>
                      <th className="text-left px-4 py-2 border-b border-gray-200">Typ</th>
                      <th className="text-left px-4 py-2 border-b border-gray-200">Syfte</th>
                      <th className="text-left px-4 py-2 border-b border-gray-200">Varaktighet</th>
                      <th className="text-left px-4 py-2 border-b border-gray-200">Part</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-200">cookie-consent</td>
                      <td className="px-4 py-2 border-b border-gray-200">LocalStorage (nödvändig)</td>
                      <td className="px-4 py-2 border-b border-gray-200">Sparar ditt cookieval</td>
                      <td className="px-4 py-2 border-b border-gray-200">Till dess att du ändrar valet eller rensar webbläsardata</td>
                      <td className="px-4 py-2 border-b border-gray-200">Första part</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-200">_ga, _ga_* (Google Analytics)</td>
                      <td className="px-4 py-2 border-b border-gray-200">Kaka (valfri)</td>
                      <td className="px-4 py-2 border-b border-gray-200">Statistik – sätts endast efter samtycke</td>
                      <td className="px-4 py-2 border-b border-gray-200">[ANGE, T.EX. 13 MÅNADER]</td>
                      <td className="px-4 py-2 border-b border-gray-200">Tredje part (Google)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-200">LinkedIn Insight Tag</td>
                      <td className="px-4 py-2 border-b border-gray-200">Kaka (valfri)</td>
                      <td className="px-4 py-2 border-b border-gray-200">Marknadsföring – sätts endast efter samtycke</td>
                      <td className="px-4 py-2 border-b border-gray-200">[ANGE]</td>
                      <td className="px-4 py-2 border-b border-gray-200">Tredje part (LinkedIn)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-200">Chattsession</td>
                      <td className="px-4 py-2 border-b border-gray-200">LocalStorage (valfri)</td>
                      <td className="px-4 py-2 border-b border-gray-200">Håller chattsamtalet aktivt</td>
                      <td className="px-4 py-2 border-b border-gray-200">[ANGE]</td>
                      <td className="px-4 py-2 border-b border-gray-200">Första part</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-200">jsDelivr</td>
                      <td className="px-4 py-2 border-b border-gray-200">Ingen lagring (CDN)</td>
                      <td className="px-4 py-2 border-b border-gray-200">Levererar chattens kod och stilmallar</td>
                      <td className="px-4 py-2 border-b border-gray-200">–</td>
                      <td className="px-4 py-2 border-b border-gray-200">Tredje part</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                5. Så ändrar eller återkallar du ditt samtycke
              </h2>
              <p>
                Du kan när som helst ändra ditt val genom att klicka på
                <strong> Cookieinställningar</strong> i sidfoten. Där kan du
                acceptera eller avböja valfria kakor igen, och återkallelsen är
                lika enkel som att lämna samtycket.
              </p>
              <p className="mt-4">
                Du kan också blockera eller radera kakor och lokal lagring i din
                webbläsares inställningar. Notera att vissa funktioner, till
                exempel chatten, kan sluta fungera om du blockerar lagring.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                6. Överföring till länder utanför EU/EES
              </h2>
              <p>
                När chattens filer laddas från jsDelivr kan din IP-adress
                behandlas i länder utanför EU/EES. Sådan överföring sker med stöd
                av standardavtalsklausuler och kompletterande skyddsåtgärder där
                det behövs.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">7. Ändringar och kontakt</h2>
              <p>
                Vi kan uppdatera denna policy. Den senaste versionen publiceras
                alltid här med uppdaterat datum. Har du frågor om vår användning
                av kakor kan du kontakta oss på [E-POSTADRESS]. Läs mer om hur vi
                behandlar personuppgifter i vår{' '}
                <Link href="/integritetspolicy" className="text-blue-600 underline hover:text-blue-700">
                  integritetspolicy
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookiepolicy;
