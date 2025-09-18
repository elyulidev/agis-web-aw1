import CodeBlock from "@/components/ui/code-block";

const Lecture27Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. El Puente entre JavaScript y HTML: ¿Qué es el DOM?
			</h3>
			<p className='mb-4'>
				¡Bienvenido al Módulo 7! Aquí es donde todo lo que hemos aprendido de
				JavaScript cobra vida. Hasta ahora, nuestro HTML ha sido estático y
				nuestro JavaScript ha vivido en su propio mundo, la consola. El{" "}
				<strong>Document Object Model (DOM)</strong> es el puente que los
				conecta.
			</p>
			<p className='mb-4'>
				Cuando un navegador carga un documento HTML, crea un "modelo de objeto"
				de esa página en la memoria. Este modelo es el DOM. El DOM representa el
				documento como un árbol de nodos y objetos, donde cada etiqueta HTML es
				un objeto (o nodo) en el árbol.
			</p>
			<p className='mb-4'>
				<strong>Analogía:</strong> Piensa en tu documento HTML como un árbol
				genealógico. La etiqueta <code>&lt;html&gt;</code> es el ancestro
				principal. Tiene dos hijos directos: <code>&lt;head&gt;</code> y{" "}
				<code>&lt;body&gt;</code>. A su vez, <code>&lt;body&gt;</code> puede
				tener hijos como <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code> y{" "}
				<code>&lt;div&gt;</code>, y así sucesivamente. JavaScript, a través del
				DOM, puede interactuar con cada miembro de esta familia: seleccionarlos,
				cambiar sus propiedades, añadir nuevos miembros o eliminarlos.
			</p>
			<div className='my-6 p-4 border rounded-lg bg-gray-50 dark:bg-gray-800/50 text-center'>
				<h4 className='font-semibold mb-2'>Representación del Árbol DOM</h4>
				<pre className='font-mono text-sm leading-relaxed text-left p-4 bg-white dark:bg-gray-900 rounded-md'>
					{`
  HTML
  ├── HEAD
  │   ├── TITLE
  │   └── ...
  └── BODY
      ├── H1 (con texto "Título Principal")
      └── P (con un A (enlace) dentro)
          └── A (con texto "Haz clic aquí")
`}
				</pre>
			</div>
			<p>
				El objeto global que nos da acceso a todo el DOM es el objeto{" "}
				<code>document</code>.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Seleccionando Elementos (Nodos)
			</h3>
			<p className='mb-4'>
				Para poder manipular un elemento, primero debemos seleccionarlo y
				guardarlo en una variable. JavaScript nos ofrece varios métodos para
				hacerlo.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Métodos Clásicos</h4>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`getElementById('idDelElemento')`</strong>: El más rápido y
					específico. Selecciona el único elemento que tenga el <code>id</code>{" "}
					proporcionado.
					<CodeBlock
						language='javascript'
						codeString={`// HTML: <h1 id="titulo-principal">Mi Página</h1>
const titulo = document.getElementById('titulo-principal');`}
					/>
				</li>
				<li>
					<strong>`getElementsByClassName('nombreDeLaClase')`</strong>:
					Selecciona <strong>todos</strong> los elementos que tienen una clase
					específica. Devuelve una <code>HTMLCollection</code>, que es similar a
					un array pero no exactamente igual.
					<CodeBlock
						language='javascript'
						codeString={`// HTML: <p class="parrafo">...</p> <p class="parrafo">...</p>
const parrafos = document.getElementsByClassName('parrafo');`}
					/>
				</li>
				<li>
					<strong>`getElementsByTagName('nombreDeLaEtiqueta')`</strong>:
					Selecciona <strong>todos</strong> los elementos de un tipo de etiqueta
					específico (ej. todos los <code>&lt;li&gt;</code>). También devuelve
					una <code>HTMLCollection</code>.
					<CodeBlock
						language='javascript'
						codeString={`// HTML: <li>Item 1</li> <li>Item 2</li>
const itemsLista = document.getElementsByTagName('li');`}
					/>
				</li>
			</ul>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Métodos Modernos y Recomendados
			</h4>
			<p className='mb-4'>
				Estos métodos son más potentes y flexibles porque usan la misma sintaxis
				de selectores que usamos en CSS.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`querySelector('selectorCSS')`</strong>: Devuelve el{" "}
					<strong>primer</strong> elemento del documento que coincida con el
					selector CSS especificado. Si no encuentra nada, devuelve{" "}
					<code>null</code>. ¡Puedes usar cualquier selector CSS!
					<CodeBlock
						language='javascript'
						codeString={`// Seleccionar por ID
const titulo = document.querySelector('#titulo-principal');

// Seleccionar el primer elemento con la clase .parrafo
const primerParrafo = document.querySelector('.parrafo');

// Seleccionar el primer enlace dentro de un div con id "menu"
const primerEnlaceMenu = document.querySelector('#menu a');`}
					/>
				</li>
				<li>
					<strong>`querySelectorAll('selectorCSS')`</strong>: Devuelve{" "}
					<strong>todos</strong> los elementos que coincidan con el selector
					CSS. Devuelve una <code>NodeList</code>.
					<CodeBlock
						language='javascript'
						codeString={`// Seleccionar todos los párrafos con la clase .destacado
const todosDestacados = document.querySelectorAll('.destacado');

// Seleccionar todos los li dentro de un ul con id "lista-compras"
const todosItems = document.querySelectorAll('#lista-compras li');`}
					/>
				</li>
			</ul>

			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					HTMLCollection vs. NodeList
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Ambas son colecciones de elementos parecidas a un array, pero la
					principal diferencia es que una <code>HTMLCollection</code> es "viva"
					(se actualiza automáticamente si añades o quitas elementos del DOM),
					mientras que una <code>NodeList</code> de{" "}
					<code>querySelectorAll</code> es "estática". En la mayoría de los
					casos, esta diferencia no es crucial. Para recorrer ambas, puedes usar
					bucles <code>for</code> o, en el caso de <code>NodeList</code>,
					métodos de array como <code>forEach</code>.
				</p>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>📝 Tarea: Selecciona Todo</h3>
			<p className='mb-4'>
				Para esta tarea, primero crea un nuevo archivo HTML llamado{" "}
				<code>selector_practice.html</code> y pega el siguiente código en él.
				Luego, crea un archivo <code>selector_practice.js</code> y enlázalo al
				final del <code>&lt;body&gt;</code>.
			</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Práctica de Selectores</title>
</head>
<body>
    <header id="header-principal">
        <h1 id="titulo">Título de la Página</h1>
        <nav>
            <a href="#" class="nav-link">Inicio</a>
            <a href="#" class="nav-link">Servicios</a>
            <a href="#" class="nav-link">Contacto</a>
        </nav>
    </header>

    <main>
        <section class="seccion-contenido">
            <h2>Noticias</h2>
            <p class="parrafo">Primera noticia importante.</p>
        </section>
        <section class="seccion-contenido">
            <h2>Eventos</h2>
            <p>Próximo evento el viernes.</p>
        </section>
    </main>

    <footer id="footer-principal">
        <p>Copyright 2024</p>
        <ul>
            <li><a href="#">Privacidad</a></li>
            <li><a href="#">Términos</a></li>
        </ul>
    </footer>

    <script src="selector_practice.js"></script>
</body>
</html>`}
			/>
			<p className='mt-4'>
				Ahora, en tu archivo <code>selector_practice.js</code>, escribe el
				código para realizar las siguientes selecciones y muestra cada una en la
				consola usando <code>console.log()</code> para verificar que has
				seleccionado los elementos correctos.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Selecciona el <code>&lt;h1&gt;</code> por su ID.
				</li>
				<li>
					Selecciona todos los elementos con la clase <code>nav-link</code>.
				</li>
				<li>
					Selecciona todas las etiquetas <code>&lt;section&gt;</code>.
				</li>
				<li>
					Selecciona el <code>footer</code> usando <code>querySelector</code> y
					su ID.
				</li>
				<li>
					Selecciona el primer párrafo que tenga la clase <code>parrafo</code>.
				</li>
				<li>
					Selecciona todos los enlaces (<code>&lt;a&gt;</code>) que estén dentro
					del <code>footer</code>.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture27Es;
