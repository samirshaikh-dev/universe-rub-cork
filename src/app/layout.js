import { Archivo } from "next/font/google";

import Footer from "../components/layout/footer";
import MobileActionBar from "../components/layout/mobile-action-bar";
import Navbar from "../components/layout/navbar";
import { ROOT_METADATA } from "../lib/seo/metadata";

import "./globals.css";

// One family, three widths. The `wdth` axis is loaded so headlines can run at
// 125 and specification figures at 87.5 (see technical-docs/DESIGN.md).
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata = ROOT_METADATA;

export default function RootLayout({ children }) {
  return (
    <html className={`${archivo.variable} scheme-light`} lang="en-IN">
      <body>
        <a
          className="fixed left-4 top-4 z-[60] -translate-y-[240%] rounded-control bg-montado px-4 py-3 font-semibold text-paper no-underline transition-transform duration-200 ease-standard focus:translate-y-0"
          href="#main"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
