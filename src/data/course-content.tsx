import type { Module, Lecture } from "../types";
import Lecture1Es from "./content/es/1";
import Lecture1Pt from "./content/pt/1";
import Lecture2Es from "./content/es/2";
import Lecture2Pt from "./content/pt/2";
import Lecture3Es from "./content/es/3";
import Lecture3Pt from "./content/pt/3";
import Lecture4Es from "./content/es/4";
import Lecture4Pt from "./content/pt/4";
import Lecture5Es from "./content/es/5";
import Lecture5Pt from "./content/pt/5";
import Lecture6Es from "./content/es/6";
import Lecture6Pt from "./content/pt/6";

export const courseContent: Module[] = [
	{
		module: 1,
		title: {
			es: "Fundamentos de HTML",
			pt: "Fundamentos de HTML",
		},
		lectures: [
			{
				id: 1,
				title: {
					es: "Introducción al Desarrollo Web y Entorno de Trabajo",
					pt: "Introdução ao Desenvolvimento Web e Ambiente de Trabalho",
				},
				content: { es: Lecture1Es, pt: Lecture1Pt },
			},
			{
				id: 2,
				title: {
					es: "Estructura HTML, Metadatos y Texto Básico",
					pt: "Estrutura HTML, Metadados e Texto Básico",
				},
				content: { es: Lecture2Es, pt: Lecture2Pt },
			},
			{
				id: 3,
				title: {
					es: "Formato de Texto y Listas",
					pt: "Formatação de Texto e Listas",
				},
				content: { es: Lecture3Es, pt: Lecture3Pt },
			},
			{
				id: 4,
				title: {
					es: "Enlaces, Imágenes y Multimedia",
					pt: "Links, Imagens e Multimídia",
				},
				content: { es: Lecture4Es, pt: Lecture4Pt },
			},
			{
				id: 5,
				title: {
					es: "Tablas y Semántica Estructural Básica",
					pt: "Tabelas e Semântica Estrutural Básica",
				},
				content: { es: Lecture5Es, pt: Lecture5Pt },
			},
			{
				id: 6,
				title: {
					es: "Formularios I: Estructura, Campos y Atributos Básicos",
					pt: "Formulários I: Estrutura, Campos e Atributos Básicos",
				},
				content: { es: Lecture6Es, pt: Lecture6Pt },
			},
		],
	},
	{
		module: 2,
		title: {
			es: "Fundamentos de CSS",
			pt: "Fundamentos de CSS",
		},
		lectures: [
			{
				id: 7,
				title: {
					es: "Formularios II: Atributos y Validaciones HTML + Introducción CSS",
					pt: "Formulários II: Atributos e Validações HTML + Introdução ao CSS",
				},
			},
			{
				id: 8,
				title: {
					es: "Formas de Incluir CSS y Selectores Básicos",
					pt: "Formas de Incluir CSS e Seletores Básicos",
				},
			},
			{
				id: 9,
				title: {
					es: "Selectores Avanzados y Pseudo-clases",
					pt: "Seletores Avançados e Pseudo-classes",
				},
			},
			{
				id: 10,
				title: {
					es: "Pseudo-elementos y Algoritmo CSS Básico",
					pt: "Pseudo-elementos e Algoritmo Básico de CSS",
				},
			},
		],
	},
	{
		module: 3,
		title: {
			es: "Modelo de Caja y Posicionamiento CSS",
			pt: "Box Model e Posicionamento CSS",
		},
		lectures: [
			{
				id: 11,
				title: {
					es: "Especificidad y Herencia",
					pt: "Especificidade e Herança",
				},
			},
			{
				id: 12,
				title: {
					es: "Modelo de Caja: Dimensiones, Padding y Border",
					pt: "Box Model: Dimensões, Padding e Border",
				},
			},
			{
				id: 13,
				title: {
					es: "Modelo de Caja: Margin, Centrado y la Propiedad display",
					pt: "Box Model: Margin, Centralização e a Propriedade display",
				},
			},
			{
				id: 14,
				title: {
					es: "Posicionamiento, Float y z-index",
					pt: "Posicionamento, Float e z-index",
				},
			},
		],
	},
	{
		module: 4,
		title: {
			es: "Estilos Visuales CSS y Responsive Básico",
			pt: "Estilos Visuais CSS e Design Responsivo Básico",
		},
		lectures: [
			{
				id: 15,
				title: {
					es: "Colores, Unidades de Medida y Variables CSS",
					pt: "Cores, Unidades de Medida e Variáveis CSS",
				},
			},
			{ id: 16, title: { es: "Fondos y Degradados", pt: "Fundos e Degradês" } },
			{
				id: 17,
				title: {
					es: "Transiciones y Transformaciones 2D",
					pt: "Transições e Transformações 2D",
				},
			},
			{
				id: 18,
				title: {
					es: "Responsive Design Básico y Media Queries",
					pt: "Design Responsivo Básico e Media Queries",
				},
			},
		],
	},
	{
		module: 5,
		title: {
			es: "Introducción a JavaScript",
			pt: "Introdução ao JavaScript",
		},
		lectures: [
			{
				id: 19,
				title: {
					es: "¿Qué es JavaScript? Entorno y Sintaxis Básica",
					pt: "O que é JavaScript? Ambiente e Sintaxe Básica",
				},
			},
			{
				id: 20,
				title: {
					es: "Variables, Tipos de Datos y Operadores",
					pt: "Variáveis, Tipos de Dados e Operadores",
				},
			},
			{
				id: 21,
				title: {
					es: "Estructuras de Control: Condicionales",
					pt: "Estruturas de Controle: Condicionais",
				},
			},
			{
				id: 22,
				title: {
					es: "Estructuras de Control: Bucles",
					pt: "Estruturas de Controle: Laços",
				},
			},
		],
	},
	{
		module: 6,
		title: {
			es: "Funciones y Alcance en JavaScript",
			pt: "Funções e Escopo em JavaScript",
		},
		lectures: [
			{
				id: 23,
				title: {
					es: "Funciones I: Declaración y Expresión",
					pt: "Funções I: Declaração e Expressão",
				},
			},
			{
				id: 24,
				title: {
					es: "Funciones II: Arrow Functions y Callbacks",
					pt: "Funções II: Arrow Functions e Callbacks",
				},
			},
			{
				id: 25,
				title: {
					es: "Alcance (Scope) y Hoisting",
					pt: "Escopo (Scope) e Hoisting",
				},
			},
			{
				id: 26,
				title: {
					es: "El Objeto this y Contexto de Ejecución",
					pt: "O Objeto this e Contexto de Execução",
				},
			},
		],
	},
	{
		module: 7,
		title: {
			es: "Introducción al DOM (Document Object Model)",
			pt: "Introdução ao DOM (Document Object Model)",
		},
		lectures: [
			{
				id: 27,
				title: {
					es: "¿Qué es el DOM? y Selección de Elementos",
					pt: "O que é o DOM? e Seleção de Elementos",
				},
			},
			{
				id: 28,
				title: {
					es: "Manipulación de Contenido",
					pt: "Manipulação de Conteúdo",
				},
			},
			{
				id: 29,
				title: {
					es: "Modificación de Atributos, Clases y Estilos",
					pt: "Modificação de Atributos, Classes e Estilos",
				},
			},
			{
				id: 30,
				title: {
					es: "Creación, Eliminación y Reemplazo de Nodos",
					pt: "Criação, Remoção e Substituição de Nós",
				},
			},
		],
	},
	{
		module: 8,
		title: {
			es: "Recorrido del DOM y Eventos de Usuario",
			pt: "Percorrendo o DOM e Eventos de Usuário",
		},
		lectures: [
			{
				id: 31,
				title: {
					es: "Recorrido del DOM (Traversing the DOM)",
					pt: "Percorrendo o DOM (Traversing the DOM)",
				},
			},
			{
				id: 32,
				title: {
					es: "Manejo de Eventos I: addEventListener",
					pt: "Manipulação de Eventos I: addEventListener",
				},
			},
			{
				id: 33,
				title: {
					es: "Manejo de Eventos II: Tipos de Eventos Comunes",
					pt: "Manipulação de Eventos II: Tipos de Eventos Comuns",
				},
			},
			{
				id: 34,
				title: {
					es: "Manejo de Eventos III: Delegación de Eventos y Optimización",
					pt: "Manipulação de Eventos III: Delegação de Eventos e Otimização",
				},
			},
		],
	},
	{
		module: 9,
		title: {
			es: "Formularios Avanzados con JavaScript",
			pt: "Formulários Avançados com JavaScript",
		},
		lectures: [
			{
				id: 35,
				title: {
					es: "Interactividad de Formularios I: Captura y Envío de Datos",
					pt: "Interatividade de Formulários I: Captura e Envio de Dados",
				},
			},
			{
				id: 36,
				title: {
					es: "Interactividad de Formularios II: Validación del lado del Cliente",
					pt: "Interatividade de Formulários II: Validação do Lado do Cliente",
				},
			},
			{
				id: 37,
				title: {
					es: "Interactividad de Formularios III: Servicios Externos",
					pt: "Interatividade de Formulários III: Serviços Externos",
				},
			},
			{
				id: 38,
				title: {
					es: "Almacenamiento del Lado del Cliente y JSON",
					pt: "Armazenamento do Lado do Cliente e JSON",
				},
			},
		],
	},
	{
		module: 10,
		title: {
			es: "Programación Asíncrona en JavaScript",
			pt: "Programação Assíncrona em JavaScript",
		},
		lectures: [
			{
				id: 39,
				title: {
					es: "Programación Asíncrona I: Callbacks y Temporizadores",
					pt: "Programação Assíncrona I: Callbacks e Temporizadores",
				},
			},
			{
				id: 40,
				title: {
					es: "Programación Asíncrona II: Promises (Introducción)",
					pt: "Programação Assíncrona II: Promises (Introdução)",
				},
			},
			{
				id: 41,
				title: {
					es: "Programación Asíncrona III: async/await",
					pt: "Programação Assíncrona III: async/await",
				},
			},
			{
				id: 42,
				title: {
					es: "Consumo de APIs con Fetch API",
					pt: "Consumo de APIs com a Fetch API",
				},
			},
		],
	},
	{
		module: 11,
		title: {
			es: "Proyecto Práctico I con JavaScript",
			pt: "Projeto Prático I com JavaScript",
		},
		lectures: [
			{
				id: 43,
				title: {
					es: "Planificación y Estructura del Proyecto",
					pt: "Planejamento e Estrutura do Projeto",
				},
			},
			{
				id: 44,
				title: {
					es: "Implementación de Funcionalidades Principales",
					pt: "Implementação de Funcionalidades Principais",
				},
			},
			{
				id: 45,
				title: {
					es: "Persistencia de Datos y Eliminación",
					pt: "Persistência de Dados e Remoção",
				},
			},
			{
				id: 46,
				title: {
					es: "Refactorización y Mejora de la Experiencia de Usuario",
					pt: "Refatoração e Melhoria da Experiência do Usuário",
				},
			},
		],
	},
	{
		module: 12,
		title: {
			es: "Proyecto Práctico II con JavaScript",
			pt: "Projeto Prático II com JavaScript",
		},
		lectures: [
			{
				id: 47,
				title: {
					es: "Planificación de un Carrito de Compras Básico",
					pt: "Planejamento de um Carrinho de Compras Básico",
				},
			},
			{
				id: 48,
				title: {
					es: "Añadir y Mostrar Productos en el Carrito",
					pt: "Adicionar e Mostrar Produtos no Carrinho",
				},
			},
			{
				id: 49,
				title: {
					es: "Actualizar Cantidades y Eliminar del Carrito",
					pt: "Atualizar Quantidades e Remover do Carrinho",
				},
			},
			{
				id: 50,
				title: {
					es: "Persistencia y Finalización de Compra",
					pt: "Persistência e Finalização da Compra",
				},
			},
		],
	},
	{
		module: 13,
		title: {
			es: "Conceptos Modernos y Próximos Pasos en JavaScript",
			pt: "Conceitos Modernos e Próximos Passos em JavaScript",
		},
		lectures: [
			{
				id: 51,
				title: {
					es: "Introducción a ES6+ y Características Futuras",
					pt: "Introdução ao ES6+ e Recursos Futuros",
				},
			},
		],
	},
];

// FIX: Added the missing findLectureById function to find a lecture by its ID within the course content structure.
export const findLectureById = (
	id: number
): { module: Module; lecture: Lecture } | null => {
	for (const module of courseContent) {
		const lecture = module.lectures.find((l) => l.id === id);
		if (lecture) {
			return { module, lecture };
		}
	}
	return null;
};
