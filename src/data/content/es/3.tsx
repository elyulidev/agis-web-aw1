import {
	Accessibility,
	Bold,
	BookOpen,
	Check,
	ChefHat,
	Clock,
	Eye,
	Highlighter,
	Italic,
	List,
	ListOrdered,
	Sparkles,
	Superscript,
	Underline,
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

const Lecture3Es = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Semántica · significado, no solo apariencia
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				¡Hola de nuevo y bienvenidos a la tercera conferencia de nuestro módulo!
				En la sesión anterior sentamos las bases de la estructura de un
				documento HTML. Hoy, vamos a profundizar en cómo dar formato y
				estructura al texto y a las listas, que son los componentes principales
				de casi cualquier página web.
			</p>
			<Callout variant="info" title="La idea central de hoy">
				La <strong>semántica</strong>: el arte de usar las etiquetas HTML
				correctas para describir el significado de nuestro contenido, no solo su
				apariencia. Fundamental para la accesibilidad y el SEO.
			</Callout>
		</section>

		<section>
			<SectionTitle index={1}>
				Etiquetas de Formato de Texto: Más Allá de la Apariencia
			</SectionTitle>
			<p className="mb-4">
				Cuando damos formato al texto, es crucial diferenciar entre las
				etiquetas que son puramente presentacionales (visuales) y las que son
				semánticas (con significado).
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Eye className="h-5 w-5" aria-hidden />}
					title="Presentacional"
					iconClassName="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
				>
					Solo cambia cómo se ve: <Code>&lt;b&gt;</Code>, <Code>&lt;i&gt;</Code>
					, <Code>&lt;u&gt;</Code>. Ayuda visual sin importancia extra.
				</ConceptCard>
				<ConceptCard
					icon={<Accessibility className="h-5 w-5" aria-hidden />}
					title="Semántica"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					Describe significado: <Code>&lt;strong&gt;</Code>,{" "}
					<Code>&lt;em&gt;</Code>, <Code>&lt;ins&gt;</Code>. Un lector de
					pantalla puede cambiar el tono de voz.
				</ConceptCard>
			</div>

			<Subhead>Negritas: &lt;b&gt; vs. &lt;strong&gt;</Subhead>
			<p className="mb-4">
				Ambas etiquetas hacen que el texto aparezca en negrita, pero su
				propósito es muy diferente.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Bold className="h-5 w-5" aria-hidden />}
					title="<b> · Bold"
					iconClassName="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
				>
					Presentacional: llama la atención sin importancia especial. Como
					resaltar el nombre de un producto en una reseña.
				</ConceptCard>
				<ConceptCard
					icon={<Bold className="h-5 w-5" aria-hidden />}
					title="<strong> · Importancia fuerte"
					iconClassName="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
				>
					Semántica: gran importancia, seriedad o urgencia. El lector de
					pantalla puede enfatizarla con otro tono.
				</ConceptCard>
			</div>
			<div className="mt-4">
				<Preview label="Vista previa · así lo renderiza el navegador">
					<p>
						Esta receta necesita <b>harina de trigo</b> y azúcar.
					</p>
					<p className="mt-2">
						<strong>Advertencia:</strong> El suelo está mojado.
					</p>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<p>Esta receta necesita <b>harina de trigo</b> y azúcar.</p>
<p><strong>Advertencia:</strong> El suelo está mojado.</p>`}
			/>

			<Subhead>Cursivas: &lt;i&gt; vs. &lt;em&gt;</Subhead>
			<p className="mb-4">
				Al igual que con las negritas, aquí también tenemos una diferencia entre
				lo visual y lo semántico.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Italic className="h-5 w-5" aria-hidden />}
					title="<i> · Italic"
					iconClassName="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
				>
					Distingue texto sin énfasis particular: términos técnicos, nombres de
					barcos, pensamientos o frases en otro idioma.
				</ConceptCard>
				<ConceptCard
					icon={<Italic className="h-5 w-5" aria-hidden />}
					title="<em> · Énfasis"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Semántica: da énfasis y puede cambiar el significado de la oración.
				</ConceptCard>
			</div>
			<div className="mt-4">
				<Preview label="Vista previa · así lo renderiza el navegador">
					<p>
						El término <i>Homo sapiens</i> se refiere a nuestra especie.
					</p>
					<p className="mt-2">
						Debes hacerlo <em>ahora</em>, no después.
					</p>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<p>El término <i>Homo sapiens</i> se refiere a nuestra especie.</p>
<p>Debes hacerlo <em>ahora</em>, no después.</p>`}
			/>

			<Subhead>Subrayado: &lt;u&gt; vs. &lt;ins&gt;</Subhead>
			<p className="mb-4">
				El uso de <Code>&lt;u&gt;</Code> se ha vuelto poco común porque los
				usuarios asocian el texto subrayado con enlaces.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Underline className="h-5 w-5" aria-hidden />}
					title="<u> · Subrayado"
					iconClassName="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
				>
					Reservado para anotaciones no textuales, como marcar una palabra mal
					escrita.
				</ConceptCard>
				<ConceptCard
					icon={<Underline className="h-5 w-5" aria-hidden />}
					title="<ins> · Insertado"
					iconClassName="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
				>
					Semántica: marca contenido añadido al documento (edición o
					actualización).
				</ConceptCard>
			</div>
			<div className="mt-4">
				<Preview label="Vista previa · así lo renderiza el navegador">
					<p>
						Esta palabra está mal{" "}
						<u className="underline decoration-red-500 decoration-wavy">
							escribida
						</u>
						.
					</p>
					<p className="mt-2">
						El precio es de <del>$100</del> <ins>$75</ins> por tiempo limitado.
					</p>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<p>Esta palabra está mal <u class="decoration-red-500 underline-wavy">escribida</u>.</p>
<p>El precio es de <del>$100</del> <ins>$75</ins> por tiempo limitado.</p>`}
			/>

			<Subhead>Subíndice (&lt;sub&gt;) y Superíndice (&lt;sup&gt;)</Subhead>
			<p className="mb-4">
				Estas etiquetas son muy útiles para fórmulas matemáticas o químicas:{" "}
				<Code>&lt;sub&gt;</Code> baja el texto de la línea normal y{" "}
				<Code>&lt;sup&gt;</Code> lo sube.
			</p>
			<div className="mt-4">
				<Preview label="Vista previa · así lo renderiza el navegador">
					<p>
						La fórmula del agua es H<sub>2</sub>O.
					</p>
					<p className="mt-2">
						El teorema de Pitágoras es a<sup>2</sup> + b<sup>2</sup> = c
						<sup>2</sup>.
					</p>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<p>La fórmula del agua es H<sub>2</sub>O.</p>
<p>El teorema de Pitágoras es a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>.</p>`}
			/>

			<Subhead>Otras Etiquetas de Formato de Texto Útiles</Subhead>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<Superscript className="h-5 w-5" aria-hidden />}
					title="<small>"
				>
					Letra pequeña: comentarios legales o derechos de autor.
				</ConceptCard>
				<ConceptCard
					icon={<Highlighter className="h-5 w-5" aria-hidden />}
					title="<mark>"
					iconClassName="bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300"
				>
					Resalta por relevancia en contexto, como en resultados de búsqueda.
				</ConceptCard>
				<ConceptCard
					icon={<Clock className="h-5 w-5" aria-hidden />}
					title="<time>"
					iconClassName="bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300"
				>
					Fechas y horas, con <Code>datetime</Code> para que las máquinas lo
					entiendan.
				</ConceptCard>
			</div>
			<div className="mt-4">
				<Preview label="Vista previa · así lo renderiza el navegador">
					<p>
						El resultado de la búsqueda para <mark>HTML</mark> arrojó 5 millones
						de páginas.
					</p>
					<p className="mt-2">
						La reunión está programada para el{" "}
						<time dateTime="2024-10-26T10:00">
							26 de Octubre a las 10:00 AM
						</time>
						.
					</p>
					<p className="mt-2">
						<small>© 2024 Mi Curso Web. Todos los derechos reservados.</small>
					</p>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<p>El resultado de la búsqueda para <mark>HTML</mark> arrojó 5 millones de páginas.</p>
<p>La reunión está programada para el <time datetime="2024-10-26T10:00">26 de Octubre a las 10:00 AM</time>.</p>
<footer>
  <p><small>&copy; 2024 Mi Curso Web. Todos los derechos reservados.</small></p>
</footer>`}
			/>
		</section>

		<section>
			<SectionTitle index={2}>
				Listas: Ordenadas, Desordenadas y de Definición
			</SectionTitle>
			<p className="mb-4">
				Las listas son fundamentales para agrupar y estructurar contenido
				relacionado. Se componen de un elemento contenedor (
				<Code>&lt;ol&gt;</Code>, <Code>&lt;ul&gt;</Code>,{" "}
				<Code>&lt;dl&gt;</Code>) que contiene elementos de lista (
				<Code>&lt;li&gt;</Code>, <Code>&lt;dt&gt;</Code>,{" "}
				<Code>&lt;dd&gt;</Code>).
			</p>

			<Subhead>Listas Desordenadas &lt;ul&gt;</Subhead>
			<p className="mb-4">
				Se utilizan para agrupar elementos cuyo orden no es importante. Por
				defecto, se muestran con viñetas.
			</p>
			<div className="grid gap-4 md:grid-cols-2">
				<Preview label="Vista previa · lista real">
					<p className="mb-2 font-semibold">Lista de compras:</p>
					<ul className="list-disc space-y-1 pl-5">
						<li>Leche</li>
						<li>Pan</li>
						<li>Huevos</li>
					</ul>
				</Preview>
				<div>
					<CodeBlock
						language="html"
						codeString={`<h4>Lista de compras:</h4>
<ul>
  <li>Leche</li>
  <li>Pan</li>
  <li>Huevos</li>
</ul>`}
					/>
				</div>
			</div>

			<Subhead>Listas Ordenadas &lt;ol&gt;</Subhead>
			<p className="mb-4">
				Se utilizan cuando la secuencia de los elementos es crucial, como en los
				pasos de una receta o un ranking.
			</p>
			<div className="grid gap-4 md:grid-cols-2">
				<Preview label="Vista previa · lista real">
					<p className="mb-2 font-semibold">Instrucciones:</p>
					<ol className="list-decimal space-y-1 pl-5">
						<li>Batir los huevos.</li>
						<li>Calentar el sartén.</li>
						<li>Verter la mezcla.</li>
					</ol>
				</Preview>
				<div>
					<CodeBlock
						language="html"
						codeString={`<h4>Instrucciones:</h4>
<ol>
  <li>Batir los huevos.</li>
  <li>Calentar el sartén.</li>
  <li>Verter la mezcla.</li>
</ol>`}
					/>
				</div>
			</div>

			<Subhead>Atributos para Listas Ordenadas</Subhead>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<ListOrdered className="h-5 w-5" aria-hidden />}
					title="type"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Cambia el marcador: <Code>1</Code>, <Code>a</Code>, <Code>A</Code>,{" "}
					<Code>i</Code>, <Code>I</Code>.
				</ConceptCard>
				<ConceptCard
					icon={<List className="h-5 w-5" aria-hidden />}
					title="start"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					El número desde el cual debe comenzar la lista.
				</ConceptCard>
				<ConceptCard
					icon={<ListOrdered className="h-5 w-5" aria-hidden />}
					title="reversed"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Booleano que invierte el orden de la numeración.
				</ConceptCard>
			</div>
			<CodeBlock
				language="html"
				codeString={`<p>Top 3 países (en orden alfabético inverso):</p>
<ol type="A" start="3" reversed>
  <li>España</li>
  <li>Brasil</li>
  <li>Argentina</li>
</ol>`}
			/>

			<Subhead>Listas de Definición &lt;dl&gt;</Subhead>
			<p className="mb-4">
				Ideal para glosarios o pares término-definición. Tres etiquetas:{" "}
				<Code>&lt;dl&gt;</Code> (contenedor), <Code>&lt;dt&gt;</Code> (término)
				y <Code>&lt;dd&gt;</Code> (descripción).
			</p>
			<div className="grid gap-4 md:grid-cols-2">
				<Preview label="Vista previa · glosario real">
					<dl>
						<dt className="font-bold text-gray-900 dark:text-white">HTML</dt>
						<dd className="mb-2 text-sm">
							Lenguaje de Marcas de Hipertexto, usado para estructurar el
							contenido web.
						</dd>
						<dt className="font-bold text-gray-900 dark:text-white">CSS</dt>
						<dd className="text-sm">
							Hojas de Estilo en Cascada, usado para dar estilo a la
							presentación del contenido.
						</dd>
					</dl>
				</Preview>
				<div>
					<CodeBlock
						language="html"
						codeString={`<dl>
  <dt>HTML</dt>
  <dd>Lenguaje de Marcas de Hipertexto, usado para estructurar el contenido web.</dd>
  <dt>CSS</dt>
  <dd>Hojas de Estilo en Cascada, usado para dar estilo a la presentación del contenido.</dd>
</dl>`}
					/>
				</div>
			</div>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
				<ChefHat className="h-6 w-6 text-orange-500" aria-hidden />📝 Tarea: La
				Página de tu Receta Favorita
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				¡Es hora de cocinar con código! En esta tarea, crearás una página web
				para tu receta favorita, aplicando todo lo que has aprendido sobre
				formato de texto y listas.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Crea el Archivo">
					Crea <Code>receta.html</Code> en tu proyecto.
				</Step>
				<Step number={2} title="Estructura Base">
					Genera la base con Emmet (<Code>!</Code>) y configura el{" "}
					<Code>&lt;head&gt;</Code> (título, metadatos, etc.).
				</Step>
				<Step number={3} title="Contenido de la Receta">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							<Code>&lt;h1&gt;</Code> con el nombre de la receta.
						</CheckItem>
						<CheckItem>
							Intro en <Code>&lt;p&gt;</Code> con <Code>&lt;em&gt;</Code> para
							enfatizar lo deliciosa que es.
						</CheckItem>
						<CheckItem>
							Sección “Ingredientes” (<Code>&lt;h2&gt;</Code>) con{" "}
							<Code>&lt;ul&gt;</Code>; el ingrediente estrella con{" "}
							<Code>&lt;strong&gt;</Code>.
						</CheckItem>
						<CheckItem>
							Sección “Instrucciones” (<Code>&lt;h2&gt;</Code>) con{" "}
							<Code>&lt;ol&gt;</Code> para los pasos.
						</CheckItem>
						<CheckItem>
							Glosario (<Code>&lt;h2&gt;</Code>) con <Code>&lt;dl&gt;</Code>:
							dos términos (ej: “Saltear”, “Baño María”).
						</CheckItem>
						<CheckItem>
							Nota con <Code>&lt;mark&gt;</Code>:{" "}
							<mark>¡Cuidado con el horno caliente!</mark>
						</CheckItem>
						<CheckItem>
							Derechos de autor con <Code>&lt;small&gt;</Code>.
						</CheckItem>
					</ul>
				</Step>
				<Step number={4} title="Visualiza">
					Abre <Code>receta.html</Code> con Live Server y comprobá que todo se
					vea como esperás.
				</Step>
			</ol>
			<Callout variant="success" title="Cierre">
				Esta tarea te ayudará a dominar la organización de contenido y a
				entender el poder de la semántica en HTML.
			</Callout>
			<p className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
				<BookOpen className="h-4 w-4 shrink-0" aria-hidden />
				Glosario, receta y formato: todo lo de hoy en una sola página.
			</p>
		</section>
	</div>
);

export default Lecture3Es;
