import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/theme-provider";
import { HashRouter } from "react-router-dom";
import { I18nProvider } from "./contexts/I18n-provider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HashRouter>
			<ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
				<I18nProvider>
					<App />
				</I18nProvider>
			</ThemeProvider>
		</HashRouter>
	</StrictMode>
);
