"use client";

import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../components/Icons";
import FeaturedProject1 from "../../public/images/Portfolio.png";
import Project1 from "../../public/images/Steer X.png";
import Project2 from "../../public/images/Airbnb.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl
    border border-solid border-dark2 bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark2 rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg
      "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">{title}</h2>
        </Link>
        <p className="my-2 font-bold text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark2 text-light p-2 px-6 text-lg font-semibold dark:bg-light
            dark:text-dark"
          >
            Vist Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
   border-dark2 bg-light p-6 relative rounded-br-2xl dark:bg-dark dark:border-light"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark2 rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg
      "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline text-dark2 dark:text-light"
          >
            Vist
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

function page() {
  return (
    <>
      <Head>
        <title>Elvis Njiiri | Projects Page</title>
        <meta name="description" content="description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="React Portfolio Website"
                img={FeaturedProject1}
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
                page transitions, cool background effects, unique design and it is mobile responsive.
                ."
                link="https://my-portfolio-nekiarie.vercel.app"
                github="https://github.com/NEKiarie/MyPortfolio"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6">
              {" "}
              <Project
                title="Steer X"
                img={Project1}
                link="https://steer-x.vercel.app"
                github="https://github.com/NEKiarie/Steer-X"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Full-Stack Airbnb Clone"
                img={Project2}
                link="https://full-stack-airbnb-clone-seven.vercel.app"
                github="https://github.com/NEKiarie/Full-Stack-Airbnb-Clone"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default page;
