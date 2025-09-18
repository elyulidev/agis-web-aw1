import CodeBlock from "@/components/ui/code-block";

const Lecture25Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. El Dónde y Cuándo de las Variables
			</h3>
			<p className='mb-4'>
				¡Bienvenidos a una de las lecciones conceptuales más importantes de
				JavaScript! Hoy vamos a desentrañar dos conceptos que, una vez
				entendidos, aclararán gran parte del "comportamiento mágico" de
				JavaScript: <strong>Scope (Alcance)</strong> y{" "}
				<strong>Hoisting (Elevación)</strong>.
			</p>
			<p className='mb-4'>
				El <strong>Scope</strong> responde a la pregunta: "
				<em>¿Desde dónde puedo acceder a esta variable o función?</em>". Define
				la visibilidad y el ciclo de vida de nuestras variables.
			</p>
			<p>
				El <strong>Hoisting</strong> responde a la pregunta: "
				<em>¿Cómo lee y prepara mi código JavaScript antes de ejecutarlo?</em>".
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Profundizando en el Scope (Alcance)
			</h3>
			<p className='mb-4'>
				En JavaScript, existen principalmente tres tipos de alcance:
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Alcance Global (Global Scope)
			</h4>
			<p className='mb-4'>
				Una variable declarada fuera de cualquier función o bloque{" "}
				<code>{"{...}"}</code> tiene un alcance global. Esto significa que es
				accesible desde cualquier parte de nuestro código.
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					¡Cuidado con el Alcance Global!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					Aunque es útil, abusar de las variables globales es una mala práctica.
					Puede llevar a conflictos de nombres ("name collisions") y a un código
					difícil de depurar, ya que cualquier parte del programa puede
					modificar su valor.
				</p>
			</div>
			<CodeBlock
				language='javascript'
				codeString={`const planeta = "Tierra"; // Alcance Global

function mostrarPlaneta() {
  console.log(planeta); // Accesible dentro de la función
}

mostrarPlaneta(); // Muestra "Tierra"
console.log(planeta); // Accesible fuera de la función también`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Alcance de Función (Function Scope)
			</h4>
			<p className='mb-4'>
				Las variables declaradas con <code>var</code> dentro de una función
				tienen alcance de función. Solo se puede acceder a ellas desde dentro de
				esa función.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`function miFuncion() {
  var secreto = "123"; // Alcance de Función
  console.log(secreto);
}

miFuncion(); // Muestra "123"
// console.log(secreto); // ReferenceError: secreto is not defined`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Alcance de Bloque (Block Scope) - ¡La Clave de `let` y `const`!
			</h4>
			<p className='mb-4'>
				Introducido en ES6, el alcance de bloque es una de las mejoras más
				importantes. Un "bloque" es cualquier código delimitado por llaves{" "}
				<code>{"{...}"}</code> (como en un <code>if</code>, <code>for</code>, o
				simplemente un par de llaves). Las variables declaradas con{" "}
				<code>let</code> y <code>const</code> respetan este alcance.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`if (true) {
  let poder = "Volar";     // Alcance de Bloque
  const debilidad = "Kriptonita"; // Alcance de Bloque
  var color = "Rojo";      // ¡Alcance de Función! (o Global)
}

console.log(color);     // Muestra "Rojo" (var ignora el bloque)
// console.log(poder);  // ReferenceError: poder is not defined
// console.log(debilidad); // ReferenceError: debilidad is not defined`}
			/>
			<p className='mt-4'>
				Esta es la razón principal por la que{" "}
				<strong>siempre debemos preferir `let` y `const` sobre `var`</strong>.
				Nos dan un control mucho más predecible y granular sobre dónde viven
				nuestras variables.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>3. Hoisting (Elevación)</h3>
			<p className='mb-4'>
				JavaScript tiene un comportamiento peculiar: antes de ejecutar el
				código, "escanea" y mueve las declaraciones de variables y funciones a
				la parte superior de su ámbito (global o de función). Esto se llama
				hoisting. Sin embargo, cómo lo hace depende de cómo se declare la
				variable.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Hoisting con `var`</h4>
			<p className='mb-4'>
				Con <code>var</code>, solo la <strong>declaración</strong> es elevada,
				no la <strong>inicialización</strong> (la asignación del valor). Esto
				significa que la variable existe desde el principio de su ámbito, pero
				su valor es <code>undefined</code> hasta que el código llega a la línea
				donde se le asigna el valor.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`console.log(miNombre); // Muestra "undefined", no un error.
var miNombre = "Carlos";
console.log(miNombre); // Muestra "Carlos"

// Lo que JS interpreta en realidad:
// var miNombre;
// console.log(miNombre);
// miNombre = "Carlos";
// console.log(miNombre);`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Hoisting con `let` y `const` (Temporal Dead Zone)
			</h4>
			<p className='mb-4'>
				Las variables <code>let</code> y <code>const</code> también son
				elevadas, pero de una manera diferente. Son elevadas a la parte superior
				de su bloque, pero no se inicializan. Entran en un estado llamado{" "}
				<strong>"Temporal Dead Zone" (TDZ)</strong>. Cualquier intento de
				acceder a la variable dentro de la TDZ (antes de su declaración)
				resultará en un <code>ReferenceError</code>.
			</p>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					La TDZ es tu amiga:
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Este comportamiento es bueno. Nos obliga a declarar nuestras variables
					antes de usarlas, lo que hace que el código sea más limpio, lógico y
					menos propenso a errores que el comportamiento <code>undefined</code>{" "}
					de <code>var</code>.
				</p>
			</div>
			<CodeBlock
				language='javascript'
				codeString={`// console.log(miEdad); // ReferenceError: Cannot access 'miEdad' before initialization
let miEdad = 30;
console.log(miEdad); // Muestra 30`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Hoisting de Funciones</h4>
			<p className='mb-4'>
				{/* FIX: Escaped curly braces to prevent JSX parsing error. */}
				Las <strong>declaraciones de función</strong> (
				<code>function miFuncion() {"{...}"}</code>) son completamente elevadas.
				Tanto el nombre como el cuerpo de la función se mueven a la parte
				superior, por lo que podemos llamarlas antes de que aparezcan en el
				código.
			</p>
			<p>
				{/* FIX: Escaped curly braces to prevent JSX parsing error. */}
				Las <strong>expresiones de función</strong> (
				<code>const miFuncion = function() {"{...}"}</code>) siguen las reglas
				de hoisting de su variable (<code>let</code>, <code>const</code> o{" "}
				<code>var</code>). Si usas <code>const</code>, no podrás llamarla antes
				de su definición debido a la TDZ.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Predice el Resultado
			</h3>
			<p className='mb-4'>
				Analiza los siguientes fragmentos de código. Sin ejecutarlos, intenta
				predecir qué mostrará cada <code>console.log</code> en la consola. ¿Será
				un valor, <code>undefined</code> o un error? Anota tus respuestas y
				luego comprueba tus predicciones en la consola del navegador.
			</p>

			<h4 className='text-xl font-semibold mt-4 mb-2'>Fragmento 1:</h4>
			<CodeBlock
				language='javascript'
				codeString={`var a = 1;
function miFuncion() {
  console.log(a);
  var a = 2;
  console.log(a);
}
miFuncion();`}
			/>

			<h4 className='text-xl font-semibold mt-4 mb-2'>Fragmento 2:</h4>
			<CodeBlock
				language='javascript'
				codeString={`let b = "global";
if (true) {
  let b = "bloque";
  console.log(b);
}
console.log(b);`}
			/>

			<h4 className='text-xl font-semibold mt-4 mb-2'>Fragmento 3:</h4>
			<CodeBlock
				language='javascript'
				codeString={`console.log(c);
let c = 10;`}
			/>
		</section>
	</div>
);

export default Lecture25Es;
