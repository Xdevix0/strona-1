"use client";
import { useState } from "react";

export default function HeroSection() {
    const [form, setForm] = useState({name: "",  email: "", phone: "" });
    const [status, setStatus] = useState("idle"); // idle | loading | success | error

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === "phone") {
            const digits = value.replace(/\D/g, "").slice(0, 9);
            setForm((p) => ({ ...p, phone: digits }));
        } else {
            setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.phone.length !== 9) return;
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus("success");
                setForm({ machineType: "", name: "", phone: "", email: "", rodo: false });
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <section className="hero-section" id="formularz">
            <div
                className="hero-bg"
                style={{ backgroundImage: `url('http://localhost:4000/images/tn_img6.jpg')` }}
            />
            <div className="hero-overlay" />

            <div className="container" style={{ position: "relative", zIndex: 10 }}>
                <div className="hero-grid">
                    <div className="hero-content animate-fade-up">
                        <div className="hero-badge">
                            <ShieldIcon />
                            <span>Specjaliści od leasingu maszyn ciężkich</span>
                        </div>

                        <h1 className="hero-headline">
                            Leasing ciężkich<br />
                            maszyn i sprzętu<br />
                            <span className="text-accent">bez zbędnych formalności</span>
                        </h1>

                        <p className="hero-subline">
                            Koparki, żurawie, kombajny, suwnice – finansujemy cały ciężki sprzęt.
                            Analiza ofert 40+ leasingodawców. Indywidualne warunki.
                        </p>

                        <div className="hero-trust-row">
                            {["Maszyny od 50 000 PLN", "Indywidualne warunki", "Bezpłatna konsultacja"].map((t) => (
                                <div key={t} className="hero-trust-item">
                                    <span className="text-accent" style={{ fontWeight: 700 }}>✓</span>
                                    <span>{t}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hero-form-card animate-slide-in-right">
                        <div className="hero-form-header">
                            <h2 className="hero-form-title">Dowiedz się więcej o leasingu</h2>
                            <p className={'hero-form-paragraph'}>Wyślij do nas wiadomość, skontaktujemy się z Tobą</p>
                        </div>

                        {status === "success" ? (
                            <div style={{
                                textAlign: "center", padding: "2rem 1rem",
                                display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem",
                            }}>
                                <div style={{
                                    width: "3.5rem", height: "3.5rem", borderRadius: "50%",
                                    background: "hsl(145 62% 42% / 0.15)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: "1.75rem",
                                }}>✓</div>
                                <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, color: "hsl(218 72% 20%)" }}>
                                    Zapytanie wysłane!
                                </h3>
                                <p style={{ fontSize: "0.9rem", color: "hsl(218 15% 45%)", lineHeight: 1.6 }}>
                                    Oddzwonimy do Ciebie w ciągu 24 godzin.<br />
                                    Sprawdź też skrzynkę email – wysłaliśmy potwierdzenie.
                                </p>
                            </div>
                        ) : (
                            <form className="hero-form" onSubmit={handleSubmit}>


                                <div className="form-group">
                                    <label className="form-label">Imię i nazwisko</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Jan Kowalski"
                                        className="form-input"
                                        value={form.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="jan@firma.pl"
                                        className="form-input"
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Telefon *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="500000000"
                                        className="form-input"
                                        required
                                        value={form.phone}
                                        onChange={handleChange}
                                        inputMode="numeric"
                                        pattern="\d{9}"
                                        minLength={9}
                                        maxLength={9}
                                    />
                                    {form.phone.length > 0 && form.phone.length < 9 && (
                                        <p style={{
                                            fontSize: "0.8rem", color: "#b45309",
                                            background: "#fffbeb", padding: "0.4rem 0.65rem",
                                            borderRadius: "0.5rem", margin: "0.4rem 0 0",
                                        }}>
                                            Numer telefonu musi mieć dokładnie 9 cyfr ({form.phone.length}/9)
                                        </p>
                                    )}
                                </div>



                                {status === "error" && (
                                    <p style={{
                                        fontSize: "0.85rem", color: "#dc2626",
                                        background: "#fef2f2", padding: "0.75rem", borderRadius: "0.5rem",
                                        textAlign: "center",
                                    }}>
                                        Coś poszło nie tak. Spróbuj ponownie lub zadzwoń: 505-505-327
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="form-submit-btn"
                                    disabled={status === "loading" || form.phone.length !== 9}
                                    style={{ opacity: (status === "loading" || form.phone.length !== 9) ? 0.75 : 1 }}
                                >
                                    {status === "loading" ? (
                                        <span>Wysyłanie...</span>
                                    ) : (
                                        <>
                                            <span>Bezpłatna wycena</span>
                                            <ArrowRightIcon />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ShieldIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
        </svg>
    );
}

function ArrowRightIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
        </svg>
    );
}