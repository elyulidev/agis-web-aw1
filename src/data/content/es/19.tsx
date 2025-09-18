import CodeBlock from "@/components/ui/code-block";

const Lecture19Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. De lo Estático a lo Dinámico: Presentando JavaScript
			</h3>
			<p className='mb-4'>
				¡Felicidades por llegar al Módulo 5! Hasta ahora, hemos aprendido a
				construir la estructura y el esqueleto de una página web con HTML y, en
				módulos futuros, aprenderemos a darle estilo con CSS. Hemos creado
				páginas estáticas, que son como folletos digitales: muestran
				información, pero no reaccionan a las acciones del usuario.
			</p>
			<p className='mb-4'>
				Hoy, damos el salto al mundo dinámico con{" "}
				<strong>JavaScript (JS)</strong>. Si HTML es el esqueleto y CSS es la
				piel, JavaScript es el sistema nervioso y los músculos. Es el lenguaje
				de programación que nos permite añadir interactividad, lógica y
				dinamismo a nuestros sitios web.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>2. ¿Qué es JavaScript?</h3>
			<p className='mb-4'>
				JavaScript es un lenguaje de programación de alto nivel, interpretado y
				orientado a objetos que se ejecuta directamente en el navegador del
				usuario (lo que se conoce como "lado del cliente"). Esto significa que
				no necesitamos compilar nuestro código antes de que se ejecute.
			</p>
			<p className='mb-4'>¿Qué podemos hacer con él?</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>Validar formularios antes de enviarlos.</li>
				<li>Crear animaciones y efectos visuales.</li>
				<li>
					Cargar nuevo contenido en la página sin tener que recargarla (AJAX).
				</li>
				<li>Construir juegos, calculadoras, y aplicaciones web complejas.</li>
				<li>Manipular el HTML y el CSS de la página en tiempo real.</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Nuestro Entorno de Desarrollo: La Consola del Navegador
			</h3>
			<p className='mb-4'>
				La buena noticia es que no necesitas instalar nada nuevo para empezar
				con JavaScript. Tu propio navegador web (Chrome, Firefox, etc.) tiene un
				potente conjunto de herramientas para desarrolladores, y la más
				importante para nosotros ahora es la <strong>Consola</strong>.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>Abre tu navegador.</li>
				<li>
					Haz clic derecho en cualquier parte de la página y selecciona
					"Inspeccionar" (o "Inspect").
				</li>
				<li>
					En el panel que se abre, busca y haz clic en la pestaña "Consola" (o
					"Console").
				</li>
			</ol>
			<p className='mb-4'>
				La consola es un entorno interactivo donde puedes escribir y ejecutar
				código JavaScript directamente. ¡Pruébalo! Escribe lo siguiente y
				presiona Enter:
			</p>
			<CodeBlock
				language='javascript'
				codeString={`console.log("¡Hola, Mundo desde la Consola!");

2 + 2; // La consola te mostrará el resultado: 4`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Cómo Conectar JavaScript a tu HTML
			</h3>
			<p className='mb-4'>
				Hay dos formas de incluir JavaScript en un archivo HTML, pero una es
				mucho mejor que la otra.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Método 1: Script Interno (Menos Recomendado)
			</h4>
			<p className='mb-4'>
				Puedes escribir tu código JS directamente dentro de una etiqueta{" "}
				<code>&lt;script&gt;</code> en tu HTML.
			</p>
			<CodeBlock
				language='html'
				codeString={`<body>
  <h1>Mi Página</h1>

  <script>
    console.log("Este código está dentro del HTML.");
  </script>
</body>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Método 2: Script Externo (Práctica Recomendada)
			</h4>
			<p className='mb-4'>
				Esta es la forma profesional y organizada. Creamos un archivo separado
				con la extensión <code>.js</code> (por ejemplo, <code>script.js</code>)
				y lo enlazamos desde nuestro HTML.
			</p>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					¿Por qué es mejor un archivo externo?
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Mantiene la separación de responsabilidades (HTML para estructura, JS
					para comportamiento), hace el código más reutilizable y permite que el
					navegador almacene el archivo en caché, mejorando la velocidad de
					carga.
				</p>
			</div>

			<p className='mb-4'>
				Primero, crea un archivo <code>script.js</code> en la misma carpeta que
				tu <code>index.html</code>:
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Dentro de script.js
console.log("¡Hola desde un archivo externo!");`}
			/>

			<p className='mt-4'>
				Luego, enlaza ese archivo en tu HTML usando la etiqueta{" "}
				<code>&lt;script&gt;</code> con el atributo <code>src</code>. La
				convención es colocar esta etiqueta justo antes del cierre de la
				etiqueta <code>&lt;/body&gt;</code>.
			</p>
			<CodeBlock
				language='html'
				codeString={`<body>
  <!-- Todo el contenido de tu página va aquí -->
  <h1>Mi Título</h1>
  <p>Un párrafo de ejemplo.</p>

  <script src="script.js"></script>
</body>`}
			/>
			<p className='mt-4'>
				<strong>¿Por qué al final del `body`?</strong> Porque el navegador
				procesa el HTML de arriba hacia abajo. Si ponemos el script en el{" "}
				<code>&lt;head&gt;</code>, el navegador se detendrá para descargar y
				ejecutar el JavaScript antes de haber mostrado el contenido de la
				página, lo que puede hacer que la página parezca lenta. Al ponerlo al
				final, nos aseguramos de que todo el contenido visible se cargue
				primero.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				5. Sintaxis Básica: Comentarios y Sentencias
			</h3>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Sentencias (Statements):</strong> Son las instrucciones que le
					damos al programa. Cada sentencia generalmente termina con un punto y
					coma (<code>;</code>). Aunque en JavaScript moderno es a menudo
					opcional, es una buena práctica incluirlo para evitar errores
					inesperados.
				</li>
				<li>
					<strong>Comentarios:</strong> Son notas que dejamos en el código para
					nosotros mismos u otros desarrolladores. El intérprete de JavaScript
					los ignora por completo.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`// Este es un comentario de una sola línea.

/*
  Este es un comentario
  de múltiples líneas.
  Es útil para explicaciones más largas.
*/

let miVariable = "Hola"; // Esto es una sentencia.`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Tu Primer Script
			</h3>
			<p className='mb-4'>¡Es hora de poner en práctica la teoría!</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Crea un nuevo archivo en tu proyecto llamado{" "}
					<code>practica-js.html</code>.
				</li>
				<li>
					Dentro de este archivo, genera la estructura HTML básica con Emmet (
					<code>!</code>).
				</li>
				<li>
					Crea un nuevo archivo llamado <code>main.js</code> en la misma
					carpeta.
				</li>
				<li>
					En <code>main.js</code>, escribe dos líneas de código:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Una que use <code>console.log()</code> para imprimir un saludo en
							la consola.
						</li>
						<li>
							Otra que use <code>alert()</code> para mostrar un mensaje
							emergente en el navegador. Por ejemplo:{" "}
							<code>alert("¡Mi primer script está funcionando!");</code>.
						</li>
					</ul>
				</li>
				<li>
					En <code>practica-js.html</code>, añade un <code>&lt;h1&gt;</code> con
					un título y, justo antes de cerrar la etiqueta{" "}
					<code>&lt;/body&gt;</code>, enlaza tu archivo <code>main.js</code>{" "}
					usando la etiqueta <code>&lt;script&gt;</code>.
				</li>
				<li>
					Abre <code>practica-js.html</code> con Live Server. Deberías ver la
					ventana emergente del <code>alert</code> y, si abres la consola, verás
					tu mensaje de <code>console.log</code>.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture19Es;
