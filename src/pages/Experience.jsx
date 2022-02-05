import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import { CgWorkAlt } from "react-icons/cg";
import { menu, experience } from "../assets/utils/Texts";
import reactsvg from "../assets/svg/react.svg";
import nodesvg from "../assets/svg/nodejs.svg";
import javascriptsvg from "../assets/svg/javascript.svg";
import javasvg from "../assets/svg/java.svg";
import figmasvg from "../assets/svg/figma.svg";
import gitsvg from "../assets/svg/git.svg";
import notionsvg from "../assets/svg/notion.svg";
import tailwindsvg from "../assets/svg/tailwind.svg";
import mongodbsvg from "../assets/svg/mongodb.svg";
import springbootsvg from "../assets/svg/springboot.svg";
import netlifysvg from "../assets/svg/netlify.svg";
import mediumsvg from "../assets/svg/medium.svg";

export default function Experience({ lang }) {
	return (
		<div
			id="experience"
			className="container mx-auto py-5 px-5 dark:text-white"
		>
			<div className="md:flex md:h-screen md:items-center">
				<div>
					<p className="text-2xl md:text-3xl font-bold">
						{menu[1][lang]}
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
						<div>
							<p className="mt-5 text-xl font-bold uppercase">
								{experience[0][lang]}
							</p>
							<div className="flex mt-6">
								<div className="flex-col mr-5">
									<div className="rounded-full h-10 w-10 bg-green-600">
										<IoSchoolOutline className="w-full h-full p-2 text-white" />
									</div>
									<div className="h-full mx-auto w-1 bg-green-700"></div>
								</div>
								<div>
									<p className="text-xl font-semibold">
										Universidad Tecnológica Emiliano Zapata
										del Estado de Morelos
									</p>
									<p className="text-base italic text-gray-600 dark:text-gray-400">
										2019 - 2023 ({experience[5][lang]})
									</p>
									<p className="text-justify text-lg">
										{experience[1][lang]}
									</p>
								</div>
							</div>

							<div className="flex mt-6">
								<div className="flex-col mr-5">
									<div className="rounded-full h-10 w-10 bg-green-600">
										<IoSchoolOutline className="w-full h-full p-2 text-white" />
									</div>
									<div className="h-auto mx-auto w-1 bg-green-700"></div>
								</div>
								<div>
									<p className="text-xl font-semibold">
										Colegio Nacional de Educación
										Profesional Técnica
									</p>
									<p className="text-base italic text-gray-600 dark:text-gray-400">
										2016 - 2019
									</p>
									<p className="text-justify text-lg">
										{experience[2][lang]}
									</p>
								</div>
							</div>
						</div>
						<div>
							<p className="mt-5 text-xl font-bold uppercase">
								{experience[3][lang]}
							</p>
							<div className="flex mt-6">
								<div className="flex-col mr-5">
									<div className="rounded-full h-10 w-10 bg-yellow-500">
										<CgWorkAlt className="w-full h-full p-2 text-white" />
									</div>
								</div>
								<div>
									<p className="text-xl font-semibold">
										Novopatent I.S.S.C.
									</p>
									<p className="text-base italic text-gray-600 dark:text-gray-400">
										2021 - 2021
									</p>
									<p className="text-justify text-lg">
										{experience[4][lang]}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<p className="my-5 text-xl font-bold uppercase">
							{experience[6][lang]}
						</p>
						<div className="flex justify-around flex-wrap text-center">
							<div className="p-2 w-50 h-50 ">
								<img
									src={reactsvg}
									alt="ReactJS"
									className="mx-auto"
								/>
								<p>ReactJS</p>
							</div>
							<div className="p-2 w-50 h-50">
								<img src={nodesvg} alt="NodeJS" className="mx-auto" />
								<p>Nodejs</p>
							</div>
							<div className="p-2 w-50 h-50">
								<img
									src={javascriptsvg}
									alt="JavaScript"
									className="mx-auto"
								/>
								<p>JavaScript</p>
							</div>
							<div className="p-2 w-50 h-50">
								<img src={javasvg} alt="Java" className="mx-auto" />
								<p>Java</p>
							</div>
							<div className="p-2 w-50 h-50">
								<img
									src={figmasvg}
									alt="Figma"
									className="mx-auto"
								/>
								<p>Figma</p>
							</div>
							<div className="p-2 w-50 h-50">
								<img src={gitsvg} alt="Git" className="mx-auto" />
								<p>Git</p>
							</div>
							<div className="p-2 w-50 h-50">
								<img
									src={notionsvg}
									alt="Notion"
									className="mx-auto dark: bg-white rounded"
								/>
								<p>Notion</p>
							</div>
							<div className="p-2 w-50 h-50">
								<img
									src={tailwindsvg}
									alt="TailwindCSS"
									className="mx-auto"
								/>
								<p>TailwindCSS</p>
							</div>
							<div className="p-2 w-50 h-50">
								<img
									src={mongodbsvg}
									alt="MongoDB"
									className="mx-auto"
								/>
								<p>MongoDB</p>
							</div>
							<div className="p-2 w-50 h-50">
								<img
									src={springbootsvg}
									alt="Spring boot"
									className="mx-auto"
								/>
								<p>Spring boot</p>
							</div>
							<div className="p-2 w-50 h-50">
								<img
									src={netlifysvg}
									alt="Netlify"
									className="mx-auto"
								/>
								<p>Netlify</p>
							</div>{" "}
							<div className="p-2 w-50 h-50">
								<img
									src={mediumsvg}
									alt="Medium"
									className="mx-auto dark: bg-white rounded"
								/>
								<p>Medium</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
