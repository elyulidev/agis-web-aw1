import { LifeBuoy, MoveHorizontal, Rows3, Sparkles, Timer } from "lucide-react";
import {
	Callout,
	ConceptCard,
	SectionTitle,
} from "@/components/lecture/lecture-blocks";
import CodeTabs from "@/components/ui/code-tabs";

const Code = ({ children }: { children: React.ReactNode }) => (
	<code className="rounded-md bg-gray-200 px-1.5 py-1 font-mono text-sm text-pink-600 dark:bg-gray-700 dark:text-pink-400">
		{children}
	</code>
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

const Lecture13Es = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Módulo 3 · box model y posicionamiento
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Ayer cerramos la caja por dentro. Hoy la caja convive con sus vecinos:
				márgenes, el misterio del colapso, el centrado y el <em>display</em>.
			</p>
		</section>

		<section>
			<SectionTitle index={1}>Margen (Margin): Espacio Exterior</SectionTitle>
			<p className="mb-4">
				Hemos cubierto las tres capas internas del modelo de caja. La última
				capa es el <strong>margen (margin)</strong>, que es el espacio{" "}
				<em>fuera</em> del borde. El margen es transparente y se usa para crear
				espacio entre un elemento y sus vecinos.
			</p>
			<p className="mb-4">
				La sintaxis para los márgenes es idéntica a la del padding, con
				propiedades individuales (<Code>margin-top</Code>, etc.) y atajos
				(shorthands).
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · el contorno naranja marca el borde: todo el aire alrededor es margen">
					<style>{`.d13-marcada { margin: 20px 15px 30px; outline: 1px dashed #f97316; }`}</style>
					<div className="d13-marcada dark:text-gray-900 bg-blue-50 border border-blue-200 p-2 text-sm">
						20px de espacio arriba, 15px a los lados, 30px abajo.
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="elemento">
  20px de espacio arriba, 15px a los lados, 30px abajo.
</div>`}
				css={`.elemento {
  /* 20px de espacio arriba, 15px a los lados, 30px abajo */
  margin: 20px 15px 30px;
}

/* Scaffolding para que el ejemplo se vea: */
.elemento {
  background-color: #eff6ff;
  border: 1px solid #bfdbfe;
  padding: 8px;
}`}
			/>
		</section>

		<section>
			<SectionTitle index={2}>El Misterio del Colapso de Márgenes</SectionTitle>
			<p className="mb-4">
				Los márgenes tienen un comportamiento único llamado{" "}
				<strong>colapso de márgenes (margin collapsing)</strong>. Cuando dos
				elementos de bloque con márgenes verticales están uno encima del otro,
				sus márgenes no se suman. En su lugar, el margen más grande "gana" y el
				más pequeño "colapsa" o desaparece.
			</p>
			<p className="mb-4">
				Esto solo ocurre con los márgenes verticales (<Code>margin-top</Code> y{" "}
				<Code>margin-bottom</Code>), no con los horizontales.
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · el hueco es 30px, no 50px">
					<style>{`.d13-sub { background-color: #dbeafe; border: 1px solid #93c5fd; padding: 8px; font-size: 0.9rem; color: #1f2937; }
.d13-sub-arriba { margin-bottom: 30px; }
.d13-sub-abajo { margin-top: 20px; }`}</style>
					<div>
						<div className="d13-sub d13-sub-arriba">
							Caja superior: margin-bottom: 30px
						</div>
						<div className="d13-sub d13-sub-abajo">
							Caja inferior: margin-top: 20px
						</div>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="caja-arriba">Caja superior: margin-bottom: 30px</div>
<div class="caja-abajo">Caja inferior: margin-top: 20px</div>`}
				css={`.caja-arriba {
  margin-bottom: 30px;
}
.caja-abajo { margin-top: 20px; }

/* Scaffolding para que el ejemplo se vea: */
.caja-arriba,
.caja-abajo {
  background-color: #dbeafe;
  border: 1px solid #93c5fd;
  padding: 8px;
  font-size: 0.9rem;
}

/* El espacio entre las dos cajas será de 30px, no de 50px */`}
			/>
		</section>

		<section>
			<SectionTitle index={3}>Centrado Horizontal: `margin: auto`</SectionTitle>
			<p className="mb-4">
				Una de las técnicas más comunes y esenciales en CSS es centrar un
				elemento de bloque horizontalmente dentro de su contenedor. Esto se
				logra fácilmente dándole al elemento un ancho definido y estableciendo
				sus márgenes izquierdo y derecho en <Code>auto</Code>.
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · el bloque se centra con margin: 0 auto">
					<style>{`.d13-centrada {
  width: 80%;
  background-color: #dcfce7;
  border: 1px solid #86efac;
  padding: 8px;
  color: #1f2937;
  margin: 0 auto; /* auto a los lados reparte el espacio disponible */
}`}</style>
					<div className="d13-centrada text-sm">
						Tengo el ancho definido y los márgenes sobrantes me llevan al
						centro.
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="contenedor-centrado">
  Tengo el ancho definido y los márgenes sobrantes me llevan al centro.
</div>`}
				css={`.contenedor-centrado {
  width: 80%; /* Debe tener un ancho definido que no sea 100% */
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

/* Scaffolding para que el ejemplo se vea: */
.contenedor-centrado {
  background-color: #dcfce7;
  border: 1px solid #86efac;
  padding: 8px;
}

/* Atajo (shorthand) para lo mismo */
.contenedor-centrado-atajo {
  width: 80%;
  max-width: 900px;
  margin: 0 auto; /* 0 para arriba/abajo, auto para izquierda/derecha */
  background-color: #dcfce7;
  border: 1px solid #86efac;
  padding: 8px;
}`}
			/>
		</section>

		<section>
			<SectionTitle index={4}>
				La Propiedad `display`: El Comportamiento del Elemento
			</SectionTitle>
			<p className="mb-4">
				La propiedad <Code>display</Code> es una de las más importantes de CSS.
				Define cómo se renderiza un elemento y cómo interactúa con los demás.
				Los valores más fundamentales son:
			</p>
			<div className="mb-4 grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Rows3 className="h-5 w-5" aria-hidden />}
					title="display: block"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					<ul className="list-disc list-inside space-y-1">
						<li>Empieza en una nueva línea.</li>
						<li>Ocupa todo el ancho disponible por defecto.</li>
						<li>
							Respeta las propiedades <Code>width</Code>, <Code>height</Code>,{" "}
							<Code>margin</Code>, <Code>padding</Code> y <Code>border</Code>.
						</li>
						<li>
							Ejemplos: <Code>&lt;div&gt;</Code>, <Code>&lt;p&gt;</Code>,{" "}
							<Code>&lt;h1&gt;</Code>-<Code>&lt;h6&gt;</Code>,{" "}
							<Code>&lt;ul&gt;</Code>, <Code>&lt;li&gt;</Code>.
						</li>
					</ul>
				</ConceptCard>
				<ConceptCard
					icon={<MoveHorizontal className="h-5 w-5" aria-hidden />}
					title="display: inline"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					<ul className="list-disc list-inside space-y-1">
						<li>No empieza en una nueva línea; fluye con el texto.</li>
						<li>Ocupa solo el ancho de su contenido.</li>
						<li>
							<strong>Ignora</strong> <Code>width</Code> y <Code>height</Code>.
							Los márgenes y paddings verticales tienen un efecto limitado.
						</li>
						<li>
							Ejemplos: <Code>&lt;span&gt;</Code>, <Code>&lt;a&gt;</Code>,{" "}
							<Code>&lt;strong&gt;</Code>, <Code>&lt;em&gt;</Code>.
						</li>
					</ul>
				</ConceptCard>
				<ConceptCard
					icon={<LifeBuoy className="h-5 w-5" aria-hidden />}
					title="display: inline-block"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					<ul className="list-disc list-inside space-y-1">
						<li>
							Lo mejor de ambos mundos: se comporta como un elemento{" "}
							<Code>inline</Code> (no empieza en una nueva línea) pero respeta{" "}
							<Code>width</Code>, <Code>height</Code>, <Code>margin</Code> y{" "}
							<Code>padding</Code> como un elemento <Code>block</Code>.
						</li>
						<li>
							Muy útil para crear elementos de navegación o botones que deben
							estar uno al lado del otro pero con dimensiones específicas.
						</li>
					</ul>
				</ConceptCard>
				<ConceptCard
					icon={<Timer className="h-5 w-5" aria-hidden />}
					title="display: none"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					<ul className="list-disc list-inside space-y-1">
						<li>
							Elimina completamente el elemento de la página. No ocupa espacio y
							es como si no existiera en el HTML.
						</li>
						<li>
							Diferencia clave con <Code>visibility: hidden;</Code>, que oculta
							el elemento pero este sigue ocupando su espacio en el layout.
						</li>
					</ul>
				</ConceptCard>
			</div>
			<div className="mb-4">
				<Preview label="Vista previa · un inline aplasta su padding vertical; un inline-block no">
					<style>{`.d13-categoria {
  padding: 6px 12px;
  background-color: gold;
  border-radius: 999px;
  color: #1f2937;
}
.d13-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #2e86c1;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}`}</style>
					<div className="text-sm">
						<p>
							Un <span className="d13-categoria">tutorial</span> con padding
							vertical: la etiqueta se pisa sobre las líneas vecinas.
						</p>
						<a href="#ler-mais" className="d13-btn">
							Leer más
						</a>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<article>
  <p>
    Un <span class="categoria">tutorial</span> para principiantes.
  </p>
  <a class="btn-leer-mas" href="#">Leer más</a>
</article>`}
				css={`/* Un <span> es inline por defecto: el padding vertical "se pisa" */
.categoria {
  padding: 6px 12px;
  background-color: gold;
  border-radius: 999px;
  /* display: inline-block;  ← descomenta y mira cómo ahora sí respeta el espacio */
}

/* El botón sí necesita inline-block para aceptar padding y márgenes */
.btn-leer-mas {
  display: inline-block;
  padding: 10px 20px;
  background-color: #2e86c1;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}`}
			/>
		</section>

		<section>
			<SectionTitle index={5}>📝 Tarea: Maquetando un Blog Simple</SectionTitle>
			<p className="mb-4">
				Vamos a aplicar estos conceptos para crear la estructura de una página
				de blog.
			</p>
			<p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
				Partimos de este HTML y este esqueleto de CSS; después completa donde te
				lo pidan los pasos:
			</p>
			<CodeTabs
				html={`<div class="pagina-wrapper">
  <header>Mi blog</header>
  <main>
    <article>
      <h2>Título del artículo</h2>
      <p>
        Publicado en <span class="categoria">tutorial</span>
      </p>
      <a class="btn-leer-mas" href="#">Leer más</a>
    </article>
    <article>
      <!-- Crea más artículos -->
    </article>
  </main>
  <footer>Pie de página</footer>
</div>`}
				css={`/* Centra el wrapper en la página */
.pagina-wrapper {
  /* width: 90%; */
  /* max-width: 1000px; */
  /* margin: 0 auto; */
}

/* Separa los artículos verticalmente */
article {
  /* margin-bottom: 24px; */
}

/* La etiqueta de categoría: primero inline, luego inline-block */
.categoria {
  /* padding: 6px 12px; */
  /* background-color: gold; */
  /* border-radius: 999px; */
}

/* El botón "Leer más" */
.btn-leer-mas {
  /* display: inline-block; */
  /* padding: 10px 20px; */
}`}
			/>
			<ol className="list-decimal list-inside space-y-2 pl-4 mb-4 mt-4">
				<li>
					<strong>HTML:</strong> Ya tienes el <Code>&lt;div&gt;</Code> con la
					clase <Code>pagina-wrapper</Code>, un
					<Code>&lt;header&gt;</Code>, un <Code>&lt;main&gt;</Code> y un{" "}
					<Code>&lt;footer&gt;</Code>, con varios <Code>&lt;article&gt;</Code>{" "}
					dentro del <Code>&lt;main&gt;</Code>.
				</li>
				<li>
					<strong>CSS:</strong>
					<ul className="list-disc list-inside space-y-1 pl-6 my-2">
						<li>
							Dale al <Code>.pagina-wrapper</Code> un <Code>width</Code> (ej.{" "}
							<Code>90%</Code>) y un <Code>max-width</Code> (ej.{" "}
							<Code>1000px</Code>).
						</li>
						<li>
							Usa la técnica de <Code>margin: 0 auto;</Code> para centrar el{" "}
							<Code>.pagina-wrapper</Code> en la página.
						</li>
						<li>
							Dale a cada <Code>&lt;article&gt;</Code> un{" "}
							<Code>margin-bottom</Code> para separarlos verticalmente.
						</li>
						<li>
							Dentro de un <Code>&lt;article&gt;</Code>, añade un{" "}
							<Code>&lt;span&gt;</Code> con la clase <Code>categoria</Code>.
							Dale a esta clase un <Code>padding</Code>, un{" "}
							<Code>background-color</Code> y un <Code>border-radius</Code>.
							Observa cómo, al ser <Code>inline</Code> por defecto, el padding
							se comporta.
						</li>
						<li>
							Ahora, cambia el <Code>display</Code> de <Code>.categoria</Code> a{" "}
							<Code>inline-block</Code>. Observa cómo ahora respeta mejor el
							espacio.
						</li>
						<li>
							Finalmente, crea un botón de "Leer más" (<Code>&lt;a&gt;</Code>{" "}
							con una clase) y dale <Code>display: inline-block;</Code> para
							poder aplicarle padding y márgenes y que se alinee correctamente
							con el texto.
						</li>
					</ul>
				</li>
			</ol>
			<Callout variant="tip" title="Cierre">
				Al terminar, tienes una página centrada, artículos separados y botones
				con padding. Todo con solo margin y display: no se necesita flexbox ni
				nada parecido todavía.
			</Callout>
		</section>
	</div>
);

export default Lecture13Es;
