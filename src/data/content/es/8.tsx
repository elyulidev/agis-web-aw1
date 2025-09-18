import CodeBlock from "@/components/ui/code-block";

const Lecture8Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Tres Caminos hacia el Estilo: Formas de Incluir CSS
			</h3>
			<p className='mb-4'>
				Existen tres maneras de aplicar CSS a un documento HTML. Entender sus
				diferencias es clave para escribir código organizado y eficiente.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				a) Estilos en Línea (Inline Styles)
			</h4>
			<p className='mb-4'>
				Se aplican directamente a un elemento HTML usando el atributo{" "}
				<code>style</code>.
			</p>
			<CodeBlock
				language='html'
				codeString={`<p style="color: red; font-size: 16px;">Este párrafo es rojo.</p>`}
			/>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					¡Evítalo si es posible!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					Este método va en contra de la "separación de responsabilidades".
					Mezcla la estructura (HTML) con la presentación (CSS), lo que hace que
					el código sea muy difícil de mantener. Su uso se reserva para casos
					muy específicos, como aplicar estilos dinámicos con JavaScript.
				</p>
			</div>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				b) Hoja de Estilos Interna (Internal Stylesheet)
			</h4>
			<p className='mb-4'>
				Se definen las reglas de CSS dentro de una etiqueta{" "}
				<code>&lt;style&gt;</code> en la sección <code>&lt;head&gt;</code> del
				documento HTML.
			</p>
			<CodeBlock
				language='html'
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
			<p className='mt-4'>
				Es mejor que los estilos en línea, pero los estilos solo se aplican a
				esa página. Si tienes varias páginas, tendrías que repetir el código CSS
				en cada una.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				c) Hoja de Estilos Externa (External Stylesheet)
			</h4>
			<p className='mb-4'>
				Esta es la{" "}
				<strong>práctica recomendada y estándar de la industria</strong>. Se
				crea un archivo separado con la extensión <code>.css</code> (ej.{" "}
				<code>styles.css</code>) y se enlaza desde el HTML usando la etiqueta{" "}
				<code>&lt;link&gt;</code> en el <code>&lt;head&gt;</code>.
			</p>
			<CodeBlock
				language='css'
				codeString={`/* Dentro de styles.css */
p {
  color: blue;
}`}
			/>
			<CodeBlock
				language='html'
				codeString={`<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>Este párrafo es azul.</p>
</body>`}
			/>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					Ventajas de las Hojas Externas:
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Mantienen el código limpio y separado. Permiten que múltiples páginas
					HTML usen la misma hoja de estilos, facilitando la consistencia y el
					mantenimiento. Además, el navegador puede guardar el archivo{" "}
					<code>.css</code> en caché, acelerando la carga de las páginas.
				</p>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Selectores Básicos: Apuntando a Nuestro Objetivo
			</h3>
			<p className='mb-4'>
				Los selectores son el corazón de CSS. Son los patrones que usamos para
				decirle al navegador a qué elementos queremos aplicar nuestros estilos.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>Selector Universal (`*`)</strong>: Selecciona{" "}
					<strong>todos</strong> los elementos de la página. Es útil para
					aplicar estilos base o reinicios.
					<CodeBlock
						language='css'
						codeString={`* {
  box-sizing: border-box; /* Un reinicio común */
}`}
					/>
				</li>
				<li>
					<strong>Selector de Tipo/Etiqueta</strong>: Selecciona todos los
					elementos de un tipo de etiqueta específico.
					<CodeBlock
						language='css'
						codeString={`/* Hace que todos los h2 sean de color gris oscuro */
h2 {
  color: #333;
}`}
					/>
				</li>
				<li>
					<strong>Selector de Clase (`.`)</strong>: Selecciona todos los
					elementos que tienen un atributo <code>class</code> específico. Es el
					selector más versátil y reutilizable. Un mismo elemento puede tener
					múltiples clases.
					<CodeBlock
						language='css'
						codeString={`.alerta {
  color: red;
  font-weight: bold;
}`}
					/>
					<CodeBlock
						language='html'
						codeString={`<p class="alerta">Cuidado, esto es importante.</p>`}
					/>
				</li>
				<li>
					<strong>Selector de ID (`#`)</strong>: Selecciona el{" "}
					<strong>único</strong> elemento que tiene un atributo <code>id</code>{" "}
					específico. Los IDs deben ser únicos por página. Se usa para elementos
					estructurales importantes que no se repiten.
					<CodeBlock
						language='css'
						codeString={`#encabezado-principal {
  background-color: #f0f0f0;
}`}
					/>
					<CodeBlock
						language='html'
						codeString={`<header id="encabezado-principal">...</header>`}
					/>
				</li>
				<li>
					<strong>Agrupación de Selectores (`,`)</strong>: Permite aplicar el
					mismo bloque de estilos a múltiples selectores, separándolos por
					comas.
					<CodeBlock
						language='css'
						codeString={`h1, h2, h3 {
  font-family: 'Georgia', serif;
  color: navy;
}`}
					/>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Estilizando tu Biografía
			</h3>
			<p className='mb-4'>
				Es hora de dar un poco de color y forma a la página de biografía que
				creaste en el Módulo 1.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Crea un nuevo archivo llamado <code>estilos-biografia.css</code> en la
					misma carpeta que tu archivo <code>biografia.html</code>.
				</li>
				<li>
					Enlaza esta nueva hoja de estilos en la sección{" "}
					<code>&lt;head&gt;</code> de tu <code>biografia.html</code>.
				</li>
				<li>
					En tu archivo HTML, añade algunas clases e IDs. Por ejemplo, dale un
					ID a tu <code>&lt;h1&gt;</code> principal (ej.{" "}
					<code>id="nombre-titulo"</code>) y una clase a todas las secciones de
					contenido (ej. <code>class="seccion"</code>).
				</li>
				<li>
					Ahora, en <code>estilos-biografia.css</code>, escribe las siguientes
					reglas:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Usa el <strong>selector de tipo</strong> para darle a todo el{" "}
							<code>body</code> un color de fondo (<code>background-color</code>
							) y una fuente (<code>font-family</code>) de tu elección.
						</li>
						<li>
							Usa el <strong>selector de ID</strong> para estilizar tu{" "}
							<code>&lt;h1&gt;</code> (ej. cambiar su color y centrar el texto
							con <code>text-align: center;</code>).
						</li>
						<li>
							Usa el <strong>selector de clase</strong> para darle a cada{" "}
							<code>.seccion</code> un borde (<code>border</code>) y un poco de
							espacio interior (<code>padding</code>).
						</li>
						<li>
							Usa la <strong>agrupación de selectores</strong> para que todos
							los encabezados (<code>h1</code>, <code>h2</code>) tengan un color
							específico.
						</li>
					</ul>
				</li>
				<li>
					Abre tu página en el navegador. ¡Deberías ver tus primeros estilos
					aplicados!
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture8Es;
