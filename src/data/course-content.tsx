
import type { Module, Lecture } from '../types';
import Lecture1Es from './content/es/1';
import Lecture1Pt from './content/pt/1';
import Lecture2Es from './content/es/2';
import Lecture2Pt from './content/pt/2';
import Lecture3Es from './content/es/3';
import Lecture3Pt from './content/pt/3';
import Lecture4Es from './content/es/4';
import Lecture4Pt from './content/pt/4';
import Lecture5Es from './content/es/5';
import Lecture5Pt from './content/pt/5';
import Lecture6Es from './content/es/6';
import Lecture6Pt from './content/pt/6';
import Lecture7Es from './content/es/7';
import Lecture7Pt from './content/pt/7';
import Lecture8Es from './content/es/8';
import Lecture8Pt from './content/pt/8';
import Lecture9Es from './content/es/9';
import Lecture9Pt from './content/pt/9';
import Lecture10Es from './content/es/10';
import Lecture10Pt from './content/pt/10';
import Lecture11Es from './content/es/11';
import Lecture11Pt from './content/pt/11';
import Lecture12Es from './content/es/12';
import Lecture12Pt from './content/pt/12';
import Lecture13Es from './content/es/13';
import Lecture13Pt from './content/pt/13';
import Lecture14Es from './content/es/14';
import Lecture14Pt from './content/pt/14';
import Lecture15Es from './content/es/15';
import Lecture15Pt from './content/pt/15';
import Lecture16Es from './content/es/16';
import Lecture16Pt from './content/pt/16';
import Lecture17Es from './content/es/17';
import Lecture17Pt from './content/pt/17';
import Lecture18Es from './content/es/18';
import Lecture18Pt from './content/pt/18';
import Lecture19Es from './content/es/19';
import Lecture19Pt from './content/pt/19';
import Lecture20Es from './content/es/20';
import Lecture20Pt from './content/pt/20';
import Lecture21Es from './content/es/21';
import Lecture21Pt from './content/pt/21';
import Lecture22Es from './content/es/22';
import Lecture22Pt from './content/pt/22';
import Lecture23Es from './content/es/23';
import Lecture23Pt from './content/pt/23';
import Lecture24Es from './content/es/24';
import Lecture24Pt from './content/pt/24';
import Lecture25Es from './content/es/25';
import Lecture25Pt from './content/pt/25';
import Lecture26Es from './content/es/26';
import Lecture26Pt from './content/pt/26';
import Lecture27Es from './content/es/27';
import Lecture27Pt from './content/pt/27';
import Lecture28Es from './content/es/28';
import Lecture28Pt from './content/pt/28';
import Lecture29Es from './content/es/29';
import Lecture29Pt from './content/pt/29';
import Lecture30Es from './content/es/30';
import Lecture30Pt from './content/pt/30';
import Lecture31Es from './content/es/31';
import Lecture31Pt from './content/pt/31';
import Lecture32Es from './content/es/32';
import Lecture32Pt from './content/pt/32';
import Lecture33Es from './content/es/33';
import Lecture33Pt from './content/pt/33';
import Lecture34Es from './content/es/34';
import Lecture34Pt from './content/pt/34';
import Lecture35Es from './content/es/35';
import Lecture35Pt from './content/pt/35';
import Lecture36Es from './content/es/36';
import Lecture36Pt from './content/pt/36';
import Lecture37Es from './content/es/37';
import Lecture37Pt from './content/pt/37';
import Lecture38Es from './content/es/38';
import Lecture38Pt from './content/pt/38';
import Lecture39Es from './content/es/39';
import Lecture39Pt from './content/pt/39';
import Lecture40Es from './content/es/40';
import Lecture40Pt from './content/pt/40';
import Lecture41Es from './content/es/41';
import Lecture41Pt from './content/pt/41';
import Lecture42Es from './content/es/42';
import Lecture42Pt from './content/pt/42';
import Lecture43Es from './content/es/43';
import Lecture43Pt from './content/pt/43';
import Lecture44Es from './content/es/44';
import Lecture44Pt from './content/pt/44';
import Lecture45Es from './content/es/45';
import Lecture45Pt from './content/pt/45';
import Lecture46Es from './content/es/46';
import Lecture46Pt from './content/pt/46';
import Lecture47Es from './content/es/47';
import Lecture47Pt from './content/pt/47';
import Lecture48Es from './content/es/48';
import Lecture48Pt from './content/pt/48';
import Lecture49Es from './content/es/49';
import Lecture49Pt from './content/pt/49';
import Lecture50Es from './content/es/50';
import Lecture50Pt from './content/pt/50';
import Lecture51Es from './content/es/51';
import Lecture51Pt from './content/pt/51';

export const courseContent: Module[] = [
  {
    module: 1,
    title: { 
        es: "Fundamentos de HTML",
        pt: "Fundamentos de HTML" 
    },
    lectures: [
      { id: 1, title: { es: "Introducción al Desarrollo Web y Entorno de Trabajo", pt: "Introdução ao Desenvolvimento Web e Ambiente de Trabalho" }, content: { es: Lecture1Es, pt: Lecture1Pt } },
      { id: 2, title: { es: "Estructura HTML, Metadatos y Texto Básico", pt: "Estrutura HTML, Metadados e Texto Básico" }, content: { es: Lecture2Es, pt: Lecture2Pt } },
      { id: 3, title: { es: "Formato de Texto y Listas", pt: "Formatação de Texto e Listas" }, content: { es: Lecture3Es, pt: Lecture3Pt } },
      { id: 4, title: { es: "Enlaces, Imágenes y Multimedia", pt: "Links, Imagens e Multimídia" }, content: { es: Lecture4Es, pt: Lecture4Pt } },
      { id: 5, title: { es: "Tablas y Semántica Estructural Básica", pt: "Tabelas e Semântica Estrutural Básica" }, content: { es: Lecture5Es, pt: Lecture5Pt } },
      { id: 6, title: { es: "Formularios I: Estructura, Campos y Atributos Básicos", pt: "Formulários I: Estrutura, Campos e Atributos Básicos" }, content: { es: Lecture6Es, pt: Lecture6Pt } },
    ],
  },
  {
    module: 2,
    title: {
        es: "Fundamentos de CSS",
        pt: "Fundamentos de CSS"
    },
    lectures: [
      { id: 7, title: { es: "Formularios II: Atributos y Validaciones HTML + Introducción CSS", pt: "Formulários II: Atributos e Validações HTML + Introdução ao CSS" }, content: { es: Lecture7Es, pt: Lecture7Pt } },
      { id: 8, title: { es: "Formas de Incluir CSS y Selectores Básicos", pt: "Formas de Incluir CSS e Seletores Básicos" }, content: { es: Lecture8Es, pt: Lecture8Pt } },
      { id: 9, title: { es: "Selectores Avanzados y Pseudo-clases", pt: "Seletores Avançados e Pseudo-classes" }, content: { es: Lecture9Es, pt: Lecture9Pt } },
      { id: 10, title: { es: "Pseudo-elementos y Algoritmo CSS Básico", pt: "Pseudo-elementos e Algoritmo Básico de CSS" }, content: { es: Lecture10Es, pt: Lecture10Pt } },
    ],
  },
  {
    module: 3,
    title: {
        es: "Modelo de Caja y Posicionamiento CSS",
        pt: "Box Model e Posicionamento CSS"
    },
    lectures: [
      { id: 11, title: { es: "Especificidad y Herencia", pt: "Especificidade e Herança" }, content: { es: Lecture11Es, pt: Lecture11Pt } },
      { id: 12, title: { es: "Modelo de Caja: Dimensiones, Padding y Border", pt: "Box Model: Dimensões, Padding e Border" }, content: { es: Lecture12Es, pt: Lecture12Pt } },
      { id: 13, title: { es: "Modelo de Caja: Margin, Centrado y la Propiedad display", pt: "Box Model: Margin, Centralização e a Propriedade display" }, content: { es: Lecture13Es, pt: Lecture13Pt } },
      { id: 14, title: { es: "Posicionamiento, Float y z-index", pt: "Posicionamento, Float e z-index" }, content: { es: Lecture14Es, pt: Lecture14Pt } },
    ],
  },
  {
    module: 4,
    title: {
        es: "Estilos Visuales CSS y Responsive Básico",
        pt: "Estilos Visuais CSS e Design Responsivo Básico"
    },
    lectures: [
      { id: 15, title: { es: "Colores, Unidades de Medida y Variables CSS", pt: "Cores, Unidades de Medida e Variáveis CSS" }, content: { es: Lecture15Es, pt: Lecture15Pt } },
      { id: 16, title: { es: "Fondos y Degradados", pt: "Fundos e Degradês" }, content: { es: Lecture16Es, pt: Lecture16Pt } },
      { id: 17, title: { es: "Transiciones y Transformaciones 2D", pt: "Transições e Transformações 2D" }, content: { es: Lecture17Es, pt: Lecture17Pt } },
      { id: 18, title: { es: "Responsive Design Básico y Media Queries", pt: "Design Responsivo Básico e Media Queries" }, content: { es: Lecture18Es, pt: Lecture18Pt } },
    ],
  },
  {
    module: 5,
    title: {
        es: "Introducción a JavaScript",
        pt: "Introdução ao JavaScript"
    },
    lectures: [
        { id: 19, title: { es: "¿Qué es JavaScript? Entorno y Sintaxis Básica", pt: "O que é JavaScript? Ambiente e Sintaxe Básica" }, content: { es: Lecture19Es, pt: Lecture19Pt } },
        { id: 20, title: { es: "Variables, Tipos de Datos y Operadores", pt: "Variáveis, Tipos de Dados e Operadores" }, content: { es: Lecture20Es, pt: Lecture20Pt } },
        { id: 21, title: { es: "Estructuras de Control: Condicionales", pt: "Estruturas de Controle: Condicionais" }, content: { es: Lecture21Es, pt: Lecture21Pt } },
        { id: 22, title: { es: "Estructuras de Control: Bucles", pt: "Estruturas de Controle: Laços" }, content: { es: Lecture22Es, pt: Lecture22Pt } },
    ],
  },
  {
    module: 6,
    title: {
        es: "Funciones y Alcance en JavaScript",
        pt: "Funções e Escopo em JavaScript"
    },
    lectures: [
        { id: 23, title: { es: "Funciones I: Declaración y Expresión", pt: "Funções I: Declaração e Expressão" }, content: { es: Lecture23Es, pt: Lecture23Pt } },
        { id: 24, title: { es: "Funciones II: Arrow Functions y Callbacks", pt: "Funções II: Arrow Functions e Callbacks" }, content: { es: Lecture24Es, pt: Lecture24Pt } },
        { id: 25, title: { es: "Alcance (Scope) y Hoisting", pt: "Escopo (Scope) e Hoisting" }, content: { es: Lecture25Es, pt: Lecture25Pt } },
        { id: 26, title: { es: "POO: `this`, Objetos y Clases", pt: "POO: `this`, Objetos e Classes" }, content: { es: Lecture26Es, pt: Lecture26Pt } },
    ],
  },
  {
    module: 7,
    title: {
        es: "Introducción al DOM (Document Object Model)",
        pt: "Introdução ao DOM (Document Object Model)"
    },
    lectures: [
        { id: 27, title: { es: "¿Qué es el DOM? y Selección de Elementos", pt: "O que é o DOM? e Seleção de Elementos" }, content: { es: Lecture27Es, pt: Lecture27Pt } },
        { id: 28, title: { es: "Manipulación de Contenido", pt: "Manipulação de Conteúdo" }, content: { es: Lecture28Es, pt: Lecture28Pt } },
        { id: 29, title: { es: "Modificación de Atributos, Clases y Estilos", pt: "Modificação de Atributos, Classes e Estilos" }, content: { es: Lecture29Es, pt: Lecture29Pt } },
        { id: 30, title: { es: "Creación, Eliminación y Reemplazo de Nodos", pt: "Criação, Remoção e Substituição de Nós" }, content: { es: Lecture30Es, pt: Lecture30Pt } },
    ],
  },
  {
    module: 8,
    title: {
        es: "Recorrido del DOM y Eventos de Usuario",
        pt: "Percorrendo o DOM e Eventos de Usuário"
    },
    lectures: [
        { id: 31, title: { es: "Recorrido del DOM (Traversing the DOM)", pt: "Percorrendo o DOM (Traversing the DOM)" }, content: { es: Lecture31Es, pt: Lecture31Pt } },
        { id: 32, title: { es: "Manejo de Eventos I: addEventListener", pt: "Manipulação de Eventos I: addEventListener" }, content: { es: Lecture32Es, pt: Lecture32Pt } },
        { id: 33, title: { es: "Manejo de Eventos II: Tipos de Eventos Comunes", pt: "Manipulação de Eventos II: Tipos de Eventos Comuns" }, content: { es: Lecture33Es, pt: Lecture33Pt } },
        { id: 34, title: { es: "Manejo de Eventos III: Delegación de Eventos y Optimización", pt: "Manipulação de Eventos III: Delegação de Eventos e Otimização" }, content: { es: Lecture34Es, pt: Lecture34Pt } },
    ],
  },
  {
    module: 9,
    title: {
        es: "Formularios Avanzados con JavaScript",
        pt: "Formulários Avançados com JavaScript"
    },
    lectures: [
        { id: 35, title: { es: "Interactividad de Formularios I: Captura y Envío de Datos", pt: "Interatividade de Formulários I: Captura e Envio de Dados" }, content: { es: Lecture35Es, pt: Lecture35Pt } },
        { id: 36, title: { es: "Interactividad de Formularios II: Validación del lado del Cliente", pt: "Interatividade de Formulários II: Validação do Lado do Cliente" }, content: { es: Lecture36Es, pt: Lecture36Pt } },
        { id: 37, title: { es: "Interactividad de Formularios III: Servicios Externos", pt: "Interatividade de Formulários III: Serviços Externos" }, content: { es: Lecture37Es, pt: Lecture37Pt } },
        { id: 38, title: { es: "Almacenamiento del Lado del Cliente y JSON", pt: "Armazenamento do Lado do Cliente e JSON" }, content: { es: Lecture38Es, pt: Lecture38Pt } },
    ],
  },
  {
    module: 10,
    title: {
        es: "Programación Asíncrona en JavaScript",
        pt: "Programação Assíncrona em JavaScript"
    },
    lectures: [
        { id: 39, title: { es: "Programación Asíncrona I: Callbacks y Temporizadores", pt: "Programação Assíncrona I: Callbacks e Temporizadores" }, content: { es: Lecture39Es, pt: Lecture39Pt } },
        { id: 40, title: { es: "Programación Asíncrona II: Promises (Introducción)", pt: "Programação Assíncrona II: Promises (Introdução)" }, content: { es: Lecture40Es, pt: Lecture40Pt } },
        { id: 41, title: { es: "Programación Asíncrona III: async/await", pt: "Programação Assíncrona III: async/await" }, content: { es: Lecture41Es, pt: Lecture41Pt } },
        { id: 42, title: { es: "Consumo de APIs con Fetch API", pt: "Consumo de APIs com a Fetch API" }, content: { es: Lecture42Es, pt: Lecture42Pt } },
    ],
  },
  {
    module: 11,
    title: {
        es: "Proyecto Práctico I con JavaScript",
        pt: "Projeto Prático I com JavaScript"
    },
    lectures: [
        { id: 43, title: { es: "Planificación y Estructura del Proyecto", pt: "Planejamento e Estrutura do Projeto" }, content: { es: Lecture43Es, pt: Lecture43Pt } },
        { id: 44, title: { es: "Implementación de Funcionalidades Principales", pt: "Implementação de Funcionalidades Principais" }, content: { es: Lecture44Es, pt: Lecture44Pt } },
        { id: 45, title: { es: "Persistencia de Datos y Eliminación", pt: "Persistência de Dados e Remoção" }, content: { es: Lecture45Es, pt: Lecture45Pt } },
        { id: 46, title: { es: "Refactorización y Mejora de la Experiencia de Usuario", pt: "Refatoração e Melhoria da Experiência do Usuário" }, content: { es: Lecture46Es, pt: Lecture46Pt } },
    ],
  },
  {
    module: 12,
    title: {
        es: "Proyecto Práctico II con JavaScript",
        pt: "Projeto Prático II com JavaScript"
    },
    lectures: [
        { id: 47, title: { es: "Planificación de un Carrito de Compras Básico", pt: "Planejamento de um Carrinho de Compras Básico" }, content: { es: Lecture47Es, pt: Lecture47Pt } },
        { id: 48, title: { es: "Añadir y Mostrar Productos en el Carrito", pt: "Adicionar e Mostrar Produtos no Carrinho" }, content: { es: Lecture48Es, pt: Lecture48Pt } },
        { id: 49, title: { es: "Actualizar Cantidades y Eliminar del Carrito", pt: "Atualizar Quantidades e Remover do Carrinho" }, content: { es: Lecture49Es, pt: Lecture49Pt } },
        { id: 50, title: { es: "Persistencia y Finalización de Compra", pt: "Persistência e Finalização da Compra" }, content: { es: Lecture50Es, pt: Lecture50Pt } },
    ],
  },
  {
    module: 13,
    title: {
        es: "Conceptos Modernos y Próximos Pasos en JavaScript",
        pt: "Conceitos Modernos e Próximos Passos em JavaScript"
    },
    lectures: [
        { id: 51, title: { es: "Introducción a ES6+ y Características Futuras", pt: "Introdução ao ES6+ e Recursos Futuros" }, content: { es: Lecture51Es, pt: Lecture51Pt } },
    ],
  },
];

// FIX: Added the missing findLectureById function to find a lecture by its ID within the course content structure.
export const findLectureById = (id: number): { module: Module; lecture: Lecture } | null => {
  for (const module of courseContent) {
    const lecture = module.lectures.find((l) => l.id === id);
    if (lecture) {
      return { module, lecture };
    }
  }
  return null;
};
