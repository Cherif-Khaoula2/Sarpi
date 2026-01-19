
import React from "react";
import { Metadata } from "next";

import Hero from "@/components/Home/Hero";
import NosRessources from "@/components/Home/nosressources";
export const metadata: Metadata = {
  title: "Nos Ressources - SARPI",
};

const page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Accueil" },
        { href: "/nosressources", text: "Nos Ressources" },
      ];
  return (
    <>
    
      <main>

       <NosRessources />
     
  
  
    </main>
    </>
  );
};

export default page;
