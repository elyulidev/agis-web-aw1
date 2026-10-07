import { CheckCircle2, Info, Lightbulb, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CalloutVariant = "info" | "tip" | "warning" | "success";

const calloutStyles: Record<CalloutVariant, string> = {
	info: "bg-blue-50 dark:bg-blue-950/40 border-blue-500 text-blue-900 dark:text-blue-100",
	tip: "bg-amber-50 dark:bg-amber-950/30 border-amber-500 text-amber-900 dark:text-amber-100",
	warning:
		"bg-orange-50 dark:bg-orange-950/30 border-orange-500 text-orange-900 dark:text-orange-100",
	success:
		"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500 text-emerald-900 dark:text-emerald-100",
};

const calloutIcons: Record<CalloutVariant, typeof Info> = {
	info: Info,
	tip: Lightbulb,
	warning: TriangleAlert,
	success: CheckCircle2,
};

export function Callout({
	variant = "info",
	title,
	children,
}: {
	variant?: CalloutVariant;
	title: string;
	children: ReactNode;
}) {
	const Icon = calloutIcons[variant];
	return (
		<div
			className={cn(
				"my-4 rounded-r-xl rounded-l-md border-l-4 p-4 shadow-sm",
				calloutStyles[variant],
			)}
		>
			<p className="flex items-center gap-2 font-semibold">
				<Icon className="h-5 w-5 shrink-0" aria-hidden />
				{title}
			</p>
			<div className="mt-1 text-sm leading-relaxed opacity-90">{children}</div>
		</div>
	);
}

export function ConceptCard({
	icon,
	title,
	children,
	iconClassName,
}: {
	icon: ReactNode;
	title: string;
	children: ReactNode;
	iconClassName?: string;
}) {
	return (
		<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800/60">
			<div className="flex items-center gap-3">
				<span
					className={cn(
						"flex h-10 w-10 items-center justify-center rounded-xl",
						iconClassName ??
							"bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200",
					)}
				>
					{icon}
				</span>
				<h4 className="text-base font-bold text-gray-900 dark:text-white">
					{title}
				</h4>
			</div>
			<div className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
				{children}
			</div>
		</div>
	);
}

export function Step({
	number,
	title,
	children,
}: {
	number: number;
	title: string;
	children: ReactNode;
}) {
	return (
		<li className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800/60">
			<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white dark:bg-blue-500">
				{number}
			</span>
			<div>
				<p className="font-semibold text-gray-900 dark:text-white">{title}</p>
				<div className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
					{children}
				</div>
			</div>
		</li>
	);
}

export function Figure({
	src,
	alt,
	caption,
}: {
	src: string;
	alt: string;
	caption: string;
}) {
	return (
		<figure className="my-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800/60">
			<img
				src={src}
				alt={alt}
				className="mx-auto max-h-80 w-full max-w-xl object-contain p-4"
				loading="lazy"
			/>
			<figcaption className="border-t border-gray-100 px-4 py-3 text-center text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
				{caption}
			</figcaption>
		</figure>
	);
}

export function SectionTitle({
	index,
	children,
}: {
	index: number;
	children: ReactNode;
}) {
	return (
		<div className="mb-4 flex items-center gap-3">
			<span
				aria-hidden
				className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-lg font-extrabold text-white shadow-sm dark:bg-blue-500"
			>
				{index}
			</span>
			<h3 className="text-balance text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{children}
			</h3>
		</div>
	);
}
