import CodeBlock from "@/components/ui/code-block";

const Lecture43Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. De la Teoría a la Práctica: Nuestro Primer Proyecto
			</h3>
			<p className='mb-4'>
				¡Felicidades por llegar al Módulo 11! Este es el momento que todos
				esperábamos. Vamos a dejar de lado los ejercicios aislados y a aplicar
				todo lo que hemos aprendido de HTML, CSS y JavaScript para construir una
				aplicación web completa y funcional desde cero: una{" "}
				<strong>Lista de Tareas (To-Do List)</strong>.
			</p>
			<p>
				Este proyecto nos permitirá integrar conceptos como la manipulación del
				DOM, el manejo de eventos, las funciones, los arrays, los objetos y el
				almacenamiento local en un caso de uso real.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Definición de Requisitos: ¿Qué Debe Hacer Nuestra App?
			</h3>
			<p className='mb-4'>
				Antes de escribir una sola línea de código, un buen desarrollador
				planifica. Definamos las características (o "features") que tendrá
				nuestra aplicación:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Añadir Tareas:</strong> El usuario debe poder escribir una
					nueva tarea en un campo de texto y añadirla a una lista.
				</li>
				<li>
					<strong>Mostrar Tareas:</strong> Las tareas añadidas deben aparecer
					visualmente en la página.
				</li>
				<li>
					<strong>Marcar como Completada:</strong> El usuario debe poder marcar
					una tarea como completada, lo que debería reflejarse visualmente (por
					ejemplo, tachando el texto).
				</li>
				<li>
					<strong>Eliminar Tareas:</strong> El usuario debe poder eliminar
					tareas de la lista.
				</li>
				<li>
					<strong>Persistencia de Datos:</strong> Las tareas no deben
					desaparecer si el usuario recarga la página. Deben guardarse en el
					navegador.
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Planificación de la Estructura HTML
			</h3>
			<p className='mb-4'>
				Basándonos en los requisitos, podemos diseñar la estructura HTML.
				Necesitaremos:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					Un <code>&lt;header&gt;</code> para el título de la aplicación.
				</li>
				<li>
					Un <code>&lt;form&gt;</code> que contendrá el{" "}
					<code>&lt;input&gt;</code> para la nueva tarea y un{" "}
					<code>&lt;button&gt;</code> de tipo <code>submit</code>. Usar un
					formulario es semánticamente correcto y nos permite capturar el envío
					fácilmente.
				</li>
				<li>
					Una sección <code>&lt;main&gt;</code> que contendrá la lista de
					tareas.
				</li>
				<li>
					Una lista desordenada <code>&lt;ul&gt;</code> donde insertaremos
					dinámicamente cada tarea.
				</li>
				<li>
					Cada tarea será un <code>&lt;li&gt;</code> que, a su vez, contendrá el
					texto de la tarea y los botones de "Completar" y "Eliminar".
				</li>
				<li>
					Un <code>&lt;footer&gt;</code> donde podríamos mostrar información
					adicional, como cuántas tareas quedan pendientes.
				</li>
			</ul>
			<p className='font-semibold mb-2'>Código HTML Inicial (`index.html`):</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tareas</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="app-container">
        <header>
            <h1>Mis Tareas</h1>
        </header>
        <main>
            <form id="todo-form">
                <input type="text" id="todo-input" placeholder="¿Qué necesitas hacer?" required>
                <button type="submit">Añadir</button>
            </form>
            <ul id="todo-list">
                <!-- Las tareas se añadirán aquí con JavaScript -->
            </ul>
        </main>
        <footer id="app-footer">
            <p>Tareas pendientes: <span id="pending-count">0</span></p>
        </footer>
    </div>
    <script src="script.js"></script>
</body>
</html>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Estilos Básicos para la Apariencia
			</h3>
			<p className='mb-4'>
				Aunque este no es un curso de CSS avanzado, una buena apariencia ayuda.
				Aquí tienes unos estilos básicos para que la aplicación se vea limpia y
				moderna.
			</p>
			<p className='font-semibold mb-2'>Código CSS Inicial (`styles.css`):</p>
			<CodeBlock
				language='css'
				codeString={`/* (Puedes copiar y pegar estos estilos) */
body {
    font-family: sans-serif;
    background-color: #f4f7f6;
    color: #333;
    display: flex;
    justify-content: center;
    align-items-center;
    min-height: 100vh;
    margin: 0;
}

.app-container {
    background-color: white;
    width: 100%;
    max-width: 500px;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

h1 {
    text-align: center;
    color: #2c3e50;
}

#todo-form {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

#todo-input {
    flex-grow: 1;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

#todo-form button {
    padding: 0.75rem 1.25rem;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s;
}

#todo-form button:hover {
    background-color: #2980b9;
}

#todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
}
`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Montando el Escenario
			</h3>
			<p className='mb-4'>
				Tu misión para esta lección es preparar todo el entorno de nuestro
				proyecto.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Crea una nueva carpeta para el proyecto, por ejemplo,{" "}
					<code>app-lista-tareas</code>.
				</li>
				<li>
					Dentro de esa carpeta, crea los tres archivos: <code>index.html</code>
					, <code>styles.css</code>, y <code>script.js</code>.
				</li>
				<li>
					Copia y pega el código HTML y CSS proporcionado en sus respectivos
					archivos.
				</li>
				<li>
					En tu archivo <code>script.js</code>, escribe el código inicial:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Añade un listener para el evento `DOMContentLoaded` para
							asegurarte de que el DOM está listo.
						</li>
						<li>
							Dentro de ese listener, selecciona todos los elementos del DOM que
							vamos a necesitar (el formulario, el input y la lista `ul`) y
							guárdalos en constantes.
						</li>
						<li>
							Añade un listener al formulario para el evento <code>submit</code>
							. Por ahora, esta función solo debe hacer dos cosas: llamar a{" "}
							<code>event.preventDefault()</code> y mostrar un mensaje en la
							consola como <code>console.log('Formulario enviado');</code>.
						</li>
					</ul>
				</li>
				<li>
					Abre tu <code>index.html</code> en el navegador. Deberías ver la
					estructura y los estilos. Al escribir algo en el input y presionar el
					botón, la página no debería recargarse y deberías ver tu mensaje en la
					consola.
				</li>
			</ol>
			<p>
				¡Con esto, nuestro escenario está listo para empezar a añadir la lógica
				en la próxima lección!
			</p>
		</section>
	</div>
);

export default Lecture43Es;
