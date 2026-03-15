"use client";
import { useState } from "react";


const posts = [
  {
    tag: "Podstawy",
    tagClass: "blog-tag-blue",
    readTime: "5 min czytania",
    title: "Leasing koparki – jak to działa krok po kroku?",
    desc: "Od wyceny maszyny do odbioru na placu budowy. Wyjaśniamy cały proces leasingu maszyn budowlanych.",
    content: {
      intro: "Leasing koparki to jeden z najpopularniejszych sposobów finansowania sprzętu budowlanego w Polsce. Poniżej znajdziesz pełny przewodnik – od pierwszego kontaktu z brokerem do momentu, gdy koparka zaczyna pracować na Twojej budowie.",
      steps: [
        {
          title: "KROK 1: Wybór maszyny i wycena",
          text: "Określasz, jakiej koparki potrzebujesz – gąsienicowej, kołowej, minikoparki. Broker leasingowy (np. leasing-premium.pl) pomaga ustalić wartość rynkową maszyny i zbiera oferty od 40+ leasingodawców.",
          items: ["Marka i model koparki", "Rok produkcji i stan techniczny", "Wartość netto maszyny"],
        },
        {
          title: "KROK 2: Złożenie wniosku leasingowego",
          text: "Wypełniasz wniosek online lub przez brokera. Potrzebne dokumenty to zwykle:",
          items: ["KRS lub CEIDG", "Sprawozdania finansowe (ostatnie 1–2 lata)", "Wysokość wkładu własnego"],
          tip: "Przy uproszczonej procedurze często nie trzeba pełnych sprawozdań finansowych – decyzja może być w 24–48h.",
        },
        {
          title: "KROK 3: Decyzja i oferta",
          text: "Leasingodawca analizuje: staż firmy, zdolność finansową, historię w BIK/KRD. Otrzymujesz:",
          items: ["Wysokość raty", "Wymagany wkład własny (np. 10–20%)", "Wykup końcowy (np. 1%–20%)", "Harmonogram spłat"],
        },
        {
          title: "KROK 4: Podpisanie umowy",
          text: "Po akceptacji warunków: podpisujesz umowę leasingową, opłacasz wkład własny, leasingodawca opłaca fakturę sprzedawcy.\n\nOd tego momentu: 👉 Koparka trafia do Ciebie 👉 Możesz nią pracować i zarabiać",
        },
        {
          title: "KROK 5: Spłata rat leasingowych",
          text: "Płacisz miesięczne raty przez ustalony okres (zwykle 3–5 lat). Korzyści:",
          items: ["Rata w kosztach uzyskania przychodu", "VAT odliczany zgodnie z zasadami podatkowymi", "Brak zamrażania całej gotówki"],
        },
        {
          title: "KROK 6: Wykup koparki",
          text: "Po zakończeniu umowy masz opcję: wykupić sprzęt (np. za 1–5% wartości), przedłużyć leasing na nowych warunkach lub wymienić na nowszy model.",
        },
      ],
    },
  },
  {
    tag: "Porównanie",
    tagClass: "blog-tag-purple",
    readTime: "7 min czytania",
    title: "Leasing czy kredyt na maszynę ciężką? Co się bardziej opłaca?",
    desc: "Analizujemy korzyści podatkowe, koszty TCO i elastyczność obu rozwiązań dla firm budowlanych i rolniczych.",
    content: {
      intro: "Przedsiębiorcy często stają przed dylematem: wziąć leasing czy kredyt na maszynę? Odpowiedź zależy od sytuacji firmy, ale w większości przypadków leasing wygrywa dla działalności operacyjnej.",
      steps: [
        {
          title: "Leasing operacyjny – główne zalety",
          text: "To najpopularniejszy wybór dla firm budowlanych i rolniczych:",
          items: ["Cała rata (kapitał + odsetki) wchodzi w koszty", "VAT od rat odliczany co miesiąc", "Maszyna nie obciąża bilansu firmy", "Prostsze procedury niż kredyt bankowy"],
        },
        {
          title: "Kredyt – kiedy ma sens?",
          text: "Kredyt może być lepszy gdy:",
          items: ["Chcesz być właścicielem maszyny od razu", "Masz bardzo dobrą historię kredytową i niskie oprocentowanie", "Planujesz maszynę jako środek trwały w bilansie"],
        },
        {
          title: "Porównanie kosztów TCO",
          text: "Dla koparki za 800 000 PLN na 5 lat różnica w całkowitym koszcie posiadania (TCO) między leasingiem a kredytem wynosi zwykle 30 000–80 000 PLN na korzyść leasingu – głównie dzięki oszczędnościom podatkowym.",
          tip: "Przy podatku CIT 19% firma może zaoszczędzić nawet 100 000 PLN na podatku przy leasingu maszyny za 1 mln PLN.",
        },
        {
          title: "Szybkość decyzji",
          text: "Leasing: decyzja w 24–72h. Kredyt inwestycyjny: 2–6 tygodni procedur bankowych.",
          items: ["Leasing: minimalny wkład własny (0–20%)", "Kredyt: często 20–30% wymagane przez bank"],
        },
      ],
    },
  },
  {
    tag: "Rolnictwo",
    tagClass: "blog-tag-green",
    readTime: "4 min czytania",
    title: "Leasing kombajnu zbożowego – sezonowe harmonogramy spłat",
    desc: "Jak dopasować raty leasingu do cyklu produkcyjnego? Sprawdź, jak płacić mniej w zimie.",
    content: {
      intro: "Kombajny zbożowe to maszyny pracujące intensywnie przez kilka tygodni w roku, a stojące przez resztę czasu. Leasing z sezonowym harmonogramem rat pozwala dopasować płatności do realnych przychodów z gospodarstwa.",
      steps: [
        {
          title: "Czym jest sezonowy harmonogram rat?",
          text: "To specjalna struktura umowy leasingowej, w której wysokość miesięcznych rat zmienia się w zależności od pory roku:",
          items: ["Wyższe raty: czerwiec–wrzesień (żniwa, duże przychody)", "Niższe raty: październik–maj (poza sezonem)"],
          tip: "Różnica między ratą sezonową a standardową może wynosić nawet 60–70% – to ogromna ulga dla płynności gospodarstwa zimą.",
        },
        {
          title: "Dla jakich maszyn rolniczych to działa?",
          items: ["Kombajny zbożowe i buraczane", "Sieczkarnie samojezdne", "Opryskiwacze samojezdne", "Ciągniki wysokiej mocy"],
        },
        {
          title: "Jak wygląda przykładowy harmonogram?",
          text: "Dla kombajnu za 1 200 000 PLN, okres 5 lat, wkład własny 15%:",
          items: ["Raty letnie (VI–IX): ok. 22 000 PLN/mies.", "Raty zimowe (X–V): ok. 8 000 PLN/mies.", "Rata standardowa równa: ok. 14 500 PLN/mies."],
        },
        {
          title: "Jak uzyskać taki harmonogram?",
          text: "Nie każdy leasingodawca oferuje tę opcję standardowo. Broker leasingowy (jak leasing-premium.pl) wie, które banki i firmy leasingowe mają w ofercie harmonogramy sezonowe dla rolnictwa i wynegocjuje najlepsze warunki.",
        },
      ],
    },
  },
  {
    tag: "Górnictwo",
    tagClass: "blog-tag-teal",
    readTime: "5 min czytania",
    title: "Leasing maszyn górniczych i wydobywczych – co musisz wiedzieć",
    desc: "Koparki odkrywkowe, wiertnice, kombajny ścianowe – specyfika finansowania sprzętu górniczego.",
    content: {
      intro: "Maszyny górnicze to jedna z najtrudniejszych kategorii sprzętu do sfinansowania – ze względu na wysoką wartość, specjalistyczne przeznaczenie i ryzyko branżowe. Jednak z odpowiednim brokerem jest to możliwe.",
      steps: [
        {
          title: "Dlaczego leasing maszyn górniczych jest trudniejszy?",
          items: ["Wartości jednostkowe od 2 do nawet 50 mln PLN", "Wąski rynek wtórny – trudna wycena zabezpieczenia", "Specjalistyczne zastosowanie = ryzyko dla leasingodawcy", "Często praca w trudnych warunkach (korozja, wibracje)"],
          tip: "Kluczem jest broker z dostępem do leasingodawców specjalizujących się w heavy equipment – nie każdy bank sfinansuje kombajn ścianowy.",
        },
        {
          title: "Jakie maszyny górnicze można wyleasingować?",
          items: ["Koparki odkrywkowe (kołowe i gąsienicowe)", "Wiertnice górnicze i geologiczne", "Kombajny ścianowe i chodnikowe", "Ładowarki podziemne (LHD)", "Wozy odstawcze i transportowe"],
        },
        {
          title: "Wymagane dokumenty",
          text: "Ze względu na skalę finansowania leasingodawcy wymagają:",
          items: ["Pełne sprawozdania finansowe za 2–3 lata", "Biznesplan lub plan eksploatacji złoża", "Dokumentację techniczną maszyny", "Często: dodatkowe zabezpieczenia (hipoteka, poręczenie)"],
        },
        {
          title: "Czas i warunki finansowania",
          text: "Przy dużych maszynach górniczych czas rozpatrzenia wniosku wynosi 2–4 tygodnie. Typowe warunki:",
          items: ["Wkład własny: 20–30%", "Okres leasingu: 3–7 lat", "Wykup: 1–5%", "Oprocentowanie: negocjowane indywidualnie"],
        },
      ],
    },
  },
  {
    tag: "Podatki",
    tagClass: "blog-tag-orange",
    readTime: "6 min czytania",
    title: "Leasing maszyn a podatki – jak maksymalnie skorzystać?",
    desc: "VAT, CIT, amortyzacja – kompleksowy przewodnik po korzyściach podatkowych leasingu ciężkiego sprzętu.",
    content: {
      intro: "Leasing maszyn ciężkich to nie tylko wygodna forma finansowania – to również potężne narzędzie optymalizacji podatkowej. Poznaj wszystkie korzyści, z których możesz skorzystać jako przedsiębiorca.",
      steps: [
        {
          title: "VAT – odliczenie od każdej raty",
          text: "W leasingu operacyjnym maszyn (nie samochodów osobowych) przysługuje pełne odliczenie VAT:",
          items: ["100% VAT od każdej raty leasingowej", "VAT od opłaty wstępnej (wkładu własnego)", "VAT od usług serwisowych w ramach umowy", "Brak limitu jak przy pojazdach osobowych"],
          tip: "Przy racie 20 000 PLN netto odliczasz 4 600 PLN VAT miesięcznie – to 55 200 PLN rocznie z powrotem w kieszeni firmy.",
        },
        {
          title: "CIT/PIT – rata w kosztach uzyskania przychodu",
          text: "W leasingu operacyjnym całość raty (część kapitałowa + odsetkowa) stanowi koszt uzyskania przychodu. Przy leasingu finansowym w koszty wchodzą tylko odsetki i amortyzacja.",
          items: ["Leasing operacyjny: cała rata = koszt", "Leasing finansowy: odsetki + amortyzacja = koszt", "Opłata wstępna może być kosztem jednorazowym lub rozłożonym"],
        },
        {
          title: "Amortyzacja przy leasingu finansowym",
          text: "Jeśli wybierzesz leasing finansowy, maszynę wpisujesz do ewidencji środków trwałych i amortyzujesz. Dla maszyn budowlanych standardowa stawka amortyzacji wynosi 14–20% rocznie.",
          tip: "Przy nowych maszynach możesz zastosować amortyzację jednorazową do 100 000 EUR rocznie – szczególnie korzystne dla małych firm.",
        },
        {
          title: "Co wybrać – leasing operacyjny czy finansowy?",
          text: "Dla większości firm budowlanych i rolniczych korzystniejszy jest leasing operacyjny:",
          items: ["Niższy podatek dochodowy (wyższe koszty)", "Maszyna poza bilansem (lepsza płynność finansowa)", "Prostsze rozliczenia księgowe", "Elastyczność przy wymianie sprzętu po zakończeniu umowy"],
        },
      ],
    },
  },
  {
    tag: "Używane",
    tagClass: "blog-tag-orange",
    readTime: "5 min czytania",
    title: "Leasing maszyn używanych – czy to możliwe i opłacalne?",
    desc: "Używana koparka, kombajn z drugiej ręki – jak wyleasingować sprzęt z rynku wtórnego i na co uważać.",
    content: {
      intro: "Nowe maszyny ciężkie kosztują fortunę, a rynek używanego sprzętu kusi niższymi cenami. Czy leasingodawcy finansują używane maszyny? Tak – ale z pewnymi warunkami, które warto znać przed złożeniem wniosku.",
      steps: [
        {
          title: "Jakie maszyny używane można wyleasingować?",
          text: "Większość leasingodawców akceptuje maszyny spełniające określone kryteria:",
          items: ["Wiek maszyny: zazwyczaj do 10–12 lat", "Dobry stan techniczny potwierdzony przeglądem", "Maszyny renomowanych marek (Caterpillar, Komatsu, John Deere)", "Wartość minimalna: zwykle od 50 000–100 000 PLN"],
          tip: "Im starsza maszyna, tym wyższy wymagany wkład własny – dla sprzętu 8–10-letniego może wynosić nawet 30–40%.",
        },
        {
          title: "Wycena i ekspertyza techniczna",
          text: "Przy używanych maszynach leasingodawca zawsze zleca niezależną wycenę. Koszty:",
          items: ["Wycena rzeczoznawcy: 500–2 000 PLN", "Czas wyceny: 3–7 dni roboczych", "Weryfikacja historii serwisowej i numerów seryjnych"],
        },
        {
          title: "Warunki finansowania używanych maszyn",
          items: ["Wkład własny: 15–30% (nowe: 10–20%)", "Okres leasingu: max 3–5 lat (nowe: do 7 lat)", "Oprocentowanie: zwykle o 0,5–1,5% wyższe niż nowe", "Wyższe wymogi dokumentacyjne"],
        },
        {
          title: "Kiedy leasing używanej maszyny ma sens?",
          text: "To dobry wybór gdy:",
          items: ["Potrzebujesz maszyny na krótki projekt (1–2 lata)", "Budżet nie pozwala na nowy sprzęt", "Chcesz przetestować dany model przed zakupem nowego", "Maszyna jest w doskonałym stanie technicznym mimo wieku"],
        },
      ],
    },
  },
  
];

export default function BlogSection() {
  const [activePost, setActivePost] = useState(null);

  return (
    <section className="section-blog" id="blog">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Strefa wiedzy</span>
          <h2 className="section-title">Eksperci od maszyn ciężkich piszą</h2>
          <p className="section-subtitle">Praktyczne artykuły o leasingu ciężkiego sprzętu. Bez lania wody.</p>
        </div>

        <div className="blog-grid">
          {posts.map((p) => (
            <button key={p.title} className="blog-card" onClick={() => setActivePost(p)}>
              <div className="blog-card-inner">
                <div className="blog-card-top">
                  <span className={`blog-tag ${p.tagClass}`}>{p.tag}</span>
                  <span className="blog-read-time">{p.readTime}</span>
                </div>
                <h3 className="blog-title">{p.title}</h3>
                <p className="blog-desc">{p.desc}</p>
                <div className="blog-read-more">
                  <span>Czytaj więcej</span>
                  <ArrowRightIcon />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activePost && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 200,
            background: "rgba(0,0,0,0.6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "1rem",
          }}
          onClick={() => setActivePost(null)}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "0.75rem",
              width: "100%",
              maxWidth: "42rem",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              display: "flex", alignItems: "flex-start", justifyContent: "space-between",
              padding: "1.5rem 1.5rem 0", gap: "1rem",
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <span className={`blog-tag ${activePost.tagClass}`} style={{ width: "fit-content" }}>
                  {activePost.tag}
                </span>
                <h2 style={{
                  fontFamily: "Sora, sans-serif", fontSize: "1.25rem",
                  fontWeight: 700, lineHeight: 1.3, color: "hsl(var(--primary))",
                }}>
                  {activePost.title}
                </h2>
              </div>
              <button
                onClick={() => setActivePost(null)}
                style={{
                  flexShrink: 0, padding: "0.25rem", borderRadius: "0.5rem",
                  color: "hsl(var(--muted-foreground))", background: "none",
                  border: "none", cursor: "pointer", marginTop: "0.25rem",
                }}
              >
                <CloseIcon />
              </button>
            </div>

            <div style={{
              overflowY: "auto", padding: "1rem 1.5rem 1.5rem",
              flex: 1,
            }}>
              <p style={{
                fontSize: "0.9rem", lineHeight: 1.7,
                color: "hsl(var(--muted-foreground))", marginBottom: "1.5rem",
              }}>
                {activePost.content.intro}
              </p>

              {activePost.content.steps.map((step, i) => (
                <div key={i} style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{
                    display: "flex", alignItems: "center", gap: "0.5rem",
                    fontFamily: "Sora, sans-serif", fontSize: "1rem",
                    fontWeight: 700, color: "hsl(var(--primary))",
                    marginBottom: "0.5rem",
                  }}>
                    <span style={{
                      width: "0.75rem", height: "0.75rem", borderRadius: "50%",
                      background: "hsl(var(--accent))", flexShrink: 0, display: "inline-block",
                    }} />
                    {step.title}
                  </h3>

                  {step.text && (
                    <p style={{
                      fontSize: "0.875rem", lineHeight: 1.7,
                      color: "hsl(var(--foreground))", marginBottom: "0.5rem",
                      whiteSpace: "pre-line",
                    }}>
                      {step.text}
                    </p>
                  )}

                  {step.items && (
                    <ul style={{
                      paddingLeft: "1.25rem", display: "flex",
                      flexDirection: "column", gap: "0.25rem", marginBottom: "0.5rem",
                    }}>
                      {step.items.map((item, j) => (
                        <li key={j} style={{
                          fontSize: "0.875rem", lineHeight: 1.6,
                          color: "hsl(var(--foreground) / 0.85)",
                          listStyleType: "disc",
                        }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {step.tip && (
                    <div style={{
                      background: "hsl(var(--accent-light))",
                      borderLeft: "3px solid hsl(var(--accent))",
                      borderRadius: "0.5rem",
                      padding: "0.75rem 1rem",
                      fontSize: "0.875rem", lineHeight: 1.6,
                      color: "hsl(var(--primary))",
                    }}>
                      {step.tip}
                    </div>
                  )}
                </div>
              ))}

              <a
                href="#formularz"
                onClick={() => setActivePost(null)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: "0.5rem", width: "100%",
                  background: "var(--gradient-accent)",
                  color: "#fff", fontWeight: 700, fontSize: "0.9rem",
                  padding: "0.875rem", borderRadius: "0.75rem",
                  textDecoration: "none", marginTop: "0.5rem",
                  boxShadow: "var(--shadow-accent)",
                }}
              >
                Bezpłatna wycena leasingu <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ArrowRightIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
}

function CloseIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
}