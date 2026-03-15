"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Oferta", href: "#oferta" },
    { label: "Kalkulator", href: "#kalkulator" },
    { label: "Opinie", href: "#opinie" },
    { label: "Blog", href: "#blog" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <>
      <nav className="nav-wrapper">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4rem" }}>
            <Link href="#" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
              <div className="nav-logo-icon">
                <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "hsl(145 62% 42%)" }}>L</span>
              </div>
              <div>
                <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: "1.125rem", color: "hsl(var(--primary))" }}>leasing-premium</span>
                <span style={{ fontFamily: "Sora, sans-serif", fontWeight: 700, fontSize: "1.125rem", color: "hsl(var(--accent))" }}>.pl</span>
              </div>
            </Link>

            <div style={{ display: "none", alignItems: "center", gap: "2rem" }} className="desktop-nav">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
              ))}
            </div>

            <div style={{ display: "none", alignItems: "center", gap: "1rem" }} className="desktop-nav">
              <a href="tel:+48505505327" className="nav-phone">
                <PhoneIcon />
                <span>505-505-327</span>
              </a>
              <a href="#formularz" className="btn-cta-nav">Bezpłatna wycena</a>
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              className="hamburger-btn"
              aria-label="Menu"
              style={{ padding: "0.5rem", color: "hsl(var(--primary))" }}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute", top: "1rem", right: "1rem",
              padding: "0.5rem", color: "hsl(var(--primary))"
            }}
            aria-label="Zamknij"
          >
            <CloseIcon />
          </button>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="mobile-menu-link" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              href="tel:+48505505327"
              className="mobile-menu-link"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "hsl(var(--primary))" }}
              onClick={() => setMenuOpen(false)}
            >
              <PhoneIcon /> 505-505-327
            </a>
            <div style={{ paddingTop: "1rem" }}>
              <a
                href="#formularz"
                className="btn-cta-nav"
                style={{ width: "100%", justifyContent: "center", display: "flex" }}
                onClick={() => setMenuOpen(false)}
              >
                Bezpłatna wycena
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .hamburger-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12"/>
      <line x1="4" x2="20" y1="6" y2="6"/>
      <line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  );
}
