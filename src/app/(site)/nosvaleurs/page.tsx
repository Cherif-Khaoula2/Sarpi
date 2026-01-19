
import React from "react";
import { Metadata } from "next";

import Hero from "@/components/Home/Hero";
import Nosvaleurs from "@/components/Home/nosvaleurs";
export const metadata: Metadata = {
  title: "Nos valeurs - SARPI",
};

const page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Accueil" },
        { href: "/nosvaleurs", text: "Nos valeurs" },
      ];
  return (
    <>
    
      <main>

       <Nosvaleurs />
     
  
  
    </main>
    </>
  );
};

export default page;
