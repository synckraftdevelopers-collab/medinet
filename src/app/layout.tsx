import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "Medinet Pharmaceuticals",
  description: "Enterprise-grade corporate website for Medinet Pharmaceutical Marketing Company, featuring product catalog, R&D innovations, quality assurance, careers, and partnership models.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
