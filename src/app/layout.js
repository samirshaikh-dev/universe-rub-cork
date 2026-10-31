import { Archivo } from "next/font/google";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
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
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
