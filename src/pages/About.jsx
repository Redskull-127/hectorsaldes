import React from "react";
import { menu, about } from "../assets/utils/Texts";

export default function About({ lang }) {
    return (
        <div id="about" className="container mx-auto py-5 px-5 dark:text-white">
            <div className="md:flex md:h-screen md:items-center">
                <div>
                    <div>
                        <p className="text-2xl md:text-3xl font-bold">
                            {menu[0][lang]}
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 text-lg md:text-xl text-justify">
                            <p>
                                {about[0][lang]}
                                <span className="font-bold dark:text-yellow-300 duration-1000">
                                    Hector Saldaña Espinoza
                                </span>
                                {about[1][lang]}
                            </p>
                            <br />
                            <p>{about[2][lang]}</p>
                            <br />
                            <p>
                                {about[3][lang]}
                                <span className="font-bold duration-1000">
                                    Notion
                                </span>
                                ,{" "}
                                <span className="font-bold dark:text-yellow-600 duration-1000">
                                    LucidChart
                                </span>
                                ,{" "}
                                <span className="font-bold dark:text-purple-600 duration-1000">
                                    Canva
                                </span>
                                ,{" "}
                                <span className="font-bold dark:text-blue-600 duration-1000">
                                    Behance
                                </span>
                                ,{" "}
                                <span className="font-bold dark:text-blue-300 duration-1000">
                                    Coolors
                                </span>
                                ,{" "}
                                <span className="font-bold duration-1000">
                                    Medium
                                </span>
                                {about[4][lang]}
                            </p>
                            <br />
                            <p>
                                {about[5][lang]}
                                <span className="font-bold dark:text-red-500 duration-1000">
                                    HTML
                                </span>
                                ,{" "}
                                <span className="font-bold dark:text-blue-500 duration-1000">
                                    CSS
                                </span>
                                ,{" "}
                                <span className="font-bold dark:text-yellow-500 duration-1000">
                                    JavaScript
                                </span>
                                ,{" "}
                                <span className="font-bold dark:text-blue-600 duration-1000">
                                    React
                                </span>
                                ,{" "}
                                <span className="font-bold dark:text-green-600 duration-1000">
                                    Node.js
                                </span>{" "}
                                y{" "}
                                <span className="font-bold dark:text-red-600 duration-1000">
                                    Java
                                </span>
                                .{" "}💻
                            </p>
                            <br />
                            <p className="text-base md:text-lg text-justify">
                                {about[6][lang]}
                                <span className="font-bold dark:text-yellow-300 duration-1000">
                                    Sal
                                </span>
                                daña y{" "}
                                <span className="font-bold dark:text-yellow-500 duration-1000">
                                    Es
                                </span>
                                pinoza. {about[7][lang]}
                            </p>
                        </div>
                        <div className="md:w-1/2 px-4">
                            <div className="w-full h-full flex justify-center items-center">
                                <div>
                                    <div className="flex p-5 md:py-0 md:pb-2">
                                        <img
                                            src="https://s3.aws-k8s.generated.photos/ai-generated-photos/upscaler-uploads/3/a70b5c27-ac54-4f9f-afa6-d36a6240dcff.jpg"
                                            alt="Me in real life"
                                            className="rounded-full w-1/2"
                                        />
                                        <img
                                            src="https://s3.aws-k8s.generated.photos/ai-generated-photos/upscaler-uploads/9/710faac2-538d-4548-879a-ace2c2c63e79.png"
                                            alt="Me in digital life"
                                            className="rounded-full w-1/2"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <a
                                            href="https://open.spotify.com/playlist/6DjZu0vWZHIpmIM4Gk3oFJ?si=2a83bd0e0f0e4ff8"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {about[8][lang]}
                                            <span className="font-bold dark:text-green-500 duration-1000">
                                                Spotify{" "}
                                            </span>
                                            {about[9][lang]}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
