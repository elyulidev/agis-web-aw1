import CodeBlock from "@/components/ui/code-block";

const Lecture14Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Rompiendo las Reglas: Sacando Elementos del Flujo Normal
			</h3>
			<p className='mb-4'>
				Hemos dominado el modelo de caja y cómo los elementos se apilan y fluyen
				uno tras otro. Pero para diseños más complejos, como superposiciones,
				menús desplegables o encabezados fijos, necesitamos una forma de sacar a
				los elementos de este "flujo normal" del documento. Aquí es donde entra
				la propiedad <code>position</code>.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. La Propiedad `position` y las Coordenadas
			</h3>
			<p className='mb-4'>
				La propiedad <code>position</code>, junto con las propiedades de
				coordenadas <code>top</code>, <code>right</code>, <code>bottom</code> y{" "}
				<code>left</code>, nos permite colocar un elemento en cualquier lugar de
				la página.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`position: static;` (El Valor por Defecto)</strong>
					<p className='mt-2'>
						Todo elemento es <code>static</code> por defecto. Significa que
						sigue el flujo normal de la página. Las propiedades <code>top</code>
						, <code>right</code>, etc., no tienen ningún efecto sobre él.
					</p>
				</li>
				<li>
					<strong>`position: relative;` (El Punto de Partida)</strong>
					<p className='mt-2'>
						El elemento sigue ocupando su espacio en el flujo normal, pero ahora
						podemos "moverlo" o desplazarlo de su posición original usando las
						coordenadas. Lo más importante es que{" "}
						<strong>crea un contexto de posicionamiento</strong> para sus
						elementos hijos con <code>position: absolute;</code>.
					</p>
					<CodeBlock
						language='css'
						codeString={`.caja-relativa {
  position: relative;
  left: 30px;
  top: 10px;
}`}
					/>
				</li>
				<li>
					<strong>`position: absolute;` (El Elemento "Libre")</strong>
					<p className='mt-2'>
						Este es un cambio radical. El elemento es{" "}
						<strong>completamente removido</strong> del flujo del documento. Ya
						no ocupa espacio y los otros elementos se comportan como si no
						existiera. Se posiciona con respecto a su{" "}
						<strong>ancestro posicionado más cercano</strong> (cualquier
						ancestro cuya posición no sea <code>static</code>). Si no encuentra
						ninguno, se posiciona con respecto al <code>&lt;body&gt;</code>.
					</p>
					<CodeBlock
						language='css'
						codeString={`.contenedor-padre {
  position: relative; /* Contexto de posicionamiento */
}
.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
}`}
					/>
				</li>
				<li>
					<strong>`position: fixed;` (El Elemento "Pegado")</strong>
					<p className='mt-2'>
						También es removido del flujo normal, pero se posiciona con respecto
						a la <strong>ventana del navegador (viewport)</strong>. Esto
						significa que no se moverá aunque el usuario haga scroll en la
						página. Es perfecto para encabezados fijos, barras de cookies o
						botones de "volver arriba".
					</p>
					<CodeBlock
						language='css'
						codeString={`.encabezado-fijo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
}`}
					/>
				</li>
				<li>
					<strong>`position: sticky;` (El Híbrido Inteligente)</strong>
					<p className='mt-2'>
						Se comporta como <code>relative</code> hasta que el usuario hace
						scroll y el elemento alcanza un umbral definido por las coordenadas
						(ej. <code>top: 0;</code>). En ese momento, se comporta como{" "}
						<code>fixed</code>. Ideal para encabezados de sección o barras
						laterales que deben "pegarse" en la parte superior al hacer scroll.
					</p>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Apilando Elementos: `z-index`
			</h3>
			<p className='mb-4'>
				Cuando los elementos se posicionan fuera del flujo normal, pueden
				superponerse. La propiedad <code>z-index</code> controla el orden de
				apilamiento en el eje Z (la profundidad).
			</p>
			<p>
				Un elemento con un <code>z-index</code> más alto aparecerá encima de un
				elemento con un <code>z-index</code> más bajo. Importante:{" "}
				<strong>
					<code>z-index</code> solo funciona en elementos posicionados
				</strong>{" "}
				(aquellos cuya posición no es <code>static</code>).
			</p>
			<CodeBlock
				language='css'
				codeString={`.dialogo-modal {
  position: fixed;
  z-index: 100; /* Estará por encima de casi todo */
}
.overlay {
  position: fixed;
  z-index: 99; /* Estará justo debajo del diálogo */
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Una Nota sobre `float` (Legado)
			</h3>
			<p className='mb-4'>
				Antes de que existieran herramientas modernas como Flexbox y Grid, la
				propiedad <code>float</code> (con valores <code>left</code> o{" "}
				<code>right</code>) era la principal forma de crear diseños de columnas
				y hacer que el texto fluyera alrededor de las imágenes.
			</p>
			<p>
				Hoy en día, su uso para la maquetación general de una página se
				considera una <strong>práctica obsoleta</strong>. Sin embargo, todavía
				es útil para su propósito original: hacer que un elemento, como una
				imagen, "flote" dentro de un bloque de texto.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Creando un "Modal" Básico
			</h3>
			<p className='mb-4'>
				Vamos a aplicar lo aprendido sobre posicionamiento y `z-index` para
				crear la estructura de una ventana modal, un componente de UI muy común.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>HTML:</strong> Crea dos <code>&lt;div&gt;</code> en tu HTML.
					Uno con la clase <code>overlay</code> y otro con la clase{" "}
					<code>modal-content</code>.
				</li>
				<li>
					<strong>CSS para el Overlay:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Dale a <code>.overlay</code> un <code>position: fixed;</code>.
						</li>
						<li>
							Haz que ocupe toda la pantalla usando{" "}
							<code>top: 0; left: 0; width: 100%; height: 100%;</code>.
						</li>
						<li>
							Dale un color de fondo semi-transparente, por ejemplo:{" "}
							<code>background-color: rgba(0, 0, 0, 0.5);</code>.
						</li>
						<li>
							Asígnale un <code>z-index: 10;</code>.
						</li>
					</ul>
				</li>
				<li>
					<strong>CSS para el Contenido del Modal:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Dale a <code>.modal-content</code> un{" "}
							<code>position: fixed;</code>.
						</li>
						<li>
							Céntralo en la pantalla. (Una forma simple es:{" "}
							<code>
								top: 50%; left: 50%; transform: translate(-50%, -50%);
							</code>
							. La propiedad <code>transform</code> la veremos más adelante,
							pero por ahora puedes usarla).
						</li>
						<li>
							Dale un <code>background-color: white;</code>, un{" "}
							<code>padding</code>, y un <code>width</code>.
						</li>
						<li>
							Asígnale un <code>z-index: 20;</code> para que aparezca por encima
							del overlay.
						</li>
					</ul>
				</li>
				<li>
					Observa el resultado. Deberías tener una ventana de contenido flotando
					sobre un fondo oscuro que cubre toda la página.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture14Es;
