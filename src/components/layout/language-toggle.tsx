import React, { useState, useEffect, useRef } from "react";
import { type Language } from "../../locales/translations";
import { useI18n } from "@/hooks/use-I18n";

const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<circle cx='12' cy='12' r='10' />
		<path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' />
		<path d='M2 12h20' />
	</svg>
);

export default function LanguageToggle() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { language, setLanguage, t } = useI18n();
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleLanguageChange = (lang: Language) => {
		setLanguage(lang);
		setIsMenuOpen(false);
	};

	return (
		<div className='relative' ref={menuRef}>
			<button
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className='flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700'
				aria-label={t("toggleLanguage")}
			>
				<GlobeIcon className='h-5 w-5' />
			</button>

			{isMenuOpen && (
				<div className='absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-20'>
					<div className='py-1'>
						<button
							onClick={() => handleLanguageChange("es")}
							className={`w-full text-left flex items-center px-4 py-2 text-sm ${
								language === "es"
									? "font-semibold text-blue-600 dark:text-blue-400"
									: "text-gray-700 dark:text-gray-300"
							} hover:bg-gray-100 dark:hover:bg-gray-700`}
						>
							Español
						</button>
						<button
							onClick={() => handleLanguageChange("pt")}
							className={`w-full text-left flex items-center px-4 py-2 text-sm ${
								language === "pt"
									? "font-semibold text-blue-600 dark:text-blue-400"
									: "text-gray-700 dark:text-gray-300"
							} hover:bg-gray-100 dark:hover:bg-gray-700`}
						>
							Português
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
