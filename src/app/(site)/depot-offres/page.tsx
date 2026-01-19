
import React from "react";
import { Metadata } from "next";

import Hero from "@/components/Home/Hero";
import DepotOffres from "@/components/Home/depot-offres";
export const metadata: Metadata = {
  title: "Dépôt d'Offres de Services - SARPI",
};

const page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Accueil" },
        { href: "/nosvaleurs", text: "Dépôt d'Offres de Services" },
      ];
  return (
    <>
    
      <main>

       <DepotOffres />
     
  
  
    </main>
    </>
  );
};

export default page;
