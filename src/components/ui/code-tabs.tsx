import { useState } from "react";
import CodeBlock from "@/components/ui/code-block";

type CodeTabId = "html" | "css" | "js";

interface CodeTabsProps {
	html?: string;
	css?: string;
	js?: string;
	defaultTab?: CodeTabId;
}

const TAB_LANGUAGE: Record<CodeTabId, string> = {
	html: "html",
	css: "css",
	js: "javascript",
};

const TAB_ORDER: CodeTabId[] = ["html", "css", "js"];

export default function CodeTabs({ html, css, js, defaultTab }: CodeTabsProps) {
	const sources: Record<CodeTabId, string | undefined> = { html, css, js };
	const available = TAB_ORDER.filter((tab) => sources[tab]?.trim());
	const initial =
		defaultTab && sources[defaultTab]?.trim()
			? defaultTab
			: (available[0] ?? "html");
	const [active, setActive] = useState<CodeTabId>(initial);
	const activeCode = sources[active] ?? "";

	return (
		<div className="my-6">
			<div
				role="tablist"
				aria-label="Ejemplo de código"
				className="flex gap-1 rounded-t-lg border border-gray-200 border-b-0 bg-gray-100 p-1 dark:border-gray-700 dark:bg-gray-800"
			>
				{TAB_ORDER.map((tab) => {
					const code = sources[tab]?.trim();
					const disabled = !code;
					const selected = active === tab;
					return (
						<button
							key={tab}
							type="button"
							role="tab"
							aria-selected={selected}
							aria-disabled={disabled}
							disabled={disabled}
							onClick={() => setActive(tab)}
							className={`rounded-md px-4 py-1.5 font-mono text-sm font-semibold uppercase transition-colors ${
								selected
									? "bg-white text-gray-900 shadow dark:bg-gray-900 dark:text-gray-100"
									: disabled
										? "cursor-not-allowed text-gray-400 opacity-50 dark:text-gray-600"
										: "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
							}`}
						>
							{tab}
						</button>
					);
				})}
			</div>
			<div className="[&>div]:my-0 [&>div]:rounded-t-none">
				<CodeBlock codeString={activeCode} language={TAB_LANGUAGE[active]} />
			</div>
		</div>
	);
}
