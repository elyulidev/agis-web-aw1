import { SectionTitle } from "@/components/lecture/lecture-blocks";
import CodeBlock from "@/components/ui/code-block";
import CodeTabs from "@/components/ui/code-tabs";

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

const Lecture16Es = () => (
	<div className="space-y-8">
		<section>
			<SectionTitle index={1}>
				Más Allá del Color Sólido: Fondos con Imágenes
			</SectionTitle>
			<p className="mb-4">
				Los fondos son una parte esencial del diseño visual. Podemos ir mucho
				más allá de un simple <Code>background-color</Code> usando imágenes para
				crear texturas, patrones o banners impactantes. La propiedad principal
				para esto es <Code>background-image</Code>.
			</p>
			<CodeBlock
				language="css"
				codeString={`.hero-section {
  background-image: url('camino/a/mi/imagen.jpg');
}`}
			/>
		</section>

		<section>
			<SectionTitle index={2}>Controlando la Imagen de Fondo</SectionTitle>
			<p className="mb-4">
				Una vez que hemos añadido una imagen, tenemos un conjunto de propiedades
				para controlar cómo se comporta.
			</p>

			<div className="mb-4">
				<Preview label="Vista previa · una misma imagen con repeat, position y no-repeat">
					<style>{`.d16-fondo {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Ccircle cx='8' cy='8' r='6' fill='%23e67e22'/%3E%3C/svg%3E");
  width: 110px; height: 70px; background-color: #f8fafc;
  border: 1px solid #cbd5e1; border-radius: 8px;
}
.d16-rep { background-repeat: repeat; }
.d16-norep { background-repeat: no-repeat; }
.d16-repx { background-repeat: repeat-x; }
.d16-pos1 { background-repeat: no-repeat; background-position: top left; }
.d16-pos2 { background-repeat: no-repeat; background-position: right bottom; }
.d16-fila { display: flex; flex-wrap: wrap; gap: 12px; }
.d16-etiqueta { font-size: 0.75rem; margin-top: 4px; color: #1f2937; }`}</style>
					<div className="d16-fila">
						<div>
							<div className="d16-fondo d16-rep" />
							<p className="d16-etiqueta">repeat</p>
						</div>
						<div>
							<div className="d16-fondo d16-norep" />
							<p className="d16-etiqueta">no-repeat</p>
						</div>
						<div>
							<div className="d16-fondo d16-repx" />
							<p className="d16-etiqueta">repeat-x</p>
						</div>
						<div>
							<div className="d16-fondo d16-pos1" />
							<p className="d16-etiqueta">position: top left</p>
						</div>
						<div>
							<div className="d16-fondo d16-pos2" />
							<p className="d16-etiqueta">position: right bottom</p>
						</div>
					</div>
					<p className="mt-2 text-sm">
						<Code>repeat</Code> pinta el mosaico completo, <Code>repeat-x</Code>{" "}
						solo la fila horizontal; con <Code>no-repeat</Code>, la posición
						manda en dónde aterriza el círculo.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- Cinco paneles: la misma imagen con diferentes repeat y position -->
<div class="fila">
  <div><div class="caja-fondo fondo-repeat"></div><p class="etiqueta">repeat</p></div>
  <div><div class="caja-fondo fondo-no-repeat"></div><p class="etiqueta">no-repeat</p></div>
  <div><div class="caja-fondo fondo-repeat-x"></div><p class="etiqueta">repeat-x</p></div>
  <div><div class="caja-fondo fondo-pos-top-left"></div><p class="etiqueta">position: top left</p></div>
  <div><div class="caja-fondo fondo-pos-right-bottom"></div><p class="etiqueta">position: right bottom</p></div>
</div>`}
				css={`.fila { display: flex; flex-wrap: wrap; gap: 12px; }
.etiqueta { font-size: 0.75rem; margin-top: 4px; color: #1f2937; }

.caja-fondo {
  width: 110px; height: 70px; border-radius: 8px;
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  /* una imagen chiquita para notar la repetición (SVG embebido) */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Ccircle cx='8' cy='8' r='6' fill='%23e67e22'/%3E%3C/svg%3E");
}
.fondo-repeat { background-repeat: repeat; }
.fondo-no-repeat { background-repeat: no-repeat; }
.fondo-repeat-x { background-repeat: repeat-x; }
.fondo-pos-top-left { background-repeat: no-repeat; background-position: top left; }
.fondo-pos-right-bottom { background-repeat: no-repeat; background-position: right bottom; }`}
			/>

			<ul className="list-none space-y-4 pl-0 mb-4 [&>li]:relative [&>li]:pl-7 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.5em] [&>li]:before:h-2.5 [&>li]:before:w-2.5 [&>li]:before:rounded-full [&>li]:before:bg-blue-500">
				<li>
					<strong>
						<Code>background-repeat</Code>
					</strong>
					: Por defecto, las imágenes de fondo se repiten en mosaico si son más
					pequeñas que su contenedor.
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							<Code>repeat</Code> (valor por defecto): Repite horizontal y
							verticalmente.
						</li>
						<li>
							<Code>no-repeat</Code>: Muestra la imagen una sola vez.
						</li>
						<li>
							<Code>repeat-x</Code> / <Code>repeat-y</Code>: Repite solo en el
							eje horizontal o vertical.
						</li>
					</ul>
				</li>
				<li>
					<strong>
						<Code>background-position</Code>
					</strong>
					: Define la posición inicial de la imagen. Podemos usar palabras clave
					(<Code>top</Code>, <Code>center</Code>, <Code>bottom</Code>,{" "}
					<Code>left</Code>, <Code>right</Code>) o valores precisos (
					<Code>50% 50%</Code>, <Code>20px 100px</Code>).
					<CodeBlock
						language="css"
						codeString={`.icono-usuario {
  background-image: url('user.svg');
  background-repeat: no-repeat;
  background-position: center left;
}`}
					/>
				</li>
				<li>
					<strong>
						<Code>background-size</Code>
					</strong>
					: Controla el tamaño de la imagen de fondo.
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							<Code>auto</Code> (valor por defecto): La imagen mantiene su
							tamaño original.
						</li>
						<li>
							<Code>cover</Code>: <strong>Muy importante.</strong> Redimensiona
							la imagen para que cubra completamente el área del contenedor,
							manteniendo su proporción. Puede que parte de la imagen se
							recorte.
						</li>
						<li>
							<Code>contain</Code>: Redimensiona la imagen para que quepa
							completamente dentro del contenedor, manteniendo su proporción.
							Puede que queden espacios vacíos.
						</li>
					</ul>
				</li>
				<li>
					<strong>
						<Code>background-attachment</Code>
					</strong>
					: Define si la imagen se desplaza con el resto del contenido.
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							<Code>scroll</Code> (valor por defecto): La imagen se desplaza con
							la página.
						</li>
						<li>
							<Code>fixed</Code>: La imagen se queda fija en la ventana del
							navegador, creando un efecto de paralaje simple.
						</li>
					</ul>
				</li>
			</ul>
		</section>

		<section>
			<SectionTitle index={3}>
				El Atajo <Code>background</Code>
			</SectionTitle>
			<p className="mb-4">
				Podemos combinar todas estas propiedades en una sola declaración{" "}
				<Code>background</Code> para un código más conciso.
			</p>
			<CodeBlock
				language="css"
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
			<SectionTitle index={4}>Degradados CSS: Colores Fluidos</SectionTitle>
			<p className="mb-4">
				CSS nos permite crear degradados directamente en el código, sin
				necesidad de archivos de imagen. Se aplican usando la propiedad{" "}
				<Code>background-image</Code>.
			</p>

			<Subhead>
				Degradado Lineal (<Code>linear-gradient</Code>)
			</Subhead>
			<p className="mb-4">Crea un degradado que progresa en línea recta.</p>

			<div className="mb-4">
				<Preview label="Vista previa · tres direcciones de linear-gradient">
					<style>{`.d16-carta { width: 150px; height: 70px; border-radius: 8px; }
.d16-grad-1 { background-image: linear-gradient(blue, pink); }
.d16-grad-2 { background-image: linear-gradient(to bottom right, #ff7e5f, #feb47b); }
.d16-grad-3 { background-image: linear-gradient(45deg, #6a11cb, #2575fc); }
.d16-etiqueta { font-size: 0.75rem; margin-top: 4px; color: #1f2937; }
.d16-fila { display: flex; flex-wrap: wrap; gap: 12px; }`}</style>
					<div className="d16-fila">
						<div>
							<div className="d16-carta d16-grad-1" />
							<p className="d16-etiqueta">blue → pink</p>
						</div>
						<div>
							<div className="d16-carta d16-grad-2" />
							<p className="d16-etiqueta">to bottom right</p>
						</div>
						<div>
							<div className="d16-carta d16-grad-3" />
							<p className="d16-etiqueta">45deg</p>
						</div>
					</div>
					<p className="mt-2 text-sm">
						Sin dirección el degradado cae de arriba a abajo; con{" "}
						<Code>to bottom right</Code> cruza a la esquina opuesta y con{" "}
						<Code>45deg</Code> pega la inclinación exacta que pides.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- Tres bandas: por defecto, a la esquina y con ángulo -->
<div class="fila">
  <div><div class="carta-grad gradiente-1"></div><p class="etiqueta">blue → pink</p></div>
  <div><div class="carta-grad gradiente-2"></div><p class="etiqueta">to bottom right</p></div>
  <div><div class="carta-grad gradiente-3"></div><p class="etiqueta">45deg</p></div>
</div>`}
				css={`.fila { display: flex; flex-wrap: wrap; gap: 12px; }
.etiqueta { font-size: 0.75rem; margin-top: 4px; color: #1f2937; }
.carta-grad { width: 150px; height: 70px; border-radius: 8px; }
.gradiente-1 { background-image: linear-gradient(blue, pink); }
.gradiente-2 { background-image: linear-gradient(to bottom right, #ff7e5f, #feb47b); }
.gradiente-3 { background-image: linear-gradient(45deg, #6a11cb, #2575fc); }`}
			/>

			<CodeBlock
				language="css"
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

			<Subhead>
				Degradado Radial (<Code>radial-gradient</Code>)
			</Subhead>
			<p className="mb-4">
				Crea un degradado que irradia desde un punto central.
			</p>

			<div className="mb-4">
				<Preview label="Vista previa · radial-gradient irradiando del centro">
					<style>{`.d16-radial {
  width: 200px; height: 80px; border-radius: 8px;
  background-image: radial-gradient(circle, white, steelblue);
}`}</style>
					<div className="d16-radial" />
					<p className="mt-2 text-sm">
						El blanco nace en el centro y se apaga hasta el{" "}
						<Code>steelblue</Code> hacia los bordes.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- Un panel con el degradado radial -->
<div class="panel-radial"></div>`}
				css={`.panel-radial {
  width: 200px; height: 80px; border-radius: 8px;
  background-image: radial-gradient(circle, white, steelblue);
}`}
			/>

			<CodeBlock
				language="css"
				codeString={`/* De adentro hacia afuera */
.gradiente-radial {
  background-image: radial-gradient(circle, white, steelblue);
}`}
			/>
		</section>

		<section>
			<SectionTitle index={5}>
				📝 Tarea: Creando un Banner de Héroe
			</SectionTitle>
			<p className="mb-4">
				Combinaremos imágenes de fondo y degradados para crear un "hero banner"
				atractivo, una sección de encabezado grande y visualmente impactante.
			</p>
			<ol className="list-decimal list-outside space-y-2 pl-5 mb-4 marker:font-bold marker:text-blue-600 dark:marker:text-blue-400">
				<li>
					<strong>HTML:</strong> Crea un elemento <Code>&lt;section&gt;</Code>{" "}
					con la clase <Code>hero-banner</Code>. Dentro, pon un{" "}
					<Code>&lt;h1&gt;</Code> y un <Code>&lt;p&gt;</Code>.
				</li>
				<li>
					<strong>CSS:</strong> Selecciona <Code>.hero-banner</Code> y aplícale
					los siguientes estilos:
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							Dale una altura fija, por ejemplo, <Code>height: 60vh;</Code> (60%
							de la altura de la ventana).
						</li>
						<li>
							Usa <Code>background-image</Code> para aplicar una imagen de fondo
							de tu elección.
						</li>
						<li>
							Añade <Code>background-size: cover;</Code> y{" "}
							<Code>background-position: center;</Code> para que la imagen
							siempre cubra la sección y esté centrada.
						</li>
						<li>
							Para mejorar la legibilidad del texto, añade una superposición de
							degradado. Puedes aplicar múltiples fondos separándolos por comas.
							El primero que declares estará por encima.
							<CodeBlock
								language="css"
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
