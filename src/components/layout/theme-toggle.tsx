import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { useI18n } from "@/hooks/use-I18n";
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";

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
