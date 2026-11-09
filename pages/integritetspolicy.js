import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Integritetspolicy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Head>
        <title>Integritetspolicy | DigiTribe</title>
        <meta
          name="description"
          content="Integritetspolicy – hur vi behandlar personuppgifter enligt GDPR."
        />
      </Head>

      <Navbar />

      <main className="flex-grow pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-2">Integritetspolicy</h1>
          <p className="text-sm text-gray-500 mb-8">Senast uppdaterad: 9 november 2026</p>

          <div className="prose max-w-none">
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">1. Personuppgiftsansvarig</h2>
              <p>
                [FÖRETAGSNAMN], organisationsnummer [ORG.NR], med adress
                [POSTADRESS], är personuppgiftsansvarig för behandlingen av
                personuppgifter som beskrivs i denna policy. Har du frågor om hur
                vi behandlar dina personuppgifter kan du kontakta oss på
                [E-POSTADRESS] eller [TELEFONNUMMER].
              </p>
              <p>
                Dataskyddsombud: [NAMN OCH KONTAKTUPPGIFTER TILL
                DATASKYDDSOMBUD, ELLER ANGE ATT SÅDANT INTE HAR UTSETTS].
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                2. Vilka personuppgifter vi behandlar
              </h2>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  <strong>Kontaktformulär:</strong> namn, e-postadress, meddelande
                  samt tidpunkt för inskickandet.
                </li>
                <li>
                  <strong>Chatt:</strong> de uppgifter du själv lämnar i samtalet,
                  till exempel namn och kontaktuppgifter. Chatten används endast
                  på de sidor där den visas.
                </li>
                <li>
                  <strong>Teknisk information:</strong> IP-adress, webbläsartyp
                  och tidsstämplar i våra serverloggar när du besöker webbplatsen.
                </li>
                <li>
                  <strong>Ditt cookieval:</strong> uppgift om du har accepterat
                  eller avböjt valfria kakor, samt när valet gjordes.
                </li>
              </ul>
              <p className="mt-4">
                Vi samlar inte in känsliga personuppgifter och ber dig att inte
                skicka sådana till oss via formulär eller chatt.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                3. Varför vi behandlar uppgifterna och rättslig grund
              </h2>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  <strong>Besvara förfrågningar via kontaktformulär och chatt</strong>{' '}
                  – rättslig grund är berättigat intresse (artikel 6.1 f GDPR). Vi
                  har ett berättigat intresse av att besvara förfrågningar från
                  befintliga och potentiella kunder. Vi har gjort en
                  intresseavvägning och bedömt att ditt intresse av
                  integritetsskydd inte väger tyngre för denna behandling.
                </li>
                <li>
                  <strong>Fullgöra avtal med dig</strong> – rättslig grund är
                  avtal (artikel 6.1 b GDPR).
                </li>
                <li>
                  <strong>Valfria kakor och liknande tekniker</strong> – rättslig
                  grund är samtycke (artikel 6.1 a GDPR och 9 kap. lag
                  [2022:482] om elektronisk kommunikation). Samtycket kan när som
                  helst återkallas via ”Cookieinställningar” i sidfoten.
                </li>
                <li>
                  <strong>Drift, säkerhet och felsökning</strong> – rättslig grund
                  är berättigat intresse (artikel 6.1 f GDPR).
                </li>
                <li>
                  <strong>Rättsliga skyldigheter</strong> – till exempel
                  bokföringsskyldighet, rättslig grund är rättslig förpliktelse
                  (artikel 6.1 c GDPR).
                </li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">4. Mottagare och biträden</h2>
              <p>
                Vi säljer aldrig dina personuppgifter. Uppgifter kan delas med
                följande typer av mottagare som behandlar uppgifter för vår
                räkning och enligt våra instruktioner:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>[HOSTINGLEVERANTÖR] – drift och lagring av webbplatsen.</li>
                <li>[AUTOMATISERINGS- OCH E-POSTLEVERANTÖR, T.EX. N8N/M365] – hantering av formulärsvar och e-post.</li>
                <li>
                  jsDelivr (CDN) – leverans av kod och stilmallar för chattfunktionen.
                </li>
                <li>[EVENTUELLA ÖVRIGA UNDERLEVERANTÖRER].</li>
              </ul>
              <p className="mt-4">
                Vi tecknar personuppgiftsbiträdesavtal med samtliga biträden.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                5. Överföring till länder utanför EU/EES
              </h2>
              <p>
                Vissa leverantörer kan behandla uppgifter i USA eller andra
                länder utanför EU/EES. Sådan överföring sker med stöd av
                Europeiska kommissionens standardavtalsklausuler (SCC) och/eller
                adekvat skyddsnivå enligt EU-US Data Privacy Framework, samt med
                kompletterande skyddsåtgärder där det behövs. Kontakta oss om du
                vill veta mer om vilka skyddsåtgärder som gäller för en specifik
                leverantör.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">6. Lagringstid</h2>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  Förfrågningar via kontaktformulär och chatt sparas i högst
                  [ANGE LAGRINGSTID, T.EX. 24 MÅNADER] efter att ärendet
                  avslutats, om vi inte behöver spara dem längre för att fullgöra
                  avtal eller rättslig skyldighet.
                </li>
                <li>Serverloggar sparas i högst [ANGE, T.EX. 90 DAGAR].</li>
                <li>
                  Ditt cookieval sparas tills du ändrar det eller rensar din
                  webbläsardata.
                </li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">7. Dina rättigheter</h2>
              <p>Du har rätt att:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>få tillgång till de personuppgifter vi behandlar om dig,</li>
                <li>få felaktiga uppgifter rättade,</li>
                <li>få uppgifter raderade (”rätten att bli bortglömd”),</li>
                <li>begära begränsning av behandlingen,</li>
                <li>invända mot behandling som grundar sig på berättigat intresse,</li>
                <li>få ut uppgifter i ett strukturerat, allmänt använt och maskinläsbart format (dataportabilitet),</li>
                <li>
                  när som helst återkalla ett samtycke, utan att det påverkar
                  lagligheten av behandling som skett före återkallelsen.
                </li>
              </ul>
              <p className="mt-4">
                Kontakta oss på [E-POSTADRESS] för att utöva dina rättigheter. Vi
                svarar inom en månad. Om du är missnöjd med vår behandling kan du
                lämna klagomål till Integritetsskyddsmyndigheten (IMY), Box 8114,
                104 20 Stockholm, imy.se.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">8. Säkerhet</h2>
              <p>
                Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att
                skydda personuppgifter mot obehörig åtkomst, förlust och ändring,
                bland annat krypterad överföring (HTTPS), åtkomstkontroller och
                begränsad åtkomst till uppgifterna.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                9. Automatiserat beslutsfattande
              </h2>
              <p>
                Vi använder inte automatiserat beslutsfattande på ett sätt som
                har rättsliga följder för dig.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">10. Ändringar</h2>
              <p>
                Vi kan komma att uppdatera denna policy. Den senaste versionen
                publiceras alltid på denna sida med uppdaterat datum.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Integritetspolicy;
