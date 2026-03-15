"use client";
import { useEffect, useRef, useState } from "react";

const testimonials = [
    {
        initials: "MW",
        name: "Marek Wiśniewski",
        role: "Firma budowlana",
        stars: 5,
        text: "W 3 dni mieliśmy decyzję i dwie koparki gąsienicowe na budowie. Eksperci znają się na maszynach budowlanych – nie trzeba tłumaczyć, co to harwester ani jak wycenić żuraw wieżowy.",
        saved: "Koparki za 1 200 000 PLN",
    },
    {
        initials: "TG",
        name: "Tomasz Grabowski",
        role: "Firma drogowa",
        stars: 5,
        text: "Rozkładacz asfaltu i dwa walce drogowe – myślałem, że to będzie biurokratyczny koszmar. Znaleziono ofertę i pomożono ze wszystkimi formalnościami. Polecam każdej firmie drogowej.",
        saved: "Oszczędność: 87 000 PLN",
    },
    {
        initials: "PJ",
        name: "Piotr Jabłoński",
        role: "Gospodarstwo rolne",
        stars: 5,
        text: "Kombajn zbożowy i sieczkarnia samojezdna – dwa wielkie zakupy w jednym sezonie. Dzięki sezonowemu harmonogramowi rat płacę mniej w zimie. Nie wiedziałem, że tak można.",
        saved: "Kombajn za 950 000 PLN",
    },
    {
        initials: "KN",
        name: "Katarzyna Nowak",
        role: "Terminal kontenerowy",
        stars: 5,
        text: "Reach stacker i suwnica kontenerowa – to nie jest standardowy leasing. Eksperci mają kontakty z leasingodawcami specjalizującymi się w sprzęcie portowym. Bardzo profesjonalne podejście.",
        saved: "Sprzęt portowy za 3 200 000 PLN",
    },
    {
        initials: "AK",
        name: "Andrzej Kowalczyk",
        role: "Przedsiębiorstwo górnicze",
        stars: 5,
        text: "Ładowarka kołowa i wiertnica – w branży górniczej trudno o leasing, bo banki boją się specjalistycznego sprzętu. Tu nie było żadnego problemu. Znaleźli finansowanie w 5 dni.",
        saved: "Sprzęt górniczy za 2 400 000 PLN",
    },
    {
        initials: "RP",
        name: "Robert Pająk",
        role: "Firma wyburzeniowa",
        stars: 5,
        text: "Koparka z młotem wyburzeniowym i chwytakiem – niestandardowe wyposażenie zawsze sprawiało problemy w leasingu. Tutaj podeszli do tematu indywidualnie i znaleźli rozwiązanie.",
        saved: "Oszczędność: 124 000 PLN",
    },
    {
        initials: "MZ",
        name: "Michał Zając",
        role: "Przedsiębiorstwo leśne",
        stars: 5,
        text: "Harwester i forwarder – sprzęt leśny to nisza, ale doradca wiedział dokładnie, jakie dokumenty przygotować i którzy leasingodawcy akceptują maszyny do pracy w terenie.",
        saved: "Harwester za 1 650 000 PLN",
    },
    {
        initials: "EW",
        name: "Elżbieta Wróbel",
        role: "Firma rolnicza",
        stars: 5,
        text: "Opryskiwacz samojezdny i siewnik precyzyjny w pakiecie. Cały proces zajął tydzień, a rata dopasowana do cyklu zbiorów. Wreszcie ktoś rozumie, jak działa sezonowość w rolnictwie.",
        saved: "Maszyny rolnicze za 780 000 PLN",
    },
    {
        initials: "DL",
        name: "Damian Lewandowski",
        role: "Operator żurawi",
        stars: 5,
        text: "Żuraw samojezdny 100-tonowy – to nie jest coś, co łatwo sfinansować. Leasing-Premium zna specyfikę ciężkiego transportu i pomógł nam rozliczyć leasing na projekt budowlany.",
        saved: "Żuraw za 4 500 000 PLN",
    },
    {
        initials: "BK",
        name: "Barbara Kaczmarek",
        role: "Firma komunalna",
        stars: 5,
        text: "Zamiatarka uliczna i śmieciarka z tylnym załadunkiem – sprzęt komunalny ma swoje wymagania. Dostaliśmy ofertę uwzględniającą dotacje unijne, o których sami byśmy nie pomyśleli.",
        saved: "Sprzęt komunalny za 690 000 PLN",
    },
    {
        initials: "SW",
        name: "Stanisław Wierzbicki",
        role: "Firma transportowa",
        stars: 5,
        text: "Naczepa niskopodwoziowa i ciągnik siodłowy do transportu maszyn – bardzo specyficzny sprzęt. Dostaliśmy finansowanie z możliwością rozliczenia kosztów na zlecenia. Świetna obsługa.",
        saved: "Zestaw transportowy za 560 000 PLN",
    },
    {
        initials: "JM",
        name: "Jacek Mazur",
        role: "Stocznia rzeczna",
        stars: 5,
        text: "Dźwig pływający i pogłębiarka – nikt wcześniej nie chciał tego finansować. Leasing-Premium dotarł do instytucji specjalizującej się w sprzęcie wodnym. Umowę podpisaliśmy w 10 dni.",
        saved: "Sprzęt wodny za 5 800 000 PLN",
    },
    {
        initials: "HN",
        name: "Henryk Nowicki",
        role: "Cementownia",
        stars: 5,
        text: "Mieszarka do betonu i pompa do betonu – zakup na dużą inwestycję deweloperską. Leasing operacyjny z wykupem za 1 zł, dokładnie tak jak potrzebowaliśmy dla celów podatkowych.",
        saved: "Oszczędność: 210 000 PLN",
    },
    {
        initials: "AO",
        name: "Anna Ostrowska",
        role: "Firma rekultywacyjna",
        stars: 5,
        text: "Spycharka gąsienicowa i kompaktor gruntu – projekt rekultywacji wymagał szybkiego działania. Decyzja leasingowa w 48 godzin. Nie sądziłam, że to możliwe przy sprzęcie tej klasy.",
        saved: "Sprzęt za 1 100 000 PLN",
    },
    {
        initials: "GB",
        name: "Grzegorz Bąk",
        role: "Zakład energetyczny",
        stars: 5,
        text: "Podnośnik koszowy na podwoziu ciężarowym i agregat prądotwórczy – sprzęt energetyczny ma certyfikaty UDT, co komplikuje leasing. Tu nikt nie robił z tego problemu.",
        saved: "Sprzęt energetyczny za 890 000 PLN",
    },
    {
        initials: "LW",
        name: "Leszek Woźniak",
        role: "Firma hutnicza",
        stars: 5,
        text: "Suwnica bramowa 50 ton – bez Leasing-Premium w życiu byśmy tego nie sfinansowali w normalnym banku. Znają każdy niuans leasingu suwnicy i dźwigów przemysłowych.",
        saved: "Suwnica za 2 900 000 PLN",
    },
    {
        initials: "ZP",
        name: "Zbigniew Pawlak",
        role: "Firma wiertnicza",
        stars: 5,
        text: "Wiertnica horyzontalna do przeskoków – niszowy sprzęt do prac podziemnych. Doradca sam zadzwonił do trzech leasingodawców i wynegocjował warunki. Poczułem się jak VIP.",
        saved: "Wiertnica za 1 350 000 PLN",
    },
    {
        initials: "MK",
        name: "Monika Kowalska",
        role: "Centrum logistyczne",
        stars: 5,
        text: "Cztery wózki widłowe wysokiego składowania i system regałów automatycznych – finansowanie całego pakietu w jednej umowie. Obsługa ekspresowa, zero stresu.",
        saved: "Wyposażenie za 480 000 PLN",
    },
    {
        initials: "CR",
        name: "Czesław Rutkowski",
        role: "Kopalnia kruszywa",
        stars: 5,
        text: "Kruszarka szczękowa i przesiewacz wibracyjny – sprzęt wydobywczy to wyzwanie dla każdego leasingodawcy. Tutaj mają gotowe ścieżki i wiedzą, jak to przeprowadzić sprawnie.",
        saved: "Linia kruszenia za 3 100 000 PLN",
    },
];

export default function TestimonialsSection() {
    const trackRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const positionRef = useRef(0);
    const rafRef = useRef(null);
    const speedPx = 0.5;

    const doubled = [...testimonials, ...testimonials];

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const step = () => {
            if (!isPaused) {
                positionRef.current += speedPx;
                const halfWidth = track.scrollWidth / 2;
                if (positionRef.current >= halfWidth) {
                    positionRef.current = 0;
                }
                track.style.transform = `translateX(-${positionRef.current}px)`;
            }
            rafRef.current = requestAnimationFrame(step);
        };

        rafRef.current = requestAnimationFrame(step);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [isPaused]);

    return (
        <section className="section-testimonials" id="opinie">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Opinie klientów</span>
                    <h2 className="section-title">Co mówią nasi klienci?</h2>
                    <p className="section-subtitle">
                        Ponad 1 800 firm sfinansowało ciężki sprzęt przez Leasing-Premium. Oto kilka historii.
                    </p>
                </div>
            </div>

            <div
                className="testimonials-carousel-viewport"
                style={{ overflow: "hidden", width: "100%", cursor: "grab" }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    ref={trackRef}
                    className="testimonials-carousel-track"
                    style={{
                        display: "flex",
                        gap: "1.5rem",
                        width: "max-content",
                        padding: "1rem 0 2rem",
                        willChange: "transform",
                    }}
                >
                    {doubled.map((t, i) => (
                        <div
                            key={i}
                            className="testimonial-card"
                            style={{ minWidth: "340px", maxWidth: "340px", flexShrink: 0 }}
                        >
                            <QuoteIcon />
                            <div className="testimonial-stars">
                                {Array.from({ length: t.stars }).map((_, j) => (
                                    <StarIcon key={j} />
                                ))}
                            </div>
                            <p className="testimonial-content">"{t.text}"</p>
                            <div className="testimonial-saved">{t.saved}</div>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">{t.initials}</div>
                                <div>
                                    <div className="testimonial-name">{t.name}</div>
                                    <div className="testimonial-role">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .testimonials-carousel-viewport {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
        }
      `}</style>
        </section>
    );
}

function QuoteIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(145 62% 42% / 0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/></svg>;
}

function StarIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="rgb(244,168,37)" stroke="rgb(244,168,37)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>;
}