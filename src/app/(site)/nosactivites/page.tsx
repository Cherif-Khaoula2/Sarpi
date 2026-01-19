
import React from "react";
import { Metadata } from "next";

import Hero from "@/components/Home/Hero";
import NosActivites from "@/components/Home/nosactivites";
export const metadata: Metadata = {
  title: "Nos Activités - SARPI",
};

const page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Accueil" },
        { href: "/nosactivites", text: "Nos Activités" },
      ];
  return (
    <>
    
      <main>

       <NosActivites />
     
  
  
    </main>
    </>
  );
};

export default page;
