import React, { useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

export default function LightSwitch() {
	useEffect(() => {
		let theme = localStorage.getItem("theme");
		if (theme) {
			if (theme === "dark") {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		}
	}, []);

	const toggleTheme = () => {
		if (document.documentElement.classList.contains("dark")) {
			setLightTheme();
		} else {
			setDarkTheme();
		}
	};

	const setDarkTheme = () => {
		document.documentElement.classList.add("dark");
		localStorage.setItem("theme", "dark");
	};

	const setLightTheme = () => {
		document.documentElement.classList.remove("dark");
		localStorage.setItem("theme", "light");
	};

	return (
		<div className="flex justify-center items-center">
			<button
				className="relative w-20 h-10 rounded-full bg-yellow-300 hover:bg-yellow-200 dark:bg-blue-900  dark:hover:bg-blue-800 transition duration-300 focus:ring-2 focus:ring-black dark:focus:ring-white"
				onClick={toggleTheme}
			>
				<div
					className={`absolute top-1.5 left-1.5 rounded-full h-7 w-7 transition ring-black transform translate-x-0 dark:translate-x-10 duration-300}`}
				>
					<MoonIcon className="hidden dark:block" />
					<SunIcon className="block dark:hidden" />
				</div>
			</button>
		</div>
	);
}
