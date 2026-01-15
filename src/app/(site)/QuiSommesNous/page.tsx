
import React from "react";
import { Metadata } from "next";

import Hero from "@/components/Home/Hero";
import QuiSommesNous from "@/components/Home/QuiSommesNous";
export const metadata: Metadata = {
  title: "SARPI - Notre organisation",
};

const page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Accueil" },
        { href: "/QuiSommesNous", text: "Notre organisation" },
      ];
  return (
    <>
    
      <main>

       <QuiSommesNous />
     
  
  
    </main>
    </>
  );
};

export default page;
