import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Head of Information Technology"
            company="KPU KMTETI 2024"
            time="September 2024 - November 2024"
            companyLink="https://github.com/IT-KPUKMTETI2024-KejarTayangEdition"
            work="At KPU KMTETI 2024, I worked as Head of Information Technology also as FrontEnd Developer. We are using Next.js for the frontend and Node.js & Firebase for the backend. My role involved designing and executing test plans, identifying and documenting bugs, and working closely with my teams to resolve issues quickly."
          />

          <Details
            position="BackEnd Developer"
            company="FindIT UGM 2025"
            time="October 2024 - May 2025"
            companyLink="https://www.find-it.id/"
            work="At FindIT UGM 2025, I worked as a BackEnd Developer. We are using Express.js for the backend and MongoDB for the database. In 2025, there is an update for payment gateaway and it using MidTrans API that different from previous years.
            My roles as a BackEnd Developer are to create API and integrate it with the frontend."
          />
          <Details
          position="BackEnd Developer"
          company="Technocorner UGM 2025"
          time="October 2024 - June 2025"
          companyLink="https://www.technocorner.id/"
          work="At Technocorner UGM 2025, I worked as a BackEnd Developer. We are using Express.js for the backend and MongoDB for the database."
          />
          <Details
          position="FrontEnd Developer"
          company="PIONIR Gadjah Mada 2025"
          time="March 2025 - Now"
          companyLink="https://pionir.ugm.ac.id/"
          work="At PIONIR Gadjah Mada 2025, I worked as a FrontEnd Developer. We are using Next 15 App Router as the main framework. My role involves creating pages, components, and integrating with Strapi CMS for content management. I also handle 3D Map of  Universitas Gadjah Mada using Three.js and React Three Fiber, enhancing the user experience with interactive 3D elements."
          />
          
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-between gap-3 grid-cols-2">
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Projects
        </Link>
        <Link
          href="/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Experience;
