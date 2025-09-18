import CodeBlock from "@/components/ui/code-block";

const Lecture11Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Resolviendo el Misterio: ¿Por qué mi CSS no funciona?
			</h3>
			<p className='mb-4'>
				Hemos llegado a una de las lecciones más importantes y a menudo confusas
				de CSS. Ya sabemos cómo escribir reglas básicas, pero ¿qué sucede cuando
				dos o más reglas apuntan al mismo elemento y definen la misma propiedad
				con valores diferentes?
			</p>
			<p className='mb-4'>
				El navegador no se confunde; sigue un algoritmo estricto para determinar
				qué regla "gana". Entender la{" "}
				<strong>Cascada, la Especificidad y la Herencia</strong> es la clave
				para dejar de luchar contra tu CSS y empezar a controlarlo con
				precisión.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Profundizando en la Cascada y la Herencia
			</h3>
			<p className='mb-4'>
				Estos dos conceptos, que introdujimos brevemente, forman la base de cómo
				fluyen los estilos.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Cascada:</strong> Se refiere al orden en que se declaran las
					reglas. Si todas las demás condiciones son iguales,{" "}
					<strong>la última regla declarada gana</strong>. Esto significa que el
					orden de tus etiquetas <code>&lt;link&gt;</code> en el HTML o el orden
					de las reglas dentro de un archivo CSS es crucial.
				</li>
				<li>
					<strong>Herencia:</strong> Recuerda que los elementos hijos heredan
					ciertas propiedades de sus padres, como <code>color</code> y{" "}
					<code>font-family</code>. Si no aplicas un color a un{" "}
					<code>&lt;p&gt;</code>, tomará el color de su padre, por ejemplo, el{" "}
					<code>&lt;body&gt;</code>.
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Especificidad: El Sistema de Puntuación de CSS
			</h3>
			<p className='mb-4'>
				Cuando el orden no es suficiente para desempatar, el navegador calcula
				la <strong>especificidad</strong> de cada selector. El selector con la
				puntuación más alta gana, sin importar el orden. Podemos imaginar un
				sistema de puntos:
			</p>
			<ul className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>
						Estilos en línea (<code>style="..."</code>):
					</strong>{" "}
					1000 puntos. Son los más poderosos.
				</li>
				<li>
					<strong>
						IDs (<code>#id</code>):
					</strong>{" "}
					100 puntos por cada ID en el selector.
				</li>
				<li>
					<strong>
						Clases (<code>.clase</code>), Atributos (<code>[type="..."]</code>),
						Pseudo-clases (<code>:hover</code>):
					</strong>{" "}
					10 puntos por cada uno.
				</li>
				<li>
					<strong>
						Elementos (<code>div</code>, <code>p</code>), Pseudo-elementos (
						<code>::before</code>):
					</strong>{" "}
					1 punto por cada uno.
				</li>
			</ul>
			<p>
				El selector universal (`*`), los combinadores (`&gt;`, `+`, `~`) y la
				pseudo-clase `:not()` no añaden puntos.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Ejemplos de Cálculo:</h4>
			<div className='overflow-x-auto my-6 rounded-lg border'>
				<table className='min-w-full text-sm'>
					<thead className='bg-gray-50 dark:bg-gray-800'>
						<tr>
							<th className='p-3 text-left'>Selector</th>
							<th className='p-3 text-left'>
								Cálculo (IDs, Clases, Elementos)
							</th>
							<th className='p-3 text-left'>Puntuación Total</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
						<tr className='dark:bg-gray-900'>
							<td className='p-3 font-mono'>p</td>
							<td className='p-3'>0, 0, 1</td>
							<td className='p-3'>1</td>
						</tr>
						<tr className='dark:bg-gray-900/50'>
							<td className='p-3 font-mono'>.btn-principal</td>
							<td className='p-3'>0, 1, 0</td>
							<td className='p-3'>10</td>
						</tr>
						<tr className='dark:bg-gray-900'>
							<td className='p-3 font-mono'>#menu-principal</td>
							<td className='p-3'>1, 0, 0</td>
							<td className='p-3'>100</td>
						</tr>
						<tr className='dark:bg-gray-900/50'>
							<td className='p-3 font-mono'>#nav .link:hover</td>
							<td className='p-3'>1, 2, 0</td>
							<td className='p-3'>120</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. La Opción Nuclear: `!important`
			</h3>
			<p className='mb-4'>
				Si añades <code>!important</code> al final de una declaración de estilo,
				esa declaración anulará a cualquier otra, sin importar su especificidad.
			</p>
			<CodeBlock
				language='css'
				codeString={`p {
  color: blue !important; /* Esta regla ganará sobre casi todo */
}`}
			/>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					¡Úsalo con extrema precaución!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					<code>!important</code> es a menudo una señal de que la estructura de
					tu CSS es demasiado compleja o "sucia". Rompe la cascada natural y
					hace que la depuración sea una pesadilla. Evítalo siempre que sea
					posible y resérvalo para casos muy específicos, como anular estilos de
					terceros.
				</p>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Detective de CSS
			</h3>
			<p className='mb-4'>
				Tu misión es analizar el siguiente HTML y CSS y predecir el resultado
				final.
			</p>
			<CodeBlock
				language='html'
				codeString={`<div class="container">
  <p id="texto-clave" class="parrafo" style="color: purple;">
    Este es un párrafo muy importante.
  </p>
</div>`}
			/>
			<CodeBlock
				language='css'
				codeString={`/* Regla 1 */
.container p {
  color: blue;
}

/* Regla 2 */
#texto-clave {
  color: green;
}

/* Regla 3 */
p.parrafo {
  color: red;
}`}
			/>
			<p className='mt-4'>
				Analiza las tres reglas CSS y el estilo en línea. Basándote en la
				cascada y la especificidad, responde:
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>¿Qué regla tiene la mayor especificidad? ¿Y la menor?</li>
				<li>¿De qué color final será el texto del párrafo?</li>
				<li>Explica por qué ese color gana la "batalla de estilos".</li>
			</ol>
		</section>
	</div>
);

export default Lecture11Es;
