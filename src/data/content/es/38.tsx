import CodeBlock from "@/components/ui/code-block";

const Lecture38Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Recordando Datos entre Visitas
			</h3>
			<p className='mb-4'>
				Hasta ahora, cada vez que recargamos la página, toda la información de
				nuestro JavaScript se pierde. Las variables se reinician. Pero, ¿y si
				quisiéramos recordar las preferencias de un usuario, el contenido de su
				carrito de compras o si ya ha iniciado sesión? Para esto, necesitamos el{" "}
				<strong>almacenamiento del lado del cliente</strong>.
			</p>
			<p>
				Hoy aprenderemos a guardar datos directamente en el navegador del
				usuario y a trabajar con JSON, el formato de datos estándar para la web.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. JSON: El Idioma Universal de los Datos
			</h3>
			<p className='mb-4'>
				<strong>JSON (JavaScript Object Notation)</strong> es un formato de
				texto ligero para el intercambio de datos. Aunque se deriva de la
				sintaxis de objetos de JavaScript, es un estándar independiente del
				lenguaje. Es la forma más común en que las APIs devuelven información.
			</p>
			<p className='mb-4'>
				Se ve casi idéntico a un objeto de JavaScript, pero con una regla clave:{" "}
				<strong>las claves también deben estar entre comillas dobles</strong>.
			</p>
			<CodeBlock
				language='json'
				codeString={`{
  "nombre": "Juan Pérez",
  "edad": 30,
  "esActivo": true,
  "cursos": ["HTML", "CSS", "JavaScript"]
}`}
			/>
			<h4 className='text-xl font-semibold mt-6 mb-2'>Conversión: JS ↔ JSON</h4>
			<p className='mb-4'>
				JavaScript nos da dos métodos esenciales para trabajar con JSON:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`JSON.stringify(objetoJS)`</strong>: Convierte un objeto o
					valor de JavaScript en una <strong>cadena de texto JSON</strong>. Esto
					es necesario para enviar datos a un servidor o guardarlos en
					`localStorage`.
				</li>
				<li>
					<strong>`JSON.parse(cadenaJSON)`</strong>: Hace lo contrario.
					Convierte una cadena de texto JSON en un{" "}
					<strong>objeto o valor de JavaScript</strong>.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`const usuario = { nombre: "Elena", id: 123 };

// Convertir a cadena JSON
const usuarioJSON = JSON.stringify(usuario);
console.log(usuarioJSON); // Muestra '{"nombre":"Elena","id":123}'

// Convertir de vuelta a objeto JS
const usuarioObjeto = JSON.parse(usuarioJSON);
console.log(usuarioObjeto.nombre); // Muestra "Elena"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Almacenamiento Persistente: `localStorage`
			</h3>
			<p className='mb-4'>
				El objeto <code>localStorage</code> es una API del navegador que nos
				permite guardar datos de manera persistente (incluso si se cierra el
				navegador) para un dominio específico. Los datos no tienen fecha de
				caducidad.
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					¡Importante!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					<code>localStorage</code> solo puede almacenar{" "}
					<strong>cadenas de texto</strong>. Por eso es crucial usar{" "}
					<code>JSON.stringify()</code> antes de guardar objetos y{" "}
					<code>JSON.parse()</code> después de leerlos.
				</p>
			</div>
			<h4 className='text-xl font-semibold mt-6 mb-2'>Métodos Principales</h4>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`localStorage.setItem('clave', 'valor')`</strong>: Guarda un
					par clave-valor.
				</li>
				<li>
					<strong>`localStorage.getItem('clave')`</strong>: Recupera el valor
					asociado a una clave. Devuelve <code>null</code> si la clave no
					existe.
				</li>
				<li>
					<strong>`localStorage.removeItem('clave')`</strong>: Elimina un ítem
					específico.
				</li>
				<li>
					<strong>`localStorage.clear()`</strong>: Elimina todos los datos
					guardados para ese dominio.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`const preferencias = { tema: "oscuro", notificaciones: true };

// Guardar en localStorage
localStorage.setItem('usuarioPreferencias', JSON.stringify(preferencias));

// Leer de localStorage en otra visita
const prefsGuardadasJSON = localStorage.getItem('usuarioPreferencias');
const prefsGuardadas = JSON.parse(prefsGuardadasJSON);

if (prefsGuardadas) {
  console.log(prefsGuardadas.tema); // Muestra "oscuro"
}

// Eliminar el ítem
// localStorage.removeItem('usuarioPreferencias');`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Guardando las Preferencias del Usuario
			</h3>
			<p className='mb-4'>
				Vamos a crear un pequeño formulario de configuración que guarde las
				preferencias del usuario en <code>localStorage</code> y las cargue cada
				vez que se visita la página.
			</p>
			<p>1. Crea un archivo HTML con un formulario de configuración:</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="es">
<head><title>Configuración</title></head>
<body>
  <h1>Configuración</h1>
  <form id="config-form">
    <label for="username">Nombre de Usuario:</label>
    <input type="text" id="username" name="username">
    <br><br>
    <label for="theme">Tema:</label>
    <select id="theme" name="theme">
      <option value="claro">Claro</option>
      <option value="oscuro">Oscuro</option>
    </select>
    <br><br>
    <button type="submit">Guardar</button>
  </form>
  <script src="main.js"></script>
</body>
</html>`}
			/>
			<p className='mt-4'>
				2. En tu archivo JavaScript, divide la lógica en dos partes:
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Guardar al Enviar:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Añade un listener al evento <code>submit</code> del formulario.
						</li>
						<li>
							Dentro del listener, previene el comportamiento por defecto.
						</li>
						<li>
							Crea un objeto con los valores del nombre de usuario y el tema
							seleccionado.
						</li>
						<li>
							Convierte este objeto a una cadena JSON usando{" "}
							<code>JSON.stringify()</code>.
						</li>
						<li>
							Guarda la cadena JSON en <code>localStorage</code> con la clave{" "}
							<code>'configUsuario'</code>.
						</li>
						<li>
							Muestra un <code>alert</code> que diga "Configuración guardada".
						</li>
					</ul>
				</li>
				<li>
					<strong>Cargar al Iniciar:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Fuera del listener (al principio del script), intenta obtener el
							ítem <code>'configUsuario'</code> de <code>localStorage</code>.
						</li>
						<li>
							Comprueba si existe. Si no es <code>null</code>:
						</li>
						<li>
							Usa <code>JSON.parse()</code> para convertir la cadena de vuelta a
							un objeto.
						</li>
						<li>
							Usa los valores de este objeto para rellenar los campos del
							formulario. De esta forma, la próxima vez que el usuario visite la
							página, verá sus preferencias ya seleccionadas.
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture38Es;
