import React from "react";
import {
    GrFacebookOption,
    GrInstagram,
    GrLinkedinOption,
} from "react-icons/gr";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { SvgBlob } from "react-svg-blob";
import { getRandomColor, getRandomInt } from "../assets/utils/RandomShape";
import { presentation } from "../assets/utils/Texts";

export default function Presentation({ lang }) {
    function generateShapeProps() {
        return {
            size: 250,
            growth: getRandomInt(2, 9),
            edges: getRandomInt(3, 20),
        };
    }
    return (
        <div
            id="me"
            className="container mx-auto py-5 px-5 dark:text-white text-center"
        >
            <div className="hidden md:block">
                <div className="absolute left-0 top-0 w-1/6 animate-pulse">
                    <SvgBlob
                        variant="solid"
                        color={getRandomColor()}
                        shapeProps={generateShapeProps()}
                        isOutline={0.3}
                    />
                </div>
                <div className="absolute bottom-0 left-0 w-1/4 animate-pulse">
                    <SvgBlob
                        variant="solid"
                        color={getRandomColor()}
                        shapeProps={generateShapeProps()}
                        isOutline={0.3}
                    />
                </div>
                <div className="absolute right-0 bottom-0 w-1/4 animate-pulse">
                    <SvgBlob
                        variant="solid"
                        color={getRandomColor()}
                        shapeProps={generateShapeProps()}
                        isOutline={0.3}
                    />
                </div>
                <div className="absolute right-0 top-0 w-1/4 animate-pulse">
                    <SvgBlob
                        variant="solid"
                        color={getRandomColor()}
                        shapeProps={generateShapeProps()}
                        isOutline={0.3}
                    />
                </div>
            </div>
            <div className="md:flex md:h-screen md:items-center">
                <div>
                    <p className="text-xl md:text-2xl font-medium">
                        {presentation[0][lang]}
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-snug ">
                        Hector Saldaña Espinoza
                    </h1>
                    <p className="text-xl md:text-2xl font-medium">
                        {presentation[1][lang]}
                    </p>
                    <div className="w-full md:w-9/12 mx-auto">
                        <p className="mt-5 text-xl text-justify">
                            {presentation[2][lang]}
                        </p>
                    </div>
                    <div className="mt-8 mx-auto w-full md:w-1/2">
                        <div className="flex justify-between">
                            <a
                                href="https://www.facebook.com/hector.saldana.5623293/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GrFacebookOption
                                    size="30"
                                    className="rounded transition delay-100 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer "
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/hectorsaldanamx/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GrInstagram
                                    size="30"
                                    className="rounded transition delay-100 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer "
                                />
                            </a>
                            <a
                                href="https://github.com/HectorSaldes"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiGithub
                                    size="30"
                                    className="rounded transition delay-100 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer "
                                />
                            </a>
                            <a
                                href="https://twitter.com/hectorsaldes"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiTwitter
                                    size="30"
                                    className="rounded transition delay-100 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer "
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hector-salda%C3%B1a-ab3977219/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GrLinkedinOption
                                    size="30"
                                    className="rounded transition delay-100 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer "
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
