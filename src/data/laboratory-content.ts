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
				pt: "Box-sizing: cria .linha com 400px de largura e .caixa com 200px, padding 20px e border 10px. Sem o reset as caixas transbordam; com o reset entram lado a lado.",
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
				pt: "As duas caixas de 200px com padding e borda entram lado a lado nos 400px de .linha.",
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
      <h2>Entradas</h2>
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

    <div class="linha">
      <div class="caixa">Caixa 1</div>
      <div class="caixa">Caixa 2</div>
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
				pt: "Seletor de classe: com .bloco dá um border, um padding e um fundo aos dois blocos.",
			},
			{
				es: "Agrupación: con h1, h2 les das a todos los encabezados el mismo color y revisá cada regla en DevTools.",
				pt: "Agrupamento: com h1, h2 dá a todos os cabeçalhos a mesma cor e revê cada regra nas DevTools.",
			},
		],
		verify: [
			{
				es: "Cambiar .bloque afecta a los dos bloques a la vez; cambiar #titulo-festival solo al h1.",
				pt: "Mudar .bloco afeta os dois blocos de uma vez; mudar #titulo-festival só o h1.",
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
    <section class="bloco" id="programa">
      <h2>Programa</h2>
      <p>Concertos das 20:00 às 23:30 na sala principal.</p>
    </section>

    <section class="bloco" id="entradas">
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

export const labModulo3: LabExercise[] = [
	{
		id: 14,
		lectureId: 11,
		title: {
			es: "La batalla por el color",
			pt: "A batalha pelas cores",
		},
		objective: {
			es: "Predecir el ganador de una cascada con herencia, especificidad y !important, y comprobarlo en DevTools.",
			pt: "Prever o vencedor de uma cascata com herança, especificidade e !important, e confirmar nas DevTools.",
		},
		steps: [
			{
				es: "Copiá los dos archivos de abajo (batalla.html y batalla.css) en la misma carpeta y abrí batalla.html con Live Server. La hoja ya viene escrita: este ejercicio es de CSI, de analizar.",
				pt: "Copia os dois ficheiros abaixo (batalla.html e batalla.css) para a mesma pasta e abre batalla.html com o Live Server. A folha já vem escrita: este exercício é de CSI, de análise.",
			},
			{
				es: "Antes de tocar nada, anotá en papel el color final de cada párrafo pensando en la cascada, la herencia y los puntos.",
				pt: "Antes de tocar em nada, anota no papel a cor final de cada parágrafo pensando na cascada, na herança e nos pontos.",
			},
			{
				es: "En DevTools seleccioná el primer párrafo: verás las dos reglas con el mismo selector, una de ellas tachada. Gana la última en el archivo (verde): es la cascada en acción.",
				pt: "Nas DevTools seleciona o primeiro parágrafo: vais ver as duas regras com o mesmo seletor, uma delas riscada. Ganha a última no ficheiro (verde): é a cascata em ação.",
			},
			{
				es: "El segundo párrafo no declara color: lo hereda del div .tarjeta. Comprobalo en DevTools, en la sección 'Heredado de .tarjeta'.",
				pt: "O segundo parágrafo não declara cor: herda-a do div .cartao. Confirma-o nas DevTools, na secção 'Herdado de .cartao'.",
			},
			{
				es: "El tercer párrafo tiene dos reglas: .pares (0, 1, 0 = 10 puntos) y #clave (1, 0, 0 = 100 puntos). Sumá los puntos con DevTools y comprobá que el ID gana aunque se declare al final.",
				pt: "O terceiro parágrafo tem duas regras: .pares (0, 1, 0 = 10 pontos) e #chave (1, 0, 0 = 100 pontos). Soma os pontos nas DevTools e confirma que o ID ganha mesmo declarado no fim.",
			},
			{
				es: "Agregá al final de batalla.css la regla p { color: #f59e0b !important; } y recargá: gana contra todo, incluso contra el ID. Después comentá la regla y mirá cómo la cascada vuelve a decidir.",
				pt: "Adiciona ao fim de batalla.css a regra p { color: #f59e0b !important; } e recarrega: ganha contra tudo, mesmo contra o ID. Depois comenta a regra e vê como a cascata volta a decidir.",
			},
		],
		verify: [
			{
				es: "En DevTools, la regla perdedora del primer párrafo aparece tachada y la activa es la verde, la última del archivo.",
				pt: "Nas DevTools, a regra perdedora do primeiro parágrafo aparece riscada e a ativa é a verde, a última do ficheiro.",
			},
			{
				es: "El segundo párrafo se ve del azul de .tarjeta por herencia, sin tener regla propia.",
				pt: "O segundo parágrafo fica da cor azul de .cartao por herança, sem regra própria.",
			},
			{
				es: "El tercer párrafo queda del color del ID y, mientras la regla !important esté activa, del ámbar: !important se impuso a todo.",
				pt: "O terceiro parágrafo fica da cor do ID e, enquanto a regra !important estiver ativa, do âmbar: o !important impôs-se a tudo.",
			},
			{
				es: "Al comentar la regla !important, el navegador vuelve a decidir con la cascada y la especificidad.",
				pt: "Ao comentar a regra !important, o navegador volta a decidir com a cascata e a especificidade.",
			},
		],
		expected: {
			es: "Ves tres párrafos con tres colores distintos: verde por la cascada, azul heredado de la tarjeta y morado por los 100 puntos del ID.",
			pt: "Vês três parágrafos com três cores diferentes: verde pela cascata, azul herdado do cartão e roxo pelos 100 pontos do ID.",
		},
		starter: {
			es: [
				{
					file: "batalla.html",
					code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>La batalla por el color</title>
  <link rel="stylesheet" href="batalla.css">
</head>
<body>
  <main>
    <p class="primero">1) Dos reglas iguales me apuntan: ¿cuál gana?</p>

    <div class="tarjeta">
      <p class="una">2) Yo no declaro color: ¿de dónde lo saco?</p>
    </div>

    <p id="clave" class="pares">3) Una clase y un ID me disputan el color.</p>
  </main>
</body>
</html>`,
				},
				{
					file: "batalla.css",
					code: `/* Reset: quita márgenes y paddings de navegador; con border-box el padding y el border no agrandan las cajas */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Regla A: para el párrafo 1, color rojo */
p.primero {
  color: #e74c3c;
}

/* El mismo selector otra vez: ¿cuál de las dos gana? */
p.primero {
  color: #16a085;
}

/* El contenedor declara: sus hijos heredan */
.tarjeta {
  color: #2980b9;
  border: 1px solid #3b82f6;
  padding: 12px;
}

/* Regla B: para el párrafo 3, la clase vale 10 puntos */
.pares {
  color: #e67e22;
}

/* La regla del ID vale 100 puntos */
#clave {
  color: #8e44ad;
}`,
				},
			],
			pt: [
				{
					file: "batalha.html",
					code: `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>A batalha pelas cores</title>
  <link rel="stylesheet" href="batalha.css">
</head>
<body>
  <main>
    <p class="primeiro">1) Duas regras iguais apontam para mim: qual ganha?</p>

    <div class="cartao">
      <p class="uma">2) Eu não declaro cor: de onde tiro?</p>
    </div>

    <p id="chave" class="pares">3) Uma classe e um ID disputam a minha cor.</p>
  </main>
</body>
</html>`,
				},
				{
					file: "batalha.css",
					code: `/* Reset: tira margens e paddings do browser; com border-box o padding e a border não alargam as caixas */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Regra A: para o parágrafo 1, cor vermelha */
p.primeiro {
  color: #e74c3c;
}

/* O mesmo seletor outra vez: qual das duas ganha? */
p.primeiro {
  color: #16a085;
}

/* O contentor declara: os filhos herdam */
.cartao {
  color: #2980b9;
  border: 1px solid #3b82f6;
  padding: 12px;
}

/* Regra B: para o parágrafo 3, a classe vale 10 pontos */
.pares {
  color: #e67e22;
}

/* A regra do ID vale 100 pontos */
#chave {
  color: #8e44ad;
}`,
				},
			],
		},
	},
	{
		id: 15,
		lectureId: 12,
		title: {
			es: "Las fichas del almacén",
			pt: "As fichas do armazém",
		},
		objective: {
			es: "Calcular el tamaño real de una caja y dominar el reset universal con box-sizing: border-box.",
			pt: "Calcular o tamanho real de uma caixa e dominar o reset universal com box-sizing: border-box.",
		},
		steps: [
			{
				es: "Copiá el código inicial de abajo en almacen.html. El enlace a almacen.css ya está en el head: creá ese archivo en la misma carpeta.",
				pt: "Copia o código inicial abaixo para armazem.html. A ligação a armazem.css já está no head: cria esse ficheiro na mesma pasta.",
			},
			{
				es: "En almacen.css escribí el reset universal (*, *::before y *::after con margin: 0 y padding: 0) y definí .fila con width: 440px.",
				pt: "Em armazem.css escreve o reset universal (*, *::before e *::after com margin: 0 e padding: 0) e define .linha com width: 440px.",
			},
			{
				es: "Con .ficha definí width: 200px, padding: 20px, border: 6px solid #94a3b8, background-color: #fde68a y display: inline-block para que las fichas compartan línea.",
				pt: "Com .ficha define width: 200px, padding: 20px, border: 6px solid #94a3b8, background-color: #fde68a e display: inline-block para que as fichas partilhem a linha.",
			},
			{
				es: "En DevTools abrí la pestaña 'Layout' (o 'Computed' con el diagrama de caja) y medí una ficha: 200px de contenido + 40px de padding + 12px de borde = 252px. ¡Dos fichas ya no entran en la fila de 440px!",
				pt: "Nas DevTools abre o separador 'Layout' (ou 'Computed' com o diagrama da caixa) e mede uma ficha: 200px de conteúdo + 40px de padding + 12px de borda = 252px. Duas fichas já não cabem na linha de 440px!",
			},
			{
				es: "Agregá box-sizing: border-box al reset, recargá y medí de nuevo: ahora cada ficha completa mide 200px exactos y las dos caben en la fila.",
				pt: "Adiciona box-sizing: border-box ao reset, recarrega e mede outra vez: agora cada ficha completa mede 200px exatos e as duas cabem na linha.",
			},
		],
		verify: [
			{
				es: "Sin border-box, DevTools muestra content 200 + padding 40 + border 12 = 252px por ficha, y la segunda ficha cae a la línea siguiente.",
				pt: "Sem border-box, as DevTools mostram content 200 + padding 40 + border 12 = 252px por ficha, e a segunda ficha cai para a linha seguinte.",
			},
			{
				es: "Con border-box en el reset, cada ficha mide 200px de punta a punta (padding y borde contados dentro) y ambas quedan lado a lado.",
				pt: "Com border-box no reset, cada ficha mede 200px de ponta a ponta (padding e borda contados por dentro) e as duas ficam lado a lado.",
			},
			{
				es: "La fila mide 440px y las fichas usan exactamente los selectores pedidos.",
				pt: "A linha mede 440px e as fichas usam exatamente os seletores pedidos.",
			},
		],
		expected: {
			es: "Ves dos fichas amarillas lado a lado dentro de la fila, midiendo 200px cada una con su padding y su borde incluidos en el total.",
			pt: "Vês duas fichas amarelas lado a lado dentro da linha, medindo 200px cada uma com o padding e a borda incluídos no total.",
		},
		starter: {
			es: [
				{
					file: "almacen.html",
					code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Las fichas del almacén</title>
  <link rel="stylesheet" href="almacen.css">
</head>
<body>
  <div class="fila">
    <div class="ficha">Ficha A</div>
    <div class="ficha">Ficha B</div>
  </div>
</body>
</html>`,
				},
				{
					file: "almacen.css",
					code: `/* 1) El reset universal: primero solo margin y padding.
   La consigna te pedirá agregar box-sizing en el paso 5. */
*, *::before, *::after {
  /* margin: 0; */
  /* padding: 0; */
}

/* 2) La fila que contiene las fichas */
.fila {
  /* width: 440px; */
}

/* 3) Cada ficha */
.ficha {
  /* width: 200px; */
  /* padding: 20px; */
  /* border: 6px solid #94a3b8; */
  /* background-color: #fde68a; */
  /* display: inline-block; */
}`,
				},
			],
			pt: [
				{
					file: "armazem.html",
					code: `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>As fichas do armazém</title>
  <link rel="stylesheet" href="armazem.css">
</head>
<body>
  <div class="linha">
    <div class="ficha">Ficha A</div>
    <div class="ficha">Ficha B</div>
  </div>
</body>
</html>`,
				},
				{
					file: "armazem.css",
					code: `/* 1) O reset universal: primeiro só margin e padding.
   A consigna pede-te para adicionar box-sizing no passo 5. */
*, *::before, *::after {
  /* margin: 0; */
  /* padding: 0; */
}

/* 2) A linha que contém as fichas */
.linha {
  /* width: 440px; */
}

/* 3) Cada ficha */
.ficha {
  /* width: 200px; */
  /* padding: 20px; */
  /* border: 6px solid #94a3b8; */
  /* background-color: #fde68a; */
  /* display: inline-block; */
}`,
				},
			],
		},
	},
	{
		id: 16,
		lectureId: 13,
		title: {
			es: "El centro del catálogo",
			pt: "O centro do catálogo",
		},
		objective: {
			es: "Centrar un bloque con margin: 0 auto y comprobar el colapso de márgenes entre tarjetas.",
			pt: "Centrar um bloco com margin: 0 auto e confirmar o colapso de margens entre cartões.",
		},
		steps: [
			{
				es: "Copiá el código inicial de abajo en vivero.html. El enlace a vivero.css ya está en el head: creá ese archivo en la misma carpeta.",
				pt: "Copia o código inicial abaixo para viveiro.html. A ligação a viveiro.css já está no head: cria esse ficheiro na mesma pasta.",
			},
			{
				es: "Con .pagina definí width: 90%, max-width: 800px y margin: 0 auto, y mirá cómo el catálogo queda centrado en cualquier ancho de ventana.",
				pt: "Com .pagina define width: 90%, max-width: 800px e margin: 0 auto, e vê como o catálogo fica centrado em qualquer largura de janela.",
			},
			{
				es: "Con .tarjeta definí padding: 12px, border: 1px solid #86efac y background-color: #dcfce7. Para separar las tarjetas, dale margin-bottom: 30px a .tarjeta y margin-top: 20px a .tarjeta + .tarjeta.",
				pt: "Com .cartao define padding: 12px, border: 1px solid #86efac e background-color: #dcfce7. Para separar os cartões, dá margin-bottom: 30px a .cartao e margin-top: 20px a .cartao + .cartao.",
			},
			{
				es: "Medí el hueco entre dos tarjetas con DevTools: es 30px, no 50px. El margen mayor gana: es el colapso de márgenes, y solo pasa en vertical.",
				pt: "Mede o buraco entre dois cartões com as DevTools: é 30px, não 50px. A margem maior ganha: é o colapso de margens, e só acontece na vertical.",
			},
			{
				es: "Estirá la ventana a toda la pantalla y después apretala a un ancho chico: el bloque centrado se adapta a los dos tamaños, porque el width es porcentaje y el max-width fija el techo.",
				pt: "Estica a janela para todo o ecrã e depois estreita-a para uma largura pequena: o bloco centrado adapta-se aos dois tamanhos, porque o width é uma percentagem e o max-width fixa o teto.",
			},
		],
		verify: [
			{
				es: "En DevTools, .pagina muestra márgenes izquierdo y derecho iguales (los auto repartidos).",
				pt: "Nas DevTools, .pagina mostra margens esquerda e direita iguais (os auto repartidos).",
			},
			{
				es: "El hueco entre tarjetas es de 30px: el margen más alto colapsó al más chico.",
				pt: "O buraco entre cartões é de 30px: a margem maior colapsou a menor.",
			},
			{
				es: "El HTML no se tocó: todo el trabajo se hizo en vivero.css.",
				pt: "O HTML não foi tocado: todo o trabalho ficou feito em viveiro.css.",
			},
		],
		expected: {
			es: "Ves el catálogo centrado en la ventana y las tarjetas separadas por 30px, no por 50px.",
			pt: "Vês o catálogo centrado na janela e os cartões separados por 30px, não por 50px.",
		},
		starter: {
			es: [
				{
					file: "vivero.html",
					code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vivero La Cortina</title>
  <link rel="stylesheet" href="vivero.css">
</head>
<body>
  <div class="pagina">
    <h1>Vivero La Cortina</h1>
    <p class="intro">Plantas de interior para todos los meses del año.</p>

    <section class="tarjeta">
      <h2>Monstera</h2>
      <p>Sombra ligera y riego semanal.</p>
    </section>

    <section class="tarjeta">
      <h2>Cactus</h2>
      <p>Luz directa y riego escaso.</p>
    </section>

    <section class="tarjeta">
      <h2>Bonsái</h2>
      <p>Suelo seco y paciencia de años.</p>
    </section>
  </div>
</body>
</html>`,
				},
				{
					file: "vivero.css",
					code: `/* Reset: quita márgenes y paddings de navegador; con border-box el padding y el border no agrandan las cajas */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 1) El bloque centrado */
.pagina {
  /* width: 90%; */
  /* max-width: 800px; */
  /* margin: 0 auto; */
}

/* 2) Cada tarjeta del catálogo */
.tarjeta {
  /* padding: 12px; */
  /* border: 1px solid #86efac; */
  /* background-color: #dcfce7; */
}

/* 3) La separación entre tarjetas (y el colapso, ¡que lo mides tú!) */
.tarjeta + .tarjeta {
  /* margin-top: 20px; */
}`,
				},
			],
			pt: [
				{
					file: "viveiro.html",
					code: `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Viveiro A Cortina</title>
  <link rel="stylesheet" href="viveiro.css">
</head>
<body>
  <div class="pagina">
    <h1>Viveiro A Cortina</h1>
    <p class="intro">Plantas de interior para todos os meses do ano.</p>

    <section class="cartao">
      <h2>Costela-de-adão</h2>
      <p>Sombra leve e rega semanal.</p>
    </section>

    <section class="cartao">
      <h2>Cacto</h2>
      <p>Luz direta e rega escassa.</p>
    </section>

    <section class="cartao">
      <h2>Bonsai</h2>
      <p>Terra seca e paciência de anos.</p>
    </section>
  </div>
</body>
</html>`,
				},
				{
					file: "viveiro.css",
					code: `/* Reset: tira margens e paddings do browser; com border-box o padding e a border não alargam as caixas */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 1) O bloco centrado */
.pagina {
  /* width: 90%; */
  /* max-width: 800px; */
  /* margin: 0 auto; */
}

/* 2) Cada cartão do catálogo */
.cartao {
  /* padding: 12px; */
  /* border: 1px solid #86efac; */
  /* background-color: #dcfce7; */
}

/* 3) A separação entre cartões (e o colapso, cabe-te a medi-lo!) */
.cartao + .cartao {
  /* margin-top: 20px; */
}`,
				},
			],
		},
	},
	{
		id: 17,
		lectureId: 13,
		title: {
			es: "El magazine del barrio",
			pt: "A revista do bairro",
		},
		objective: {
			es: "Diferenciar display inline, block e inline-block aplicando etiquetas de categoría y botones con padding.",
			pt: "Diferenciar display inline, block e inline-block aplicando etiquetas de categoria e botões com padding.",
		},
		steps: [
			{
				es: "Copiá el código inicial de abajo en revista.html. El enlace a revista.css ya está en el head: creá ese archivo en la misma carpeta.",
				pt: "Copia o código inicial abaixo para revista.html. A ligação a revista.css já está no head: cria esse ficheiro na mesma pasta.",
			},
			{
				es: "La .etiqueta es un <span>: dotale padding: 20px 12px, background-color: #fde68a, border-radius: 999px y font-size: 0.8rem. Recargá y mirá el derrame: el fondo amarillo tapa el título de arriba y el 'Leer más' de abajo sin apartarlos — eso es inline: no pide lugar para su altura.",
				pt: "A .etiqueta é um <span>: dá-lhe padding: 20px 12px, background-color: #fde68a, border-radius: 999px e font-size: 0.8rem. Recarrega e vê o transbordo: o fundo amarelo tapa o título de cima e o 'Ler mais' de baixo sem afastá-los — isso é inline: não pede lugar para a sua altura.",
			},
			{
				es: "Ahora bajá el padding a 6px 12px y agregá display: inline-block a la misma .etiqueta: el derrame desaparece y el padding vertical se respeta — inline-block mantiene el chip en la línea del texto pero con su caja completa.",
				pt: "Agora baixa o padding para 6px 12px e adiciona display: inline-block à mesma .etiqueta: o transbordo desaparece e o padding vertical é respeitado — inline-block mantém o chip na linha do texto mas com a sua caixa completa.",
			},
			{
				es: "El .boton-leer es un <a>: dotale display: inline-block, padding: 10px 20px, background-color: #2e86c1, color: white, border-radius: 4px y text-decoration: none para que parezca botón de verdad.",
				pt: "O .botao-ler é um <a>: dá-lhe display: inline-block, padding: 10px 20px, background-color: #2e86c1, color: white, border-radius: 4px e text-decoration: none para que pareça um botão de verdade.",
			},
			{
				es: "Comprobá en DevTools que cada <article> arranca en línea propia y ocupa todo el ancho: es block por defecto, como te dijo la conferencia. Con eso tienes los tres display del bloque a la vista.",
				pt: "Confirma nas DevTools que cada <article> começa em linha própria e ocupa toda a largura: é block por defeito, como a conferência disse. Com isso tens os três displays do bloco à vista.",
			},
		],
		verify: [
			{
				es: "Las etiquetas mantienen su altura con inline-block: el padding vertical ya no se pisa.",
				pt: "As etiquetas mantêm a altura com inline-block: o padding vertical já não se pisa.",
			},
			{
				es: "El botón 'Leer más' se ve como un rectángulo con padding y sin subrayado.",
				pt: "O botão 'Ler mais' aparece como um retângulo com padding e sem sublinhado.",
			},
			{
				es: "Cada article empieza en línea propia y a todo el ancho: block por defecto.",
				pt: "Cada article começa em linha própria e a toda a largura: block por defeito.",
			},
		],
		expected: {
			es: "Ves cada nota con su chip de categoría respetando el padding y un botón 'Leer más' rectangular debajo del texto.",
			pt: "Vês cada nota com o chip de categoria a respeitar o padding e um botão 'Ler mais' retangular por baixo do texto.",
		},
		starter: {
			es: [
				{
					file: "revista.html",
					code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>El magazine del barrio</title>
  <link rel="stylesheet" href="revista.css">
</head>
<body>
  <main>
    <article>
      <h2>Cuatro esquinas, un mismo banco</h2>
      <p>
        La plaza del barrio estrena asientos.
        <span class="etiqueta">ciudad</span>
      </p>
      <a class="boton-leer" href="#">Leer más</a>
    </article>

    <article>
      <h2>El kiosco que aprendió CSS</h2>
      <p>
        Los diarios se ordenan solos con display.
        <span class="etiqueta">data</span>
      </p>
      <a class="boton-leer" href="#">Leer más</a>
    </article>
  </main>
</body>
</html>`,
				},
				{
					file: "revista.css",
					code: `/* Reset: quita márgenes y paddings de navegador; con border-box el padding y el border no agrandan las cajas */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 1) El chip de categoría: es un <span>, o sea inline */
.etiqueta {
  /* padding: 20px 12px; (paso 2: derrame; en el paso 3 baja a 6px 12px) */
  /* background-color: #fde68a; */
  /* border-radius: 999px; */
  /* font-size: 0.8rem; */
  /* display: inline-block; (paso 3) */
}

/* 2) El botón 'Leer más': es un <a>, también inline */
.boton-leer {
  /* display: inline-block; */
  /* padding: 10px 20px; */
  /* background-color: #2e86c1; */
  /* color: white; */
  /* border-radius: 4px; */
  /* text-decoration: none; */
}`,
				},
			],
			pt: [
				{
					file: "revista.html",
					code: `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>A revista do bairro</title>
  <link rel="stylesheet" href="revista.css">
</head>
<body>
  <main>
    <article>
      <h2>Quatro esquinas, um mesmo banco</h2>
      <p>
        A praça do bairro estreia assentos.
        <span class="etiqueta">cidade</span>
      </p>
      <a class="botao-ler" href="#">Ler mais</a>
    </article>

    <article>
      <h2>O quiosque que aprendeu CSS</h2>
      <p>
        Os jornais ordenam-se sozinhos com display.
        <span class="etiqueta">dados</span>
      </p>
      <a class="botao-ler" href="#">Ler mais</a>
    </article>
  </main>
</body>
</html>`,
				},
				{
					file: "revista.css",
					code: `/* Reset: tira margens e paddings do browser; com border-box o padding e a border não alargam as caixas */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 1) O chip de categoria: é um <span>, ou seja inline */
.etiqueta {
  /* padding: 20px 12px; (passo 2: transbordo; no passo 3 baixa para 6px 12px) */
  /* background-color: #fde68a; */
  /* border-radius: 999px; */
  /* font-size: 0.8rem; */
  /* display: inline-block; (passo 3) */
}

/* 2) O botão 'Ler mais': é um <a>, também inline */
.botao-ler {
  /* display: inline-block; */
  /* padding: 10px 20px; */
  /* background-color: #2e86c1; */
  /* color: white; */
  /* border-radius: 4px; */
  /* text-decoration: none; */
}`,
				},
			],
		},
	},
	{
		id: 18,
		lectureId: 14,
		title: {
			es: "El ranking de la liga",
			pt: "O ranking da liga",
		},
		objective: {
			es: "Pegar la cabecera de una tabla con sticky y elevar una insignia con position: relative y z-index.",
			pt: "Colar o cabeçalho de uma tabela com sticky e elevar uma insígnia com position: relative e z-index.",
		},
		steps: [
			{
				es: "Copiá el código inicial de abajo en liga.html. El enlace a liga.css ya está en el head: creá ese archivo en la misma carpeta.",
				pt: "Copia o código inicial abaixo para liga.html. A ligação a liga.css já está no head: cria esse ficheiro na mesma pasta.",
			},
			{
				es: "Con .tabla definí max-height: 160px y overflow-y: auto: ese div pequeño es el que hace scroll por su cuenta. En .tabla ul poné además list-style: none, para que las filas no arrastren las viñetas del navegador.",
				pt: "Com .tabela define max-height: 160px e overflow-y: auto: esse div pequeno é quem faz scroll por conta própria. Em .tabela ul põe também list-style: none, para as linhas não arrastarem os marcadores do navegador.",
			},
			{
				es: "Con .cabecera-tabla, además del fondo azul y el color blanco, definí position: sticky y top: 0, y probá el scroll dentro del div: la cabecera se queda pegada arriba.",
				pt: "Com .cabecalho-tabela, além do fundo azul e da cor branca, define position: sticky e top: 0, e experimenta o scroll dentro do div: o cabeçalho fica colado em cima.",
			},
			{
				es: "Con .numero (todas las posiciones) definí font-weight: bold. Para la insignia del primer puesto, con .pri definí position: relative, z-index: 2 y el look de insignia: background-color: #e67e22, color: white, padding: 2px 7px y border-radius: 999px — el número queda dentro de un circulito naranja. Al hacer scroll, cuando la fila 1 entra en la zona de la cabecera, el número pasa por encima del azul — un posicionado con z-index positivo le gana a la cabecera, que no tiene z-index — sin salir de su lugar en el flujo.",
				pt: "Com .numero (todas as posições) define font-weight: bold. Para a insígnia do primeiro lugar, com .pri define position: relative, z-index: 2 e o visual de insígnia: background-color: #e67e22, color: white, padding: 2px 7px e border-radius: 999px — o número fica dentro de um círculo laranja. Ao fazer o scroll, quando a fila 1 entra na zona do cabeçalho, o número passa por cima do azul — um posicionado com z-index positivo ganha do cabeçalho, que não tem z-index — sem sair do seu lugar no fluxo.",
			},
			{
				es: "Experimento final: cambiá el z-index de .pri a 2000 y recargá: no cambia nada. 2 o 2000, el positivo ya le ganaba a la cabecera sin z-index (auto vale 0): el z-index compara números dentro de la misma pila, no hay números mágicos. Para que la cabecera gane, dale a .cabecera-tabla z-index: 3: la insignia pasa por debajo, como las cabeceras fijas de la vida real. Dejá la cabecera con 3 y el .pri con 2.",
				pt: "Experimento final: muda o z-index de .pri para 2000 e recarrega: não muda nada. 2 ou 2000, o positivo já ganhava do cabeçalho sem z-index (auto vale 0): o z-index compara números dentro da mesma pilha, não há números mágicos. Para o cabeçalho ganhar, dá ao .cabecalho-tabela z-index: 3: a insígnia fica por baixo, como os cabeçalhos fixos da vida real. Deixa o cabeçalho com 3 e o .pri com 2.",
			},
		],
		verify: [
			{
				es: "Al hacer el scroll dentro de .tabla, la cabecera azul se queda pegada arriba y las filas pasan por debajo.",
				pt: "Ao fazer o scroll dentro de .tabela, o cabeçalho azul fica colado em cima e as linhas passam por baixo.",
			},
			{
				es: "Con la cabecera en z-index: 3, las filas — incluida la insignia — pasan por debajo: el mayor número de la pila decide.",
				pt: "Com a cabeçalho em z-index: 3, as filas — incluindo a insígnia — passam por baixo: o número maior da pilha decide.",
			},
			{
				es: "Si le sacás position a la insignia (o la dejás en static), el z-index deja de actuar: solo funciona en elementos posicionados.",
				pt: "Se lhe tirares o position à insígnia (ou o deixares em static), o z-index deixa de atuar: só funciona em elementos posicionados.",
			},
		],
		expected: {
			es: "Ves la cabecera azul pegada arriba del ranking al hacer scroll y la insignia del puesto 1 tapando el borde de su fila.",
			pt: "Vês o cabeçalho azul colado no topo do ranking ao fazer scroll e a insígnia do lugar 1 a tapar a borda da sua linha.",
		},
		starter: {
			es: [
				{
					file: "liga.html",
					code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>El ranking de la liga</title>
  <link rel="stylesheet" href="liga.css">
</head>
<body>
  <div class="tabla">
    <div class="cabecera-tabla">Clasificación · Jornada 12</div>
    <ul>
      <li><span class="numero pri">1</span> Atlético Norte</li>
      <li><span class="numero">2</span> Río Verde</li>
      <li><span class="numero">3</span> Estrella Roja</li>
      <li><span class="numero">4</span> Costa Azul</li>
      <li><span class="numero">5</span> Nervión</li>
      <li><span class="numero">6</span> Portuario</li>
      <li><span class="numero">7</span> Bosque Viejo</li>
      <li><span class="numero">8</span> Salinero</li>
    </ul>
  </div>
</body>
</html>`,
				},
				{
					file: "liga.css",
					code: `/* Reset: quita márgenes y paddings de navegador; con border-box el padding y el border no agrandan las cajas */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 1) El contenedor que hace scroll */
.tabla {
  /* max-height: 160px; */
  /* overflow-y: auto; */
}

/* 2) La cabecera que se pega al hacer scroll */
.cabecera-tabla {
  /* background-color: #2980b9; */
  /* color: white; */
  /* padding: 8px 12px; */
  /* position: sticky; */
  /* top: 0; */
  /* z-index: 3; (experimento final) */
}

/* 3) Limpieza de la lista */
.tabla ul {
  /* margin: 0; padding: 0; list-style: none; */
}
.tabla li {
  /* padding: 8px 12px; border-top: 1px solid #e5e7eb; */
}

/* 4) Los números de posición y la insignia elevada */
.numero {
  /* font-weight: bold; */
}
.pri {
  /* position: relative; */
  /* z-index: 2; */
  /* background-color: #e67e22; */
  /* color: white; */
  /* padding: 2px 7px; */
  /* border-radius: 999px; */
}`,
				},
			],
			pt: [
				{
					file: "liga.html",
					code: `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>O ranking da liga</title>
  <link rel="stylesheet" href="liga.css">
</head>
<body>
  <div class="tabela">
    <div class="cabecalho-tabela">Classificação · Jornada 12</div>
    <ul>
      <li><span class="numero pri">1</span> Atlético Norte</li>
      <li><span class="numero">2</span> Rio Verde</li>
      <li><span class="numero">3</span> Estrela Vermelha</li>
      <li><span class="numero">4</span> Costa Azul</li>
      <li><span class="numero">5</span> Nervión</li>
      <li><span class="numero">6</span> Portuário</li>
      <li><span class="numero">7</span> Bosque Velho</li>
      <li><span class="numero">8</span> Salineiro</li>
    </ul>
  </div>
</body>
</html>`,
				},
				{
					file: "liga.css",
					code: `/* Reset: tira margens e paddings do browser; com border-box o padding e a border não alargam as caixas */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 1) O contentor que faz scroll */
.tabela {
  /* max-height: 160px; */
  /* overflow-y: auto; */
}

/* 2) O cabeçalho que se cola ao scroll */
.cabecalho-tabela {
  /* background-color: #2980b9; */
  /* color: white; */
  /* padding: 8px 12px; */
  /* position: sticky; */
  /* top: 0; */
  /* z-index: 3; (experimento final) */
}

/* 3) Arrumação da lista */
.tabela ul {
  /* margin: 0; padding: 0; list-style: none; */
}
.tabela li {
  /* padding: 8px 12px; border-top: 1px solid #e5e7eb; */
}

/* 4) Os números de posição e a insígnia elevada */
.numero {
  /* font-weight: bold; */
}
.pri {
  /* position: relative; */
  /* z-index: 2; */
  /* background-color: #e67e22; */
  /* color: white; */
  /* padding: 2px 7px; */
  /* border-radius: 999px; */
}`,
				},
			],
		},
	},
	{
		id: 19,
		lectureId: 14,
		title: {
			es: "Integrador: el modal de reservas",
			pt: "Integrador: o modal das reservas",
		},
		objective: {
			es: "Montar un modal completo con overlay fijo, contenido centrado y una jerarquía de z-index bien ordenada.",
			pt: "Montar um modal completo com overlay fixo, conteúdo centrado e uma hierarquia de z-index bem ordenada.",
		},
		steps: [
			{
				es: "Copiá el código inicial de abajo en reservas.html. El enlace a reservas.css ya está en el head: creá ese archivo en la misma carpeta.",
				pt: "Copia o código inicial abaixo para reservas.html. A ligação a reservas.css já está no head: cria esse ficheiro na mesma pasta.",
			},
			{
				es: "Base: con body definí font-family: sans-serif, un background-color claro y padding. Con .pagina volvé a aplicar el centrado del módulo: max-width: 640px y margin: 0 auto. Y con button definí background-color: #2e86c1, color: white, border: none, padding: 8px 12px y border-radius: 4px. Todo lo aprendido se usa.",
				pt: "Base: com body define font-family: sans-serif, um background-color claro e padding. Com .pagina volta a aplicar a centralização do módulo: max-width: 640px e margin: 0 auto. E com button define background-color: #2e86c1, color: white, border: none, padding: 8px 12px e border-radius: 4px. Tudo o que aprendeu dá-se uso.",
			},
			{
				es: "El overlay: con .overlay definí position: fixed, top: 0, left: 0, width: 100%, height: 100%, background-color: rgba(0, 0, 0, 0.5) y z-index: 10.",
				pt: "O overlay: com .overlay define position: fixed, top: 0, left: 0, width: 100%, height: 100%, background-color: rgba(0, 0, 0, 0.5) e z-index: 10.",
			},
			{
				es: "El contenido: con .modal-content definí position: fixed, top: 50% y left: 50% — con eso la esquina del modal cae en el medio de la pantalla — y transform: translate(-50%, -50%), que lo empuja hacia atrás la mitad de su propio ancho y su propia altura: la esquina pasa a ser su centro. Es la receta clásica del centrado absoluto; el transform ganará su sección propia más adelante. A todo eso sumale background-color: white, padding: 24px, width: 320px, border-radius: 8px y z-index: 20.",
				pt: "O conteúdo: com .modal-content define position: fixed, top: 50% e left: 50% — com isso o canto do modal cai no meio do ecrã — e transform: translate(-50%, -50%), que o empurra de volta metade da sua própria largura e da sua própria altura: o canto passa a ser o seu centro. É a receita clássica do centrado absoluto; o transform ganará a sua secção própria mais adiante. A tudo isso soma background-color: white, padding: 24px, width: 320px, border-radius: 8px e z-index: 20.",
			},
			{
				es: "Prueba de jerarquía: cambiá el z-index del modal a 5 (debajo del overlay 10) y mirá cómo el modal queda tapado. Volvé a ponerlo en 20: el orden del eje Z lo decidís vos.",
				pt: "Prova de hierarquia: muda o z-index do modal para 5 (por baixo do overlay 10) e vê como o modal fica tapado. Volta a pô-lo em 20: a ordem do eixo Z decide-a tu.",
			},
		],
		verify: [
			{
				es: "El modal está centrado (viewport) y flotando sobre un fondo oscuro que cubre toda la página.",
				pt: "O modal está centrado no viewport e a flutuar sobre um fundo escuro que cobre toda a página.",
			},
			{
				es: "El overlay no tapa al modal: 20 > 10. Si intercambiás los z-index, el overlay gana: la jerarquía es real.",
				pt: "O overlay não tapa o modal: 20 > 10. Se trocares os z-index, o overlay ganha: a hierarquia é real.",
			},
			{
				es: "La página base sigue a la vista y centrada: el modal se superpone sin romper el flujo, porque fixed lo saca del documento.",
				pt: "A página base continua à vista e centrada: o modal sobrepõe-se sem quebrar o fluxo, porque o fixed o retira do documento.",
			},
		],
		expected: {
			es: "Ves la página del teatro centrada y, encima de todo, el fondo oscuro con el modal blanco 'Lista de espera' centrado en la pantalla.",
			pt: "Vês a página do teatro centrada e, por cima de tudo, o fundo escuro com o modal branco 'Lista de espera' centrado no ecrã.",
		},
		starter: {
			es: [
				{
					file: "reservas.html",
					code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reservas del teatro El Faro</title>
  <link rel="stylesheet" href="reservas.css">
</head>
<body>
  <div class="pagina">
    <h1>Reservas del teatro El Faro</h1>
    <p>La función de esta noche está llena. Confirmá tus datos abajo para entrar en la lista de espera.</p>
    <button type="button">Abrir lista de espera</button>
  </div>

  <div class="overlay"></div>
  <div class="modal-content">
    <h2>Lista de espera</h2>
    <p>Confirmá tu correo para entrar en la lista de espera.</p>
    <input type="email" placeholder="tu@correo.com">
    <button type="button">Confirmar</button>
  </div>
</body>
</html>`,
				},
				{
					file: "reservas.css",
					code: `/* Reset: quita márgenes y paddings de navegador; con border-box el padding y el border no agrandan las cajas */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 1) Base */
body {
  /* font-family: sans-serif; */
  /* background-color: #f3f4f6; */
  /* padding: 32px 16px; */
}
.pagina {
  /* max-width: 640px; */
  /* margin: 0 auto; */
}

/* Los botones con estilo propio */
button {
  /* background-color: #2e86c1; */
  /* color: white; */
  /* border: none; */
  /* padding: 8px 12px; */
  /* border-radius: 4px; */
}

/* 2) El overlay: cubre toda la pantalla */
.overlay {
  /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
  /* width: 100%; */
  /* height: 100%; */
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* z-index: 10; */
}

/* 3) El modal: flotando centrado por encima del overlay */
.modal-content {
  /* position: fixed; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  /* background-color: white; */
  /* padding: 24px; */
  /* width: 320px; */
  /* border-radius: 8px; */
  /* z-index: 20; */
}`,
				},
			],
			pt: [
				{
					file: "reservas.html",
					code: `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reservas do teatro O Farol</title>
  <link rel="stylesheet" href="reservas.css">
</head>
<body>
  <div class="pagina">
    <h1>Reservas do teatro O Farol</h1>
    <p>A sessão de hoje está esgotada. Confirma os teus dados em baixo para entrar na lista de espera.</p>
    <button type="button">Abrir lista de espera</button>
  </div>

  <div class="overlay"></div>
  <div class="modal-content">
    <h2>Lista de espera</h2>
    <p>Confirma o teu e-mail para entrar na lista de espera.</p>
    <input type="email" placeholder="teu@email.com">
    <button type="button">Confirmar</button>
  </div>
</body>
</html>`,
				},
				{
					file: "reservas.css",
					code: `/* Reset: tira margens e paddings do browser; com border-box o padding e a border não alargam as caixas */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 1) Base */
body {
  /* font-family: sans-serif; */
  /* background-color: #f3f4f6; */
  /* padding: 32px 16px; */
}
.pagina {
  /* max-width: 640px; */
  /* margin: 0 auto; */
}

/* Os botões com estilo próprio */
button {
  /* background-color: #2e86c1; */
  /* color: white; */
  /* border: none; */
  /* padding: 8px 12px; */
  /* border-radius: 4px; */
}

/* 2) O overlay: cobre todo o ecrã */
.overlay {
  /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
  /* width: 100%; */
  /* height: 100%; */
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* z-index: 10; */
}

/* 3) O modal: a flutuar centrado por cima do overlay */
.modal-content {
  /* position: fixed; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  /* background-color: white; */
  /* padding: 24px; */
  /* width: 320px; */
  /* border-radius: 8px; */
  /* z-index: 20; */
}`,
				},
			],
		},
	},
];
