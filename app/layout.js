"use client";

import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/navigation";

const metadata = {
  title: "EN  || Software Developer",
  description: "A full-Stack Software Developer",
};

const font = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <html lang="en">
      <Head>
        <title>EN</title>
        <meta name="description" content="A Full-Stack Software Developer" />
      </Head>
      <body
        className={`${font.className} dark:bg-dark bg-light w-full min-h-screen`}
      >
        <NavBar />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
