import { SectionTitle } from "@/components/lecture/lecture-blocks";
import CodeBlock from "@/components/ui/code-block";
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

const Subhead = ({ children }: { children: React.ReactNode }) => (
	<p className="mt-8 mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
		<span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden />
		<span>{children}</span>
	</p>
);

const Lecture15Es = () => (
	<div className="space-y-8">
		<section>
			<SectionTitle index={1}>Pintando la Web: Formatos de Color</SectionTitle>
			<p className="mb-4">
				El color es una de las herramientas de diseño más poderosas. CSS nos
				ofrece varias formas de definir colores, cada una con sus ventajas.
			</p>
			<ul className="list-none space-y-4 pl-0 mb-4 [&>li]:relative [&>li]:pl-7 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.5em] [&>li]:before:h-2.5 [&>li]:before:w-2.5 [&>li]:before:rounded-full [&>li]:before:bg-blue-500">
				<li>
					<strong>
						Hexadecimal (<Code>#RRGGBB</Code>):
					</strong>{" "}
					El formato más común. Representa los valores de Rojo, Verde y Azul en
					base 16. También existe una sintaxis corta (<Code>#RGB</Code>).
					<CodeBlock
						language="css"
						codeString={`/* Rojo puro */
color: #FF0000;
/* Azul, forma corta */
color: #00F;`}
					/>
				</li>
				<li>
					<strong>
						RGB / RGBA (<Code>rgb(r, g, b)</Code>):
					</strong>{" "}
					Representa los colores usando valores decimales de 0 a 255. La versión{" "}
					<Code>rgba</Code> añade un cuarto valor, el canal{" "}
					<strong>alfa (transparencia)</strong>, que va de 0 (totalmente
					transparente) a 1 (totalmente opaco).
					<CodeBlock
						language="css"
						codeString={`/* Verde puro */
color: rgb(0, 255, 0);
/* Negro semi-transparente */
background-color: rgba(0, 0, 0, 0.5);`}
					/>
				</li>
				<li>
					<strong>
						HSL / HSLA (<Code>hsl(h, s, l)</Code>):
					</strong>{" "}
					Un formato más intuitivo para los humanos. Representa el color por su{" "}
					<strong>Tono (Hue)</strong> (un ángulo de 0 a 360 en el círculo
					cromático), <strong>Saturación (Saturation)</strong> (0-100%) y{" "}
					<strong>Luminosidad (Lightness)</strong> (0-100%). <Code>hsla</Code>{" "}
					añade el canal alfa.
					<CodeBlock
						language="css"
						codeString={`/* Un azul vibrante */
color: hsl(240, 100%, 50%);
/* Un magenta semi-transparente */
background-color: hsla(300, 100%, 50%, 0.75);`}
					/>
				</li>
			</ul>

			<div className="mb-4">
				<Preview label="Vista previa · el mismo color en tres formatos y la alfa en acción">
					<style>{`.d15-lienzo {
  background-color: gold; padding: 12px; border-radius: 10px;
  display: flex; flex-wrap: wrap; gap: 12px; color: #1f2937;
}
.d15-muestra {
  display: inline-block; padding: 8px 12px; border-radius: 10px;
  font-family: monospace; font-size: 0.85rem; color: white;
}
.d15-hex { background-color: #FF0000; }
.d15-rgb { background-color: rgb(0, 255, 0); }
.d15-hsl { background-color: hsl(240, 100%, 50%); }
.d15-alfa { background-color: rgba(0, 0, 0, 0.5); color: white; }`}</style>
					<div className="d15-lienzo">
						<div className="d15-muestra d15-hex">#FF0000 (hex)</div>
						<div className="d15-muestra d15-rgb">rgb(0, 255, 0)</div>
						<div className="d15-muestra d15-hsl">hsl(240, 100%, 50%)</div>
						<div className="d15-muestra d15-alfa">rgba(0, 0, 0, 0.5)</div>
					</div>
					<p className="mt-2 text-sm">
						Las tres primeras fichas usan el mismo tono escrito en hex, rgb y
						hsl. La ficha oscura es negro rgba con alfa 0.5: frente al lienzo
						dorado se nota que deja ver el fondo detrás.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- Cuatro fichas sobre un lienzo dorado para notar la transparencia -->
<div class="lienzo">
  <div class="muestra muestra-hex">#FF0000 (hex)</div>
  <div class="muestra muestra-rgb">rgb(0, 255, 0)</div>
  <div class="muestra muestra-hsl">hsl(240, 100%, 50%)</div>
  <div class="muestra muestra-alfa">rgba(0, 0, 0, 0.5)</div>
</div>`}
				css={`.lienzo {
  background-color: gold; /* dorado: deja ver la alfa detrás */
  padding: 12px;
  border-radius: 10px;
  display: flex; /* pone las fichas en fila */
  flex-wrap: wrap;
  gap: 12px;
  color: #1f2937;
}
.muestra {
  display: inline-block; /* scaffolding para que el ejemplo se vea */
  padding: 8px 12px;
  border-radius: 10px;
  font-family: monospace;
  font-size: 0.85rem;
  color: white;
}
.muestra-hex { background-color: #FF0000; }
.muestra-rgb { background-color: rgb(0, 255, 0); }
.muestra-hsl { background-color: hsl(240, 100%, 50%); }
.muestra-alfa { background-color: rgba(0, 0, 0, 0.5); color: white; }`}
			/>
		</section>

		<section>
			<SectionTitle index={2}>
				Unidades de Medida: Absolutas vs. Relativas
			</SectionTitle>
			<p className="mb-4">
				Elegir la unidad de medida correcta es fundamental para crear diseños
				flexibles y accesibles.
			</p>

			<Subhead>Unidades Absolutas</Subhead>
			<p className="mb-4">
				Tienen un tamaño fijo y no cambian. La más común es el{" "}
				<strong>
					píxel (<Code>px</Code>)
				</strong>
				. Son útiles para elementos que no deben escalar, como un borde de{" "}
				<Code>1px</Code>.
			</p>

			<Subhead>Unidades Relativas</Subhead>
			<p className="mb-4">
				Su tamaño se calcula en relación a otro valor, lo que las hace ideales
				para diseños responsivos y accesibles.
			</p>
			<ul className="list-none space-y-4 pl-0 mb-4 [&>li]:relative [&>li]:pl-7 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.5em] [&>li]:before:h-2.5 [&>li]:before:w-2.5 [&>li]:before:rounded-full [&>li]:before:bg-blue-500">
				<li>
					<strong>
						<Code>%</Code> (Porcentaje):
					</strong>{" "}
					Relativo al tamaño del elemento padre. <Code>width: 50%;</Code> hará
					que un elemento ocupe la mitad del ancho de su contenedor.
				</li>
				<li>
					<strong>
						<Code>em</Code>
					</strong>
					: Relativo al <strong>tamaño de fuente del elemento padre</strong>. Si
					un div tiene
					<Code>font-size: 16px;</Code>, un <Code>p</Code> dentro con{" "}
					<Code>font-size: 1.2em;</Code> tendrá 19.2px. Puede ser complicado de
					gestionar si hay mucho anidamiento.
				</li>
				<li>
					<strong>
						<Code>rem</Code> (Root EM):
					</strong>{" "}
					La mejor opción para la tipografía. Es relativo al{" "}
					<strong>
						tamaño de fuente del elemento raíz (<Code>&lt;html&gt;</Code>)
					</strong>
					. Por defecto, en la mayoría de navegadores es <Code>16px</Code>. Si
					un usuario cambia el tamaño de fuente en su navegador por
					accesibilidad, todos los tamaños en <Code>rem</Code> escalarán
					proporcionalmente.
					<CodeBlock
						language="css"
						codeString={`html {
  font-size: 16px; /* 1rem = 16px */
}
h1 {
  font-size: 2rem; /* 32px */
}
p {
  font-size: 1rem; /* 16px */
  padding: 1.5rem; /* 24px */
}`}
					/>
				</li>
				<li>
					<strong>
						<Code>vw</Code> / <Code>vh</Code> (Viewport Width / Height):
					</strong>{" "}
					Relativas al tamaño de la ventana del navegador. <Code>1vw</Code> es
					el 1% del ancho de la ventana. Son perfectas para crear secciones que
					ocupen toda la pantalla (<Code>height: 100vh;</Code>).
				</li>
			</ul>

			<div className="mb-4">
				<Preview label="Vista previa · 50% depende del contenedor, rem depende de la raíz">
					<style>{`.d15-contenedor {
  border: 2px dashed #f59e0b; background-color: #fffbeb;
  padding: 10px; color: #1f2937;
}
.d15-caja-porcentaje {
  width: 50%; background-color: #dbeafe; border: 1px solid #3b82f6;
  padding: 8px;
}
.d15-texto-rem {
  font-size: 1.5rem; border: 1px solid #9ca3af; padding: 4px 8px;
}`}</style>
					<div className="d15-contenedor">
						<div className="d15-caja-porcentaje">
							Caja: width 50% de mi contenedor
						</div>
						<p className="d15-texto-rem mt-2">
							Texto en 1.5rem con borde de 1px
						</p>
						<p className="mt-1 text-sm">
							El 50% es la mitad de este contenedor (no de la pantalla). El
							texto usa 1.5rem (escala si la raíz cambia) pero su borde de 1px
							es absoluto: esa mezcla de unidades es común y útil.
						</p>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- El contenedor amarillo es el padre: el 50% se reparte sobre su ancho -->
<div class="contenedor">
  <div class="caja-porcentaje">Caja: width 50% de mi contenedor</div>
  <p class="texto-rem">Texto en 1.5rem con borde de 1px</p>
</div>`}
				css={`.contenedor {
  border: 2px dashed #f59e0b; /* la referencia visual del padre */
  background-color: #fffbeb;
  padding: 10px;
  color: #1f2937;
}
.caja-porcentaje {
  width: 50%; /* mitad del ancho del contenedor */
  background-color: #dbeafe;
  border: 1px solid #3b82f6;
  padding: 8px;
}
.texto-rem {
  font-size: 1.5rem; /* 24px con la raíz en 16px */
  border: 1px solid #9ca3af; /* px: absoluto, no escala */
  padding: 4px 8px;
}`}
			/>
		</section>

		<section>
			<SectionTitle index={3}>
				Variables CSS (Propiedades Personalizadas)
			</SectionTitle>
			<p className="mb-4">
				Las variables CSS son una de las características más potentes y
				modernas. Nos permiten definir valores reutilizables en un solo lugar,
				lo que simplifica enormemente el mantenimiento y la creación de temas.
			</p>
			<p>
				Se declaran con dos guiones (<Code>--nombre-variable</Code>) y se usan
				con la función <Code>var()</Code>. Es una buena práctica declararlas en
				el pseudo-selector
				<Code>:root</Code>, que representa el elemento <Code>&lt;html&gt;</Code>
				, para que estén disponibles globalmente.
			</p>

			<div className="mb-4">
				<Preview label="Vista previa · una tarjeta vestida con variables de :root">
					<style>{`.d15-demo {
  --color-primario: #3498db;
  --color-texto: #333333;
  --fuente-principal: Helvetica, sans-serif;
  color: var(--color-texto);
  font-family: var(--fuente-principal);
}
.d15-tarjeta {
  background-color: white; border: 1px solid #d1d5db;
  border-radius: 10px; padding: 1.5rem;
}
.d15-tarjeta-titulo { font-size: 1.25rem; font-weight: bold; margin-bottom: 8px; }
.d15-tarjeta-texto { margin-bottom: 12px; }
.d15-boton-principal {
  background-color: var(--color-primario); color: white;
  border: none; padding: 8px 14px; border-radius: 6px; font-size: 0.9rem;
}`}</style>
					<div className="d15-demo">
						<div className="d15-tarjeta">
							<p className="d15-tarjeta-titulo">Paleta de estilo</p>
							<p className="d15-tarjeta-texto">
								El título, el texto y el botón toman sus valores de las
								variables de <Code>:root</Code>: cambiarlas ahí retoca todo a la
								vez.
							</p>
							<button className="d15-boton-principal" type="button">
								Botón principal
							</button>
						</div>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- El body hereda color y fuente de las variables; la tarjeta vestida -->
<div class="tarjeta">
  <p class="tarjeta-titulo">Paleta de estilo</p>
  <p class="tarjeta-texto">El título, el texto y el botón toman sus valores de las variables de <code>:root</code>: cambiarlas ahí retoca todo a la vez.</p>
  <button class="boton-principal" type="button">Botón principal</button>
</div>`}
				css={`:root {
  --color-primario: #3498db;
  --color-texto: #333;
  --fuente-principal: 'Helvetica', sans-serif;
}

body {
  color: var(--color-texto);
  font-family: var(--fuente-principal);
}

.tarjeta { /* scaffolding para que el ejemplo se vea */
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 1.5rem;
}
.tarjeta-titulo { font-size: 1.25rem; font-weight: bold; margin-bottom: 8px; }
.tarjeta-texto { margin-bottom: 12px; }

.boton-principal {
  background-color: var(--color-primario);
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
}`}
			/>
		</section>

		<section>
			<SectionTitle index={4}>
				📝 Tarea: Creando una Paleta de Estilo
			</SectionTitle>
			<p className="mb-4">
				Vamos a aplicar estos conceptos para crear una pequeña guía de estilo
				para una página.
			</p>
			<ol className="list-decimal list-outside space-y-2 pl-5 mb-4 marker:font-bold marker:text-blue-600 dark:marker:text-blue-400">
				<li>
					<strong>Define tus Variables:</strong> En tu archivo CSS, dentro del
					selector <Code>:root</Code>, crea al menos 4 variables:{" "}
					<Code>--color-primario</Code>,<Code>--color-fondo</Code>,{" "}
					<Code>--color-texto</Code> y <Code>--espaciado-base</Code> (ej.{" "}
					<Code>1rem</Code>).
				</li>
				<li>
					<strong>Aplica las Variables:</strong>
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							En el <Code>body</Code>, usa las variables para definir el
							<Code>background-color</Code>, <Code>color</Code> y{" "}
							<Code>font-family</Code>.
						</li>
						<li>
							Crea un botón con la clase <Code>.boton</Code> y usa{" "}
							<Code>--color-primario</Code> para su fondo y <Code>white</Code>{" "}
							para el texto.
						</li>
					</ul>
				</li>
				<li>
					<strong>Usa Unidades Relativas:</strong>
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							Establece el <Code>font-size</Code> del <Code>&lt;html&gt;</Code>{" "}
							a <Code>100%</Code> (o déjalo por defecto).
						</li>
						<li>
							Define el <Code>font-size</Code> de tus encabezados (
							<Code>h1</Code>) y párrafos (<Code>p</Code>) usando{" "}
							<Code>rem</Code>.
						</li>
						<li>
							Usa tu variable <Code>--espaciado-base</Code> para el{" "}
							<Code>padding</Code> del botón y el <Code>margin-bottom</Code> de
							los párrafos.
						</li>
					</ul>
				</li>
				<li>
					<strong>Experimenta:</strong> Abre las herramientas de desarrollador
					en tu navegador, selecciona el elemento <Code>&lt;html&gt;</Code> y
					cambia su
					<Code>font-size</Code>. Observa cómo todo el texto y los espaciados
					que usan
					<Code>rem</Code> se escalan juntos de manera fluida.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture15Es;
