import CodeBlock from "@/components/ui/code-block";

const Lecture47Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Nuestro Siguiente Desafío: El Carrito de Compras
			</h3>
			<p className='mb-4'>
				¡Bienvenido al Módulo 12! Con la experiencia de nuestro proyecto de
				lista de tareas, estamos listos para un desafío mayor que es fundamental
				en el mundo del e-commerce: construir un{" "}
				<strong>Carrito de Compras Básico</strong>.
			</p>
			<p>
				Este proyecto solidificará nuestra comprensión del manejo del estado, la
				manipulación del DOM, la delegación de eventos y la persistencia de
				datos. Al final, tendrás una aplicación funcional que simula la
				experiencia de compra en una tienda online.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Planificación y Requisitos
			</h3>
			<p className='mb-4'>
				Una buena planificación es la clave. Definamos las funcionalidades de
				nuestra aplicación:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Mostrar Productos:</strong> La tienda debe mostrar una lista
					de productos disponibles para la compra.
				</li>
				<li>
					<strong>Añadir al Carrito:</strong> Cada producto debe tener un botón
					para añadirlo al carrito.
				</li>
				<li>
					<strong>Visualizar el Carrito:</strong> El usuario debe poder ver los
					productos que ha añadido, su cantidad y el precio.
				</li>
				<li>
					<strong>Actualizar Cantidades:</strong> Permitir al usuario aumentar o
					disminuir la cantidad de un producto en el carrito.
				</li>
				<li>
					<strong>Eliminar Productos:</strong> Permitir al usuario eliminar un
					producto del carrito.
				</li>
				<li>
					<strong>Calcular Total:</strong> El carrito debe mostrar siempre el
					costo total de la compra.
				</li>
				<li>
					<strong>Persistencia:</strong> El contenido del carrito debe
					permanecer aunque se recargue la página.
				</li>
				<li>
					<strong>Vaciar Carrito:</strong> Un botón para vaciar todo el carrito,
					simulando una compra finalizada.
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Estructura de Datos: Nuestras "Fuentes de la Verdad"
			</h3>
			<p className='mb-4'>
				Necesitaremos dos arrays principales para gestionar el estado:
			</p>
			<ol className='list-decimal list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`productos`:</strong> Un array de objetos que representa el
					catálogo de la tienda. Lo definiremos directamente en nuestro script.
					Cada objeto tendrá `id`, `nombre` y `precio`.
					<CodeBlock
						language='javascript'
						codeString={`const productos = [
  { id: 1, nombre: 'Laptop Gamer', precio: 1200 },
  { id: 2, nombre: 'Mouse Óptico', precio: 25 },
  { id: 3, nombre: 'Teclado Mecánico', precio: 80 },
  { id: 4, nombre: 'Monitor 27"', precio: 350 }
];`}
					/>
				</li>
				<li>
					<strong>`carrito`:</strong> Un array (inicialmente vacío) que guardará
					los productos que el usuario añada. Cada objeto en este array será una
					copia del producto, pero con una propiedad adicional: `cantidad`.
					<CodeBlock
						language='javascript'
						codeString={`// Ejemplo de cómo se vería el carrito con un producto
let carrito = [
  { id: 2, nombre: 'Mouse Óptico', precio: 25, cantidad: 2 }
];`}
					/>
				</li>
			</ol>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Estructura HTML y CSS Inicial
			</h3>
			<p className='mb-4'>
				Prepararemos el esqueleto de nuestra tienda. Necesitaremos un contenedor
				para los productos y otro para el carrito.
			</p>
			<p className='font-semibold mb-2'>Código HTML Inicial (`index.html`):</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Carrito de Compras</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Tienda de Tecnología</h1>
        </header>
        <main>
            <div id="productos-container">
                <!-- Los productos se renderizarán aquí -->
            </div>
        </main>
        <aside id="carrito-container">
            <h2>Mi Carrito</h2>
            <div id="carrito-items">
                <!-- Los ítems del carrito se renderizarán aquí -->
            </div>
            <p>Total: $<span id="carrito-total">0.00</span></p>
            <button id="btn-vaciar-carrito">Vaciar Carrito</button>
        </aside>
    </div>
    <script src="script.js"></script>
</body>
</html>`}
			/>
			<p className='mt-4 font-semibold mb-2'>
				Código CSS Inicial (`styles.css`):
			</p>
			<CodeBlock
				language='css'
				codeString={`/* Estilos generales */
body { font-family: sans-serif; background-color: #f0f2f5; margin: 0; padding: 2rem; }
.container { display: flex; gap: 2rem; max-width: 1200px; margin: auto; }
main { flex: 3; }
aside { flex: 1; background-color: #fff; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }

/* Productos */
#productos-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1.5rem; }
.producto-card { border: 1px solid #ddd; border-radius: 8px; padding: 1rem; background-color: #fff; text-align: center; }
.producto-card h3 { margin-top: 0; }
.producto-card button { background-color: #28a745; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; }

/* Carrito */
#carrito-items { margin-bottom: 1rem; }
.carrito-item { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; padding: 0.5rem 0; }
#btn-vaciar-carrito { width: 100%; background-color: #dc3545; color: white; border: none; padding: 0.6rem; border-radius: 4px; cursor: pointer; }
`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Montar la Tienda
			</h3>
			<p className='mb-4'>
				Tu primera tarea es preparar el entorno y mostrar los productos
				iniciales.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Crea una nueva carpeta para el proyecto (ej. <code>tienda-js</code>)
					con los archivos <code>index.html</code>, <code>styles.css</code>, y{" "}
					<code>script.js</code>.
				</li>
				<li>
					Copia el HTML y CSS proporcionados en sus archivos correspondientes.
				</li>
				<li>
					En <code>script.js</code>:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>Define el array `productos` con los datos de ejemplo.</li>
						<li>Define un array `carrito` vacío.</li>
						<li>
							Selecciona el contenedor de productos (
							<code>#productos-container</code>).
						</li>
						<li>
							Crea una función llamada <code>renderizarProductos()</code>.
						</li>
						<li>
							Dentro de esta función, usa un bucle (como <code>.forEach</code>)
							para recorrer el array `productos`. Por cada producto, crea el
							HTML para una tarjeta de producto (un `div` con un `h3`, `p` para
							el precio y un `button`) y añádelo al `productos-container`.{" "}
							<strong>Importante:</strong> Añade un atributo `data-id` al botón
							con el `id` del producto.
						</li>
						<li>
							Llama a <code>renderizarProductos()</code> al final del script
							para que los productos aparezcan al cargar la página.
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture47Es;
