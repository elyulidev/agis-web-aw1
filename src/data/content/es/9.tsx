import CodeBlock from "@/components/ui/code-block";

const Lecture9Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Más Allá de lo Básico: Selectores Relacionales
			</h3>
			<p className='mb-4'>
				Hemos aprendido a seleccionar elementos por su tipo, clase o ID. Ahora,
				daremos un paso más allá y aprenderemos a seleccionar elementos
				basándonos en su <strong>relación y posición</strong> en el árbol del
				DOM. Esto nos da un control mucho más preciso.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Combinadores: Seleccionando por Relación
			</h3>
			<p className='mb-4'>
				Los combinadores nos permiten seleccionar elementos basándonos en su
				relación con otro elemento.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>Selector Descendiente (espacio)</strong>: Selecciona todos los
					elementos que son descendientes (hijos, nietos, etc.) de un elemento
					especificado.
					<CodeBlock
						language='css'
						codeString={`/* Selecciona TODOS los <a> dentro de un <nav> */
nav a {
  color: teal;
}`}
					/>
				</li>
				<li>
					<strong>Selector de Hijo Directo (`&gt;`)</strong>: Selecciona solo
					los elementos que son hijos directos de un elemento especificado.
					<CodeBlock
						language='css'
						codeString={`/* Selecciona solo los <li> que son hijos directos de un <ul> */
ul > li {
  list-style-type: square;
}`}
					/>
				</li>
				<li>
					<strong>Selector de Hermano Adyacente (`+`)</strong>: Selecciona el
					elemento que viene <strong>inmediatamente después</strong> de otro
					elemento especificado, si ambos son hermanos.
					<CodeBlock
						language='css'
						codeString={`/* Selecciona el primer <p> que viene justo después de un <h1> */
h1 + p {
  margin-top: 0;
  font-style: italic;
}`}
					/>
				</li>
				<li>
					<strong>Selector de Hermanos Generales (`~`)</strong>: Selecciona{" "}
					<strong>todos</strong> los hermanos que vienen después de un elemento
					especificado.
					<CodeBlock
						language='css'
						codeString={`/* Selecciona todos los <p> que son hermanos y vienen después de un <h2> */
h2 ~ p {
  text-indent: 2em;
}`}
					/>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>3. Selector de Atributo</h3>
			<p className='mb-4'>
				Podemos seleccionar elementos basándonos en la presencia o el valor de
				sus atributos HTML.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<code>[attribute]</code>: Selecciona elementos que tienen el atributo.
					Ej: <code>a[target]</code>.
				</li>
				<li>
					<code>[attribute="value"]</code>: Selecciona elementos donde el
					atributo tiene un valor exacto. Ej: <code>input[type="submit"]</code>.
				</li>
				<li>
					<code>[attribute*="value"]</code>: Selecciona elementos donde el valor
					del atributo contiene una subcadena. Ej:{" "}
					<code>a[href*="google.com"]</code>.
				</li>
				<li>
					<code>[attribute^="value"]</code>: Selecciona elementos donde el valor
					del atributo comienza con la cadena. Ej: <code>a[href^="https"]</code>
					.
				</li>
				<li>
					<code>[attribute$="value"]</code>: Selecciona elementos donde el valor
					del atributo termina con la cadena. Ej: <code>img[src$=".pdf"]</code>.
				</li>
			</ul>
			<CodeBlock
				language='css'
				codeString={`/* Estiliza todos los enlaces que abren en una nueva pestaña */
a[target="_blank"] {
  background-color: yellow;
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Pseudo-clases: Seleccionando por Estado y Posición
			</h3>
			<p className='mb-4'>
				Las pseudo-clases son palabras clave que se añaden a los selectores para
				especificar un estado especial o una posición del elemento seleccionado.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Pseudo-clases de Interacción del Usuario
			</h4>
			<p className='mb-4'>
				Son fundamentales para la interactividad y el feedback visual.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`:hover`</strong>: Se aplica cuando el usuario pasa el cursor
					sobre un elemento.
				</li>
				<li>
					<strong>`:active`</strong>: Se aplica mientras el usuario está
					haciendo clic en un elemento.
				</li>
				<li>
					<strong>`:focus`</strong>: Se aplica a elementos de formulario (como{" "}
					<code>&lt;input&gt;</code>) cuando están seleccionados.
				</li>
			</ul>
			<CodeBlock
				language='css'
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

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Pseudo-clases Estructurales
			</h4>
			<p className='mb-4'>
				Seleccionan elementos basándose en su posición en el árbol del DOM.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`:first-child`</strong>: Selecciona el primer elemento entre
					un grupo de hermanos.
				</li>
				<li>
					<strong>`:last-child`</strong>: Selecciona el último elemento.
				</li>
				<li>
					<strong>`:nth-child(n)`</strong>: El más versátil. Selecciona
					elementos basándose en una fórmula.
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							<code>:nth-child(3)</code>: Selecciona el tercer hijo.
						</li>
						<li>
							<code>:nth-child(odd)</code>: Selecciona los hijos impares (1, 3,
							5...).
						</li>
						<li>
							<code>:nth-child(even)</code>: Selecciona los hijos pares (2, 4,
							6...).
						</li>
						<li>
							<code>:nth-child(2n+1)</code>: Otra forma de seleccionar los
							impares.
						</li>
					</ul>
				</li>
			</ul>
			<CodeBlock
				language='css'
				codeString={`/* Elimina el borde superior del primer item de una lista */
li:first-child {
  border-top: none;
}

/* Estilo de "cebra" para las filas de una tabla */
tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Menú Interactivo y Lista Estilizada
			</h3>
			<p className='mb-4'>
				Aplicaremos estos nuevos selectores para crear un menú de navegación que
				reaccione al usuario y una lista con estilo alternado.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Crea el HTML:</strong> Crea una estructura de navegación con
					una <code>&lt;nav&gt;</code> que contenga una <code>&lt;ul&gt;</code>,
					y esta a su vez varios <code>&lt;li&gt;</code> con enlaces{" "}
					<code>&lt;a&gt;</code> dentro. Añade también una lista ordenada{" "}
					<code>&lt;ol&gt;</code> con varios ítems.
				</li>
				<li>
					<strong>Estiliza el Menú:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Usa un <strong>selector descendiente</strong> (`nav a`) para dar
							un estilo base a todos los enlaces del menú.
						</li>
						<li>
							Usa la pseudo-clase <strong>`:hover`</strong> en los enlaces para
							que cambien de color o se subrayen cuando el usuario pase el
							cursor sobre ellos.
						</li>
					</ul>
				</li>
				<li>
					<strong>Estiliza la Lista Ordenada:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Usa <strong>`:nth-child(odd)`</strong> para dar un color de fondo
							a las filas impares de tu lista ordenada.
						</li>
						<li>
							Usa <strong>`:first-child`</strong> para hacer que el texto del
							primer ítem esté en negrita (<code>font-weight: bold;</code>).
						</li>
						<li>
							Usa <strong>`:last-child`</strong> para añadir un borde inferior
							especial solo al último ítem.
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture9Es;
