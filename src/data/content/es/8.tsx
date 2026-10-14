import {
	Braces,
	Eraser,
	FileText,
	Globe,
	KeyRound,
	Link2,
	Palette,
	Send,
	Sparkles,
	Star,
	Tag,
	Type,
	Zap,
} from "lucide-react";
import {
	Callout,
	ConceptCard,
	SectionTitle,
	Step,
} from "@/components/lecture/lecture-blocks";
import CodeBlock from "@/components/ui/code-block";

const Code = ({ children }: { children: React.ReactNode }) => (
	<code className="rounded-md bg-gray-200 px-1.5 py-1 font-mono text-sm text-pink-600 dark:bg-gray-700 dark:text-pink-400">
		{children}
	</code>
);

const Subhead = ({ children }: { children: React.ReactNode }) => (
	<p className="mt-8 mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
		<span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden />
		<span>{children}</span>
	</p>
);

const Preview = ({
	label,
	children,
}: {
	label: string;
	children: React.ReactNode;
}) => (
	<div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-5 dark:border-gray-600 dark:bg-gray-800/40">
		<p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
			{label}
		</p>
		<div className="text-gray-800 dark:text-gray-200">{children}</div>
	</div>
);

const Lecture8Es = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				CSS · dónde vive, de qué base parte y a quién apunta
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				En la conferencia 7 conocimos la idea: CSS presenta, HTML estructura.
				Hoy respondemos tres preguntas prácticas:{" "}
				<strong>¿dónde escribo el CSS?</strong>,{" "}
				<strong>¿de qué base parto si el navegador ya pone estilos?</strong> y{" "}
				<strong>¿cómo elijo a qué elementos afecta?</strong>
			</p>
		</section>

		<section>
			<SectionTitle index={1}>
				Tres caminos hacia el estilo: formas de incluir CSS
			</SectionTitle>
			<p className="mb-4">
				Hay tres maneras de aplicar CSS. El resultado en pantalla puede verse
				igual: lo que cambia es <strong>dónde vive el código</strong> y qué tan
				fácil es mantenerlo.
			</p>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<Zap className="h-5 w-5" aria-hidden />}
					title="a) En línea (inline)"
					iconClassName="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
				>
					Atributo <Code>style</Code> directo en el elemento. Rápido, pero
					mezcla estructura con presentación.
				</ConceptCard>
				<ConceptCard
					icon={<FileText className="h-5 w-5" aria-hidden />}
					title="b) Interna"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Etiqueta <Code>&lt;style&gt;</Code> en el <Code>&lt;head&gt;</Code>.
					Vale para una sola página.
				</ConceptCard>
				<ConceptCard
					icon={<Link2 className="h-5 w-5" aria-hidden />}
					title="c) Externa ⭐"
					iconClassName="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
				>
					Archivo <Code>.css</Code> aparte, enlazado con{" "}
					<Code>&lt;link&gt;</Code>. La práctica recomendada.
				</ConceptCard>
			</div>

			<Subhead>El mismo resultado, distinto código</Subhead>
			<div className="grid gap-4 sm:grid-cols-3">
				<Preview label="a) Inline · style en el elemento">
					<p style={{ color: "red", fontSize: "16px" }}>
						Este párrafo es rojo.
					</p>
				</Preview>
				<Preview label="b) Interna · <style> en el head">
					<p style={{ color: "green" }}>Este párrafo es verde.</p>
				</Preview>
				<Preview label="c) Externa · styles.css + <link>">
					<p style={{ color: "blue" }}>Este párrafo es azul.</p>
				</Preview>
			</div>

			<Callout variant="warning" title="Evítalo si es posible">
				El estilo en línea va en contra de la separación de responsabilidades:
				mezcla HTML con CSS y el código se vuelve muy difícil de mantener.
				Reservalo para casos puntuales, como estilos dinámicos con JavaScript.
			</Callout>
			<div className="space-y-4">
				<CodeBlock
					language="html"
					codeString={`<p style="color: red; font-size: 16px;">Este párrafo es rojo.</p>`}
				/>
				<CodeBlock
					language="html"
					codeString={`<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>Este párrafo es verde.</p>
</body>`}
				/>
				<p className="text-sm text-gray-600 dark:text-gray-400">
					La interna ya es mejor, pero solo vale para esa página: con varias
					páginas repetirías el CSS en cada una.
				</p>
				<CodeBlock
					language="css"
					codeString={`/* Dentro de styles.css */
p {
  color: blue;
}`}
				/>
				<CodeBlock
					language="html"
					codeString={`<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>Este párrafo es azul.</p>
</body>`}
				/>
			</div>
			<Callout variant="success" title="Ventajas de la hoja externa">
				Código limpio y separado, una sola hoja para muchas páginas
				(consistencia), y el navegador guarda el <Code>.css</Code> en caché: las
				páginas cargan más rápido. Por eso es el estándar de la industria.
			</Callout>
			<div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
				<div className="flex-1 rounded-xl bg-orange-50 p-3 text-center text-sm font-semibold text-orange-800 dark:bg-orange-950/40 dark:text-orange-200">
					<FileText className="mx-auto mb-1 h-5 w-5" aria-hidden />
					biografia.html
				</div>
				<div className="text-center font-bold text-gray-400" aria-hidden>
					→
				</div>
				<div className="flex-1 rounded-xl bg-blue-50 p-3 text-center text-sm font-semibold text-blue-800 dark:bg-blue-950/40 dark:text-blue-200">
					<Link2 className="mx-auto mb-1 h-5 w-5" aria-hidden />
					&lt;link&gt; a estilos-biografia.css
				</div>
				<div className="text-center font-bold text-gray-400" aria-hidden>
					→
				</div>
				<div className="flex-1 rounded-xl bg-green-50 p-3 text-center text-sm font-semibold text-green-800 dark:bg-green-950/40 dark:text-green-200">
					<Palette className="mx-auto mb-1 h-5 w-5" aria-hidden />
					Toda la página con estilo
				</div>
			</div>
		</section>

		<section>
			<SectionTitle index={2}>
				Tu CSS no parte de cero: el navegador, los resets y el box-sizing
			</SectionTitle>
			<p className="mb-4">
				Antes de escribir tu primera regla tenés que saber algo: el navegador{" "}
				<strong>ya aplica sus propios estilos</strong> a cada página, incluso
				sin una sola línea de CSS tuyo. Esa base se llama{" "}
				<em>user agent stylesheet</em> (hoja de estilos del navegador).
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Globe className="h-5 w-5" aria-hidden />}
					title="Lo que el navegador pone solo"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					<Code>body</Code> con un margen de unos 8px alrededor de todo,{" "}
					<Code>h1</Code>–<Code>h6</Code> grandes y en negrita con márgenes,{" "}
					<Code>p</Code> con margen arriba y abajo, <Code>ul</Code> con viñetas
					y relleno a la izquierda, <Code>a</Code> azul y subrayado.
				</ConceptCard>
				<ConceptCard
					icon={<Eraser className="h-5 w-5" aria-hidden />}
					title="Por qué te tiene que importar"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Esos estilos <strong>varían entre navegadores</strong> y casi nunca
					son los de tu diseño. Tu CSS no pinta sobre un lienzo en blanco:{" "}
					<strong>compite con esa base</strong>. Por eso los proyectos serios
					arrancan reseteando.
				</ConceptCard>
			</div>
			<div className="mt-4">
				<Preview label="Simulación · así pinta el navegador un h1 y un p SIN tu CSS">
					<div>
						<p
							style={{
								fontSize: "2em",
								fontWeight: "bold",
								margin: "0.67em 0",
							}}
						>
							Título sin estilos míos
						</p>
						<p style={{ margin: "1em 0" }}>
							Párrafo sin estilos míos, con los márgenes que pone el navegador.
						</p>
					</div>
				</Preview>
			</div>
			<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
				Ojo: esta plataforma ya normaliza los márgenes por dentro, así que
				arriba los simulamos con estilo en línea para que veas lo que haría un
				navegador desnudo.
			</p>

			<Subhead>Los reseteos más comunes</Subhead>
			<p className="mb-4">
				Resetear es devolver los elementos a un punto de partida neutro y
				predecible. Estos son los tres reseteos que vas a ver en casi todos los
				proyectos:
			</p>
			<div className="space-y-4">
				<CodeBlock
					language="css"
					codeString={`/* 1. Reset universal: el punto de partida más común */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`}
				/>
				<p className="text-sm text-gray-600 dark:text-gray-400">
					Línea por línea: <Code>margin: 0</Code> saca los márgenes del
					navegador (<Code>body</Code>, <Code>h1</Code>, <Code>p</Code>);{" "}
					<Code>padding: 0</Code> saca los rellenos (las listas); y{" "}
					<Code>box-sizing</Code> lo vemos en detalle acá abajo: es el que
					vuelve predecibles los anchos.
				</p>
				<CodeBlock
					language="css"
					codeString={`/* 2. Reset del body: el navegador deja ~8px alrededor de todo */
body {
  margin: 0;
}

/* 3. Reset de listas: saca viñetas y el relleno lateral */
ul.sin-vinetas {
  list-style: none;
  padding: 0;
}`}
				/>
			</div>
			<Callout variant="tip" title="Reseteá a mano, al menos al principio">
				Existen hojas listas como <Code>normalize.css</Code> que emparejan los
				navegadores, pero en este curso reseteamos a mano: si entendés qué saca
				cada línea, después cualquier librería te resulta obvia. Y recordá que{" "}
				<Code>*</Code> afecta a <strong>todo</strong>: usalo para la base, no
				para estilos de diseño.
			</Callout>

			<Subhead>El problema del box-sizing, con números</Subhead>
			<p className="mb-4">
				Por defecto el navegador usa <Code>content-box</Code>:{" "}
				<Code>width</Code> mide <strong>solo el contenido</strong>, y el relleno
				(<Code>padding</Code>) y el borde (<Code>border</Code>) se{" "}
				<strong>suman por fuera</strong>. Mirá la cuenta con una caja de{" "}
				<Code>width: 200px</Code>, <Code>padding: 20px</Code> y{" "}
				<Code>border: 5px</Code>:
			</p>
			<p className="mb-4 text-center font-mono text-sm font-semibold text-gray-700 dark:text-gray-200">
				200 + (2 × 20) + (2 × 5) = 250px de ancho real
			</p>
			<p className="mb-4">
				Pediste 200 y ocupás 250. Dos cajas así ya no entran lado a lado en
				400px y el layout se rompe sin que entiendas por qué. Con{" "}
				<Code>border-box</Code>, en cambio, esos 200px son el{" "}
				<strong>total final</strong>: el contenido se encoge solo a 150px (200 −
				40 − 10) y la caja ocupa exactamente lo pedido.
			</p>
			<div className="mb-4">
				<Preview label="En vivo · misma width: 200px, distinto box-sizing">
					<div className="space-y-4">
						<div>
							<p className="mb-1 block text-xs font-semibold text-gray-600 dark:text-gray-300">
								content-box (por defecto) → ocupa 250px, se desborda
							</p>
							<div
								style={{
									width: "200px",
									padding: "20px",
									border: "5px solid #ef4444",
									boxSizing: "content-box",
									backgroundColor: "#fee2e2",
									color: "#7f1d1d",
								}}
							>
								200 de contenido + 40 de relleno + 10 de borde ={" "}
								<strong>250px</strong> en pantalla.
							</div>
						</div>
						<div>
							<p className="mb-1 block text-xs font-semibold text-gray-600 dark:text-gray-300">
								border-box → ocupa 200px exactos, predecible
							</p>
							<div
								style={{
									width: "200px",
									padding: "20px",
									border: "5px solid #16a34a",
									boxSizing: "border-box",
									backgroundColor: "#dcfce7",
									color: "#14532d",
								}}
							>
								Todo entra en <strong>200px</strong>: el contenido se achica
								solo.
							</div>
						</div>
					</div>
				</Preview>
			</div>
			<div className="space-y-4">
				<CodeBlock
					language="css"
					codeString={`/* content-box: el ancho se estira por fuera */
.caja-default {
  width: 200px;
  padding: 20px;
  border: 5px solid red;
  box-sizing: content-box; /* valor por defecto: 250px reales */
}

/* border-box: el ancho es el total final */
.caja-ordenada {
  width: 200px;
  padding: 20px;
  border: 5px solid green;
  box-sizing: border-box; /* 200px reales, siempre */
}`}
				/>
			</div>
			<Callout variant="success" title="Por eso va en el reset universal">
				Al poner <Code>box-sizing: border-box</Code> dentro del <Code>*</Code>,{" "}
				<strong>todas</strong> las cajas de tu página miden lo que pedís. Es lo
				primero que hacen casi todos los proyectos modernos, y ahora ya sabés
				exactamente por qué.
			</Callout>
		</section>

		<section>
			<SectionTitle index={3}>
				Selectores básicos: apuntando a nuestro objetivo
			</SectionTitle>
			<p className="mb-4">
				Los selectores son el corazón de CSS: el patrón que le dice al navegador{" "}
				<strong>a qué elementos</strong> aplicar cada regla.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Star className="h-5 w-5" aria-hidden />}
					title="Universal (*)"
					iconClassName="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
				>
					Selecciona <strong>todos</strong> los elementos. Útil para estilos
					base o reinicios.
				</ConceptCard>
				<ConceptCard
					icon={<Type className="h-5 w-5" aria-hidden />}
					title="De tipo / etiqueta"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Selecciona todos los elementos de una etiqueta, por ejemplo todos los{" "}
					<Code>h2</Code>.
				</ConceptCard>
				<ConceptCard
					icon={<Tag className="h-5 w-5" aria-hidden />}
					title="De clase (.)"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					El más versátil y reutilizable: todos los elementos con esa{" "}
					<Code>class</Code>. Un elemento puede tener varias clases.
				</ConceptCard>
				<ConceptCard
					icon={<KeyRound className="h-5 w-5" aria-hidden />}
					title="De ID (#)"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					El <strong>único</strong> elemento con ese <Code>id</Code>. Los ID
					deben ser únicos por página.
				</ConceptCard>
			</div>

			<Callout variant="tip" title="Clase vs ID: la diferencia clave">
				La <Code>class</Code> se <strong>repite</strong> (varios avisos con{" "}
				<Code>.alerta</Code>). El <Code>id</Code> es <strong>único</strong> (un
				solo <Code>#encabezado-principal</Code> por página, para bloques
				estructurales que no se repiten).
			</Callout>

			<Subhead>Universal y tipo · código</Subhead>
			<div className="space-y-4">
				<CodeBlock
					language="css"
					codeString={`* {
  box-sizing: border-box; /* Un reinicio común */
}`}
				/>
				<p className="text-sm text-gray-600 dark:text-gray-400">
					El porqué de <Code>box-sizing</Code> (<Code>content-box</Code> vs{" "}
					<Code>border-box</Code>) lo acabamos de ver en la sección 2: con este
					reinicio todos los anchos se vuelven predecibles.
				</p>
				<CodeBlock
					language="css"
					codeString={`/* Hace que todos los h2 sean de color gris oscuro */
h2 {
  color: #333;
}`}
				/>
			</div>

			<Subhead>Clase · se repite (probalo en vivo)</Subhead>
			<div className="mb-4">
				<Preview label="Vista previa · dos párrafos, misma clase .alerta">
					<div className="space-y-2">
						<p style={{ color: "red", fontWeight: "bold" }}>
							Cuidado, esto es importante.
						</p>
						<p style={{ color: "red", fontWeight: "bold" }}>
							Otro aviso con la misma clase.
						</p>
					</div>
				</Preview>
			</div>
			<div className="space-y-4">
				<CodeBlock
					language="css"
					codeString={`.alerta {
  color: red;
  font-weight: bold;
}`}
				/>
				<CodeBlock
					language="html"
					codeString={`<p class="alerta">Cuidado, esto es importante.</p>`}
				/>
			</div>

			<Subhead>ID · único por página</Subhead>
			<div className="mb-4">
				<Preview label="Vista previa · un solo encabezado con ID">
					<header style={{ backgroundColor: "#f0f0f0", padding: "12px" }}>
						Encabezado principal de la página
					</header>
				</Preview>
			</div>
			<div className="space-y-4">
				<CodeBlock
					language="css"
					codeString={`#encabezado-principal {
  background-color: #f0f0f0;
}`}
				/>
				<CodeBlock
					language="html"
					codeString={`<header id="encabezado-principal">...</header>`}
				/>
			</div>

			<Subhead>Agrupación (,) · una regla, varios selectores</Subhead>
			<div className="mb-4">
				<Preview label="Vista previa · h1, h2 y h3 con la misma regla">
					<div className="space-y-1">
						<h1 style={{ fontFamily: "Georgia, serif", color: "navy" }}>
							Título 1
						</h1>
						<h2 style={{ fontFamily: "Georgia, serif", color: "navy" }}>
							Título 2
						</h2>
						<h3 style={{ fontFamily: "Georgia, serif", color: "navy" }}>
							Título 3
						</h3>
					</div>
				</Preview>
			</div>
			<CodeBlock
				language="css"
				codeString={`h1, h2, h3 {
  font-family: 'Georgia', serif;
  color: navy;
}`}
			/>
			<div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
				<Braces className="h-4 w-4" aria-hidden />
				La coma evita repetir el mismo bloque tres veces.
			</div>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
				<Send className="h-6 w-6 text-blue-500" aria-hidden />📝 Tarea:
				estilizando tu biografía
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Hora de dar color y forma a la biografía del Módulo 1, todo con hoja
				externa.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Crea la hoja externa">
					Crea <Code>estilos-biografia.css</Code> en la misma carpeta que{" "}
					<Code>biografia.html</Code>.
				</Step>
				<Step number={2} title="Enlázala">
					En el <Code>&lt;head&gt;</Code> de <Code>biografia.html</Code> agregá{" "}
					<Code>
						&lt;link rel="stylesheet" href="estilos-biografia.css"&gt;
					</Code>
					.
				</Step>
				<Step number={3} title="Marca con clases e IDs">
					Dale un ID a tu <Code>&lt;h1&gt;</Code> (por ejemplo{" "}
					<Code>id="nombre-titulo"</Code>) y una clase a cada sección (por
					ejemplo <Code>class="seccion"</Code>).
				</Step>
				<Step number={4} title="Escribe las cuatro reglas">
					En <Code>estilos-biografia.css</Code>: tipo para <Code>body</Code> (
					<Code>background-color</Code> + <Code>font-family</Code>), ID para el{" "}
					<Code>h1</Code> (color + <Code>text-align: center;</Code>), clase{" "}
					<Code>.seccion</Code> (<Code>border</Code> + <Code>padding</Code>) y
					agrupación para <Code>h1, h2</Code>.
				</Step>
				<Step number={5} title="Mirá el resultado">
					Abrí la página en el navegador: tus primeros estilos aplicados.
				</Step>
			</ol>
			<Callout variant="success" title="Cierre">
				Ya sabés dónde vive el CSS, de qué base parte (y cómo resetearla) y cómo
				apuntar con selectores. En la conferencia 9 subimos de nivel: selectores
				avanzados y pseudo-clases.
			</Callout>
		</section>
	</div>
);

export default Lecture8Es;
