import CodeBlock from "@/components/ui/code-block";

const Lecture50Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Últimos Retoques: Persistencia y Finalización
			</h3>
			<p className='mb-4'>
				¡Bienvenido a la culminación de nuestro proyecto de carrito de compras!
				Nuestra aplicación es completamente interactiva, pero aún le falta una
				característica clave: la persistencia. Usaremos `localStorage` para que
				el carrito recuerde su contenido entre visitas. Además, añadiremos la
				funcionalidad de "Vaciar Carrito" para simular una compra finalizada.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Implementando Persistencia con `localStorage`
			</h3>
			<p className='mb-4'>
				Al igual que con la lista de tareas, crearemos funciones para guardar y
				cargar el estado de nuestro carrito. La diferencia es que ahora debemos
				llamar a `guardarCarrito()` después de <strong>cada</strong> acción que
				modifique el array `carrito`.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`function guardarCarrito() {
  localStorage.setItem('carritoDeCompras', JSON.stringify(carrito));
}

function cargarCarrito() {
  const carritoGuardado = localStorage.getItem('carritoDeCompras');
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
  }
  // Renderizamos tanto los productos como el carrito al cargar
  renderizarProductos();
  renderizarCarrito();
}

// Reemplazamos las llamadas iniciales con una sola llamada a cargarCarrito()
document.addEventListener('DOMContentLoaded', cargarCarrito);`}
			/>
			<p className='mt-4'>
				Ahora, debemos asegurarnos de llamar a <code>guardarCarrito()</code> en
				los lugares correctos:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>Al final de la función `añadirAlCarrito()`.</li>
				<li>Al final de la función `actualizarCantidad()`.</li>
				<li>Al final de la función `eliminarDelCarrito()`.</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Funcionalidad de "Vaciar Carrito"
			</h3>
			<p className='mb-4'>
				Esta función simulará una compra exitosa. Vaciaremos el array `carrito`,
				actualizaremos `localStorage` y volveremos a renderizar la interfaz.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const btnVaciarCarrito = document.querySelector('#btn-vaciar-carrito');

btnVaciarCarrito.addEventListener('click', () => {
  if (carrito.length > 0) {
    // Vaciamos el array de estado
    carrito = [];

    // Actualizamos el localStorage y la UI
    guardarCarrito();
    renderizarCarrito();

    alert('¡Gracias por tu compra!');
  } else {
    alert('El carrito ya está vacío.');
  }
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Mejora Final: Mensaje de Carrito Vacío
			</h3>
			<p className='mb-4'>
				Para mejorar la experiencia del usuario, mostraremos un mensaje claro
				cuando el carrito esté vacío en lugar de dejarlo en blanco.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Dentro de renderizarCarrito(), después de limpiar el contenedor
function renderizarCarrito() {
  carritoItemsContainer.innerHTML = '';

  if (carrito.length === 0) {
    carritoItemsContainer.innerHTML = '<p class="carrito-vacio">El carrito está vacío.</p>';
    carritoTotalSpan.textContent = '0.00';
    return; // Salimos de la función
  }

  let total = 0;
  // ... resto del código de renderizado ...
}`}
			/>
			<p className='mt-4'>Y el estilo para el mensaje:</p>
			<CodeBlock
				language='css'
				codeString={`/* En styles.css */
.carrito-vacio {
  text-align: center;
  color: #888;
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Completando el Proyecto
			</h3>
			<p className='mb-4'>
				Tu tarea final es implementar estas últimas funcionalidades para
				completar el carrito de compras.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Integra `localStorage`:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>Añade las funciones `guardarCarrito()` y `cargarCarrito()`.</li>
						<li>
							Reemplaza tus llamadas iniciales a `renderizar...` con un
							`addEventListener` para `DOMContentLoaded` que llame a
							`cargarCarrito()`.
						</li>
						<li>
							Asegúrate de llamar a `guardarCarrito()` después de cada
							modificación del carrito (en `añadirAlCarrito`,
							`actualizarCantidad` y `eliminarDelCarrito`).
						</li>
					</ul>
				</li>
				<li>
					<strong>Implementa el Vaciado:</strong> Añade el `addEventListener`
					para el botón "Vaciar Carrito" y su lógica correspondiente.
				</li>
				<li>
					<strong>Añade el Mensaje de Vacío:</strong> Modifica
					`renderizarCarrito` para mostrar el mensaje cuando no haya productos y
					añade el CSS.
				</li>
				<li>
					<strong>¡Prueba Todo!</strong> Realiza un flujo de compra completo:
					añade productos, actualiza cantidades, elimina uno, recarga la página
					para verificar la persistencia y, finalmente, vacía el carrito.
				</li>
			</ol>
			<p>
				<strong>¡Felicidades!</strong> Has construido un proyecto práctico y
				complejo, integrando todos los conceptos fundamentales del desarrollo
				web con JavaScript. Ahora tienes una base sólida para enfrentar
				proyectos aún más grandes.
			</p>
		</section>
	</div>
);

export default Lecture50Es;
