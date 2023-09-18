import React, { useRef } from "react";

import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Details2 = ({ position, time, address, work }) => {
  return (
    <li
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col 
      items-center justify-between md:w-[80%]"
    >
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-dark2 dark:text-light/75">{position}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 ">
      <h2 className="font-bold text-6xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark2 origin-top
           dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details2
            position={"Professional Development(Career Break)"}
            time={"April 2020-Jun 2023"}
            address={"Nairobi,Kenya"}
            work={
              "During this break, I took the opportunity to focus on my professional development by exploring and studying the fields of Software Engineering and Cybersecurity. This break has provided me with a chance to learn new skills and knowledge that can help me become more competitive and valuable in my future career endeavors. Through self-directed learning and various online courses, I have gained insights into the latest industry trends and best practices. I am now equipped with new skills, fresh perspectives, and a renewed passion for the technology industry"
            }
          />
          <Details
            position={"IT Support Intern"}
            companyLink={"https://www.nhif.or.ke"}
            company={"National Hospital Insurance Fund"}
            time={"March 2018-May 2018"}
            address={"Nairobi,Kenya"}
            work={
              "This role involved providing technical support to employees and customers through various channels, including phone, email, or chat. This included troubleshooting technical issues, diagnosing problems, and providing solutions. The role also involved installing and configuring software on desktops, laptops, and servers, performing routine maintenance tasks such as updating antivirus software and applying software patches, and assisting with network and server management to ensure data security. I was also responsible for documenting technical issues and solutions for future reference, providing training to employees on how to use new software or hardware, and collaborating with other departments to resolve technical issues and ensure smooth operations. The required skills for this role included proficiency in Linux and Windows, as well as technical support experience."
            }
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
