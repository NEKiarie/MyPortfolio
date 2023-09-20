import Layout from "./components/Layout";
import Image from "next/image";
import ProfilePic from "../public/images/Profile.jpg";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import HireMe from "./components/HireMe";
import LightBulb from "../public/images/miscellaneous_icons_1.svg";
import { LinkArrow } from "./components/Icons";
import TransitionEffect from "./components/TransitionEffect";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Portfolio Website</title>
        <meta name="description" content="Personal Portfolio Website" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light 2xl">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/3 lg:w-full">
              <Image
                src={ProfilePic}
                alt="Elvis"
                className="w-full h-auto rounded-2xl lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="xl:text-5xl
            lg:text-center lg:text-6xl md:text-5xl sm:text-3xl md:mt-16"
              />
              <p className="mt-4 text-base font-medium md:text-sm sm:text-xs ">
                As a Software developer, I am dedicated to turning ideas into
                innovative web applications. Explore my latest projects
                showcasing my expertise in React.js, Next.Js, Typescript &
                Tailwind.
              </p>
              <div className=" flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/MyResume.pdf"
                  download={true}
                  target={"_blank"}
                  className="flex items-center bg-dark2 text-light p-2.5 px-8 rounded-lg text-sm
                font-semibold  hover:bg-light hover:text-dark hover:border-dark2
                border border-solid border-transparent hover: border-dark2 mt-5 dark:hover:text-dark
                hover:dark:border-light hover:dark:bg-light
                md:p-2 md:px-4 md:text-base"
                >
                  Resume <LinkArrow />
                </Link>
                <Link
                  href="mailto:ekiarienjiiri88@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium
              capitalize text-dark underline mt-5 dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-5 inline-block w-11 md:hidden">
          <Image src={LightBulb} alt="EN" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
