import CodeBlock from "@/components/ui/code-block";

const Lecture20Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Almacenando Información: ¿Qué son las Variables?
			</h3>
			<p className='mb-4'>
				Imagina que estás cocinando. Necesitas recipientes para guardar tus
				ingredientes: un bol para la harina, una taza para el azúcar, etc. En
				programación, esos recipientes se llaman <strong>variables</strong>. Una
				variable es un contenedor con nombre donde podemos almacenar datos para
				usarlos y manipularlos más tarde en nuestro programa.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Declarando Variables: `let`, `const` y el porqué de no usar `var`
			</h3>
			<p className='mb-4'>
				En JavaScript moderno, tenemos dos formas principales de declarar
				variables: <code>let</code> y <code>const</code>.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`let`</h4>
			<p className='mb-4'>
				Se usa para declarar variables cuyo valor puede cambiar (reasignar) a lo
				largo del programa.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`let puntuacion = 100;
console.log(puntuacion); // Muestra 100

puntuacion = 150; // El valor puede ser actualizado
console.log(puntuacion); // Muestra 150`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`const`</h4>
			<p className='mb-4'>
				Se usa para declarar "constantes", es decir, variables cuyo valor no
				cambiará una vez asignado. Si intentas reasignar una `const`, JavaScript
				te dará un error.
			</p>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					Práctica recomendada:
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Usa <code>const</code> por defecto. Solo cambia a <code>let</code> si
					sabes que necesitarás reasignar la variable. Esto hace tu código más
					seguro y predecible.
				</p>
			</div>
			<CodeBlock
				language='javascript'
				codeString={`const nombre = "Ana";
console.log(nombre); // Muestra "Ana"

// Esto generará un error: TypeError: Assignment to constant variable.
// nombre = "Carlos";`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>¿Y qué hay de `var`?</h4>
			<p className='mb-4'>
				<code>var</code> era la forma original de declarar variables en
				JavaScript. Sin embargo, tiene un comportamiento confuso con algo
				llamado "scope" (alcance), lo que puede llevar a errores difíciles de
				encontrar.{" "}
				<strong>
					En el desarrollo moderno, se considera una práctica obsoleta y se
					recomienda evitar su uso por completo en favor de `let` y `const`.
				</strong>
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Tipos de Datos Primitivos
			</h3>
			<p className='mb-4'>
				JavaScript tiene varios tipos de datos fundamentales que podemos
				almacenar en nuestras variables.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>String (Cadena de texto):</strong> Para texto. Se escribe
					entre comillas simples (<code>' '</code>), dobles (<code>" "</code>) o
					backticks (<code>` `</code>). Los backticks permiten incrustar
					variables fácilmente, lo que se conoce como plantillas literales.
					<CodeBlock
						language='javascript'
						codeString={`const saludo = "Hola";
const persona = 'Mundo';
const saludoCompleto = \`\${saludo}, \${persona}!\`; // "Hola, Mundo!"`}
					/>
				</li>
				<li>
					<strong>Number (Número):</strong> Para cualquier tipo de número, ya
					sean enteros o con decimales.
					<CodeBlock
						language='javascript'
						codeString={`const edad = 30;
const precio = 19.99;`}
					/>
				</li>
				<li>
					<strong>Boolean (Booleano):</strong> Solo puede tener dos valores:{" "}
					<code>true</code> (verdadero) o <code>false</code> (falso). Es la base
					de la lógica y la toma de decisiones.
					<CodeBlock
						language='javascript'
						codeString={`const esMayorDeEdad = true;
const tieneDescuento = false;`}
					/>
				</li>
				<li>
					<strong>undefined:</strong> Una variable que ha sido declarada pero a
					la que aún no se le ha asignado un valor.
					<CodeBlock
						language='javascript'
						codeString={`let proximoPaso;
console.log(proximoPaso); // Muestra undefined`}
					/>
				</li>
				<li>
					<strong>null:</strong> Representa la ausencia intencional de cualquier
					valor. Es un valor que asignamos nosotros para indicar que "no hay
					nada".
					<CodeBlock
						language='javascript'
						codeString={`let ganador = null; // Aún no hay ganador`}
					/>
				</li>
			</ul>
			<p className='mb-4'>
				Podemos comprobar el tipo de una variable usando el operador{" "}
				<code>typeof</code>.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const nombre = "Juan";
console.log(typeof nombre); // Muestra "string"

const edad = 25;
console.log(typeof edad); // Muestra "number"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Operadores: Realizando Acciones
			</h3>
			<p className='mb-4'>
				Los operadores son símbolos que realizan operaciones sobre nuestras
				variables y valores.
			</p>
			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Operadores Aritméticos
			</h4>
			<p>Para hacer matemáticas.</p>
			<CodeBlock
				language='javascript'
				codeString={`const a = 10;
const b = 5;

console.log(a + b); // Suma: 15
console.log(a - b); // Resta: 5
console.log(a * b); // Multiplicación: 50
console.log(a / b); // División: 2
console.log(a % b); // Módulo (resto de la división): 0
console.log(a ** b); // Exponenciación: 100000`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Operadores de Asignación
			</h4>
			<p>Para asignar valores a las variables.</p>
			<CodeBlock
				language='javascript'
				codeString={`let x = 10;
x += 5; // Equivalente a x = x + 5. Ahora x es 15.
x -= 3; // Equivalente a x = x - 3. Ahora x es 12.
x *= 2; // Equivalente a x = x * 2. Ahora x es 24.`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Operadores de Comparación
			</h4>
			<p>
				Para comparar valores. El resultado siempre es un booleano (
				<code>true</code> o <code>false</code>).
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					¡Importante!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					Usa siempre <code>===</code> (igualdad estricta) en lugar de{" "}
					<code>==</code> (igualdad laxa). <code>===</code> comprueba tanto el
					valor como el tipo, lo que evita errores inesperados. Lo mismo aplica
					para <code>!==</code> (desigualdad estricta).
				</p>
			</div>
			<CodeBlock
				language='javascript'
				codeString={`const num = 5;
const str = "5";

console.log(num == str);  // true (compara solo el valor) -> ¡Evitar!
console.log(num === str); // false (compara valor Y tipo) -> ¡Usar siempre!

console.log(num > 3);   // true
console.log(num <= 5);  // true
console.log(num !== 10); // true`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Mini Perfil de Usuario
			</h3>
			<p className='mb-4'>
				Vamos a crear un pequeño script que defina variables para un perfil de
				usuario y las muestre en la consola.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					En tu archivo <code>main.js</code> (o crea uno nuevo si lo prefieres),
					borra el contenido anterior.
				</li>
				<li>
					Declara las siguientes variables usando <code>const</code>:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							<code>nombreUsuario</code> con tu nombre (string).
						</li>
						<li>
							<code>añoNacimiento</code> con tu año de nacimiento (number).
						</li>
						<li>
							<code>esEstudiante</code> con un valor booleano que indique si
							eres estudiante o no.
						</li>
					</ul>
				</li>
				<li>
					Declara una variable con <code>let</code> llamada{" "}
					<code>edadActual</code>.
				</li>
				<li>
					Calcula tu edad actual restando <code>añoNacimiento</code> del año
					actual (puedes usar 2024 como número fijo) y asigna el resultado a{" "}
					<code>edadActual</code>.
				</li>
				<li>
					Usa <code>console.log()</code> y plantillas literales (backticks ``)
					para imprimir un mensaje de bienvenida en la consola que incluya todas
					las variables. Por ejemplo: "Bienvenido [nombreUsuario], tienes
					[edadActual] años y tu estado de estudiante es [esEstudiante]".
				</li>
				<li>
					Usa <code>console.log()</code> y el operador <code>typeof</code> para
					mostrar el tipo de dato de cada una de las variables que creaste.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture20Es;
