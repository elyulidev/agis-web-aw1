import CodeBlock from "@/components/ui/code-block";

const Lecture17Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Dando Vida a la Web: Movimiento y Dinamismo
			</h3>
			<p className='mb-4'>
				Una página web estática puede ser informativa, pero el movimiento sutil
				y con propósito puede mejorar drásticamente la experiencia del usuario.
				CSS nos proporciona dos herramientas poderosas para añadir dinamismo:{" "}
				<strong>Transiciones</strong>, para animar suavemente los cambios de
				estado, y <strong>Transformaciones</strong>, para alterar la forma y
				posición de un elemento.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Transiciones: Animando Cambios de Estado
			</h3>
			<p className='mb-4'>
				La propiedad <code>transition</code> nos permite definir cómo un
				elemento debe cambiar de un estado a otro de forma gradual, en lugar de
				instantáneamente. Es perfecta para usarla con pseudo-clases como{" "}
				<code>:hover</code> o cuando se añaden clases con JavaScript.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Propiedades de la Transición
			</h4>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`transition-property`</strong>: La propiedad CSS que queremos
					animar (ej. `background-color`, `transform`).
				</li>
				<li>
					<strong>`transition-duration`</strong>: El tiempo que debe durar la
					animación (ej. `0.3s` o `300ms`).
				</li>
				<li>
					<strong>`transition-timing-function`</strong>: La "curva de
					aceleración" de la animación (ej. `ease-in`, `ease-out`, `linear`).
				</li>
				<li>
					<strong>`transition-delay`</strong>: Un retraso opcional antes de que
					comience la animación.
				</li>
			</ul>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Atajo `transition`</h4>
			<p className='mb-4'>
				Normalmente, se usa el atajo para combinar estas propiedades.
			</p>
			<CodeBlock
				language='css'
				codeString={`/* Sintaxis: transition: <propiedad> <duración> <función-tiempo> <retraso>; */

.boton {
  background-color: #3498db;
  transform: scale(1);
  /* Definimos la transición en el estado base */
  transition: background-color 0.3s ease-out, transform 0.3s ease-out;
}

.boton:hover {
  background-color: #2980b9;
  transform: scale(1.1); /* Hacemos el botón un 10% más grande */
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Transformaciones 2D: Manipulando la Geometría
			</h3>
			<p className='mb-4'>
				La propiedad <code>transform</code> nos permite modificar visualmente un
				elemento sin afectar el espacio que ocupa en el flujo del documento. Los
				otros elementos no se moverán para hacerle sitio.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Funciones de Transformación Comunes
			</h4>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`translate(x, y)`</strong>: Mueve el elemento en el plano.
					`translateX()` y `translateY()` son atajos.
					<CodeBlock
						language='css'
						codeString={`.elemento { transform: translate(50px, 20px); }`}
					/>
				</li>
				<li>
					<strong>`rotate(ángulo)`</strong>: Gira el elemento. El ángulo se
					especifica en grados (`deg`), radianes (`rad`) o vueltas (`turn`).
					<CodeBlock
						language='css'
						codeString={`.icono-refrescar:hover { transform: rotate(360deg); }`}
					/>
				</li>
				<li>
					<strong>`scale(x, y)`</strong>: Escala el elemento. `scale(1)` es el
					tamaño normal, `scale(1.5)` lo hace un 50% más grande, `scale(0.5)` lo
					hace un 50% más pequeño. `scaleX()` y `scaleY()` son atajos.
					<CodeBlock
						language='css'
						codeString={`.imagen-galeria:hover { transform: scale(1.05); }`}
					/>
				</li>
				<li>
					<strong>`skew(x-ángulo, y-ángulo)`</strong>: Inclina o sesga el
					elemento. `skewX()` y `skewY()` son atajos.
					<CodeBlock
						language='css'
						codeString={`.forma-decorativa { transform: skewX(-15deg); }`}
					/>
				</li>
			</ul>
			<p className='mb-4'>
				Podemos combinar múltiples transformaciones en una sola declaración. El
				orden importa.
			</p>
			<CodeBlock
				language='css'
				codeString={`.elemento:hover {
  transform: rotate(10deg) scale(1.2);
}`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`transform-origin`</h4>
			<p className='mb-4'>
				Por defecto, las rotaciones y escalados ocurren desde el centro del
				elemento (`50% 50%`). La propiedad <code>transform-origin</code> nos
				permite cambiar este punto de pivote.
			</p>
			<CodeBlock
				language='css'
				codeString={`.aguja-reloj {
  transform-origin: bottom center; /* El punto de rotación estará en la base */
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Tarjetas Interactivas
			</h3>
			<p className='mb-4'>
				Vamos a crear un conjunto de tarjetas que reaccionen al pasar el cursor
				sobre ellas, combinando transiciones y transformaciones.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>HTML:</strong> Crea un `div` contenedor y dentro, tres `div`
					con la clase `tarjeta`. Cada tarjeta puede tener un `h3` y un `p`.
				</li>
				<li>
					<strong>CSS (Estado Base):</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Estiliza las `.tarjeta` con un ancho, padding, borde, sombra
							(`box-shadow`), etc.
						</li>
						<li>
							<strong>Crucial:</strong> En el selector `.tarjeta`, añade una
							`transition: all 0.4s ease;` para que todos los cambios se animen
							suavemente.
						</li>
					</ul>
				</li>
				<li>
					<strong>CSS (Estado Hover):</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>Crea una regla para `.tarjeta:hover`.</li>
						<li>
							Dentro de esta regla, usa la propiedad `transform` para hacer que
							la tarjeta se mueva un poco hacia arriba y se agrande. Por
							ejemplo: `transform: translateY(-10px) scale(1.03);`
						</li>
						<li>
							Añade también un cambio en la `box-shadow` para hacerla más
							pronunciada en el estado hover.
						</li>
					</ul>
				</li>
				<li>
					¡Pasa el cursor sobre tus tarjetas! Deberías ver un efecto de
					elevación suave y atractivo.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture17Es;
