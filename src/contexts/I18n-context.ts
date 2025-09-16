import type { Language, TranslationKey } from "@/locales/translations";
import { createContext } from "react";

export interface I18nProviderState {
	language: Language;
	setLanguage: (language: Language) => void;
	t: (
		key: TranslationKey,
		replacements?: Record<string, string | number>
	) => string;
}

export const I18nContext = createContext<I18nProviderState | undefined>(
	undefined
);
