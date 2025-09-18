import CodeBlock from "@/components/ui/code-block";

const Lecture41Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. La Evolución de la Asincronía: `async/await`
			</h3>
			<p className='mb-4'>
				Hemos viajado desde los callbacks, pasando por las promesas con{" "}
				<code>.then()</code> y <code>.catch()</code>. Hoy llegamos a la sintaxis
				más moderna y legible para manejar código asíncrono en JavaScript:{" "}
				<strong>`async/await`</strong>.
			</p>
			<p className='mb-4'>
				<code>async/await</code> no es una nueva invención; es "azúcar
				sintáctico" sobre las promesas. Esto significa que no reemplaza a las
				promesas, sino que nos da una forma mucho más limpia y sencilla de
				trabajar con ellas. Nos permite escribir código asíncrono que se ve y se
				comporta como código síncrono.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. La Palabra Clave `async`
			</h3>
			<p className='mb-4'>
				Para usar `await`, la función que lo contiene debe ser declarada con la
				palabra clave <code>async</code>.
			</p>
			<p className='mb-4'>
				Una función <code>async</code> siempre hace dos cosas:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					Asegura que la función siempre devuelva una promesa. Si devuelves un
					valor normal, JavaScript lo envolverá automáticamente en una promesa
					resuelta.
				</li>
				<li>
					Permite el uso de la palabra clave <code>await</code> dentro de ella.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`async function miFuncion() {
  return "¡Hola!"; // Esto se convierte en una Promesa resuelta con el valor "¡Hola!"
}

miFuncion().then(valor => console.log(valor)); // Muestra "¡Hola!"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. La Palabra Clave `await`
			</h3>
			<p className='mb-4'>
				Aquí es donde ocurre la magia. La palabra clave <code>await</code> solo
				se puede usar <strong>dentro de una función `async`</strong>.
			</p>
			<p className='mb-4'>
				<code>await</code> hace que JavaScript espere hasta que la promesa a su
				derecha se establezca (se cumpla o se rechace). Mientras espera, no
				bloquea el hilo principal; simplemente pausa la ejecución de la función{" "}
				<code>async</code>.
			</p>
			<p>
				Si la promesa se cumple, <code>await</code> "desenvuelve" el valor y lo
				devuelve. Si se rechaza, lanza un error, que podemos capturar.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Comparación: `.then()` vs. `async/await`
			</h4>
			<p>
				Recordemos nuestro encadenamiento de promesas de la lección anterior:
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Con .then()
function ejecutarPasosConThen() {
  obtenerNumeroInicial() // Asume que esta función devuelve una promesa
    .then(numero => procesarPaso1(numero))
    .then(nuevoNumero => procesarPaso2(nuevoNumero))
    .then(resultadoFinal => console.log(resultadoFinal))
    .catch(error => console.error(error));
}`}
			/>
			<p className='mt-4'>Ahora, veamos lo mismo con `async/await`:</p>
			<CodeBlock
				language='javascript'
				codeString={`// Con async/await
async function ejecutarPasosConAwait() {
  try {
    const numero = await obtenerNumeroInicial();
    const nuevoNumero = await procesarPaso1(numero);
    const resultadoFinal = await procesarPaso2(nuevoNumero);
    console.log(resultadoFinal);
  } catch (error) {
    console.error(error);
  }
}`}
			/>
			<p className='mt-4'>
				Como puedes ver, la versión con <code>async/await</code> es mucho más
				fácil de leer. Se parece a un script síncrono normal, de arriba hacia
				abajo.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Manejo de Errores con `try...catch`
			</h3>
			<p className='mb-4'>
				Cuando una promesa que estamos "esperando" con <code>await</code> es
				rechazada, lanza una excepción. La forma estándar de manejar excepciones
				en JavaScript síncrono es con un bloque <code>try...catch</code>, y
				funciona exactamente igual aquí.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`try`</strong>: Envolvemos el código que podría fallar
					(nuestras llamadas con `await`) dentro de este bloque.
				</li>
				<li>
					<strong>`catch (error)`</strong>: Si algo en el bloque `try` falla, la
					ejecución salta inmediatamente a este bloque, y podemos manejar el
					error.
				</li>
				<li>
					<strong>`finally`</strong>: (Opcional) Este bloque se ejecuta siempre,
					haya habido un error o no. Es el equivalente al{" "}
					<code>.finally()</code> de las promesas.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`async function obtenerDatos() {
  console.log("Intentando obtener datos...");
  try {
    // Asumimos que esta promesa podría ser rechazada
    const datos = await promesaQuePodriaFallar();
    console.log("Datos recibidos:", datos);
  } catch (error) {
    console.error("¡Ocurrió un error!", error);
  } finally {
    console.log("Operación finalizada.");
  }
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Refactorizando la Simulación de API
			</h3>
			<p className='mb-4'>
				Vamos a tomar la tarea de la lección anterior y a reescribirla usando la
				sintaxis <code>async/await</code>.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Conserva tu función <code>obtenerDatosUsuario</code> que devuelve una
					promesa de la lección anterior.
				</li>
				<li>
					Crea una nueva función{" "}
					<strong>
						<code>async</code>
					</strong>{" "}
					llamada <code>mostrarUsuario</code>.
				</li>
				<li>
					Dentro de <code>mostrarUsuario</code>, usa un bloque{" "}
					<code>try...catch...finally</code>.
				</li>
				<li>
					En el bloque <code>try</code>:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Llama a <code>obtenerDatosUsuario</code> usando <code>await</code>{" "}
							y guarda el resultado en una variable.
						</li>
						<li>
							Imprime el mensaje de bienvenida con los datos del usuario, igual
							que hiciste con <code>.then()</code>.
						</li>
					</ul>
				</li>
				<li>
					En el bloque <code>catch</code>, captura el error e imprímelo en la
					consola.
				</li>
				<li>
					En el bloque <code>finally</code>, imprime el mensaje "Búsqueda de
					usuario finalizada.".
				</li>
				<li>
					Finalmente, llama a tu nueva función <code>mostrarUsuario()</code>{" "}
					para ejecutar todo el proceso.
				</li>
			</ol>
			<p>
				Compara este nuevo código con el que usaba <code>.then()</code>. ¿No es
				mucho más fácil de leer y seguir?
			</p>
		</section>
	</div>
);

export default Lecture41Es;
