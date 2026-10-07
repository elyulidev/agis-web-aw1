import {
	Anchor,
	Check,
	Clapperboard,
	ExternalLink,
	Eye,
	Frame,
	Image,
	Link2,
	Mail,
	MousePointerClick,
	Music,
	Phone,
	Sparkles,
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

const Lecture4Es = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Enlaces, imágenes y multimedia
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				¡Hola de nuevo! En la conferencia anterior dominamos el formato de texto
				y las listas. Hoy daremos un paso fundamental para hacer que nuestras
				páginas web cobren vida: vamos a conectar nuestro contenido con el mundo
				a través de enlaces, a darle un rostro con imágenes y a enriquecer la
				experiencia con contenido multimedia.
			</p>
			<Callout variant="info" title="De documento a experiencia">
				Estos son los elementos que transforman un simple documento en una
				experiencia web interactiva y visualmente atractiva.
			</Callout>
		</section>

		<section>
			<SectionTitle index={1}>
				Enlaces (&lt;a&gt;): Conectando la Web
			</SectionTitle>
			<p className="mb-4">
				La etiqueta <Code>&lt;a&gt;</Code> (de <i>anchor</i> o ancla) es el
				pilar del hipertexto; es lo que nos permite navegar entre páginas y
				recursos. Un enlace necesita el atributo <Code>href</Code> (hypertext
				reference) para saber a dónde debe dirigir al usuario.
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · un enlace real, hacé clic">
					<a
						href="https://developer.mozilla.org/"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1 font-medium text-blue-600 underline decoration-blue-300 underline-offset-4 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
					>
						Ir a MDN Web Docs
						<ExternalLink className="h-4 w-4" aria-hidden />
					</a>
				</Preview>
			</div>

			<Subhead>Enlaces Externos</Subhead>
			<p className="mb-4">
				Son aquellos que apuntan a otro sitio web. El valor del{" "}
				<Code>href</Code> debe ser la URL completa, incluyendo{" "}
				<Code>http://</Code> o <Code>https://</Code>.
			</p>
			<Callout variant="info" title="Práctica recomendada:">
				Para que los enlaces externos se abran en una nueva pestaña, usa el
				atributo <Code>target="_blank"</Code>. Por seguridad, acompáñalo siempre
				de <Code>rel="noopener noreferrer"</Code>.
			</Callout>
			<CodeBlock
				language="html"
				codeString={`<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
  Ir a Google
</a>`}
			/>

			<Subhead>Enlaces Internos a Otras Páginas</Subhead>
			<p className="mb-4">
				Así construimos sitios con múltiples páginas: enlaces a otros archivos
				HTML del proyecto usando rutas relativas. Imaginá esta estructura:
			</p>
			<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 font-mono text-sm max-w-sm">
				<div className="flex items-center">
					<span role="img" aria-label="Carpeta">
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
						<span className="text-orange-500">📄</span>{" "}
						<span className="ml-2">contacto.html</span>
					</div>
					<div className="flex items-center mt-2">
						<span role="img" aria-label="Carpeta">
							📁
						</span>{" "}
						<span className="ml-2">pages/</span>
					</div>
					<div className="pl-12 border-l-2 border-gray-300 dark:border-gray-600 ml-2">
						<div className="flex items-center mt-2">
							<span className="text-orange-500">📄</span>{" "}
							<span className="ml-2">acerca.html</span>
						</div>
					</div>
				</div>
			</div>
			<p className="mt-4 mb-2 font-medium">
				Desde <Code>index.html</Code>, los enlaces se verían así:
			</p>
			<CodeBlock
				language="html"
				codeString={`<!-- 1. Enlace a un archivo en la misma carpeta -->
<a href="contacto.html">Contáctanos</a>

<!-- 2. Enlace a un archivo en una subcarpeta -->
<a href="pages/acerca.html">Sobre Nosotros</a>

<!-- 3. Desde "acerca.html", para volver al inicio (subir un nivel) -->
<a href="../index.html">Volver al Inicio</a>

<!-- 4. Enlace a la raíz del sitio (útil en sitios grandes) -->
<a href="/index.html">Página Principal</a>`}
			/>

			<Subhead>Enlaces a Secciones Específicas (Anclas)</Subhead>
			<p className="mb-4">
				Podemos dirigir al usuario a una parte específica de una página. Útil
				para índices o menús en páginas largas.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Anchor className="h-5 w-5" aria-hidden />}
					title="Ancla en la misma página"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Asigná un <Code>id</Code> único al destino y usá <Code>#</Code> + el
					nombre en el <Code>href</Code>.
				</ConceptCard>
				<ConceptCard
					icon={<Link2 className="h-5 w-5" aria-hidden />}
					title="Ancla en otra página"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Combiná el enlace a la página con el ancla:{" "}
					<Code>pages/acerca.html#equipo</Code>.
				</ConceptCard>
			</div>
			<CodeBlock
				language="html"
				codeString={`<!-- El Enlace -->
<a href="#seccion-2">Ir a la Sección 2</a>

<!-- Mucho contenido aquí... -->

<!-- El Destino -->
<h2 id="seccion-2">Esta es la Sección 2</h2>
<p>Contenido de la sección...</p>`}
			/>
			<CodeBlock
				language="html"
				codeString={`<!-- Desde index.html, enlaza a la sección "equipo" en acerca.html -->
<a href="pages/acerca.html#equipo">Conoce a nuestro equipo</a>`}
			/>

			<Subhead>Enlaces Especiales: Email y Teléfono</Subhead>
			<p className="mb-4">
				También podemos crear enlaces que interactúan con otras aplicaciones del
				dispositivo del usuario:
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · enlaces reales">
					<div className="flex flex-wrap gap-3">
						<a
							href="mailto:info@ejemplo.com"
							className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
						>
							<Mail className="h-4 w-4" aria-hidden />
							Enviar un correo electrónico
						</a>
						<a
							href="tel:+1234567890"
							className="inline-flex items-center gap-2 rounded-lg border border-green-500 px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-50 dark:text-green-300 dark:hover:bg-green-950/40"
						>
							<Phone className="h-4 w-4" aria-hidden />
							Llámanos ahora
						</a>
					</div>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<!-- Abre el cliente de correo por defecto -->
<a href="mailto:info@ejemplo.com">Enviar un correo electrónico</a>

<!-- Inicia una llamada en dispositivos móviles -->
<a href="tel:+1234567890">Llámanos ahora</a>`}
			/>

			<Subhead>Imágenes como Enlaces</Subhead>
			<p className="mb-4">
				Para hacer que una imagen sea un enlace, simplemente envuelve la
				etiqueta <Code>&lt;img&gt;</Code> dentro de una etiqueta{" "}
				<Code>&lt;a&gt;</Code>. Probá hacer clic:
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · imagen clicable real">
					<a
						href="https://developer.mozilla.org/"
						target="_blank"
						rel="noopener noreferrer"
						className="block overflow-hidden rounded-xl transition-shadow hover:shadow-lg hover:ring-2 hover:ring-blue-500"
					>
						<img
							src="https://picsum.photos/seed/mdn-link/640/220"
							alt="Imagen de ejemplo que enlaza a MDN Web Docs"
							className="h-auto w-full"
							loading="lazy"
						/>
					</a>
					<p className="mt-2 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
						<MousePointerClick className="h-3.5 w-3.5" aria-hidden />
						Toda la imagen es un enlace a MDN
					</p>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<a href="https://developer.mozilla.org/">
  <img src="/logo-mdn.png" alt="Logotipo de MDN Web Docs">
</a>`}
			/>
		</section>

		<section>
			<SectionTitle index={2}>
				Imágenes (&lt;img&gt;): El Contenido Visual
			</SectionTitle>
			<p className="mb-4">
				La etiqueta <Code>&lt;img&gt;</Code> nos permite insertar imágenes. Es
				una etiqueta “vacía” o de autocierre, y requiere dos atributos
				esenciales:
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Image className="h-5 w-5" aria-hidden />}
					title="src · Fuente"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					La ruta del archivo: relativa (dentro de tu proyecto) o absoluta (URL
					completa).
				</ConceptCard>
				<ConceptCard
					icon={<Eye className="h-5 w-5" aria-hidden />}
					title="alt · Texto alternativo"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Se muestra si la imagen no carga. <strong>Fundamental</strong> para
					accesibilidad: los lectores de pantalla lo leen en voz alta.
				</ConceptCard>
			</div>
			<div className="mt-4 grid gap-4 md:grid-cols-2">
				<Preview label="Vista previa · imagen con alt correcto">
					<img
						src="https://picsum.photos/seed/curso-web/640/360"
						alt="Paisaje de ejemplo de 640x360 píxeles"
						className="h-auto w-full rounded-xl"
						loading="lazy"
					/>
					<p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
						alt: “Paisaje de ejemplo de 640x360 píxeles”
					</p>
				</Preview>
				<Preview label="Vista previa · cuando la imagen falla">
					<img
						src="ruta-que-no-existe/foto.png"
						alt="Logotipo de la empresa"
						className="h-auto w-full rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300"
					/>
					<p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
						El navegador muestra el <Code>alt</Code> en lugar de la imagen
					</p>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<!-- Imagen con ruta relativa -->
<img src="imagenes/logo.png" alt="Logotipo de la empresa">

<!-- Imagen con ruta absoluta -->
<img src="https://picsum.photos/200/300" alt="Una imagen aleatoria de 200x300 píxeles">`}
			/>
		</section>

		<section>
			<SectionTitle index={3}>
				Contenido Multimedia: &lt;audio&gt; y &lt;video&gt;
			</SectionTitle>
			<p className="mb-4">
				HTML5 nos permite incrustar audio y video de forma nativa. Ambas
				etiquetas usan el atributo <Code>src</Code> para la ruta del archivo y
				comparten atributos clave:
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Music className="h-5 w-5" aria-hidden />}
					title="controls"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					Booleano: muestra play, pausa y volumen.
				</ConceptCard>
				<ConceptCard
					icon={<Clapperboard className="h-5 w-5" aria-hidden />}
					title="autoplay · loop · poster"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					<Code>autoplay</Code> intenta reproducir solo (bloqueado con sonido);{" "}
					<Code>loop</Code> repite en bucle; <Code>poster</Code> muestra una
					imagen antes de reproducir el video.
				</ConceptCard>
			</div>
			<div className="mt-4">
				<Preview label="Vista previa · reproductor de audio real">
					{/* biome-ignore lint/a11y/useMediaCaption: reproductor demo sin archivo de subtítulos */}
					<audio controls preload="none" className="w-full">
						<source
							src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
							type="audio/mpeg"
						/>
						Tu navegador no soporta el elemento de audio.
					</audio>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<!-- Ejemplo de Audio -->
<audio src="sonidos/musica.mp3" controls>
  Tu navegador no soporta el elemento de audio.
</audio>

<!-- Ejemplo de Video -->
<video src="videos/tutorial.mp4" poster="imagenes/portada.jpg" controls width="600">
  Tu navegador no soporta el elemento de video.
</video>`}
			/>
		</section>

		<section>
			<SectionTitle index={4}>
				Incrustación de Contenido Externo: &lt;iframe&gt;
			</SectionTitle>
			<p className="mb-4">
				Un <Code>&lt;iframe&gt;</Code> (inline frame) nos permite incrustar un
				documento HTML completo dentro de otro. Es como tener una “ventana” a
				otro sitio web: videos de YouTube, mapas de Google Maps o PDFs. Para que
				se vea bien en todos los dispositivos, en lugar de ancho y alto fijos
				usamos CSS responsivo.
			</p>
			<Callout variant="warning" title="Advertencia de Seguridad:">
				No todos los sitios web permiten ser incrustados en un{" "}
				<Code>&lt;iframe&gt;</Code> por razones de seguridad, para prevenir
				ataques como el “clickjacking”.
			</Callout>
			<CodeBlock
				language="html"
				codeString={`<!-- Video de YouTube Responsivo -->
<div class="aspect-ratio-16-9">
  <iframe
    class="w-full h-full"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="Video de YouTube"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

<!-- Mapa de Google Maps Responsivo -->
<div class="aspect-ratio-4-3">
  <iframe
    class="w-full h-full"
    src="https://www.google.com/maps/embed?pb=..."
    allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>
`}
			/>
			<p className="mt-6 mb-2 font-medium">
				Resultado · iframes reales en vivo:
			</p>
			<div className="grid gap-6 lg:grid-cols-2">
				<figure className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-700">
					<iframe
						className="w-full border-0"
						style={{ aspectRatio: "16/9" }}
						src="https://www.youtube.com/embed/dQw4w9WgXcQ"
						title="Video de YouTube"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
					<figcaption className="border-t border-gray-100 bg-white px-4 py-2 text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
						Video de YouTube incrustado y responsivo
					</figcaption>
				</figure>
				<figure className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-700">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.69695990263!2d-74.0660460852378!3d4.647998996619016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a43922a843f%3A0x23d633842f1b0a7!2sMovistar%20Arena!5e0!3m2!1ses!2sco!4v1678886472063!5m2!1ses!2sco"
						className="w-full border-0"
						style={{ aspectRatio: "16/9" }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="Mapa de Google Maps"
					></iframe>
					<figcaption className="border-t border-gray-100 bg-white px-4 py-2 text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
						Mapa de Google Maps incrustado y responsivo
					</figcaption>
				</figure>
			</div>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
				<Frame className="h-6 w-6 text-blue-500" aria-hidden />📝 Tarea: Mi
				Galería Multimedia Interactiva
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Ahora es tu turno de crear una página interactiva y conectarla con tu
				página principal. Construirás una galería simple con enlaces, imágenes y
				multimedia.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Crea el Archivo">
					Crea <Code>galeria.html</Code> con la estructura base y el{" "}
					<Code>&lt;head&gt;</Code> configurado.
				</Step>
				<Step number={2} title="Título Principal">
					Un <Code>&lt;h1&gt;</Code> que diga “Mi Galería Personal”.
				</Step>
				<Step number={3} title="Sección de Imágenes">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							<Code>&lt;h2&gt;</Code> “Mis Fotos Favoritas”.
						</CheckItem>
						<CheckItem>
							Dos <Code>&lt;img&gt;</Code> (relativas o absolutas, ej. Lorem
							Picsum).
						</CheckItem>
						<CheckItem>
							<strong>¡Importante!</strong> Cada imagen con su <Code>alt</Code>{" "}
							descriptivo.
						</CheckItem>
						<CheckItem>
							Una imagen como enlace <Code>&lt;a&gt;</Code> a un sitio externo.
						</CheckItem>
					</ul>
				</Step>
				<Step number={4} title="Sección de Video y Mapa">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							<Code>&lt;h2&gt;</Code> “Mi Video Musical Favorito” + YouTube en{" "}
							<Code>&lt;iframe&gt;</Code> responsivo.
						</CheckItem>
						<CheckItem>
							<Code>&lt;h2&gt;</Code> “Ubicación de mi Lugar Favorito” + Google
							Maps responsivo.
						</CheckItem>
					</ul>
				</Step>
				<Step number={5} title="Conecta tus Páginas">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							En <Code>index.html</Code>:{" "}
							<Code>&lt;a href="galeria.html"&gt;Ver mi galería&lt;/a&gt;</Code>
							.
						</CheckItem>
						<CheckItem>
							En <Code>galeria.html</Code>:{" "}
							<Code>&lt;a href="index.html"&gt;Volver al Inicio&lt;/a&gt;</Code>
							.
						</CheckItem>
					</ul>
				</Step>
				<Step number={6} title="Visualiza y Navega">
					Abre <Code>index.html</Code> con Live Server, navegá ida y vuelta.
					¡Creaste un sitio de varias páginas!
				</Step>
			</ol>
			<Callout variant="success" title="¡Felicidades!">
				Has creado un sitio de varias páginas con galería multimedia
				interactiva.
			</Callout>
		</section>
	</div>
);

export default Lecture4Es;
