'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function DrustveniKompasPage() {
  const router = useRouter();
  const [filter, setFilter] = useState('svi');

  // Dummy podaci za članke/projekte – u praksi se mogu zameniti stvarnim podacima
  const projects = [
    {
      id: 1,
      title: 'Dosije Priroda',
      category: 'ekologija',
      description: 'Ekološko istraživačko novinarstvo i aktivizam.',
    },
    {
      id: 2,
      title: 'Zeleni Šakal',
      category: 'ekologija',
      description: 'Edukacija i zaštita prirode.',
    },
    {
      id: 3,
      title: 'Eko-patrole',
      category: 'ekologija',
      description: 'Akcije čišćenja i zaštite prirodnih resursa.',
    },
    {
      id: 4,
      title: 'Lokalne inicijative',
      category: 'ekologija',
      description: 'Projekti u saradnji sa zajednicama.',
    },
  ];

  const filteredProjects = filter === 'svi' ? projects : projects.filter(p => p.category === filter);

  // Funkcija za skrolovanje do formulara za prijavu problema
  const scrollToForm = () => {
    const formSection = document.getElementById("problemForm");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Funkcija za skrolovanje do sekcije vodiča
  const scrollToGuide = () => {
    const guideSection = document.getElementById("guideSection");
    if (guideSection) {
      guideSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Stil za senku na tekstu preko slike (tamna senka)
  const textShadowStyle = { textShadow: '2px 2px 4px rgba(0,0,0,0.7)' };

  // Animirani razdelnik koji se koristi između podnaslova i teksta
  const AnimatedDivider = () => (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.5 }}
      className="my-4 mx-auto bg-green-500"
      style={{ height: '4px', width: '50%' }}
    />
  );

  // Interaktivni umetnički element koji se pojavljuje u svakom odeljku
  const InteractiveArt = () => (
    <motion.div
      className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto my-8"
      whileHover={{ scale: 1.2, rotate: 15 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
  );

  return (
    <div className="font-inter text-gray-800">
      {/* HERO SEKCIJA - SLIKA */}
      <section className="relative h-screen">
        <img 
          src="/bicikl.jpg" 
          alt="Bicikl" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={textShadowStyle}
          >
            Društveni Kompas – Prava i Koreni
          </motion.h1>
          <motion.p
            className="text-white text-lg mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={textShadowStyle}
          >
            Podrška ruralnim sredinama kroz prava, zajedništvo i očuvanje tradicije.
            MetaPolis Centar kroz projekat Društveni Kompas pruža informacije i podršku ljudima u manjim sredinama o ključnim pitanjima:
          </motion.p>
          <div className="text-white mb-10 space-y-1" style={textShadowStyle}>
            <p> Kako zaštititi svoja prava?</p>
            <p> Kako zaštititi životinje i prirodne resurse u manjim sredinama?</p>
            <p> Kako se boriti protiv ekoloških i društvenih problema?</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <motion.button
              className="px-6 py-3 bg-green-300 text-gray-800 rounded-full hover:bg-green-400 transition"
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push('/')}
            >
              Ostali projekti
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-blue-300 text-gray-800 rounded-full hover:bg-blue-400 transition"
              whileHover={{ scale: 1.05 }}
              onClick={scrollToGuide}
            >
              Preuzmi vodič
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-green-300 text-gray-800 rounded-full hover:bg-green-400 transition"
              whileHover={{ scale: 1.05 }}
              onClick={scrollToForm}
            >
              Prijavi problem
            </motion.button>
          </div>
        </div>
       
      </section>

      {/* OPŠIRNI SADRŽAJ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Otkrivena snaga: kako zaštititi prava ljudi i živog sveta u manjim sredinama
          </h2>
          <div className="max-w-3xl mx-auto leading-relaxed text-gray-700 space-y-6">
          <InteractiveArt />

            <p>
              U mnogim selima i manjim gradovima širom Srbije, ljudi se suočavaju s problemima koji ostaju nevidljivi za širu javnost: 
              zlostavljanje, kršenje osnovnih ljudskih prava, nepoštovanje zakona i nemoć da se ta nepravda zaustavi. Kada se takva 
              kršenja dešavaju u zatvorenim zajednicama, daleko od očiju institucija i medija, žrtve često ostaju zaglavljene u uverenju da im 
              „niko ne može pomoći“.
            </p>
            <p>
              Međutim, pravo na dostojanstven život ne prestaje van granica urbanih sredina. Nezavisno od toga da li živite u velikom gradu 
              ili u selu s nekoliko domaćinstava, imate ista ustavom i zakonima garantovana prava: pravo na sigurnost, zdravstvenu 
              zaštitu, pristup obrazovanju i zaštitu životne sredine. Ipak, ljudi u manjim sredinama najčešće nisu upoznati 
              s tim mogućnostima, pa se, bilo zbog straha ili neznanja, mire sa zlostavljanjem, korupcijom ili različitim 
              oblicima eksploatacije.
            </p>
            <h3 className="text-xl font-semibold mt-8">Ko su zlostavljači i kako ih prepoznati?</h3>
            <AnimatedDivider />
            <p>
              Zlostavljači mogu biti pojedinci  iz neposrednog okruženja – komšija koji zloupotrebljava svoj položaj, lokalni 
              „moćnik“ sa političkim vezama, pa čak i policijske ili političke strukture koje ignorišu ili zataškavaju slučajeve 
              nasilja. Takođe, odgovornost često snose i neodgovorne firme, male ili velike kompanije koje u potrazi za profitom 
              uništavaju šumske i vodne površine ili zagađuju okolinu u ruralnim predelima.
            </p>
            <p>
              Ukoliko neko ima invaliditet ili drugi poremećaj, rizik da trpi nasilje ili zanemarivanje znatno je veći, jer 
              takva osoba često nema podršku, informacije niti mogućnost da prijavi problem. Kada se takve pojave dešavaju 
              u manjim sredinama, žrtve se osećaju još bespomoćnije.
            </p>
            <h3 className="text-xl font-semibold mt-8">Zašto ne reagujemo?</h3>
            <AnimatedDivider />
            <p>
              U tradicionalno zatvorenim, manjim zajednicama, ljudi se plaše osude okoline ili odmazde onih koji imaju moć i veze. 
              Pod pritiskom fraza poput „ne talasaj“ ili „bolje ćuti da ne bude gore“, mnogi se odlučuju na ćutnju. Ovo je naročito 
              izraženo tamo gde policija i lokalna vlast, s jedne strane, nemaju dovoljno kapaciteta (ili volje) da se bave ovim 
              problemima, dok se, s druge strane, zlostavljači osećaju sigurno u svom nepočinstvu.
            </p>
            <h3 className="text-xl font-semibold mt-8">Držanje pasa na lancu i zlostavljanje životinja</h3>
            <AnimatedDivider />
            <p>
              Jedan od najčešćih vidova neprimerenog postupanja prema životinjama u selima jeste <strong>držanje pasa na lancu</strong>, ponekad 
              bez pristupa hrani i vodi. Zatim, tu su <strong>mačke i druge životinje</strong> koje se često zlostavljaju ili 
              izbacuju na ulicu kada „više nisu potrebne“. U ruralnom kontekstu ljudi često misle da je takav tretman „normalan“ 
              ili „potreban“ – zaboravljajući da Zakon o dobrobiti životinja u Srbiji jasno definiše šta se smatra zlostavljanjem 
              i kakve se kazne mogu izreći.
            </p>
            <p>
              Neretko se zaboravlja i na domaće životinje koje se drže u nehumanim uslovima, a lokalne 
              inspekcije, bilo zbog nedostatka resursa ili korupcije, ne reaguju kako bi trebalo. To dodatno ohrabruje zlostavljače, 
              koji ostaju nekažnjeni i nastavljaju po starom.
            </p>
            <h3 className="text-xl font-semibold mt-8">Koliko je važno poznavanje sopstvenih prava</h3>
            <AnimatedDivider />
            <p>
              Ljudi u manjim sredinama često zaboravljaju da im je na raspolaganju ista zakonska zaštita kao i onima u velikim 
              gradovima. Svako može da prijavi nasilje, zlostavljanje ili uništavanje prirode lokalnim institucijama – policiji, 
              veterinarskoj i ekološkoj inspekciji ili tužilaštvu. Često nisu svesni ni da se mogu obratiti 
              <em> nevladinim organizacijama, advokatima, volonterima ili građanskim inicijativama</em> za pomoć u pokretanju 
              postupka ili medijskoj podršci.
            </p>
            <p>
              Pored zvaničnih institucija, postoji i moć <strong>zajednice</strong>. Nekada će meštani brže i efikasnije reagovati 
              ako se skupi dovoljno potpisa i zajedno uputi zahtev nadležnima. Ipak, za takvu akciju neophodno je da ljudi shvate 
              kako „oni imaju pravo da traže i pravo da dobiju odgovor“.
            </p>
            <h3 className="text-xl font-semibold mt-8">Osnaživanje najranjivijih</h3>
            <AnimatedDivider />
            <p>
              Upravo su najranjivije grupe – ljudi s invaliditetom, oni koji žive u teškim uslovima ili trpe porodično nasilje – 
              najviše pogođene nezainteresovanošću lokalnih vlasti. Ponekad je dovoljan samo jedan hrabar pojedinac, aktivista 
              ili meštanin, da ohrabri i pokrene čitavu zajednicu. Ohrabrujuća je činjenica da, kada se ljudi udruže, počinioci 
              najčešće prestaju s nasiljem, bilo nad ljudima ili životinjama, jer shvataju da neko prati i beleži njihove radnje.
            </p>
            <h3 className="text-xl font-semibold mt-8">Kako možemo pomoći jedni drugima?</h3>
            <AnimatedDivider />
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Razmenom informacija i iskustava:</strong> Podelite sa komšijama, prijateljima ili lokalnim udruženjima 
                sve što znate o prijavljivanju problema i zakonskim mehanizmima zaštite.
              </li>
              <li>
                <strong>Zajedničkim akcijama:</strong> Udružite se i uputite kolektivne zahteve prema policiji, tužilaštvu ili 
                drugim institucijama. Kada više ljudi zahteva reakciju, manja je verovatnoća da će slučaj biti ignorisan.
              </li>
              <li>
                <strong>Podrškom onima koji ne mogu da se brane:</strong> Ako znate da je neko iz vaše okoline posebno ranjiv, 
                ponudite im pomoć ili ih povežite s organizacijama koje pružaju pravnu i psihološku podršku.
              </li>
              <li>
                <strong>Prijavom svakog oblika zlostavljanja životinja:</strong> Bilo da se radi o psu na lancu, mački bez adekvatne 
                nege ili masovnom uništavanju staništa, svaki vaš glas je važan.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-8">Načini za rešavanje problema – budući vodiči</h3>
            <AnimatedDivider />
            <p>
              Planiramo da uskoro objavimo i <strong>dva priručnika:</strong>
            </p>
            <ul className="list-decimal list-inside ml-4">
              <li>
                <strong>Vodič za zaštitu ljudskih prava</strong> – s fokusom na žrtve nasilja, diskriminacije 
                i socijalne nepravde.
              </li>
              <li>
                <strong>Vodič za prava životinja i prirode</strong> – s jasnim koracima kako reagovati kada vidite 
                zlostavljanje životinja ili uništavanje ekosistema.
              </li>
            </ul>
            <p>
              Nijedna promena ne dešava se preko noći, ali svaka počinje prvim korakom. U malim sredinama, taj prvi 
              korak može biti presudan jer razbija godinama stvaranu tišinu. Što se više ljudi ohrabri da govori, 
              prijavljuje i traži svoju zakonsku zaštitu, to će se brže zlostavljači suočiti sa posledicama.
            </p>
            <p>
              Ako verujete da je došlo vreme da se oslobodimo ćutanja i prihvatimo odgovornost za svoju okolinu, 
              nastavite pratiti „Društveni Kompas – Prava i Koreni“. Donosićemo vam informacije, savete i primere 
              uspešnih slučajeva kako bismo zajedno stvorili okruženje u kojem svako biće, ljudsko ili životinjsko, 
              ima pravo na dostojanstven život.
            </p>
          </div>
        </div>
        <InteractiveArt />
      </section>

      {/* SEKCIJA VODIČI, ANALIZE I PRIJAVE */}
      <section id="guideSection" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Vodiči, Analize i Prijave</h2>
          <p className="text-center text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Na ovoj stranici možete pronaći praktične vodiče, analize i mogućnost da prijavite problem u vašoj zajednici.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <motion.div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition flex-1" whileHover={{ scale: 1.02 }}>
              <h3 className="text-2xl font-bold text-green-500 mb-2">Vodiči i Saveti</h3>
              <p className="text-gray-700">
                Saznajte kako da zaštitite svoja prava, prirodu i životinje u ruralnim sredinama.
              </p>
            </motion.div>
            <motion.div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition flex-1" whileHover={{ scale: 1.02 }}>
              <h3 className="text-2xl font-bold text-green-500 mb-2">Analize i Istraživanja</h3>
              <p className="text-gray-700">
                Čitajte najnovije analize i istraživanja o zakonima i problemima koji pogađaju sela.
              </p>
            </motion.div>
          </div>
          <div className="mt-8 text-center">
            <motion.a 
              href="/vodic.pdf" 
              download 
              className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
              whileHover={{ scale: 1.05 }}
            >
              Preuzmi vodič
            </motion.a>
          </div>
        </div>
        <InteractiveArt />
      </section>

      {/* SEKCIJA PRIJAVE PROBLEMA */}
      <section id="problemForm" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Prijavite problem u vašoj zajednici</h2>
          <p className="text-center text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Imate problem u selu? Prijavite ga ovde i dobijte informacije o rešenjima.
          </p>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <form>
              <div className="mb-4">
                <label htmlFor="problem" className="block text-gray-700 mb-2">Opis problema</label>
                <textarea
                  id="problem"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-300"
                  placeholder="Opišite problem"
                  rows={4}
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700 mb-2">Kategorija</label>
                <select
                  id="category"
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:border-green-300"
                >
                  <option value="">Izaberite kategoriju</option>
                  <option value="prava">Prava ljudi</option>
                  <option value="zivotinje">Zaštita životinja</option>
                  <option value="ekologija">Ekološki problemi</option>
                  <option value="društvo">Društveni izazovi</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 mb-2">Slika (opciono)</label>
                <input
                  type="file"
                  id="image"
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:border-green-300"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-green-300 text-gray-800 rounded-full hover:bg-green-400 transition"
                whileHover={{ scale: 1.05 }}
              >
                Pošalji prijavu
              </motion.button>
            </form>
          </div>
        </div>
        <InteractiveArt />
      </section>
    </div>
  );
}
