import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

let MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="flex items-center justify-center rounded-full w-16 h-18   text-white dark:border-1 dark:border-solid dark:border-dark"
      >
        <img
          src="/cosmic.png"
          alt="Logo"
          className="object-contain rounded-full w-auto h-auto py-2 px-2 bg-light/75"
        />
      </MotionLink>
    </div>
  );
};

export default Logo;
