export default function TrustSection() {
  const stats = [
    { icon: <TrendingUpIcon />, value: "1 800+", label: "Sfinalizowanych leasingów maszyn ciężkich" },
    { icon: <BuildingIcon />, value: "40+", label: "Współpracujących banków i leasingodawców" },
    { icon: <AwardIcon />, value: "97%", label: "Zadowolonych klientów branżowych" },
    { icon: <UsersIcon />, value: "10 lat", label: "Doświadczenia w finansowaniu ciężkiego sprzętu" },
  ];

  const partners = ["PKO Leasing", "mLeasing", "Pekao Leasing", "VB Leasing", "ING Lease", "BNP Paribas Leasing", "Santander Leasing", "Alior Leasing", "Millennium Leasing", "BOŚ Leasing", "EFL (Europejski Fundusz Leasingowy)", "Toyota Leasing", "PKO Leasing Finance", "Idea Getin Leasing", "Siemens Finance", "Grenke Leasing", "Nest Leasing", "Leaselink", "Coface / finansowanie faktoringowo-leasingowe", "Societe Generale Equipment Finance "];

  return (
    <section className="section-trust">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Dlaczego my?</span>
          <h2 className="section-title">Specjaliści od ciężkiego sprzętu</h2>
          <p className="section-subtitle">
            Rozumiemy specyfikę maszyn ciężkich – ich wartość, czas pracy i amortyzację.
            Pracujemy dla Ciebie, nie dla banku.
          </p>
        </div>

        <div className="trust-stats-grid">
          {stats.map((s) => (
            <div key={s.value} className="trust-stat-card">
              <div className="trust-stat-icon">
                {s.icon}
              </div>
              <div className="trust-stat-value">{s.value}</div>
              <div className="trust-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="trust-partners">
          <p className="trust-partners-label">Współpracujemy z:</p>
          <div className="trust-partners-grid">
            {partners.map((p) => (
              <div key={p} className="trust-partner-pill">{p}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrendingUpIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(145 62% 42%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
}
function BuildingIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(145 62% 42%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>;
}
function AwardIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(145 62% 42%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>;
}
function UsersIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(145 62% 42%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
}
