import CodeBlock from "@/components/ui/code-block";

const Lecture21Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Tomando Decisiones en el Código
			</h3>
			<p className='mb-4'>
				Hasta ahora, nuestro código se ejecuta de forma lineal, una instrucción
				tras otra. Pero los programas interesantes necesitan tomar decisiones y
				seguir caminos diferentes según ciertas condiciones. ¿El usuario está
				registrado? ¿La contraseña es correcta? ¿El producto tiene stock? Para
				manejar estas situaciones, usamos las estructuras de control
				condicionales.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. La Sentencia `if...else`
			</h3>
			<p className='mb-4'>
				La estructura condicional más fundamental es el <code>if</code> (si).
				Permite ejecutar un bloque de código solo si una condición específica es
				verdadera (<code>true</code>).
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`if` básico</h4>
			<CodeBlock
				language='javascript'
				codeString={`const edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad. Puedes entrar.");
}
// Si la edad fuera 15, este bloque de código nunca se ejecutaría.`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Añadiendo el `else`</h4>
			<p className='mb-4'>
				A menudo queremos que ocurra algo diferente si la condición es falsa (
				<code>false</code>). Para eso, añadimos un bloque <code>else</code> (si
				no).
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const temperatura = 15;

if (temperatura > 25) {
  console.log("Hace calor. ¡Ponte ropa ligera!");
} else {
  console.log("No hace calor. Mejor lleva una chaqueta.");
}`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Encadenando con `else if`
			</h4>
			<p className='mb-4'>
				Para manejar múltiples condiciones, podemos encadenar bloques con{" "}
				<code>else if</code>. JavaScript evaluará cada condición en orden y
				ejecutará el primer bloque cuyo resultado sea <code>true</code>. Si
				ninguno es verdadero, ejecutará el bloque <code>else</code> final (si
				existe).
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const nota = 75;

if (nota >= 90) {
  console.log("Excelente (A)");
} else if (nota >= 80) {
  console.log("Muy Bien (B)");
} else if (nota >= 70) {
  console.log("Bien (C)");
} else {
  console.log("Necesitas mejorar (F)");
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Operadores Lógicos: `&&`, `||`, `!`
			</h3>
			<p className='mb-4'>
				Para crear condiciones más complejas, usamos los operadores lógicos.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`&&` (AND - Y):</strong> Devuelve <code>true</code> solo si{" "}
					<strong>ambas</strong> condiciones son verdaderas.
					<CodeBlock
						language='javascript'
						codeString={`const tieneLicencia = true;
const tieneCoche = false;

if (tieneLicencia && tieneCoche) {
  console.log("Puede conducir."); // No se ejecuta
}`}
					/>
				</li>
				<li>
					<strong>`||` (OR - O):</strong> Devuelve <code>true</code> si{" "}
					<strong>al menos una</strong> de las condiciones es verdadera.
					<CodeBlock
						language='javascript'
						codeString={`const esMiembroPremium = true;
const tieneCupon = false;

if (esMiembroPremium || tieneCupon) {
  console.log("Tiene acceso a descuento."); // Se ejecuta
}`}
					/>
				</li>
				<li>
					<strong>`!` (NOT - NO):</strong> Invierte el valor booleano. Convierte{" "}
					<code>true</code> en <code>false</code> y viceversa.
					<CodeBlock
						language='javascript'
						codeString={`const estaLloviendo = false;

if (!estaLloviendo) {
  console.log("Es un buen día para salir."); // Se ejecuta
}`}
					/>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. El Operador Ternario: un atajo para `if...else`
			</h3>
			<p className='mb-4'>
				Para condicionales simples que asignan un valor a una variable, el
				operador ternario es una alternativa más corta y elegante.
			</p>
			<p className='mb-4'>
				Su sintaxis es:{" "}
				<code>condición ? valor_si_es_true : valor_si_es_false;</code>
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const edad = 19;

// Usando if...else
let tipoEntrada;
if (edad >= 18) {
  tipoEntrada = "Adulto";
} else {
  tipoEntrada = "Menor";
}

// Usando el operador ternario (más conciso)
const tipoEntradaTernario = edad >= 18 ? "Adulto" : "Menor";

console.log(tipoEntradaTernario); // Muestra "Adulto"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>5. La Sentencia `switch`</h3>
			<p className='mb-4'>
				Cuando necesitas comparar una única variable contra muchos valores
				posibles, una larga cadena de <code>if...else if</code> puede volverse
				difícil de leer. La sentencia <code>switch</code> es una alternativa más
				limpia en estos casos.
			</p>
			<p className='mb-4'>
				Compara una expresión con diferentes <code>case</code> (casos). Cuando
				encuentra una coincidencia, ejecuta el código y la sentencia{" "}
				<code>break</code> detiene la ejecución. El bloque <code>default</code>{" "}
				es opcional y se ejecuta si no hay ninguna coincidencia.
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					¡No olvides el `break`!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					Si omites el <code>break</code>, el código continuará ejecutándose en
					los siguientes <code>case</code> hasta encontrar un <code>break</code>{" "}
					o finalizar el <code>switch</code>, lo que suele ser un error.
				</p>
			</div>
			<CodeBlock
				language='javascript'
				codeString={`const diaSemana = "martes";

switch (diaSemana) {
  case "lunes":
    console.log("¡Comienza la semana!");
    break;
  case "viernes":
    console.log("¡Casi es fin de semana!");
    break;
  case "sábado":
  case "domingo":
    console.log("¡Disfruta el fin de semana!");
    break;
  default:
    console.log("Es un día normal de trabajo.");
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Clasificador de Edades
			</h3>
			<p className='mb-4'>
				Vamos a crear un script que pida al usuario su edad y le diga en qué
				categoría de vida se encuentra.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					En tu archivo <code>main.js</code>, utiliza la función{" "}
					<code>prompt()</code> para pedir al usuario su edad. Guarda el
					resultado en una variable. Por ejemplo:{" "}
					<code>let edadInput = prompt("¿Cuál es tu edad?");</code>
				</li>
				<li>
					El valor que devuelve <code>prompt()</code> es siempre un string.
					Necesitamos convertirlo a número. Usa la función{" "}
					<code>parseInt()</code>: <code>let edad = parseInt(edadInput);</code>
				</li>
				<li>
					Ahora, escribe una estructura <code>if...else if...else</code> que
					haga lo siguiente:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Si la edad es menor de 0, muestra una alerta (<code>alert()</code>
							) que diga "Edad no válida".
						</li>
						<li>Si la edad está entre 0 y 12, muestra "Eres un niño/a".</li>
						<li>
							Si la edad está entre 13 y 18, muestra "Eres un adolescente".
						</li>
						<li>Si la edad está entre 19 y 64, muestra "Eres un adulto/a".</li>
						<li>Si la edad es 65 o mayor, muestra "Eres un adulto/a mayor".</li>
					</ul>
				</li>
				<li>
					Añade una comprobación al principio. Si el usuario introduce algo que
					no es un número (<code>parseInt</code> devolverá <code>NaN</code> -
					Not a Number), muestra una alerta que diga "Por favor, introduce un
					número válido". Puedes comprobar si un valor es <code>NaN</code> con
					la función <code>isNaN(variable)</code>.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture21Es;
