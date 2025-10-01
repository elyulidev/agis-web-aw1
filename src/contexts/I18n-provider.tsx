import { useState, useEffect, type ReactNode } from "react";
import {
	translations,
	type Language,
	type TranslationKey,
} from "../locales/translations";
import { I18nContext } from "./I18n-context";

const getInitialLanguage = (): Language => {
	const savedLang = localStorage.getItem("language");
	if (savedLang === "es" || savedLang === "pt") {
		return savedLang;
	}
	const browserLang = navigator.language.split(/[-_]/)[0];
	return browserLang === "pt" ? "pt" : "es"; // Default to Spanish
};

export function I18nProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<Language>(getInitialLanguage);
	const [lectureTitle, setLectureTitle] = useState<string>("");

	useEffect(() => {
		document.documentElement.lang = language;
	}, [language]);

	const handleSetLanguage = (lang: Language) => {
		localStorage.setItem("language", lang);
		setLanguage(lang);
	};

	const t = (
		key: TranslationKey,
		replacements?: Record<string, string | number>
	): string => {
		let translation = translations[language][key] || translations.es[key];
		if (replacements) {
			Object.keys(replacements).forEach((placeholder) => {
				translation = translation.replace(
					`{${placeholder}}`,
					String(replacements[placeholder])
				);
			});
		}
		return translation;
	};

	const value = {
		language,
		setLanguage: handleSetLanguage,
		t,
		lectureTitle,
		setLectureTitle,
	};

	return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
