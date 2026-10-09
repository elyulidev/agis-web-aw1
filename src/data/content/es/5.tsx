import {
	Ban,
	Check,
	LayoutTemplate,
	Menu,
	MoveHorizontal,
	MoveVertical,
	Sparkles,
	Table,
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

const tableCell = "whitespace-nowrap px-4 py-2";
const tableHead =
	"px-4 py-2 text-left font-medium text-gray-900 dark:text-white";

const Lecture5Es = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Tablas y semántica estructural
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				¡Bienvenidos a la quinta conferencia! Hoy vamos a estructurar dos tipos
				de contenido. Primero, aprenderemos a manejar datos tabulares de una
				manera semántica y accesible usando tablas. Luego, daremos un gran paso
				en la organización de nuestras páginas introduciendo las etiquetas
				semánticas estructurales, que son la base de cualquier diseño web
				moderno.
			</p>
		</section>

		<section>
			<SectionTitle index={1}>
				Tablas (&lt;table&gt;): Estructura y Semántica
			</SectionTitle>
			<Callout variant="warning" title="Solo datos tabulares">
				Las tablas se usan <strong>exclusivamente para datos tabulares</strong>{" "}
				(hojas de cálculo, estadísticas, calendarios). Maquetar páginas con
				tablas es una práctica obsoleta: eso se resuelve con CSS.
			</Callout>

			<Subhead>Las piezas básicas: table, tr, th y td</Subhead>
			<p className="mb-4">
				Toda tabla nace de cuatro etiquetas. <Code>&lt;table&gt;</Code> es el
				contenedor, <Code>&lt;tr&gt;</Code> es una fila (
				<em>table row</em>), <Code>&lt;th&gt;</Code> es una celda de
				encabezado (<em>table header</em>) y <Code>&lt;td&gt;</Code> es una
				celda de datos (<em>table data</em>). Los encabezados llevan{" "}
				<Code>scope="col"</Code> o <Code>scope="row"</Code> para decirle al
				lector de pantalla a qué celdas describen.
			</p>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<Table className="h-5 w-5" aria-hidden />}
					title="<tr>"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Una fila. Siempre contiene <Code>&lt;th&gt;</Code> o{" "}
					<Code>&lt;td&gt;</Code>, nunca texto suelto.
				</ConceptCard>
				<ConceptCard
					icon={<Table className="h-5 w-5" aria-hidden />}
					title="<th>"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Encabezado en negrita y centrado por defecto. Usá{" "}
					<Code>scope="col"</Code> en columnas y <Code>scope="row"</Code> en
					filas.
				</ConceptCard>
				<ConceptCard
					icon={<Table className="h-5 w-5" aria-hidden />}
					title="<td>"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					Dato normal. Va dentro de <Code>&lt;tr&gt;</Code> en el cuerpo o el
					pie de la tabla.
				</ConceptCard>
			</div>
			<CodeBlock
				language="html"
				codeString={`<table border="1">
  <tr>
    <th scope="col">Producto</th>
    <th scope="col">Cantidad</th>
  </tr>
  <tr>
    <td>Manzanas</td>
    <td>10</td>
  </tr>
</table>`}
			/>

			<Subhead>Estructura Semántica: thead, tbody y tfoot</Subhead>
			<p className="mb-4">
				Para tablas correctas agrupamos las filas con{" "}
				<Code>&lt;thead&gt;</Code>, <Code>&lt;tbody&gt;</Code> y{" "}
				<Code>&lt;tfoot&gt;</Code>: mejoran la organización y la
				accesibilidad. En los ejemplos usamos{" "}
				<Code>&lt;table border="1"&gt;</Code> solo para ver los bordes sin
				CSS; en el Módulo 2 lo vas a reemplazar por estilo con CSS.
			</p>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<Table className="h-5 w-5" aria-hidden />}
					title="<thead>"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					El encabezado: la fila de títulos de cada columna.
				</ConceptCard>
				<ConceptCard
					icon={<Table className="h-5 w-5" aria-hidden />}
					title="<tbody>"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					El cuerpo principal con los datos.
				</ConceptCard>
				<ConceptCard
					icon={<Table className="h-5 w-5" aria-hidden />}
					title="<tfoot>"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					El pie: totales o resúmenes de la tabla.
				</ConceptCard>
			</div>
			<div className="mt-4">
				<Callout variant="tip" title="Leé la tabla por partes">
					Primero las filas de <Code>&lt;thead&gt;</Code> (los{" "}
					<Code>&lt;th scope="col"&gt;</Code>), después cada{" "}
					<Code>&lt;tr&gt;</Code> de <Code>&lt;tbody&gt;</Code> con sus{" "}
					<Code>&lt;td&gt;</Code>, y al final el resumen en{" "}
					<Code>&lt;tfoot&gt;</Code>.
				</Callout>
			</div>
			<CodeBlock
				language="html"
				codeString={`<table border="1">
  <thead>
    <tr>
      <th scope="col">Producto</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio Unitario</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Manzanas</th>
      <td>10</td>
      <td>$0.50</td>
    </tr>
    <tr>
      <th scope="row">Naranjas</th>
      <td>15</td>
      <td>$0.40</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>25</td>
      <td>$13.50</td>
    </tr>
  </tfoot>
</table>`}
			/>
			<p className="mt-6 mb-2 font-medium">
				Resultado · tabla real renderizada:
			</p>
			<div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
				<table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900 text-sm">
					<thead className="text-left">
						<tr>
							<th className={`${tableHead} whitespace-nowrap`}>Producto</th>
							<th className={`${tableHead} whitespace-nowrap`}>Cantidad</th>
							<th className={`${tableHead} whitespace-nowrap`}>
								Precio Unitario
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
						<tr>
							<td
								className={`${tableCell} font-medium text-gray-900 dark:text-white`}
							>
								Manzanas
							</td>
							<td className={`${tableCell} text-gray-700 dark:text-gray-300`}>
								10
							</td>
							<td className={`${tableCell} text-gray-700 dark:text-gray-300`}>
								$0.50
							</td>
						</tr>
						<tr>
							<td
								className={`${tableCell} font-medium text-gray-900 dark:text-white`}
							>
								Naranjas
							</td>
							<td className={`${tableCell} text-gray-700 dark:text-gray-300`}>
								15
							</td>
							<td className={`${tableCell} text-gray-700 dark:text-gray-300`}>
								$0.40
							</td>
						</tr>
					</tbody>
					<tfoot className="bg-gray-50 dark:bg-gray-800">
						<tr>
							<td
								className={`${tableCell} font-medium text-gray-900 dark:text-white`}
							>
								Total
							</td>
							<td className={`${tableCell} text-gray-700 dark:text-gray-300`}>
								25
							</td>
							<td className={`${tableCell} text-gray-700 dark:text-gray-300`}>
								$13.50
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</section>

		<section>
			<SectionTitle index={2}>
				Combinación de Celdas: colspan y rowspan
			</SectionTitle>
			<p className="mb-4">
				A veces, una celda necesita ocupar el espacio de varias columnas o
				filas. Dos atributos clave:
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<MoveHorizontal className="h-5 w-5" aria-hidden />}
					title="colspan · columnas"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Extiende la celda <strong>horizontalmente</strong> a lo largo de
					múltiples columnas.
				</ConceptCard>
				<ConceptCard
					icon={<MoveVertical className="h-5 w-5" aria-hidden />}
					title="rowspan · filas"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					Extiende la celda <strong>verticalmente</strong> a lo largo de
					múltiples filas.
				</ConceptCard>
			</div>
			<CodeBlock
				language="html"
				codeString={`<table border="1">
  <thead>
    <tr>
      <th scope="col" rowspan="2">Día</th>
      <th scope="col" colspan="2">Horario</th>
    </tr>
    <tr>
      <th scope="col">Mañana</th>
      <th scope="col">Tarde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Lunes</th>
      <td>Clase A</td>
      <td>Clase B</td>
    </tr>
    <tr>
      <th scope="row">Martes</th>
      <td colspan="2">Libre</td>
    </tr>
  </tbody>
</table>`}
			/>
			<p className="mt-6 mb-2 font-medium">
				Resultado · mirá cómo “Día” baja dos filas y “Libre” abarca dos
				columnas:
			</p>
			<div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
				<table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 text-sm">
					<thead className="bg-gray-50 dark:bg-gray-800">
						<tr>
							<th rowSpan={2} className={`${tableHead} align-middle`}>
								Día
							</th>
							<th colSpan={2} className={`${tableHead} text-center`}>
								Horario
							</th>
						</tr>
						<tr>
							<th className={tableHead}>Mañana</th>
							<th className={tableHead}>Tarde</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
						<tr>
							<th
								className={`${tableCell} text-left font-medium text-gray-900 dark:text-white`}
							>
								Lunes
							</th>
							<td className={`${tableCell} text-gray-700 dark:text-gray-300`}>
								Clase A
							</td>
							<td className={`${tableCell} text-gray-700 dark:text-gray-300`}>
								Clase B
							</td>
						</tr>
						<tr>
							<th
								className={`${tableCell} text-left font-medium text-gray-900 dark:text-white`}
							>
								Martes
							</th>
							<td
								colSpan={2}
								className={`${tableCell} text-center text-gray-700 dark:text-gray-300`}
							>
								Libre
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section>
			<SectionTitle index={3}>
				Introducción a las Etiquetas Semánticas Estructurales
			</SectionTitle>
			<p className="mb-4">
				Antes de HTML5, todo se construía con <Code>&lt;div&gt;</Code>: una caja
				genérica <strong>sin ningún significado</strong>. HTML5 trajo etiquetas
				que describen el <strong>propósito</strong> de cada sección — vital para
				SEO y accesibilidad.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/40">
					<p className="flex items-center gap-2 font-semibold text-gray-500 dark:text-gray-400">
						<Ban className="h-5 w-5" aria-hidden />
						Antes · solo &lt;div&gt;
					</p>
					<div className="mt-3 space-y-2" aria-hidden>
						<div className="rounded bg-gray-200 px-3 py-2 font-mono text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400">
							&lt;div&gt;
						</div>
						<div className="rounded bg-gray-200 px-3 py-2 font-mono text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400">
							&lt;div&gt;
						</div>
						<div className="rounded bg-gray-200 px-3 py-2 font-mono text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400">
							&lt;div&gt;
						</div>
					</div>
					<p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
						Tres cajas idénticas: el navegador no sabe qué es qué.
					</p>
				</div>
				<div className="rounded-2xl border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-950/30">
					<p className="flex items-center gap-2 font-semibold text-green-800 dark:text-green-200">
						<LayoutTemplate className="h-5 w-5" aria-hidden />
						Ahora · semántica
					</p>
					<div className="mt-3 space-y-2 font-mono text-xs" aria-hidden>
						<div className="rounded bg-blue-200 px-3 py-2 text-blue-900 dark:bg-blue-900 dark:text-blue-100">
							&lt;header&gt; + &lt;nav&gt;
						</div>
						<div className="rounded bg-emerald-200 px-3 py-2 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100">
							&lt;main&gt; + &lt;section&gt;
						</div>
						<div className="rounded bg-amber-200 px-3 py-2 text-amber-900 dark:bg-amber-900 dark:text-amber-100">
							&lt;article&gt; + &lt;aside&gt;
						</div>
						<div className="rounded bg-purple-200 px-3 py-2 text-purple-900 dark:bg-purple-900 dark:text-purple-100">
							&lt;footer&gt;
						</div>
					</div>
					<p className="mt-2 text-xs text-green-900/70 dark:text-green-100/70">
						Cada parte declara su propósito.
					</p>
				</div>
			</div>

			<Subhead>Las siete etiquetas estructurales</Subhead>
			<p className="mb-4">
				Estas son las que le dan esqueleto a la página. Memorizalas como un
				mapa: <Code>&lt;header&gt;</Code> arriba, <Code>&lt;nav&gt;</Code>{" "}
				para moverte, <Code>&lt;main&gt;</Code> con el contenido único,{" "}
				<Code>&lt;section&gt;</Code> y <Code>&lt;article&gt;</Code> para
				agruparlo, <Code>&lt;aside&gt;</Code> para lo secundario y{" "}
				<Code>&lt;footer&gt;</Code> para cerrar.
			</p>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="<header>"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Encabezado de página o sección: logo, <Code>&lt;h1&gt;</Code> y a
					veces el <Code>&lt;nav&gt;</Code>.
				</ConceptCard>
				<ConceptCard
					icon={<Menu className="h-5 w-5" aria-hidden />}
					title="<nav>"
					iconClassName="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
				>
					Solo navegación principal: el menú del sitio, no cualquier lista de
					enlaces.
				</ConceptCard>
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="<main>"
					iconClassName="bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
				>
					El contenido único de la página. Uno solo por página, sin repetir
					en otras.
				</ConceptCard>
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="<section>"
					iconClassName="bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300"
				>
					Bloque temático dentro de <Code>&lt;main&gt;</Code>: un capítulo
					con su propio encabezado.
				</ConceptCard>
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="<article>"
					iconClassName="bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300"
				>
					Pieza autocontenida que se entiende sola: una noticia, un post, una
					tarjeta.
				</ConceptCard>
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="<aside>"
					iconClassName="bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300"
				>
					Lo secundario: barra lateral, avisos o enlaces relacionados al{" "}
					<Code>&lt;main&gt;</Code>.
				</ConceptCard>
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="<footer>"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Cierre de página o sección: autoría, copyright, contacto.
				</ConceptCard>
			</div>

			<Subhead>¿Y &lt;div&gt; y &lt;span&gt;?</Subhead>
			<Callout variant="warning" title="No son semánticas">
				<Code>&lt;div&gt;</Code> (bloque) y <Code>&lt;span&gt;</Code> (en
				línea) <strong>no describen nada</strong>. Usalas solo cuando ninguna
				de las siete de arriba aplica.
			</Callout>
			<CodeBlock
				language="html"
				codeString={`<body>
  <header>
    <h1>Mi Sitio Web</h1>
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/acerca">Acerca de</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section>
      <h2>Noticias</h2>
      <article>
        <h3>Mi primer artículo</h3>
        <p>Este contenido se entiende solo.</p>
      </article>
    </section>
    <aside>
      <h2>Enlaces relacionados</h2>
      <p>Contenido secundario.</p>
    </aside>
  </main>

  <footer>
    <p>&copy; 2024 - Todos los derechos reservados.</p>
  </footer>
</body>`}
			/>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
				<Table className="h-6 w-6 text-blue-500" aria-hidden />📝 Tarea: Mi
				Horario de Clases
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Organizarás tu horario semanal con una tabla y estructurarás la página
				con las etiquetas semánticas aprendidas.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Crea el Archivo">
					Crea <Code>horario.html</Code>.
				</Step>
				<Step number={2} title="Parte 1: La Tabla del Horario">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>Tabla de lunes a viernes.</CheckItem>
						<CheckItem>
							<Code>&lt;thead&gt;</Code> con los días;{" "}
							<Code>&lt;tbody&gt;</Code> con horas y clases.
						</CheckItem>
						<CheckItem>
							Estructura pura: <Code>&lt;table&gt;</Code>,{" "}
							<Code>&lt;tr&gt;</Code>, <Code>&lt;th scope&gt;</Code> y{" "}
							<Code>&lt;td&gt;</Code>, sin clases ni estilos.
						</CheckItem>
						<CheckItem>
							<strong>Reto:</strong> <Code>rowspan="2"</Code> para la clase de
							dos horas; <Code>colspan</Code> con “Libre” en la tarde libre.
						</CheckItem>
					</ul>
				</Step>
				<Step number={3} title="Parte 2: Estructura Semántica">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							<Code>&lt;header&gt;</Code> con <Code>&lt;h1&gt;</Code> “Mi
							Horario Semanal”.
						</CheckItem>
						<CheckItem>
							<Code>&lt;nav&gt;</Code> con enlace a <Code>index.html</Code>.
						</CheckItem>
						<CheckItem>
							La tabla dentro del cuerpo (en un <Code>&lt;div&gt;</Code> si
							querés).
						</CheckItem>
						<CheckItem>
							<Code>&lt;footer&gt;</Code> con tu nombre y el año.
						</CheckItem>
					</ul>
				</Step>
				<Step number={4} title="Visualiza">
					Abre <Code>horario.html</Code> con Live Server.
				</Step>
			</ol>
			<Callout variant="success" title="Cierre">
				Tabla semántica + estructura semántica: la base de cualquier diseño web
				moderno.
			</Callout>
		</section>
	</div>
);

export default Lecture5Es;
