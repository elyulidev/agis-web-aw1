import { Check, FlaskConical, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import { Callout, SectionTitle } from "@/components/lecture/lecture-blocks";
import { labModulo1 } from "@/data/laboratory-content";
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

export default function LaboratorioPage() {
	const { language, t } = useI18n();

	return (
		<div className="mx-auto max-w-4xl">
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<FlaskConical className="h-3.5 w-3.5" aria-hidden />
				{t("lab.badge")}
			</p>
			<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
				{t("lab.title")}
			</h1>
			<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
				{t("lab.subtitle")}
			</p>

			<Callout variant="info" title={t("lab.requirementsTitle")}>
				{t("lab.requirementsBody")}
			</Callout>

			<div className="mt-10 space-y-10">
				{labModulo1.map((exercise) => (
					<section
						key={exercise.id}
						className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800/60 sm:p-8"
					>
						<SectionTitle index={exercise.id}>
							{exercise.title[language]}
						</SectionTitle>
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
					</section>
				))}
			</div>
		</div>
	);
}
