import CodeBlock from "@/components/ui/code-block";

const Lecture48Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Activando la Tienda: Añadir al Carrito
			</h3>
			<p className='mb-4'>
				Con nuestra tienda montada, es hora de implementar la funcionalidad
				principal: permitir que los usuarios añadan productos al carrito.
				Usaremos delegación de eventos en el contenedor de productos para
				manejar los clics de manera eficiente.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// En script.js, después de seleccionar los elementos
const productosContainer = document.querySelector('#productos-container');

productosContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const idProducto = event.target.getAttribute('data-id');
    añadirAlCarrito(idProducto);
  }
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Lógica de `añadirAlCarrito()`
			</h3>
			<p className='mb-4'>
				Esta función será el cerebro de la operación. Recibirá el ID de un
				producto y decidirá si debe añadir un nuevo ítem al carrito o
				simplemente incrementar la cantidad de uno existente.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Convertimos el ID (que viene como string del atributo `data-id`) a un
					número.
				</li>
				<li>
					Usamos el método de array `.find()` para buscar si ya existe un ítem
					con ese ID en nuestro array `carrito`.
				</li>
				<li>
					<strong>Si existe:</strong> Simplemente incrementamos su propiedad
					`cantidad`.
				</li>
				<li>
					<strong>Si no existe:</strong> Buscamos el producto completo en
					nuestro array `productos` y creamos un nuevo objeto para el carrito,
					combinando los datos del producto y añadiendo `cantidad: 1`. Luego, lo
					añadimos al array `carrito` con `.push()`.
				</li>
				<li>
					Finalmente, llamamos a una nueva función,{" "}
					<code>renderizarCarrito()</code>, para que la interfaz se actualice.
				</li>
			</ol>
			<CodeBlock
				language='javascript'
				codeString={`function añadirAlCarrito(id) {
  const idNum = parseInt(id);

  // Comprobar si el producto ya está en el carrito
  const itemExistente = carrito.find(item => item.id === idNum);

  if (itemExistente) {
    // Si existe, incrementar la cantidad
    itemExistente.cantidad++;
  } else {
    // Si no existe, encontrar el producto y añadirlo al carrito
    const productoAñadir = productos.find(producto => producto.id === idNum);
    if (productoAñadir) {
      carrito.push({
        id: productoAñadir.id,
        nombre: productoAñadir.nombre,
        precio: productoAñadir.precio,
        cantidad: 1
      });
    }
  }

  renderizarCarrito();
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Visualizando el Carrito: `renderizarCarrito()`
			</h3>
			<p className='mb-4'>
				Esta función es la contraparte de `renderizarProductos`. Su trabajo es
				tomar el estado actual del array `carrito` y dibujarlo en el DOM.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>Limpiamos el contenido anterior del contenedor del carrito.</li>
				<li>
					Recorremos el array `carrito`. Por cada ítem, creamos el HTML
					correspondiente (nombre, cantidad, precio).
				</li>
				<li>
					Mientras recorremos, calculamos el precio total sumando el `precio *
					cantidad` de cada ítem.
				</li>
				<li>
					Finalmente, actualizamos el `textContent` del span del total con el
					valor calculado, formateado a dos decimales.
				</li>
			</ol>
			<CodeBlock
				language='javascript'
				codeString={`const carritoItemsContainer = document.querySelector('#carrito-items');
const carritoTotalSpan = document.querySelector('#carrito-total');

function renderizarCarrito() {
  carritoItemsContainer.innerHTML = '';
  let total = 0;

  carrito.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('carrito-item');
    itemDiv.innerHTML = \`
      <span>\${item.nombre} (x\${item.cantidad})</span>
      <span>$\${(item.precio * item.cantidad).toFixed(2)}</span>
    \`;
    carritoItemsContainer.append(itemDiv);

    total += item.precio * item.cantidad;
  });

  carritoTotalSpan.textContent = total.toFixed(2);
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Conectando los Puntos
			</h3>
			<p className='mb-4'>
				Tu objetivo es implementar la lógica para que el carrito de compras
				cobre vida.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Añade el `addEventListener` al contenedor de productos para delegar
					los eventos de clic.
				</li>
				<li>
					Implementa la función `añadirAlCarrito(id)` tal como se describió.
				</li>
				<li>
					Selecciona los elementos del DOM necesarios para el carrito (
					<code>#carrito-items</code> y <code>#carrito-total</code>).
				</li>
				<li>Implementa la función `renderizarCarrito()`.</li>
				<li>
					Prueba tu aplicación. Al hacer clic en los botones "Añadir al
					Carrito", deberías ver cómo los productos aparecen en la sección del
					carrito y cómo el total se actualiza correctamente. Si añades el mismo
					producto varias veces, su cantidad debería aumentar.
				</li>
			</ol>
			<p>
				En la próxima lección, haremos que el carrito sea completamente
				interactivo, permitiendo actualizar cantidades y eliminar productos.
			</p>
		</section>
	</div>
);

export default Lecture48Es;
