import { Box, Sparkles, Square } from "lucide-react";
import {
	Callout,
	ConceptCard,
	SectionTitle,
	Step,
} from "@/components/lecture/lecture-blocks";
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

const Lecture12Es = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Módulo 3 · box model y posicionamiento
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Hoy el navegador deja de ser magia: toda la página se desarma en
				rectángulos, y vas a poder calcular el tamaño de cada uno.
			</p>
		</section>

		<section>
			<SectionTitle index={1}>
				El Concepto Fundamental: Toda Caja es un Rectángulo
			</SectionTitle>
			<p className="mb-4">
				En CSS, todo lo que ves en una página es una caja rectangular. Un
				párrafo, una imagen, un encabezado, incluso toda la página. El{" "}
				<strong>Modelo de Caja (Box Model)</strong> es la regla que define cómo
				se calcula el tamaño de estas cajas y cómo interactúan entre sí.
			</p>
			<p className="mb-4">
				Cada caja se compone de cuatro partes, desde adentro hacia afuera:
			</p>
			<ol className="list-none space-y-3">
				<Step number={1} title="Contenido (Content)">
					El área donde se muestra tu texto, imágenes, etc.
				</Step>
				<Step number={2} title="Relleno (Padding)">
					Un espacio transparente alrededor del contenido, dentro del borde.
				</Step>
				<Step number={3} title="Borde (Border)">
					Una línea que rodea el padding y el contenido.
				</Step>
				<Step number={4} title="Margen (Margin)">
					Un espacio transparente fuera del borde, que separa la caja de otros
					elementos.
				</Step>
			</ol>
			<div className="mt-4 grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Box className="h-5 w-5" aria-hidden />}
					title="La caja desde adentro"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Content → Padding → Border: lo que la caja{" "}
					<strong>de dentro hacia afuera</strong> suma a su tamaño visible.
				</ConceptCard>
				<ConceptCard
					icon={<Square className="h-5 w-5" aria-hidden />}
					title="La caja hacia afuera"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Margin: lo que la caja <strong>empuja a los demás</strong>. No pinta
					nada, solo reserva espacio.
				</ConceptCard>
			</div>
		</section>

		<section>
			<SectionTitle index={2}>
				Dimensiones del Contenido: `width` y `height`
			</SectionTitle>
			<p className="mb-4">
				Estas propiedades controlan el tamaño del área de contenido.
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · una caja de 300×200">
					<style>{`.d12-caja-ancho { width: 300px; height: 200px; background-color: lightblue; color: #1f2937; }`}</style>
					<div className="d12-caja-ancho flex items-center justify-center text-sm">
						Soy la caja del ejemplo: 300px de ancho, 200px de alto.
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="caja">
  Soy la caja del ejemplo: 300px de ancho, 200px de alto.
</div>`}
				css={`.caja {
  width: 300px;
  height: 200px;
  background-color: lightblue;
}`}
			/>
			<Subhead>Min y max: límites en lugar de tamaños fijos</Subhead>
			<p className="mb-4">
				También puedes usar unidades relativas como porcentajes (<Code>%</Code>)
				o unidades de viewport (<Code>vw</Code>, <Code>vh</Code>). Además,
				existen propiedades para controlar las dimensiones de forma más
				flexible:
			</p>
			<ul className="list-disc list-inside space-y-2 pl-4 mb-4">
				<li>
					<strong>
						<Code>min-width</Code> / <Code>min-height</Code>
					</strong>
					: El tamaño mínimo que puede tener la caja.
				</li>
				<li>
					<strong>
						<Code>max-width</Code> / <Code>max-height</Code>
					</strong>
					: El tamaño máximo. <Code>max-width: 100%;</Code> es muy común para
					hacer que las imágenes sean responsivas.
				</li>
			</ul>
		</section>

		<section>
			<SectionTitle index={3}>Relleno (Padding): Espacio Interior</SectionTitle>
			<p className="mb-4">
				El padding es el espacio entre el contenido y el borde. Es como el
				margen de un libro. Se pueden definir los cuatro lados individualmente o
				con un atajo (shorthand).
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · el padding se ve y se siente">
					<style>{`.d12-caja-pad {
  padding: 10px 20px;
  background-color: lemonchiffon;
  border: 1px solid #999;
  color: #1f2937;
}`}</style>
					<div className="d12-caja-pad text-sm">
						Mi contenido respira 10px arriba, 20px a los lados y 10px abajo.
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="caja">
  Mi contenido respira 10px arriba, 20px a los lados y 10px abajo.
</div>`}
				css={`/* Lado por lado */
.caja {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}

/* Atajo (shorthand) - en el sentido de las agujas del reloj: Arriba, Derecha, Abajo, Izquierda */
.caja {
  /* 1 valor: padding: 20px; aplicaría a los cuatro lados (coméntalo para probarlo) */
  /* 2 valores: (arriba/abajo) (izquierda/derecha) */
  padding: 10px 20px;
}

/* Scaffolding para que el ejemplo se vea: */
.caja {
  background-color: lemonchiffon;
  border: 1px solid #999;
}`}
			/>
		</section>

		<section>
			<SectionTitle index={4}>Borde (Border): La Línea Exterior</SectionTitle>
			<p className="mb-4">
				El borde se define con tres propiedades principales: grosor, estilo y
				color.
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · tres estilos de borde">
					<style>{`.d12-tag-b { border: 2px solid #333; padding: 6px 10px; display: inline-block; margin: 2px; font-size: 0.85rem; }
.d12-tag-d { border: 2px dashed #333; padding: 6px 10px; display: inline-block; margin: 2px; font-size: 0.85rem; }
.d12-tag-dot { border: 2px dotted #333; padding: 6px 10px; display: inline-block; margin: 2px; font-size: 0.85rem; }`}</style>
					<div>
						<span className="d12-tag-b">solid</span>
						<span className="d12-tag-d">dashed</span>
						<span className="d12-tag-dot">dotted</span>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<span class="caja-solid">solid</span>
<span class="caja-dashed">dashed</span>
<span class="caja-dotted">dotted</span>`}
				css={`/* Atajo (shorthand): grosor, estilo y color en una línea */
.caja-solid,
.caja-dashed,
.caja-dotted {
  border: 2px solid #333;
  padding: 6px 10px;
  display: inline-block;
  margin: 2px;
  font-size: 0.85rem;
}

/* Solo cambia el estilo; el grosor y el color quedan */
.caja-dashed { border-style: dashed; }
.caja-dotted { border-style: dotted; } /* Otros: double, groove, ridge, etc. */`}
			/>
		</section>

		<section>
			<SectionTitle index={5}>El Dilema del Tamaño: `box-sizing`</SectionTitle>
			<p className="mb-4">
				Por defecto (<Code>box-sizing: content-box;</Code>), cuando defines un{" "}
				<Code>width: 300px;</Code>, ese es el ancho del{" "}
				<strong>contenido</strong>. El padding y el borde se suman a ese ancho,
				haciendo que el tamaño total de la caja sea mayor de 300px. Esto es muy
				poco intuitivo.
			</p>
			<p className="mb-4">
				La solución moderna es{" "}
				<strong>
					<Code>box-sizing: border-box;</Code>
				</strong>
				. Con este valor, el <Code>width</Code> que defines es el ancho total de
				la caja, incluyendo padding y borde. El navegador ajusta el espacio del
				contenido automáticamente.
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · misma declaración width, dos totales distintos">
					<style>{`.d12-cont, .d12-bor {
  width: 200px; padding: 20px; border: 4px solid #64748b; background-color: #e0f2fe; margin-bottom: 6px;
  color: #1f2937;
}
.d12-cont { box-sizing: content-box; } /* 200 + 20 + 20 + 4 + 4 = 248px */
.d12-bor { box-sizing: border-box; }  /* 200px en total, el navegador resta */`}</style>
					<div>
						<div className="d12-cont text-sm">content-box: total 248px</div>
						<div className="d12-bor text-sm">border-box: total 200px</div>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="dos-cajas">
  <div class="contenido">content-box: total 248px</div>
  <div class="bordered">border-box: total 200px</div>
</div>`}
				css={`/* Las dos tienen la MISMA declaración width... */
.contenido, .bordered {
  width: 200px;
  padding: 20px;
  border: 4px solid #64748b;
  background-color: #e0f2fe;
}

/* ...pero el modo del tamaño cambia el total */
.contenido {
  box-sizing: content-box; /* 200 + 40 + 8 = 248px */
}

.bordered {
  box-sizing: border-box; /* 200px, el navegador resta por dentro */
}`}
			/>
			<Callout variant="info" title="Práctica Recomendada Universal">
				Aplica <Code>border-box</Code> a todos los elementos al principio de tu
				CSS. Esto hace que el diseño de layouts sea increíblemente más fácil y
				predecible.
			</Callout>
			<CodeTabs
				css={`html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit; /* Todos los elementos heredan de html */
}`}
			/>
		</section>

		<section>
			<SectionTitle index={6}>
				📝 Tarea: Construye tu Tarjeta de Perfil
			</SectionTitle>
			<p className="mb-4">
				Vamos a crear un componente de tarjeta simple para poner en práctica el
				modelo de caja.
			</p>
			<p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
				Puedes arrancar con este HTML y esta hoja lista (copia y pega), y
				después completar el CSS donde te lo piden los pasos:
			</p>
			<CodeTabs
				html={`<div class="tarjeta-perfil">
  <h2>Ada Lovelace</h2>
  <p>Primera programadora de la historia.</p>
</div>`}
				css={`/* Paso 2: el reset de box-sizing para todos los elementos */
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

/* Paso 3: aplicale los estilos pedidos a la tarjeta */
.tarjeta-perfil {
  /* width: 300px; */
  /* padding: 20px; */
  /* border: 1px solid #ccc; */
  /* background-color: #f9f9f9; */
}`}
			/>
			<ol className="list-decimal list-inside space-y-2 pl-4 mb-4 mt-4">
				<li>
					Ya tienes la estructura: un <Code>&lt;div&gt;</Code> en tu HTML con la
					clase <Code>tarjeta-perfil</Code>, un <Code>&lt;h2&gt;</Code> con un
					nombre y un <Code>&lt;p&gt;</Code> con una breve descripción.
				</li>
				<li>
					En tu CSS, añade la regla de <Code>box-sizing: border-box;</Code> para
					todos los elementos, como se mostró arriba.
				</li>
				<li>
					Selecciona <Code>.tarjeta-perfil</Code> y aplícale los siguientes
					estilos:
					<ul className="list-disc list-inside space-y-1 pl-6 my-2">
						<li>
							Un <Code>width</Code> de <Code>300px</Code>.
						</li>
						<li>
							Un <Code>padding</Code> de <Code>20px</Code> en todos los lados.
						</li>
						<li>
							Un <Code>border</Code> de <Code>1px solid #ccc</Code>.
						</li>
						<li>
							Un <Code>background-color</Code> de <Code>#f9f9f9</Code>.
						</li>
					</ul>
				</li>
				<li>
					Observa el resultado. Gracias a <Code>border-box</Code>, el ancho
					total de la tarjeta en la página será exactamente 300px.
				</li>
				<li>
					Experimenta: Comenta temporalmente la regla de <Code>box-sizing</Code>
					. Verás que la tarjeta se vuelve más ancha (300px + 20px + 20px + 1px
					+ 1px = 342px). ¡Ahora entiendes por qué <Code>border-box</Code> es
					tan esencial!
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture12Es;
