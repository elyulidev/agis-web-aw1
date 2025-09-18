import CodeBlock from "@/components/ui/code-block";

const Lecture23Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. ¿Qué es una Función? Empaquetando Nuestro Código
			</h3>
			<p className='mb-4'>
				Hasta ahora, hemos escrito código que se ejecuta de arriba hacia abajo,
				una línea tras otra. Pero, ¿qué pasa si necesitamos realizar la misma
				tarea en múltiples lugares? ¿Copiar y pegar? ¡No! Eso va en contra de
				uno de los principios más importantes de la programación:{" "}
				<strong>DRY (Don't Repeat Yourself - No te repitas)</strong>.
			</p>
			<p className='mb-4'>
				Aquí es donde entran las <strong>funciones</strong>. Una función es un
				bloque de código reutilizable diseñado para realizar una tarea
				específica. Piensa en ella como una receta de cocina: tiene un nombre
				(ej. "hacer una tortilla"), acepta ingredientes (parámetros) y sigue una
				serie de pasos para producir un resultado (un valor de retorno).
			</p>
			<p>
				Las funciones nos permiten organizar, reutilizar y simplificar nuestro
				código, haciéndolo más legible y fácil de mantener.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Declaración de Función (Function Declaration)
			</h3>
			<p className='mb-4'>
				Esta es la forma más clásica y directa de crear una función en
				JavaScript. Su estructura es muy clara:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					Comienza con la palabra clave <code>function</code>.
				</li>
				<li>
					Le sigue el nombre que le queremos dar a la función (ej.{" "}
					<code>saludar</code>).
				</li>
				<li>
					Luego, un par de paréntesis <code>()</code> que pueden contener una
					lista de <strong>parámetros</strong> (los "ingredientes" que la
					función necesita para trabajar).
				</li>
				<li>
					Finalmente, un bloque de código entre llaves <code>{"{ ... }"}</code>,
					que es el cuerpo de la función (los "pasos de la receta").
				</li>
			</ul>

			<h4 className='text-xl font-semibold mt-6 mb-2'>La Sentencia `return`</h4>
			<p className='mb-4'>
				La palabra clave <code>return</code> es crucial. Especifica el valor que
				la función "devuelve" o "produce" después de ejecutarse. Cuando se
				encuentra un <code>return</code>, la función termina inmediatamente y
				envía ese valor de vuelta al lugar donde fue llamada. Si una función no
				tiene una sentencia <code>return</code>, devuelve <code>undefined</code>{" "}
				por defecto.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// 1. Declaración de la función
function sumar(numeroA, numeroB) {
  const resultado = numeroA + numeroB;
  return resultado; // Devuelve el valor calculado
}

// 2. Llamada (o invocación) de la función
const resultadoSuma = sumar(5, 10); // Le pasamos 5 y 10 como argumentos

console.log(resultadoSuma); // Muestra 15 en la consola`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Expresión de Función (Function Expression)
			</h3>
			<p className='mb-4'>
				En JavaScript, las funciones son "ciudadanos de primera clase". Esto
				significa que pueden ser tratadas como cualquier otro valor: se pueden
				asignar a variables, pasar como argumentos a otras funciones, etc.
			</p>
			<p className='mb-4'>
				Una expresión de función es cuando creamos una función y la asignamos a
				una variable. A menudo, estas funciones son <strong>anónimas</strong>{" "}
				(no tienen un nombre después de la palabra <code>function</code>), ya
				que la variable es la que ahora contiene la referencia a la función.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// "restar" es una variable que contiene una función
const restar = function(numeroA, numeroB) {
  return numeroA - numeroB;
};

// La llamamos usando el nombre de la variable
const resultadoResta = restar(20, 7);

console.log(resultadoResta); // Muestra 13`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Declaración vs. Expresión: La Diferencia Clave del Hoisting
			</h3>
			<p className='mb-4'>
				Aunque parezcan similares, hay una diferencia fundamental: el{" "}
				<strong>hoisting</strong> (elevación).
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Declaraciones de Función:</strong> Son "elevadas" (hoisted).
					El intérprete de JavaScript las mueve a la parte superior de su ámbito
					antes de que el código se ejecute. Esto significa que puedes llamar a
					una función declarada <strong>antes</strong> de su definición en el
					código.
				</li>
				<li>
					<strong>Expresiones de Función:</strong> No son elevadas. La variable
					que las contiene sí se eleva (si se declara con <code>var</code>, pero
					no se inicializa), pero la asignación de la función no. Por lo tanto,
					debes definir una expresión de función <strong>antes</strong> de poder
					llamarla.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`// Esto funciona gracias al hoisting de las declaraciones
console.log(saludoDeclaracion("Juan")); // Muestra "Hola, Juan"

function saludoDeclaracion(nombre) {
  return \`Hola, \${nombre}\`;
}


// Esto producirá un error: ReferenceError: Cannot access 'saludoExpresion' before initialization
// console.log(saludoExpresion("Ana"));

const saludoExpresion = function(nombre) {
  return \`Hola, \${nombre}\`;
};

// Para que funcione, la llamada debe estar después
console.log(saludoExpresion("Ana")); // Muestra "Hola, Ana"`}
			/>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					¿Cuál usar?
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Ambas son válidas. Muchos desarrolladores prefieren las expresiones de
					función con <code>const</code> porque evitan el hoisting, lo que puede
					hacer que el código sea más predecible y menos propenso a errores al
					forzar una estructura de arriba hacia abajo.
				</p>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: La Calculadora Universal
			</h3>
			<p className='mb-4'>
				¡Es hora de construir tu propio set de herramientas matemáticas! En esta
				tarea, practicarás ambas formas de crear funciones.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					En tu archivo <code>main.js</code>, crea cuatro funciones usando la
					sintaxis de <strong>declaración de función</strong>:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							<code>sumar(a, b)</code> que devuelva la suma de dos números.
						</li>
						<li>
							<code>restar(a, b)</code> que devuelva la resta.
						</li>
						<li>
							<code>multiplicar(a, b)</code> que devuelva el producto.
						</li>
						<li>
							<code>dividir(a, b)</code> que devuelva la división.
						</li>
					</ul>
				</li>
				<li>
					Ahora, crea las mismas cuatro funciones, pero esta vez usando la
					sintaxis de <strong>expresión de función</strong>. Asigna cada una a
					una constante con un nombre diferente (ej. <code>sumaExpresion</code>,{" "}
					<code>restaExpresion</code>, etc.).
				</li>
				<li>
					Prueba cada una de tus ocho funciones. Llámalas con diferentes números
					y muestra los resultados en la consola de una manera clara y
					descriptiva. Por ejemplo:
					<CodeBlock
						language='javascript'
						codeString={`console.log("Declaración: 10 + 5 =", sumar(10, 5));
console.log("Expresión: 20 * 4 =", multiplicarExpresion(20, 4));`}
					/>
				</li>
				<li>
					<strong>Reto (Opcional):</strong> En tu función <code>dividir</code>,
					añade una condición (<code>if</code>) para comprobar si el segundo
					parámetro (el divisor) es <code>0</code>. Si lo es, en lugar de
					realizar la división, devuelve un string que diga "Error: No se puede
					dividir por cero".
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture23Es;
