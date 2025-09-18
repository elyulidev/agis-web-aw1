import CodeBlock from "@/components/ui/code-block";

const Lecture49Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Un Carrito Completamente Interactivo
			</h3>
			<p className='mb-4'>
				Nuestro carrito ya muestra los productos, pero un carrito de compras
				real necesita ser dinámico. Los usuarios deben poder cambiar de opinión,
				ajustar cantidades o eliminar productos. Hoy implementaremos esa
				interactividad.
			</p>
			<p>
				Para lograrlo, primero modificaremos nuestra función `renderizarCarrito`
				para que incluya los botones de control para cada ítem.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Actualizando `renderizarCarrito`
			</h3>
			<p className='mb-4'>
				Añadiremos botones para incrementar (+), decrementar (-) y eliminar (x)
				la cantidad de cada producto. Es crucial que cada uno de estos botones
				tenga un atributo `data-id` con el ID del producto al que pertenecen,
				para que nuestra delegación de eventos funcione.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`function renderizarCarrito() {
  carritoItemsContainer.innerHTML = '';
  let total = 0;

  carrito.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('carrito-item');
    // ¡Añadimos un data-id al contenedor del ítem también!
    itemDiv.setAttribute('data-id', item.id);
    itemDiv.innerHTML = \`
      <div class="item-info">
        <span>\${item.nombre}</span>
        <span>$\${item.precio.toFixed(2)}</span>
      </div>
      <div class="item-controles">
        <button class="btn-decrementar" data-id="\${item.id}">-</button>
        <span class="cantidad">\${item.cantidad}</span>
        <button class="btn-incrementar" data-id="\${item.id}">+</button>
        <button class="btn-eliminar" data-id="\${item.id}">X</button>
      </div>
    \`;
    carritoItemsContainer.append(itemDiv);
    total += item.precio * item.cantidad;
  });

  carritoTotalSpan.textContent = total.toFixed(2);
}`}
			/>
			<p className='mt-4'>Y añadimos un poco de CSS para que se vea bien:</p>
			<CodeBlock
				language='css'
				codeString={`/* En styles.css */
.carrito-item { flex-direction: column; align-items: stretch; }
.item-info, .item-controles { display: flex; justify-content: space-between; align-items: center; padding: 0.2rem 0; }
.item-controles button { background-color: #6c757d; color: white; border: none; width: 24px; height: 24px; border-radius: 4px; cursor: pointer; }
.btn-eliminar { background-color: #dc3545; }
.cantidad { font-weight: bold; }
`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Delegación de Eventos en el Carrito
			</h3>
			<p className='mb-4'>
				Usaremos el mismo patrón que con los productos. Añadiremos un solo
				listener de `click` al contenedor del carrito y determinaremos qué botón
				fue presionado basándonos en su clase.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`carritoItemsContainer.addEventListener('click', (event) => {
  const idProducto = event.target.getAttribute('data-id');

  if (event.target.classList.contains('btn-incrementar')) {
    actualizarCantidad(idProducto, 1);
  } else if (event.target.classList.contains('btn-decrementar')) {
    actualizarCantidad(idProducto, -1);
  } else if (event.target.classList.contains('btn-eliminar')) {
    eliminarDelCarrito(idProducto);
  }
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Implementando las Funciones de Control
			</h3>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				`actualizarCantidad(id, cambio)`
			</h4>
			<p className='mb-4'>
				Esta función encontrará el ítem en el carrito y modificará su cantidad.
				Si la cantidad llega a cero, lo eliminará.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`function actualizarCantidad(id, cambio) {
  const idNum = parseInt(id);
  const itemIndex = carrito.findIndex(item => item.id === idNum);

  if (itemIndex > -1) {
    carrito[itemIndex].cantidad += cambio;
    // Si la cantidad llega a 0, eliminamos el producto
    if (carrito[itemIndex].cantidad <= 0) {
      carrito.splice(itemIndex, 1); // .splice elimina elementos del array
    }
  }

  renderizarCarrito();
}`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				`eliminarDelCarrito(id)`
			</h4>
			<p className='mb-4'>
				Esta función filtrará el array `carrito`, creando uno nuevo sin el ítem
				que queremos eliminar.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`function eliminarDelCarrito(id) {
  const idNum = parseInt(id);
  carrito = carrito.filter(item => item.id !== idNum);

  renderizarCarrito();
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Carrito Interactivo
			</h3>
			<p className='mb-4'>
				Tu misión es implementar la interactividad completa del carrito.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Actualiza tu función `renderizarCarrito` para incluir los nuevos
					botones de control y el `data-id` en el contenedor del ítem.
				</li>
				<li>Añade el nuevo CSS a tu archivo `styles.css`.</li>
				<li>
					Implementa el listener de `click` en el contenedor del carrito (
					<code>#carrito-items</code>) usando delegación de eventos.
				</li>
				<li>
					Escribe las funciones `actualizarCantidad(id, cambio)` y
					`eliminarDelCarrito(id)`.
				</li>
				<li>
					Prueba tu aplicación. Ahora deberías poder:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>Incrementar la cantidad de un producto.</li>
						<li>Decrementar la cantidad.</li>
						<li>Ver que el producto se elimina si su cantidad llega a 0.</li>
						<li>Eliminar un producto directamente con el botón "X".</li>
					</ul>
				</li>
			</ol>
			<p>
				¡Nuestro carrito está casi listo! En la última lección, añadiremos la
				persistencia de datos y la funcionalidad de vaciar el carrito.
			</p>
		</section>
	</div>
);

export default Lecture49Es;
