import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import "../index.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "Medinet Pharmaceuticals",
  description: "Enterprise-grade corporate website for Medinet Pharmaceutical Marketing Company, featuring product catalog, R&D innovations, quality assurance, careers, and partnership models.",
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased font-sans">
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
