import "./styles/globals.scss";
import { Georama } from "next/font/google";
import Header from "./components/Header/Header";
import Socials from "./components/Socials/Socials";
import Footer from "./components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

const georama = Georama({ subsets: ["latin"] });

export const metadata = {
  title: "Philippe Victoria",
  description: "Portfolio of Full-Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={georama.className}>
        <Header />
        {children}
        <Socials />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
