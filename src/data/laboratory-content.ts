import type { LocalizedString } from "@/types";

export interface LabExercise {
	id: number;
	lectureId: number;
	title: LocalizedString;
	objective: LocalizedString;
	steps: LocalizedString[];
	verify: LocalizedString[];
}

export const labModulo1: LabExercise[] = [
	{
		id: 1,
		lectureId: 1,
		title: {
			es: "Mi primera página web",
			pt: "Minha primeira página web",
		},
		objective: {
			es: "Dejar el entorno de trabajo listo y servir tu primera página con Live Server.",
			pt: "Deixar o ambiente pronto e servir a tua primeira página com o Live Server.",
		},
		steps: [
			{
				es: "Instala Visual Studio Code y las extensiones Live Server y Prettier.",
				pt: "Instala o Visual Studio Code e as extensões Live Server e Prettier.",
			},
			{
				es: "Crea la carpeta mi-primera-web y ábrela completa en VS Code.",
				pt: "Cria a pasta meu-primeiro-site e abre-a completa no VS Code.",
			},
			{
				es: "Crea index.html, escribe ! y pulsa Enter para generar la base con Emmet.",
				pt: "Cria index.html, escreve ! e prime Enter para gerar a base com o Emmet.",
			},
			{
				es: "Dentro del body añade un h1 con “¡Hola, Mundo!” y un p con tu presentación.",
				pt: "Dentro do body adiciona um h1 com “Olá, Mundo!” e um p com a tua apresentação.",
			},
			{
				es: "Clic derecho en index.html → Open with Live Server.",
				pt: "Clica com o botão direito em index.html → Open with Live Server.",
			},
		],
		verify: [
			{
				es: "La página abre en http://127.0.0.1:5500 y no como file://.",
				pt: "A página abre em http://127.0.0.1:5500 e não como file://.",
			},
			{
				es: "Al cambiar el texto y guardar, el navegador se recarga solo.",
				pt: "Ao mudar o texto e salvar, o navegador recarrega sozinho.",
			},
		],
	},
	{
		id: 2,
		lectureId: 2,
		title: {
			es: "Biografía estructurada",
			pt: "Biografia estruturada",
		},
		objective: {
			es: "Construir un documento completo con head configurado y jerarquía de encabezados.",
			pt: "Construir um documento completo com head configurado e hierarquia de cabeçalhos.",
		},
		steps: [
			{
				es: "Crea biografia.html con la base de Emmet.",
				pt: "Cria biografia.html com a base do Emmet.",
			},
			{
				es: "En el head: UTF-8, viewport, title “Mi Biografía - [Tu Nombre]”, meta description y lang='es' en html.",
				pt: "No head: UTF-8, viewport, title “Minha Biografia - [Teu Nome]”, meta description e lang='pt' no html.",
			},
			{
				es: "Un h1 con tu nombre, un h2 “Sobre Mí” con uno o dos párrafos.",
				pt: "Um h1 com o teu nome, um h2 “Sobre Mim” com um ou dois parágrafos.",
			},
			{
				es: "Separa con hr y añade un h2 “Mis Hobbies” con otro párrafo.",
				pt: "Separa com hr e adiciona um h2 “Meus Hobbies” com outro parágrafo.",
			},
			{
				es: "Usa br para un salto de línea en una dirección o poema corto.",
				pt: "Usa br para uma quebra de linha num endereço ou poema curto.",
			},
		],
		verify: [
			{
				es: "Hay un único h1 y la pestaña muestra tu título.",
				pt: "Há um único h1 e a aba mostra o teu título.",
			},
			{
				es: "Las tildes y la ñ se ven correctamente (UTF-8).",
				pt: "Os acentos e o ç aparecem corretamente (UTF-8).",
			},
		],
	},
	{
		id: 3,
		lectureId: 3,
		title: {
			es: "Receta con formato y listas",
			pt: "Receita com formato e listas",
		},
		objective: {
			es: "Aplicar formato semántico y los tres tipos de listas en una página de receta.",
			pt: "Aplicar formato semântico e os três tipos de listas numa página de receita.",
		},
		steps: [
			{
				es: "Crea receta.html con h1 del nombre de la receta e intro en p usando em para lo deliciosa que es.",
				pt: "Cria receita.html com h1 do nome da receita e intro em p usando em para o quão deliciosa é.",
			},
			{
				es: "Sección “Ingredientes” (h2) con ul; resalta el ingrediente principal con strong.",
				pt: "Seção “Ingredientes” (h2) com ul; destaca o ingrediente principal com strong.",
			},
			{
				es: "Sección “Instrucciones” (h2) con ol para los pasos.",
				pt: "Seção “Instruções” (h2) com ol para os passos.",
			},
			{
				es: "Glosario (h2) con dl explicando dos términos (ej: “Saltear”, “Baño María”).",
				pt: "Glossário (h2) com dl a explicar dois termos (ex: “Refogar”, “Banho-maria”).",
			},
			{
				es: "Nota importante con mark y derechos de autor con small.",
				pt: "Nota importante com mark e direitos de autor com small.",
			},
		],
		verify: [
			{
				es: "strong se usa para importancia real y no solo para “pintar” negrita.",
				pt: "strong é usado para importância real e não só para “pintar” negrito.",
			},
			{
				es: "Cada lista usa su etiqueta correcta: ul, ol y dl.",
				pt: "Cada lista usa a sua tag correta: ul, ol e dl.",
			},
		],
	},
	{
		id: 4,
		lectureId: 4,
		title: {
			es: "Galería multimedia",
			pt: "Galeria multimídia",
		},
		objective: {
			es: "Conectar páginas con enlaces e integrar imágenes y contenido externo.",
			pt: "Conectar páginas com links e integrar imagens e conteúdo externo.",
		},
		steps: [
			{
				es: "Crea galeria.html con h1 “Mi Galería Personal”.",
				pt: "Cria galeria.html com h1 “Minha Galeria Pessoal”.",
			},
			{
				es: "Añade dos img (relativas o de Lorem Picsum), cada una con su alt descriptivo.",
				pt: "Adiciona dois img (relativos ou do Lorem Picsum), cada um com o seu alt descritivo.",
			},
			{
				es: "Convierte una imagen en enlace a un sitio externo con target='_blank' y rel='noopener noreferrer'.",
				pt: "Converte uma imagem num link para um site externo com target='_blank' e rel='noopener noreferrer'.",
			},
			{
				es: "Incrusta un video de YouTube y un mapa de Google Maps con iframe responsivo.",
				pt: "Incorpora um vídeo do YouTube e um mapa do Google Maps com iframe responsivo.",
			},
			{
				es: "Enlaza index.html ↔ galeria.html en ambas direcciones.",
				pt: "Liga index.html ↔ galeria.html nas duas direções.",
			},
		],
		verify: [
			{
				es: "Se puede navegar de index a la galería y volver sin escribir URLs.",
				pt: "Dá para navegar do index para a galeria e voltar sem escrever URLs.",
			},
			{
				es: "El video y el mapa se ven bien en pantalla de celular.",
				pt: "O vídeo e o mapa ficam bem no ecrã do telemóvel.",
			},
		],
	},
	{
		id: 5,
		lectureId: 5,
		title: {
			es: "Horario semanal",
			pt: "Horário semanal",
		},
		objective: {
			es: "Representar datos tabulares con tabla semántica dentro de una página semántica.",
			pt: "Representar dados tabulares com tabela semântica dentro de uma página semântica.",
		},
		steps: [
			{
				es: "Crea horario.html con tabla de lunes a viernes: thead con los días, tbody con horas y clases.",
				pt: "Cria horario.html com tabela de segunda a sexta: thead com os dias, tbody com horas e aulas.",
			},
			{
				es: "Envuelve la tabla en un div con overflow-x-auto y estilízala con Tailwind.",
				pt: "Envolve a tabela numa div com overflow-x-auto e estiliza com Tailwind.",
			},
			{
				es: "Reto: rowspan='2' para la clase de dos horas y colspan con “Libre” en la tarde libre.",
				pt: "Desafio: rowspan='2' para a aula de duas horas e colspan com “Livre” na tarde livre.",
			},
			{
				es: "Estructura la página: header con h1 + nav a index.html, tabla en el cuerpo, footer con tu nombre y año.",
				pt: "Estrutura a página: header com h1 + nav para index.html, tabela no corpo, footer com o teu nome e ano.",
			},
		],
		verify: [
			{
				es: "La tabla no se rompe en pantallas angostas (scroll horizontal).",
				pt: "A tabela não quebra em ecrãs estreitos (rolagem horizontal).",
			},
			{
				es: "No hay tablas usadas para maquetar: solo datos.",
				pt: "Não há tabelas usadas para layout: só dados.",
			},
		],
	},
	{
		id: 6,
		lectureId: 6,
		title: {
			es: "Formulario de contacto",
			pt: "Formulário de contato",
		},
		objective: {
			es: "Crear un formulario completo, accesible y con nombres correctos.",
			pt: "Criar um formulário completo, acessível e com nomes corretos.",
		},
		steps: [
			{
				es: "Crea contacto.html con un form: Nombre (text), Correo (email), Motivo (select), Mensaje (textarea).",
				pt: "Cria contato.html com um form: Nome (text), E-mail (email), Motivo (select), Mensagem (textarea).",
			},
			{
				es: "Cada campo con su label asociada (for + id idénticos).",
				pt: "Cada campo com a sua label associada (for + id idênticos).",
			},
			{
				es: "name único en cada campo y placeholder como ayuda.",
				pt: "name único em cada campo e placeholder como ajuda.",
			},
			{
				es: "Botones submit (“Enviar”) y reset (“Limpiar”).",
				pt: "Botões submit (“Enviar”) e reset (“Limpar”).",
			},
		],
		verify: [
			{
				es: "Clic en cada etiqueta enfoca su campo.",
				pt: "Clicar em cada rótulo foca o seu campo.",
			},
			{
				es: "Escribir un email inválido muestra el aviso del navegador.",
				pt: "Escrever um e-mail inválido mostra o aviso do navegador.",
			},
		],
	},
	{
		id: 7,
		lectureId: 6,
		title: {
			es: "Integrador: mi sitio personal",
			pt: "Integrador: meu site pessoal",
		},
		objective: {
			es: "Combinar todo el módulo en un sitio de tres páginas enlazadas.",
			pt: "Combinar todo o módulo num site de três páginas ligadas.",
		},
		steps: [
			{
				es: "index.html: presentación con h1, dos secciones con h2, un párrafo con strong y em, y nav a las otras páginas.",
				pt: "index.html: apresentação com h1, duas seções com h2, um parágrafo com strong e em, e nav para as outras páginas.",
			},
			{
				es: "Reutiliza tu tabla del ejercicio 5 en una página “Horario” envuelta en header/main/footer.",
				pt: "Reutiliza a tua tabela do exercício 5 numa página “Horário” envolvida em header/main/footer.",
			},
			{
				es: "Reutiliza tu formulario del ejercicio 6 en una página “Contacto” con validación de email funcionando.",
				pt: "Reutiliza o teu formulário do exercício 6 numa página “Contato” com validação de e-mail a funcionar.",
			},
			{
				es: "Todas las imágenes con alt, un iframe responsivo y enlaces que funcionan en ambas direcciones.",
				pt: "Todas as imagens com alt, um iframe responsivo e links a funcionar nas duas direções.",
			},
		],
		verify: [
			{
				es: "Un compañero puede navegar todo el sitio sin ayuda y sin errores en consola.",
				pt: "Um colega consegue navegar todo o site sem ajuda e sem erros na consola.",
			},
			{
				es: "Cada página tiene un único h1 y title propio en la pestaña.",
				pt: "Cada página tem um único h1 e title próprio na aba.",
			},
		],
	},
];
