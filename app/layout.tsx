import type { Metadata } from "next";
import { Libre_Baskerville, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400"]
});

const iBMPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Ongi Studio",
  description: "Ceramic Art Studuio Based in Almaty",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ReactLenis root>
      <html lang="en">
        <body className={`${libreBaskerville.variable} ${iBMPlexSans.variable} antialiased`}>
          {children}
        </body>
      </html>
    </ReactLenis>
  );
}
