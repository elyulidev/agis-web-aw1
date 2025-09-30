import type { LocalizedString } from "@/types";

export interface EvaluationItem {
	title: LocalizedString;
	description: LocalizedString;
	file: LocalizedString;
}

export const evaluationContent: EvaluationItem[] = [
	{
		title: {
			es: "Informe de Evaluación",
			pt: "Relatório de Avaliação",
		},
		description: {
			es: "Este documento contiene el informe detallado de las evaluaciones parcial y final del curso en español.",
			pt: "Este documento contém o relatório detalhado das avaliações parcial e final do curso em português.",
		},
		file: {
			es: "https://1rqzd6uwpqe1a157.public.blob.vercel-storage.com/Aplicaciones%20Web%20I.pdf",
			pt: "https://1rqzd6uwpqe1a157.public.blob.vercel-storage.com/Aplicaciones%20Web%20I%20-%20PT.pdf",
		},
	},
];
