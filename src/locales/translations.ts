export const translations = {
	es: {
		// General
		module: "Módulo",
		courseWeb: "AWI",

		// ThemeToggle
		toggleTheme: "Cambiar tema",
		light: "Claro",
		dark: "Oscuro",
		system: "Sistema",

		// LanguageToggle
		toggleLanguage: "Cambiar idioma",

		// CodeBlock
		copyCode: "Copiar código",
		copied: "¡Copiado!",

		// HomePage
		"home.header": "Plataforma Educativa de Vanguardia",
		"home.title": "Domina el Desarrollo Web Moderno",
		"home.subtitle":
			"Bienvenido a la asihnatura Apliciones Web I. Un tour completo sobre HTML, CSS y JavaScript. Desde los fundamentos hasta las técnicas avanzadas, esta plataforma te guiará en tu viaje para convertirte en un desarrollador front-end experto.",
		"home.button": "Comenzar a Aprender",

		// LecturePage
		"lecture.invalidId.title": "ID de conferencia no válido",
		"lecture.invalidId.body":
			"Por favor, selecciona una conferencia de la barra lateral.",
		"lecture.notFound.title": "Conferencia no encontrada",
		"lecture.notFound.body":
			"La conferencia con ID {lectureId} no existe. Por favor, selecciona una de la barra lateral.",
		"lecture.comingSoon.title": "Contenido Próximamente",
		"lecture.comingSoon.body":
			"El contenido de esta conferencia aún está en preparación. ¡Vuelve pronto!",
		"lecture.prev": "Conferencia Anterior",
		"lecture.next": "Siguiente Conferencia",

		// Sidebar
		"sidebar.open": "Abrir barra lateral",
		"sidebar.bibliography": "Bibliografía",
		"sidebar.evaluation": "Evaluación",

		// BibliographyPage
		"bibliography.title": "Bibliografía del Curso",
		"bibliography.downloadButton": "Descargar",

		//Evaluation Page
		"evaluation.title": "Descarga de Material de Evaluación",
		"evaluation.downloadButton": "Descargar",
	},
	pt: {
		// General
		module: "Módulo",
		courseWeb: "AWI",

		// ThemeToggle
		toggleTheme: "Alternar tema",
		light: "Claro",
		dark: "Escuro",
		system: "Sistema",

		// LanguageToggle
		toggleLanguage: "Mudar idioma",

		// CodeBlock
		copyCode: "Copiar código",
		copied: "Copiado!",

		// HomePage
		"home.header": "Plataforma Educacional de Vanguarda",
		"home.title": "Domine o Desenvolvimento Web Moderno",
		"home.subtitle":
			"Bem-vindo á Disciplina Aplicações Web I. Um tour completo sobre HTML, CSS e JavaScript. Dos fundamentos às técnicas avançadas, esta plataforma irá guiá-lo em sua jornada para se tornar um desenvolvedor front-end experiente.",
		"home.button": "Começar a Aprender",

		// LecturePage
		"lecture.invalidId.title": "ID de palestra inválido",
		"lecture.invalidId.body":
			"Por favor, selecione uma palestra na barra lateral.",
		"lecture.notFound.title": "Palestra não encontrada",
		"lecture.notFound.body":
			"A palestra com ID {lectureId} não existe. Por favor, selecione uma na barra lateral.",
		"lecture.comingSoon.title": "Conteúdo em Breve",
		"lecture.comingSoon.body":
			"O conteúdo desta palestra ainda está em preparação. Volte em breve!",
		"lecture.prev": "Palestra Anterior",
		"lecture.next": "Próxima Palestra",

		// Sidebar
		"sidebar.open": "Abrir barra lateral",
		"sidebar.bibliography": "Bibliografia",
		"sidebar.evaluation": "Avaliação",

		// BibliographyPage
		"bibliography.title": "Bibliografía del Curso",
		"bibliography.downloadButton": "Baixar",

		//Evaluation Page
		"evaluation.title": "Baixar material de avaliação",
		"evaluation.downloadButton": "Baixar",
	},
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.es;
