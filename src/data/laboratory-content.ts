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
				es: 'Usa <table border="1"> solo para ver los bordes sin CSS; el estilo con CSS lo verás en el Módulo 2.',
				pt: 'Usa <table border="1"> só para ver as bordas sem CSS; o estilo com CSS vais ver no Módulo 2.',
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
				es: "La tabla se entiende sin estilos: tr, th con scope y td bien usados, con bordes visibles.",
				pt: "A tabela percebe-se sem estilos: tr, th com scope e td bem usados, com bordas visíveis.",
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
				es: "Crea contacto.html con un form: Nombre (text), Correo (email), Motivo (select con tres opciones: Consulta General, Soporte Técnico, Sugerencias) y Mensaje (textarea).",
				pt: "Cria contato.html com um form: Nome (text), E-mail (email), Motivo (select com três opções: Consulta Geral, Suporte Técnico, Sugestões) e Mensagem (textarea).",
			},
			{
				es: "Cada campo con su label asociada (for + id idénticos).",
				pt: "Cada campo com a sua label associada (for + id idênticos).",
			},
			{
				es: "Dale a cada campo un name descriptivo (nombre, email, motivo, mensaje) y un placeholder de ayuda.",
				pt: "Dá a cada campo um name descritivo (nome, email, motivo, mensagem) e um placeholder de ajuda.",
			},
			{
				es: "Botones con type='submit' (“Enviar”) y type='reset' (“Limpiar”).",
				pt: "Botões com type='submit' (“Enviar”) e type='reset' (“Limpar”).",
			},
		],
		verify: [
			{
				es: "Clic en cada etiqueta enfoca su campo.",
				pt: "Clicar em cada rótulo foca o seu campo.",
			},
			{
				es: "Escribe un email sin @ e intenta enviar: el navegador muestra el aviso.",
				pt: "Escreve um e-mail sem @ e tenta enviar: o navegador mostra o aviso.",
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
				es: "Tu sitio tendrá 3 páginas enlazadas entre sí: index.html (portada), horario.html y contacto.html. Cada una lleva un nav a las otras dos.",
				pt: "O teu site terá 3 páginas ligadas entre si: index.html (capa), horario.html e contato.html. Cada uma leva um nav para as outras duas.",
			},
			{
				es: "index.html: h1 con tu nombre, dos secciones con h2, un párrafo con strong y em, más el nav.",
				pt: "index.html: h1 com o teu nome, duas seções com h2, um parágrafo com strong e em, mais o nav.",
			},
			{
				es: "horario.html: reutiliza la tabla del ejercicio 5, envuelta en header (h1 + nav), main y footer (tu nombre y año).",
				pt: "horario.html: reutiliza a tabela do exercício 5, envolvida em header (h1 + nav), main e footer (o teu nome e ano).",
			},
			{
				es: "contacto.html: reutiliza el formulario del ejercicio 6 con su validación de email funcionando.",
				pt: "contato.html: reutiliza o formulário do exercício 6 com a sua validação de e-mail a funcionar.",
			},
			{
				es: "En la portada, muestra una imagen con alt y el video o el mapa del ejercicio 4 con su iframe responsivo.",
				pt: "Na capa, mostra uma imagem com alt e o vídeo ou o mapa do exercício 4 com o seu iframe responsivo.",
			},
		],
		verify: [
			{
				es: "Se puede ir de cualquier página a cualquier otra solo con clics, sin errores en consola (F12).",
				pt: "Dá para ir de qualquer página para qualquer outra só com cliques, sem erros na consola (F12).",
			},
			{
				es: "Cada página tiene un único h1 y title propio en la pestaña.",
				pt: "Cada página tem um único h1 e title próprio na aba.",
			},
		],
	},
];

export const labModulo2: LabExercise[] = [
	{
		id: 8,
		lectureId: 7,
		title: {
			es: "Formulario robusto sin JavaScript",
			pt: "Formulário robusto sem JavaScript",
		},
		objective: {
			es: "Dar inteligencia al formulario del Módulo 1 con validación nativa del navegador.",
			pt: "Dar inteligência ao formulário do Módulo 1 com validação nativa do navegador.",
		},
		steps: [
			{
				es: "Abre el contacto.html del Laboratorio del Módulo 1 (ejercicio 6 de ese laboratorio).",
				pt: "Abre o contato.html do Laboratório do Módulo 1 (exercício 6 desse laboratório).",
			},
			{
				es: "Añade required a los campos de nombre y email.",
				pt: "Adiciona required aos campos de nome e e-mail.",
			},
			{
				es: "En el textarea del mensaje añade minlength='10'.",
				pt: "No textarea da mensagem adiciona minlength='10'.",
			},
			{
				es: "Añade el campo Teléfono completo: label (“Teléfono”), input con id, name, type='tel', pattern='[0-9]{9}', placeholder y title que explique el formato (9 dígitos).",
				pt: "Adiciona o campo Telefone completo: label (“Telefone”), input com id, name, type='tel', pattern='[0-9]{9}', placeholder e title a explicar o formato (9 dígitos).",
			},
			{
				es: "Pulsa Enviar con el formulario vacío y luego con datos incorrectos (mensaje de 3 letras, teléfono con letras). Si todo es válido, la página simplemente se recarga: aún no hay servidor que reciba los datos.",
				pt: "Prime Enviar com o formulário vazio e depois com dados incorretos (mensagem de 3 letras, telefone com letras). Se tudo for válido, a página apenas recarrega: ainda não há servidor para receber os dados.",
			},
		],
		verify: [
			{
				es: "Vacío: el navegador marca nombre y email; mensaje corto o teléfono con letras: también frena. Todo sin JavaScript.",
				pt: "Vazio: o navegador marca nome e e-mail; mensagem curta ou telefone com letras: também trava. Tudo sem JavaScript.",
			},
			{
				es: "El title del teléfono explica el formato esperado.",
				pt: "O title do telefone explica o formato esperado.",
			},
		],
	},
	{
		id: 9,
		lectureId: 8,
		title: {
			es: "Mi primera hoja externa y el reset",
			pt: "Minha primeira folha externa e o reset",
		},
		objective: {
			es: "Sacar el CSS a un archivo externo y partir de una base neutra con el reset universal.",
			pt: "Tirar o CSS para um ficheiro externo e partir de uma base neutra com o reset universal.",
		},
		steps: [
			{
				es: "Crea estilos-biografia.css en la misma carpeta que biografia.html.",
				pt: "Cria estilos-biografia.css na mesma pasta que biografia.html.",
			},
			{
				es: "Escribe el reset universal: * con margin 0, padding 0 y box-sizing border-box.",
				pt: "Escreve o reset universal: * com margin 0, padding 0 e box-sizing border-box.",
			},
			{
				es: "Enlaza la hoja en el head de biografia.html con link rel='stylesheet'.",
				pt: "Liga a folha no head de biografia.html com link rel='stylesheet'.",
			},
			{
				es: "Recarga con y sin el enlace (comenta la línea del link) y compara los márgenes del body.",
				pt: "Recarrega com e sem a ligação (comenta a linha do link) e compara as margens do body.",
			},
		],
		verify: [
			{
				es: "Sin el enlace se ven los ~8px del navegador; con el enlace, el contenido pega a los bordes.",
				pt: "Sem a ligação veem-se os ~8px do navegador; com a ligação, o conteúdo cola às bordas.",
			},
			{
				es: "Todo el CSS vive en el .css: el HTML no tiene atributos style.",
				pt: "Todo o CSS vive no .css: o HTML não tem atributos style.",
			},
		],
	},
	{
		id: 10,
		lectureId: 8,
		title: {
			es: "Selectores básicos en la biografía",
			pt: "Seletores básicos na biografia",
		},
		objective: {
			es: "Apuntar con selectores de tipo, ID, clase y agrupación sobre tu propia página.",
			pt: "Apontar com seletores de tipo, ID, classe e agrupamento na tua própria página.",
		},
		steps: [
			{
				es: "Dale id='nombre-titulo' a tu h1 y class='seccion' a cada sección de contenido.",
				pt: "Dá id='nome-titulo' ao teu h1 e class='seccao' a cada secção de conteúdo.",
			},
			{
				es: "Con el selector de tipo, dale al body un background-color y un font-family a tu elección.",
				pt: "Com o seletor de tipo, dá ao body um background-color e um font-family à tua escolha.",
			},
			{
				es: "Con el selector de ID, dale color a tu h1 y céntralo con text-align: center.",
				pt: "Com o seletor de ID, dá cor ao teu h1 e centra-o com text-align: center.",
			},
			{
				es: "Con el selector de clase, dale a .seccion un border y un padding.",
				pt: "Com o seletor de classe, dá a .seccao um border e um padding.",
			},
			{
				es: "Con agrupación (h1, h2), dales a todos los encabezados un mismo color.",
				pt: "Com agrupamento (h1, h2), dá a todos os cabeçalhos uma mesma cor.",
			},
		],
		verify: [
			{
				es: "Cambiar .seccion afecta a todas las secciones a la vez; cambiar el ID solo al h1.",
				pt: "Mudar .seccao afeta todas as secções de uma vez; mudar o ID só o h1.",
			},
			{
				es: "Cada regla usa el selector pedido: inspecciónalo en DevTools.",
				pt: "Cada regra usa o seletor pedido: inspeciona-o nas DevTools.",
			},
		],
	},
	{
		id: 11,
		lectureId: 9,
		title: {
			es: "Menú interactivo y lista cebra",
			pt: "Menu interativo e lista zebra",
		},
		objective: {
			es: "Seleccionar por relación, estado y posición en un menú y una lista reales.",
			pt: "Selecionar por relação, estado e posição num menu e numa lista reais.",
		},
		steps: [
			{
				es: "Crea menu.html con un nav > ul con tres enlaces y un ol con cinco ítems.",
				pt: "Cria menu.html com um nav > ul com três links e um ol com cinco itens.",
			},
			{
				es: "Con el descendiente nav a, dale estilo base a los enlaces del menú.",
				pt: "Com o descendente nav a, dá estilo base aos links do menu.",
			},
			{
				es: "Con a:hover, haz que cambien de color o se subrayen con el cursor encima.",
				pt: "Com a:hover, faz com que mudem de cor ou sejam sublinhados com o cursor em cima.",
			},
			{
				es: "En la lista: :nth-child(odd) con fondo, :first-child en negrita y :last-child con borde inferior.",
				pt: "Na lista: :nth-child(odd) com fundo, :first-child a negrito e :last-child com borda inferior.",
			},
			{
				es: "Pasa el cursor por el menú y revisa la cebra; si el hover “no funciona”, revisa el orden LoVe-HA.",
				pt: "Passa o cursor pelo menu e revê a zebra; se o hover “não funciona”, revê a ordem LoVe-HA.",
			},
		],
		verify: [
			{
				es: "El menú reacciona al cursor y la lista alterna el fondo con primero y último destacados.",
				pt: "O menu reage ao cursor e a lista alterna o fundo com primeiro e último destacados.",
			},
			{
				es: "Todo se logró con selectores: sin clases extra ni JavaScript.",
				pt: "Tudo feito com seletores: sem classes extra nem JavaScript.",
			},
		],
	},
	{
		id: 12,
		lectureId: 10,
		title: {
			es: "Cita con estilo y duelo de especificidad",
			pt: "Citação com estilo e duelo de especificidade",
		},
		objective: {
			es: "Generar contenido con pseudo-elementos y predecir el ganador de una pelea de selectores.",
			pt: "Gerar conteúdo com pseudo-elementos e prever o vencedor de uma luta de seletores.",
		},
		steps: [
			{
				es: "Crea cita.html con un blockquote y un button con id='btn-principal' y class='btn-accion'.",
				pt: "Cria citacao.html com um blockquote e um button com id='btn-principal' e class='btn-acao'.",
			},
			{
				es: "Con ::before y ::after (no olvides content), añade comillas gigantes al blockquote.",
				pt: "Com ::before e ::after (não esqueças o content), adiciona aspas gigantes ao blockquote.",
			},
			{
				es: "Tres reglas para el background del botón, cada una de un color: button, .btn-accion y #btn-principal.",
				pt: "Três regras para o background do botão, cada uma de uma cor: button, .btn-acao e #btn-principal.",
			},
			{
				es: "Antes de abrir el navegador, anota de qué color crees que será el botón y por qué paso del algoritmo.",
				pt: "Antes de abrir o navegador, anota de que cor achas que será o botão e por que passo do algoritmo.",
			},
		],
		verify: [
			{
				es: "Si quitas content, las comillas desaparecen: el pseudo-elemento no se renderiza.",
				pt: "Se tirares o content, as aspas desaparecem: o pseudo-elemento não se renderiza.",
			},
			{
				es: "Tu predicción fue correcta: gana el ID por especificidad.",
				pt: "A tua previsão estava correta: ganha o ID por especificidade.",
			},
		],
	},
	{
		id: 13,
		lectureId: 10,
		title: {
			es: "Integrador: mi sitio con estilos",
			pt: "Integrador: meu site com estilos",
		},
		objective: {
			es: "Vestir el sitio del Módulo 1 con una hoja compartida usando todo el módulo.",
			pt: "Vestir o site do Módulo 1 com uma folha partilhada usando todo o módulo.",
		},
		steps: [
			{
				es: "Crea estilos.css con el reset universal y enlázalo en las tres páginas del integrador del Módulo 1: index.html, horario.html y contacto.html.",
				pt: "Cria estilos.css com o reset universal e liga-o nas três páginas do integrador do Módulo 1: index.html, horario.html e contato.html.",
			},
			{
				es: "Dale estilo base al nav de todo el sitio con nav a y feedback con a:hover.",
				pt: "Dá estilo base ao nav de todo o site com nav a e feedback com a:hover.",
			},
			{
				es: "En horario.html, viste la tabla con cebra (tbody tr:nth-child(even)); en la hoja compartida, agrupa h1, h2 con un mismo color.",
				pt: "Em horario.html, veste a tabela com zebra (tbody tr:nth-child(even)); na folha partilhada, agrupa h1, h2 com uma mesma cor.",
			},
			{
				es: "En contacto.html reutiliza el formulario validado del ejercicio 8 de este laboratorio; en index.html añade una cita (blockquote) con comillas vía ::before/::after (con content).",
				pt: "Em contato.html reutiliza o formulário validado do exercício 8 deste laboratório; em index.html adiciona uma citação (blockquote) com aspas via ::before/::after (com content).",
			},
		],
		verify: [
			{
				es: "Un compañero recorre las 3 páginas: nav con hover, tabla cebra, formulario que valida y cita con comillas en la portada.",
				pt: "Um colega percorre as 3 páginas: nav com hover, tabela zebra, formulário que valida e citação com aspas na capa.",
			},
			{
				es: "Cero atributos style en el HTML: la presentación vive solo en el CSS.",
				pt: "Zero atributos style no HTML: a apresentação vive só no CSS.",
			},
		],
	},
];
