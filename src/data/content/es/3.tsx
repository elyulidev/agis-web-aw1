import CodeBlock from "@/components/ui/code-block";

const Lecture3Es = () => (
	<div className='space-y-8'>
		<section>
			<p>
				¡Hola de nuevo y bienvenidos a la tercera conferencia de nuestro módulo!
				En la sesión anterior sentamos las bases de la estructura de un
				documento HTML. Hoy, vamos a profundizar en cómo dar formato y
				estructura al texto y a las listas, que son los componentes principales
				de casi cualquier página web.
			</p>
			<p className='mt-4'>
				Hoy el tema central será la <strong>semántica</strong>: el arte de usar
				las etiquetas HTML correctas para describir el significado de nuestro
				contenido, no solo su apariencia. Esto es fundamental para la
				accesibilidad y el SEO.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Etiquetas de Formato de Texto: Más Allá de la Apariencia
			</h3>
			<p className='mb-4'>
				Cuando damos formato al texto, es crucial diferenciar entre las
				etiquetas que son puramente presentacionales (visuales) y las que son
				semánticas (con significado).
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Negritas: &lt;b&gt; vs. &lt;strong&gt;
			</h4>
			<p className='mb-4'>
				Ambas etiquetas hacen que el texto aparezca en negrita, pero su
				propósito es muy diferente.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;b&gt; (Bold - Negrita):</strong> Esta es una etiqueta
					presentacional. Se usa para llamar la atención del lector sobre una
					palabra o frase sin darle una importancia especial. Piensa en ella
					como una ayuda visual, como resaltar el nombre de un producto en una
					reseña.
				</li>
				<li>
					<strong>&lt;strong&gt; (Importancia Fuerte):</strong> Esta es una
					etiqueta semántica. Indica que el contenido tiene una gran
					importancia, seriedad o urgencia. Un lector de pantalla podría cambiar
					el tono de voz para enfatizar este texto.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<p>Esta receta necesita <b>harina de trigo</b> y azúcar.</p>
<p><strong>Advertencia:</strong> El suelo está mojado.</p>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Cursivas: &lt;i&gt; vs. &lt;em&gt;
			</h4>
			<p className='mb-4'>
				Al igual que con las negritas, aquí también tenemos una diferencia entre
				lo visual y lo semántico.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;i&gt; (Italic - Cursiva):</strong> Esta etiqueta se usa
					para distinguir un texto del resto, pero sin un énfasis particular. Es
					ideal para términos técnicos, nombres de barcos, pensamientos o frases
					en otro idioma.
				</li>
				<li>
					<strong>&lt;em&gt; (Emphasis - Énfasis):</strong> Es una etiqueta
					semántica que se usa para dar énfasis a una palabra o frase, lo que
					puede cambiar el significado de la oración.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<p>El término <i>Homo sapiens</i> se refiere a nuestra especie.</p>
<p>Debes hacerlo <em>ahora</em>, no después.</p>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Subrayado: &lt;u&gt; vs. &lt;ins&gt;
			</h4>
			<p className='mb-4'>
				El uso de <code>&lt;u&gt;</code> se ha vuelto poco común porque los
				usuarios asocian el texto subrayado con enlaces.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;u&gt; (Underline - Subrayado):</strong> Su uso semántico
					se reserva para anotaciones no textuales, como marcar una palabra mal
					escrita.
				</li>
				<li>
					<strong>&lt;ins&gt; (Inserted - Insertado):</strong> Es una etiqueta
					semántica que se usa para marcar contenido que ha sido añadido a un
					documento, indicando una edición o actualización.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<p>Esta palabra está mal <u class="decoration-red-500 underline-wavy">escribida</u>.</p>
<p>El precio es de <del>$100</del> <ins>$75</ins> por tiempo limitado.</p>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Subíndice (&lt;sub&gt;) y Superíndice (&lt;sup&gt;)
			</h4>
			<p className='mb-4'>
				Estas etiquetas son muy útiles para fórmulas matemáticas o químicas.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;sub&gt; (Subscript):</strong> Coloca el texto como un
					subíndice, ligeramente por debajo de la línea normal.
				</li>
				<li>
					<strong>&lt;sup&gt; (Superscript):</strong> Coloca el texto como un
					superíndice, ligeramente por encima.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<p>La fórmula del agua es H<sub>2</sub>O.</p>
<p>El teorema de Pitágoras es a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>.</p>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Otras Etiquetas de Formato de Texto Útiles
			</h4>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;small&gt;:</strong> Representa texto secundario o "letra
					pequeña", como comentarios legales o derechos de autor.
				</li>
				<li>
					<strong>&lt;mark&gt;:</strong> Se utiliza para resaltar texto por su
					relevancia en un contexto particular, como en resultados de búsqueda.
				</li>
				<li>
					<strong>&lt;time&gt;:</strong> Envuelve fechas y horas, con un
					atributo <code>datetime</code> para que las máquinas lo entiendan.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<p>El resultado de la búsqueda para <mark>HTML</mark> arrojó 5 millones de páginas.</p>
<p>La reunión está programada para el <time datetime="2024-10-26T10:00">26 de Octubre a las 10:00 AM</time>.</p>
<footer>
  <p><small>&copy; 2024 Mi Curso Web. Todos los derechos reservados.</small></p>
</footer>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Listas: Ordenadas, Desordenadas y de Definición
			</h3>
			<p className='mb-4'>
				Las listas son fundamentales para agrupar y estructurar contenido
				relacionado. Se componen de un elemento contenedor (
				<code>&lt;ol&gt;</code>, <code>&lt;ul&gt;</code>,{" "}
				<code>&lt;dl&gt;</code>) que contiene elementos de lista (
				<code>&lt;li&gt;</code>, <code>&lt;dt&gt;</code>,{" "}
				<code>&lt;dd&gt;</code>).
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Listas Desordenadas &lt;ul&gt;
			</h4>
			<p className='mb-4'>
				Se utilizan para agrupar elementos cuyo orden no es importante. Por
				defecto, se muestran con viñetas.
			</p>
			<CodeBlock
				language='html'
				codeString={`<h4>Lista de compras:</h4>
<ul>
  <li>Leche</li>
  <li>Pan</li>
  <li>Huevos</li>
</ul>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Listas Ordenadas &lt;ol&gt;
			</h4>
			<p className='mb-4'>
				Se utilizan cuando la secuencia de los elementos es crucial, como en los
				pasos de una receta o un ranking.
			</p>
			<CodeBlock
				language='html'
				codeString={`<h4>Instrucciones:</h4>
<ol>
  <li>Batir los huevos.</li>
  <li>Calentar el sartén.</li>
  <li>Verter la mezcla.</li>
</ol>`}
			/>

			<h5 className='text-lg font-semibold mt-6 mb-2'>
				Atributos para Listas Ordenadas
			</h5>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>type:</strong> Cambia el tipo de marcador ("1", "a", "A", "i",
					"I").
				</li>
				<li>
					<strong>start:</strong> Especifica el número desde el cual debe
					comenzar la lista.
				</li>
				<li>
					<strong>reversed:</strong> Es un atributo booleano que invierte el
					orden de la numeración.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<p>Top 3 países (en orden alfabético inverso):</p>
<ol type="A" start="3" reversed>
  <li>España</li>
  <li>Brasil</li>
  <li>Argentina</li>
</ol>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Listas de Definición &lt;dl&gt;
			</h4>
			<p className='mb-4'>
				Este tipo de lista es increíblemente útil para glosarios o cualquier
				lista de pares de término y definición. Se compone de tres etiquetas:{" "}
				<code>&lt;dl&gt;</code> (contenedor), <code>&lt;dt&gt;</code> (término)
				y <code>&lt;dd&gt;</code> (descripción).
			</p>
			<CodeBlock
				language='html'
				codeString={`<dl>
  <dt>HTML</dt>
  <dd>Lenguaje de Marcas de Hipertexto, usado para estructurar el contenido web.</dd>
  <dt>CSS</dt>
  <dd>Hojas de Estilo en Cascada, usado para dar estilo a la presentación del contenido.</dd>
</dl>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: La Página de tu Receta Favorita
			</h3>
			<p className='mb-4'>
				¡Es hora de cocinar con código! En esta tarea, crearás una página web
				para tu receta favorita, aplicando todo lo que has aprendido sobre
				formato de texto y listas.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Crea el Archivo:</strong> Crea un nuevo archivo llamado{" "}
					<code>receta.html</code> en tu proyecto.
				</li>
				<li>
					<strong>Estructura Base:</strong> Genera la estructura HTML básica con
					Emmet (<code>!</code>) y configura la sección{" "}
					<code>&lt;head&gt;</code> adecuadamente (título, metadatos, etc.).
				</li>
				<li>
					<strong>Contenido de la Receta:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Usa un <code>&lt;h1&gt;</code> para el nombre de la receta.
						</li>
						<li>
							Escribe una breve introducción en un párrafo{" "}
							<code>&lt;p&gt;</code>. Usa <code>&lt;em&gt;</code> para enfatizar
							lo deliciosa que es.
						</li>
						<li>
							Añade una sección de "Ingredientes" con un <code>&lt;h2&gt;</code>
							. Usa una <strong>lista desordenada</strong> (
							<code>&lt;ul&gt;</code>) para los ingredientes. Resalta el
							ingrediente más importante con <code>&lt;strong&gt;</code>.
						</li>
						<li>
							Crea una sección de "Instrucciones" con otro{" "}
							<code>&lt;h2&gt;</code>. Usa una <strong>lista ordenada</strong> (
							<code>&lt;ol&gt;</code>) para los pasos.
						</li>
						<li>
							Añade una sección de "Glosario de Cocina" con un{" "}
							<code>&lt;h2&gt;</code>. Usa una{" "}
							<strong>lista de definición</strong> (<code>&lt;dl&gt;</code>)
							para explicar dos términos de cocina que aparezcan en tu receta
							(ej: "Saltear", "Baño María").
						</li>
						<li>
							Incluye una nota importante usando la etiqueta{" "}
							<code>&lt;mark&gt;</code>, por ejemplo:{" "}
							<mark>¡Cuidado con el horno caliente!</mark>
						</li>
						<li>
							Al final, añade los derechos de autor con la etiqueta{" "}
							<code>&lt;small&gt;</code>.
						</li>
					</ul>
				</li>
				<li>
					<strong>Visualiza:</strong> Abre <code>receta.html</code> con Live
					Server y comprueba que todo se vea como esperas.
				</li>
			</ol>
			<p>
				Esta tarea te ayudará a dominar la organización de contenido y a
				entender el poder de la semántica en HTML.
			</p>
		</section>
	</div>
);

export default Lecture3Es;
