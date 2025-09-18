import { useI18n } from "@/hooks/use-I18n";
import { useTheme } from "@/hooks/use-theme";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
	oneLight,
	oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
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
					borderBottomLeftRadius: "0.5rem",
					borderBottomRightRadius: "0.5rem",
				}}
				codeTagProps={{
					style: {
						fontFamily: "'Fira Code', monospace",
						fontSize: "14px",
					},
				}}
				showLineNumbers
			>
				{codeString.trim()}
			</SyntaxHighlighter>
		</div>
	);
}
