"use client";
import { useState } from "react";

export default function CTASection() {
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("idle"); // idle | loading | success | error

    const handlePhoneChange = (e) => {
        const val = e.target.value.replace(/\D/g, "").slice(0, 9);
        setPhone(val);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (phone.length !== 9) return;
        setStatus("loading");

        try {
            const res = await fetch("/api/number", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone}),
            });

            if (res.ok) {
                setStatus("success");
                setPhone("");
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
        <section className="section-cta" id="kontakt">
            <div className="container">
                <div className="cta-card">
                    <div className="cta-content">
                        <span className="cta-tag">Kontakt</span>
                        <h2 className="cta-headline">
                            Skontaktuj się z nami<br />
                        </h2>
                        <p className="cta-sub">
                            Nasz ekspert branżowy przygotuje zestawienie najlepszych ofert. Koparki, żurawie, kombajny, suwnice – znamy każdy rodzaj sprzętu.
                        </p>



                        {status === "success" ? (
                            <div style={{
                                display: "flex", alignItems: "center", gap: "0.75rem",
                                background: "hsl(145 62% 42% / 0.12)",
                                border: "1px solid hsl(145 62% 42% / 0.3)",
                                borderRadius: "0.75rem", padding: "1rem 1.25rem",
                                width: "100%", maxWidth: "30rem",
                            }}>
                                <span style={{ fontSize: "1.5rem" }}>✓</span>
                                <div>
                                    <div style={{ fontWeight: 700, color: "hsl(145 62% 30%)", fontSize: "0.9rem" }}>
                                        Numer zapisany!
                                    </div>
                                    <div style={{ fontSize: "0.8rem", color: "hsl(218 15% 45%)" }}>
                                        Oddzwonimy do Ciebie wkrótce.
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <form
                                className="cta-actions"
                                onSubmit={handleSubmit}
                                style={{ flexDirection: "column", alignItems: "stretch", gap: "0.75rem", width: "100%", maxWidth: "30rem" }}
                            >
                                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                                    <input
                                        type="tel"
                                        placeholder="500000000"
                                        className="form-input"
                                        required
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        inputMode="numeric"
                                        pattern="\d{9}"
                                        minLength={9}
                                        maxLength={9}
                                        style={{ flex: "1 1 0", minWidth: "160px" }}
                                    />
                                    <button
                                        type="submit"
                                        className="cta-btn-primary"
                                        disabled={status === "loading" || phone.length !== 9}
                                        style={{ opacity: (status === "loading" || phone.length !== 9) ? 0.75 : 1 }}
                                    >
                                        {status === "loading" ? (
                                            <span>Wysyłanie...</span>
                                        ) : (
                                            <>
                                                <span>Zostaw swój numer</span>
                                                <ArrowRightIcon />
                                            </>
                                        )}
                                    </button>
                                </div>

                                {phone.length > 0 && phone.length < 9 && (
                                    <p style={{
                                        fontSize: "0.8rem", color: "#b45309",
                                        background: "#fffbeb", padding: "0.5rem 0.75rem",
                                        borderRadius: "0.5rem", margin: 0,
                                    }}>
                                        Numer telefonu musi mieć dokładnie 9 cyfr ({phone.length}/9)
                                    </p>
                                )}

                                {status === "error" && (
                                    <p style={{
                                        fontSize: "0.8rem", color: "#dc2626",
                                        background: "#fef2f2", padding: "0.5rem 0.75rem",
                                        borderRadius: "0.5rem", margin: 0,
                                    }}>
                                        Coś poszło nie tak. Zadzwoń bezpośrednio: 505-505-327
                                    </p>
                                )}
                            </form>
                        )}

                        <p className="cta-disclaimer">
                            Infolinia czynna pn.–pt. 8:30–16:30 · Bezpłatna konsultacja branżowa
                        </p>
                    </div>
                    <div className="cta-decoration" aria-hidden="true" />
                </div>
            </div>
        </section>
    );
}

function PhoneIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(145 62% 42%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
}
function MailIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(145 62% 42%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
}
function ClockIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(145 62% 42%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}
function ArrowRightIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
}