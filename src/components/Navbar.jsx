import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import LightSwitch from "./LightSwitch";
import LanguageSwitch from "./LanguageSwitch";
import { menu } from "../assets/utils/Texts";
import Resume from "../assets/resume.pdf";
export default function Navbar({ lang, setLang }) {
	const [toggleMenu, setToggleMenu] = useState("none");
	let menuGeneral = [];

	const changeMenu = (c) => {
		setToggleMenu(c);
	};

	function printMenu() {
		let i = 0;
		for (i = 0; i < menu.length; i++) {
			let options = (
				<div className="my-5 md:my-0" key={i}>
					<a href={menu[i].ref}>
						<p
							className={`mx-0 md:mx-3 px-4 py-2 md:py-0 hover:bg-slate-200 dark:hover:bg-slate-500 rounded border-b-4 ${menu[i].color}`}
						>
							{menu[i][lang]}
						</p>
					</a>
				</div>
			);
			menuGeneral.push(options);
		}

		let btn = (
			<a href={Resume} target="_blank" rel="noreferrer" key={i}>
				<button className="mx-0 md:mx-3 px-6 py-1 font-bold border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black active:bg:blue-500 rounded-md">
					Resume
				</button>
			</a>
		);
		menuGeneral.push(btn);
	}
	printMenu();

	return (
		<nav className="w-full px-4 py-4 md:px-7 md:fixed bg-white dark:bg-gray-900 dark:text-white shadow visible z-40">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<a href="#me">
						<h1 className="self-start text-4xl md:text-5xl font-extrabold rounded-md cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
							HS
						</h1>
					</a>
					<LightSwitch />
					<div className="hidden md:block">
						<div className="flex justify-center items-center text-center text-lg">
							{menuGeneral}
							<LanguageSwitch lang={lang} setLang={setLang} />
						</div>
					</div>
					<div className="block md:hidden">
						<button className="h-10 w-10 p-1 text-white rounded-md hover:bg-gray-200 bg-gradient-to-r from-red-600 to-yellow-500 transition duration-200">
							{toggleMenu === "none" ? (
								<MenuIcon onClick={() => changeMenu("block")} />
							) : (
								<XIcon onClick={() => changeMenu("none")} />
							)}
						</button>
					</div>
				</div>
			</div>
			<nav className="w-full h-auto text-center md:hidden">
				<div style={{ display: toggleMenu }}>
					{menuGeneral}
					<div className="mt-5">
						<LanguageSwitch lang={lang} setLang={setLang} />
					</div>
				</div>
			</nav>
		</nav>
	);
}
