import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/home-page";
import LecturePage from "./pages/lecture-page";
import ThemeToggle from "./components/layout/theme-toggle";
import LanguageToggle from "./components/layout/language-toggle";
import { useI18n } from "./hooks/use-I18n";
import Sidebar from "./components/layout/sidebar";
import BibliographyPage from "./pages/bibliography-page";
import EvaluationPage from "./pages/evaluation-page";
import { MenuIcon } from "lucide-react";

export default function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const { t } = useI18n();

	return (
		<div className='relative flex min-h-screen  text-gray-800 dark:text-gray-200'>
			<Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

			<main className='flex-1 overflow-x-hidden  overflow-y-auto lg:pl-72 transition-all duration-300 ease-in-out'>
				<div className='sticky top-0 z-10 flex items-center justify-between lg:justify-end px-4 sm:px-6 lg:px-8 h-16 bg-gray-50/75 dark:bg-gray-900/75 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800'>
					<button
						onClick={() => setSidebarOpen(true)}
						className='lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
						aria-label={t("sidebar.open")}
					>
						<MenuIcon className='h-6 w-6' />
					</button>
					<div className='flex items-center space-x-2'>
						<LanguageToggle />
						<ThemeToggle />
					</div>
				</div>

				<div className='w-full max-w-full p-4 sm:p-6 lg:p-8'>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/conferencia/:id' element={<LecturePage />} />
						<Route path='/bibliografia' element={<BibliographyPage />} />
						<Route path='/evaluacion' element={<EvaluationPage />} />
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</div>
			</main>
		</div>
	);
}
