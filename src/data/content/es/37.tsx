import CodeBlock from "@/components/ui/code-block";

const Lecture37Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Hablando con el Mundo Exterior: ¿Qué es una API?
			</h3>
			<p className='mb-4'>
				Nuestros formularios ya capturan y validan datos, pero ¿qué hacemos con
				ellos? Generalmente, queremos enviarlos a algún lugar: una base de
				datos, un servicio de correo, etc. Aquí es donde entran las{" "}
				<strong>APIs (Interfaces de Programación de Aplicaciones)</strong>.
			</p>
			<p className='mb-4'>
				<strong>Analogía:</strong> Piensa en una API como el camarero de un
				restaurante. Tú (el cliente, o "frontend") no vas directamente a la
				cocina (el servidor o "backend"). Le das tu pedido (una "petición") al
				camarero (la API). El camarero lleva el pedido a la cocina, espera a que
				esté listo y te trae la comida (la "respuesta").
			</p>
			<p>
				Una API web es un conjunto de reglas y URLs que un servidor expone para
				que nuestro JavaScript pueda interactuar con él, enviando y recibiendo
				datos, generalmente en formato JSON.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. `fetch`: El Mensajero de JavaScript
			</h3>
			<p className='mb-4'>
				La <strong>API Fetch</strong> es la herramienta moderna integrada en los
				navegadores para realizar peticiones de red (hablar con APIs). Es una
				forma potente y flexible de enviar y recibir información de manera
				asíncrona (sin recargar la página).
			</p>
			<p className='mb-4'>
				Una petición <code>fetch</code> básica para enviar datos de un
				formulario se ve así:
			</p>
			<CodeBlock
				language='javascript'
				codeString={`fetch(URL_DEL_SERVIDOR, {
  method: 'POST', // El método para enviar datos
  headers: {
    'Content-Type': 'application/json' // Le decimos al servidor que enviamos datos JSON
  },
  body: JSON.stringify(objetoConDatos) // Convertimos nuestro objeto JS a una cadena JSON
})
.then(response => response.json()) // Procesamos la respuesta del servidor
.then(data => {
  console.log('Éxito:', data); // Hacemos algo con la respuesta exitosa
})
.catch(error => {
  console.error('Error:', error); // Manejamos cualquier error de red
});`}
			/>
			<p className='mt-4'>
				No te preocupes si <code>.then()</code> y <code>.catch()</code> parecen
				extraños. Son parte de las "Promesas", que estudiaremos en detalle en el
				módulo de programación asíncrona. Por ahora, piensa en ellos como:
				"después de que la petición termine, <strong>entonces</strong> haz
				esto".
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Caso Práctico: Enviando un Formulario a Formspree
			</h3>
			<p className='mb-4'>
				Para practicar, no necesitamos nuestro propio servidor. Usaremos un
				servicio gratuito llamado <strong>Formspree</strong>. Te proporciona un
				"endpoint" (una URL) al que puedes enviar los datos de tu formulario, y
				ellos se encargan de enviártelos por correo electrónico.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Ve a{" "}
					<a
						href='https://formspree.io/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-500 hover:underline'
					>
						Formspree.io
					</a>{" "}
					y crea una cuenta.
				</li>
				<li>
					Crea un "New Form", dale un nombre y obtendrás una URL única, algo
					como <code>https://formspree.io/f/xxxxxxxx</code>.
				</li>
				<li>¡Esa URL es nuestra API!</li>
			</ol>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML para un formulario de contacto -->
<form id="contact-form">
  <label for="email">Tu Email:</label>
  <input type="email" id="email" name="email" required>
  <label for="message">Mensaje:</label>
  <textarea id="message" name="message" required></textarea>
  <button type="submit">Enviar</button>
  <p id="status"></p>
</form>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const form = document.getElementById('contact-form');
const status = document.getElementById('status');

form.addEventListener("submit", async function(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  try {
    const response = await fetch('https://formspree.io/f/TU_ENDPOINT_AQUI', {
      method: 'POST',
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.textContent = "¡Gracias por tu mensaje!";
      form.reset(); // Limpia el formulario
    } else {
      status.textContent = "Oops! Hubo un problema al enviar tu formulario.";
    }
  } catch (error) {
    status.textContent = "Oops! Hubo un problema de red.";
  }
});`}
			/>
			<p className='mt-4'>
				En este ejemplo, usamos `async/await`, que es otra forma de manejar la
				asincronía y que también veremos más adelante. Es un poco más legible
				que `.then()`. Lo importante es el concepto: capturamos el `submit`,
				preparamos los datos y los enviamos con `fetch` a una URL.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Conecta tu Formulario de Contacto
			</h3>
			<p className='mb-4'>
				Es hora de hacer que tu formulario de contacto funcione de verdad.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Si aún no lo has hecho, ve a <strong>Formspree</strong>, regístrate y
					crea un nuevo endpoint para tu formulario.
				</li>
				<li>
					Toma el formulario de contacto que creaste en lecciones anteriores.
				</li>
				<li>
					Implementa el script de JavaScript que vimos en el ejemplo. Asegúrate
					de:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Seleccionar el formulario y un elemento para mostrar el estado.
						</li>
						<li>
							Añadir el listener para el evento <code>submit</code>.
						</li>
						<li>Prevenir el comportamiento por defecto.</li>
						<li>
							Usar <code>fetch</code> para enviar los datos a{" "}
							<strong>tu URL de Formspree</strong>.
						</li>
						<li>
							Manejar la respuesta para mostrar un mensaje de éxito o error al
							usuario en el elemento de estado.
						</li>
						<li>
							Si el envío es exitoso, limpia los campos del formulario con el
							método <code>.reset()</code>.
						</li>
					</ul>
				</li>
				<li>
					Prueba tu formulario. Rellénalo y envíalo. Deberías recibir un correo
					electrónico con los datos que introdujiste.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture37Es;
