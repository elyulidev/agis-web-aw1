import { I18nContext, type I18nProviderState } from "@/contexts/I18n-context";
import { useContext } from "react";

export const useI18n = (): I18nProviderState => {
	const context = useContext(I18nContext);
	if (context === undefined) {
		throw new Error("useI18n must be used within an I18nProvider");
	}
	return context;
};
