"use client";

import React from "react";
import Layout from "./Layout";
import Link from "next/link";

function Footer() {
  return (
    <footer
      className="w-full border-t-1 border-none
  font-medium text-md "
    >
      <Layout className="py-8 flex items-center justify-center">
        <span>{new Date().getFullYear()}&copy; All rights reserved</span>
      </Layout>
    </footer>
  );
}

export default Footer;
