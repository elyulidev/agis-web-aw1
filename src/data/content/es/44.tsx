import CodeBlock from "@/components/ui/code-block";

const Lecture44Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. La Fuente de la Verdad: El Estado de la Aplicación
			</h3>
			<p className='mb-4'>
				En el desarrollo de aplicaciones interactivas, es fundamental tener una
				única "fuente de la verdad" para nuestros datos. En lugar de leer y
				escribir directamente en el DOM, usaremos una variable de JavaScript (un
				array) para mantener el estado de nuestras tareas. El DOM será solo un
				reflejo de lo que hay en esta variable.
			</p>
			<p>
				Definiremos un array que contendrá objetos. Cada objeto representará una
				tarea y tendrá tres propiedades:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`id`</strong>: Un identificador único para cada tarea.
					Usaremos <code>Date.now()</code> para generar uno simple.
				</li>
				<li>
					<strong>`texto`</strong>: El contenido de la tarea (un string).
				</li>
				<li>
					<strong>`completada`</strong>: Un booleano (<code>true</code> o{" "}
					<code>false</code>) para saber si la tarea está terminada.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`// En script.js, dentro del listener de DOMContentLoaded
let tareas = [];`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. La Función Mágica: `renderizarTareas()`
			</h3>
			<p className='mb-4'>
				Crearemos una función central llamada <code>renderizarTareas</code>. Su
				única responsabilidad será tomar el array <code>tareas</code> y
				"dibujar" la lista correspondiente en el HTML. La llamaremos cada vez
				que nuestros datos cambien.
			</p>
			<p className='font-semibold'>Lógica de la función:</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Limpiar la lista:</strong> Antes de añadir los nuevos ítems,
					vaciamos el contenido actual de la `ul` con{" "}
					<code>lista.innerHTML = '';</code> para evitar duplicados.
				</li>
				<li>
					<strong>Recorrer el array:</strong> Usamos <code>.forEach()</code>{" "}
					para iterar sobre cada objeto `tarea` en nuestro array `tareas`.
				</li>
				<li>
					<strong>Crear cada `li`:</strong> Por cada tarea, creamos un nuevo
					elemento <code>&lt;li&gt;</code>.
				</li>
				<li>
					<strong>Añadir clases y atributos:</strong> Si la tarea está
					completada (<code>tarea.completada</code> es <code>true</code>), le
					añadimos una clase CSS (ej. <code>"completada"</code>) para poder
					estilizarla. También añadimos un atributo `data-id` con el `id` de la
					tarea, que será crucial más adelante para saber qué tarea eliminar o
					completar.
				</li>
				<li>
					<strong>Construir el contenido interno:</strong> Usamos `innerHTML`
					para crear la estructura interna del `li`, que incluirá un `span` para
					el texto y los botones de completar y eliminar.
				</li>
				<li>
					<strong>Añadir al DOM:</strong> Finalmente, usamos `lista.append()`
					para añadir el `li` recién creado a la `ul`.
				</li>
			</ol>
			<CodeBlock
				language='javascript'
				codeString={`// (Esta función va dentro del listener de DOMContentLoaded)
function renderizarTareas() {
  todoList.innerHTML = ''; // Limpiamos la lista

  tareas.forEach(tarea => {
    const li = document.createElement('li');

    // Añadimos una clase si la tarea está completada
    if (tarea.completada) {
      li.classList.add('completada');
    }

    // Guardamos el id en un atributo data-*
    li.setAttribute('data-id', tarea.id);

    li.innerHTML = \`
      <span>\${tarea.texto}</span>
      <div class="botones">
        <button class="btn-completar">Completar</button>
        <button class="btn-eliminar">Eliminar</button>
      </div>
    \`;

    todoList.append(li);
  });
}`}
			/>
			<p className='mt-4'>
				Necesitaremos añadir un poco de CSS para la clase `.completada`:
			</p>
			<CodeBlock
				language='css'
				codeString={`/* En styles.css */
li.completada span {
    text-decoration: line-through;
    color: #95a5a6;
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Implementando la Lógica para Añadir Tareas
			</h3>
			<p className='mb-4'>
				Ahora, modificaremos el listener del formulario que creamos en la
				lección anterior.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`todoForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtenemos el texto del input y quitamos espacios en blanco
  const textoTarea = todoInput.value.trim();

  // Validamos que no esté vacío
  if (textoTarea !== '') {
    // Creamos el nuevo objeto de tarea
    const nuevaTarea = {
      id: Date.now(),
      texto: textoTarea,
      completada: false
    };

    // Añadimos la nueva tarea al array de estado
    tareas.push(nuevaTarea);

    // Volvemos a renderizar toda la lista
    renderizarTareas();

    // Limpiamos el input para la siguiente tarea
    todoInput.value = '';
  }
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: ¡Hazlo Funcionar!
			</h3>
			<p className='mb-4'>
				Es tu turno de implementar la lógica principal de la aplicación.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>Declara tu array `tareas` vacío.</li>
				<li>
					Copia y pega el CSS para la clase `.completada` en tu archivo
					`styles.css`.
				</li>
				<li>
					Escribe la función `renderizarTareas()` completa en tu `script.js`,
					tal como se muestra arriba.
				</li>
				<li>
					Actualiza el listener del evento `submit` de tu formulario con la
					lógica para añadir tareas al array y volver a renderizar.
				</li>
				<li>
					Prueba tu aplicación. Ahora deberías poder escribir en el campo de
					texto, presionar "Añadir", y ver cómo tu nueva tarea aparece en la
					lista.
				</li>
			</ol>
			<p>
				En la próxima lección, haremos que los botones de "Completar" y
				"Eliminar" funcionen y guardaremos todo en la memoria del navegador.
			</p>
		</section>
	</div>
);

export default Lecture44Es;
