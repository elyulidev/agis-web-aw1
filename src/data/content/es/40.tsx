import CodeBlock from "@/components/ui/code-block";

const Lecture40Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Escapando del "Callback Hell": ¿Qué es una Promesa?
			</h3>
			<p className='mb-4'>
				En la lección anterior, vimos cómo el anidamiento de callbacks puede
				llevar a un código desordenado. Una <strong>Promesa (Promise)</strong>{" "}
				es un objeto de JavaScript que representa la eventual finalización (o
				fallo) de una operación asíncrona. Es una solución mucho más limpia y
				manejable.
			</p>
			<p className='mb-4'>
				<strong>Analogía:</strong> Una promesa es como un ticket que recibes en
				un guardarropa. No es tu abrigo, pero es la "promesa" de que recibirás
				tu abrigo más tarde. Con ese ticket, puedes ir a hacer otras cosas y
				volver a recoger tu abrigo cuando estés listo.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Los Tres Estados de una Promesa
			</h3>
			<p className='mb-4'>
				Una promesa siempre se encuentra en uno de estos tres estados:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`pending` (pendiente):</strong> El estado inicial. La
					operación aún no se ha completado.
				</li>
				<li>
					<strong>`fulfilled` (cumplida):</strong> La operación se completó con
					éxito. La promesa ahora tiene un valor resultante.
				</li>
				<li>
					<strong>`rejected` (rechazada):</strong> La operación falló. La
					promesa ahora tiene una razón del fallo (un error).
				</li>
			</ul>
			<p>
				Una vez que una promesa está `fulfilled` o `rejected`, su estado no
				puede cambiar. Se dice que la promesa está "settled" (establecida).
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Creando una Promesa (Produciendo Código Asíncrono)
			</h3>
			<p className='mb-4'>
				Aunque la mayor parte del tiempo consumiremos promesas (como las que
				devuelve `fetch`), es útil saber cómo se crean. Se usa el constructor
				`new Promise()`, que recibe un callback con dos argumentos: `resolve` y
				`reject`.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const miPromesa = new Promise((resolve, reject) => {
  // Simular una operación asíncrona (ej: una llamada a una API)
  setTimeout(() => {
    const exito = true; // Cambia esto a false para ver el rechazo
    if (exito) {
      resolve("¡Datos obtenidos con éxito!"); // Cumplir la promesa
    } else {
      reject("Error: No se pudieron obtener los datos."); // Rechazar la promesa
    }
  }, 2000);
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Consumiendo una Promesa: `.then()`, `.catch()` y `.finally()`
			</h3>
			<p className='mb-4'>
				Una vez que tenemos una promesa, podemos "adjuntarle" funciones para
				manejar su resultado.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`.then()`</h4>
			<p className='mb-4'>
				El método `.then()` se usa para manejar el caso de éxito (`fulfilled`).
				Recibe un callback que se ejecutará cuando la promesa se cumpla, y
				recibirá el valor de la resolución como argumento.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`.catch()`</h4>
			<p className='mb-4'>
				El método `.catch()` es la forma recomendada de manejar el caso de fallo
				(`rejected`). Recibe un callback que se ejecutará si la promesa es
				rechazada, y recibirá la razón del rechazo como argumento.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`.finally()`</h4>
			<p className='mb-4'>
				El método `.finally()` recibe un callback que se ejecutará siempre, sin
				importar si la promesa se cumplió o se rechazó. Es perfecto para tareas
				de limpieza, como ocultar un spinner de carga.
			</p>

			<CodeBlock
				language='javascript'
				codeString={`console.log("Iniciando la petición...");

miPromesa
  .then((resultado) => {
    // Esto se ejecuta si la promesa se resuelve
    console.log("Éxito:", resultado);
  })
  .catch((error) => {
    // Esto se ejecuta si la promesa se rechaza
    console.error("Fallo:", error);
  })
  .finally(() => {
    // Esto se ejecuta siempre
    console.log("La operación ha finalizado.");
  });`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				5. Encadenamiento de Promesas (Promise Chaining)
			</h3>
			<p className='mb-4'>
				Aquí es donde las promesas realmente brillan. Cada llamada a `.then()` o
				`.catch()` devuelve una <strong>nueva promesa</strong>. Esto nos permite
				encadenar operaciones asíncronas de una manera secuencial y legible,
				resolviendo completamente el "Callback Hell".
			</p>
			<CodeBlock
				language='javascript'
				codeString={`new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 1000); // Empezamos con el número 10
})
.then((numero) => {
  console.log("Paso 1:", numero); // 10
  return numero * 2; // Este valor se pasa al siguiente .then()
})
.then((numero) => {
  console.log("Paso 2:", numero); // 20
  return numero + 5;
})
.then((numero) => {
  console.log("Paso 3, resultado final:", numero); // 25
})
.catch((error) => {
  console.error("Algo salió mal en la cadena:", error);
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Simulación de API
			</h3>
			<p className='mb-4'>
				Vamos a crear una función que simule una llamada a una API para obtener
				datos de un usuario. Esta función devolverá una promesa.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Crea una función llamada <code>obtenerDatosUsuario</code>.
				</li>
				<li>
					Dentro de esta función, crea y devuelve una <code>new Promise</code>.
				</li>
				<li>
					Dentro de la promesa, usa un <code>setTimeout</code> de 2 segundos
					para simular la demora de la red.
				</li>
				<li>
					Después de los 2 segundos, la promesa debe resolverse con un objeto de
					usuario. Por ejemplo: <code>{'{ nombre: "Juan", edad: 28 }'}</code>.
				</li>
				<li>
					Ahora, llama a tu función <code>obtenerDatosUsuario()</code>.
				</li>
				<li>
					Encadena un <code>.then()</code> para manejar la respuesta exitosa.
					Dentro del <code>.then()</code>, imprime un mensaje en la consola como
					"Nombre del usuario: [nombre], Edad: [edad]".
				</li>
				<li>
					Encadena un <code>.catch()</code> para manejar cualquier posible error
					e imprimirlo en la consola.
				</li>
				<li>
					Encadena un <code>.finally()</code> que imprima "Búsqueda de usuario
					finalizada." en la consola.
				</li>
				<li>
					<strong>Reto (Opcional):</strong> Modifica tu promesa para que,
					aleatoriamente (usando <code>Math.random()</code>), a veces falle
					(llame a <code>reject</code>) y a veces tenga éxito (llame a{" "}
					<code>resolve</code>), para que puedas probar tanto el camino de{" "}
					<code>.then()</code> como el de <code>.catch()</code>.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture40Es;
