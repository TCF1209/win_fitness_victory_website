import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Win Fitness Factory — Best Gym in Klang",
  description:
    "Klang's premier fitness club at Bandar Botanik. State-of-the-art equipment, certified trainers, and specialized programs. 4.9★ rated on Google.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
