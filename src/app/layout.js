import { Archivo } from "next/font/google";
import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";
import { ROOT_METADATA } from "../lib/seo/metadata";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata = ROOT_METADATA;

export default function RootLayout({ children }) {
  return (
    <html className={archivo.variable} lang="en-IN">
      <body>
        <Navbar />
        <main className="min-h-[65vh]" id="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
