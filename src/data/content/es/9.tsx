import {
	Check,
	ChevronRight,
	ChevronsDown,
	CornerDownRight,
	Filter,
	Flag,
	Hand,
	Keyboard,
	ListOrdered,
	MousePointerClick,
	MoveDown,
	Send,
	Sparkles,
	Star,
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

const inputClass =
	"w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100";
const labelClass =
	"mb-1 block text-xs font-semibold text-gray-600 dark:text-gray-300";

const Lecture9Es = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				CSS · selectores con superpoderes
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Ya sabemos apuntar por tipo, clase e ID. Hoy subimos de nivel:
				seleccionar por <strong>relación</strong> entre elementos, por{" "}
				<strong>atributos</strong> y por <strong>estado o posición</strong>. Lo
				especial: casi todo se puede <strong>probar en vivo</strong> acá mismo,
				porque las demos usan el mismo CSS que vas a escribir.
			</p>
		</section>

		<section>
			<SectionTitle index={1}>
				Combinadores: seleccionar por relación
			</SectionTitle>
			<p className="mb-4">
				Los combinadores seleccionan según el parentesco en el árbol del DOM:
				descendientes, hijos directos y hermanos. Cuatro símbolos, cuatro ideas.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<MoveDown className="h-5 w-5" aria-hidden />}
					title="Descendiente (espacio)"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Todos los que están dentro, sin importar el nivel: hijos, nietos,
					bisnietos. <Code>nav a</Code> pinta <strong>todos</strong> los enlaces
					del menú.
				</ConceptCard>
				<ConceptCard
					icon={<ChevronRight className="h-5 w-5" aria-hidden />}
					title="Hijo directo (>)"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Solo el primer nivel: <Code>ul &gt; li</Code> afecta a los{" "}
					<Code>li</Code> hijos del <Code>ul</Code>, no a los de sublistas
					anidadas.
				</ConceptCard>
				<ConceptCard
					icon={<CornerDownRight className="h-5 w-5" aria-hidden />}
					title="Hermano adyacente (+)"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					El hermano que viene <strong>inmediatamente después</strong>.{" "}
					<Code>h1 + p</Code> es solo el primer párrafo tras el título.
				</ConceptCard>
				<ConceptCard
					icon={<ChevronsDown className="h-5 w-5" aria-hidden />}
					title="Hermanos generales (~)"
					iconClassName="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
				>
					<strong>Todos</strong> los hermanos que vienen después.{" "}
					<Code>h2 ~ p</Code> alcanza a cada párrafo posterior al subtítulo.
				</ConceptCard>
			</div>
			<Callout variant="tip" title="La confusión clásica: espacio vs >">
				El espacio pinta toda la descendencia; el <Code>&gt;</Code> solo el
				primer nivel. Si tu submenú se tiñe de un estilo que no querías, casi
				seguro usaste un descendiente donde iba un hijo directo. Miralo en vivo
				👇
			</Callout>

			<Subhead>Descendiente vs hijo directo · en vivo</Subhead>
			<div className="mb-4">
				<Preview label="Vista previa · fijate qué se pinta y qué no">
					<style>{`.d9-arbol a { color: teal; }
.d9-arbol > ul > li { font-weight: bold; list-style-type: square; }`}</style>
					<nav className="d9-arbol">
						<ul>
							<li>
								<a href="#d9-inicio">Inicio</a>
								<ul>
									<li>
										<a href="#d9-sub">Subnivel anidado</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#d9-contacto">Contacto</a>
							</li>
						</ul>
					</nav>
				</Preview>
			</div>
			<p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
				Los tres enlaces están en teal (<Code>nav a</Code> llega a todos), pero
				solo el primer nivel está en negrita con viñeta cuadrada (
				<Code>&gt;</Code> frena en los hijos directos). El subnivel anidado lo
				delata.
			</p>
			<div className="space-y-4">
				<CodeBlock
					language="css"
					codeString={`/* Selecciona TODOS los <a> dentro de un <nav> */
nav a {
  color: teal;
}`}
				/>
				<CodeBlock
					language="css"
					codeString={`/* Solo los <li> hijos directos del <ul> */
ul > li {
  list-style-type: square;
}`}
				/>
			</div>

			<Subhead>Hermanos: + y ~ · en vivo</Subhead>
			<div className="mb-4">
				<Preview label="Vista previa · el primer párrafo vs todos">
					<style>{`.d9-hermanos h2 + p { margin-top: 0; font-style: italic; }
.d9-hermanos h2 ~ p { text-indent: 2em; }`}</style>
					<div className="d9-hermanos">
						<h2>Subtítulo de ejemplo</h2>
						<p>Primer párrafo: cursiva y sangría (le pegan ambas reglas).</p>
						<p>Segundo párrafo: solo sangría (solo le pega la de ~).</p>
					</div>
				</Preview>
			</div>
			<div className="space-y-4">
				<CodeBlock
					language="css"
					codeString={`/* Solo el <p> justo después del <h1> */
h1 + p {
  margin-top: 0;
  font-style: italic;
}`}
				/>
				<CodeBlock
					language="css"
					codeString={`/* Todos los <p> hermanos posteriores al <h2> */
h2 ~ p {
  text-indent: 2em;
}`}
				/>
			</div>
		</section>

		<section>
			<SectionTitle index={2}>Selectores de atributo</SectionTitle>
			<p className="mb-4">
				Seleccionan por la presencia o el valor de un atributo HTML. Ideales
				para diferenciar enlaces, botones y campos{" "}
				<strong>sin agregar clases</strong>.
			</p>
			<div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
				<table className="w-full text-left text-sm">
					<thead>
						<tr className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
							<th className="px-4 py-2">Patrón</th>
							<th className="px-4 py-2">Selecciona</th>
							<th className="px-4 py-2">Ejemplo</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
						<tr>
							<td className="px-4 py-2 font-mono">[attr]</td>
							<td className="px-4 py-2">tienen el atributo</td>
							<td className="px-4 py-2 font-mono">a[target]</td>
						</tr>
						<tr>
							<td className="px-4 py-2 font-mono">[attr=&quot;v&quot;]</td>
							<td className="px-4 py-2">valor exacto</td>
							<td className="px-4 py-2 font-mono">
								input[type=&quot;submit&quot;]
							</td>
						</tr>
						<tr>
							<td className="px-4 py-2 font-mono">[attr*=&quot;v&quot;]</td>
							<td className="px-4 py-2">el valor contiene</td>
							<td className="px-4 py-2 font-mono">
								a[href*=&quot;google&quot;]
							</td>
						</tr>
						<tr>
							<td className="px-4 py-2 font-mono">[attr^=&quot;v&quot;]</td>
							<td className="px-4 py-2">el valor empieza con</td>
							<td className="px-4 py-2 font-mono">
								a[href^=&quot;https&quot;]
							</td>
						</tr>
						<tr>
							<td className="px-4 py-2 font-mono">[attr$=&quot;v&quot;]</td>
							<td className="px-4 py-2">el valor termina con</td>
							<td className="px-4 py-2 font-mono">a[href$=&quot;.pdf&quot;]</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="mt-4 mb-4">
				<Preview label="Vista previa · tres reglas de atributo funcionando">
					<style>{`.d9-attrs a[target="_blank"] { background-color: yellow; }
.d9-attrs input[type="submit"] { background-color: #3498db; color: white; border: none; border-radius: 8px; padding: 8px 16px; cursor: pointer; }
.d9-attrs a[href$=".pdf"] { color: red; font-weight: bold; }`}</style>
					<div className="d9-attrs space-y-3">
						<p>
							<a href="https://ejemplo.com" target="_blank" rel="noopener">
								Enlace externo (nueva pestaña, fondo amarillo)
							</a>
						</p>
						<p>
							<a href="/contacto">Enlace interno (sin cambios)</a>
						</p>
						<p>
							<a href="guia.pdf">Guía en PDF (rojo y negrita)</a>
						</p>
						<p>
							<input type="submit" value="Botón por atributo" />{" "}
							<input
								type="text"
								placeholder="Campo normal"
								className={inputClass}
							/>
						</p>
					</div>
				</Preview>
			</div>
			<CodeBlock
				language="css"
				codeString={`/* Estiliza todos los enlaces que abren en una nueva pestaña */
a[target="_blank"] {
  background-color: yellow;
}`}
			/>
			<div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
				<Filter className="h-4 w-4" aria-hidden />
				El navegador ya distingue los elementos por sus atributos: aprovechalo
				antes de inventar clases nuevas.
			</div>
		</section>

		<section>
			<SectionTitle index={3}>Pseudo-clases: estado y posición</SectionTitle>
			<p className="mb-4">
				Palabras clave con dos puntos que se agregan al selector para apuntar a
				un <strong>estado especial</strong> (<Code>:hover</Code>) o a una{" "}
				<strong>posición</strong> (<Code>:nth-child()</Code>). No agregan
				elementos al HTML: describen <em>cómo está</em> el elemento.
			</p>

			<Subhead>Interacción con el usuario · en vivo</Subhead>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<MousePointerClick className="h-5 w-5" aria-hidden />}
					title=":hover"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Cuando el cursor pasa sobre el elemento. La base del feedback visual.
				</ConceptCard>
				<ConceptCard
					icon={<Hand className="h-5 w-5" aria-hidden />}
					title=":active"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Mientras se hace clic (el instante del presionado).
				</ConceptCard>
				<ConceptCard
					icon={<Keyboard className="h-5 w-5" aria-hidden />}
					title=":focus"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Cuando un campo queda seleccionado, con clic o con <Code>Tab</Code>.
					Clave para accesibilidad.
				</ConceptCard>
			</div>
			<Callout variant="tip" title="El orden importa (LoVe-HA)">
				Si estilizás enlaces en sus cuatro estados, escribilos en este orden:{" "}
				<Code>:link</Code> → <Code>:visited</Code> → <Code>:hover</Code> →{" "}
				<Code>:active</Code>. Si <Code>:hover</Code> va antes, los estilos base
				lo pisan y el efecto “no funciona”.
			</Callout>
			<div className="mb-4">
				<Preview label="Vista previa · pasá el cursor, hacé clic y usá Tab">
					<style>{`.d9-btn { background-color: #3498db; color: white; border: none; border-radius: 8px; padding: 10px 20px; cursor: pointer; transition: background-color 0.3s; }
.d9-btn:hover { background-color: #2980b9; }
.d9-btn:active { transform: scale(0.96); }
.d9-focus:focus { outline: 2px solid #3498db; border-color: #3498db; }`}</style>
					<div className="space-y-3">
						<button type="button" className="d9-btn">
							Pasá el cursor y haceme clic
						</button>
						<div>
							<label htmlFor="d9-foco" className={labelClass}>
								Campo con :focus (clickealo o llegá con Tab)
							</label>
							<input
								id="d9-foco"
								name="d9-foco"
								type="text"
								placeholder="Mirame el borde"
								className={`d9-focus ${inputClass}`}
							/>
						</div>
					</div>
				</Preview>
			</div>
			<CodeBlock
				language="css"
				codeString={`button {
  background-color: #3498db;
  color: white;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}

input:focus {
  outline: 2px solid #3498db;
  border-color: #3498db;
}`}
			/>

			<Subhead>Estructurales: posición en el DOM · en vivo</Subhead>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<Star className="h-5 w-5" aria-hidden />}
					title=":first-child"
					iconClassName="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
				>
					El primero entre sus hermanos.
				</ConceptCard>
				<ConceptCard
					icon={<Flag className="h-5 w-5" aria-hidden />}
					title=":last-child"
					iconClassName="bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300"
				>
					El último entre sus hermanos.
				</ConceptCard>
				<ConceptCard
					icon={<ListOrdered className="h-5 w-5" aria-hidden />}
					title=":nth-child()"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					El más versátil, con número o fórmula: <Code>(3)</Code>,{" "}
					<Code>(odd)</Code>, <Code>(even)</Code>, <Code>(2n+1)</Code>.
				</ConceptCard>
			</div>
			<div className="mb-4">
				<Preview label="Vista previa · lista cebra: primero, pares y último">
					<style>{`.d9-zebra li:first-child { font-weight: bold; }
.d9-zebra li:nth-child(even) { background-color: #f2f2f2; }
.d9-zebra li:last-child { border-bottom: 3px solid #3498db; }`}</style>
					<ol className="d9-zebra list-decimal list-inside space-y-1">
						<li>Primer ítem (negrita)</li>
						<li>Segundo ítem (fondo gris)</li>
						<li>Tercer ítem</li>
						<li>Cuarto ítem (fondo gris)</li>
						<li>Último ítem (borde azul)</li>
					</ol>
				</Preview>
			</div>
			<div className="space-y-4">
				<CodeBlock
					language="css"
					codeString={`/* Sin borde superior en el primer item */
li:first-child {
  border-top: none;
}

/* Estilo de "cebra" para las filas de una tabla */
tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}`}
				/>
			</div>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
				<Send className="h-6 w-6 text-blue-500" aria-hidden />📝 Tarea: menú
				interactivo y lista estilizada
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Un menú que reacciona al usuario y una lista con ritmo visual, todo con
				lo nuevo de hoy.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Crea el HTML">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							<Code>&lt;nav&gt;</Code> con <Code>&lt;ul&gt;</Code> y varios{" "}
							<Code>&lt;li&gt;</Code> con <Code>&lt;a&gt;</Code> dentro.
						</CheckItem>
						<CheckItem>
							Una <Code>&lt;ol&gt;</Code> con varios ítems.
						</CheckItem>
					</ul>
				</Step>
				<Step number={2} title="Estiliza el menú">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							Selector descendiente <Code>nav a</Code> para la base de los
							enlaces.
						</CheckItem>
						<CheckItem>
							<Code>a:hover</Code> para que cambien de color o se subrayen con
							el cursor encima.
						</CheckItem>
					</ul>
				</Step>
				<Step number={3} title="Estiliza la lista">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							<Code>:nth-child(odd)</Code> con fondo en las filas impares.
						</CheckItem>
						<CheckItem>
							<Code>:first-child</Code> en negrita (
							<Code>font-weight: bold;</Code>).
						</CheckItem>
						<CheckItem>
							<Code>:last-child</Code> con un borde inferior especial.
						</CheckItem>
					</ul>
				</Step>
				<Step number={4} title="Probá todo">
					Pasá el cursor por el menú y mirá la cebra de la lista: si algo “no
					funciona”, revisá el orden LoVe-HA.
				</Step>
			</ol>
			<Callout variant="success" title="Cierre">
				Ya seleccionás por relación, atributo, estado y posición. En la
				conferencia 10 llegan los pseudo-elementos y el algoritmo que decide qué
				regla gana cuando varias apuntan al mismo elemento.
			</Callout>
		</section>
	</div>
);

export default Lecture9Es;
