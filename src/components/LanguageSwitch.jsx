import React from "react";
import ES from "../assets/svg/ES.svg";
import EN from "../assets/svg/EN.svg";

export default function LanguageSwitch({ lang, setLang }) {
    const changeLang = (toLang) => {
        setLang(toLang);
        localStorage.setItem("lang", toLang);
    };
    return (
        <button className="mx-3 w-12 h-12 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
            {lang === "es" ? (
                <img src={ES} alt="ES" onClick={() => changeLang("en")} />
            ) : (
                <img src={EN} alt="EN" onClick={() => changeLang("es")} />
            )}
        </button>
    );
}
