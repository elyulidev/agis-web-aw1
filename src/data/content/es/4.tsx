import CodeBlock from "@/components/ui/code-block";

const Lecture4Es = () => (
	<div className='space-y-8'>
		<section>
			<p>
				¡Hola de nuevo! En la conferencia anterior dominamos el formato de texto
				y las listas. Hoy daremos un paso fundamental para hacer que nuestras
				páginas web cobren vida: vamos a conectar nuestro contenido con el mundo
				a través de enlaces, a darle un rostro con imágenes y a enriquecer la
				experiencia con contenido multimedia.
			</p>
			<p className='mt-4'>
				Estos son los elementos que transforman un simple documento en una
				experiencia web interactiva y visualmente atractiva.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Enlaces (&lt;a&gt;): Conectando la Web
			</h3>
			<p className='mb-4'>
				La etiqueta <code>&lt;a&gt;</code> (de <i>anchor</i> o ancla) es el
				pilar del hipertexto; es lo que nos permite navegar entre páginas y
				recursos. Un enlace necesita el atributo <code>href</code> (hypertext
				reference) para saber a dónde debe dirigir al usuario.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Enlaces Externos</h4>
			<p className='mb-4'>
				Son aquellos que apuntan a otro sitio web. El valor del{" "}
				<code>href</code> debe ser la URL completa, incluyendo{" "}
				<code>http://</code> o <code>https://</code>.
			</p>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					Práctica recomendada:
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Para que los enlaces externos se abran en una nueva pestaña, usa el
					atributo <code>target="_blank"</code>. Por seguridad, acompáñalo
					siempre de <code>rel="noopener noreferrer"</code>.
				</p>
			</div>
			<CodeBlock
				language='html'
				codeString={`<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
  Ir a Google
</a>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Enlaces Internos a Otras Páginas (Navegación del Sitio)
			</h4>
			<p className='mb-4'>
				Esta es la forma en que construimos sitios web con múltiples páginas.
				Creamos enlaces que apuntan a otros archivos HTML dentro de nuestro
				propio proyecto usando rutas relativas.
			</p>
			<p className='mb-4'>
				Imagina que tu proyecto tiene la siguiente estructura de archivos:
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
						<span className='text-orange-500'>📄</span>{" "}
						<span className='ml-2'>contacto.html</span>
					</div>
					<div className='flex items-center mt-2'>
						<span role='img' aria-label='Folder icon'>
							📁
						</span>{" "}
						<span className='ml-2'>pages/</span>
					</div>
					<div className='pl-12 border-l-2 border-gray-300 dark:border-gray-600 ml-2'>
						<div className='flex items-center mt-2'>
							<span className='text-orange-500'>📄</span>{" "}
							<span className='ml-2'>acerca.html</span>
						</div>
					</div>
				</div>
			</div>
			<p className='mt-4'>
				Desde <code>index.html</code>, los enlaces se verían así:
			</p>
			<CodeBlock
				language='html'
				codeString={`<!-- 1. Enlace a un archivo en la misma carpeta -->
<a href="contacto.html">Contáctanos</a>

<!-- 2. Enlace a un archivo en una subcarpeta -->
<a href="pages/acerca.html">Sobre Nosotros</a>

<!-- 3. Desde "acerca.html", para volver al inicio (subir un nivel) -->
<a href="../index.html">Volver al Inicio</a>

<!-- 4. Enlace a la raíz del sitio (útil en sitios grandes) -->
<a href="/index.html">Página Principal</a>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Enlaces a Secciones Específicas (Anclas)
			</h4>
			<p className='mb-4'>
				Podemos dirigir al usuario a una parte específica de una página. Esto es
				útil para crear índices o menús de navegación en páginas largas.
			</p>
			<h5 className='text-lg font-semibold mt-4 mb-2'>
				Ancla en la misma página:
			</h5>
			<p>
				Primero, asignas un atributo <code>id</code> con un nombre único al
				elemento al que quieres saltar. Luego, en el <code>href</code>, usas{" "}
				<code>#</code> seguido del nombre del <code>id</code>.
			</p>
			<CodeBlock
				language='html'
				codeString={`<!-- El Enlace -->
<a href="#seccion-2">Ir a la Sección 2</a>

<!-- Mucho contenido aquí... -->

<!-- El Destino -->
<h2 id="seccion-2">Esta es la Sección 2</h2>
<p>Contenido de la sección...</p>`}
			/>

			<h5 className='text-lg font-semibold mt-4 mb-2'>
				Ancla en una página diferente:
			</h5>
			<p>Simplemente combina el enlace a la página con el ancla.</p>
			<CodeBlock
				language='html'
				codeString={`<!-- Desde index.html, enlaza a la sección "equipo" en acerca.html -->
<a href="pages/acerca.html#equipo">Conoce a nuestro equipo</a>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Enlaces Especiales: Email y Teléfono
			</h4>
			<p className='mb-4'>
				También podemos crear enlaces que interactúan con otras aplicaciones del
				dispositivo del usuario:
			</p>
			<CodeBlock
				language='html'
				codeString={`<!-- Abre el cliente de correo por defecto -->
<a href="mailto:info@ejemplo.com">Enviar un correo electrónico</a>

<!-- Inicia una llamada en dispositivos móviles -->
<a href="tel:+1234567890">Llámanos ahora</a>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Imágenes como Enlaces</h4>
			<p className='mb-4'>
				Para hacer que una imagen sea un enlace, simplemente envuelve la
				etiqueta <code>&lt;img&gt;</code> dentro de una etiqueta{" "}
				<code>&lt;a&gt;</code>.
			</p>
			<CodeBlock
				language='html'
				codeString={`<a href="https://developer.mozilla.org/">
  <img src="/logo-mdn.png" alt="Logotipo de MDN Web Docs">
</a>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Imágenes (&lt;img&gt;): El Contenido Visual
			</h3>
			<p className='mb-4'>
				La etiqueta <code>&lt;img&gt;</code> nos permite insertar imágenes. Es
				una etiqueta "vacía" o de autocierre, y requiere dos atributos
				esenciales:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>src (Source - Fuente):</strong> Contiene la ruta al archivo de
					la imagen. La ruta puede ser relativa (dentro de tu proyecto) o
					absoluta (una URL completa).
				</li>
				<li>
					<strong>alt (Alternative text - Texto alternativo):</strong> Un texto
					descriptivo que se muestra si la imagen no puede cargarse. Es{" "}
					<strong>fundamental</strong> para la accesibilidad, ya que los
					lectores de pantalla lo leen en voz alta.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<!-- Imagen con ruta relativa -->
<img src="imagenes/logo.png" alt="Logotipo de la empresa">

<!-- Imagen con ruta absoluta -->
<img src="https://picsum.photos/200/300" alt="Una imagen aleatoria de 200x300 píxeles">`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Contenido Multimedia: &lt;audio&gt; y &lt;video&gt;
			</h3>
			<p className='mb-4'>
				HTML5 nos permite incrustar audio y video de forma nativa. Ambas
				etiquetas usan el atributo <code>src</code> para especificar la ruta del
				archivo y comparten atributos clave:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>controls:</strong> Atributo booleano que muestra los controles
					de reproducción (play, pausa, volumen).
				</li>
				<li>
					<strong>autoplay:</strong> Intenta reproducir el contenido
					automáticamente (generalmente bloqueado por los navegadores si tiene
					sonido).
				</li>
				<li>
					<strong>loop:</strong> Hace que el audio o video se reproduzca en un
					bucle continuo.
				</li>
				<li>
					<strong>poster (solo para &lt;video&gt;):</strong> Especifica una
					imagen para mostrar mientras el video se carga o antes de que se
					reproduzca.
				</li>
			</ul>
			<CodeBlock
				language='html'
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
			<h3 className='text-2xl font-semibold mb-3'>
				4. Incrustación de Contenido Externo: &lt;iframe&gt;
			</h3>
			<p className='mb-4'>
				Un <code>&lt;iframe&gt;</code> (inline frame) nos permite incrustar un
				documento HTML completo dentro de otro. Es como tener una "ventana" a
				otro sitio web. Es muy útil para insertar contenido de terceros como
				videos de YouTube, mapas de Google Maps o documentos PDF. Para asegurar
				que se vea bien en todos los dispositivos, en lugar de usar atributos de
				ancho y alto fijos, usamos CSS para que sea responsivo.
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					Advertencia de Seguridad:
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					No todos los sitios web permiten ser incrustados en un{" "}
					<code>&lt;iframe&gt;</code> por razones de seguridad para prevenir
					ataques como el "clickjacking".
				</p>
			</div>
			<CodeBlock
				language='html'
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
			<h5 className='text-lg font-semibold mt-6 mb-2'>Resultado:</h5>
			<p className='mb-4'>Video de YouTube:</p>
			<div className='my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700'>
				<iframe
					className='w-full border-0'
					style={{ aspectRatio: "16/9" }}
					src='https://www.youtube.com/embed/dQw4w9WgXcQ'
					title='Video de YouTube'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				></iframe>
			</div>

			<p className='mb-4'>Mapa de Google Maps:</p>
			<div className='my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.69695990263!2d-74.0660460852378!3d4.647998996619016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a43922a843f%3A0x23d633842f1b0a7!2sMovistar%20Arena!5e0!3m2!1ses!2sco!4v1678886472063!5m2!1ses!2sco'
					className='w-full border-0'
					style={{ aspectRatio: "4/3" }}
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				></iframe>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Mi Galería Multimedia Interactiva
			</h3>
			<p className='mb-4'>
				Ahora es tu turno de crear una página interactiva y conectarla con tu
				página principal. Construirás una galería simple para mostrar tus
				intereses usando enlaces, imágenes y contenido multimedia.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Crea el Archivo:</strong> En tu proyecto, crea un nuevo
					archivo llamado <code>galeria.html</code>. No olvides la estructura
					HTML básica y la configuración del <code>&lt;head&gt;</code>.
				</li>
				<li>
					<strong>Título Principal:</strong> En <code>galeria.html</code>, añade
					un <code>&lt;h1&gt;</code> que diga "Mi Galería Personal".
				</li>
				<li>
					<strong>Sección de Imágenes:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Crea un <code>&lt;h2&gt;</code> para "Mis Fotos Favoritas".
						</li>
						<li>
							Añade al menos dos imágenes (<code>&lt;img&gt;</code>). Puedes
							usar imágenes de tu computadora (ruta relativa) o de internet
							(ruta absoluta, por ejemplo de{" "}
							<a
								href='https://picsum.photos/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Lorem Picsum
							</a>
							).
						</li>
						<li>
							<strong>¡Importante!</strong> Asegúrate de que cada imagen tenga
							un atributo <code>alt</code> descriptivo.
						</li>
						<li>
							Haz que una de las imágenes sea un enlace (<code>&lt;a&gt;</code>)
							a un sitio web externo relacionado (ej: una foto de un paisaje que
							enlace a una página sobre turismo).
						</li>
					</ul>
				</li>
				<li>
					<strong>Sección de Video y Mapa:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Crea un <code>&lt;h2&gt;</code> para "Mi Video Musical Favorito" e
							incrusta un video de YouTube usando un <code>&lt;iframe&gt;</code>{" "}
							de forma responsiva.
						</li>
						<li>
							Crea otro <code>&lt;h2&gt;</code> para "Ubicación de mi Lugar
							Favorito" e incrusta un mapa de Google Maps de forma responsiva.
						</li>
					</ul>
				</li>
				<li>
					<strong>Conecta tus Páginas:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							En tu archivo principal <code>index.html</code>, añade un enlace
							que lleve a tu nueva galería. Por ejemplo:{" "}
							<code>&lt;a href="galeria.html"&gt;Ver mi galería&lt;/a&gt;</code>
							.
						</li>
						<li>
							En <code>galeria.html</code>, añade un enlace para regresar a la
							página principal. Por ejemplo:{" "}
							<code>&lt;a href="index.html"&gt;Volver al Inicio&lt;/a&gt;</code>
							.
						</li>
					</ul>
				</li>
				<li>
					<strong>Visualiza y Navega:</strong> Abre <code>index.html</code> con
					Live Server. Haz clic en el enlace para ir a tu galería y luego usa el
					enlace de regreso para volver a la página de inicio. ¡Felicidades, has
					creado un sitio de varias páginas!
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture4Es;
