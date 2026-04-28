"use client";

import { motion } from "framer-motion";

export default function PensiuneaDanila() {
  const galleryImages = [
    {
      src: "https://www.romaniatonight.ro/sites/default/files/styles/slider_carousel/public/hotels/hotels/agropensiunea-danila-poiana-ilvei-07.jpg?itok=y_SqXMgv",
      alt: "Living Room",
    },
    {
      src: "https://frankfurt.apollo.olxcdn.com/v1/files/qkula89yeg0l2-RO/image;s=1000x700",
      alt: "Dining Area",
    },
    {
      src: "https://frankfurt.apollo.olxcdn.com/v1/files/6fcq1foaj3iz2-RO/image;s=1000x700",
      alt: "Nature View",
    },
  ];

  return (
    <div className="bg-neutral-950 text-white font-sans">
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-[url('https://frankfurt.apollo.olxcdn.com/v1/files/5txpxsx82mut2-RO/image;s=1000x700')] bg-cover bg-[center_top] md:bg-center relative">
        <div className="absolute inset-0 bg-black/40" />
        <div className="bg-black/60 p-6 md:p-10 rounded-2xl relative z-10 backdrop-blur-sm border border-white/10 max-w-lg md:max-w-none">
          <h1 className="text-4xl md:text-7xl font-bold mb-6">Agropensiunea Dănilă</h1>
          <p className="text-lg md:text-2xl mb-8">Aici unde cerul sărută pământul în Poiana Ilvei</p>
          <a
            href="https://wa.me/40744400770?text=Bun%C4%83%20ziua!%20Doresc%20s%C4%83%20fac%20o%20rezervare%20la%20Agropensiunea%20D%C4%83nil%C4%83."
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg px-8 py-6 rounded-2xl bg-white text-black hover:bg-neutral-200 cursor-pointer active:scale-95 inline-block"
          >
            Rezervă acum
          </a>
        </div>
      </section>

      {/* DESPRE */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Un colț de rai în Poiana Ilvei</h2>
            <p className="text-lg leading-relaxed text-neutral-300 mb-6">
              Agropensiunea Dănilă nu este doar o unitate de cazare, ci o destinație în sine. Situată în pitoreasca localitate Poiana Ilvei, pensiunea noastră îmbină tradiția locală cu facilitățile moderne.
            </p>
            <p className="text-lg leading-relaxed text-neutral-300">
              Oaspeții noștri spun că este "locul de unde nu îți mai vine să pleci" — locul ideal unde liniștea naturii îți resetează sufletul și îți încarcă bateriile.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
            <img 
              src="https://frankfurt.apollo.olxcdn.com/v1/files/6fcq1foaj3iz2-RO/image;s=1000x700" 
              alt="Vedere de la Agropensiunea Danila"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* BENEFICII */}
      <section className="py-24 bg-neutral-900 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">De ce să ne alegi?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Confort premium",
                desc: "Camere spațioase, fiecare cu baie proprie, mobilier modern și o curățenie impecabilă, gândite pentru odihna ta.",
                img: "https://frankfurt.apollo.olxcdn.com/v1/files/in50gpslcujc2-RO/image;s=1000x700"
              },
              {
                title: "Natură & liniște",
                desc: "Aer curat de munte, peisaje de vis și o liniște deplină, departe de agitația și zgomotul orașelor mari.",
                img: "https://frankfurt.apollo.olxcdn.com/v1/files/nutnv85sfv301-RO/image;s=1000x700"
              },
              {
                title: "Utilități moderne",
                desc: "Suntem pregătiți pentru viitor: oferim stație de încărcare pentru mașini electrice (EV), Wi-Fi de mare viteză și facilități complete.",
                img: "https://photos.plugshare.com/photos/1148362.jpg"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-neutral-800 rounded-3xl overflow-hidden border border-neutral-700 hover:border-neutral-500 transition-colors"
              >
                <div className="h-48 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-neutral-300 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Galerie Foto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden h-72 border border-neutral-800 shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALE */}
      <section className="py-24 bg-neutral-950 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Ce spun oaspeții noștri</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Locația este un adevărat colț de rai. Totul perfect la Agropensiunea Dănilă, de la curățenie la peisajul superb din Poiana Ilvei.",
            "Liniște deplină, aer curat și o atmosferă care îți resetează sufletul. Gazdele sunt de nota 10, extrem de primitoare.",
            "Condiții de cazare excelente, camere mari și curate. Stația de încărcare EV a fost un bonus major pentru noi.",
            "Foișorul este generos și perfect pentru momente de neuitat cu prietenii. Revenim cu drag de fiecare dată.",
          ].map((text, i) => (
            <div key={i} className="p-8 bg-neutral-900 rounded-3xl border border-neutral-800 italic relative">
              <span className="absolute top-4 left-4 text-6xl text-neutral-800 font-serif leading-none">“</span>
              <p className="text-neutral-300 relative z-10">“{text}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ești pregătit pentru relaxare totală?</h2>
        <p className="text-xl mb-12 text-neutral-400 max-w-2xl mx-auto">Te așteptăm la Agropensiunea Dănilă să descoperi farmecul Transilvaniei autentice.</p>
        <a
            href="https://wa.me/40744400770?text=Bun%C4%83%20ziua!%20Doresc%20s%C4%83%20fac%20o%20rezervare%20la%20Agropensiunea%20D%C4%83nil%C4%83."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl px-12 py-8 rounded-3xl bg-white text-black hover:bg-neutral-200 cursor-pointer active:scale-95 shadow-xl transition-all hover:scale-105 font-bold inline-block"
          >
            Rezervă acum
          </a>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-neutral-500 border-t border-neutral-900">
        <p className="mb-2">© {new Date().getFullYear()} Agropensiunea Dănilă · Poiana Ilvei · România</p>
        <p className="text-sm">Vacanța ta de vis în inima naturii</p>
      </footer>
    </div>
  );
}
