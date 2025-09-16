import CodeBlock from "@/components/ui/code-block";

const Lecture2Es = () => (
	<div className='space-y-8'>
		<p>
			Pensemos en la construcción de una casa: HTML es la base y la estructura
			de esa casa. Define el significado y la estructura del contenido, mientras
			que CSS, que veremos más adelante, es la decoración. Hoy nos centraremos
			en construir ese esqueleto sólido y semántico. A lo largo de estas dos
			horas, cubriremos los elementos esenciales que componen cualquier página
			web.
		</p>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Anatomía de un documento HTML: &lt;!DOCTYPE&gt;, &lt;html&gt;,
				&lt;head&gt; y &lt;body&gt;
			</h3>
			<p className='mb-4'>
				Todo documento HTML sigue una estructura fundamental que debemos
				respetar. Esta estructura es como el esqueleto de nuestra página y se
				compone de cuatro partes principales.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;!DOCTYPE html&gt;</strong>: Esta es la primera línea que
					siempre debe aparecer en su archivo. No es una etiqueta HTML, sino una
					instrucción especial que le dice al navegador que está utilizando una
					versión moderna de HTML (específicamente HTML5).
				</li>
				<li>
					<strong>&lt;html&gt;</strong>: Esta es la etiqueta raíz que envuelve
					todo el contenido de la página. Dentro de ella, anidamos dos elementos
					principales: <code>&lt;head&gt;</code> y <code>&lt;body&gt;</code>.
				</li>
				<li>
					<strong>&lt;head&gt;</strong>: La sección <code>&lt;head&gt;</code> (o
					cabecera) contiene metadatos, es decir, información sobre el documento
					que no es visible directamente en la página (como el título, enlaces a
					CSS, etc.).
				</li>
				<li>
					<strong>&lt;body&gt;</strong>: La sección <code>&lt;body&gt;</code> (o
					cuerpo) contiene todo el contenido visible de la página web: textos,
					imágenes, enlaces, etc.
				</li>
			</ul>
			<p className='mb-4'>Un esqueleto básico se vería así:</p>
			<CodeBlock
				language='html'
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
			<p className='mt-4'>
				Es fundamental mantener una correcta anidación y sangría (indentación)
				en el código para que sea legible y fácil de mantener.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Metaetiquetas Esenciales y el Atributo `lang`
			</h3>
			<p className='mb-4'>
				Dentro de la etiqueta <code>&lt;head&gt;</code>, definimos información
				crucial tanto para el navegador como para los motores de búsqueda (como
				Google). Estas son las metaetiquetas más importantes:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;meta charset="utf-8"&gt;</strong>: Declara la codificación
					de caracteres. Usar UTF-8 es el estándar recomendado, ya que permite
					representar correctamente casi cualquier carácter de cualquier idioma
					(como la "ñ" o las tildes).
				</li>
				<li>
					<strong>
						&lt;meta name="viewport" content="width=device-width,
						initial-scale=1.0"&gt;
					</strong>
					: Clave para el diseño responsivo, le indica al navegador que el ancho
					de la página debe ajustarse al del dispositivo y establece el zoom
					inicial al 100%.
				</li>
				<li>
					<strong>&lt;title&gt;</strong>: Define el título del documento que
					aparece en la pestaña del navegador. Es extremadamente importante para
					el SEO.
				</li>
				<li>
					<strong>&lt;meta name="description" content="..."&gt;</strong>:
					Proporciona una descripción breve del contenido de la página, usada
					por los motores de búsqueda en los resultados.
				</li>
				<li>
					<strong>Atributo `lang`</strong>: Se coloca en la etiqueta{" "}
					<code>&lt;html&gt;</code> (ej: <code>&lt;html lang="es"&gt;</code>) y
					especifica el idioma principal del documento, lo cual es crucial para
					la accesibilidad y el SEO.
				</li>
			</ul>
			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Ejemplo de una sección &lt;head&gt; completa:
			</h4>
			<CodeBlock
				language='html'
				codeString={`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Aprende los fundamentos de HTML en esta lección interactiva.">
  <title>Lección 2: Estructura HTML - Mi Curso Web</title>
</head>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Encabezados &lt;h1&gt; a &lt;h6&gt;: Jerarquía y SEO
			</h3>
			<p className='mb-4'>
				Los encabezados se utilizan para estructurar el contenido de forma
				jerárquica. HTML nos ofrece seis niveles, desde <code>&lt;h1&gt;</code>{" "}
				(el más importante) hasta <code>&lt;h6&gt;</code> (el menos importante).
				Usarlos correctamente crea una estructura lógica que ayuda a los
				usuarios y a los motores de búsqueda a entender la organización del
				contenido.
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					Regla de Oro para el SEO:
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					Usa una única etiqueta <code>&lt;h1&gt;</code> por página. Los
					buscadores identifican el <code>&lt;h1&gt;</code> como el título
					principal del contenido de esa página.
				</p>
			</div>
			<CodeBlock
				language='html'
				codeString={`<body>
  <h1>Anatomía de un Documento HTML</h1>
  <p>El documento se divide en dos partes principales...</p>

  <h2>La Cabecera (&lt;head&gt;)</h2>
  <p>Aquí definimos los metadatos...</p>

  <h3>Metaetiquetas Comunes</h3>
  <p>Las metaetiquetas más importantes son...</p>

  <h2>El Cuerpo (&lt;body&gt;)</h2>
  <p>Aquí va todo el contenido visible...</p>
</body>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Párrafos &lt;p&gt;, Saltos de Línea &lt;br&gt;, y Reglas Horizontales
				&lt;hr&gt;
			</h3>
			<p className='mb-4'>
				Estos son los elementos básicos para formatear el flujo de texto:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;p&gt;</strong>: Define un párrafo de texto. Es un elemento
					de bloque, lo que significa que ocupa todo el ancho disponible y
					comienza en una nueva línea.
				</li>
				<li>
					<strong>&lt;br&gt;</strong>: Inserta un salto de línea simple. Es útil
					cuando necesitas que el texto continúe en la línea siguiente sin crear
					un nuevo párrafo (por ejemplo, en direcciones o poemas). Es una
					etiqueta "vacía" (no tiene cierre).
				</li>
				<li>
					<strong>&lt;hr&gt;</strong>: Crea una "regla horizontal" (una línea).
					Semánticamente, representa una ruptura temática entre secciones.
				</li>
			</ul>
			<CodeBlock
				language='html'
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
			<h3 className='text-2xl font-semibold mb-3'>
				5. Preformateo de texto con &lt;pre&gt;
			</h3>
			<p className='mb-4'>
				A veces, necesitamos que el navegador respete los espacios en blanco,
				tabulaciones y saltos de línea tal como los escribimos en nuestro
				código. Para eso, usamos la etiqueta <code>&lt;pre&gt;</code>.
			</p>
			<p className='mb-4'>
				El texto dentro de un elemento <code>&lt;pre&gt;</code> se muestra en
				una fuente de ancho fijo (monoespaciada) y conserva tanto los espacios
				como los saltos de línea. Es ideal para mostrar fragmentos de código,
				poesía o arte ASCII.
			</p>
			<CodeBlock
				language='html'
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

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Estructurando tu Biografía
			</h3>
			<p className='mb-4'>
				En esta tarea, aplicarás lo aprendido sobre la estructura de un
				documento HTML, metadatos y etiquetas de texto para crear una página de
				biografía simple.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Crea el Archivo:</strong> En la carpeta de tu proyecto, crea
					un nuevo archivo llamado <code>biografia.html</code>.
				</li>
				<li>
					<strong>Estructura Base:</strong> Usa Emmet (<code>!</code>) para
					generar la estructura inicial del documento.
				</li>
				<li>
					<strong>
						Configura la Cabecera (<code>&lt;head&gt;</code>):
					</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Asegúrate de que la codificación sea <code>UTF-8</code>.
						</li>
						<li>
							Incluye la metaetiqueta <code>viewport</code> para el diseño
							responsivo.
						</li>
						<li>
							Cambia el <code>&lt;title&gt;</code> a "Mi Biografía - [Tu
							Nombre]".
						</li>
						<li>
							Añade una <code>&lt;meta name="description"&gt;</code> que
							describa brevemente la página.
						</li>
						<li>
							No olvides el atributo <code>lang="es"</code> en la etiqueta{" "}
							<code>&lt;html&gt;</code>.
						</li>
					</ul>
				</li>
				<li>
					<strong>
						Construye el Cuerpo (<code>&lt;body&gt;</code>):
					</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Usa una etiqueta <code>&lt;h1&gt;</code> para tu nombre completo.
						</li>
						<li>
							Crea una sección con un <code>&lt;h2&gt;</code> que diga "Sobre
							Mí" y escribe uno o dos párrafos (<code>&lt;p&gt;</code>) sobre
							ti.
						</li>
						<li>
							Añade una regla horizontal (<code>&lt;hr&gt;</code>) para separar
							visualmente las secciones.
						</li>
						<li>
							Crea otra sección con un <code>&lt;h2&gt;</code> para "Mis
							Hobbies" y describe tus pasatiempos en un párrafo.
						</li>
						<li>
							Usa la etiqueta <code>&lt;br&gt;</code> para añadir un salto de
							línea en medio de una dirección o un poema corto si lo deseas.
						</li>
					</ul>
				</li>
				<li>
					<strong>Visualiza tu Trabajo:</strong> Abre{" "}
					<code>biografia.html</code> con Live Server para ver el resultado.
				</li>
			</ol>
			<p>
				Esta práctica te ayudará a solidificar tu comprensión de la jerarquía de
				encabezados y la estructura semántica básica de una página web.
			</p>
		</section>
	</div>
);

export default Lecture2Es;
