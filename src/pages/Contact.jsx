import React from "react";
import { menu, contact } from "../assets/utils/Texts";

export default function Contact({ lang }) {
    return (
        <div
            id="contact"
            className="container mx-auto pt-5 px-5 dark:text-white"
        >
            <div className="md:flex md:h-screen md:items-center">
                <div>
                    <p className="text-2xl md:text-3xl font-bold">
                        {menu[3][lang]}
                    </p>
                    <div className="mt-5 text-center">
                        <p className="text-5xl md:text-6xl font-bold leading-snug">
                            {contact[0][lang]}
                        </p>
                        <p className="text-2xl">{contact[1][lang]}</p>
                        <p className="text-lg mt-3 italic">
                            {contact[2][lang]}
                        </p>
                        <div className="my-8">
                            <a
                                href="mailto:hectorsa355@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block px-7 py-3 bg-red-400 dark:bg-red-500 text-xl rounded-md "
                            >
                                <div className="absolute transform translate-x-48 text-6xl hover:rotate-12">
                                    ✌
                                </div>
                                {contact[3][lang]}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full text-center self-end text-xs md:text-base">
                {contact[4][lang]}
            </div>
        </div>
    );
}
