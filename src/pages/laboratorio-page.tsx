import { Check, Eye, FlaskConical, RotateCcw } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ExpectedPreview from "@/components/lab/expected-previews";
import { Callout, SectionTitle } from "@/components/lecture/lecture-blocks";
import CodeBlock from "@/components/ui/code-block";
import type { LabExercise, LabStarterFile } from "@/data/laboratory-content";
import { labModulo1, labModulo2, labModulo3 } from "@/data/laboratory-content";
import { useI18n } from "@/hooks/use-I18n";

const NumberedItem = ({
	index,
	children,
}: {
	index: number;
	children: React.ReactNode;
}) => (
	<li className="flex gap-3">
		<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white dark:bg-blue-500">
			{index}
		</span>
		<span className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
			{children}
		</span>
	</li>
);

const STARTER_LANGUAGE: Record<string, string> = {
	html: "html",
	htm: "html",
	css: "css",
	js: "javascript",
};

function starterLanguage(fileName: string): string {
	const ext = fileName.slice(fileName.lastIndexOf(".") + 1).toLowerCase();
	return STARTER_LANGUAGE[ext] ?? "html";
}

const StartTabs = ({ files }: { files: LabStarterFile[] }) => {
	const [active, setActive] = useState(0);
	const activeFile = files[Math.min(active, files.length - 1)];

	return (
		<div>
			<div
				role="tablist"
				aria-label="Código inicial"
				className="flex gap-1 overflow-x-auto rounded-t-lg border border-gray-200 border-b-0 bg-gray-100 p-1 dark:border-gray-700 dark:bg-gray-800"
			>
				{files.map((file, index) => {
					const selected = index === active;
					return (
						<button
							key={file.file}
							type="button"
							role="tab"
							aria-selected={selected}
							onClick={() => setActive(index)}
							className={`shrink-0 rounded-md px-4 py-1.5 font-mono text-sm font-semibold transition-colors ${
								selected
									? "bg-white text-gray-900 shadow dark:bg-gray-900 dark:text-gray-100"
									: "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
							}`}
						>
							{file.file}
						</button>
					);
				})}
			</div>
			<div className="[&>div]:my-0 [&>div]:rounded-t-none">
				<CodeBlock
					codeString={activeFile.code}
					language={starterLanguage(activeFile.file)}
				/>
			</div>
		</div>
	);
};

export default function LaboratorioPage({ module }: { module: 1 | 2 | 3 }) {
	const { language, t } = useI18n();
	const exercises =
		module === 1 ? labModulo1 : module === 2 ? labModulo2 : labModulo3;

	const renderExercise = (exercise: LabExercise, index: number) => (
		<section
			key={exercise.id}
			className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800/60 sm:p-8"
		>
			<SectionTitle index={index + 1}>{exercise.title[language]}</SectionTitle>
			<p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
				<strong>{t("lab.objective")}: </strong>
				{exercise.objective[language]}
			</p>
			<Link
				to={`/conferencia/${exercise.lectureId}`}
				className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 underline decoration-blue-300 underline-offset-4 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
			>
				<RotateCcw className="h-3.5 w-3.5" aria-hidden />
				{t("lab.review", { lectureId: exercise.lectureId })}
			</Link>

			<p className="mt-4 mb-3 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
				{t("lab.instructions")}
			</p>
			<ol className="space-y-2.5">
				{exercise.steps.map((step, i) => (
					<NumberedItem key={step.es} index={i + 1}>
						{step[language]}
					</NumberedItem>
				))}
			</ol>

			{exercise.starter && (
				<>
					<p className="mt-6 mb-3 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
						{t("lab.starter")}
					</p>
					<div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/40">
						<p className="mb-3 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
							{t("lab.starterHint")}
						</p>
						<StartTabs files={exercise.starter[language]} />
					</div>
				</>
			)}

			<p className="mt-6 mb-3 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
				{t("lab.verify")}
			</p>
			<ul className="space-y-2">
				{exercise.verify.map((item) => (
					<li key={item.es} className="flex items-start gap-2">
						<Check
							className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
							aria-hidden
						/>
						<span className="text-sm text-gray-700 dark:text-gray-300">
							{item[language]}
						</span>
					</li>
				))}
			</ul>

			<p className="mt-6 mb-3 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
				{t("lab.expected")}
			</p>
			<div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-800/40">
				<ExpectedPreview id={exercise.id} lang={language} />
				<p className="mt-3 flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
					<Eye className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
					<span>{exercise.expected[language]}</span>
				</p>
			</div>
		</section>
	);

	return (
		<div className="mx-auto max-w-4xl">
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<FlaskConical className="h-3.5 w-3.5" aria-hidden />
				{t(
					module === 1
						? "lab.module1"
						: module === 2
							? "lab.module2"
							: "lab.module3",
				)}
			</p>
			<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
				{t("lab.title", { module })}
			</h1>
			<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
				{t(
					module === 1
						? "lab.subtitle1"
						: module === 2
							? "lab.subtitle2"
							: "lab.subtitle3",
				)}
			</p>

			<Callout variant="info" title={t("lab.requirementsTitle")}>
				{t("lab.requirementsBody")}
			</Callout>

			<div className="mt-10 space-y-10">
				{exercises.map((exercise, i) => renderExercise(exercise, i))}
			</div>
		</div>
	);
}
