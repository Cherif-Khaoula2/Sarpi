import React from "react";
import Link from "next/link";

const ContactInfo = () => {
    return (
        <>
            <section className="dark:bg-darkmode lg:pt-20 pt-16 lg:pb-24 pb-10">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                   
                    <div className="md:pt-28 pt-11 md:pb-28 pb-16">
                     <iframe
                       src="https://www.google.com/maps?q=SARPI%20SPA%20Hydra%20Alger&output=embed"
                       width="1114"
                       height="477"
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade"
                       className="rounded-lg w-full"
                     ></iframe>
                   </div>

                </div>
                <div className="border-b border-solid  dark:border-dark_border"></div>
            </section>
        </>
    );
};

export default ContactInfo;
