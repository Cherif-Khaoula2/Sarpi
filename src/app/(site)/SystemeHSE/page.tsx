
import React from "react";
import { Metadata } from "next";

import Hero from "@/components/Home/Hero";
import SystemeHSE from "@/components/Home/SystemeHSE";
export const metadata: Metadata = {
  title: "SARPI - Système HSE",
};

const page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Accueil" },
        { href: "/SystemeHSE", text: "Système HSE" },
      ];
  return (
    <>
    
      <main>

       <SystemeHSE />
     
  
  
    </main>
    </>
  );
};

export default page;
