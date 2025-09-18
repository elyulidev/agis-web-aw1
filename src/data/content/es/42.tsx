import CodeBlock from "@/components/ui/code-block";

const Lecture42Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Uniendo Todo: La Petición Real
			</h3>
			<p className='mb-4'>
				¡Felicidades por llegar a la última lección de este módulo! Hemos
				aprendido sobre callbacks, promesas y `async/await`. Ahora, vamos a
				aplicar todo este conocimiento en el caso de uso más común para la
				programación asíncrona en el frontend:{" "}
				<strong>consumir una API externa</strong>.
			</p>
			<p>
				Vamos a revisitar la <strong>API Fetch</strong>, pero esta vez con una
				comprensión completa de cómo funciona por debajo.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Desmitificando la API `fetch`
			</h3>
			<p className='mb-4'>
				La función global <code>fetch()</code> inicia el proceso de obtener un
				recurso de la red. Su gran ventaja es que está basada en promesas, lo
				que la hace perfecta para usar con <code>.then()</code> o{" "}
				<code>async/await</code>.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				El Proceso de Dos Pasos
			</h4>
			<p className='mb-4'>
				Una petición `fetch` siempre involucra <strong>dos promesas</strong>.
				Esto a menudo confunde a los principiantes.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					La llamada a <code>fetch(url)</code> devuelve inmediatamente una
					promesa. Esta primera promesa se resuelve en un objeto{" "}
					<strong>`Response`</strong> tan pronto como el servidor empieza a
					enviar una respuesta. No contiene los datos finales todavía, solo la
					cabecera y el estado de la respuesta.
				</li>
				<li>
					El objeto `Response` tiene métodos para extraer el cuerpo de la
					respuesta en diferentes formatos (como <code>.json()</code>,{" "}
					<code>.text()</code>, <code>.blob()</code>). Estos métodos también
					devuelven una promesa, que se resuelve cuando el cuerpo completo ha
					sido descargado y procesado.
				</li>
			</ol>

			<p>
				Esto significa que necesitamos "esperar" dos veces: una para la
				respuesta inicial y otra para el cuerpo de los datos.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. `fetch` con `async/await` (Método Recomendado)
			</h3>
			<p className='mb-4'>
				La sintaxis `async/await` hace que el proceso de dos pasos sea
				increíblemente claro. Para nuestros ejemplos, usaremos la API gratuita{" "}
				<strong>JSONPlaceholder</strong>, que proporciona datos falsos para
				pruebas.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// URL de la API para obtener un usuario específico
const url = 'https://jsonplaceholder.typicode.com/users/1';

async function obtenerUsuario() {
  try {
    // 1. Esperamos la respuesta inicial del servidor
    const respuesta = await fetch(url);

    // fetch no rechaza la promesa por errores HTTP (como 404 o 500)
    // Así que debemos comprobarlo manualmente.
    if (!respuesta.ok) {
      throw new Error(\`Error HTTP: \${respuesta.status}\`);
    }

    // 2. Esperamos a que el cuerpo se convierta a JSON
    const datosUsuario = await respuesta.json();

    console.log(datosUsuario);
    // Aquí podemos usar los datos para actualizar el DOM

  } catch (error) {
    // Esto captura errores de red (ej. sin conexión) o nuestro error lanzado
    console.error("No se pudo obtener el usuario:", error);
  }
}

obtenerUsuario();`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Tarjeta de Perfil de Usuario desde una API
			</h3>
			<p className='mb-4'>
				Vamos a construir una pequeña aplicación que obtiene datos de un usuario
				de una API y los muestra en una tarjeta de perfil.
			</p>
			<p>1. Crea un archivo HTML con la siguiente estructura:</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="es">
<head><title>Perfil de API</title></head>
<body>
    <h1>Perfil de Usuario</h1>
    <div id="user-card">
        <p id="loading-message">Cargando datos del usuario...</p>
        <h2 id="user-name" style="display:none;"></h2>
        <p id="user-email" style="display:none;"></p>
        <p id="user-phone" style="display:none;"></p>
    </div>
    <script src="main.js"></script>
</body>
</html>`}
			/>
			<p className='mt-4'>2. En tu archivo JavaScript:</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Crea una función <code>async</code> llamada{" "}
					<code>mostrarDatosUsuario</code>.
				</li>
				<li>
					Dentro de la función, selecciona todos los elementos del DOM que
					necesitarás (el mensaje de carga, el nombre, email y teléfono).
				</li>
				<li>
					Usa un bloque <code>try...catch...finally</code>.
				</li>
				<li>
					<strong>En el bloque `try`</strong>:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Haz una petición <code>fetch</code> a la URL{" "}
							<code>https://jsonplaceholder.typicode.com/users/1</code>.
						</li>
						<li>
							Comprueba si la respuesta es <code>ok</code>. Si no lo es, lanza
							un error.
						</li>
						<li>Convierte la respuesta a JSON.</li>
						<li>
							Usa los datos recibidos para rellenar el <code>textContent</code>{" "}
							de los elementos de nombre, email y teléfono.
						</li>
						<li>
							Una vez que los datos están listos, oculta el mensaje de carga (
							<code>loadingMessage.style.display = 'none';</code>) y muestra los
							otros elementos (cambiando su <code>display</code> a{" "}
							<code>'block'</code> o quitando el estilo).
						</li>
					</ul>
				</li>
				<li>
					<strong>En el bloque `catch`</strong>:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Cambia el texto del mensaje de carga a un mensaje de error, por
							ejemplo: "Error al cargar los datos.".
						</li>
					</ul>
				</li>
				<li>
					Llama a tu función <code>mostrarDatosUsuario()</code> al final del
					script para que se ejecute cuando se cargue la página.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture42Es;
