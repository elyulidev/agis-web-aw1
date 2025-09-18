import CodeBlock from "@/components/ui/code-block";

const Lecture10Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Pseudo-elementos: Estilizando Partes de un Elemento
			</h3>
			<p className='mb-4'>
				A diferencia de las pseudo-clases que seleccionan un elemento completo
				en un estado particular, los <strong>pseudo-elementos</strong> nos
				permiten estilizar una parte específica de un elemento o incluso añadir
				contenido cosmético sin necesidad de HTML adicional. Se distinguen por
				usar dos puntos dobles (<code>::</code>).
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`::before` y `::after`</strong>: Los más potentes. Crean un
					pseudo-elemento antes o después del contenido real de un elemento.
					Siempre deben usarse con la propiedad <code>content</code>. Son
					perfectos para añadir iconos, comillas decorativas o formas.
					<CodeBlock
						language='css'
						codeString={`blockquote {
  font-style: italic;
  position: relative; /* Necesario para posicionar los pseudo-elementos */
}

blockquote::before {
  content: '“'; /* El contenido es obligatorio */
  font-size: 4em;
  color: #ddd;
  position: absolute;
  left: -0.5em;
  top: -0.2em;
}`}
					/>
				</li>
				<li>
					<strong>`::first-letter`</strong>: Selecciona la primera letra del
					texto dentro de un elemento de bloque. Ideal para crear capitulares.
					<CodeBlock
						language='css'
						codeString={`p::first-letter {
  font-size: 200%;
  font-weight: bold;
  color: #2980b9;
}`}
					/>
				</li>
				<li>
					<strong>`::first-line`</strong>: Selecciona la primera línea de texto
					de un elemento de bloque.
					<CodeBlock
						language='css'
						codeString={`p::first-line {
  color: #7f8c8d;
}`}
					/>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. El Algoritmo de CSS: ¿Quién Gana la Batalla de Estilos?
			</h3>
			<p className='mb-4'>
				¿Alguna vez te has preguntado por qué una regla de CSS funciona y otra
				no? El navegador sigue un conjunto de reglas muy claras para resolver
				conflictos cuando múltiples estilos se aplican al mismo elemento. Este
				algoritmo se basa en tres conceptos:
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>3. Cascada y Herencia</h3>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>La Cascada (The Cascade):</strong> El "orden de llegada"
					importa. Si dos reglas tienen la misma importancia, la que se declara{" "}
					<strong>más tarde</strong> en el CSS gana. Por eso, el orden de tus
					archivos CSS en el HTML es importante.
					<CodeBlock
						language='css'
						codeString={`p { color: blue; }
p { color: red; } /* Este gana, el párrafo será rojo */`}
					/>
				</li>
				<li>
					<strong>Herencia (Inheritance):</strong> Algunos (no todos) los
					estilos aplicados a un elemento padre son "heredados" por sus
					elementos hijos. Propiedades como <code>color</code>,{" "}
					<code>font-family</code>, <code>font-size</code> y{" "}
					<code>text-align</code> se heredan. Propiedades como{" "}
					<code>border</code>, <code>padding</code> o{" "}
					<code>background-color</code> no.
					<CodeBlock
						language='html'
						codeString={`<div style="color: green;">
  <p>Este texto es verde porque hereda el color del div.</p>
</div>`}
					/>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Especificidad: La Regla Más Importante
			</h3>
			<p className='mb-4'>
				La especificidad es el cálculo que hace el navegador para decidir qué
				selector es más "específico" y, por lo tanto, cuál regla debe aplicar.
				Es la causa más común de "mi CSS no funciona".
			</p>
			<p className='mb-4'>
				La jerarquía, de más a menos específico, es la siguiente:
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Estilos en Línea (Inline Styles):</strong> Un atributo{" "}
					<code>style</code> siempre gana sobre las hojas de estilo.
				</li>
				<li>
					<strong>IDs (`#id`):</strong> Un selector de ID es extremadamente
					específico.
				</li>
				<li>
					<strong>
						Clases (`.class`), Pseudo-clases (`:hover`), Selectores de Atributo
						(`[type="text"]`)
					</strong>
					: Todos tienen el mismo nivel de especificidad.
				</li>
				<li>
					<strong>
						Selectores de Tipo/Etiqueta (`p`, `div`) y Pseudo-elementos
						(`::before`)
					</strong>
					: Son los menos específicos.
				</li>
			</ol>
			<p>
				El selector universal (`*`) y los combinadores (`&gt;`, `+`, `~`) no
				tienen valor de especificidad.
			</p>

			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					¿Cómo se calcula?
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					El navegador cuenta cuántos IDs, clases y etiquetas hay en un
					selector. <code>#nav .link</code> (1 ID, 1 clase) es más específico
					que <code>div a.button.active</code> (0 IDs, 3 clases).
				</p>
			</div>

			<CodeBlock
				language='html'
				codeString={`<p id="parrafo-importante" class="texto-azul">Hola Mundo</p>`}
			/>
			<CodeBlock
				language='css'
				codeString={`#parrafo-importante { color: red; }   /* GANA (1 ID) */
.texto-azul { color: blue; }     /* Pierde (1 Clase) */
p { color: green; }               /* Pierde (1 Etiqueta) */`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: El Puzzle de la Especificidad
			</h3>
			<p className='mb-4'>
				Aplica tus conocimientos sobre pseudo-elementos y resuelve un pequeño
				puzzle de especificidad.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>HTML:</strong> Crea un elemento{" "}
					<code>&lt;blockquote&gt;</code> con algo de texto dentro.
				</li>
				<li>
					<strong>CSS (Pseudo-elementos):</strong> Usa los pseudo-elementos{" "}
					<code>::before</code> y <code>::after</code> para añadir comillas
					gigantes y estilizadas al principio y al final del `blockquote`, como
					en el ejemplo de la lección.
				</li>
				<li>
					<strong>El Puzzle:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Crea un <code>&lt;button&gt;</code> con un ID y una clase. Por
							ejemplo:{" "}
							<code>
								&lt;button id="btn-principal" class="btn-accion"&gt;Haz
								Clic&lt;/button&gt;
							</code>
						</li>
						<li>
							En tu CSS, escribe tres reglas que apunten al mismo botón, cada
							una intentando cambiar el <code>background-color</code> a un color
							diferente: una usando el selector de etiqueta (`button`), otra
							usando el selector de clase (`.btn-accion`), y la última usando el
							selector de ID (`#btn-principal`).
						</li>
						<li>
							Antes de mirar el navegador, <strong>predice</strong> de qué color
							será el botón. Luego, comprueba si tu predicción fue correcta y
							entiende por qué una regla ganó sobre las otras.
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture10Es;
