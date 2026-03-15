export default function OfferSection() {
  const machines = [
    {
      category: "Rolnictwo",
      title: "Kombajny i maszyny rolnicze",
      desc: "Ciągniki wysokiej mocy, kombajny zbożowe i buraczane, sieczkarnie, opryskiwacze samojezdne.",
      img: "/images/machine-2-Bol_DGLD.jpg",
    },
    {
      category: "Drogi",
      title: "Maszyny drogowe i niwelacyjne",
      desc: "Równiarki, walce wibracyjne, frezarki drogowe, rozścielacze asfaltu.",
      img: "/images/machine-3-CcLpKU0j.jpg",
    },
    {
      category: "Dźwigi",
      title: "Żurawie i sprzęt dźwigowy",
      desc: "Żurawie samojezdne, wieżowe i bramowe, reach stackery, suwnice kontenerowe.",
      img: "/images/machine-4-0iz70FGE.jpg",
    },
    {
      category: "Leśnictwo",
      title: "Maszyny leśne i przemysłowe",
      desc: "Harwestery, forwardery, skidery, rębaki przemysłowe, prasy hydrauliczne.",
      img: "/images/machine-5-C_9wEm3f.jpg",
    },
    {
      category: "Ładowarki",
      title: "Ładowarki teleskopowe",
      desc: "Ładowarki teleskopowe, kołowe, mini ładowarki do prac budowlanych i rolniczych.",
      img: "/images/machine-6-G9-nCuFB.jpg",
    },
    {
      category: "Przemysł",
      title: "Maszyny przemysłowe",
      desc: "frezarka bramowa, tokarka CNC, wytaczarka pozioma, frezarko-wytaczarka, szlifierka do wałów, strugarka bramowa, dłutownica pionowa, przeciągarka pozioma, wiertarka promieniowa",
      img: "/images/a9a654d1-0170-4184-9ade-b7eb32f6edf0.jpg",
    },
  ]

  return (
    <section className="section-offer" id="oferta">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Nasza oferta</span>
          <h2 className="section-title">Leasing ciężkich maszyn – każda branża</h2>
          <p className="section-subtitle">
            Budownictwo, rolnictwo, leśnictwo, górnictwo, przemysł, porty – mamy rozwiązanie dla każdej branży.
          </p>
        </div>

        <div className="portfolio-grid">
          {machines.map((m) => (
            <div key={m.title} className="portfolio-item">
              <div className="portfolio-img-wrap">
                <img src={m.img} alt={m.title} className="portfolio-img" loading="lazy" />
                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-content">
                    <div className="portfolio-category">{m.category}</div>
                    <h3 className="portfolio-title">{m.title}</h3>
                    <p className="portfolio-desc">{m.desc}</p>
                    <a href="#formularz" className="portfolio-cta">
                      <span>Bezpłatna wycena</span>
                      <ArrowRightIcon />
                    </a>
                  </div>
                </div>
                {m.tag && <div className="portfolio-tag portfolio-tag-default">{m.tag}</div>}
              </div>
              <div className="portfolio-footer">
                <span className="portfolio-footer-category">{m.category}</span>
                <h3 className="portfolio-footer-title">{m.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}
