import CodeBlock from "@/components/ui/code-block";

const Lecture12Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. El Concepto Fundamental: Toda Caja es un Rectángulo
			</h3>
			<p className='mb-4'>
				En CSS, todo lo que ves en una página es una caja rectangular. Un
				párrafo, una imagen, un encabezado, incluso toda la página. El{" "}
				<strong>Modelo de Caja (Box Model)</strong> es la regla que define cómo
				se calcula el tamaño de estas cajas y cómo interactúan entre sí.
			</p>
			<p>Cada caja se compone de cuatro partes, desde adentro hacia afuera:</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Contenido (Content):</strong> El área donde se muestra tu
					texto, imágenes, etc.
				</li>
				<li>
					<strong>Relleno (Padding):</strong> Un espacio transparente alrededor
					del contenido, dentro del borde.
				</li>
				<li>
					<strong>Borde (Border):</strong> Una línea que rodea el padding y el
					contenido.
				</li>
				<li>
					<strong>Margen (Margin):</strong> Un espacio transparente fuera del
					borde, que separa la caja de otros elementos.
				</li>
			</ol>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Dimensiones del Contenido: `width` y `height`
			</h3>
			<p className='mb-4'>
				Estas propiedades controlan el tamaño del área de contenido.
			</p>
			<CodeBlock
				language='css'
				codeString={`.caja {
  width: 300px;
  height: 200px;
  background-color: lightblue;
}`}
			/>
			<p className='mt-4'>
				También puedes usar unidades relativas como porcentajes (<code>%</code>)
				o unidades de viewport (<code>vw</code>, <code>vh</code>). Además,
				existen propiedades para controlar las dimensiones de forma más
				flexible:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`min-width` / `min-height`</strong>: El tamaño mínimo que
					puede tener la caja.
				</li>
				<li>
					<strong>`max-width` / `max-height`</strong>: El tamaño máximo.{" "}
					<code>max-width: 100%;</code> es muy común para hacer que las imágenes
					sean responsivas.
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Relleno (Padding): Espacio Interior
			</h3>
			<p className='mb-4'>
				El padding es el espacio entre el contenido y el borde. Es como el
				margen de un libro. Se pueden definir los cuatro lados individualmente o
				con un atajo (shorthand).
			</p>
			<CodeBlock
				language='css'
				codeString={`/* Lado por lado */
.caja {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}

/* Atajo (shorthand) - en el sentido de las agujas del reloj: Arriba, Derecha, Abajo, Izquierda */
.caja {
  /* 1 valor: todos los lados */
  padding: 20px;

  /* 2 valores: (arriba/abajo) (izquierda/derecha) */
  padding: 10px 20px;
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Borde (Border): La Línea Exterior
			</h3>
			<p className='mb-4'>
				El borde se define con tres propiedades principales: grosor, estilo y
				color.
			</p>
			<CodeBlock
				language='css'
				codeString={`/* Propiedades individuales */
.caja {
  border-width: 2px;
  border-style: solid; /* Otros: dashed, dotted, double, etc. */
  border-color: #333;
}

/* Atajo (shorthand) - el orden no importa */
.caja {
  border: 2px solid #333;
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				5. El Dilema del Tamaño: `box-sizing`
			</h3>
			<p className='mb-4'>
				Por defecto (<code>box-sizing: content-box;</code>), cuando defines un{" "}
				<code>width: 300px;</code>, ese es el ancho del{" "}
				<strong>contenido</strong>. El padding y el borde se suman a ese ancho,
				haciendo que el tamaño total de la caja sea mayor de 300px. Esto es muy
				poco intuitivo.
			</p>
			<p className='mb-4'>
				La solución moderna es <strong>`box-sizing: border-box;`</strong>. Con
				este valor, el <code>width</code> que defines es el ancho total de la
				caja, incluyendo padding y borde. El navegador ajusta el espacio del
				contenido automáticamente.
			</p>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					Práctica Recomendada Universal:
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Aplica <code>border-box</code> a todos los elementos al principio de
					tu CSS. Esto hace que el diseño de layouts sea increíblemente más
					fácil y predecible.
				</p>
			</div>
			<CodeBlock
				language='css'
				codeString={`html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit; /* Todos los elementos heredan de html */
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Construye tu Tarjeta de Perfil
			</h3>
			<p className='mb-4'>
				Vamos a crear un componente de tarjeta simple para poner en práctica el
				modelo de caja.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Crea un <code>&lt;div&gt;</code> en tu HTML con la clase{" "}
					<code>tarjeta-perfil</code>. Dentro, pon un <code>&lt;h2&gt;</code>{" "}
					con un nombre y un <code>&lt;p&gt;</code> con una breve descripción.
				</li>
				<li>
					En tu CSS, añade la regla de <code>box-sizing: border-box;</code> para
					todos los elementos, como se mostró arriba.
				</li>
				<li>
					Selecciona <code>.tarjeta-perfil</code> y aplícale los siguientes
					estilos:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Un <code>width</code> de <code>300px</code>.
						</li>
						<li>
							Un <code>padding</code> de <code>20px</code> en todos los lados.
						</li>
						<li>
							Un <code>border</code> de <code>1px solid #ccc</code>.
						</li>
						<li>
							Un <code>background-color</code> de <code>#f9f9f9</code>.
						</li>
					</ul>
				</li>
				<li>
					Observa el resultado. Gracias a <code>border-box</code>, el ancho
					total de la tarjeta en la página será exactamente 300px.
				</li>
				<li>
					Experimenta: Comenta temporalmente la regla de <code>box-sizing</code>
					. Verás que la tarjeta se vuelve más ancha (300px + 20px + 20px + 1px
					+ 1px = 342px). ¡Ahora entiendes por qué <code>border-box</code> es
					tan esencial!
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture12Es;
