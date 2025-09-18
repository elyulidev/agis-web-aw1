import CodeBlock from "@/components/ui/code-block";

const Lecture33Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Un Universo de Interacciones
			</h3>
			<p className='mb-4'>
				Ya dominamos el evento <code>click</code>, pero la interacción del
				usuario va mucho más allá. JavaScript puede escuchar una amplia gama de
				eventos para crear experiencias ricas y responsivas. Hoy exploraremos
				las categorías de eventos más comunes que usarás en el día a día.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Eventos de Ratón (Mouse Events)
			</h3>
			<p className='mb-4'>
				Estos eventos se disparan por acciones realizadas con el puntero del
				ratón.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`click`</strong>: Se dispara cuando se presiona y suelta el
					botón principal del ratón sobre un elemento.
				</li>
				<li>
					<strong>`dblclick`</strong>: Se dispara con un doble clic.
				</li>
				<li>
					<strong>`mouseover` / `mouseout`</strong>: Se disparan cuando el
					puntero entra o sale del área de un elemento, respectivamente.
					Importante: estos eventos "burbujean", lo que significa que también se
					disparan si entras o sales de un elemento hijo.
				</li>
				<li>
					<strong>`mouseenter` / `mouseleave`</strong>: Similares a los
					anteriores, pero no burbujean. Son más predecibles y a menudo
					preferibles para efectos de hover.
				</li>
				<li>
					<strong>`mousemove`</strong>: Se dispara continuamente mientras el
					puntero se mueve sobre el elemento. ¡Úsalo con cuidado, ya que puede
					dispararse muchas veces por segundo y afectar el rendimiento!
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`const caja = document.querySelector('#miCaja');

caja.addEventListener('mouseenter', () => {
  caja.textContent = "¡Estás dentro!";
});

caja.addEventListener('mouseleave', () => {
  caja.textContent = "Estás fuera.";
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Eventos de Teclado (Keyboard Events)
			</h3>
			<p className='mb-4'>
				Fundamentales para capturar la entrada del usuario, crear atajos de
				teclado o validar formularios en tiempo real.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`keydown`</strong>: Se dispara cuando una tecla es presionada.
				</li>
				<li>
					<strong>`keyup`</strong>: Se dispara cuando una tecla es soltada.
				</li>
				<li>
					<strong>`keypress`</strong>: (Obsoleto) Similar a `keydown`, pero solo
					para teclas que producen un carácter. Es mejor usar `keydown`.
				</li>
			</ul>
			<p className='mb-4'>
				El objeto <code>event</code> en estos casos tiene una propiedad muy
				útil: <strong>`event.key`</strong>, que nos da un string con el valor de
				la tecla presionada (ej. "a", "Enter", "Escape").
			</p>
			<CodeBlock
				language='javascript'
				codeString={`document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    console.log("Se ha presionado la tecla Escape.");
    // Aquí podríamos cerrar un modal, por ejemplo.
  }
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Eventos de Formulario (Form Events)
			</h3>
			<p className='mb-4'>
				Esenciales para crear formularios interactivos y con buena experiencia
				de usuario.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`submit`</strong>: Se dispara en el elemento{" "}
					<code>&lt;form&gt;</code> cuando se intenta enviar (ya sea con un
					botón de tipo "submit" o presionando Enter). Es aquí donde usamos
					`event.preventDefault()` para manejar el envío con JavaScript.
				</li>
				<li>
					<strong>`input`</strong>: Se dispara en un <code>&lt;input&gt;</code>,{" "}
					<code>&lt;select&gt;</code>, o <code>&lt;textarea&gt;</code>{" "}
					<strong>inmediatamente</strong> cada vez que su valor cambia. Ideal
					para feedback en tiempo real.
				</li>
				<li>
					<strong>`change`</strong>: Similar a `input`, pero se dispara cuando
					el valor es "confirmado", es decir, cuando el elemento pierde el foco
					(blur).
				</li>
				<li>
					<strong>`focus` / `blur`</strong>: Se disparan cuando un elemento de
					formulario gana o pierde el foco, respectivamente.
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				5. Eventos de la Ventana y el Documento
			</h3>
			<p className='mb-4'>
				Estos eventos se aplican al documento completo o a la ventana del
				navegador.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`DOMContentLoaded`</strong>: ¡El más importante! Se dispara en
					el objeto <code>document</code> cuando el documento HTML ha sido
					completamente cargado y parseado, sin esperar a que se carguen hojas
					de estilo, imágenes y sub-frames.
				</li>
			</ul>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					Práctica recomendada:
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Envuelve todo tu código JavaScript que manipula el DOM dentro de un
					listener para `DOMContentLoaded`. Esto garantiza que tu código no
					intentará seleccionar un elemento que aún no existe en la página,
					evitando errores.
				</p>
			</div>
			<CodeBlock
				language='javascript'
				codeString={`document.addEventListener('DOMContentLoaded', function() {
  // Todo tu código JS que interactúa con el DOM va aquí.
  const boton = document.querySelector('#miBoton');
  if(boton) {
    boton.addEventListener('click', () => {
      console.log('El DOM estaba listo cuando se añadió este listener.');
    });
  }
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Contador de Caracteres
			</h3>
			<p className='mb-4'>
				Vamos a construir una pequeña utilidad que muestre al usuario cuántos
				caracteres ha escrito en un <code>&lt;textarea&gt;</code>,
				actualizándose en tiempo real.
			</p>
			<p>1. Crea un archivo HTML con la siguiente estructura:</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="es">
<head><title>Contador</title></head>
<body>
    <h2>Escribe tu mensaje:</h2>
    <textarea id="mensaje-input" maxlength="200"></textarea>
    <p>Caracteres restantes: <span id="contador">200</span></p>
    <script src="main.js"></script>
</body>
</html>`}
			/>
			<p className='mt-4'>2. En tu archivo JavaScript:</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Envuelve todo tu código en un listener para el evento{" "}
					<code>DOMContentLoaded</code>.
				</li>
				<li>
					Dentro del listener, selecciona el <code>&lt;textarea&gt;</code> y el{" "}
					<code>&lt;span&gt;</code> del contador.
				</li>
				<li>
					Añade un <code>addEventListener</code> al{" "}
					<code>&lt;textarea&gt;</code> para el evento{" "}
					<strong>
						<code>input</code>
					</strong>
					.
				</li>
				<li>
					Dentro de la función callback del evento `input`:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Obtén la longitud del valor actual del textarea (
							<code>textarea.value.length</code>).
						</li>
						<li>
							Calcula los caracteres restantes (por ejemplo, 200 - longitud
							actual).
						</li>
						<li>
							Actualiza el <code>textContent</code> del{" "}
							<code>&lt;span&gt;</code> con el número de caracteres restantes.
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture33Es;
