import CodeBlock from "@/components/ui/code-block";

const Lecture24Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Introducción a la Siguiente Generación de Funciones
			</h3>
			<p className='mb-4'>
				En la lección anterior, establecimos las dos formas principales de crear
				funciones: declaraciones y expresiones. Hoy, vamos a explorar una
				sintaxis más moderna y concisa introducida en ES6: las{" "}
				<strong>Arrow Functions (Funciones de Flecha)</strong>.
			</p>
			<p className='mb-4'>
				Además, nos sumergiremos en uno de los conceptos más importantes y
				poderosos de JavaScript: los <strong>Callbacks</strong>. Entender los
				callbacks es fundamental, ya que son la base de la programación
				asíncrona, el manejo de eventos y mucho más.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Arrow Functions (`=&gt;`): Sintaxis Concisa y Moderna
			</h3>
			<p className='mb-4'>
				Las funciones de flecha nos ofrecen una forma más corta de escribir
				expresiones de función. Comparemos la sintaxis:
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Expresión de función clásica
const sumar_clasica = function(a, b) {
  return a + b;
};

// Función de flecha
const sumar_flecha = (a, b) => {
  return a + b;
};`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Reglas de Sintaxis y Atajos
			</h4>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Retorno implícito:</strong> Si la función solo tiene una línea
					y esa línea es un <code>return</code>, podemos omitir las llaves{" "}
					<code>{"{ }"}</code> y la palabra clave <code>return</code>.
				</li>
				<li>
					<strong>Un solo parámetro:</strong> Si la función solo tiene un
					parámetro, podemos omitir los paréntesis <code>()</code> alrededor de
					él.
				</li>
				<li>
					<strong>Sin parámetros:</strong> Si no hay parámetros, debemos usar un
					par de paréntesis vacíos <code>()</code>.
				</li>
			</ul>

			<CodeBlock
				language='javascript'
				codeString={`// Retorno implícito
const sumar = (a, b) => a + b;

// Un solo parámetro
const cuadrado = numero => numero * numero;

// Sin parámetros
const saludar = () => "¡Hola Mundo!";

console.log(sumar(5, 3));       // Muestra 8
console.log(cuadrado(4));      // Muestra 16
console.log(saludar());        // Muestra "¡Hola Mundo!"`}
			/>
			<p className='mt-4'>
				Además de ser más cortas, las funciones de flecha tienen una diferencia
				importante en cómo manejan el contexto de <code>this</code>, algo que
				exploraremos en una lección futura pero que las hace extremadamente
				útiles en muchas situaciones.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Callbacks: Funciones como Argumentos
			</h3>
			<p className='mb-4'>
				Recordemos que en JavaScript las funciones son "ciudadanos de primera
				clase". Esto significa que una función puede ser pasada como argumento a
				otra función.
			</p>
			<p className='mb-4'>
				Un <strong>callback</strong> es precisamente eso: una función que se
				pasa a otra función como argumento, para que sea "llamada de vuelta"
				(ejecutada) más tarde.
			</p>
			<p className='mb-4'>
				<strong>Analogía:</strong> Imagina que pides una pizza a domicilio. Le
				das al repartidor tu dirección (el "callback") y le dices: "cuando la
				pizza esté lista, llévala a esta dirección". No te quedas esperando en
				la puerta. Sigues con tu vida, y el repartidor "ejecuta la entrega"
				(llama a tu callback) cuando la tarea principal (hacer la pizza) ha
				terminado. Esto es la esencia de la programación asíncrona, donde los
				callbacks son cruciales.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// 'saludar' es una función normal
function saludar(nombre) {
  console.log(\`Hola, \${nombre}\`);
}

// 'procesarEntrada' es una función que acepta un callback
function procesarEntrada(callback) {
  const nombre = "Ana";
  callback(nombre); // Ejecutamos el callback que nos pasaron
}

// Pasamos la función 'saludar' como un callback a 'procesarEntrada'
procesarEntrada(saludar); // Muestra "Hola, Ana"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Arrow Functions y Callbacks: Una Combinación Poderosa
			</h3>
			<p className='mb-4'>
				La sintaxis concisa de las funciones de flecha las hace perfectas para
				ser usadas como callbacks, especialmente con los métodos de array que
				veremos a continuación.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Métodos de Array Comunes
			</h4>
			<p className='mb-4'>
				Muchos de los métodos más útiles para trabajar con arrays en JavaScript
				utilizan callbacks para definir la operación a realizar en cada
				elemento.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`.forEach()`:</strong> Ejecuta una función (callback) una vez
					por cada elemento del array. Es un reemplazo moderno del bucle{" "}
					<code>for</code> para iterar sobre arrays.
					<CodeBlock
						language='javascript'
						codeString={`const nombres = ["Carlos", "Diana", "Eduardo"];

nombres.forEach(nombre => {
  console.log(\`Bienvenido, \${nombre}\`);
});`}
					/>
				</li>
				<li>
					<strong>`.map()`:</strong> Crea un <strong>nuevo array</strong> con
					los resultados de llamar a una función (callback) para cada elemento
					del array original. Es ideal para transformar datos.
					<CodeBlock
						language='javascript'
						codeString={`const numeros = [1, 2, 3, 4];
const dobles = numeros.map(numero => numero * 2);

console.log(dobles); // Muestra [2, 4, 6, 8]`}
					/>
				</li>
				<li>
					<strong>`.filter()`:</strong> Crea un <strong>nuevo array</strong> con
					todos los elementos que pasen una prueba (un callback que devuelve{" "}
					<code>true</code> o <code>false</code>).
					<CodeBlock
						language='javascript'
						codeString={`const edades = [15, 22, 18, 30, 12];
const mayoresDeEdad = edades.filter(edad => edad >= 18);

console.log(mayoresDeEdad); // Muestra [22, 18, 30]`}
					/>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Procesador de Datos de Estudiantes
			</h3>
			<p className='mb-4'>
				Vamos a aplicar estos conceptos para manipular una lista de estudiantes.
				Copia el siguiente array al principio de tu archivo <code>main.js</code>
				:
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const estudiantes = [
  { nombre: "Ana", nota: 90, curso: "Matemáticas" },
  { nombre: "Luis", nota: 65, curso: "Historia" },
  { nombre: "Juan", nota: 85, curso: "Matemáticas" },
  { nombre: "Elena", nota: 75, curso: "Ciencias" },
  { nombre: "Carlos", nota: 50, curso: "Matemáticas" }
];`}
			/>
			<p className='mt-4'>Ahora, realiza las siguientes tareas:</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Filtrar Aprobados:</strong> Usa el método `.filter()` con una
					arrow function para crear un nuevo array llamado{" "}
					<code>estudiantesAprobados</code> que contenga solo a los estudiantes
					con una <code>nota</code> de 70 o más. Imprime el resultado en la
					consola.
				</li>
				<li>
					<strong>Mapear Nombres:</strong> Usa el método `.map()` con una arrow
					function para crear un nuevo array llamado{" "}
					<code>nombresEstudiantes</code> que contenga solo los nombres de todos
					los estudiantes del array original. Imprime el resultado en la
					consola.
				</li>
				<li>
					<strong>Mensaje a los Aprobados:</strong> Usa el método `.forEach()`
					sobre el array <code>estudiantesAprobados</code> que creaste en el
					primer paso. Para cada estudiante aprobado, imprime un mensaje en la
					consola que diga: "¡Felicidades, [nombre]! Has aprobado [curso]".
				</li>
				<li>
					<strong>Reto (Opcional):</strong> Usa una combinación de `.filter()` y
					`.map()` en una sola línea (encadenamiento de métodos) para crear un
					array con los nombres de los estudiantes de "Matemáticas" que hayan
					aprobado.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture24Es;
