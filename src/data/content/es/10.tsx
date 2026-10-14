import {
	Check,
	Clock,
	Dna,
	KeyRound,
	ListOrdered,
	Quote,
	Scale,
	Send,
	Sparkles,
	Tag,
	Type,
	Zap,
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

const Lecture10Es = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				CSS · pintar partes y ganar peleas
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				En la conferencia 9 aprendimos a apuntar. Hoy, dos superpoderes para
				cerrar el módulo: estilizar <strong>partes</strong> de un elemento sin
				agregar HTML y entender el <strong>algoritmo</strong> con el que el
				navegador decide qué regla gana.
			</p>
		</section>

		<section>
			<SectionTitle index={1}>
				Pseudo-elementos: partes sin HTML extra
			</SectionTitle>
			<p className="mb-4">
				Las pseudo-clases describen el <strong>estado</strong> de un elemento
				completo (<Code>:hover</Code>). Los <strong>pseudo-elementos</strong>,
				en cambio, apuntan a una <strong>parte</strong> o generan contenido
				cosmético sin HTML adicional. Se distinguen por los{" "}
				<strong>dos puntos dobles</strong> (<Code>::</Code>).
			</p>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<Quote className="h-5 w-5" aria-hidden />}
					title="::before / ::after"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Los más potentes: crean contenido antes o después del real. Exigen{" "}
					<Code>content</Code>. Ideales para comillas, iconos y formas.
				</ConceptCard>
				<ConceptCard
					icon={<Type className="h-5 w-5" aria-hidden />}
					title="::first-letter"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					La primera letra de un bloque. La clásica capitular de los libros.
				</ConceptCard>
				<ConceptCard
					icon={<Tag className="h-5 w-5" aria-hidden />}
					title="::first-line"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					La primera línea de texto del bloque, sea cual sea su largo.
				</ConceptCard>
			</div>
			<Callout variant="warning" title="Sin content no existen">
				<Code>::before</Code> y <Code>::after</Code>{" "}
				<strong>no se renderizan</strong> sin la propiedad <Code>content</Code>,
				aunque sea vacía (<Code>content: &quot;&quot;</Code>). Es el olvido
				número uno con estos selectores.
			</Callout>
			<div className="mb-4">
				<Preview label="Vista previa · comillas, capitular y primera línea en vivo">
					<style>{`.d10-cita { font-style: italic; }
.d10-cita::before { content: '\\201C'; font-size: 2em; color: #3498db; }
.d10-cita::after { content: '\\201D'; font-size: 2em; color: #3498db; }
.d10-cap::first-letter { font-size: 200%; font-weight: bold; color: #2980b9; }
.d10-linea::first-line { color: #7f8c8d; }`}</style>
					<div className="space-y-4">
						<blockquote className="d10-cita">
							El diseño es la inteligencia hecha visible.
						</blockquote>
						<p className="d10-cap">
							Érase una vez un párrafo abierto por una letra gigante, como en
							los libros antiguos.
						</p>
						<p className="d10-linea">
							Solo esta primera línea va en gris: si achicás la ventana, la
							segunda línea vuelve al color normal porque ya no es la primera.
						</p>
					</div>
				</Preview>
			</div>
			<p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
				En la demo simplificamos las comillas sin posicionamiento (el
				posicionamiento llega en el módulo 3). El ejemplo completo de la
				lección, con comillas gigantes absolutas, es este:
			</p>
			<div className="space-y-4">
				<CodeBlock
					language="css"
					codeString={`blockquote {
  font-style: italic;
  position: relative; /* Necesario para posicionar los pseudo-elementos */
}

blockquote::before {
  content: '"'; /* El contenido es obligatorio */
  font-size: 4em;
  color: #ddd;
  position: absolute;
  left: -0.5em;
  top: -0.2em;
}`}
				/>
				<CodeBlock
					language="css"
					codeString={`p::first-letter {
  font-size: 200%;
  font-weight: bold;
  color: #2980b9;
}`}
				/>
				<CodeBlock
					language="css"
					codeString={`p::first-line {
  color: #7f8c8d;
}`}
				/>
			</div>
		</section>

		<section>
			<SectionTitle index={2}>
				El algoritmo: quién gana la batalla de estilos
			</SectionTitle>
			<p className="mb-4">
				¿Por qué una regla funciona y otra no? Cuando varios estilos apuntan al
				mismo elemento, el navegador resuelve el conflicto con tres pasos,{" "}
				<strong>en este orden</strong>:
			</p>
			<div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
				<div className="flex-1 rounded-xl bg-amber-50 p-3 text-center text-sm font-semibold text-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
					<Scale className="mx-auto mb-1 h-5 w-5" aria-hidden />1 ·
					Especificidad
				</div>
				<div className="text-center font-bold text-gray-400" aria-hidden>
					→
				</div>
				<div className="flex-1 rounded-xl bg-blue-50 p-3 text-center text-sm font-semibold text-blue-800 dark:bg-blue-950/40 dark:text-blue-200">
					<Clock className="mx-auto mb-1 h-5 w-5" aria-hidden />2 · Orden
					(cascada)
				</div>
				<div className="text-center font-bold text-gray-400" aria-hidden>
					→
				</div>
				<div className="flex-1 rounded-xl bg-green-50 p-3 text-center text-sm font-semibold text-green-800 dark:bg-green-950/40 dark:text-green-200">
					<Dna className="mx-auto mb-1 h-5 w-5" aria-hidden />3 · Herencia
				</div>
			</div>

			<Subhead>Paso 1 · Especificidad: el peso del selector</Subhead>
			<p className="mb-4">
				El navegador calcula qué selector es más “específico”. La jerarquía, de
				más a menos peso:
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Zap className="h-5 w-5" aria-hidden />}
					title="Estilos en línea"
					iconClassName="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
				>
					Un atributo <Code>style</Code> gana sobre cualquier hoja. (Pero ya
					sabés por la conferencia 8 que conviene evitarlo.)
				</ConceptCard>
				<ConceptCard
					icon={<KeyRound className="h-5 w-5" aria-hidden />}
					title="ID (#)"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Extremadamente específico: un solo ID pesa más que cualquier cantidad
					de clases.
				</ConceptCard>
				<ConceptCard
					icon={<Tag className="h-5 w-5" aria-hidden />}
					title="Clases, pseudo-clases y atributos"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					<Code>.btn</Code>, <Code>:hover</Code>,{" "}
					<Code>[type=&quot;text&quot;]</Code>: el mismo nivel entre ellos.
				</ConceptCard>
				<ConceptCard
					icon={<Type className="h-5 w-5" aria-hidden />}
					title="Tipos y pseudo-elementos"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					<Code>p</Code>, <Code>div</Code>, <Code>::before</Code>: los menos
					específicos. El <Code>*</Code> y los combinadores valen cero.
				</ConceptCard>
			</div>
			<Callout variant="info" title="¿Cómo se calcula?">
				El navegador cuenta IDs, clases y etiquetas de cada selector.{" "}
				<Code>#nav .link</Code> (1 ID + 1 clase) le gana a{" "}
				<Code>div a.button.active</Code> (0 IDs + 3 clases): el ID pesa más que
				todas las clases juntas.
			</Callout>
			<div className="mb-4">
				<Preview label="Vista previa · tres reglas pelean, una gana (predecí antes de mirar)">
					<style>{`.d10-batalla p { color: green; }
.d10-batalla .texto-azul { color: blue; }
.d10-batalla #parrafo-importante { color: red; }`}</style>
					<div className="d10-batalla">
						<p id="parrafo-importante" className="texto-azul">
							Hola Mundo (tendría que verse rojo)
						</p>
					</div>
				</Preview>
			</div>
			<div className="space-y-4">
				<CodeBlock
					language="html"
					codeString={`<p id="parrafo-importante" class="texto-azul">Hola Mundo</p>`}
				/>
				<CodeBlock
					language="css"
					codeString={`#parrafo-importante { color: red; }   /* GANA (1 ID) */
.texto-azul { color: blue; }     /* Pierde (1 Clase) */
p { color: green; }               /* Pierde (1 Etiqueta) */`}
				/>
			</div>

			<Subhead>Paso 2 · Cascada: a igual peso, gana la última</Subhead>
			<p className="mb-4">
				Si dos reglas empatan en especificidad, importa el “orden de llegada”:
				la declarada <strong>más tarde</strong> gana. Por eso el orden de tus
				archivos <Code>&lt;link&gt;</Code> también importa.
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · mismo selector, dos colores">
					<style>{`.d10-empate p { color: blue; }
.d10-empate p { color: red; }`}</style>
					<div className="d10-empate">
						<p>Este párrafo es rojo: ganó la última regla.</p>
					</div>
				</Preview>
			</div>
			<CodeBlock
				language="css"
				codeString={`p { color: blue; }
p { color: red; } /* Este gana, el párrafo será rojo */`}
			/>

			<Subhead>Paso 3 · Herencia: el último recurso</Subhead>
			<p className="mb-4">
				Si <strong>ninguna</strong> regla apunta al elemento, hereda del padre.
				Pero no todo se hereda: <Code>color</Code>, <Code>font-family</Code>,{" "}
				<Code>font-size</Code> y <Code>text-align</Code> sí; <Code>border</Code>
				, <Code>padding</Code> y <Code>background-color</Code> no.
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · el color se hereda, el borde no">
					<div
						style={{
							color: "green",
							border: "2px solid green",
							padding: "12px",
						}}
					>
						<p>
							Texto verde por herencia del div. El borde, en cambio, es solo del
							div.
						</p>
					</div>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<div style="color: green;">
  <p>Este texto es verde porque hereda el color del div.</p>
</div>`}
			/>
			<div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
				<ListOrdered className="h-4 w-4" aria-hidden />
				El algoritmo completo: especificidad → orden → herencia. En la
				conferencia 11 lo vemos a fondo.
			</div>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
				<Send className="h-6 w-6 text-blue-500" aria-hidden />📝 Tarea: el
				puzzle de la especificidad
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Pseudo-elementos en acción y un duelo de selectores donde primero{" "}
				<strong>predecís</strong> y después comprobás.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Cita con comillas gigantes">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							Crea un <Code>&lt;blockquote&gt;</Code> con texto dentro.
						</CheckItem>
						<CheckItem>
							Con <Code>::before</Code> y <Code>::after</Code> agregá comillas
							gigantes al principio y al final, como en la lección (no olvides{" "}
							<Code>content</Code>).
						</CheckItem>
					</ul>
				</Step>
				<Step number={2} title="El botón en disputa">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							Crea{" "}
							<Code>
								&lt;button id=&quot;btn-principal&quot;
								class=&quot;btn-accion&quot;&gt;
							</Code>
							.
						</CheckItem>
						<CheckItem>
							Tres reglas para el <Code>background-color</Code>: una con{" "}
							<Code>button</Code>, otra con <Code>.btn-accion</Code> y otra con{" "}
							<Code>#btn-principal</Code>, cada una de un color.
						</CheckItem>
					</ul>
				</Step>
				<Step number={3} title="Predecí antes de mirar">
					Anotá de qué color creés que será el botón <strong>antes</strong> de
					abrir el navegador. Después comprobá y explicá qué paso del algoritmo
					decidió.
				</Step>
			</ol>
			<Callout variant="success" title="Cierre del módulo">
				Cerramos Fundamentos de CSS: dónde vive el estilo, a quién apunta, sus
				superpoderes y quién gana cada pelea. En la conferencia 11 profundizamos
				especificidad y herencia, y después entramos al modelo de caja.
			</Callout>
		</section>
	</div>
);

export default Lecture10Es;
