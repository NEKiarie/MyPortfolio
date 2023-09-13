import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

function HireMe() {
  return (
    <div className="fixed left-0 bottom-4 flex items-center justify-center overflow-hidden 
    md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
      <div className="w-40 h-auto flex items-center justify-center relative md:w-24 ">
        <CircularText className={"fill-dark2 animate-spin-slow dark:fill-light"} />
        <Link
          href={"mailto:ekiarienjiiri88@gmail.com"}
          className="flex items-center justify-center
       absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark2 text-light
       shadow-md border border-solid border-dark2 w-20 h-20 rounded-full 
       font-semibold hover:bg-light hover:text-dark md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}

export default HireMe;
