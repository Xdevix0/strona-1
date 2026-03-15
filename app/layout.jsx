import "./globals.css";

export const metadata = {
  title: "leasing-premium.pl – Leasing Maszyn Ciężkich | Koparki, Żurawie, Kombajny",
  description: "Leasing maszyn ciężkich dla firm. Koparki, żurawie, kombajny, suwnice, harwestery i więcej. Porównujemy 40+ ofert. Decyzja w 24h. Bezpłatna analiza.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
