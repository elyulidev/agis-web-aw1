import { courseContent } from "@/data/course-content";
import { useI18n } from "@/hooks/use-I18n";
import type { Module } from "@/types";
import { LibraryIcon, NotebookPenIcon } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	// FIX: Corrected the viewBox attribute from '0 0 24" 24"' to '0 0 24 24'. The typo was causing multiple JSX parsing errors.
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' />
		<path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' />
	</svg>
);

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path d='m6 9 6 6 6-6' />
	</svg>
);

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<line x1='18' y1='6' x2='6' y2='18' />
		<line x1='6' y1='6' x2='18' y2='18' />
	</svg>
);

interface AccordionItemProps {
	module: Module;
	isOpen: boolean;
	onToggle: () => void;
	onLinkClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
	module,
	isOpen,
	onToggle,
	onLinkClick,
}) => {
	const { language, t } = useI18n();
	return (
		<div className='border-b border-gray-200 dark:border-gray-700'>
			<button
				onClick={onToggle}
				className='w-full flex justify-between items-center p-4 text-left font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none'
			>
				<span>
					{t("module")} {module.module}: {module.title[language]}
				</span>
				<ChevronDownIcon
					className={`w-5 h-5 transition-transform duration-200 ${
						isOpen ? "transform rotate-180" : ""
					}`}
				/>
			</button>
			{isOpen && (
				<div className='bg-gray-50 dark:bg-gray-800/50'>
					<ul className='py-2'>
						{module.lectures.map((lecture) => (
							<li key={lecture.id}>
								<NavLink
									to={`/conferencia/${lecture.id}`}
									onClick={onLinkClick}
									className={({ isActive }) =>
										`block w-full text-left pl-8 pr-4 py-2 text-sm transition-colors duration-150 ${
											isActive
												? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 font-semibold border-l-4 border-blue-500"
												: "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
										}`
									}
								>
									{lecture.id}. {lecture.title[language]}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

interface SidebarProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
	const [openModule, setOpenModule] = useState<number | null>(1);
	const { t } = useI18n();

	const handleToggle = (moduleNumber: number) => {
		setOpenModule(openModule === moduleNumber ? null : moduleNumber);
	};

	const handleLinkClick = () => {
		if (window.innerWidth < 1024) {
			setIsOpen(false);
		}
	};

	return (
		<>
			{/* Overlay for mobile */}
			<div
				className={`fixed inset-0 bg-black/60 z-30 lg:hidden transition-opacity duration-300 ${
					isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={() => setIsOpen(false)}
			/>
			<aside
				className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-40 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className='flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800'>
					<NavLink to='/' className='flex items-center space-x-3'>
						<BookOpenIcon className='w-8 h-8 text-blue-600 dark:text-blue-400' />
						<span className='text-xl font-bold text-gray-800 dark:text-white'>
							{t("courseWeb")}
						</span>
					</NavLink>
					<button
						onClick={() => setIsOpen(false)}
						className='lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
					>
						<CloseIcon className='h-6 w-6' />
					</button>
				</div>

				<div className='flex-1 overflow-y-auto'>
					<nav>
						{courseContent.map((module) => (
							<AccordionItem
								key={module.module}
								module={module}
								isOpen={openModule === module.module}
								onToggle={() => handleToggle(module.module)}
								onLinkClick={handleLinkClick}
							/>
						))}
					</nav>
				</div>

				<div className='flex flex-col gap-2 p-4 border-t border-gray-200 dark:border-gray-800'>
					<NavLink
						to='/bibliografia'
						onClick={handleLinkClick}
						className={({ isActive }) =>
							`flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 ${
								isActive
									? "bg-blue-700 dark:bg-blue-600 text-white"
									: "bg-blue-400 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
							}`
						}
					>
						<LibraryIcon className='w-5 h-5 mr-2' />
						<span>{t("sidebar.bibliography")}</span>
					</NavLink>
					<NavLink
						to='/evaluacion'
						onClick={handleLinkClick}
						className={({ isActive }) =>
							`flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 ${
								isActive
									? "bg-blue-700 dark:bg-blue-600 text-white"
									: "bg-blue-400 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
							}`
						}
					>
						<NotebookPenIcon className='w-5 h-5 mr-2' />
						<span>{t("sidebar.evaluation")}</span>
					</NavLink>
				</div>
			</aside>
		</>
	);
}
