import CodeBlock from "@/components/ui/code-block";

const Lecture31Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Navegando por el Árbol Genealógico del DOM
			</h3>
			<p className='mb-4'>
				Ya sabemos cómo seleccionar cualquier elemento del DOM. Pero a veces,
				una vez que tenemos un elemento, necesitamos movernos a partir de él
				para encontrar a sus "familiares": su padre, sus hijos o sus hermanos.
				Este proceso se llama{" "}
				<strong>recorrido del DOM (DOM Traversing)</strong>.
			</p>
			<p className='mb-4'>
				Es una técnica extremadamente poderosa porque nos permite escribir
				código más flexible. En lugar de depender de IDs y clases específicas
				para todo, podemos encontrar elementos basándonos en su relación con
				otros.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Moviéndose Hacia Arriba: Padres y Ancestros
			</h3>
			<p className='mb-4'>
				La forma más común de subir en el árbol es para encontrar el contenedor
				directo de un elemento.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`.parentElement`</strong>: Devuelve el elemento padre directo
					de un nodo. Es la propiedad más utilizada para subir en el DOM.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML -->
<div class="contenedor">
  <p id="parrafo-hijo">Soy un párrafo hijo.</p>
</div>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const parrafo = document.querySelector('#parrafo-hijo');
const contenedor = parrafo.parentElement;

console.log(contenedor.className); // Muestra "contenedor"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Moviéndose Hacia Abajo: Hijos y Descendientes
			</h3>
			<p className='mb-4'>
				Desde un elemento padre, podemos acceder a todos los elementos que
				contiene.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`.children`</strong>: Devuelve una <code>HTMLCollection</code>{" "}
					(una lista parecida a un array) con los{" "}
					<strong>elementos hijos directos</strong>. Ignora nodos de texto,
					comentarios, etc., por lo que suele ser la más útil.
				</li>
				<li>
					<strong>`.firstElementChild`</strong> y{" "}
					<strong>`.lastElementChild`</strong>: Atajos convenientes para obtener
					el primer o el último hijo, respectivamente. Son equivalentes a{" "}
					<code>.children[0]</code> y{" "}
					<code>.children[children.length - 1]</code>.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML -->
<ul id="lista-principal">
  <li class="item">Manzana</li>
  <li class="item">Naranja</li>
  <li class="item">Plátano</li>
</ul>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const lista = document.querySelector('#lista-principal');

// Obtener todos los hijos
const items = lista.children;
console.log(items.length); // Muestra 3

// Recorrer los hijos con un bucle for
for (let i = 0; i < items.length; i++) {
  items[i].textContent += " (fruta)";
}

// Obtener el primer y último hijo
const primerItem = lista.firstElementChild;
const ultimoItem = lista.lastElementChild;
console.log(primerItem.textContent); // Muestra "Manzana (fruta)"
console.log(ultimoItem.textContent); // Muestra "Plátano (fruta)"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Moviéndose Lateralmente: Hermanos
			</h3>
			<p className='mb-4'>
				Los elementos hermanos son aquellos que están en el mismo nivel
				jerárquico, dentro del mismo padre.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`.nextElementSibling`</strong>: Devuelve el siguiente elemento
					hermano.
				</li>
				<li>
					<strong>`.previousElementSibling`</strong>: Devuelve el elemento
					hermano anterior.
				</li>
			</ul>
			<p>
				Ambas propiedades devuelven <code>null</code> si no hay un hermano en
				esa dirección.
			</p>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML -->
<ul>
  <li>Uno</li>
  <li id="elemento-central">Dos</li>
  <li>Tres</li>
</ul>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const elementoCentral = document.querySelector('#elemento-central');

const hermanoSiguiente = elementoCentral.nextElementSibling;
console.log(hermanoSiguiente.textContent); // Muestra "Tres"

const hermanoAnterior = elementoCentral.previousElementSibling;
console.log(hermanoAnterior.textContent); // Muestra "Uno"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Deconstruyendo una Tarjeta
			</h3>
			<p className='mb-4'>
				Vamos a usar recorrido del DOM para navegar por la estructura de una
				tarjeta de producto. Copia este HTML en un archivo y enlázalo a un nuevo
				script de JS.
			</p>
			<CodeBlock
				language='html'
				codeString={`<div class="tarjeta-producto">
  <header class="tarjeta-header">
    <h2>Producto Increíble</h2>
  </header>
  <div class="tarjeta-cuerpo">
    <p>Una descripción fascinante del producto.</p>
    <button id="boton-compra">Comprar Ahora</button>
  </div>
  <footer class="tarjeta-footer">
    <p>Precio: $99.99</p>
  </footer>
</div>`}
			/>
			<p className='mt-4'>En tu archivo JavaScript:</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Selecciona el botón con el id <code>boton-compra</code> y guárdalo en
					una variable.
				</li>
				<li>
					<strong>Sube en el DOM:</strong> A partir del botón, usa{" "}
					<code>.parentElement</code> para seleccionar el{" "}
					<code>div.tarjeta-cuerpo</code>. Muestra el resultado en la consola.
				</li>
				<li>
					<strong>Sube más alto:</strong> A partir del{" "}
					<code>div.tarjeta-cuerpo</code> que acabas de seleccionar, vuelve a
					usar <code>.parentElement</code> para seleccionar el contenedor
					principal <code>div.tarjeta-producto</code>.
				</li>
				<li>
					<strong>Baja al Encabezado:</strong> Desde el contenedor principal (
					<code>div.tarjeta-producto</code>), usa{" "}
					<code>.firstElementChild</code> para seleccionar el{" "}
					<code>header</code> y muéstralo en la consola.
				</li>
				<li>
					<strong>Muévete Lateralmente:</strong> Desde el{" "}
					<code>div.tarjeta-cuerpo</code> (el padre del botón), usa{" "}
					<code>.nextElementSibling</code> para seleccionar el{" "}
					<code>footer</code> y muéstralo en la consola.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture31Es;
