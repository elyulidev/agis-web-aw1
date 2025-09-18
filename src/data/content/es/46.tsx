import CodeBlock from "@/components/ui/code-block";

const Lecture46Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. De Funcional a Excepcional: Refactorización y UX
			</h3>
			<p className='mb-4'>
				¡Hemos llegado a la última lección de nuestro proyecto! Nuestra
				aplicación de lista de tareas es completamente funcional. Pero un buen
				desarrollador no se detiene ahí. Ahora es el momento de{" "}
				<strong>refactorizar</strong> (mejorar la estructura interna del código
				sin cambiar su comportamiento externo) y añadir pequeños detalles que
				mejoran la <strong>Experiencia de Usuario (UX)</strong>.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Refactorización: Organizando Nuestro Código
			</h3>
			<p className='mb-4'>
				A medida que nuestro script crece, mantenerlo organizado es crucial. Una
				buena práctica es estructurar el código en secciones lógicas.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`document.addEventListener('DOMContentLoaded', () => {
  // === 1. SELECTORES DEL DOM ===
  const todoForm = document.querySelector('#todo-form');
  const todoInput = document.querySelector('#todo-input');
  const todoList = document.querySelector('#todo-list');
  const pendingCountSpan = document.querySelector('#pending-count');

  // === 2. ESTADO DE LA APLICACIÓN ===
  let tareas = [];

  // === 3. FUNCIONES ===
  function guardarTareas() { /* ... */ }
  function renderizarTareas() { /* ... */ }
  // ... resto de funciones

  // === 4. LISTENERS DE EVENTOS ===
  todoForm.addEventListener('submit', (e) => { /* ... */ });
  todoList.addEventListener('click', (e) => { /* ... */ });

  // === 5. INICIALIZACIÓN ===
  function inicializar() {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      tareas = JSON.parse(tareasGuardadas);
    }
    renderizarTareas();
  }

  inicializar();
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Mejoras de Experiencia de Usuario (UX)
			</h3>
			<p className='mb-4'>
				Son los pequeños detalles los que hacen que una aplicación se sienta
				agradable de usar.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Mejora 1: Foco Automático en el Input
			</h4>
			<p className='mb-4'>
				Después de añadir una tarea, es conveniente que el cursor vuelva
				automáticamente al campo de texto, listo para escribir la siguiente.
				Esto se logra con el método <code>.focus()</code>.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Dentro del listener del 'submit' del formulario, después de limpiar el input
todoInput.focus();`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Mejora 2: Contador de Tareas Pendientes
			</h4>
			<p className='mb-4'>
				Vamos a hacer que el contador del footer funcione. Modificaremos nuestra
				función <code>renderizarTareas</code> para que, además de dibujar la
				lista, actualice el contador.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Dentro de la función renderizarTareas()
function renderizarTareas() {
  // ... (código existente para limpiar y dibujar la lista) ...

  // Actualizar el contador
  const tareasPendientes = tareas.filter(tarea => !tarea.completada).length;
  pendingCountSpan.textContent = tareasPendientes;
}`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Mejora 3: Mensaje de Lista Vacía
			</h4>
			<p className='mb-4'>
				Mostrar una lista vacía puede parecer un error. Es mejor mostrar un
				mensaje amigable.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Dentro de la función renderizarTareas(), después de limpiar la lista
function renderizarTareas() {
  todoList.innerHTML = '';

  if (tareas.length === 0) {
    todoList.innerHTML = '<li class="mensaje-vacio">¡Felicidades, no hay tareas pendientes!</li>';
    pendingCountSpan.textContent = 0;
    return; // Salimos de la función para no ejecutar el resto
  }

  // ... (código existente para el forEach y el contador) ...
}`}
			/>
			<p className='mt-4'>Y un poco de estilo para el mensaje:</p>
			<CodeBlock
				language='css'
				codeString={`/* En styles.css */
.mensaje-vacio {
    text-align: center;
    color: #7f8c8d;
    padding: 1rem;
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Revisión Final y Próximos Pasos
			</h3>
			<p className='mb-4'>
				¡Lo lograste! Has construido una aplicación web completa, desde la
				planificación hasta los toques finales. Has integrado HTML, CSS y una
				cantidad significativa de lógica de JavaScript, cubriendo los conceptos
				más importantes del desarrollo frontend del lado del cliente.
			</p>
			<p>
				Este proyecto es una base excelente. Si quieres seguir practicando,
				podrías intentar añadir nuevas funcionalidades como:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>Filtros para mostrar solo tareas activas o completadas.</li>
				<li>La capacidad de editar una tarea existente.</li>
				<li>Fechas de vencimiento para las tareas.</li>
				<li>Animaciones suaves al añadir o eliminar tareas.</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Puliendo la Aplicación
			</h3>
			<p className='mb-4'>
				Tu tarea final para este proyecto es aplicar las mejoras que hemos
				discutido.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Refactoriza:</strong> Organiza tu archivo{" "}
					<code>script.js</code> usando la estructura de secciones comentadas
					que vimos.
				</li>
				<li>
					<strong>Implementa el Foco:</strong> Añade la línea{" "}
					<code>todoInput.focus();</code> en el lugar correcto para que el input
					se enfoque automáticamente.
				</li>
				<li>
					<strong>Implementa el Contador:</strong> Modifica tu función{" "}
					<code>renderizarTareas</code> para que calcule y muestre correctamente
					el número de tareas pendientes.
				</li>
				<li>
					<strong>Implementa el Mensaje de Lista Vacía:</strong> Añade la lógica
					a `renderizarTareas` para mostrar el mensaje cuando no haya tareas y
					añade el estilo correspondiente a tu CSS.
				</li>
				<li>
					Prueba todo de nuevo. La aplicación debería funcionar como antes, pero
					sentirse más pulida y profesional.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture46Es;
