import CodeBlock from "@/components/ui/code-block";

const Lecture28Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Modificando el Mundo Visible
			</h3>
			<p className='mb-4'>
				En la lección anterior, aprendimos a "encontrar" y "agarrar" elementos
				del DOM. Ahora, vamos a dar el siguiente paso lógico: cambiar lo que
				esos elementos contienen. JavaScript nos permite modificar dinámicamente
				el texto y el HTML dentro de cualquier elemento, lo que abre un mundo de
				posibilidades para la interactividad.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. `textContent`: La Forma Segura de Manejar Texto
			</h3>
			<p className='mb-4'>
				La propiedad <code>textContent</code> nos permite obtener o establecer
				el contenido de texto de un nodo y todos sus descendientes. Es como
				pedir "dame todo el texto que hay dentro, sin importar las etiquetas
				HTML".
			</p>
			<p className='mb-4'>
				Cuando estableces <code>textContent</code>, cualquier HTML que incluyas
				será tratado como texto literal. No se interpretará como etiquetas.
			</p>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					La Mejor Opción para la Seguridad:
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Usar <code>textContent</code> para insertar texto proporcionado por el
					usuario es la práctica más segura. Previene un tipo de ataque de
					seguridad llamado Cross-Site Scripting (XSS), donde un atacante podría
					inyectar scripts maliciosos en tu página.
				</p>
			</div>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML Original -->
<h1 id="saludo">Hola <strong>Mundo</strong></h1>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const saludo = document.querySelector('#saludo');

// Obtener el textContent
console.log(saludo.textContent); // Muestra "Hola Mundo" (ignora la etiqueta <strong>)

// Establecer el textContent
saludo.textContent = "Bienvenido, Visitante!";
// Ahora el H1 se verá así: <h1>Bienvenido, Visitante!</h1>

// ¿Qué pasa si intentamos poner HTML?
saludo.textContent = "<i>Hola de nuevo</i>";
// El H1 mostrará el texto literal: <h1>&lt;i&gt;Hola de nuevo&lt;/i&gt;</h1>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. `innerHTML`: El Poder (y el Peligro) de Manejar HTML
			</h3>
			<p className='mb-4'>
				La propiedad <code>innerHTML</code> es similar, pero con una diferencia
				crucial: obtiene o establece el contenido como una cadena de{" "}
				<strong>código HTML</strong>.
			</p>
			<p className='mb-4'>
				Cuando estableces <code>innerHTML</code>, el navegador interpreta la
				cadena y la convierte en elementos DOM reales. Esto te da el poder de
				crear y modificar la estructura HTML dinámicamente.
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					¡Advertencia de Seguridad!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					Nunca uses <code>innerHTML</code> para insertar contenido que provenga
					de una fuente no confiable (como la entrada de un usuario) sin
					"sanitizarlo" primero. Un usuario malintencionado podría escribir{" "}
					<code>&lt;script&gt;alert('hackeado')&lt;/script&gt;</code>, y tu
					página ejecutaría ese script. Usa <code>innerHTML</code> solo con
					contenido que tú controlas o que es completamente seguro.
				</p>
			</div>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML Original -->
<div id="contenedor">
  <p>Contenido inicial.</p>
</div>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const contenedor = document.querySelector('#contenedor');

// Obtener el innerHTML
console.log(contenedor.innerHTML); // Muestra "<p>Contenido inicial.</p>"

// Establecer el innerHTML para reemplazar el contenido
contenedor.innerHTML = "<h2>Nuevo Título</h2><p>Este es un nuevo párrafo.</p>";

// Añadir contenido al final sin borrar lo anterior
contenedor.innerHTML += "<p>Otro párrafo más añadido al final.</p>";
// El operador += es un atajo para contenedor.innerHTML = contenedor.innerHTML + "..."
`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. `innerText`: Una Alternativa Consciente del Estilo
			</h3>
			<p className='mb-4'>
				Existe una tercera propiedad, <code>innerText</code>. Es similar a{" "}
				<code>textContent</code>, pero con una diferencia:{" "}
				<code>innerText</code> tiene en cuenta el estilo CSS y no devolverá el
				texto de elementos que estén ocultos (por ejemplo, con{" "}
				<code>display: none;</code>).
			</p>
			<p className='mb-4'>
				Aunque esto puede ser útil en algunos casos, su rendimiento es peor que
				el de <code>textContent</code> porque el navegador necesita calcular el
				layout de la página. Por lo general,{" "}
				<strong>
					se prefiere `textContent` por su simplicidad y velocidad
				</strong>
				.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Perfil de Usuario Dinámico
			</h3>
			<p className='mb-4'>
				Vamos a crear una tarjeta de perfil y a rellenar su contenido usando
				JavaScript, para simular la carga de datos de un usuario.
			</p>
			<p>1. Crea un archivo HTML y pega la siguiente estructura:</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="es">
<head>
  <title>Perfil de Usuario</title>
</head>
<body>
  <div id="perfil-card">
    <h1 id="nombre-usuario"></h1>
    <p>Email: <span id="email-usuario"></span></p>
    <div id="bio-usuario"></div>
  </div>
  <script src="main.js"></script>
</body>
</html>`}
			/>
			<p className='mt-4'>
				2. En tu archivo <code>main.js</code>, crea un objeto de JavaScript con
				tus datos:
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const usuario = {
  nombre: "Ana García",
  email: "ana.garcia@email.com",
  biografia: "Desarrolladora web con pasión por el <strong>diseño UX/UI</strong>."
};`}
			/>
			<p className='mt-4'>
				3. Ahora, usa JavaScript para rellenar la tarjeta de perfil:
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Selecciona el <code>&lt;h1&gt;</code> con el id{" "}
					<code>nombre-usuario</code> y establece su{" "}
					<strong>
						<code>textContent</code>
					</strong>{" "}
					con el nombre del objeto usuario.
				</li>
				<li>
					Selecciona el <code>&lt;span&gt;</code> con el id{" "}
					<code>email-usuario</code> y establece su{" "}
					<strong>
						<code>textContent</code>
					</strong>{" "}
					con el email del objeto usuario.
				</li>
				<li>
					Selecciona el <code>&lt;div&gt;</code> con el id{" "}
					<code>bio-usuario</code>. Como la biografía contiene etiquetas HTML
					que queremos que se interpreten, establece su{" "}
					<strong>
						<code>innerHTML</code>
					</strong>{" "}
					con la biografía del objeto usuario.
				</li>
				<li>
					Abre el archivo HTML en tu navegador y verifica que la tarjeta de
					perfil se muestra con toda la información y que la parte de "diseño
					UX/UI" aparece en negrita.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture28Es;
