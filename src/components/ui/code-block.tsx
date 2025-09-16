import { useI18n } from "@/hooks/use-I18n";
import { useTheme } from "@/hooks/use-theme";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
	oneLight,
	oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const CopyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
		<rect width='14' height='14' x='8' y='8' rx='2' ry='2' />
		<path d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' />
	</svg>
);

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
		<path d='M20 6 9 17l-5-5' />
	</svg>
);

interface CodeBlockProps {
	codeString: string;
	language: string;
}

export default function CodeBlock({ codeString, language }: CodeBlockProps) {
	const { theme } = useTheme();
	const { t } = useI18n();
	const [isCopied, setIsCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(codeString).then(() => {
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 2000);
		});
	};

	const currentTheme =
		theme === "dark" ||
		(theme === "system" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
			? oneDark
			: oneLight;

	return (
		<div className='relative my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700'>
			<div className='absolute top-2 right-2'>
				<button
					onClick={copyToClipboard}
					className={`p-2 rounded-md transition-colors ${
						isCopied
							? "bg-green-500 text-white"
							: "bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-gray-700/80 dark:hover:bg-gray-600/80 dark:text-gray-300"
					}`}
					aria-label={isCopied ? t("copied") : t("copyCode")}
				>
					{isCopied ? (
						<CheckIcon className='h-5 w-5' />
					) : (
						<CopyIcon className='h-5 w-5' />
					)}
				</button>
			</div>
			<SyntaxHighlighter
				language={language}
				style={currentTheme}
				customStyle={{
					margin: 0,
					padding: "1.25rem",
					backgroundColor: "transparent",
				}}
				codeTagProps={{ style: { fontFamily: "monospace" } }}
			>
				{codeString.trim()}
			</SyntaxHighlighter>
		</div>
	);
}
