import CodeBlock from "@/components/ui/code-block";

const Lecture51Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. ¡Felicidades, has llegado al final!
			</h3>
			<p className='mb-4'>
				Este es el final de nuestro viaje estructurado, pero el comienzo de tu
				carrera como desarrollador web. Has recorrido un largo camino: desde
				escribir tu primera etiqueta HTML hasta construir aplicaciones
				interactivas y persistentes con JavaScript. ¡Es un logro inmenso!
			</p>
			<p className='mb-4'>
				Una de las cosas más importantes que debes saber es que JavaScript es un
				lenguaje vivo. Es estandarizado por una organización llamada ECMA a
				través de una especificación llamada <strong>ECMAScript</strong>. Cada
				año, sale una nueva versión con mejoras. La actualización más
				revolucionaria fue <strong>ECMAScript 2015</strong>, comúnmente conocida
				como <strong>ES6</strong>, que modernizó el lenguaje de manera
				fundamental.
			</p>
			<p>
				En esta última lección, consolidaremos algunas características de ES6+
				que ya has visto y te presentaremos otras que son cruciales en el
				desarrollo moderno, además de darte un mapa para tus próximos pasos.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Un Vistazo a Características Clave de ES6+
			</h3>
			<p className='mb-4'>
				Muchas de las "buenas prácticas" que hemos usado se basan en ES6.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`let` y `const`</strong>: Ya sabes por qué son superiores a
					`var` gracias al alcance de bloque.
				</li>
				<li>
					<strong>Funciones de Flecha (`=&gt;`)</strong>: Sintaxis más concisa y
					un manejo predecible de `this`.
				</li>
				<li>
					<strong>
						Template Literals (<code>` `</code>)
					</strong>
					: Permiten incrustar expresiones y variables en strings de una manera
					mucho más limpia.
				</li>
			</ul>
			<p>Ahora, veamos algunas herramientas nuevas y potentes:</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Desestructuración (Destructuring)
			</h4>
			<p className='mb-4'>
				Una sintaxis que permite "desempaquetar" valores de arrays u objetos en
				variables distintas.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const usuario = { nombre: 'Carlos', edad: 30 };
// Antes:
// const nombre = usuario.nombre;
// const edad = usuario.edad;

// Con desestructuración:
const { nombre, edad } = usuario;
console.log(nombre); // 'Carlos'

const numeros = [10, 20, 30];
// Antes:
// const primero = numeros[0];
// Con desestructuración:
const [primero, segundo] = numeros;
console.log(primero); // 10`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Operadores Spread y Rest (`...`)
			</h4>
			<p className='mb-4'>
				El mismo operador de tres puntos tiene dos usos opuestos dependiendo del
				contexto.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Spread (Expandir):</strong> Expande los elementos de un array
					u objeto. Es perfecto para hacer copias o combinar.
				</li>
				<li>
					<strong>Rest (Agrupar):</strong> Agrupa múltiples elementos o
					argumentos en un solo array. Es muy útil en funciones.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`// Spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Rest
function sumar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}
console.log(sumar(1, 2, 3, 4)); // 10`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Parámetros por Defecto
			</h4>
			<p className='mb-4'>
				Podemos asignar valores por defecto a los parámetros de una función, que
				se usarán si no se proporciona un argumento.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`function saludar(nombre = 'Invitado') {
  console.log(\`Hola, \${nombre}\`);
}
saludar('Ana'); // Hola, Ana
saludar();      // Hola, Invitado`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. El Ecosistema Moderno: ¿Qué Sigue Ahora?
			</h3>
			<p className='mb-4'>
				Has construido una base sólida de JavaScript "vanilla" (puro). Ahora,
				estás listo para explorar el ecosistema que se construye sobre esta
				base.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Frameworks y Librerías Frontend
			</h4>
			<p className='mb-4'>
				Herramientas como <strong>React</strong>, <strong>Angular</strong> y{" "}
				<strong>Vue</strong> son el estándar de la industria para construir
				interfaces de usuario complejas. No reemplazan a JavaScript; lo utilizan
				para crear "componentes" reutilizables (como un botón o una tarjeta de
				producto) y gestionar el estado de la aplicación de manera eficiente.{" "}
				<strong>React</strong> es actualmente la librería más popular y un
				excelente siguiente paso en tu aprendizaje.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				JavaScript en el Backend: Node.js
			</h4>
			<p className='mb-4'>
				JavaScript no vive solo en el navegador. <strong>Node.js</strong> es un
				entorno de ejecución que te permite correr JavaScript en un servidor.
				Con Node.js, puedes construir APIs, gestionar bases de datos y crear
				aplicaciones web completas usando un solo lenguaje.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Supersets: TypeScript</h4>
			<p className='mb-4'>
				A medida que los proyectos crecen, mantener el código se vuelve un
				desafío. <strong>TypeScript</strong> es un "superset" de JavaScript
				(creado por Microsoft) que añade un sistema de tipos estáticos. Esto te
				permite definir qué tipo de dato es una variable (string, number, etc.),
				ayudando a prevenir errores antes de que ocurran y mejorando
				drásticamente el autocompletado y la mantenibilidad del código.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Módulos de ES6 (`import`/`export`)
			</h4>
			<p className='mb-4'>
				En aplicaciones reales, no escribimos todo nuestro código en un solo
				archivo. Lo dividimos en archivos más pequeños y manejables llamados{" "}
				<strong>módulos</strong>. ES6 introdujo una sintaxis estándar para esto:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					Usas <code>export</code> para hacer que una función, variable o clase
					de un archivo esté disponible para otros.
				</li>
				<li>
					Usas <code>import</code> para traer esas funcionalidades a otro
					archivo que las necesite.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`// En helpers.js
export const sumar = (a, b) => a + b;

// En main.js
import { sumar } from './helpers.js';
console.log(sumar(5, 5)); // 10`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea Final: Consolidación y Exploración
			</h3>
			<p className='mb-4'>
				Tu última tarea es doble: aplicar algunos de los conceptos nuevos y
				empezar a mirar hacia el futuro.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					{/* FIX: Escaped curly braces in the <code> tag to prevent JSX parsing errors. The code string was being interpreted as a JavaScript object. */}
					<strong>Refactoriza con Desestructuración:</strong> Vuelve a tu
					proyecto del carrito de compras. Encuentra la función donde renderizas
					los ítems del carrito. En lugar de acceder a `item.nombre`,
					`item.precio`, etc., usa desestructuración al principio del bucle:{" "}
					<code>
						const {"{"} nombre, precio, cantidad {"}"} = item;
					</code>
					.
				</li>
				<li>
					<strong>Función con Operador Rest:</strong> Crea una pequeña función
					llamada `calcularPromedio` que acepte cualquier número de argumentos
					usando el operador rest (`...`). La función debe calcular y devolver
					el promedio de todos los números pasados. Pruébala con diferentes
					cantidades de argumentos.
				</li>
				<li>
					<strong>Investiga sobre React:</strong> Dedica 15-20 minutos a
					investigar qué es React. Lee la página de inicio de{" "}
					<a
						href='https://react.dev'
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-500 hover:underline'
					>
						react.dev
					</a>
					. En un comentario en tu archivo JS, escribe un párrafo breve con tus
					propias palabras explicando qué es React y para qué crees que sirve.
				</li>
			</ol>
			<p className='mt-6 font-bold text-lg text-center'>
				¡Gracias por tu dedicación en este curso y mucho éxito en tu increíble
				viaje como desarrollador web!
			</p>
		</section>
	</div>
);

export default Lecture51Es;
