import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Villkor = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Head>
        <title>Villkor | DigiTribe</title>
        <meta
          name="description"
          content="Villkor för användning av webbplatsen."
        />
      </Head>

      <Navbar />

      <main className="flex-grow pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-2">Villkor</h1>
          <p className="text-sm text-gray-500 mb-8">Senast uppdaterad: 9 november 2026</p>

          <div className="prose max-w-none">
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">1. Om villkoren</h2>
              <p>
                Dessa villkor gäller för din användning av webbplatsen som
                tillhandahålls av [FÖRETAGSNAMN], organisationsnummer [ORG.NR]
                (”vi”, ”oss”). Genom att använda webbplatsen godkänner du
                villkoren. Om du inte godkänner villkoren ber vi dig att inte
                använda webbplatsen.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">2. Webbplatsens innehåll</h2>
              <p>
                Innehållet på webbplatsen tillhandahålls i informationssyfte och
                utgör inte bindande erbjudanden eller professionell rådgivning om
                inget annat uttryckligen anges. Vi strävar efter att
                informationen ska vara korrekt och uppdaterad men kan inte
                garantera att den är fullständig eller felfri.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                3. Immateriella rättigheter
              </h2>
              <p>
                Allt innehåll på webbplatsen, såsom text, bilder, grafik,
                varumärken och kod, tillhör oss eller våra licensgivare och är
                skyddat av upphovsrätt och andra immaterialrättsliga lagar. Du får
                inte kopiera, modifiera, distribuera eller använda innehållet
                kommersiellt utan vårt skriftliga tillstånd.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">4. Användning av webbplatsen</h2>
              <p>Du förbinder dig att inte:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>använda webbplatsen på ett sätt som bryter mot lag eller förordning,</li>
                <li>försöka få obehörig åtkomst till webbplatsen eller dess system,</li>
                <li>skicka skadlig kod, spam eller olagligt innehåll via formulär eller chatt,</li>
                <li>störa eller belasta webbplatsens drift på ett otillbörligt sätt.</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">5. Ansvar</h2>
              <p>
                Webbplatsen tillhandahålls i befintligt skick. I den utsträckning
                som tillåts enligt tvingande lag ansvarar vi inte för indirekta
                skador, utebliven vinst eller förlust av data till följd av din
                användning av webbplatsen. Inget i dessa villkor begränsar ansvar
                som inte kan begränsas enligt lag.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">6. Externa länkar</h2>
              <p>
                Webbplatsen kan innehålla länkar till webbplatser som drivs av
                tredje part. Vi ansvarar inte för innehållet på eller
                behandlingen av personuppgifter på sådana webbplatser.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">7. Personuppgifter och kakor</h2>
              <p>
                Hur vi behandlar personuppgifter beskrivs i vår{' '}
                <Link href="/integritetspolicy" className="text-blue-600 underline hover:text-blue-700">
                  integritetspolicy
                </Link>
                , och hur vi använder kakor beskrivs i vår{' '}
                <Link href="/cookiepolicy" className="text-blue-600 underline hover:text-blue-700">
                  cookiepolicy
                </Link>
                .
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">8. Ändringar</h2>
              <p>
                Vi förbehåller oss rätten att ändra dessa villkor. Ändringar
                träder i kraft när de publiceras på webbplatsen. Den senaste
                versionen finns alltid på denna sida med uppdaterat datum.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                9. Tillämplig lag och tvist
              </h2>
              <p>
                Dessa villkor regleras av svensk rätt. Tvister som uppstår i
                anledning av villkoren ska i första hand lösas genom förhandling.
                Om ingen lösning nås hanteras tvisten av [ORT] tingsrätt som
                första instans, om inte annat följer av tvingande
                konsumentlagstiftning.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">10. Kontakt</h2>
              <p>
                Har du frågor om dessa villkor kan du kontakta oss på
                [E-POSTADRESS] eller [POSTADRESS].
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Villkor;
