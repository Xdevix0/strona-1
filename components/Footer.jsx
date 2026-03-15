export default function Footer() {
  const offerLinks = [
    "Leasing maszyn budowlanych",
    "Leasing maszyn drogowych",
    "Leasing maszyn rolniczych",
    "Leasing maszyn leśnych",
    "Leasing maszyn górniczych",
    "Leasing sprzętu portowego",
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-l">L</div>
              <span className="footer-logo-text">leasing-premium</span>
              <span className="footer-logo-dot">.pl</span>
            </div>
            <p className="footer-tagline">
              Niezależny broker leasingowy specjalizujący się w ciężkich maszynach budowlanych, rolniczych, leśnych, górniczych i portowych. Porównujemy oferty 40+ banków.
            </p>
            <div className="footer-contact-items">
              <a href="tel:+48505505327" className="footer-contact-item">
                <PhoneIcon /> <span>505-505-327</span>
              </a>
              <a href="mailto:biuro@leasing-premium.pl" className="footer-contact-item">
                <MailIcon /> <span>biuro@leasing-premium.pl</span>
              </a>
              <div className="footer-contact-item">
                <ClockIcon />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>Godziny pracy</span>
                  <span style={{ opacity: 0.75 }}>Poniedziałek – Piątek</span>
                  <span style={{ opacity: 0.75 }}>8:30 – 16:30</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Oferta</h4>
            <ul className="footer-col-links">
              {offerLinks.map((l) => (
                <li key={l}><a href="#" className="footer-link">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">
            © 2026 leasing-premium.pl – Wszelkie prawa zastrzeżone
          </p>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
}
function MailIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
}
function ClockIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}
