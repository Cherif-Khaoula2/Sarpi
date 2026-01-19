
import React from "react";
import { Metadata } from "next";

import Hero from "@/components/Home/Hero";
import SecteursIntervention from "@/components/Home/secteurs";
export const metadata: Metadata = {
  title: "Nos Secteurs d’Intervention - SARPI",
};

const page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Accueil" },
        { href: "/secteurs", text: "Nos Secteurs d’Intervention" },
      ];
  return (
    <>
    
      <main>

       <SecteursIntervention  />
     
  
  
    </main>
    </>
  );
};

export default page;
