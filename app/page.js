import Layout from "./components/Layout";
import Image from "next/image";
import ProfilePic from "../public/images/Profile.jpg";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link"
import HireMe from "./components/HireMe";
import LightBulb from "../public/images/miscellaneous_icons_1.svg";
import { LinkArrow } from "./components/Icons";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/3">
            <Image src={ProfilePic} alt="Elvis" className="w-full h-auto" />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center ">
            <AnimatedText text="Turning Vision Into Reality With Code And Design." />
            <p className="mt-4 text-base font-medium ">
              As a Software developer, I am dedicated to turning ideas into
              innovative web applications. Explore my latest projects showcasing
              my expertise in React.js, Next.Js, Typescript & Tailwind.
            </p>
            <div className=" flex items-center self-start mt-2">
              <Link
                href="/MyResume.pdf"
                download={true}
                target={"_blank"}
                className="flex items-center bg-dark2 text-light p-2.5 px-6 rounded-md text-sm
                font-semibold hover:bg-dark hover:text-white
                border-1 border-solid border-transparent hover: border-dark mt-5"
              >
                Download Resume 
              </Link>
              <Link
                href="mailto:ekiarienjiiri88@gmail.com"
                target={"_blank"}
                className="ml-4 text-lg font-medium
              capitalize text-dark underline mt-5"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
      <div className="absolute right-8 top-5 inline-block w-6">
        <Image src={LightBulb} alt="EN" className="w-full h-auto" />
      </div>
    </main>
  );
}
