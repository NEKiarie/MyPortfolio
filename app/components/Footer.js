"use client";

import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import Logo from "./Logo";

function Footer() {
  return (
    <footer
      className="w-full border-t-1 border-none
      font-medium text-md sm:text-base "
    >
      <Layout className="py-8 flex flex-col items-center justify-center lg:flex-col lg:py-6">
        <Logo />
        <span className="mt-4 dark:text-light">{new Date().getFullYear()}&copy; All rights reserved</span>
      </Layout>
    </footer>
  );
}

export default Footer;
