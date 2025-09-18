import CodeBlock from "@/components/ui/code-block";

const Lecture13Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Margen (Margin): Espacio Exterior
			</h3>
			<p className='mb-4'>
				Hemos cubierto las tres capas internas del modelo de caja. La última
				capa es el <strong>margen (margin)</strong>, que es el espacio{" "}
				<em>fuera</em> del borde. El margen es transparente y se usa para crear
				espacio entre un elemento y sus vecinos.
			</p>
			<p>
				La sintaxis para los márgenes es idéntica a la del padding, con
				propiedades individuales (<code>margin-top</code>, etc.) y atajos
				(shorthands).
			</p>
			<CodeBlock
				language='css'
				codeString={`.elemento {
  /* 20px de espacio arriba, 15px a los lados, 30px abajo */
  margin: 20px 15px 30px;
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. El Misterio del Colapso de Márgenes
			</h3>
			<p className='mb-4'>
				Los márgenes tienen un comportamiento único llamado{" "}
				<strong>colapso de márgenes (margin collapsing)</strong>. Cuando dos
				elementos de bloque con márgenes verticales están uno encima del otro,
				sus márgenes no se suman. En su lugar, el margen más grande "gana" y el
				más pequeño "colapsa" o desaparece.
			</p>
			<p>
				Esto solo ocurre con los márgenes verticales (<code>margin-top</code> y{" "}
				<code>margin-bottom</code>), no con los horizontales.
			</p>
			<CodeBlock
				language='css'
				codeString={`.caja-arriba { margin-bottom: 30px; }
.caja-abajo { margin-top: 20px; }
/* El espacio entre las dos cajas será de 30px, no de 50px */`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Centrado Horizontal: `margin: auto`
			</h3>
			<p className='mb-4'>
				Una de las técnicas más comunes y esenciales en CSS es centrar un
				elemento de bloque horizontalmente dentro de su contenedor. Esto se
				logra fácilmente dándole al elemento un ancho definido y estableciendo
				sus márgenes izquierdo y derecho en <code>auto</code>.
			</p>
			<CodeBlock
				language='css'
				codeString={`.contenedor-centrado {
  width: 80%; /* Debe tener un ancho definido que no sea 100% */
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

/* Atajo (shorthand) para lo mismo */
.contenedor-centrado-atajo {
  width: 80%;
  max-width: 900px;
  margin: 0 auto; /* 0 para arriba/abajo, auto para izquierda/derecha */
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. La Propiedad `display`: El Comportamiento del Elemento
			</h3>
			<p className='mb-4'>
				La propiedad <code>display</code> es una de las más importantes de CSS.
				Define cómo se renderiza un elemento y cómo interactúa con los demás.
				Los valores más fundamentales son:
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`display: block;`</strong>
					<ul className='list-inside space-y-1 pl-6 my-2'>
						<li>Empieza en una nueva línea.</li>
						<li>Ocupa todo el ancho disponible por defecto.</li>
						<li>
							Respeta las propiedades <code>width</code>, <code>height</code>,{" "}
							<code>margin</code>, <code>padding</code> y <code>border</code>.
						</li>
						<li>
							Ejemplos: <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>,{" "}
							<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>,{" "}
							<code>&lt;ul&gt;</code>, <code>&lt;li&gt;</code>.
						</li>
					</ul>
				</li>
				<li>
					<strong>`display: inline;`</strong>
					<ul className='list-inside space-y-1 pl-6 my-2'>
						<li>No empieza en una nueva línea; fluye con el texto.</li>
						<li>Ocupa solo el ancho de su contenido.</li>
						<li>
							<strong>Ignora</strong> <code>width</code> y <code>height</code>.
							Los márgenes y paddings verticales tienen un efecto limitado.
						</li>
						<li>
							Ejemplos: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>,{" "}
							<code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>.
						</li>
					</ul>
				</li>
				<li>
					<strong>`display: inline-block;`</strong>
					<ul className='list-inside space-y-1 pl-6 my-2'>
						<li>
							Lo mejor de ambos mundos: se comporta como un elemento{" "}
							<code>inline</code> (no empieza en una nueva línea) pero respeta{" "}
							<code>width</code>, <code>height</code>, <code>margin</code> y{" "}
							<code>padding</code> como un elemento <code>block</code>.
						</li>
						<li>
							Muy útil para crear elementos de navegación o botones que deben
							estar uno al lado del otro pero con dimensiones específicas.
						</li>
					</ul>
				</li>
				<li>
					<strong>`display: none;`</strong>
					<ul className='list-inside space-y-1 pl-6 my-2'>
						<li>
							Elimina completamente el elemento de la página. No ocupa espacio y
							es como si no existiera en el HTML.
						</li>
						<li>
							Diferencia clave con <code>visibility: hidden;</code>, que oculta
							el elemento pero este sigue ocupando su espacio en el layout.
						</li>
					</ul>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Maquetando un Blog Simple
			</h3>
			<p className='mb-4'>
				Vamos a aplicar estos conceptos para crear la estructura de una página
				de blog.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>HTML:</strong> Crea un <code>&lt;div&gt;</code> con la clase{" "}
					<code>pagina-wrapper</code>. Dentro, pon un{" "}
					<code>&lt;header&gt;</code>, un <code>&lt;main&gt;</code> y un{" "}
					<code>&lt;footer&gt;</code>. Dentro del <code>&lt;main&gt;</code>,
					crea varios elementos <code>&lt;article&gt;</code>.
				</li>
				<li>
					<strong>CSS:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Dale al <code>.pagina-wrapper</code> un <code>width</code> (ej.{" "}
							<code>90%</code>) y un <code>max-width</code> (ej.{" "}
							<code>1000px</code>).
						</li>
						<li>
							Usa la técnica de <code>margin: 0 auto;</code> para centrar el{" "}
							<code>.pagina-wrapper</code> en la página.
						</li>
						<li>
							Dale a cada <code>&lt;article&gt;</code> un{" "}
							<code>margin-bottom</code> para separarlos verticalmente.
						</li>
						<li>
							Dentro de un <code>&lt;article&gt;</code>, añade un{" "}
							<code>&lt;span&gt;</code> con la clase <code>categoria</code>.
							Dale a esta clase un <code>padding</code>, un{" "}
							<code>background-color</code> y un <code>border-radius</code>.
							Observa cómo, al ser <code>inline</code> por defecto, el padding
							se comporta.
						</li>
						<li>
							Ahora, cambia el <code>display</code> de <code>.categoria</code> a{" "}
							<code>inline-block</code>. Observa cómo ahora respeta mejor el
							espacio.
						</li>
						<li>
							Finalmente, crea un botón de "Leer más" (<code>&lt;a&gt;</code>{" "}
							con una clase) y dale <code>display: inline-block;</code> para
							poder aplicarle padding y márgenes y que se alinee correctamente
							con el texto.
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture13Es;
