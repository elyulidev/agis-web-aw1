import CodeBlock from "@/components/ui/code-block";

const Lecture45Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Haciendo que los Datos Sobrevivan: `localStorage`
			</h3>
			<p className='mb-4'>
				Nuestra aplicación funciona, pero tiene un gran problema: si recargamos
				la página, todas las tareas desaparecen. Esto se debe a que nuestro
				array `tareas` vive en la memoria de JavaScript, que se reinicia con
				cada recarga. Para solucionar esto, usaremos{" "}
				<strong>`localStorage`</strong>.
			</p>
			<p className='mb-4'>
				`localStorage` nos permite guardar datos como cadenas de texto en el
				navegador del usuario. Estos datos persisten incluso después de cerrar y
				volver a abrir el navegador.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Guardar y Cargar Tareas
			</h4>
			<p className='mb-4'>
				Crearemos dos funciones auxiliares: una para guardar y otra para cargar.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`function guardarTareas() {
  localStorage.setItem('tareas', JSON.stringify(tareas));
}

function cargarTareas() {
  const tareasGuardadas = localStorage.getItem('tareas');
  if (tareasGuardadas) {
    tareas = JSON.parse(tareasGuardadas);
  }
  renderizarTareas();
}

// Llamamos a cargarTareas() al inicio, después de seleccionar los elementos.
cargarTareas();`}
			/>
			<p className='mt-4'>
				Ahora, solo tenemos que recordar llamar a <code>guardarTareas()</code>{" "}
				cada vez que nuestro array `tareas` cambie (al añadir, completar o
				eliminar una tarea).
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Interactividad con Delegación de Eventos
			</h3>
			<p className='mb-4'>
				Para manejar los clics en los botones "Completar" y "Eliminar", usaremos
				el patrón de delegación de eventos que aprendimos. Añadiremos un solo
				listener a la `&lt;ul&gt;` y usaremos `event.target` para averiguar qué
				se ha pulsado.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`todoList.addEventListener('click', function(event) {
  const elemento = event.target;
  const id = elemento.parentElement.parentElement.getAttribute('data-id');

  // Comprobar si se hizo clic en el botón de completar
  if (elemento.classList.contains('btn-completar')) {
    marcarComoCompletada(id);
  }

  // Comprobar si se hizo clic en el botón de eliminar
  if (elemento.classList.contains('btn-eliminar')) {
    eliminarTarea(id);
  }
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Implementando las Funciones `marcarComoCompletada` y `eliminarTarea`
			</h3>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Marcar Tarea como Completada
			</h4>
			<p className='mb-4'>
				Esta función buscará la tarea por su ID en el array y cambiará el valor
				de su propiedad `completada`.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`function marcarComoCompletada(id) {
  // Encontramos el índice de la tarea en el array
  const indice = tareas.findIndex(tarea => tarea.id == id);

  if (indice > -1) {
    // Invertimos el valor booleano
    tareas[indice].completada = !tareas[indice].completada;
    guardarTareas();
    renderizarTareas();
  }
}`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Eliminar Tarea</h4>
			<p className='mb-4'>
				Esta función creará un nuevo array que excluya la tarea con el ID que
				queremos eliminar.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`function eliminarTarea(id) {
  // Creamos un nuevo array con todas las tareas excepto la que coincide con el id
  tareas = tareas.filter(tarea => tarea.id != id);

  guardarTareas();
  renderizarTareas();
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Funcionalidad Completa y Persistente
			</h3>
			<p className='mb-4'>
				Ahora es el momento de unir todas las piezas para que nuestra aplicación
				sea completamente funcional.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Añadir Persistencia:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Añade las funciones <code>guardarTareas()</code> y{" "}
							<code>cargarTareas()</code> a tu script.
						</li>
						<li>
							Llama a <code>cargarTareas()</code> una vez al principio de tu
							código (después de seleccionar los elementos del DOM).
						</li>
						<li>
							Asegúrate de llamar a <code>guardarTareas()</code> dentro de tu
							función de añadir tarea.
						</li>
					</ul>
				</li>
				<li>
					<strong>Implementar Acciones:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Añade el `addEventListener` de tipo `click` a tu `&lt;ul&gt;`.
						</li>
						<li>
							Implementa las funciones <code>marcarComoCompletada(id)</code> y{" "}
							<code>eliminarTarea(id)</code>.
						</li>
						<li>
							No olvides llamar a <code>guardarTareas()</code> dentro de estas
							dos funciones también, para que los cambios se guarden.
						</li>
					</ul>
				</li>
				<li>
					<strong>Prueba a Fondo:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>Añade varias tareas.</li>
						<li>Marca algunas como completadas.</li>
						<li>Elimina otras.</li>
						<li>
							<strong>Recarga la página.</strong> Tus tareas deberían reaparecer
							exactamente como las dejaste. ¡Felicidades, has logrado la
							persistencia de datos!
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture45Es;
