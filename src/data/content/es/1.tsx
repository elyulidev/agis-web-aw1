import CodeBlock from "@/components/ui/code-block";

const Lecture1Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Bienvenida al mundo del diseño y desarrollo web
			</h3>
			<p className='mb-4'>
				¡Hola y bienvenidos a este curso! Les doy la más cordial bienvenida a
				este maravilloso mundo del diseño y el desarrollo web. Este curso está
				diseñado para empezar desde cero, así que no se preocupen si nunca han
				tenido contacto con la programación o el código.
			</p>
			<p className='mb-4'>
				Para entender la base de lo que haremos, pensemos en la construcción de
				una casa. <strong>HTML (HyperText Markup Language)</strong> es la base y
				la estructura de esa casa. Define el significado y la estructura del
				contenido web, como los párrafos, las imágenes y los enlaces. Por otro
				lado, <strong>CSS (Cascading Style Sheets)</strong> es la decoración: la
				pintura, las alfombras, el papel tapiz. Es el lenguaje de estilos que
				usamos para describir la presentación de los documentos, haciendo que se
				vean bien. Finalmente, <strong>JavaScript</strong> es el lenguaje de
				programación que añade dinamismo e interactividad, como cambiar de un
				tema claro a uno oscuro.
			</p>
			<p>
				En conjunto, HTML, CSS y JavaScript son las tecnologías fundamentales
				que cualquier navegador web entiende de forma nativa, por lo que no
				necesitan instalar nada más que las herramientas que veremos a
				continuación.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. ¿Qué es HTML y su historia?
			</h3>
			<div className='float-right ml-6 mb-4 w-24 h-24'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 512 512'
					aria-label='Logo de HTML5'
				>
					<path fill='#E34F26' d='M71 460L30 0h451l-41 460-195 52z'></path>
					<path fill='#EF652A' d='M256 472l159-44L454 41H256z'></path>
					<path
						fill='#EBEBEB'
						d='M256 208h-75l-5-58h80V94H94l13 150h149v-58zm0 184l-84-23-6-60h-56l11 127 135 37v-57z'
					></path>
					<path
						fill='#FFF'
						d='M256 208v58h70l-7 74-84 23v57l135-37 14-159h-56l-6 60H256zm86-114l-5 56h80l4-42h-79z'
					></path>
				</svg>
			</div>
			<p className='mb-4'>
				HTML significa Lenguaje de Marcas de Hipertexto (HyperText Markup
				Language).
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Hipertexto</strong> se refiere a los enlaces que conectan las
					páginas web entre sí, permitiéndonos navegar por la red.
				</li>
				<li>
					<strong>Marcado</strong> se refiere a que usamos "marcas" o
					"etiquetas" (en inglés, <span className='italic'>tags</span>) para
					estructurar el contenido. Por ejemplo, le decimos al navegador "esto
					es un encabezado" o "esto es un párrafo". Es importante destacar que
					HTML no es un lenguaje de programación, sino un lenguaje de marcado
					que define el contenido.
				</li>
			</ul>
			<p className='mb-4'>
				La historia de la web está ligada a HTML. Las hojas de estilo como CSS
				se desarrollaron para proveer estilos a la web, ya que HTML comenzó a
				incluir demasiadas capacidades de diseño, volviéndose más complejo. La
				separación del contenido (HTML) y la presentación (CSS) se convirtió en
				una necesidad. CSS fue propuesto por primera vez por Håkon Wium Lie el
				10 de octubre de 1994, mientras trabajaba en el CERN con Tim
				Berners-Lee, el creador de la web.
			</p>
			<p className='mb-4'>
				La especificación de HTML es mantenida por el World Wide Web Consortium
				(W3C), el organismo que se encarga de definir los estándares de la web.
			</p>
			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Ejemplo de código HTML:
			</h4>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html>
<head>
  <title>Mi Primera Página</title>
</head>
<body>
  <h1>Hola, Mundo!</h1>
  <p>Este es un párrafo en mi página web.</p>
</body>
</html>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Configuración del entorno de desarrollo: Visual Studio Code
			</h3>
			<p className='mb-4'>
				Para empezar, solo necesitamos dos herramientas de software:
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Un navegador web:</strong> Recomiendo usar Google Chrome o
					Mozilla Firefox, ya que ambos incluyen excelentes herramientas para
					desarrolladores que nos serán muy útiles.
				</li>
				<li>
					<strong>Un editor de código:</strong> Este es el programa donde
					escribiremos nuestro código. Aunque hay muchas opciones como Sublime
					Text o Atom, la herramienta que usaremos en este curso es Visual
					Studio Code (VS Code). Es gratuito, desarrollado por Microsoft y está
					disponible para Windows, Mac y Linux.
				</li>
			</ol>
			<a
				href='https://code.visualstudio.com/download'
				target='_blank'
				rel='noopener noreferrer'
				className='inline-flex items-center justify-center px-6 py-3 my-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
			>
				Descargar Visual Studio Code
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5 ml-2'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
					/>
				</svg>
			</a>
			<p className='my-4'>
				Para organizar nuestro proyecto, es fundamental crear una carpeta en
				nuestra computadora donde guardaremos todos los archivos. Una vez
				creada, la abriremos en VS Code.
			</p>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					Práctica recomendada:
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Siempre abran la carpeta completa del proyecto en VS Code, no archivos
					individuales. Esto ayuda a mantener todo organizado y a que el editor
					entienda la estructura de nuestro proyecto.
				</p>
			</div>
			<p className='mt-4'>
				Dentro de VS Code, crearemos nuestro primer archivo, al que llamaremos{" "}
				<code>index.html</code>. Este es el nombre estándar para la página
				principal de un sitio web.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Uso de Emmet para escritura ágil de código
			</h3>
			<p className='mb-4'>
				Visual Studio Code integra una herramienta extremadamente útil llamada
				Emmet, que nos permite escribir código HTML y CSS de manera muy rápida
				usando atajos. Por ejemplo, para crear la estructura básica de un
				documento HTML, en lugar de escribir todo manualmente, simplemente
				escribimos un signo de exclamación (<code>!</code>) y presionamos la
				tecla Enter o Tab.
			</p>
			<p>
				Inmediatamente, Emmet generará todo el esqueleto necesario para empezar
				a trabajar:
			</p>
			<CodeBlock
				language='html'
				codeString={`<!-- Si escribes "!" y presionas Enter... -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				5. Organización del código: sangría y el plugin Prettier
			</h3>
			<p className='mb-4'>
				Un código bien organizado es más fácil de leer y mantener. La sangría (o
				indentación) es crucial para visualizar la jerarquía y anidación de los
				elementos HTML. La convención más común es usar dos espacios para cada
				nivel de anidación.
			</p>
			<p className='mb-4'>
				Para mantener nuestro código formateado de manera consistente y
				automática, recomiendo instalar la extensión <strong>Prettier</strong>{" "}
				en VS Code. Este plugin formatea automáticamente el código cada vez que
				guardamos el archivo.
			</p>
			<p>
				Puedes configurar Prettier para que se ejecute al guardar con esta
				configuración en el archivo <code>settings.json</code> de VS Code:
			</p>
			<CodeBlock
				language='json'
				codeString={`{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.singleQuote": true,
  "prettier.tabWidth": 2
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				6. Servidores Web y funcionamiento de la extensión Live Server
			</h3>
			<p className='mb-4'>
				Cuando abres un archivo HTML directamente en tu navegador desde tu disco
				duro (usando una URL <code>file:///...</code>), el navegador lo trata
				como un archivo local aislado. Esto no simula cómo funcionará un sitio
				web real en internet, donde los archivos son "servidos" por un servidor
				web.
			</p>
			<p className='mb-4'>
				Un <strong>servidor web</strong> es un software que espera peticiones de
				los navegadores (clientes). Cuando un usuario quiere ver una página, su
				navegador envía una petición HTTP al servidor. El servidor encuentra los
				archivos solicitados (HTML, CSS, JavaScript, imágenes) y los envía de
				vuelta al navegador como una respuesta HTTP. El navegador entonces
				renderiza estos archivos para mostrar la página web.
			</p>
			<div className='my-6 p-4 border rounded-lg bg-gray-50 dark:bg-gray-800/50'>
				<h4 className='font-semibold text-center mb-2'>
					Ciclo de Petición-Respuesta
				</h4>
				<svg
					viewBox='0 0 400 150'
					className='w-full'
					aria-labelledby='server-title'
				>
					<title id='server-title'>
						Diagrama del funcionamiento de un servidor web
					</title>
					{/* Client */}
					<rect
						x='20'
						y='45'
						width='100'
						height='60'
						rx='5'
						fill='none'
						stroke='currentColor'
						strokeWidth='1.5'
					/>
					<text
						x='70'
						y='75'
						textAnchor='middle'
						fill='currentColor'
						className='text-sm font-sans'
					>
						Navegador
					</text>
					<text
						x='70'
						y='90'
						textAnchor='middle'
						fill='currentColor'
						className='text-sm font-sans'
					>
						(Cliente)
					</text>

					{/* Server */}
					<rect
						x='280'
						y='45'
						width='100'
						height='60'
						rx='5'
						fill='none'
						stroke='currentColor'
						strokeWidth='1.5'
					/>
					<text
						x='330'
						y='75'
						textAnchor='middle'
						fill='currentColor'
						className='text-sm font-sans'
					>
						Servidor Web
					</text>
					<text
						x='330'
						y='90'
						textAnchor='middle'
						fill='currentColor'
						className='text-sm font-sans'
					>
						(Live Server)
					</text>

					{/* Request Arrow */}
					<path
						d='M125 65 h150'
						stroke='currentColor'
						strokeWidth='1.5'
						markerEnd='url(#arrowhead)'
					/>
					<text
						x='200'
						y='58'
						textAnchor='middle'
						fill='currentColor'
						className='text-xs font-sans'
					>
						1. Petición HTTP (ej: "dame index.html")
					</text>

					{/* Response Arrow */}
					<path
						d='M275 95 h-150'
						stroke='currentColor'
						strokeWidth='1.5'
						markerStart='url(#arrowhead-rev)'
					/>
					<text
						x='200'
						y='115'
						textAnchor='middle'
						fill='currentColor'
						className='text-xs font-sans'
					>
						2. Respuesta (archivos HTML, CSS, JS)
					</text>

					<defs>
						<marker
							id='arrowhead'
							markerWidth='7'
							markerHeight='5'
							refX='7'
							refY='2.5'
							orient='auto'
						>
							<polygon points='0 0, 7 2.5, 0 5' fill='currentColor' />
						</marker>
						<marker
							id='arrowhead-rev'
							markerWidth='7'
							markerHeight='5'
							refX='0'
							refY='2.5'
							orient='auto'
						>
							<polygon points='7 0, 0 2.5, 7 5' fill='currentColor' />
						</marker>
					</defs>
				</svg>
			</div>
			<p>
				La extensión <strong>Live Server</strong> para VS Code crea este
				servidor de desarrollo local por ti. Cuando la usas, abre tu página en
				el navegador a través de una dirección local (como{" "}
				<code>http://127.0.0.1:5500</code>). Lo más importante es que vigila tus
				archivos y recarga automáticamente el navegador cada vez que guardas un
				cambio, agilizando enormemente el desarrollo.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				7. Conceptos básicos: separación de formato y contenido
			</h3>
			<p className='mb-4'>
				El principio fundamental del desarrollo web moderno es la separación de
				responsabilidades (o "separation of concerns" en inglés). Esto significa
				que el contenido y la estructura de un documento deben estar separados
				de su presentación visual.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4'>
				<li>
					<strong>HTML</strong> se encarga exclusivamente del contenido y la
					estructura semántica (<code>index.html</code>).
				</li>
				<li>
					<strong>CSS</strong> se encarga de la presentación, el formato y el
					diseño visual (<code>style.css</code>).
				</li>
				<li>
					<strong>JavaScript</strong> se encarga de la interactividad y el
					comportamiento dinámico (<code>script.js</code>).
				</li>
			</ul>
			<p className='mt-4 mb-4'>
				Esta separación mejora la accesibilidad, ofrece mayor flexibilidad y
				control sobre el diseño, y simplifica el mantenimiento del proyecto. Una
				representación visual de esta estructura de archivos sería:
			</p>
			<div className='bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm max-w-sm'>
				<div className='flex items-center'>
					<span role='img' aria-label='Folder icon'>
						📁
					</span>{" "}
					<span className='ml-2 font-bold'>mi-proyecto/</span>
				</div>
				<div className='pl-6 border-l-2 border-gray-300 dark:border-gray-600 ml-2'>
					<div className='flex items-center mt-2'>
						<span className='text-orange-500'>📄</span>{" "}
						<span className='ml-2'>index.html</span>
					</div>
					<div className='flex items-center mt-2'>
						<span className='text-blue-500'>🎨</span>{" "}
						<span className='ml-2'>style.css</span>
					</div>
					<div className='flex items-center mt-2'>
						<span className='text-yellow-500'>📜</span>{" "}
						<span className='ml-2'>script.js</span>
					</div>
				</div>
			</div>
			<p className='mt-4'>
				Gracias a esto, un mismo documento HTML puede tener diferentes
				apariencias para distintos medios, como una pantalla, una versión para
				imprimir o un lector de pantalla para personas con discapacidad visual.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Tu Primera Página Web
			</h3>
			<p className='mb-4'>
				Ahora que tienes las herramientas, ¡es hora de construir! El objetivo de
				esta tarea es familiarizarte con el entorno de desarrollo y crear tu
				primera página HTML.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Instala las Herramientas:</strong> Asegúrate de tener Visual
					Studio Code instalado en tu computadora.
				</li>
				<li>
					<strong>Instala las Extensiones:</strong> Dentro de VS Code, ve al
					panel de extensiones (el icono de los cuadrados en la barra lateral) y
					busca e instala "Live Server" y "Prettier - Code formatter".
				</li>
				<li>
					<strong>Crea tu Proyecto:</strong> Crea una nueva carpeta en tu
					escritorio llamada <code>mi-primera-web</code> y ábrela con VS Code.
				</li>
				<li>
					<strong>Crea el Archivo:</strong> Dentro de VS Code, crea un nuevo
					archivo llamado <code>index.html</code>.
				</li>
				<li>
					<strong>Escribe el Código:</strong> En el archivo{" "}
					<code>index.html</code>, escribe <code>!</code> y presiona Enter para
					generar la estructura HTML básica con Emmet.
				</li>
				<li>
					<strong>Añade Contenido:</strong> Dentro de la etiqueta{" "}
					<code>&lt;body&gt;</code>, añade un encabezado <code>&lt;h1&gt;</code>{" "}
					que diga "¡Hola, Mundo!" y un párrafo <code>&lt;p&gt;</code> con una
					breve presentación tuya.
				</li>
				<li>
					<strong>Lánzalo al Mundo (Local):</strong> Haz clic derecho en el
					archivo <code>index.html</code> y selecciona "Open with Live Server".
					Tu navegador se abrirá mostrando tu primera página web.
				</li>
			</ol>
			<p>
				¡Felicidades! Acabas de crear y servir tu primera página web.
				Experimenta cambiando el texto y guardando los cambios para ver cómo
				Live Server actualiza el navegador al instante.
			</p>
		</section>
	</div>
);

export default Lecture1Es;
