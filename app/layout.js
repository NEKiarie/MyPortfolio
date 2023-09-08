import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
  title: "Elvis Njiiri",
  description: "A full-Stack Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={montserrat.className}>{children}</body>
    </html>
  );
}
