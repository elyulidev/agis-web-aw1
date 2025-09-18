import CodeBlock from "@/components/ui/code-block";

const Lecture30Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. El DOM como un Jardín Viviente
			</h3>
			<p className='mb-4'>
				Hemos aprendido a encontrar plantas (seleccionar elementos), leer sus
				etiquetas (obtener atributos) y cambiar el color de sus flores
				(modificar estilos y clases). Hoy, nos convertiremos en verdaderos
				jardineros del DOM: aprenderemos a plantar nuevas flores (crear
				elementos), moverlas de lugar y arrancarlas (eliminarlas).
			</p>
			<p>
				Dominar la creación y eliminación de nodos es la clave para construir
				aplicaciones web verdaderamente dinámicas, como listas de tareas, feeds
				de redes sociales o carritos de compra.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Creando Nuevos Elementos: `createElement`
			</h3>
			<p className='mb-4'>
				El primer paso es crear un nuevo elemento desde cero. Esto se hace con
				el método <code>document.createElement('nombreDeEtiqueta')</code>.
			</p>
			<p className='mb-4'>
				Este método crea un elemento HTML en la memoria de JavaScript, pero{" "}
				<strong>aún no es visible en la página</strong>. Es como construir un
				mueble en tu taller; existe, pero todavía no lo has puesto en ninguna
				habitación de la casa.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Creamos un nuevo elemento <li>
const nuevoItemLista = document.createElement('li');

// Ahora podemos manipularlo como cualquier otro elemento
nuevoItemLista.textContent = "Nuevo ítem desde JS";
nuevoItemLista.classList.add('item-especial');

console.log(nuevoItemLista); // Muestra el elemento <li> en la consola
// Pero aún no se ve en la página.`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Añadiendo Elementos al DOM
			</h3>
			<p className='mb-4'>
				Una vez que nuestro elemento está creado y configurado, necesitamos
				insertarlo en el DOM para que sea visible. Para ello, primero
				seleccionamos un elemento "padre" que ya exista en la página.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Métodos Modernos (Recomendados)
			</h4>
			<p className='mb-4'>Estos métodos son más intuitivos y flexibles.</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`padre.append(hijo)`</strong>: Añade el nuevo elemento al{" "}
					<strong>final</strong> de la lista de hijos del elemento padre.
				</li>
				<li>
					<strong>`padre.prepend(hijo)`</strong>: Añade el nuevo elemento al{" "}
					<strong>principio</strong> de la lista de hijos del elemento padre.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML -->
<ul id="mi-lista">
  <li>Primer ítem</li>
</ul>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const lista = document.querySelector('#mi-lista');

// Creamos un nuevo <li>
const itemFinal = document.createElement('li');
itemFinal.textContent = "Último ítem (añadido con append)";
lista.append(itemFinal);

// Creamos otro <li>
const itemPrincipio = document.createElement('li');
itemPrincipio.textContent = "Primer ítem (añadido con prepend)";
lista.prepend(itemPrincipio);`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Método Clásico: `appendChild`
			</h4>
			<p className='mb-4'>
				Antes de <code>append</code> y <code>prepend</code>, la forma estándar
				era <code>padre.appendChild(hijo)</code>. Funciona de manera similar a{" "}
				<code>append</code>, añadiendo el elemento al final. Todavía lo verás en
				mucho código antiguo.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Eliminando Elementos del DOM
			</h3>
			<p className='mb-4'>Quitar elementos es igual de importante.</p>
			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Método Moderno (Recomendado): `remove`
			</h4>
			<p className='mb-4'>
				La forma más fácil y directa. Simplemente llamas al método{" "}
				<code>.remove()</code> en el elemento que quieres eliminar.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Suponiendo que queremos eliminar el elemento con id="item-a-borrar"
const itemParaBorrar = document.querySelector('#item-a-borrar');

// Si el elemento existe, lo eliminamos
if (itemParaBorrar) {
  itemParaBorrar.remove();
}`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Método Clásico: `removeChild`
			</h4>
			<p className='mb-4'>
				El método más antiguo requería obtener el padre del elemento para poder
				eliminar al hijo: <code>padre.removeChild(hijo)</code>. Es más verboso,
				pero funcional.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Forma antigua
const itemParaBorrar = document.querySelector('#item-a-borrar');
if (itemParaBorrar) {
  const padre = itemParaBorrar.parentElement;
  padre.removeChild(itemParaBorrar);
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Lista de Tareas Interactiva
			</h3>
			<p className='mb-4'>
				Este es el proyecto que une todo lo que hemos aprendido en el Módulo 7.
				Crearemos una aplicación simple de lista de tareas que nos permitirá
				añadir nuevos ítems a una lista.
			</p>
			<p>1. Crea un archivo HTML con la siguiente estructura:</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="es">
<head>
  <title>Lista de Tareas</title>
</head>
<body>
  <h1>Mi Lista de Tareas</h1>

  <div>
    <input type="text" id="nueva-tarea-input" placeholder="Añadir una nueva tarea">
    <button id="agregar-btn">Agregar</button>
  </div>

  <ul id="lista-tareas">
    <!-- Las tareas se añadirán aquí -->
  </ul>

  <script src="main.js"></script>
</body>
</html>`}
			/>
			<p className='mt-4'>
				2. En tu archivo <code>main.js</code>, sigue estos pasos:
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Seleccionar Elementos:</strong> Selecciona el input (
					<code>#nueva-tarea-input</code>), el botón (<code>#agregar-btn</code>)
					y la lista (<code>#lista-tareas</code>). Guárdalos en variables.
				</li>
				<li>
					<strong>Escuchar el Clic:</strong> Añade un escuchador de eventos de
					clic al botón. La lógica para añadir la tarea irá dentro de esta
					función.
				</li>
				<li>
					<strong>Dentro de la función del clic:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Obtén el valor actual del input y guárdalo en una variable. Por
							ejemplo: <code>const textoTarea = input.value;</code>
						</li>
						<li>
							<strong>Validación:</strong> Comprueba si el{" "}
							<code>textoTarea</code> no está vacío. Si lo está, no hagas nada
							(puedes usar <code>return;</code> para salir de la función).
						</li>
						<li>
							<strong>Crear el `li`:</strong> Usa{" "}
							<code>document.createElement('li')</code> para crear un nuevo
							elemento de lista.
						</li>
						<li>
							<strong>Añadir Contenido:</strong> Establece el{" "}
							<code>textContent</code> del nuevo `li` con el{" "}
							<code>textoTarea</code>.
						</li>
						<li>
							<strong>Añadir a la Lista:</strong> Usa <code>.append()</code> en
							tu variable de la lista para añadir el nuevo `li` al DOM.
						</li>
						<li>
							<strong>Limpiar el Input:</strong> Después de añadir la tarea,
							limpia el campo de texto estableciendo su valor a una cadena
							vacía: <code>input.value = '';</code>
						</li>
					</ul>
				</li>
				<li>
					<strong>Reto (Opcional):</strong> Dentro de la función del clic,
					después de crear el <code>li</code>, crea también un botón de
					"Eliminar" (<code>createElement('button')</code>). Añade este botón
					dentro del <code>li</code>. Luego, añade un evento de clic a este
					nuevo botón que, cuando se active, elimine el <code>li</code> completo
					(<code>nuevoLi.remove()</code>).
				</li>
			</ol>
			<p>
				¡Felicidades! Al completar esta tarea, habrás construido tu primera mini
				aplicación web interactiva usando manipulación del DOM.
			</p>
		</section>
	</div>
);

export default Lecture30Es;
