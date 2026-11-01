import { Archivo, Playfair_Display } from "next/font/google";
import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";
import { ROOT_METADATA } from "../lib/seo/metadata";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = ROOT_METADATA;

export default function RootLayout({ children }) {
  return (
    <html
      className={`${archivo.variable} ${playfair.variable} min-h-full overflow-x-clip scheme-light`}
      lang="en-IN"
    >
      <body className="min-h-screen overflow-x-clip bg-sheet font-sans text-[17px] leading-[1.6] text-charcoal [text-rendering:optimizeLegibility]">
        <Navbar />
        <main className="min-h-[65vh]" id="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
