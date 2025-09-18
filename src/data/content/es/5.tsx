import CodeBlock from "@/components/ui/code-block";

const Lecture5Es = () => (
	<div className='space-y-8'>
		<section>
			<p>
				¡Bienvenidos a la quinta conferencia! Hoy vamos a estructurar dos tipos
				de contenido. Primero, aprenderemos a manejar datos tabulares de una
				manera semántica y accesible usando tablas. Luego, daremos un gran paso
				en la organización de nuestras páginas introduciendo las etiquetas
				semánticas estructurales, que son la base de cualquier diseño web
				moderno.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Tablas (&lt;table&gt;): Estructura y Semántica
			</h3>
			<p className='mb-4'>
				Las tablas se utilizan{" "}
				<strong>exclusivamente para presentar datos tabulares</strong>, como
				hojas de cálculo, estadísticas o calendarios. En el pasado, se usaban
				incorrectamente para la maquetación de páginas, una práctica que hoy
				está obsoleta y se resuelve con CSS. Para que una tabla sea responsiva
				en pantallas pequeñas, la envolvemos en un contenedor que permita el
				desplazamiento horizontal.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Estructura Semántica y Estilizada de una Tabla
			</h4>
			<p className='mb-4'>
				Para tablas complejas y semánticamente correctas, usamos agrupadores de
				filas que mejoran la organización y la accesibilidad:{" "}
				<code>&lt;thead&gt;</code> para el encabezado,{" "}
				<code>&lt;tbody&gt;</code> para el cuerpo principal y{" "}
				<code>&lt;tfoot&gt;</code> para el pie de tabla. En lugar de usar el
				atributo obsoleto <code>border="1"</code> o estilos en línea, aplicamos
				clases de CSS (en este caso, de Tailwind) para el diseño, lo que las
				hace adaptables y fáciles de mantener.
			</p>
			<CodeBlock
				language='html'
				codeString={`
<div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
  <table class="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900 text-sm">
    <thead class="text-left">
      <tr>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Producto</th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Cantidad</th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Precio Unitario</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Manzanas</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">10</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">$0.50</td>
      </tr>
      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Naranjas</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">15</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">$0.40</td>
      </tr>
    </tbody>
    <tfoot class="bg-gray-50 dark:bg-gray-800">
      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Total</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">25</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">$13.50</td>
      </tr>
    </tfoot>
  </table>
</div>
`}
			/>
			<h5 className='text-lg font-semibold mt-6 mb-2'>Resultado:</h5>
			<div className='overflow-x-auto my-6 rounded-lg border border-gray-200 dark:border-gray-700'>
				<table className='min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900 text-sm'>
					<thead className='text-left'>
						<tr>
							<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
								Producto
							</th>
							<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
								Cantidad
							</th>
							<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
								Precio Unitario
							</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
						<tr>
							<td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
								Manzanas
							</td>
							<td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300'>
								10
							</td>
							<td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300'>
								$0.50
							</td>
						</tr>
						<tr>
							<td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
								Naranjas
							</td>
							<td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300'>
								15
							</td>
							<td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300'>
								$0.40
							</td>
						</tr>
					</tbody>
					<tfoot className='bg-gray-50 dark:bg-gray-800'>
						<tr>
							<td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
								Total
							</td>
							<td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300'>
								25
							</td>
							<td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300'>
								$13.50
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Combinación de Celdas: colspan y rowspan
			</h3>
			<p className='mb-4'>
				A veces, una celda necesita ocupar el espacio de varias columnas o
				filas. Para esto usamos dos atributos clave:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>colspan:</strong> Permite que una celda se extienda
					horizontalmente a lo largo de múltiples <strong>columnas</strong>.
				</li>
				<li>
					<strong>rowspan:</strong> Permite que una celda se extienda
					verticalmente a lo largo de múltiples <strong>filas</strong>.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
    <thead class="bg-gray-50 dark:bg-gray-800">
      <tr>
        <th rowspan="2" class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">Día</th>
        <th colspan="2" class="px-4 py-2 text-center font-medium text-gray-900 dark:text-white">Horario</th>
      </tr>
      <tr>
        <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">Mañana</th>
        <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">Tarde</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
      <tr>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-left text-gray-900 dark:text-white">Lunes</th>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">Clase A</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">Clase B</td>
      </tr>
      <tr>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-left text-gray-900 dark:text-white">Martes</th>
        <td colspan="2" class="whitespace-nowrap px-4 py-2 text-center text-gray-700 dark:text-gray-300">Libre</td>
      </tr>
    </tbody>
  </table>
</div>`}
			/>
			<h5 className='text-lg font-semibold mt-6 mb-2'>Resultado:</h5>
			<div className='overflow-x-auto my-6 rounded-lg border border-gray-200 dark:border-gray-700'>
				<table className='min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 text-sm'>
					<thead className='bg-gray-50 dark:bg-gray-800'>
						<tr>
							<th
								rowSpan={2}
								className='px-4 py-2 text-left font-medium text-gray-900 dark:text-white align-middle'
							>
								Día
							</th>
							<th
								colSpan={2}
								className='px-4 py-2 text-center font-medium text-gray-900 dark:text-white'
							>
								Horario
							</th>
						</tr>
						<tr>
							<th className='px-4 py-2 text-left font-medium text-gray-900 dark:text-white'>
								Mañana
							</th>
							<th className='px-4 py-2 text-left font-medium text-gray-900 dark:text-white'>
								Tarde
							</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
						<tr>
							<th className='whitespace-nowrap px-4 py-2 font-medium text-left text-gray-900 dark:text-white'>
								Lunes
							</th>
							<td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300'>
								Clase A
							</td>
							<td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300'>
								Clase B
							</td>
						</tr>
						<tr>
							<th className='whitespace-nowrap px-4 py-2 font-medium text-left text-gray-900 dark:text-white'>
								Martes
							</th>
							<td
								colSpan={2}
								className='whitespace-nowrap px-4 py-2 text-center text-gray-700 dark:text-gray-300'
							>
								Libre
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Introducción a las Etiquetas Semánticas Estructurales
			</h3>
			<p className='mb-4'>
				Antes de HTML5, la estructura de una página se construía casi
				exclusivamente con <code>&lt;div&gt;</code>. Un <code>&lt;div&gt;</code>{" "}
				no tiene ningún significado; es solo una caja genérica. HTML5 introdujo
				etiquetas que describen el <strong>propósito</strong> de cada sección,
				lo cual es vital para el SEO y la accesibilidad.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;header&gt;:</strong> Representa el encabezado de una
					página o sección. Generalmente contiene el logo, el título principal (
					<code>&lt;h1&gt;</code>) y el menú de navegación.
				</li>
				<li>
					<strong>&lt;nav&gt;:</strong> Se usa para agrupar los enlaces de
					navegación principales del sitio.
				</li>
				<li>
					<strong>&lt;footer&gt;:</strong> Representa el pie de página. Suele
					contener información de copyright, enlaces a políticas de privacidad,
					datos de contacto, etc.
				</li>
				<li>
					<strong>&lt;div&gt; (Division):</strong> Sigue siendo fundamental.
					Úsalo cuando ninguna otra etiqueta semántica sea apropiada. Es un
					contenedor genérico perfecto para agrupar elementos con fines de
					estilo.
				</li>
				<li>
					<strong>&lt;span&gt;:</strong> Es el equivalente en línea del{" "}
					<code>&lt;div&gt;</code>. Se usa para agrupar contenido dentro de un
					bloque (como una palabra en un párrafo) para aplicarle un estilo
					específico.
				</li>
			</ul>
			<CodeBlock
				language='html'
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

  <!-- El contenido principal de la página iría aquí,
     usando etiquetas como <main>, <section>, <article>
     que veremos en la próxima lección. -->

  <div class="contenedor-principal">
    <p>Este es el contenido principal de la página.
       Aquí hay una <span class="text-red-600">palabra</span> importante.
    </p>
  </div>

  <footer>
    <p>&copy; 2024 - Todos los derechos reservados.</p>
  </footer>
</body>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Mi Horario de Clases
			</h3>
			<p className='mb-4'>
				En esta tarea, organizarás tu horario semanal usando una tabla y luego
				estructurarás una página simple con las etiquetas semánticas que hemos
				aprendido.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Crea el Archivo:</strong> Crea un nuevo archivo llamado{" "}
					<code>horario.html</code>.
				</li>
				<li>
					<strong>Parte 1: La Tabla del Horario</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Crea una tabla para tu horario de clases de lunes a viernes.
						</li>
						<li>
							Usa <code>&lt;thead&gt;</code> para los encabezados de los días de
							la semana (Lunes, Martes, etc.).
						</li>
						<li>
							Usa <code>&lt;tbody&gt;</code> para las filas que representan las
							horas y las clases.
						</li>
						<li>
							Asegúrate de que la tabla sea responsiva, envolviéndola en un{" "}
							<code>div</code> con <code>overflow-x-auto</code> y estilízala con
							clases de Tailwind.
						</li>
						<li>
							<strong>Reto:</strong> Si tienes una clase que dura dos horas, usa{" "}
							<code>rowspan="2"</code> para que la celda de la clase ocupe dos
							filas. Si un día tienes la tarde libre, usa <code>colspan</code>{" "}
							en una celda que diga "Libre".
						</li>
					</ul>
				</li>
				<li>
					<strong>Parte 2: Estructura Semántica de la Página</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Envuelve toda tu página en las etiquetas semánticas básicas.
						</li>
						<li>
							Crea un <code>&lt;header&gt;</code> que contenga un{" "}
							<code>&lt;h1&gt;</code> con el título "Mi Horario Semanal".
						</li>
						<li>
							Dentro del header, añade un <code>&lt;nav&gt;</code> con un enlace
							simple a tu página <code>index.html</code>.
						</li>
						<li>
							Coloca la tabla que creaste en la Parte 1 dentro de la sección
							principal del cuerpo de la página. Puedes envolverla en un{" "}
							<code>&lt;div&gt;</code> si quieres.
						</li>
						<li>
							Crea un <code>&lt;footer&gt;</code> al final de la página con tu
							nombre y el año.
						</li>
					</ul>
				</li>
				<li>
					<strong>Visualiza:</strong> Abre <code>horario.html</code> con Live
					Server para ver tu tabla y la estructura de la página.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture5Es;
