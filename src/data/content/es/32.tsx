import CodeBlock from "@/components/ui/code-block";

const Lecture32Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Escuchando al Usuario: La Esencia de la Interactividad
			</h3>
			<p className='mb-4'>
				Hemos llegado al núcleo de la creación de páginas web dinámicas. La
				interactividad se basa en un concepto simple:{" "}
				<strong>esperar a que algo suceda y luego reaccionar</strong>. Esos
				"algos que suceden" se llaman <strong>eventos</strong>.
			</p>
			<p className='mb-4'>
				Un evento puede ser cualquier cosa: un clic del usuario en un botón, la
				pulsación de una tecla, el movimiento del ratón, o incluso que la página
				termine de cargarse. JavaScript nos permite "escuchar" estos eventos y
				ejecutar una función (un callback) cuando ocurren.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. `addEventListener`: El Oído de JavaScript
			</h3>
			<p className='mb-4'>
				La forma moderna y estándar de manejar eventos es con el método{" "}
				<code>.addEventListener()</code>. Es un método que podemos llamar en
				cualquier elemento del DOM. Su sintaxis básica es:
			</p>
			<CodeBlock
				language='javascript'
				codeString={`elemento.addEventListener('tipoDeEvento', funcionCallback);`}
			/>
			<p className='mt-4'>Desglosemos sus partes:</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`elemento`</strong>: El nodo del DOM que hemos seleccionado
					previamente, en el que queremos escuchar el evento.
				</li>
				<li>
					<strong>`'tipoDeEvento'`</strong>: Un string que especifica el evento
					que queremos escuchar. Los más comunes son <code>'click'</code>,{" "}
					<code>'mouseover'</code>, <code>'keydown'</code>, etc.
				</li>
				<li>
					<strong>`funcionCallback`</strong>: La función que se ejecutará{" "}
					<strong>automáticamente</strong> cuando el evento ocurra en el
					elemento.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML -->
<button id="miBoton">Haz Clic Aquí</button>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`// JS
const boton = document.querySelector('#miBoton');

function alHacerClic() {
  console.log("¡El botón ha sido pulsado!");
  alert("¡Hiciste clic!");
}

// Le decimos al botón que "escuche" el evento 'click'
// y que ejecute la función 'alHacerClic' cuando suceda.
boton.addEventListener('click', alHacerClic);`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. El Objeto `event`: Información sobre lo Sucedido
			</h3>
			<p className='mb-4'>
				Cuando un evento ocurre y se llama a nuestra función callback,
				JavaScript nos pasa automáticamente un argumento muy especial: el objeto{" "}
				<strong>`event`</strong>. Este objeto contiene una gran cantidad de
				información sobre el evento que acaba de ocurrir.
			</p>
			<p className='mb-4'>
				Para acceder a él, simplemente lo definimos como el primer parámetro de
				nuestra función callback.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`boton.addEventListener('click', function(event) {
  // 'event' contiene toda la información sobre el clic
  console.log(event);
});`}
			/>
			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Propiedades Útiles del Objeto `event`
			</h4>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`event.target`</strong>: ¡La más importante! Es el elemento
					específico que originó el evento. Por ejemplo, si tienes un listener
					en un <code>div</code> con tres botones dentro,{" "}
					<code>event.target</code> te dirá en cuál de los tres botones se hizo
					clic.
				</li>
				<li>
					<strong>`event.currentTarget`</strong>: Es el elemento al que está
					adjunto el `addEventListener`.
				</li>
				<li>
					<strong>`event.type`</strong>: El tipo de evento que ocurrió (ej.
					"click").
				</li>
				<li>
					Para eventos de teclado: <code>event.key</code>,{" "}
					<code>event.code</code>.
				</li>
				<li>
					Para eventos de ratón: <code>event.clientX</code>,{" "}
					<code>event.clientY</code> (coordenadas).
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Controlando el Comportamiento: `event.preventDefault()`
			</h3>
			<p className='mb-4'>
				Algunos elementos HTML tienen un comportamiento por defecto cuando
				interactuamos con ellos. Por ejemplo:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4'>
				<li>
					Hacer clic en un enlace (<code>&lt;a&gt;</code>) te lleva a una nueva
					página.
				</li>
				<li>
					Enviar un formulario (<code>&lt;form&gt;</code>) recarga la página.
				</li>
			</ul>
			<p className='mt-4 mb-4'>
				A menudo, queremos interceptar estos eventos con JavaScript y prevenir
				ese comportamiento por defecto para manejarlo nosotros mismos (por
				ejemplo, validar un formulario antes de enviarlo). Para esto, usamos el
				método <strong>`event.preventDefault()`</strong>.
			</p>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML -->
<form id="miFormulario">
  <input type="text" placeholder="Escribe algo...">
  <button type="submit">Enviar</button>
</form>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const formulario = document.querySelector('#miFormulario');

formulario.addEventListener('submit', function(event) {
  // Prevenimos que la página se recargue
  event.preventDefault();

  console.log("Formulario enviado, pero hemos prevenido la recarga.");
  // Aquí iría la lógica para enviar los datos con JS (que veremos más adelante)
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Saludo Personalizado
			</h3>
			<p className='mb-4'>
				Vamos a crear un pequeño programa que saluda al usuario por su nombre
				cuando hace clic en un botón.
			</p>
			<p>1. Crea un archivo HTML con la siguiente estructura:</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="es">
<head>
    <title>Saludo</title>
</head>
<body>
    <input type="text" id="nombre-input" placeholder="Escribe tu nombre">
    <button id="saludar-btn">Saludar</button>
    <h1 id="mensaje-saludo"></h1>
</body>
</html>`}
			/>
			<p className='mt-4'>2. En tu archivo JavaScript:</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Selecciona el campo de texto (<code>#nombre-input</code>), el botón (
					<code>#saludar-btn</code>) y el <code>&lt;h1&gt;</code> (
					<code>#mensaje-saludo</code>).
				</li>
				<li>
					Añade un <code>addEventListener</code> al botón para el evento{" "}
					<code>'click'</code>.
				</li>
				<li>
					Dentro de la función callback del evento:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Obtén el valor actual del campo de texto y guárdalo en una
							variable.
						</li>
						<li>
							Actualiza el <code>textContent</code> del <code>&lt;h1&gt;</code>{" "}
							para que muestre un saludo personalizado, por ejemplo: "¡Hola,
							[nombre]!".
						</li>
					</ul>
				</li>
				<li>
					<strong>Reto (Opcional):</strong> Añade una pequeña validación. Si el
					campo de texto está vacío cuando el usuario hace clic en el botón, el
					mensaje en el <code>&lt;h1&gt;</code> debería decir "Por favor,
					introduce tu nombre".
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture32Es;
