import React, { useRef } from "react";

import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col 
    items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl text-dark2 dark:text-light/75 sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 ">
      <h2 className="font-bold text-6xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark2 origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type={"Cisco Certified Support Technician(CCST)"}
            time={"2023"}
            place={"Cisco Networking Academy"}
            info={
              "Relevant topics included Introduction to Cybersecurity,Network Basics, Network Device and Initial Configuration, Endpoint Security, Network Defense, and Cyber Threat Management"
            }
          />
          <Details
            type={"Software Engineering"}
            time={"2022-2023 "}
            place={"Moringa School"}
            info={
              "Relevant hands-on experience through various activities and societies such as pair programming, daily stand-up, self-directed learning, and project-based learning. Skills in front-end development, including HTML, CSS, JavaScript, ReactJs, NextJs, TypeScript, and Tailwind Css. I also gained expertise in backend development through studying Ruby on Rails, Object Relational Mapping, and SQL. Additionally, I learned to use various tools, including Git version control, GitHub, and Heroku. "
            }
          />
          <Details
            type={"Security Intelligence Analysis"}
            time={"2017"}
            place={"IBM"}
            info={
              "Relevant courses included network defensive tactics, data protection risks, a variety of application security vulnerabilities, and virtual and physical threat."
            }
          />
          <Details
            type={"Diploma in Information Technology"}
            time={"2016-2019 "}
            place={"Jomo Kenyatta University of Science & Technology"}
            info={
              "Relevant activities included engaged in various activities and societies that honed my skills in pair programming, project-based learning, and collaborative problem solving.Through the coursework and projects, I acquired a diverse range of skills, including the C programming language, project management, and Android development. I also gained knowledge in web development with HTML and Cascading Style Sheets (CSS)."
            }
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
