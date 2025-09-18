import CodeBlock from "@/components/ui/code-block";

const Lecture7Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Formularios II: Potenciando con Atributos de HTML5
			</h3>
			<p className='mb-4'>
				En la última lección del módulo de HTML, sentamos las bases de los
				formularios. Ahora, vamos a añadirles inteligencia y robustez usando
				atributos de HTML5 que mejoran la experiencia de usuario y proporcionan
				validación básica sin necesidad de JavaScript.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Atributos para Mejorar la Usabilidad y la Entrada de Datos
			</h3>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`placeholder`</strong>: Muestra un texto de ejemplo en el
					campo de entrada que desaparece cuando el usuario empieza a escribir.
					Es una pista, no una etiqueta.
					<CodeBlock
						language='html'
						codeString={`<input type="email" placeholder="tu@email.com">`}
					/>
				</li>
				<li>
					<strong>`disabled`</strong>: Deshabilita un campo de entrada. El
					usuario no puede interactuar con él y su valor no se envía con el
					formulario.
					<CodeBlock
						language='html'
						codeString={`<input type="text" value="No editable" disabled>`}
					/>
				</li>
				<li>
					<strong>`readonly`</strong>: Similar a `disabled`, el usuario no puede
					modificar el valor, pero el campo sí se envía con el formulario.
					<CodeBlock
						language='html'
						codeString={`<input type="text" value="Valor de solo lectura" readonly>`}
					/>
				</li>
				<li>
					<strong>`autocomplete`</strong>: Le da una pista al navegador sobre
					qué tipo de información se espera, permitiéndole autocompletar el
					campo con datos guardados del usuario (ej. "on", "off", "email",
					"name").
					<CodeBlock
						language='html'
						codeString={`<input type="email" name="email" autocomplete="email">`}
					/>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Validación Integrada en el Navegador con HTML5
			</h3>
			<p className='mb-4'>
				HTML5 introdujo atributos que permiten al navegador validar los datos de
				un formulario antes de enviarlo, mostrando mensajes de error sin
				escribir una sola línea de JavaScript.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`required`</strong>: El atributo más común. Hace que un campo
					sea obligatorio. El formulario no se enviará si el campo está vacío.
					<CodeBlock
						language='html'
						codeString={`<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre" required>`}
					/>
				</li>
				<li>
					<strong>`minlength` y `maxlength`</strong>: Definen el número mínimo y
					máximo de caracteres permitidos en un campo de texto.
					<CodeBlock
						language='html'
						codeString={`<label for="pass">Contraseña (8-16 caracteres):</label>
<input type="password" id="pass" name="pass" minlength="8" maxlength="16" required>`}
					/>
				</li>
				<li>
					<strong>`min` y `max`</strong>: Definen el valor numérico mínimo y
					máximo para campos de tipo `number` o `date`.
					<CodeBlock
						language='html'
						codeString={`<label for="edad">Edad (18+):</label>
<input type="number" id="edad" name="edad" min="18" max="120">`}
					/>
				</li>
				<li>
					<strong>`pattern`</strong>: El más potente. Permite especificar una{" "}
					<strong>expresión regular</strong> que el valor del campo debe
					cumplir. Es ideal para formatos personalizados como códigos postales o
					números de teléfono.
					<CodeBlock
						language='html'
						codeString={`<label for="cp">Código Postal (5 dígitos):</label>
<input type="text" id="cp" name="cp" pattern="[0-9]{5}" title="Por favor, introduce 5 dígitos numéricos.">`}
					/>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Introducción a CSS: El Arte de la Presentación
			</h3>
			<p className='mb-4'>
				Hemos dominado la estructura (HTML), ahora es el momento de añadir el
				estilo.{" "}
				<strong>
					CSS (Cascading Style Sheets - Hojas de Estilo en Cascada)
				</strong>{" "}
				es el lenguaje que usamos para describir cómo se ven los elementos HTML.
			</p>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					Principio Clave: Separación de Responsabilidades
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					HTML se encarga del <strong>contenido y la estructura</strong>. CSS se
					encarga de la <strong>presentación y el diseño</strong>. Mantenerlos
					separados hace que nuestro código sea más limpio, fácil de mantener y
					más accesible.
				</p>
			</div>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Anatomía de una Regla CSS
			</h4>
			<p className='mb-4'>
				Una regla CSS se compone de dos partes principales:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Selector:</strong> Apunta al elemento o elementos HTML que
					quieres estilizar.
				</li>
				<li>
					<strong>Bloque de Declaración:</strong> Contiene una o más
					declaraciones entre llaves. Cada declaración incluye una propiedad CSS
					y un valor, separados por dos puntos y finalizados con un punto y
					coma.
				</li>
			</ul>
			<div className='my-6 p-4 border rounded-lg bg-gray-50 dark:bg-gray-800/50'>
				<h5 className='font-semibold text-center mb-2'>
					Selector {"{"} Propiedad: Valor; {"}"}
				</h5>
				<CodeBlock
					language='css'
					codeString={`h1 {
  color: blue;
  font-size: 24px;
}`}
				/>
				<p className='mt-2 text-center text-sm text-gray-600 dark:text-gray-400'>
					Esta regla selecciona todos los elementos `&lt;h1&gt;` y los hace de
					color azul y de 24 píxeles de tamaño.
				</p>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Un Formulario Robusto
			</h3>
			<p className='mb-4'>
				Es hora de aplicar estos nuevos conocimientos. Toma el formulario de
				contacto que creaste en el Módulo 1 y mejóralo.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Abre tu archivo <code>contacto.html</code>.
				</li>
				<li>
					Añade el atributo <code>required</code> a los campos de nombre y email
					para que sean obligatorios.
				</li>
				<li>
					En el campo de mensaje (<code>&lt;textarea&gt;</code>), añade un{" "}
					<code>minlength="10"</code> para asegurar que el mensaje no sea
					demasiado corto.
				</li>
				<li>
					Añade un campo para el número de teléfono. Usa <code>type="tel"</code>{" "}
					y un atributo <code>pattern</code> para validar un formato simple (por
					ejemplo, que solo contenga números y tenga una longitud específica).
					No olvides añadir un atributo <code>title</code> para explicar el
					formato esperado.
				</li>
				<li>
					Prueba tu formulario. Intenta enviarlo vacío o con datos incorrectos.
					Deberías ver los mensajes de error del navegador sin haber escrito
					nada de JavaScript.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture7Es;
