import { useI18n } from "@/hooks/use-I18n";
import { Link } from "react-router-dom";

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
		<path d='M5 12h14' />
		<path d='m12 5 7 7-7 7' />
	</svg>
);

export default function HomePage() {
	const { t } = useI18n();

	return (
		<div className='flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-12 lg:py-24'>
			<div className='bg-white dark:bg-blue-900/50 text-gray-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-gray-200 dark:border-transparent'>
				{t("home.header")}
			</div>
			<h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
				{t("home.title")}
			</h1>
			<p className='mt-6 text-lg max-w-2xl text-gray-600 dark:text-gray-400'>
				{t("home.subtitle")}
			</p>
			<div className='mt-8'>
				<Link
					to='/conferencia/1'
					className='inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900'
				>
					{t("home.button")}
					<ArrowRightIcon className='ml-2 h-5 w-5' />
				</Link>
			</div>
		</div>
	);
}
