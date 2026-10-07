import {
	ArrowLeftRight,
	Brush,
	Code2,
	Download,
	FileWarning,
	Globe,
	History,
	LayoutTemplate,
	Monitor,
	Server,
	Sparkles,
	Wrench,
	Zap,
} from "lucide-react";
import {
	Callout,
	ConceptCard,
	Figure,
	Step,
} from "@/components/lecture/lecture-blocks";
import CodeBlock from "@/components/ui/code-block";

const Code = ({ children }: { children: React.ReactNode }) => (
	<code className="rounded-md bg-gray-200 px-1.5 py-1 font-mono text-sm text-pink-600 dark:bg-gray-700 dark:text-pink-400">
		{children}
	</code>
);

const clientServerImg =
	typeof globalThis !== "undefined" &&
	(
		globalThis as {
			process?: { env?: { NODE_ENV?: string } };
		}
	).process?.env?.NODE_ENV === "production"
		? "https://1rqzd6uwpqe1a157.public.blob.vercel-storage.com/conf1/cliente-servidor.webp"
		: "/conf1/cliente-servidor.webp";

const Lecture1Es = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Empezamos desde cero
			</p>
			<h3 className="text-2xl font-semibold mb-3">
				1. Bienvenida al mundo del diseño y desarrollo web
			</h3>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
				¡Hola y bienvenidos a este curso! Les doy la más cordial bienvenida a
				este maravilloso mundo del diseño y el desarrollo web. Este curso está
				diseñado para empezar desde cero, así que no se preocupen si nunca han
				tenido contacto con la programación o el código.
			</p>

			<div className="grid gap-4 md:grid-cols-3">
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="HTML · Estructura"
					iconClassName="bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-300"
				>
					<strong>HTML (HyperText Markup Language)</strong> es la base y la
					estructura de la casa. Define párrafos, imágenes y enlaces.
				</ConceptCard>
				<ConceptCard
					icon={<Brush className="h-5 w-5" aria-hidden />}
					title="CSS · Decoración"
					iconClassName="bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-300"
				>
					<strong>CSS (Cascading Style Sheets)</strong> es la pintura, las
					alfombras y el papel tapiz. Describe la presentación para que todo se
					vea bien.
				</ConceptCard>
				<ConceptCard
					icon={<Zap className="h-5 w-5" aria-hidden />}
					title="JavaScript · Interactividad"
					iconClassName="bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300"
				>
					<strong>JavaScript</strong> añade dinamismo e interactividad, como
					cambiar de un tema claro a uno oscuro.
				</ConceptCard>
			</div>

			<Callout variant="info" title="Solo necesitas el navegador y un editor">
				En conjunto, HTML, CSS y JavaScript son las tecnologías fundamentales
				que cualquier navegador web entiende de forma nativa, por lo que no
				necesitan instalar nada más que las herramientas que veremos a
				continuación.
			</Callout>
		</section>

		<section>
			<h3 className="text-2xl font-semibold mb-3">
				2. ¿Qué es HTML y su historia?
			</h3>
			<div className="grid gap-6 md:grid-cols-[1fr_200px] md:items-start">
				<div>
					<p className="mb-4">
						HTML significa Lenguaje de Marcas de Hipertexto (HyperText Markup
						Language).
					</p>
					<div className="grid gap-4 sm:grid-cols-2">
						<ConceptCard
							icon={<ArrowLeftRight className="h-5 w-5" aria-hidden />}
							title="Hipertexto"
							iconClassName="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
						>
							Los enlaces que conectan las páginas web entre sí, permitiéndonos
							navegar por la red.
						</ConceptCard>
						<ConceptCard
							icon={<Code2 className="h-5 w-5" aria-hidden />}
							title="Marcado"
							iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
						>
							Usamos “marcas” o “etiquetas” (
							<span className="italic">tags</span>) para decirle al navegador
							“esto es un encabezado” o “esto es un párrafo”. HTML no es
							programación: define el contenido.
						</ConceptCard>
					</div>
				</div>
				<figure className="mx-auto w-40 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800/60">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						aria-label="Logo de HTML5"
						className="h-auto w-full"
					>
						<path fill="#E34F26" d="M71 460L30 0h451l-41 460-195 52z"></path>
						<path fill="#EF652A" d="M256 472l159-44L454 41H256z"></path>
						<path
							fill="#EBEBEB"
							d="M256 208h-75l-5-58h80V94H94l13 150h149v-58zm0 184l-84-23-6-60h-56l11 127 135 37v-57z"
						></path>
						<path
							fill="#FFF"
							d="M256 208v58h70l-7 74-84 23v57l135-37 14-159h-56l-6 60H256zm86-114l-5 56h80l4-42h-79z"
						></path>
					</svg>
					<figcaption className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
						HTML5 · lenguaje de marcado
					</figcaption>
				</figure>
			</div>

			<div className="mt-4 grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<History className="h-5 w-5" aria-hidden />}
					title="1994 · Nace CSS"
					iconClassName="bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300"
				>
					HTML empezó a cargar con demasiado diseño. La separación contenido
					(HTML) / presentación (CSS) se volvió una necesidad. CSS fue propuesto
					por Håkon Wium Lie el 10 de octubre de 1994 en el CERN junto a Tim
					Berners-Lee.
				</ConceptCard>
				<ConceptCard
					icon={<Globe className="h-5 w-5" aria-hidden />}
					title="W3C · Estándares"
					iconClassName="bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
				>
					La especificación de HTML es mantenida por el World Wide Web
					Consortium (W3C), el organismo que define los estándares de la web.
				</ConceptCard>
			</div>

			<h4 className="text-xl font-semibold mt-6 mb-2">
				Ejemplo de código HTML:
			</h4>
			<CodeBlock
				language="html"
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
			<h3 className="text-2xl font-semibold mb-3">
				3. Configuración del entorno de desarrollo: Visual Studio Code
			</h3>
			<p className="mb-4">
				Para empezar, solo necesitamos dos herramientas de software:
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Globe className="h-5 w-5" aria-hidden />}
					title="1 · Un navegador web"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					Recomiendo Google Chrome o Mozilla Firefox: ambos incluyen excelentes
					herramientas para desarrolladores que nos serán muy útiles.
				</ConceptCard>
				<ConceptCard
					icon={<Code2 className="h-5 w-5" aria-hidden />}
					title="2 · Un editor de código"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Aquí escribiremos nuestro código. Usaremos Visual Studio Code (VS
					Code): gratuito, de Microsoft, disponible para Windows, Mac y Linux.
				</ConceptCard>
			</div>

			<div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800/60">
				<a
					href="https://code.visualstudio.com/download"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
				>
					Descargar Visual Studio Code
					<Download className="h-5 w-5 ml-2" aria-hidden />
				</a>
				<p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
					Gratis · Windows, Mac y Linux
				</p>
			</div>

			<p className="my-4">
				Para organizar nuestro proyecto, es fundamental crear una carpeta en
				nuestra computadora donde guardaremos todos los archivos. Una vez
				creada, la abriremos en VS Code.
			</p>
			<Callout variant="info" title="Práctica recomendada:">
				Siempre abran la carpeta completa del proyecto en VS Code, no archivos
				individuales. Esto ayuda a mantener todo organizado y a que el editor
				entienda la estructura de nuestro proyecto.
			</Callout>
			<p className="mt-4">
				Dentro de VS Code, crearemos nuestro primer archivo, al que llamaremos{" "}
				<Code>index.html</Code>. Este es el nombre estándar para la página
				principal de un sitio web.
			</p>
		</section>

		<section>
			<h3 className="text-2xl font-semibold mb-3">
				4. Uso de Emmet para escritura ágil de código
			</h3>
			<p className="mb-4">
				Visual Studio Code integra una herramienta extremadamente útil llamada
				Emmet, que nos permite escribir código HTML y CSS de manera muy rápida
				usando atajos. Por ejemplo, para crear la estructura básica de un
				documento HTML, en lugar de escribir todo manualmente, simplemente
				escribimos un signo de exclamación (<Code>!</Code>) y presionamos la
				tecla Enter o Tab.
			</p>
			<Callout variant="tip" title="Probalo en 2 segundos">
				Creá un archivo <Code>index.html</Code> vacío, escribí <Code>!</Code> y
				apretá <Code>Enter</Code>. Emmet genera todo el esqueleto por vos.
			</Callout>
			<CodeBlock
				language="html"
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
			<h3 className="text-2xl font-semibold mb-3">
				5. Organización del código: sangría y el plugin Prettier
			</h3>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="Sangría = jerarquía"
				>
					Un código bien organizado es más fácil de leer y mantener. La sangría
					(o indentación) muestra la anidación. La convención más común: dos
					espacios por nivel.
				</ConceptCard>
				<ConceptCard
					icon={<Sparkles className="h-5 w-5" aria-hidden />}
					title="Prettier lo hace por vos"
					iconClassName="bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300"
				>
					Instalá la extensión <strong>Prettier</strong> en VS Code. Formatea
					automáticamente el código cada vez que guardás el archivo.
				</ConceptCard>
			</div>
			<p className="mt-4">
				Puedes configurar Prettier para que se ejecute al guardar con esta
				configuración en el archivo <Code>settings.json</Code> de VS Code:
			</p>
			<CodeBlock
				language="json"
				codeString={`{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.singleQuote": true,
  "prettier.tabWidth": 2
}`}
			/>
		</section>

		<section>
			<h3 className="text-2xl font-semibold mb-3">
				6. Servidores Web y la extensión Live Server
			</h3>
			<div className="grid gap-4 sm:grid-cols-2">
				<div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/60">
					<p className="flex items-center gap-2 font-semibold text-gray-700 dark:text-gray-200">
						<FileWarning className="h-5 w-5 text-gray-400" aria-hidden />
						Abrir con <Code>file:///...</Code>
					</p>
					<p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
						Cuando abres un archivo HTML directamente desde tu disco, el
						navegador lo trata como un archivo local aislado. No simula un sitio
						real en internet.
					</p>
				</div>
				<div className="rounded-2xl border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-950/30">
					<p className="flex items-center gap-2 font-semibold text-green-800 dark:text-green-200">
						<Server className="h-5 w-5" aria-hidden />
						Servir con <Code>http://127.0.0.1:5500</Code>
					</p>
					<p className="mt-2 text-sm text-green-900/80 dark:text-green-100/80">
						Un <strong>servidor web</strong> espera peticiones del navegador,
						encuentra los archivos y los devuelve como respuesta HTTP para
						renderizar la página.
					</p>
				</div>
			</div>

			<Callout variant="success" title="Live Server te ahorra horas">
				La extensión <strong>Live Server</strong> crea ese servidor local por
				ti, abre tu página en una dirección local y recarga automáticamente el
				navegador cada vez que guardás un cambio.
			</Callout>

			<div className="mt-10 border-t-2 border-blue-500/30 pt-8">
				<h4 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">
					Análisis Profundo: El Ciclo Petición-Respuesta HTTP
				</h4>
				<p className="mb-6 text-gray-600 dark:text-gray-400">
					Esta visión general desglosa la estructura de una Petición y Respuesta
					HTTP, ofreciendo una vista detallada de los componentes internos en
					una configuración de servidor típica.
				</p>

				<Figure
					src={clientServerImg}
					alt="Arquitectura Cliente-Servidor"
					caption="Figura 1 · El navegador (cliente) pide y el servidor responde. Todo viaje web sigue este ciclo."
				/>

				<div className="mb-6 grid gap-3 sm:grid-cols-4">
					<div className="flex items-center gap-2 rounded-xl bg-blue-50 p-3 text-sm font-medium text-blue-800 dark:bg-blue-950/40 dark:text-blue-200">
						<Monitor className="h-4 w-4 shrink-0" aria-hidden /> 1 · Cliente
						pide
					</div>
					<div className="flex items-center gap-2 rounded-xl bg-green-50 p-3 text-sm font-medium text-green-800 dark:bg-green-950/40 dark:text-green-200">
						<Server className="h-4 w-4 shrink-0" aria-hidden /> 2 · Servidor
						procesa
					</div>
					<div className="flex items-center gap-2 rounded-xl bg-purple-50 p-3 text-sm font-medium text-purple-800 dark:bg-purple-950/40 dark:text-purple-200">
						<Wrench className="h-4 w-4 shrink-0" aria-hidden /> 3 · Servidor
						responde
					</div>
					<div className="flex items-center gap-2 rounded-xl bg-yellow-50 p-3 text-sm font-medium text-yellow-800 dark:bg-yellow-950/40 dark:text-yellow-200">
						<Zap className="h-4 w-4 shrink-0" aria-hidden /> 4 · Cliente
						renderiza
					</div>
				</div>

				<div className="space-y-8">
					<div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
						<h5 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
							1. Petición HTTP (Desde el Cliente)
						</h5>
						<p className="mb-4 text-sm leading-relaxed">
							Cuando un cliente (navegador, app móvil, etc.) necesita
							interactuar con un servidor, construye una Petición HTTP: un
							mensaje de texto formateado para pedir una acción o un recurso.
						</p>
						<div className="grid gap-4 md:grid-cols-3">
							<div className="rounded-xl border-l-4 border-blue-500 bg-white p-4 dark:bg-gray-900">
								<h6 className="font-bold">Línea de inicio</h6>
								<p className="mt-1 text-sm">Método + recurso + versión.</p>
								<div className="mt-2 flex flex-wrap gap-1.5">
									{["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"].map(
										(m) => (
											<Code key={m}>{m}</Code>
										),
									)}
								</div>
								<p className="mt-2 text-xs text-gray-500">
									Ej: <Code>/usuarios/perfil</Code> · <Code>HTTP/1.1</Code>
								</p>
							</div>
							<div className="rounded-xl border-l-4 border-blue-500 bg-white p-4 dark:bg-gray-900">
								<h6 className="font-bold">Cabeceras</h6>
								<p className="mt-1 text-sm">Metadatos clave-valor.</p>
								<ul className="mt-2 space-y-1.5 text-xs">
									<li>
										<Code>Host: www.ejemplo.com</Code>
									</li>
									<li>
										<Code>User-Agent: Mozilla/5.0...</Code>
									</li>
									<li>
										<Code>Accept: text/html</Code>
									</li>
									<li>
										<Code>Authorization: Bearer &lt;token&gt;</Code>
									</li>
								</ul>
							</div>
							<div className="rounded-xl border-l-4 border-blue-500 bg-white p-4 dark:bg-gray-900">
								<h6 className="font-bold">Cuerpo</h6>
								<p className="mt-1 text-sm">
									Datos con <Code>POST</Code>, <Code>PUT</Code>,{" "}
									<Code>PATCH</Code>: formularios, JSON, archivos.
								</p>
							</div>
						</div>
					</div>

					<div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
						<h5 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
							2. Operación Interna del Servidor
						</h5>
						<div className="grid gap-4 md:grid-cols-3">
							<div className="rounded-xl border-l-4 border-green-500 bg-white p-4 dark:bg-gray-900">
								<h6 className="font-bold">Servidor Web</h6>
								<p className="mt-1 text-sm">
									Nginx, Apache. Es el primer punto de contacto. Analiza la
									petición, sirve los archivos estáticos (HTML, CSS, imágenes)
									directamente, y redirige las solicitudes dinámicas al servidor
									de aplicaciones.
								</p>
							</div>
							<div className="rounded-xl border-l-4 border-green-500 bg-white p-4 dark:bg-gray-900">
								<h6 className="font-bold">Servidor de Aplicaciones</h6>
								<p className="mt-1 text-sm">
									Node.js, Python, Java. Aquí reside la lógica de negocio.
									Procesa los datos de la solicitud, interactúa con la base de
									datos y genera el contenido dinámico de la respuesta (HTML,
									JSON, etc.).
								</p>
							</div>
							<div className="rounded-xl border-l-4 border-green-500 bg-white p-4 dark:bg-gray-900">
								<h6 className="font-bold">Base de Datos</h6>
								<p className="mt-1 text-sm">
									PostgreSQL, MongoDB. Almacena y gestiona los datos de la
									aplicación. Ejecuta las consultas enviadas por el servidor de
									aplicaciones y devuelve los resultados.
								</p>
							</div>
						</div>
					</div>

					<div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
						<h5 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
							3. Respuesta HTTP (Desde el Servidor)
						</h5>
						<div className="grid gap-4 md:grid-cols-3">
							<div className="rounded-xl border-l-4 border-purple-500 bg-white p-4 dark:bg-gray-900">
								<h6 className="font-bold">Línea de inicio</h6>
								<ul className="mt-2 space-y-1.5 text-xs">
									<li>
										<Code>HTTP/1.1</Code>
									</li>
									<li>
										<Code>2xx Éxito</Code> — 200 OK, 201 Created
									</li>
									<li>
										<Code>3xx Redirección</Code> — 301 Moved Permanently
									</li>
									<li>
										<Code>4xx Error cliente</Code> — 404, 401
									</li>
									<li>
										<Code>5xx Error servidor</Code> — 500 Internal Error
									</li>
								</ul>
							</div>
							<div className="rounded-xl border-l-4 border-purple-500 bg-white p-4 dark:bg-gray-900">
								<h6 className="font-bold">Cabeceras</h6>
								<ul className="mt-2 space-y-1.5 text-xs">
									<li>
										<Code>Content-Type: text/html</Code>
									</li>
									<li>
										<Code>Content-Length: 1024</Code>
									</li>
									<li>
										<Code>Set-Cookie: ...</Code>
									</li>
								</ul>
							</div>
							<div className="rounded-xl border-l-4 border-purple-500 bg-white p-4 dark:bg-gray-900">
								<h6 className="font-bold">Cuerpo</h6>
								<p className="mt-1 text-sm">
									HTML, JSON, imagen, etc. El contenido real para el cliente.
								</p>
							</div>
						</div>
					</div>

					<div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
						<h5 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
							4. Procesamiento en el Cliente
						</h5>
						<ul className="grid gap-3 text-sm md:grid-cols-3">
							<li className="rounded-xl bg-white p-3 dark:bg-gray-900">
								<strong>Verifica el estado:</strong> ¿éxito, redirección o
								fallo?
							</li>
							<li className="rounded-xl bg-white p-3 dark:bg-gray-900">
								<strong>Lee cabeceras:</strong> cómo interpretar el cuerpo y
								cookies.
							</li>
							<li className="rounded-xl bg-white p-3 dark:bg-gray-900">
								<strong>Renderiza:</strong> HTML → página (+ CSS/JS); JSON →
								datos de la app.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section>
			<h3 className="text-2xl font-semibold mb-3">
				7. Conceptos básicos: separación de formato y contenido
			</h3>
			<p className="mb-4">
				El principio fundamental del desarrollo web moderno es la separación de
				responsabilidades (o "separation of concerns" en inglés): el contenido y
				la estructura deben estar separados de su presentación visual.
			</p>
			<div className="grid gap-4 sm:grid-cols-3">
				<div className="rounded-2xl border-t-4 border-orange-500 bg-white p-4 shadow-sm dark:bg-gray-800/60 dark:border-orange-400">
					<p className="font-bold">HTML</p>
					<p className="text-sm text-gray-600 dark:text-gray-300">
						Contenido y estructura semántica (<Code>index.html</Code>).
					</p>
				</div>
				<div className="rounded-2xl border-t-4 border-blue-500 bg-white p-4 shadow-sm dark:bg-gray-800/60 dark:border-blue-400">
					<p className="font-bold">CSS</p>
					<p className="text-sm text-gray-600 dark:text-gray-300">
						Presentación y diseño visual (<Code>style.css</Code>).
					</p>
				</div>
				<div className="rounded-2xl border-t-4 border-yellow-500 bg-white p-4 shadow-sm dark:bg-gray-800/60 dark:border-yellow-400">
					<p className="font-bold">JavaScript</p>
					<p className="text-sm text-gray-600 dark:text-gray-300">
						Interactividad dinámica (<Code>script.js</Code>).
					</p>
				</div>
			</div>
			<div className="mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 font-mono text-sm max-w-sm">
				<div className="flex items-center">
					<span role="img" aria-label="Folder icon">
						📁
					</span>{" "}
					<span className="ml-2 font-bold">mi-proyecto/</span>
				</div>
				<div className="pl-6 border-l-2 border-gray-300 dark:border-gray-600 ml-2">
					<div className="flex items-center mt-2">
						<span className="text-orange-500">📄</span>{" "}
						<span className="ml-2">index.html</span>
					</div>
					<div className="flex items-center mt-2">
						<span className="text-blue-500">🎨</span>{" "}
						<span className="ml-2">style.css</span>
					</div>
					<div className="flex items-center mt-2">
						<span className="text-yellow-500">📜</span>{" "}
						<span className="ml-2">script.js</span>
					</div>
				</div>
			</div>
			<Callout variant="success" title="Un HTML, muchas apariencias">
				Gracias a esto, un mismo documento HTML puede verse distinto en
				pantalla, en impresión o en un lector de pantalla para personas con
				discapacidad visual.
			</Callout>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2">
				📝 Tarea: Tu Primera Página Web
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Ahora que tienes las herramientas, ¡es hora de construir! El objetivo es
				familiarizarte con el entorno y crear tu primera página HTML.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Instala las Herramientas">
					Asegúrate de tener Visual Studio Code instalado en tu computadora.
				</Step>
				<Step number={2} title="Instala las Extensiones">
					En el panel de extensiones buscá e instalá "Live Server" y "Prettier -
					Code formatter".
				</Step>
				<Step number={3} title="Crea tu Proyecto">
					Crea una carpeta <Code>mi-primera-web</Code> en tu escritorio y abrila
					con VS Code.
				</Step>
				<Step number={4} title="Crea el Archivo">
					Crea <Code>index.html</Code> dentro de VS Code.
				</Step>
				<Step number={5} title="Escribe el Código">
					Escribí <Code>!</Code> y apretá Enter para generar la base con Emmet.
				</Step>
				<Step number={6} title="Añade Contenido">
					Dentro de <Code>&lt;body&gt;</Code> añadí un <Code>&lt;h1&gt;</Code>{" "}
					“Hola, Mundo!” y un <Code>&lt;p&gt;</Code> con tu presentación.
				</Step>
				<Step number={7} title="Lánzalo al Mundo (Local)">
					Clic derecho en <Code>index.html</Code> → "Open with Live Server".
				</Step>
			</ol>
			<Callout variant="success" title="¡Felicidades!">
				Acabas de crear y servir tu primera página web. Cambiá el texto, guardá
				y mirá cómo Live Server actualiza el navegador al instante.
			</Callout>
		</section>
	</div>
);

export default Lecture1Es;
