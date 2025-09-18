import CodeBlock from "@/components/ui/code-block";

const Lecture29Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Más Allá del Contenido: Atributos, Clases y Estilos
			</h3>
			<p className='mb-4'>
				Ya sabemos cómo seleccionar elementos y cambiar su contenido. Ahora,
				aprenderemos a manipular las "etiquetas" y "propiedades" de esos
				elementos. Esto incluye cambiar atributos como el <code>href</code> de
				un enlace, modificar dinámicamente las clases CSS para cambiar la
				apariencia, y ajustar estilos directamente desde JavaScript.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Manipulación de Atributos
			</h3>
			<p className='mb-4'>
				Los atributos HTML (como <code>href</code>, <code>src</code>,{" "}
				<code>id</code>, <code>disabled</code>, etc.) son totalmente accesibles
				desde JavaScript.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`getAttribute('nombreDelAtributo')`</strong>: Obtiene el valor
					actual de un atributo.
				</li>
				<li>
					<strong>`setAttribute('nombreDelAtributo', 'nuevoValor')`</strong>:
					Establece o cambia el valor de un atributo. Si el atributo no existe,
					lo crea.
				</li>
				<li>
					<strong>`removeAttribute('nombreDelAtributo')`</strong>: Elimina un
					atributo por completo de un elemento.
				</li>
				<li>
					<strong>Acceso directo:</strong> Para atributos comunes (
					<code>id</code>, <code>href</code>, <code>src</code>,{" "}
					<code>className</code>, <code>value</code>), a menudo podemos acceder
					a ellos directamente como propiedades del objeto elemento.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML de ejemplo -->
<a id="mi-enlace" href="/inicio">Ir a Inicio</a>
<img id="mi-imagen" src="/logo.png" alt="Logo">
<button id="mi-boton">Haz Clic</button>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const enlace = document.querySelector('#mi-enlace');
const imagen = document.querySelector('#mi-imagen');
const boton = document.querySelector('#mi-boton');

// Leer atributos
console.log(enlace.getAttribute('href')); // Muestra "/inicio"
console.log(enlace.href); // Muestra la URL completa, ej: "http://localhost:3000/inicio"

// Cambiar atributos
enlace.href = "/contacto"; // Acceso directo
imagen.setAttribute('src', '/nuevo-logo.png');

// Añadir y quitar atributos
boton.setAttribute('disabled', 'true'); // Deshabilita el botón
// boton.removeAttribute('disabled'); // Habilitaría el botón`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. La Forma Correcta de Estilizar: `classList`
			</h3>
			<p className='mb-4'>
				Manipular los estilos de un elemento cambiando sus clases CSS es la{" "}
				<strong>práctica más recomendada</strong>. Mantiene la separación de
				responsabilidades: el estilo vive en el archivo CSS, y JavaScript solo
				se encarga de decidir qué clases se aplican.
			</p>
			<p className='mb-4'>
				Cada elemento del DOM tiene una propiedad <code>classList</code>, que es
				un objeto con métodos muy útiles para manejar las clases.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`.add('nombreClase')`</strong>: Añade una nueva clase.
				</li>
				<li>
					<strong>`.remove('nombreClase')`</strong>: Elimina una clase.
				</li>
				<li>
					<strong>`.toggle('nombreClase')`</strong>: Si la clase existe, la
					elimina. Si no existe, la añade. ¡Perfecto para interruptores!
				</li>
				<li>
					<strong>`.contains('nombreClase')`</strong>: Devuelve{" "}
					<code>true</code> o <code>false</code> si el elemento tiene la clase.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML -->
<p id="mensaje">Este es un mensaje.</p>`}
			/>
			<CodeBlock
				language='css'
				codeString={`/* CSS */
.activo {
  background-color: #2563eb; /* Azul */
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
}`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const mensaje = document.querySelector('#mensaje');

// Añadir una clase
mensaje.classList.add('activo');

// Comprobar si tiene la clase
console.log(mensaje.classList.contains('activo')); // Muestra true

// Quitar la clase
// mensaje.classList.remove('activo');

// Alternar la clase
// mensaje.classList.toggle('activo');`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Estilos en Línea (Inline Styles) con la Propiedad `style`
			</h3>
			<p className='mb-4'>
				También podemos modificar directamente los estilos en línea de un
				elemento a través de la propiedad <code>style</code>. Esto es útil para
				cambios muy específicos y dinámicos que serían difíciles de manejar con
				clases.
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					¡Recuerda el camelCase!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					Las propiedades CSS que tienen un guion (kebab-case), como{" "}
					<code>background-color</code> o <code>font-size</code>, se escriben en
					JavaScript usando camelCase: <code>backgroundColor</code> y{" "}
					<code>fontSize</code>.
				</p>
			</div>
			<CodeBlock
				language='javascript'
				codeString={`const titulo = document.querySelector('#titulo');

// Establecer estilos en línea
titulo.style.color = 'red';
titulo.style.backgroundColor = 'lightgrey';
titulo.style.fontSize = '24px';
titulo.style.padding = '10px';
titulo.style.borderRadius = '5px';`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Interruptor de Luz (Modo Oscuro)
			</h3>
			<p className='mb-4'>
				Este es un ejercicio clásico y muy práctico. Crearemos un botón que
				active y desactive un "modo oscuro" en la página, manipulando clases
				CSS.
			</p>
			<p>1. Crea un archivo HTML con un botón y algo de contenido:</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="es">
<head>
  <title>Modo Oscuro</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <button id="interruptor">Cambiar Modo</button>
  </header>
  <main>
    <h1>Bienvenido a la Página</h1>
    <p>Usa el botón para cambiar entre modo claro y oscuro.</p>
  </main>
  <script src="main.js"></script>
</body>
</html>`}
			/>
			<p className='mt-4'>
				2. Crea un archivo <code>styles.css</code> y añade estos estilos:
			</p>
			<CodeBlock
				language='css'
				codeString={`body {
  padding: 2rem;
  transition: background-color 0.3s, color 0.3s;
}

/* Estilos para el modo oscuro */
body.modo-oscuro {
  background-color: #1a202c;
  color: #e2e8f0;
}`}
			/>
			<p className='mt-4'>
				3. Ahora, la magia en <code>main.js</code>:
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Selecciona el botón con el id <code>interruptor</code> y guárdalo en
					una variable.
				</li>
				<li>
					Selecciona el <code>body</code> del documento (puedes usar{" "}
					<code>document.body</code>).
				</li>
				<li>
					Añade un "escuchador de eventos" al botón para que reaccione al clic.
					(¡Adelanto de futuras lecciones! Por ahora, solo copia esta
					estructura). La función que le pasemos se ejecutará cada vez que se
					haga clic.
				</li>
				<li>
					Dentro de la función del evento de clic, usa{" "}
					<code>classList.toggle('modo-oscuro')</code> en el <code>body</code>.
				</li>
			</ol>
			<CodeBlock
				language='javascript'
				codeString={`const interruptor = document.querySelector('#interruptor');
const body = document.body;

interruptor.addEventListener('click', function() {
  // Cada vez que se hace clic, esta línea añade o quita la clase.
  body.classList.toggle('modo-oscuro');
});`}
			/>
			<p className='mt-4'>
				Abre el HTML en tu navegador. ¡Ahora deberías poder cambiar entre el
				modo claro y oscuro con un solo clic!
			</p>
		</section>
	</div>
);

export default Lecture29Es;
