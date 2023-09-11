import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
import { Montserrat} from "next/font/google";


export const metadata = {
  title: "EN  || Software Developer",
  description: "A full-Stack Software Developer",
};

const font = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-light w-full min-h-screen`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
