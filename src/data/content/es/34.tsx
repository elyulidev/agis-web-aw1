import CodeBlock from "@/components/ui/code-block";

const Lecture34Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. El Problema de los Múltiples Listeners
			</h3>
			<p className='mb-4'>
				Imagina una lista con 100 ítems. Si queremos que cada ítem reaccione a
				un clic, el enfoque ingenuo sería añadir un{" "}
				<code>addEventListener</code> a cada uno de los 100{" "}
				<code>&lt;li&gt;</code>.
			</p>
			<p className='mb-4'>Esto presenta dos grandes problemas:</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Rendimiento:</strong> Añadir cientos o miles de escuchadores
					de eventos puede consumir memoria y hacer que la página se sienta más
					lenta.
				</li>
				<li>
					<strong>Elementos Dinámicos:</strong> Si añadimos un nuevo ítem a la
					lista con JavaScript, ¡ese nuevo ítem no tendrá el escuchador de
					eventos! Tendríamos que acordarnos de añadirlo manualmente cada vez.
				</li>
			</ul>
			<p>
				Afortunadamente, existe un patrón de diseño mucho más elegante y
				eficiente para resolver esto: la <strong>delegación de eventos</strong>.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. El Mecanismo: Burbujeo de Eventos (Event Bubbling)
			</h3>
			<p className='mb-4'>
				Para entender la delegación, primero debemos entender cómo viajan los
				eventos por el DOM. Cuando un evento ocurre en un elemento (por ejemplo,
				un clic en un <code>&lt;button&gt;</code>), el evento no se detiene ahí.
				Después de ejecutarse en el botón, "burbujea" hacia arriba: se dispara
				en el padre del botón, luego en el abuelo, y así sucesivamente, hasta
				llegar al <code>&lt;html&gt;</code> y finalmente al objeto{" "}
				<code>document</code>.
			</p>
			<div className='my-6 p-4 border rounded-lg bg-gray-50 dark:bg-gray-800/50 text-center'>
				<h4 className='font-semibold mb-2'>Flujo del Burbujeo</h4>
				<pre className='font-mono text-sm leading-relaxed text-left p-4 bg-white dark:bg-gray-900 rounded-md'>
					{`
   document
      ↑
     html
      ↑
     body
      ↑
      ul  <-- El evento llega aquí
      ↑
     li   <-- El evento llega aquí
      ↑
   button <-- Clic aquí (event.target)
`}
				</pre>
			</div>
			<p>
				Podemos aprovechar este comportamiento. En lugar de escuchar en el
				objetivo original, podemos escuchar en un ancestro común.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. La Solución: Delegación de Eventos
			</h3>
			<p className='mb-4'>
				El patrón de delegación de eventos consiste en lo siguiente:
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					En lugar de añadir un escuchador a cada elemento hijo, añadimos{" "}
					<strong>un solo escuchador</strong> a su contenedor padre (por
					ejemplo, al <code>&lt;ul&gt;</code> en lugar de a cada{" "}
					<code>&lt;li&gt;</code>).
				</li>
				<li>
					Dentro de la función callback, usamos la propiedad{" "}
					<strong>`event.target`</strong> para identificar exactamente qué
					elemento hijo fue el que originó el evento.
				</li>
				<li>
					Comprobamos si <code>event.target</code> es el tipo de elemento que
					nos interesa.
				</li>
			</ol>
			<p className='mb-4'>Veamos cómo se aplica a nuestra lista de ítems.</p>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML -->
<ul id="lista-padre">
  <li class="item">Ítem 1</li>
  <li class="item">Ítem 2</li>
  <li class="item">Ítem 3</li>
</ul>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const listaPadre = document.querySelector('#lista-padre');

listaPadre.addEventListener('click', function(event) {
  // 'this' y 'event.currentTarget' se refieren a #lista-padre
  // 'event.target' se refiere al <li> específico donde se hizo clic

  // Comprobamos si el elemento clickeado tiene la clase 'item'
  if (event.target && event.target.matches('.item')) {
    console.log("Se hizo clic en el ítem:", event.target.textContent);
  }
});`}
			/>
			<p className='mt-4'>
				El método <code>.matches('selectorCSS')</code> es perfecto para esto.
				Devuelve <code>true</code> si el elemento coincide con el selector, y{" "}
				<code>false</code> si no.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Beneficios de la Delegación de Eventos
			</h3>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Eficiencia:</strong> Usamos un solo escuchador de eventos en
					lugar de potencialmente cientos. Esto ahorra memoria y mejora el
					rendimiento.
				</li>
				<li>
					<strong>Manejo de Elementos Dinámicos:</strong> Si más tarde añadimos
					un nuevo <code>&lt;li&gt;</code> a la lista, el código seguirá
					funcionando para él sin necesidad de hacer nada más, porque el
					listener está en el padre, que siempre ha estado ahí.
				</li>
				<li>
					<strong>Simplicidad:</strong> El código a menudo es más limpio y fácil
					de mantener, ya que no tenemos que preocuparnos por añadir y quitar
					listeners a medida que los elementos cambian.
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Lista de Tareas con Eliminación Delegada
			</h3>
			<p className='mb-4'>
				Vamos a mejorar la lista de tareas que hicimos en la lección 30. La
				funcionalidad de añadir tareas sigue igual, pero ahora implementaremos
				la eliminación de ítems usando el patrón de delegación de eventos.
			</p>
			<p>1. Empieza con el HTML de la lección 30.</p>
			<p>
				2. Modifica el JavaScript que añade tareas. Cuando crees un nuevo{" "}
				<code>&lt;li&gt;</code>, también crea un botón de "Eliminar" y añádelo
				dentro del <code>&lt;li&gt;</code>.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Dentro de la función para agregar tarea...
const nuevoLi = document.createElement('li');
nuevoLi.textContent = textoTarea + ' '; // Añadimos un espacio

const botonEliminar = document.createElement('button');
botonEliminar.textContent = 'Eliminar';
botonEliminar.classList.add('btn-eliminar'); // Muy importante para la delegación

nuevoLi.append(botonEliminar);
lista.append(nuevoLi);`}
			/>
			<p className='mt-4'>
				3. Ahora, la parte clave. Añade <strong>un solo</strong> escuchador de
				eventos de clic a la lista <code>&lt;ul&gt;</code> (
				<code>#lista-tareas</code>).
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Dentro de la función callback, comprueba si el elemento clickeado (
					<code>event.target</code>) tiene la clase <code>.btn-eliminar</code>.
				</li>
				<li>
					Si la tiene, significa que se ha hecho clic en un botón de eliminar.
				</li>
				<li>
					El objetivo es eliminar el <code>&lt;li&gt;</code> padre de ese botón.
					Usa <code>event.target.parentElement</code> para obtener el{" "}
					<code>&lt;li&gt;</code> y luego llama al método <code>.remove()</code>{" "}
					en él.
				</li>
			</ol>
			<p>
				Prueba tu aplicación: añade varias tareas y luego elimínalas haciendo
				clic en sus respectivos botones. Verás que funciona perfectamente,
				incluso para las tareas nuevas, gracias a tener un solo listener
				inteligente en el contenedor padre.
			</p>
		</section>
	</div>
);

export default Lecture34Es;
