import CodeBlock from "@/components/ui/code-block";

const Lecture35Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. De la Estructura a la Acción
			</h3>
			<p className='mb-4'>
				Hemos construido formularios sólidos con HTML, pero hasta ahora, son
				solo estructuras pasivas. En este módulo, les daremos vida. Aprenderemos
				a capturar la información que el usuario introduce, procesarla y
				prepararla para ser enviada, todo gracias al poder de JavaScript.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. El Evento `submit` y `event.preventDefault()`
			</h3>
			<p className='mb-4'>
				El punto de partida para manejar un formulario es el evento{" "}
				<code>submit</code>. Este evento se dispara en el elemento{" "}
				<code>&lt;form&gt;</code> (no en el botón) cuando el usuario intenta
				enviarlo, ya sea haciendo clic en un{" "}
				<code>&lt;input type="submit"&gt;</code> o presionando Enter en un campo
				de texto.
			</p>
			<p className='mb-4'>
				Como recordarán, el comportamiento por defecto de un formulario es
				recargar la página. Para manejar el envío con JavaScript, nuestro primer
				paso es siempre prevenir este comportamiento usando{" "}
				<code>event.preventDefault()</code>.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const miFormulario = document.querySelector('#mi-formulario');

miFormulario.addEventListener('submit', function(event) {
  event.preventDefault(); // ¡Paso crucial!
  console.log("Formulario interceptado. La página no se recargará.");
  // Aquí irá nuestra lógica de captura de datos.
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Capturando Datos: El Objeto `FormData`
			</h3>
			<p className='mb-4'>
				Podríamos seleccionar cada campo del formulario individualmente y
				obtener su valor, pero hay una forma mucho más eficiente y moderna: el
				objeto <strong>`FormData`</strong>.
			</p>
			<p className='mb-4'>
				<code>FormData</code> es una API del navegador que nos permite construir
				fácilmente un conjunto de pares clave/valor que representan los campos
				de un formulario. La "clave" es el atributo <code>name</code> de cada
				campo, y el "valor" es lo que el usuario ha introducido.
			</p>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML -->
<form id="registro-form">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre_usuario">
  <br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="correo_electronico">
  <br>
  <button type="submit">Registrar</button>
</form>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const form = document.querySelector('#registro-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // 1. Creamos una nueva instancia de FormData, pasándole el formulario.
  const datos = new FormData(form);

  // 2. FormData no es un objeto simple, pero podemos iterar sobre él.
  for (const [clave, valor] of datos.entries()) {
    console.log(\`\${clave}: \${valor}\`);
  }
  // Salida en la consola si el usuario escribe "Ana" y "ana@email.com":
  // nombre_usuario: Ana
  // correo_electronico: ana@email.com
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Acceso a Campos Específicos
			</h3>
			<p className='mb-4'>
				Aunque <code>FormData</code> es genial para recopilar todo, a veces
				necesitamos acceder a campos específicos para validación u otras
				lógicas.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>Campos de texto, email, etc. (`.value`)</strong>: La propiedad{" "}
					<code>.value</code> nos da el contenido del campo.
				</li>
				<li>
					<strong>Checkboxes (`.checked`)</strong>: Para los checkboxes, no nos
					interesa el valor, sino si está marcado o no. La propiedad{" "}
					<code>.checked</code> devuelve <code>true</code> o <code>false</code>.
				</li>
				<li>
					<strong>Select (`.value`)</strong>: La propiedad <code>.value</code>{" "}
					de un elemento <code>&lt;select&gt;</code> nos da el{" "}
					<code>value</code> del <code>&lt;option&gt;</code> seleccionado.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`const inputNombre = document.querySelector('#nombre');
console.log(inputNombre.value); // Muestra lo que esté escrito en el campo

const checkboxTerminos = document.querySelector('#terminos');
if (checkboxTerminos.checked) {
  console.log("El usuario aceptó los términos.");
} else {
  console.log("El usuario NO aceptó los términos.");
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Formulario de Registro Básico
			</h3>
			<p className='mb-4'>
				Vamos a construir un formulario de registro y a capturar todos sus datos
				usando <code>FormData</code>.
			</p>
			<p>
				1. Crea un archivo HTML con un formulario que incluya los siguientes
				campos.{" "}
				<strong>
					No olvides el `label` para cada campo y los atributos `id` y `name`.
				</strong>
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					Nombre Completo (<code>type="text"</code>,{" "}
					<code>name="nombreCompleto"</code>)
				</li>
				<li>
					Correo Electrónico (<code>type="email"</code>,{" "}
					<code>name="email"</code>)
				</li>
				<li>
					Contraseña (<code>type="password"</code>,{" "}
					<code>name="contrasena"</code>)
				</li>
				<li>
					País (un <code>&lt;select&gt;</code> con al menos 3 opciones,{" "}
					<code>name="pais"</code>)
				</li>
				<li>
					Casilla para "Acepto los términos y condiciones" (
					<code>type="checkbox"</code>, <code>name="aceptaTerminos"</code>)
				</li>
				<li>Un botón de envío.</li>
			</ul>
			<p>2. En tu script de JavaScript:</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>Selecciona el formulario.</li>
				<li>
					Añade un listener para el evento <code>submit</code>.
				</li>
				<li>Dentro del listener, previene el comportamiento por defecto.</li>
				<li>
					Crea una instancia de <code>FormData</code> a partir del formulario.
				</li>
				<li>
					Usa un bucle <code>for...of</code> para recorrer los datos y
					mostrarlos en la consola.
				</li>
				<li>
					<strong>Reto (Opcional):</strong> Antes de crear el{" "}
					<code>FormData</code>, accede directamente a la casilla de términos y
					condiciones. Si no está marcada (<code>.checked</code> es{" "}
					<code>false</code>), muestra un <code>alert</code> que diga "Debes
					aceptar los términos y condiciones" y detén la ejecución de la función
					(con <code>return;</code>).
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture35Es;
