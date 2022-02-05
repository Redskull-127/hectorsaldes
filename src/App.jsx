import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Presentation from "./pages/Presentation";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

export default function App() {
	const [lang, setLang] = useState("es");
	useEffect(() => {
		let _lang = localStorage.getItem("lang");
		if (_lang) {
			if (_lang === "es" || _lang === "en") setLang(_lang);
			else setLang("es");
		} else {
			localStorage.setItem("lang", "es");
		}
	}, []);

	return (
		<div className="font-jetbrains dark:bg-gray-900">
			<Navbar lang={lang} setLang={setLang} />
			<Presentation lang={lang} />
			<About lang={lang} />
			<Experience lang={lang} />
			<Work lang={lang} />
			<Contact lang={lang} />
		</div>
	);
}
