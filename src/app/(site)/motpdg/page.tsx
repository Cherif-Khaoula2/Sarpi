
import React from "react";
import { Metadata } from "next";

import Hero from "@/components/Home/Hero";
import MessagePDG from "@/components/Home/MessagePDG";
export const metadata: Metadata = {
  title: "SARPI - Mot du PDG",
};

const page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Accueil" },
        { href: "/motpdg", text: "Mot du PDG" },
      ];
  return (
    <>
    
      <main>

       <MessagePDG />
     
  
  
    </main>
    </>
  );
};

export default page;
