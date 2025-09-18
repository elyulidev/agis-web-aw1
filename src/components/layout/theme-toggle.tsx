import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { useI18n } from "@/hooks/use-I18n";

const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		width='20'
		height='20'
		viewBox='0 0 20'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<circle cx='12' cy='12' r='4' />
		<path d='M12 2v2' />
		<path d='M12 20v2' />
		<path d='m4.93 4.93 1.41 1.41' />
		<path d='m17.66 17.66 1.41 1.41' />
		<path d='M2 12h2' />
		<path d='M20 12h2' />
		<path d='m6.34 17.66-1.41 1.41' />
		<path d='m19.07 4.93-1.41 1.41' />
	</svg>
);

const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		width='20'
		height='20'
		viewBox='0 0 20'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
	</svg>
);

const LaptopIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		width='20'
		height='20'
		viewBox='0 0 20'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path d='M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55A1 1 0 0 1 20.7 20H3.3a1 1 0 0 1-.58-1.45L4 16' />
	</svg>
);

export default function ThemeToggle() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { setTheme, theme } = useTheme();
	const { t } = useI18n();
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

	const handleThemeChange = (theme: "light" | "dark" | "system") => {
		setTheme(theme);
		setIsMenuOpen(false);
	};

	return (
		<div className='relative' ref={menuRef}>
			<button
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className='flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700'
				aria-label={t("toggleTheme")}
			>
				<SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
				<MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
			</button>

			{isMenuOpen && (
				<div className='absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-20'>
					<div className='py-1'>
						<button
							onClick={() => handleThemeChange("light")}
							className={`w-full text-left flex items-center px-4 py-2 text-sm ${
								theme === "light"
									? "font-semibold text-blue-600 dark:text-blue-400"
									: "text-gray-700 dark:text-gray-300"
							} hover:bg-gray-100 dark:hover:bg-gray-700`}
						>
							<SunIcon className='mr-2 h-4 w-4' /> {t("light")}
						</button>
						<button
							onClick={() => handleThemeChange("dark")}
							className={`w-full text-left flex items-center px-4 py-2 text-sm ${
								theme === "dark"
									? "font-semibold text-blue-600 dark:text-blue-400"
									: "text-gray-700 dark:text-gray-300"
							} hover:bg-gray-100 dark:hover:bg-gray-700`}
						>
							<MoonIcon className='mr-2 h-4 w-4' /> {t("dark")}
						</button>
						<button
							onClick={() => handleThemeChange("system")}
							className={`w-full text-left flex items-center px-4 py-2 text-sm ${
								theme === "system"
									? "font-semibold text-blue-600 dark:text-blue-400"
									: "text-gray-700 dark:text-gray-300"
							} hover:bg-gray-100 dark:hover:bg-gray-700`}
						>
							<LaptopIcon className='mr-2 h-4 w-4' /> {t("system")}
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
