import type { LocalizedString } from "@/types";

export interface LabStarterFile {
	file: string;
	code: string;
}

export interface LabExercise {
	id: number;
	lectureId: number;
	title: LocalizedString;
	objective: LocalizedString;
	steps: LocalizedString[];
	verify: LocalizedString[];
	expected: LocalizedString;
	starter?: {
		es: LabStarterFile[];
		pt: LabStarterFile[];
	};
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
		expected: {
			es: "En el navegador ves tu h1 gigante con ¡Hola, Mundo! y debajo tu presentación, servido desde http://127.0.0.1:5500.",
			pt: "No navegador vês o teu h1 gigante com Olá, Mundo! e abaixo a tua apresentação, servido de http://127.0.0.1:5500.",
		},
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
		expected: {
			es: "Ves tu nombre como título principal, dos secciones con subtítulos y párrafos legibles con tildes y ñ perfectas.",
			pt: "Vês o teu nome como título principal, duas secções com subtítulos e parágrafos legíveis com acentos perfeitos.",
		},
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
		expected: {
			es: "Ves ingredientes con viñetas, pasos numerados, glosario con términos y una nota resaltada en amarillo.",
			pt: "Vês ingredientes com marcas, passos numerados, glossário com termos e uma nota destacada a amarelo.",
		},
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
		expected: {
			es: "Ves dos imágenes, una que abre un sitio externo en pestaña nueva, más video y mapa incrustados que se adaptan al celular.",
			pt: "Vês duas imagens, uma que abre um site externo em novo separador, mais vídeo e mapa incorporados que se adaptam ao telemóvel.",
		},
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
				es: "Crea horario.html con tabla de lunes a viernes: caption “Mi horario”, thead con una fila (th vacía + Lun a Vie con scope='col') y tbody con tres filas de horas (la hora en th con scope='row').",
				pt: "Cria horario.html com tabela de segunda a sexta: caption “Meu horário”, thead com uma linha (th vazia + Seg a Sex com scope='col') e tbody com três linhas de horas (a hora em th com scope='row').",
			},
			{
				es: 'Usa <table border="1"> solo para ver los bordes sin CSS; el estilo con CSS lo verás en el Módulo 2.',
				pt: 'Usa <table border="1"> só para ver as bordas sem CSS; o estilo com CSS vais ver no Módulo 2.',
			},
			{
				es: "Reto: AW1 ocupa dos horas el lunes (td con rowspan='2') y la tarde del viernes queda “Libre” con td y colspan='2'.",
				pt: "Desafio: AW1 ocupa duas horas à segunda (td com rowspan='2') e a tarde de sexta fica “Livre” com td e colspan='2'.",
			},
			{
				es: "Estructura la página: header con h1 + nav a index.html, tabla en el cuerpo, footer con tu nombre y año.",
				pt: "Estrutura a página: header com h1 + nav para index.html, tabela no corpo, footer com o teu nome e ano.",
			},
		],
		verify: [
			{
				es: "La tabla se entiende sin estilos: caption, tr, th con scope (col en días, row en horas) y td bien usados, con bordes visibles.",
				pt: "A tabela percebe-se sem estilos: caption, tr, th com scope (col nos dias, row nas horas) e td bem usados, com bordas visíveis.",
			},
			{
				es: "No hay tablas usadas para maquetar: solo datos.",
				pt: "Não há tabelas usadas para layout: só dados.",
			},
		],
		expected: {
			es: "Ves la semana con días como encabezados, una clase ocupando dos horas y la tarde libre combinada, todo con bordes.",
			pt: "Vês a semana com dias como cabeçalhos, uma aula a ocupar duas horas e a tarde livre combinada, tudo com bordas.",
		},
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
		expected: {
			es: "Ves etiquetas que al clic enfocan cada campo y un email sin @ que el navegador frena con aviso.",
			pt: "Vês rótulos que ao clicar focam cada campo e um e-mail sem @ que o navegador trava com aviso.",
		},
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
		expected: {
			es: "Ves tres páginas navegables entre sí, cada una con su h1 y título de pestaña, sin errores en consola.",
			pt: "Vês três páginas navegáveis entre si, cada uma com o seu h1 e título de aba, sem erros na consola.",
		},
	},
];

export const labModulo2: LabExercise[] = [
	{
		id: 8,
		lectureId: 7,
		title: {
			es: "Inscripción a un taller",
			pt: "Inscrição num workshop",
		},
		objective: {
			es: "Validar un formulario entero con las herramientas del navegador, sin una sola línea de JavaScript.",
			pt: "Validar um formulário inteiro com as ferramentas do navegador, sem uma única linha de JavaScript.",
		},
		steps: [
			{
				es: "Copiá el código inicial de abajo en un archivo llamado inscripcion.html y abrilo con Live Server.",
				pt: "Copia o código inicial abaixo para um ficheiro chamado inscricao.html e abre-o com o Live Server.",
			},
			{
				es: "Marcá como obligatorios el nombre, el correo y el taller agregando required a esos tres campos.",
				pt: "Marca como obrigatórios o nome, o e-mail e o workshop adicionando required a esses três campos.",
			},
			{
				es: "En el mensaje pedí un mínimo y un máximo de caracteres con minlength='20' y maxlength='300'.",
				pt: "Na mensagem pede um mínimo e um máximo de caracteres com minlength='20' e maxlength='300'.",
			},
			{
				es: "En el teléfono agregá pattern='[0-9]{9}' y un title que explique el formato; en el correo, autocomplete='email'.",
				pt: "No telefone adiciona pattern='[0-9]{9}' e um title que explique o formato; no e-mail, autocomplete='email'.",
			},
			{
				es: "Probá los cuatro fallos: enviá vacío, con un mensaje de 5 letras, con un teléfono con letras y con un correo sin @.",
				pt: "Experimenta os quatro casos: envia vazio, com uma mensagem de 5 letras, com um telefone com letras e com um e-mail sem @.",
			},
		],
		verify: [
			{
				es: "El navegador frena el envío vacío, el mensaje de 5 letras, el teléfono con letras y el correo sin @: los mensajes los pone el navegador, no tu código.",
				pt: "O navegador trava o envio vazio, a mensagem de 5 letras, o telefone com letras e o e-mail sem @: as mensagens põe-nas o navegador, não o teu código.",
			},
			{
				es: "Al pasar el cursor por el teléfono, el title explica el formato esperado.",
				pt: "Ao passar o cursor pelo telefone, o title explica o formato esperado.",
			},
			{
				es: "No hay ni un script en la página: la validación es del navegador.",
				pt: "Não há nem um script na página: a validação é do navegador.",
			},
		],
		expected: {
			es: "Ves el formulario de inscripción con los campos obligatorios marcados y el navegador frenando los cuatro casos, sin JavaScript en tu código.",
			pt: "Vês o formulário de inscrição com os campos obrigatórios marcados e o navegador a travar os quatro casos, sem JavaScript no teu código.",
		},
		starter: {
			es: [
				{
					file: "inscripcion.html",
					code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inscripción al taller</title>
</head>
<body>
  <h1>Inscripción al taller</h1>
  <p>Completa los datos para reservar tu plaza.</p>

  <form>
    <label for="nombre">Nombre completo:</label>
    <input type="text" id="nombre" name="nombre" placeholder="Tu nombre">

    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email" placeholder="tu@correo.com">

    <label for="taller">Taller:</label>
    <select id="taller" name="taller">
      <option value="">Elige un taller</option>
      <option value="html">HTML semántico</option>
      <option value="css">CSS desde cero</option>
      <option value="git">Git y GitHub</option>
    </select>

    <label for="telefono">Teléfono (9 dígitos):</label>
    <input type="tel" id="telefono" name="telefono" placeholder="600000000">

    <label for="mensaje">Mensaje:</label>
    <textarea id="mensaje" name="mensaje" placeholder="Cuéntanos por qué quieres ir"></textarea>

    <button type="submit">Reservar plaza</button>
    <button type="reset">Limpiar</button>
  </form>
</body>
</html>`,
				},
			],
			pt: [
				{
					file: "inscricao.html",
					code: `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inscrição no workshop</title>
</head>
<body>
  <h1>Inscrição no workshop</h1>
  <p>Preenche os dados para reservar a tua vaga.</p>

  <form>
    <label for="nome">Nome completo:</label>
    <input type="text" id="nome" name="nome" placeholder="O teu nome">

    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" placeholder="teu@email.com">

    <label for="workshop">Workshop:</label>
    <select id="workshop" name="workshop">
      <option value="">Escolhe um workshop</option>
      <option value="html">HTML semântico</option>
      <option value="css">CSS do zero</option>
      <option value="git">Git e GitHub</option>
    </select>

    <label for="telefone">Telefone (9 dígitos):</label>
    <input type="tel" id="telefone" name="telefone" placeholder="900000000">

    <label for="mensagem">Mensagem:</label>
    <textarea id="mensagem" name="mensagem" placeholder="Conta-nos porque queres ir"></textarea>

    <button type="submit">Reservar vaga</button>
    <button type="reset">Limpar</button>
  </form>
</body>
</html>`,
				},
			],
		},
	},
	{
		id: 9,
		lectureId: 8,
		title: {
			es: "La carta de un restaurante",
			pt: "A carta de um restaurante",
		},
		objective: {
			es: "Comparar las tres formas de incluir CSS y partir de una base neutra con el reset y el box-sizing.",
			pt: "Comparar as três formas de incluir CSS e partir de uma base neutra com o reset e o box-sizing.",
		},
		steps: [
			{
				es: "Copiá el código inicial de abajo en carta.html y abrilo con Live Server.",
				pt: "Copia o código inicial abaixo para carta.html e abre-o com o Live Server.",
			},
			{
				es: "CSS en línea: agregá style='background-color: #f3ead9' al header y mirá el resultado.",
				pt: "CSS em linha: adiciona style='background-color: #f3ead9' ao header e vê o resultado.",
			},
			{
				es: "CSS interno: sacá el estilo en línea y poné un bloque style en el head con la misma regla.",
				pt: "CSS interno: retira o estilo em linha e coloca um bloco style no head com a mesma regra.",
			},
			{
				es: "CSS externo: creá carta.css en la misma carpeta, pasá la regla ahí y enlazala con link rel='stylesheet' href='carta.css' en el head.",
				pt: "CSS externo: cria carta.css na mesma pasta, passa a regra para lá e liga-a com link rel='stylesheet' href='carta.css' no head.",
			},
			{
				es: "Compará los tres casos: se ve igual. Lo que cambia es dónde vive el CSS, no lo que se ve.",
				pt: "Compara os três casos: vê-se igual. O que muda é onde vive o CSS, não o que se vê.",
			},
			{
				es: "Reset: en carta.css escribí el reset universal (*, *::before y *::after con margin 0, padding 0 y box-sizing border-box). Recargá: el body pierde los 8px del navegador y los títulos pierden sus márgenes por defecto.",
				pt: "Reset: em carta.css escreve o reset universal (*, *::before e *::after com margin 0, padding 0 e box-sizing border-box). Recarrega: o body perde os 8px do navegador e os títulos perdem as margens por omissão.",
			},
			{
				es: "Box-sizing: creá .fila con 400px de ancho y .caja con 200px, padding 20px y border 10px. Sin el reset las cajas se desbordan; con el reset entran lado a lado.",
				pt: "Box-sizing: cria .fila com 400px de largura e .caja com 200px, padding 20px e border 10px. Sem o reset as caixas transbordam; com o reset entram lado a lado.",
			},
		],
		verify: [
			{
				es: "Las tres formas de incluir CSS se ven igual: lo que cambia es dónde vive el código.",
				pt: "As três formas de incluir CSS vêem-se igual: o que muda é onde vive o código.",
			},
			{
				es: "Sin reset el body tiene los ~8px del navegador; con el reset, el contenido pega al borde.",
				pt: "Sem reset o body tem os ~8px do navegador; com o reset, o conteúdo cola à borda.",
			},
			{
				es: "Las dos cajas de 200px con padding y borde entran lado a lado en los 400px de .fila.",
				pt: "As duas caixas de 200px com padding e borda entram lado a lado nos 400px de .fila.",
			},
			{
				es: "El HTML no tiene atributos style: el CSS vive en carta.css.",
				pt: "O HTML não tem atributos style: o CSS vive em carta.css.",
			},
		],
		expected: {
			es: "Ves la carta pegada al borde, con los títulos sin los márgenes del navegador y las dos cajas de 200px entrando lado a lado en su fila de 400px.",
			pt: "Vês a carta colada à borda, com os títulos sem as margens do navegador e as duas caixas de 200px a entrar lado a lado na sua fila de 400px.",
		},
		starter: {
			es: [
				{
					file: "carta.html",
					code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Carta del restaurante</title>
</head>
<body>
  <header>
    <h1>Restaurante La Plaza</h1>
    <p>Cocina de temporada todos los días</p>
  </header>

  <main>
    <section>
      <h2>Entrantes</h2>
      <ul>
        <li>Tortilla de patatas - 8 €</li>
        <li>Gazpacho - 7 €</li>
      </ul>
    </section>

    <section>
      <h2>Platos</h2>
      <ul>
        <li>Salmorejo con huevo - 14 €</li>
        <li>Lubina al horno - 19 €</li>
      </ul>
    </section>

    <div class="fila">
      <div class="caja">Caja 1</div>
      <div class="caja">Caja 2</div>
    </div>
  </main>

  <footer>
    <p>Reservas: 900 000 000</p>
  </footer>
</body>
</html>`,
				},
			],
			pt: [
				{
					file: "carta.html",
					code: `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Carta do restaurante</title>
</head>
<body>
  <header>
    <h1>Restaurante A Praça</h1>
    <p>Cozinha de estação todos os dias</p>
  </header>

  <main>
    <section>
      <h2>Entrantes</h2>
      <ul>
        <li>Tortilha de batatas - 8 €</li>
        <li>Gazpacho - 7 €</li>
      </ul>
    </section>

    <section>
      <h2>Pratos</h2>
      <ul>
        <li>Salmorejo com ovo - 14 €</li>
        <li>Robalo assado - 19 €</li>
      </ul>
    </section>

    <div class="fila">
      <div class="caja">Caixa 1</div>
      <div class="caja">Caixa 2</div>
    </div>
  </main>

  <footer>
    <p>Reservas: 900 000 000</p>
  </footer>
</body>
</html>`,
				},
			],
		},
	},
	{
		id: 10,
		lectureId: 8,
		title: {
			es: "Cartelera de un festival",
			pt: "Cartaz de um festival",
		},
		objective: {
			es: "Apuntar con selectores de tipo, ID, clase y agrupación sobre una cartelera real.",
			pt: "Apontar com seletores de tipo, ID, classe e agrupamento num cartaz real.",
		},
		steps: [
			{
				es: "Copiá el código inicial de abajo en cartelera.html. El enlace a cartelera.css ya está en el head: creá ese archivo en la misma carpeta.",
				pt: "Copia o código inicial abaixo para cartaz.html. A ligação a cartaz.css já está no head: cria esse ficheiro na mesma pasta.",
			},
			{
				es: "Selector de tipo: con body definí un background-color y un font-family.",
				pt: "Seletor de tipo: com body define um background-color e um font-family.",
			},
			{
				es: "Selector de ID: con #titulo-festival dale un color al h1 y centralo con text-align: center.",
				pt: "Seletor de ID: com #titulo-festival dá uma cor ao h1 e centra-o com text-align: center.",
			},
			{
				es: "Selector de clase: con .bloque dale un border, un padding y un fondo a los dos bloques.",
				pt: "Seletor de classe: com .bloque dá um border, um padding e um fundo aos dois blocos.",
			},
			{
				es: "Agrupación: con h1, h2 les das a todos los encabezados el mismo color y revisá cada regla en DevTools.",
				pt: "Agrupamento: com h1, h2 dá a todos os cabeçalhos a mesma cor e revê cada regra nas DevTools.",
			},
		],
		verify: [
			{
				es: "Cambiar .bloque afecta a los dos bloques a la vez; cambiar #titulo-festival solo al h1.",
				pt: "Mudar .bloque afeta os dois blocos de uma vez; mudar #titulo-festival só o h1.",
			},
			{
				es: "Cada regla usa el selector pedido: inspeccionalo en DevTools.",
				pt: "Cada regra usa o seletor pedido: inspeciona-o nas DevTools.",
			},
			{
				es: "El HTML no tiene atributos style: todo el estilo está en cartelera.css.",
				pt: "O HTML não tem atributos style: todo o estilo está em cartaz.css.",
			},
		],
		expected: {
			es: "Ves el fondo y la fuente de la cartelera, el título centrado con tu color, los dos bloques con borde y relleno y todos los encabezados del mismo color.",
			pt: "Vês o fundo e a fonte do cartaz, o título centrado com a tua cor, os dois blocos com borda e preenchimento e todos os cabeçalhos com a mesma cor.",
		},
		starter: {
			es: [
				{
					file: "cartelera.html",
					code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cartelera del festival</title>
  <link rel="stylesheet" href="cartelera.css">
</head>
<body>
  <header>
    <h1 id="titulo-festival">Noche de Jazz</h1>
    <nav>
      <a href="#programa">Programa</a>
      <a href="#entradas">Entradas</a>
    </nav>
  </header>

  <main>
    <section class="bloque" id="programa">
      <h2>Programa</h2>
      <p>Conciertos de 20:00 a 23:30 en la sala principal.</p>
    </section>

    <section class="bloque" id="entradas">
      <h2>Entradas</h2>
      <p>Entrada general: 12 €. Entrada reducida: 8 €.</p>
    </section>
  </main>

  <footer>
    <p>Ayuntamiento de Música y Artes Escénicas</p>
  </footer>
</body>
</html>`,
				},
			],
			pt: [
				{
					file: "cartaz.html",
					code: `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cartaz do festival</title>
  <link rel="stylesheet" href="cartaz.css">
</head>
<body>
  <header>
    <h1 id="titulo-festival">Noite de Jazz</h1>
    <nav>
      <a href="#programa">Programa</a>
      <a href="#entradas">Entradas</a>
    </nav>
  </header>

  <main>
    <section class="bloque" id="programa">
      <h2>Programa</h2>
      <p>Concertos das 20:00 às 23:30 na sala principal.</p>
    </section>

    <section class="bloque" id="entradas">
      <h2>Entradas</h2>
      <p>Geral: 12 €. Meia: 8 €.</p>
    </section>
  </main>

  <footer>
    <p>Câmara Municipal de Música e Artes Performativas</p>
  </footer>
</body>
</html>`,
				},
			],
		},
	},
	{
		id: 11,
		lectureId: 9,
		title: {
			es: "Menú y ranking",
			pt: "Menu e ranking",
		},
		objective: {
			es: "Seleccionar por relación, atributo, estado y posición en un menú y un ranking reales.",
			pt: "Selecionar por relação, atributo, estado e posição num menu e num ranking reais.",
		},
		steps: [
			{
				es: "Copiá el código inicial de abajo en menu.html. El enlace a menu.css ya está en el head: creá ese archivo en la misma carpeta.",
				pt: "Copia o código inicial abaixo para menu.html. A ligação a menu.css já está no head: cria esse ficheiro na mesma pasta.",
			},
			{
				es: "Descendiente: con nav a, dale estilo base a los enlaces del menú.",
				pt: "Descendente: com nav a, dá estilo base aos links do menu.",
			},
			{
				es: "Estado: con a:hover, que cambien de color y se subrayen al pasar el cursor.",
				pt: "Estado: com a:hover, que mudem de cor e sejam sublinhados ao passar o cursor.",
			},
			{
				es: "Posición: con ol > li:nth-child(even) pintá el fondo de los ítems pares (cebra); con ol > li:first-child poné el primero en negrita y con ol > li:last-child poné un borde inferior al último.",
				pt: "Posição: com ol > li:nth-child(even) pinta o fundo dos itens pares (zebra); com ol > li:first-child põe o primeiro a negrito e com ol > li:last-child põe uma borda inferior ao último.",
			},
			{
				es: "Atributo y hermano: con a[href^='#'] distinguí los enlaces internos del menú, y con ul > li + li separá los ítems del menú con un margen.",
				pt: "Atributo e irmão: com a[href^='#'] distingue os links internos do menu, e com ul > li + li separa os itens do menu com uma margem.",
			},
		],
		verify: [
			{
				es: "El menú reacciona al cursor y el ranking alterna el fondo, con el primero en negrita y el último con borde.",
				pt: "O menu reage ao cursor e o ranking alterna o fundo, com o primeiro a negrito e o último com borda.",
			},
			{
				es: "Los enlaces internos (href que empieza con #) tienen un color distinto.",
				pt: "Os links internos (href que começa com #) têm uma cor diferente.",
			},
			{
				es: "Todo se logró con selectores: sin clases extra ni JavaScript.",
				pt: "Tudo ficou feito com seletores: sem classes extra nem JavaScript.",
			},
		],
		expected: {
			es: "Ves el menú que cambia con el cursor y el ranking con el fondo alternado, el primero en negrita, el último con borde y los enlaces internos con otro color.",
			pt: "Vês o menu que muda com o cursor e o ranking com o fundo alternado, o primeiro a negrito, o último com borda e os links internos com outra cor.",
		},
		starter: {
			es: [
				{
					file: "menu.html",
					code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menú y ranking</title>
  <link rel="stylesheet" href="menu.css">
</head>
<body>
  <nav>
    <ul>
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#temporadas">Temporadas</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>

  <h1>Ranking de la temporada</h1>

  <ol>
    <li>Cielo roto</li>
    <li>La casa de enfrente</li>
    <li>Vértigo</li>
    <li>Línea de sueño</li>
    <li>El último tren</li>
  </ol>

  <footer>
    <p>Promovido por <a href="https://example.com">el ayuntamiento</a></p>
  </footer>
</body>
</html>`,
				},
			],
			pt: [
				{
					file: "menu.html",
					code: `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menu e ranking</title>
  <link rel="stylesheet" href="menu.css">
</head>
<body>
  <nav>
    <ul>
      <li><a href="#inicio">Início</a></li>
      <li><a href="#temporadas">Temporadas</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>

  <h1>Ranking da temporada</h1>

  <ol>
    <li>Céu partido</li>
    <li>A casa em frente</li>
    <li>Vertigem</li>
    <li>Linha de sonho</li>
    <li>O último comboio</li>
  </ol>

  <footer>
    <p>Promovido pela <a href="https://example.com">câmara municipal</a></p>
  </footer>
</body>
</html>`,
				},
			],
		},
	},
	{
		id: 12,
		lectureId: 10,
		title: {
			es: "Reseña de un lector",
			pt: "Crítica de um leitor",
		},
		objective: {
			es: "Generar contenido con pseudo-elementos y predecir el ganador de una pelea de selectores.",
			pt: "Gerar conteúdo com pseudo-elementos e prever o vencedor de uma luta de seletores.",
		},
		steps: [
			{
				es: "Copiá el código inicial de abajo en resena.html. El enlace a resena.css ya está en el head: creá ese archivo en la misma carpeta.",
				pt: "Copia o código inicial abaixo para critica.html. A ligação a critica.css já está no head: cria esse ficheiro na mesma pasta.",
			},
			{
				es: "Pseudo-elementos: con blockquote::before y blockquote::after añadí comillas gigantes. No olvides content: '\"' en las dos reglas: sin content el pseudo-elemento no se renderiza.",
				pt: "Pseudo-elementos: com blockquote::before e blockquote::after adiciona aspas gigantes. Não esqueças content: '\"' nas duas regras: sem content o pseudo-elemento não se renderiza.",
			},
			{
				es: "Tres reglas para el fondo del botón, cada una de un color: button (gris), .btn-accion (verde) y #btn-reservar (rojo).",
				pt: "Três regras para o fundo do botão, cada uma de uma cor: button (cinzento), .btn-acao (verde) e #btn-reservar (vermelho).",
			},
			{
				es: "Antes de abrir el navegador, anotá de qué color creés que va a quedar el botón y por qué paso del algoritmo.",
				pt: "Antes de abrir o navegador, anota de que cor achas que vai ficar o botão e por que passo do algoritmo.",
			},
		],
		verify: [
			{
				es: "Si quitás content, las comillas desaparecen: el pseudo-elemento no se renderiza.",
				pt: "Se tirares o content, as aspas desaparecem: o pseudo-elemento não se renderiza.",
			},
			{
				es: "Tu predicción fue correcta: gana el ID por especificidad (1-0-0 le gana a 0-1-0, que le gana a 0-0-1).",
				pt: "A tua previsão estava correta: ganha o ID por especificidade (1-0-0 ganha a 0-1-0, que ganha a 0-0-1).",
			},
			{
				es: "El botón quedó con su color sin usar !important.",
				pt: "O botão ficou com a sua cor sem usar !important.",
			},
		],
		expected: {
			es: "Ves la cita con comillas gigantes y el botón en rojo: ganó el ID, tal como predijiste.",
			pt: "Vês a crítica com aspas gigantes e o botão a vermelho: ganhou o ID, tal como previste.",
		},
		starter: {
			es: [
				{
					file: "resena.html",
					code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reseña de un lector</title>
  <link rel="stylesheet" href="resena.css">
</head>
<body>
  <blockquote>
    La simplicidad es la última sofisticación.
  </blockquote>

  <button id="btn-reservar" class="btn-accion" type="button">Reservar butaca</button>
</body>
</html>`,
				},
			],
			pt: [
				{
					file: "critica.html",
					code: `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crítica de um leitor</title>
  <link rel="stylesheet" href="critica.css">
</head>
<body>
  <blockquote>
    A simplicidade é a última sofisticação.
  </blockquote>

  <button id="btn-reservar" class="btn-acao" type="button">Reservar lugar</button>
</body>
</html>`,
				},
			],
		},
	},
	{
		id: 13,
		lectureId: 10,
		title: {
			es: "Integrador: la web de una librería",
			pt: "Integrador: o site de uma livraria",
		},
		objective: {
			es: "Vestir tres páginas con una sola hoja compartida usando todo el módulo.",
			pt: "Vestir três páginas com uma única folha partilhada usando todo o módulo.",
		},
		steps: [
			{
				es: "Copiá los tres archivos de abajo (index.html, catalogo.html y pedidos.html) en una carpeta llamada libreria.",
				pt: "Copia os três ficheiros abaixo (index.html, catalogo.html e pedidos.html) para uma pasta chamada livraria.",
			},
			{
				es: "Creá estilos-libreria.css en esa carpeta con el reset universal (*, *::before y *::after con margin 0, padding 0 y box-sizing border-box). Los tres archivos ya lo enlazan.",
				pt: "Cria estilos-livraria.css nessa pasta com o reset universal (*, *::before e *::after com margin 0, padding 0 e box-sizing border-box). Os três ficheiros já o ligam.",
			},
			{
				es: "Nav compartido: con nav a y nav a:hover dale estilo a los enlaces del menú en las tres páginas.",
				pt: "Nav partilhado: com nav a e nav a:hover dá estilo aos links do menu nas três páginas.",
			},
			{
				es: "En catalogo.html, aplicá la cebra a la tabla con tbody tr:nth-child(even) y agrupá h1, h2 con un mismo color en la hoja compartida.",
				pt: "Em catalogo.html, aplica a zebra à tabela com tbody tr:nth-child(even) e agrupa h1, h2 com uma mesma cor na folha partilhada.",
			},
			{
				es: "En pedidos.html el formulario ya trae la validación (required, minlength y type): comprobá que frena vacío y que el correo sin @ no pasa. En index.html, añadí comillas a la cita con blockquote::before y blockquote::after (con content).",
				pt: "Em pedidos.html o formulário já traz a validação (required, minlength e type): confirma que trava vazio e que o e-mail sem @ não passa. Em index.html, adiciona aspas à citação com blockquote::before e blockquote::after (com content).",
			},
		],
		verify: [
			{
				es: "Un compañero recorre las 3 páginas: nav con hover, tabla cebra, formulario que valida y cita con comillas en la portada.",
				pt: "Um colega percorre as 3 páginas: nav com hover, tabela zebra, formulário que valida e citação com aspas na capa.",
			},
			{
				es: "Cero atributos style en el HTML: la presentación vive solo en estilos-libreria.css.",
				pt: "Zero atributos style no HTML: a apresentação vive só em estilos-livraria.css.",
			},
			{
				es: "El formulario frena el envío vacío y el correo sin @, sin JavaScript.",
				pt: "O formulário trava o envio vazio e o e-mail sem @, sem JavaScript.",
			},
		],
		expected: {
			es: "Ves las 3 páginas con el mismo nav y su hover, el catálogo con la tabla alternada, el formulario que valida y la cita con comillas en la portada.",
			pt: "Vês as 3 páginas com o mesmo nav e o seu hover, o catálogo com a tabela alternada, o formulário que valida e a citação com aspas na capa.",
		},
		starter: {
			es: [
				{
					file: "index.html",
					code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Librería El Faro</title>
  <link rel="stylesheet" href="estilos-libreria.css">
</head>
<body>
  <header>
    <h1>Librería El Faro</h1>
    <nav>
      <a href="index.html">Portada</a>
      <a href="catalogo.html">Catálogo</a>
      <a href="pedidos.html">Pedidos</a>
    </nav>
  </header>

  <main>
    <blockquote>Una librería es un puerto con tejado.</blockquote>

    <section>
      <h2>Sobre la librería</h2>
      <p>Somos una librería de barrio con más de veinte años de oficio.</p>
    </section>

    <section>
      <h2>Horarios</h2>
      <p>De lunes a viernes de 10:00 a 20:00, sábados de 10:00 a 14:00.</p>
    </section>
  </main>

  <footer>
    <p>Calle del Faro, 12 - 900 000 000</p>
  </footer>
</body>
</html>`,
				},
				{
					file: "catalogo.html",
					code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Catálogo · Librería El Faro</title>
  <link rel="stylesheet" href="estilos-libreria.css">
</head>
<body>
  <header>
    <h1>Catálogo</h1>
    <nav>
      <a href="index.html">Portada</a>
      <a href="catalogo.html">Catálogo</a>
      <a href="pedidos.html">Pedidos</a>
    </nav>
  </header>

  <main>
    <table>
      <caption>Títulos disponibles</caption>
      <thead>
        <tr>
          <th scope="col">Título</th>
          <th scope="col">Autor</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>La torre de cristal</td>
          <td>M. Larrañaga</td>
          <td>14,50 €</td>
        </tr>
        <tr>
          <td>Cuaderno de invierno</td>
          <td>A. Ribeiro</td>
          <td>11,00 €</td>
        </tr>
        <tr>
          <td>El jardín de los espejos</td>
          <td>L. Fonseca</td>
          <td>16,90 €</td>
        </tr>
        <tr>
          <td>Marea baja</td>
          <td>P. Duarte</td>
          <td>13,20 €</td>
        </tr>
        <tr>
          <td>El último tranvía</td>
          <td>S. Almeida</td>
          <td>18,00 €</td>
        </tr>
      </tbody>
    </table>
  </main>

  <footer>
    <p>Calle del Faro, 12 - 900 000 000</p>
  </footer>
</body>
</html>`,
				},
				{
					file: "pedidos.html",
					code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pedidos · Librería El Faro</title>
  <link rel="stylesheet" href="estilos-libreria.css">
</head>
<body>
  <header>
    <h1>Pedidos</h1>
    <nav>
      <a href="index.html">Portada</a>
      <a href="catalogo.html">Catálogo</a>
      <a href="pedidos.html">Pedidos</a>
    </nav>
  </header>

  <main>
    <form>
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre">

      <label for="email">Correo electrónico:</label>
      <input type="email" id="email" name="email" required placeholder="tu@correo.com">

      <label for="libro">Título:</label>
      <select id="libro" name="libro" required>
        <option value="">Elige un título</option>
        <option value="torre">La torre de cristal</option>
        <option value="cuaderno">Cuaderno de invierno</option>
        <option value="jardin">El jardín de los espejos</option>
      </select>

      <label for="cantidad">Unidades:</label>
      <input type="number" id="cantidad" name="cantidad" min="1" max="10" value="1" required>

      <label for="mensaje">Mensaje:</label>
      <textarea id="mensaje" name="mensaje" minlength="10" placeholder="Nota para el pedido"></textarea>

      <button type="submit">Enviar pedido</button>
      <button type="reset">Limpiar</button>
    </form>
  </main>

  <footer>
    <p>Calle del Faro, 12 - 900 000 000</p>
  </footer>
</body>
</html>`,
				},
			],
			pt: [
				{
					file: "index.html",
					code: `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Livraria O Farol</title>
  <link rel="stylesheet" href="estilos-livraria.css">
</head>
<body>
  <header>
    <h1>Livraria O Farol</h1>
    <nav>
      <a href="index.html">Capa</a>
      <a href="catalogo.html">Catálogo</a>
      <a href="pedidos.html">Encomendas</a>
    </nav>
  </header>

  <main>
    <blockquote>Uma livraria é um porto com telhado.</blockquote>

    <section>
      <h2>Sobre a livraria</h2>
      <p>Somos uma livraria de bairro com mais de vinte anos de ofício.</p>
    </section>

    <section>
      <h2>Horários</h2>
      <p>De segunda a sexta das 10:00 às 20:00, sábado das 10:00 às 14:00.</p>
    </section>
  </main>

  <footer>
    <p>Rua do Farol, 12 - 900 000 000</p>
  </footer>
</body>
</html>`,
				},
				{
					file: "catalogo.html",
					code: `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Catálogo · Livraria O Farol</title>
  <link rel="stylesheet" href="estilos-livraria.css">
</head>
<body>
  <header>
    <h1>Catálogo</h1>
    <nav>
      <a href="index.html">Capa</a>
      <a href="catalogo.html">Catálogo</a>
      <a href="pedidos.html">Encomendas</a>
    </nav>
  </header>

  <main>
    <table>
      <caption>Títulos disponíveis</caption>
      <thead>
        <tr>
          <th scope="col">Título</th>
          <th scope="col">Autor</th>
          <th scope="col">Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A torre de cristal</td>
          <td>M. Larrañaga</td>
          <td>14,50 €</td>
        </tr>
        <tr>
          <td>Caderno de inverno</td>
          <td>A. Ribeiro</td>
          <td>11,00 €</td>
        </tr>
        <tr>
          <td>O jardim dos espelhos</td>
          <td>L. Fonseca</td>
          <td>16,90 €</td>
        </tr>
        <tr>
          <td>Marea baixa</td>
          <td>P. Duarte</td>
          <td>13,20 €</td>
        </tr>
        <tr>
          <td>O último elétrico</td>
          <td>S. Almeida</td>
          <td>18,00 €</td>
        </tr>
      </tbody>
    </table>
  </main>

  <footer>
    <p>Rua do Farol, 12 - 900 000 000</p>
  </footer>
</body>
</html>`,
				},
				{
					file: "pedidos.html",
					code: `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Encomendas · Livraria O Farol</title>
  <link rel="stylesheet" href="estilos-livraria.css">
</head>
<body>
  <header>
    <h1>Encomendas</h1>
    <nav>
      <a href="index.html">Capa</a>
      <a href="catalogo.html">Catálogo</a>
      <a href="pedidos.html">Encomendas</a>
    </nav>
  </header>

  <main>
    <form>
      <label for="nome">Nome:</label>
      <input type="text" id="nome" name="nome" required placeholder="O teu nome">

      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" required placeholder="teu@email.com">

      <label for="livro">Título:</label>
      <select id="livro" name="livro" required>
        <option value="">Escolhe um título</option>
        <option value="torre">A torre de cristal</option>
        <option value="cuaderno">Caderno de inverno</option>
        <option value="jardim">O jardim dos espelhos</option>
      </select>

      <label for="quantidade">Unidades:</label>
      <input type="number" id="quantidade" name="quantidade" min="1" max="10" value="1" required>

      <label for="mensagem">Mensagem:</label>
      <textarea id="mensagem" name="mensagem" minlength="10" placeholder="Nota para a encomenda"></textarea>

      <button type="submit">Enviar encomenda</button>
      <button type="reset">Limpar</button>
    </form>
  </main>

  <footer>
    <p>Rua do Farol, 12 - 900 000 000</p>
  </footer>
</body>
</html>`,
				},
			],
		},
	},
];
