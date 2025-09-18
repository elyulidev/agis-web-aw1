import CodeBlock from "@/components/ui/code-block";

const Lecture36Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. La Primera Línea de Defensa: Validación en el Cliente
			</h3>
			<p className='mb-4'>
				La validación de formularios consiste en asegurarse de que los datos
				introducidos por el usuario son correctos y completos antes de
				procesarlos. La validación del lado del cliente (en el navegador) es
				nuestra primera línea de defensa. Proporciona feedback instantáneo al
				usuario, mejorando enormemente la experiencia y evitando envíos
				innecesarios al servidor.
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					¡Importante!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					La validación en el cliente es una ayuda para la UX,{" "}
					<strong>no una medida de seguridad</strong>. Un usuario
					malintencionado siempre puede saltársela. La validación{" "}
					<strong>siempre</strong> debe repetirse en el lado del servidor.
				</p>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Validación con Atributos de HTML5
			</h3>
			<p className='mb-4'>
				HTML5 nos proporciona una serie de atributos que podemos añadir a
				nuestros campos de formulario para que el navegador realice validaciones
				básicas automáticamente, sin necesidad de JavaScript.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`required`</strong>: El campo no puede estar vacío.
				</li>
				<li>
					<strong>`minlength` / `maxlength`</strong>: Especifica la longitud
					mínima y máxima para campos de texto.
				</li>
				<li>
					<strong>`min` / `max`</strong>: Define el valor mínimo y máximo para
					campos numéricos.
				</li>
				<li>
					<strong>`type`</strong>: Atributos como <code>email</code> o{" "}
					<code>url</code> hacen que el navegador compruebe que el formato es
					correcto.
				</li>
				<li>
					<strong>`pattern`</strong>: El más potente. Permite definir una
					expresión regular que el valor debe cumplir.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<form>
  <label for="username">Nombre de usuario (mín. 5 caracteres):</label>
  <input type="text" id="username" name="username" required minlength="5">

  <label for="email">Correo electrónico:</label>
  <input type="email" id="email" name="email" required>

  <label for="zip">Código Postal (5 dígitos):</label>
  <input type="text" id="zip" name="zip" required pattern="[0-9]{5}">

  <button type="submit">Enviar</button>
</form>`}
			/>
			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Feedback Visual con Pseudo-clases CSS
			</h4>
			<p className='mb-4'>
				Podemos usar las pseudo-clases <code>:valid</code> y{" "}
				<code>:invalid</code> en nuestro CSS para dar feedback visual inmediato
				al usuario.
			</p>
			<CodeBlock
				language='css'
				codeString={`input:invalid {
  border-color: red;
}

input:valid {
  border-color: green;
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Validación con JavaScript: Lógica Personalizada
			</h3>
			<p className='mb-4'>
				Para reglas más complejas (como "la contraseña debe contener un número"
				o "las dos contraseñas deben coincidir"), necesitamos JavaScript. La
				estrategia es la misma: interceptamos el evento <code>submit</code> y,
				antes de hacer nada con los datos, comprobamos si cumplen nuestras
				reglas.
			</p>
			<CodeBlock
				language='html'
				codeString={`<form id="registro">
  <label for="pass1">Contraseña:</label>
  <input type="password" id="pass1" name="pass1" required>

  <label for="pass2">Confirmar Contraseña:</label>
  <input type="password" id="pass2" name="pass2" required>

  <p id="error-msg" style="color: red;"></p>
  <button type="submit">Registrar</button>
</form>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const form = document.querySelector('#registro');
const pass1 = document.querySelector('#pass1');
const pass2 = document.querySelector('#pass2');
const errorMsg = document.querySelector('#error-msg');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Limpiamos el mensaje de error anterior
  errorMsg.textContent = '';

  // Nuestra regla de validación personalizada
  if (pass1.value !== pass2.value) {
    errorMsg.textContent = "Las contraseñas no coinciden.";
    return; // Detenemos la ejecución
  }

  if (pass1.value.length < 8) {
    errorMsg.textContent = "La contraseña debe tener al menos 8 caracteres.";
    return;
  }

  // Si todo es correcto...
  alert("¡Registro exitoso!");
  // Aquí enviaríamos los datos.
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Mejorando el Formulario de Registro
			</h3>
			<p className='mb-4'>
				Vamos a tomar el formulario de registro de la lección anterior y a
				añadirle varias capas de validación.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Validación HTML5:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Haz que los campos de nombre, email y contraseña sean obligatorios
							(<code>required</code>).
						</li>
						<li>
							Añade una longitud mínima (<code>minlength</code>) de 8 caracteres
							al campo de la contraseña.
						</li>
					</ul>
				</li>
				<li>
					<strong>Feedback CSS:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>Crea un archivo CSS y enlázalo a tu HTML.</li>
						<li>
							Añade reglas para <code>input:invalid</code> para que tengan un
							borde rojo y para <code>input:valid</code> para que tengan un
							borde verde. Esto dará feedback instantáneo.
						</li>
					</ul>
				</li>
				<li>
					<strong>Validación con JavaScript:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Añade un segundo campo de contraseña para "Confirmar Contraseña".
						</li>
						<li>
							En tu script, dentro del listener del evento <code>submit</code>,
							implementa la lógica para comprobar que las dos contraseñas
							coinciden.
						</li>
						<li>
							Si no coinciden, muestra un mensaje de error en un párrafo debajo
							de los campos y no envíes el formulario.
						</li>
						<li>
							Si todas las validaciones pasan, muestra un <code>alert</code> de
							"¡Formulario enviado correctamente!".
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture36Es;
