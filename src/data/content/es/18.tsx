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

const Lecture18Es = () => (
	<div className="space-y-8">
		<section>
			<SectionTitle index={1}>Un Mundo, Múltiples Pantallas</SectionTitle>
			<p className="mb-4">
				Hoy en día, los usuarios acceden a la web desde una increíble variedad
				de dispositivos: teléfonos, tabletas, portátiles, televisores. El{" "}
				<strong>Diseño Web Responsivo (Responsive Web Design)</strong> es el
				enfoque que sugiere que el diseño y el desarrollo deben responder al
				comportamiento y entorno del usuario en función del tamaño de la
				pantalla, la plataforma y la orientación.
			</p>
			<p>
				Una web responsiva se adapta fluidamente para ofrecer la mejor
				experiencia posible en cualquier dispositivo.
			</p>
		</section>

		<section>
			<SectionTitle index={2}>
				Los Tres Ingredientes del Diseño Responsivo
			</SectionTitle>
			<p className="mb-4">
				El diseño responsivo se basa en tres pilares técnicos:
			</p>
			<ol className="list-decimal list-outside space-y-4 pl-5 mb-4 marker:font-bold marker:text-blue-600 dark:marker:text-blue-400">
				<li>
					<strong>Layouts Fluidos:</strong> En lugar de usar anchos fijos en
					píxeles (<Code>width: 960px;</Code>), usamos unidades relativas como
					porcentajes (<Code>width: 80%;</Code>). Esto permite que el layout se
					estire o encoja con el tamaño de la pantalla.
				</li>
				<li>
					<strong>Imágenes Flexibles:</strong> Para evitar que las imágenes se
					desborden de sus contenedores en pantallas pequeñas, usamos una regla
					de oro:
					<CodeBlock
						language="css"
						codeString={`img {
  max-width: 100%;
  height: auto;
}`}
					/>
					<p className="mt-2">
						Esto asegura que una imagen nunca será más ancha que su contenedor,
						pero puede encogerse si es necesario, manteniendo su proporción.
					</p>
				</li>
				<li>
					<strong>Media Queries:</strong> La herramienta más poderosa. Nos
					permiten aplicar bloques de CSS solo cuando se cumplen ciertas
					condiciones, generalmente relacionadas con el tamaño de la pantalla.
				</li>
			</ol>
		</section>

		<section>
			<SectionTitle index={3}>Media Queries: CSS con Superpoderes</SectionTitle>
			<p className="mb-4">
				Una media query es una "pregunta" que le hacemos al navegador sobre el
				dispositivo en el que se está mostrando la página. Si la respuesta es
				"sí", se aplican los estilos dentro de la query.
			</p>
			<p className="mb-4">
				La sintaxis básica es{" "}
				<Code>
					@media (condición) {"{"} {"/* reglas CSS aquí */"} {"}"}
				</Code>
				.
			</p>

			<Subhead>
				<Code>max-width</Code> vs <Code>min-width</Code>
			</Subhead>
			<ul className="list-none space-y-4 pl-0 mb-4 [&>li]:relative [&>li]:pl-7 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.5em] [&>li]:before:h-2.5 [&>li]:before:w-2.5 [&>li]:before:rounded-full [&>li]:before:bg-blue-500">
				<li>
					<strong>
						<Code>max-width</Code> (Desktop-First):
					</strong>{" "}
					Los estilos se aplican si el ancho de la ventana es{" "}
					<strong>menor o igual</strong> al valor especificado. Es como decir
					"para pantallas pequeñas".
					<CodeBlock
						language="css"
						codeString={`/* Estilos base para escritorio */
.contenedor {
  width: 900px;
}

/* Si la pantalla es de 600px o menos, aplica esto */
@media (max-width: 600px) {
  .contenedor {
    width: 100%;
  }
}`}
					/>
				</li>
				<li>
					<strong>
						<Code>min-width</Code> (Mobile-First):
					</strong>{" "}
					Los estilos se aplican si el ancho de la ventana es{" "}
					<strong>mayor o igual</strong> al valor especificado. Es como decir "a
					partir de este tamaño de pantalla".
					<CodeBlock
						language="css"
						codeString={`/* Estilos base para móvil */
.contenedor {
  width: 100%;
}

/* Si la pantalla es de 768px o más, aplica esto */
@media (min-width: 768px) {
  .contenedor {
    width: 750px;
  }
}`}
					/>
				</li>
			</ul>
			<div className="p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4">
				<p className="font-semibold text-blue-800 dark:text-blue-300">
					Mobile-First es el Estándar Moderno
				</p>
				<p className="text-blue-700 dark:text-gray-300">
					Diseñar primero para pantallas pequeñas (móviles) y luego añadir
					complejidad para pantallas más grandes (usando <Code>min-width</Code>)
					es la práctica recomendada. Obliga a priorizar el contenido y suele
					resultar en un CSS más limpio y un mejor rendimiento en dispositivos
					móviles.
				</p>
			</div>
		</section>

		<section>
			<SectionTitle index={4}>
				Bento Grids en la Práctica: Un Ejemplo Guiado
			</SectionTitle>
			<p className="mb-4">
				Para finalizar este módulo, exploraremos una técnica de maquetación
				moderna y popular: la <strong>Bento Grid</strong>. Inspirada en las
				cajas de almuerzo japonesas, esta técnica organiza el contenido en una
				cuadrícula asimétrica que es visualmente atractiva y funcional. Es ideal
				para dashboards, portafolios y páginas de inicio. Usaremos CSS Grid,
				específicamente la propiedad <Code>grid-template-areas</Code>, para
				construir un layout responsivo.
			</p>
			<p className="mb-4">
				Construiremos una estructura de layout como la que se muestra en el
				popular artículo de freeCodeCamp:
			</p>
			<img
				src="/conf18/desktop-design-to-recreate.webp"
				alt="Ejemplo de una grilla bento con contenido"
				className="rounded-lg border my-4 mx-auto block max-w-full"
			/>

			<Subhead>Paso 1: La Estructura HTML</Subhead>
			<p className="mb-4">
				La base es un contenedor principal (
				<Code>&lt;div class="grid"&gt;</Code>) y varios elementos hijos (
				<Code>&lt;div class="item"&gt;</Code>) que serán las celdas de nuestra
				cuadrícula.
			</p>
			<CodeBlock
				language="html"
				codeString={`<div class="grid">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>`}
			/>

			<Subhead>Paso 2: Definiendo la Cuadrícula y las Áreas</Subhead>
			<p className="mb-4">
				Utilizamos <Code>display: grid</Code> para crear la cuadrícula y{" "}
				<Code>grid-template-areas</Code> para nombrar las áreas y definir su
				posición. Cada string representa una fila, y cada nombre un área de la
				cuadrícula. Arrancamos con una sola columna: la base mobile-first.
			</p>
			<CodeBlock
				language="css"
				codeString={`.grid {
  background: hsl(36, 100%, 99%);
  margin: 0 auto;
  width: 100%;
  max-width: 1500px;
  height: 1000px;
  padding: 1vw;
  display: grid;
  gap: 1.5vw;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "hero"
    "aside2"
    "aside3"
    "aside4"
    "aside5";
}`}
			/>

			<Subhead>Paso 3: Asignando los Items a las Áreas</Subhead>
			<p className="mb-4">
				Finalmente, asignamos cada item a su área correspondiente usando la
				propiedad <Code>grid-area</Code>. Usamos la pseudo-clase{" "}
				<Code>:nth-child</Code> para apuntar a cada item en orden.
			</p>
			<CodeBlock
				language="css"
				codeString={`.item {
  border: 2px solid #464545;
  border-radius: 5px;
}

.grid .item:nth-child(1) { grid-area: hero; }
.grid .item:nth-child(2) { grid-area: aside2; }
.grid .item:nth-child(3) { grid-area: aside3; }
.grid .item:nth-child(4) { grid-area: aside4; }
.grid .item:nth-child(5) { grid-area: aside5; }`}
			/>
			<p className="mt-4">
				Con esto, hemos logrado la estructura base de nuestro layout.
			</p>

			<Subhead>Paso 4: Añadiendo Responsividad con Media Queries</Subhead>
			<p className="mb-4">
				La gran ventaja de <Code>grid-template-areas</Code> es que reorganizar
				el layout para diferentes tamaños de pantalla es tan simple como
				redefinir el string de las áreas.
			</p>
			<CodeBlock
				language="css"
				codeString={`/* Para pantallas de tableta */
@media screen and (min-width: 750px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "hero   hero   hero   hero"
      "hero   hero   hero   hero"
      "aside2 aside2 aside2 aside3"
      "aside4 aside4 aside5 aside5";
  }
}

/* Para pantallas grandes (PC) */
@media screen and (min-width: 1000px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "hero   hero   aside2"
      "hero   hero   aside2"
      "hero   hero   aside2"
      "hero   hero   aside2"
      "aside3 aside4 aside5";
  }
}`}
			/>

			<Subhead>Resultado Final Interactivo</Subhead>
			<p className="mb-4">
				Aquí puedes ver el resultado final. Redimensiona el navegador para
				observar cómo la cuadrícula pasa de una columna (base móvil) a la
				tableta desde <Code>750px</Code> y al escritorio desde{" "}
				<Code>1000px</Code>, exactamente las media queries de los pasos.
			</p>

			<div className="mb-4">
				<Preview label="Vista previa · mismo grid-template-areas y breakpoints que los pasos">
					<style>{`.d18-grid {
  /* Versión compacta del layout final: mismas áreas y media queries
     que los pasos 2-4; solo cambian las medidas del contenedor (px). */
  background: hsl(36, 100%, 99%);
  color: #1f2937;
  width: 100%;
  padding: 10px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "hero"
    "aside2"
    "aside3"
    "aside4"
    "aside5";
}
.d18-item {
  border: 2px solid #464545;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  background-color: #fdf6ec;
  min-height: 64px;
}
.d18-grid .d18-item:nth-child(1) { grid-area: hero; }
.d18-grid .d18-item:nth-child(2) { grid-area: aside2; }
.d18-grid .d18-item:nth-child(3) { grid-area: aside3; }
.d18-grid .d18-item:nth-child(4) { grid-area: aside4; }
.d18-grid .d18-item:nth-child(5) { grid-area: aside5; }

@media screen and (min-width: 750px) {
  .d18-grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "hero   hero   hero   hero"
      "hero   hero   hero   hero"
      "aside2 aside2 aside2 aside3"
      "aside4 aside4 aside5 aside5";
  }
}

@media screen and (min-width: 1000px) {
  .d18-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "hero   hero   aside2"
      "hero   hero   aside2"
      "hero   hero   aside2"
      "hero   hero   aside2"
      "aside3 aside4 aside5";
  }
}`}</style>
					<div className="d18-grid">
						<div className="d18-item">Hero</div>
						<div className="d18-item">Aside 2</div>
						<div className="d18-item">Aside 3</div>
						<div className="d18-item">Aside 4</div>
						<div className="d18-item">Aside 5</div>
					</div>
					<p className="mt-2 text-sm">
						En móvil (base) se apilan; desde <Code>750px</Code> la tableta
						comparte filas entre <Code>hero</Code> y los asides, y desde{" "}
						<Code>1000px</Code> el escritorio juega el clásico <Code>hero</Code>{" "}
						doble + columna lateral.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- El layout final del ejercicio: base mobile-first + media queries de los pasos -->
<div class="grid">
  <div class="item">Hero</div>
  <div class="item">Aside 2</div>
  <div class="item">Aside 3</div>
  <div class="item">Aside 4</div>
  <div class="item">Aside 5</div>
</div>`}
				css={`.grid {
  background: hsl(36, 100%, 99%); /* base pura de mobile-first */
  color: #1f2937;
  padding: 10px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "hero"
    "aside2"
    "aside3"
    "aside4"
    "aside5";
}
.item {
  border: 2px solid #464545;
  border-radius: 5px;
  display: flex; align-items: center; justify-content: center;
  font-family: sans-serif; font-size: 0.9rem; font-weight: bold;
  background-color: #fdf6ec;
  min-height: 64px;
}
.grid .item:nth-child(1) { grid-area: hero; }
.grid .item:nth-child(2) { grid-area: aside2; }
.grid .item:nth-child(3) { grid-area: aside3; }
.grid .item:nth-child(4) { grid-area: aside4; }
.grid .item:nth-child(5) { grid-area: aside5; }

@media screen and (min-width: 750px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "hero   hero   hero   hero"
      "hero   hero   hero   hero"
      "aside2 aside2 aside2 aside3"
      "aside4 aside4 aside5 aside5";
  }
}

@media screen and (min-width: 1000px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "hero   hero   aside2"
      "hero   hero   aside2"
      "hero   hero   aside2"
      "hero   hero   aside2"
      "aside3 aside4 aside5";
  }
}`}
			/>
		</section>

		<section>
			<SectionTitle index={5}>📝 Tarea: Haz Responsiva tu Galería</SectionTitle>
			<p className="mb-4">
				Vamos a tomar un layout simple de tarjetas y hacerlo responsivo usando
				el enfoque Mobile-First.
			</p>
			<ol className="list-decimal list-outside space-y-2 pl-5 mb-4 marker:font-bold marker:text-blue-600 dark:marker:text-blue-400">
				<li>
					<strong>HTML:</strong> Crea un <Code>div</Code> contenedor que
					envuelva varias tarjetas (puedes usar las de la lección anterior).
				</li>
				<li>
					<strong>CSS (Mobile-First):</strong>
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							Estiliza tus tarjetas para que por defecto se muestren una debajo
							de la otra, ocupando la mayor parte del ancho disponible. Este
							será tu diseño para pantallas pequeñas.
						</li>
					</ul>
				</li>
				<li>
					<strong>CSS (Media Query):</strong>
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							Elige un "breakpoint" (un punto de ruptura), por ejemplo,{" "}
							<Code>768px</Code>.
						</li>
						<li>
							Crea una media query:{" "}
							<Code>@media (min-width: 768px) {"{ ... }"}</Code>.
						</li>
						<li>
							Dentro de esta media query, cambia los estilos del contenedor de
							las tarjetas para que se muestren en una cuadrícula. Por ejemplo,
							puedes usar{" "}
							<Code>display: grid; grid-template-columns: 1fr 1fr;</Code> para
							crear una cuadrícula de dos columnas.
						</li>
						<li>
							(Opcional) Añade otro breakpoint para pantallas más grandes (ej.{" "}
							<Code>1024px</Code>) y cambia la cuadrícula a tres columnas (
							<Code>grid-template-columns: 1fr 1fr 1fr;</Code>).
						</li>
					</ul>
				</li>
				<li>
					Abre tu página en el navegador y redimensiona la ventana. Deberías ver
					cómo el layout cambia de una columna a dos (y luego a tres) a medida
					que la pantalla se hace más ancha.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture18Es;
