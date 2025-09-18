import CodeBlock from "@/components/ui/code-block";

const Lecture16Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Más Allá del Color Sólido: Fondos con Imágenes
			</h3>
			<p className='mb-4'>
				Los fondos son una parte esencial del diseño visual. Podemos ir mucho
				más allá de un simple `background-color` usando imágenes para crear
				texturas, patrones o banners impactantes. La propiedad principal para
				esto es <code>background-image</code>.
			</p>
			<CodeBlock
				language='css'
				codeString={`.hero-section {
  background-image: url('camino/a/mi/imagen.jpg');
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Controlando la Imagen de Fondo
			</h3>
			<p className='mb-4'>
				Una vez que hemos añadido una imagen, tenemos un conjunto de propiedades
				para controlar cómo se comporta.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`background-repeat`</strong>: Por defecto, las imágenes de
					fondo se repiten en mosaico si son más pequeñas que su contenedor.
					<ul className='list-inside space-y-1 pl-6 my-2'>
						<li>
							<code>repeat</code> (valor por defecto): Repite horizontal y
							verticalmente.
						</li>
						<li>
							<code>no-repeat</code>: Muestra la imagen una sola vez.
						</li>
						<li>
							<code>repeat-x</code> / <code>repeat-y</code>: Repite solo en el
							eje horizontal o vertical.
						</li>
					</ul>
				</li>
				<li>
					<strong>`background-position`</strong>: Define la posición inicial de
					la imagen. Podemos usar palabras clave (<code>top</code>,{" "}
					<code>center</code>, <code>bottom</code>, <code>left</code>,{" "}
					<code>right</code>) o valores precisos (<code>50% 50%</code>,{" "}
					<code>20px 100px</code>).
					<CodeBlock
						language='css'
						codeString={`.icono-usuario {
  background-image: url('user.svg');
  background-repeat: no-repeat;
  background-position: center left;
}`}
					/>
				</li>
				<li>
					<strong>`background-size`</strong>: Controla el tamaño de la imagen de
					fondo.
					<ul className='list-inside space-y-1 pl-6 my-2'>
						<li>
							<code>auto</code> (valor por defecto): La imagen mantiene su
							tamaño original.
						</li>
						<li>
							<code>cover</code>: <strong>Muy importante.</strong> Redimensiona
							la imagen para que cubra completamente el área del contenedor,
							manteniendo su proporción. Puede que parte de la imagen se
							recorte.
						</li>
						<li>
							<code>contain</code>: Redimensiona la imagen para que quepa
							completamente dentro del contenedor, manteniendo su proporción.
							Puede que queden espacios vacíos.
						</li>
					</ul>
				</li>
				<li>
					<strong>`background-attachment`</strong>: Define si la imagen se
					desplaza con el resto del contenido.
					<ul className='list-inside space-y-1 pl-6 my-2'>
						<li>
							<code>scroll</code> (valor por defecto): La imagen se desplaza con
							la página.
						</li>
						<li>
							<code>fixed</code>: La imagen se queda fija en la ventana del
							navegador, creando un efecto de paralaje simple.
						</li>
					</ul>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>3. El Atajo `background`</h3>
			<p className='mb-4'>
				Podemos combinar todas estas propiedades en una sola declaración
				`background` para un código más conciso.
			</p>
			<CodeBlock
				language='css'
				codeString={`.hero {
  background:
    url('hero-image.jpg') /* image */
    no-repeat /* repeat */
    center center /* position */
    / cover; /* size (se separa con una barra) */
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Degradados CSS: Colores Fluidos
			</h3>
			<p className='mb-4'>
				CSS nos permite crear degradados directamente en el código, sin
				necesidad de archivos de imagen. Se aplican usando la propiedad{" "}
				<code>background-image</code>.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Degradado Lineal (`linear-gradient`)
			</h4>
			<p className='mb-4'>Crea un degradado que progresa en línea recta.</p>
			<CodeBlock
				language='css'
				codeString={`/* Sintaxis: linear-gradient(dirección, color1, color2, ...); */

/* De arriba (por defecto) a abajo */
.gradiente-1 {
  background-image: linear-gradient(blue, pink);
}

/* Diagonal: de esquina superior izquierda a inferior derecha */
.gradiente-2 {
  background-image: linear-gradient(to bottom right, #ff7e5f, #feb47b);
}

/* Con un ángulo específico */
.gradiente-3 {
  background-image: linear-gradient(45deg, #6a11cb, #2575fc);
}`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Degradado Radial (`radial-gradient`)
			</h4>
			<p className='mb-4'>
				Crea un degradado que irradia desde un punto central.
			</p>
			<CodeBlock
				language='css'
				codeString={`/* De adentro hacia afuera */
.gradiente-radial {
  background-image: radial-gradient(circle, white, steelblue);
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Creando un Banner de Héroe
			</h3>
			<p className='mb-4'>
				Combinaremos imágenes de fondo y degradados para crear un "hero banner"
				atractivo, una sección de encabezado grande y visualmente impactante.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>HTML:</strong> Crea un elemento <code>&lt;section&gt;</code>{" "}
					con la clase <code>hero-banner</code>. Dentro, pon un{" "}
					<code>&lt;h1&gt;</code> y un <code>&lt;p&gt;</code>.
				</li>
				<li>
					<strong>CSS:</strong> Selecciona <code>.hero-banner</code> y aplícale
					los siguientes estilos:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Dale una altura fija, por ejemplo, `height: 60vh;` (60% de la
							altura de la ventana).
						</li>
						<li>
							Usa `background-image` para aplicar una imagen de fondo de tu
							elección.
						</li>
						<li>
							Añade `background-size: cover;` y `background-position: center;`
							para que la imagen siempre cubra la sección y esté centrada.
						</li>
						<li>
							Para mejorar la legibilidad del texto, añade una superposición de
							degradado. Puedes aplicar múltiples fondos separándolos por comas.
							El primero que declares estará por encima.
							<CodeBlock
								language='css'
								codeString={`.hero-banner {
  /* El degradado va primero, sobre la imagen */
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('tu-imagen.jpg');
  /* ... otros estilos de fondo ... */
  color: white; /* Para que el texto sea visible */
}`}
							/>
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture16Es;
