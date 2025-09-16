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
				está obsoleta gracias a CSS.
			</p>
			<p className='mb-4'>La estructura de una tabla se compone de:</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;table&gt;:</strong> La etiqueta que envuelve toda la
					tabla.
				</li>
				<li>
					<strong>&lt;tr&gt; (Table Row):</strong> Define una fila horizontal.
				</li>
				<li>
					<strong>&lt;td&gt; (Table Data):</strong> Define una celda de datos
					estándar dentro de una fila.
				</li>
				<li>
					<strong>&lt;th&gt; (Table Header):</strong> Define una celda de
					encabezado. Los navegadores la muestran en negrita y centrada por
					defecto.
				</li>
			</ul>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Estructura Semántica de Tabla
			</h4>
			<p className='mb-4'>
				Para tablas más complejas y semánticamente correctas, usamos agrupadores
				de filas que mejoran la organización y la accesibilidad:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;thead&gt;:</strong> Agrupa el contenido del encabezado de
					la tabla (la fila con los <code>&lt;th&gt;</code>).
				</li>
				<li>
					<strong>&lt;tbody&gt;:</strong> Agrupa el contenido principal o el
					cuerpo de la tabla.
				</li>
				<li>
					<strong>&lt;tfoot&gt;:</strong> Agrupa el contenido del pie de la
					tabla, como resúmenes o totales.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<table border="1" style="width:100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th>Producto</th>
      <th>Cantidad</th>
      <th>Precio Unitario</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Manzanas</td>
      <td>10</td>
      <td>$0.50</td>
    </tr>
    <tr>
      <td>Naranjas</td>
      <td>15</td>
      <td>$0.40</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>25</td>
      <td>$13.50</td>
    </tr>
  </tfoot>
</table>`}
			/>
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
				codeString={`<table border="1" style="width:100%; text-align:center; border-collapse: collapse;">
  <thead>
    <tr>
      <th rowspan="2">Día</th>
      <th colspan="2">Horario</th>
    </tr>
    <tr>
      <th>Mañana</th>
      <th>Tarde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Lunes</th>
      <td>Clase A</td>
      <td>Clase B</td>
    </tr>
    <tr>
      <th>Martes</th>
      <td colspan="2">Libre</td>
    </tr>
  </tbody>
</table>`}
			/>
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
     que veremos más adelante. -->

  <div class="contenedor-principal">
    <p>Este es el contenido principal de la página.
       Aquí hay una <span style="color:red;">palabra</span> importante.
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
