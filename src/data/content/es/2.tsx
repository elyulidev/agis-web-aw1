import {
	Braces,
	Check,
	FileCode2,
	Globe,
	Heading1,
	Languages,
	Minus,
	MonitorSmartphone,
	Pilcrow,
	Search,
	SeparatorHorizontal,
	Sparkles,
	Type,
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

const CheckItem = ({ children }: { children: React.ReactNode }) => (
	<li className="flex items-start gap-2">
		<Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" aria-hidden />
		<span>{children}</span>
	</li>
);

const Lecture2Es = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />2 horas · Esqueleto
				sólido y semántico
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Pensemos en la construcción de una casa: HTML es la base y la estructura
				de esa casa. Define el significado y la estructura del contenido,
				mientras que CSS, que veremos más adelante, es la decoración. Hoy nos
				centraremos en construir ese esqueleto sólido y semántico. A lo largo de
				estas dos horas, cubriremos los elementos esenciales que componen
				cualquier página web.
			</p>
		</section>

		<section>
			<SectionTitle index={1}>
				Anatomía de un documento HTML: &lt;!DOCTYPE&gt;, &lt;html&gt;,
				&lt;head&gt; y &lt;body&gt;
			</SectionTitle>
			<p className="mb-4">
				Todo documento HTML sigue una estructura fundamental que debemos
				respetar. Esta estructura es como el esqueleto de nuestra página y se
				compone de cuatro partes principales.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<FileCode2 className="h-5 w-5" aria-hidden />}
					title="<!DOCTYPE html>"
					iconClassName="bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-300"
				>
					La primera línea, siempre. No es una etiqueta HTML: es una instrucción
					que le dice al navegador que usás HTML5 moderno.
				</ConceptCard>
				<ConceptCard
					icon={<Braces className="h-5 w-5" aria-hidden />}
					title="<html>"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					La etiqueta raíz que envuelve todo. Dentro anidamos{" "}
					<Code>&lt;head&gt;</Code> y <Code>&lt;body&gt;</Code>.
				</ConceptCard>
				<ConceptCard
					icon={<Globe className="h-5 w-5" aria-hidden />}
					title="<head>"
					iconClassName="bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300"
				>
					La cabecera: metadatos no visibles (título, enlaces a CSS, etc.).
				</ConceptCard>
				<ConceptCard
					icon={<MonitorSmartphone className="h-5 w-5" aria-hidden />}
					title="<body>"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					El cuerpo: todo el contenido visible (textos, imágenes, enlaces).
				</ConceptCard>
			</div>
			<p className="mt-6 mb-2 font-medium">Un esqueleto básico se vería así:</p>
			<CodeBlock
				language="html"
				codeString={`<!DOCTYPE html>
<html>
  <head>
    <!-- Metadatos y enlaces a estilos -->
  </head>
  <body>
    <!-- Contenido visible de la página -->
  </body>
</html>`}
			/>
			<Callout variant="tip" title="Legibilidad ante todo">
				Es fundamental mantener una correcta anidación y sangría (indentación)
				en el código para que sea legible y fácil de mantener.
			</Callout>
		</section>

		<section>
			<SectionTitle index={2}>
				Metaetiquetas Esenciales y el Atributo `lang`
			</SectionTitle>
			<p className="mb-4">
				Dentro de la etiqueta <Code>&lt;head&gt;</Code>, definimos información
				crucial tanto para el navegador como para los motores de búsqueda (como
				Google). Estas son las metaetiquetas más importantes:
			</p>
			<div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800/60">
				<div className="flex gap-3 p-4">
					<Languages className="h-5 w-5 shrink-0 text-blue-500" aria-hidden />
					<div className="text-sm">
						<Code>&lt;meta charset="utf-8"&gt;</Code>
						<p className="mt-1 text-gray-600 dark:text-gray-300">
							Declara la codificación. UTF-8 es el estándar: representa casi
							cualquier carácter de cualquier idioma (la “ñ”, las tildes).
						</p>
					</div>
				</div>
				<div className="flex gap-3 p-4">
					<MonitorSmartphone
						className="h-5 w-5 shrink-0 text-green-500"
						aria-hidden
					/>
					<div className="text-sm">
						<Code>
							&lt;meta name="viewport" content="width=device-width,
							initial-scale=1.0"&gt;
						</Code>
						<p className="mt-1 text-gray-600 dark:text-gray-300">
							Clave para el diseño responsivo: el ancho se ajusta al dispositivo
							y el zoom inicial queda al 100%.
						</p>
					</div>
				</div>
				<div className="flex gap-3 p-4">
					<Type className="h-5 w-5 shrink-0 text-purple-500" aria-hidden />
					<div className="text-sm">
						<Code>&lt;title&gt;</Code>
						<p className="mt-1 text-gray-600 dark:text-gray-300">
							El título en la pestaña del navegador. Extremadamente importante
							para el SEO.
						</p>
					</div>
				</div>
				<div className="flex gap-3 p-4">
					<Search className="h-5 w-5 shrink-0 text-amber-500" aria-hidden />
					<div className="text-sm">
						<Code>&lt;meta name="description" content="..."&gt;</Code>
						<p className="mt-1 text-gray-600 dark:text-gray-300">
							Descripción breve que los buscadores muestran en los resultados.
						</p>
					</div>
				</div>
				<div className="flex gap-3 p-4">
					<Globe className="h-5 w-5 shrink-0 text-sky-500" aria-hidden />
					<div className="text-sm">
						<Code>lang</Code> en <Code>&lt;html lang="es"&gt;</Code>
						<p className="mt-1 text-gray-600 dark:text-gray-300">
							Especifica el idioma principal del documento: crucial para
							accesibilidad y SEO.
						</p>
					</div>
				</div>
			</div>

			<div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-700">
				<div className="flex items-end gap-1 bg-gray-100 px-3 pt-2 dark:bg-gray-800">
					<div className="flex items-center gap-2 rounded-t-lg bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm dark:bg-gray-900 dark:text-gray-200">
						<span className="flex gap-1" aria-hidden>
							<span className="h-2 w-2 rounded-full bg-red-400" />
							<span className="h-2 w-2 rounded-full bg-yellow-400" />
							<span className="h-2 w-2 rounded-full bg-green-400" />
						</span>
						Lección 2: Estructura HTML - Mi Curso Web
					</div>
				</div>
				<p className="bg-white px-4 py-3 text-center text-xs text-gray-500 dark:bg-gray-900 dark:text-gray-400">
					Así se ve el <Code>&lt;title&gt;</Code> en la pestaña del navegador
				</p>
			</div>

			<h4 className="text-xl font-semibold mt-6 mb-2">
				Ejemplo de una sección &lt;head&gt; completa:
			</h4>
			<CodeBlock
				language="html"
				codeString={`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Aprende los fundamentos de HTML en esta lección interactiva.">
  <title>Lección 2: Estructura HTML - Mi Curso Web</title>
</head>`}
			/>
		</section>

		<section>
			<SectionTitle index={3}>
				Encabezados &lt;h1&gt; a &lt;h6&gt;: Jerarquía y SEO
			</SectionTitle>
			<p className="mb-4">
				Los encabezados se utilizan para estructurar el contenido de forma
				jerárquica. HTML nos ofrece seis niveles, desde <Code>&lt;h1&gt;</Code>{" "}
				(el más importante) hasta <Code>&lt;h6&gt;</Code> (el menos importante).
				Usarlos correctamente crea una estructura lógica que ayuda a los
				usuarios y a los motores de búsqueda a entender la organización del
				contenido.
			</p>
			<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/60">
				<p className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
					<Heading1 className="h-4 w-4" aria-hidden />
					Vista previa · los seis niveles en escala
				</p>
				<div className="space-y-1 border-l-4 border-blue-500 pl-4">
					<p className="text-3xl font-extrabold text-gray-900 dark:text-white">
						Título h1{" "}
						<span className="text-sm font-normal text-gray-400">
							· una vez por página
						</span>
					</p>
					<p className="text-2xl font-bold text-gray-900 dark:text-white">
						Subtítulo h2
					</p>
					<p className="text-xl font-bold text-gray-800 dark:text-gray-100">
						Sección h3
					</p>
					<p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
						Subsección h4
					</p>
					<p className="text-base font-semibold text-gray-600 dark:text-gray-300">
						Detalle h5
					</p>
					<p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
						Nota menor h6
					</p>
				</div>
			</div>
			<Callout variant="warning" title="Regla de Oro para el SEO:">
				Usa una única etiqueta <Code>&lt;h1&gt;</Code> por página. Los
				buscadores identifican el <Code>&lt;h1&gt;</Code> como el título
				principal del contenido de esa página.
			</Callout>
			<CodeBlock
				language="html"
				codeString={`<body>
  <h1>Anatomía de un Documento HTML</h1>
  <p>El documento se divide en dos partes principales...</p>

  <h2>La Cabecera (<head>)</h2>
  <p>Aquí definimos los metadatos...</p>

  <h3>Metaetiquetas Comunes</h3>
  <p>Las metaetiquetas más importantes son...</p>

  <h2>El Cuerpo (<body>)</h2>
  <p>Aquí va todo el contenido visible...</p>
</body>`}
			/>
		</section>

		<section>
			<SectionTitle index={4}>
				Párrafos &lt;p&gt;, Saltos de Línea &lt;br&gt;, y Reglas Horizontales
				&lt;hr&gt;
			</SectionTitle>
			<p className="mb-4">
				Estos son los elementos básicos para formatear el flujo de texto:
			</p>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<Pilcrow className="h-5 w-5" aria-hidden />}
					title="<p> · Párrafo"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Elemento de bloque: ocupa todo el ancho y empieza en una línea nueva.
				</ConceptCard>
				<ConceptCard
					icon={<Minus className="h-5 w-5" aria-hidden />}
					title="<br> · Salto"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					Salto simple sin crear párrafo (direcciones, poemas). Etiqueta vacía,
					sin cierre.
				</ConceptCard>
				<ConceptCard
					icon={<SeparatorHorizontal className="h-5 w-5" aria-hidden />}
					title="<hr> · Ruptura"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Regla horizontal: ruptura temática entre secciones.
				</ConceptCard>
			</div>
			<div className="mt-4 rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-5 dark:border-gray-600 dark:bg-gray-800/40">
				<p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
					Vista previa · así lo renderiza el navegador
				</p>
				<p className="text-gray-800 dark:text-gray-200">
					Este es el primer párrafo. Habla sobre un tema específico.
				</p>
				<hr className="my-3 border-gray-300 dark:border-gray-600" />
				<p className="text-gray-800 dark:text-gray-200">
					Este es el segundo párrafo, tras la ruptura temática.
				</p>
				<p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
					Ministerio de Educación
					<br />
					Calle Falsa 123
					<br />
					Ciudad Capital
				</p>
			</div>
			<CodeBlock
				language="html"
				codeString={`<p>Este es el primer párrafo. Habla sobre un tema específico.</p>
<hr>
<p>Este es el segundo párrafo, que trata un tema diferente después de la ruptura temática.</p>
<p>
  Ministerio de Educación<br>
  Calle Falsa 123<br>
  Ciudad Capital
</p>`}
			/>
		</section>

		<section>
			<SectionTitle index={5}>
				Preformateo de texto con &lt;pre&gt;
			</SectionTitle>
			<p className="mb-4">
				A veces, necesitamos que el navegador respete los espacios en blanco,
				tabulaciones y saltos de línea tal como los escribimos en nuestro
				código. Para eso, usamos la etiqueta <Code>&lt;pre&gt;</Code>.
			</p>
			<Callout variant="info" title="Monoespaciada y literal">
				El texto dentro de <Code>&lt;pre&gt;</Code> se muestra en fuente de
				ancho fijo y conserva espacios y saltos de línea. Ideal para código,
				poesía o arte ASCII.
			</Callout>
			<CodeBlock
				language="html"
				codeString={`<pre>
  function saludar(nombre) {
    console.log("Hola, " + nombre);
  }

  saludar("Mundo");
</pre>

<pre>
  Mi corazón oprimido
  siente junto a la alborada
  el dolor de sus amores
  y el sueño de las distancia.
      - Federico García Lorca
</pre>`}
			/>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2">
				📝 Tarea: Estructurando tu Biografía
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				En esta tarea, aplicarás lo aprendido sobre la estructura de un
				documento HTML, metadatos y etiquetas de texto para crear una página de
				biografía simple.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Crea el Archivo">
					En la carpeta de tu proyecto, crea <Code>biografia.html</Code>.
				</Step>
				<Step number={2} title="Estructura Base">
					Usa Emmet (<Code>!</Code>) para generar la estructura inicial.
				</Step>
				<Step number={3} title="Configura la Cabecera (<head>)">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							Codificación <Code>UTF-8</Code>.
						</CheckItem>
						<CheckItem>
							Metaetiqueta <Code>viewport</Code> para diseño responsivo.
						</CheckItem>
						<CheckItem>
							<Code>&lt;title&gt;</Code> → “Mi Biografía - [Tu Nombre]”.
						</CheckItem>
						<CheckItem>
							<Code>&lt;meta name="description"&gt;</Code> breve.
						</CheckItem>
						<CheckItem>
							<Code>lang="es"</Code> en <Code>&lt;html&gt;</Code>.
						</CheckItem>
					</ul>
				</Step>
				<Step number={4} title="Construye el Cuerpo (<body>)">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							Un <Code>&lt;h1&gt;</Code> con tu nombre completo.
						</CheckItem>
						<CheckItem>
							Sección <Code>&lt;h2&gt;</Code> “Sobre Mí” + uno o dos{" "}
							<Code>&lt;p&gt;</Code>.
						</CheckItem>
						<CheckItem>
							Un <Code>&lt;hr&gt;</Code> separando secciones.
						</CheckItem>
						<CheckItem>
							Sección <Code>&lt;h2&gt;</Code> “Mis Hobbies” + un párrafo.
						</CheckItem>
						<CheckItem>
							Un <Code>&lt;br&gt;</Code> en una dirección o poema corto.
						</CheckItem>
					</ul>
				</Step>
				<Step number={5} title="Visualiza tu Trabajo">
					Abre <Code>biografia.html</Code> con Live Server.
				</Step>
			</ol>
			<Callout variant="success" title="Cierre">
				Esta práctica te ayudará a solidificar tu comprensión de la jerarquía de
				encabezados y la estructura semántica básica de una página web.
			</Callout>
		</section>
	</div>
);

export default Lecture2Es;
