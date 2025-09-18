import CodeBlock from "@/components/ui/code-block";

const Lecture22Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Repitiendo Tareas sin Repetir Código
			</h3>
			<p className='mb-4'>
				Imagina que necesitas mostrar una lista de 100 productos o saludar a 50
				usuarios. ¿Copiarías y pegarías el mismo código 100 o 50 veces? ¡Por
				supuesto que no! La programación se basa en la eficiencia. Para realizar
				tareas repetitivas, utilizamos <strong>bucles</strong> (en inglés,
				loops). Un bucle es una estructura de control que repite un bloque de
				código varias veces hasta que se cumple una condición de salida.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>2. El Bucle `for`</h3>
			<p className='mb-4'>
				El bucle <code>for</code> es el más común y estructurado. Es ideal
				cuando sabes de antemano cuántas veces quieres que se repita el código.
				Su sintaxis se compone de tres partes, separadas por punto y coma:
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Inicialización:</strong> Se ejecuta una sola vez, al
					principio. Generalmente se usa para declarar una variable contador (a
					menudo llamada <code>i</code> por "índice").
				</li>
				<li>
					<strong>Condición:</strong> Se evalúa antes de cada repetición.
					Mientras sea <code>true</code>, el bucle continúa. Cuando es{" "}
					<code>false</code>, el bucle termina.
				</li>
				<li>
					<strong>Incremento/Decremento:</strong> Se ejecuta al final de cada
					repetición. Se usa para actualizar la variable contador.
				</li>
			</ol>
			<CodeBlock
				language='javascript'
				codeString={`// Sintaxis: for (inicialización; condición; incremento)

// Ejemplo: Imprimir números del 1 al 5
for (let i = 1; i <= 5; i++) {
  console.log("El número es: " + i);
}

// i++ es un atajo para i = i + 1`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>3. El Bucle `while`</h3>
			<p className='mb-4'>
				El bucle <code>while</code> (mientras) es más simple. Repite un bloque
				de código mientras una condición sea verdadera. Es útil cuando no sabes
				exactamente cuántas iteraciones necesitarás, pero sí sabes cuándo debe
				detenerse el bucle.
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					¡Cuidado con los bucles infinitos!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					Con <code>while</code>, es tu responsabilidad asegurarte de que la
					condición eventualmente se vuelva <code>false</code>. Si olvidas
					actualizar la variable de control dentro del bucle, crearás un bucle
					infinito que bloqueará tu navegador.
				</p>
			</div>
			<CodeBlock
				language='javascript'
				codeString={`let contador = 0; // 1. Inicialización fuera del bucle

while (contador < 3) { // 2. Condición
  console.log("¡Hola!");
  contador++; // 3. ¡Incremento DENTRO del bucle! (Muy importante)
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>4. El Bucle `do...while`</h3>
			<p className='mb-4'>
				Este bucle es una variante del <code>while</code>. La principal
				diferencia es que la condición se evalúa <strong>después</strong> de
				ejecutar el bloque de código. Esto garantiza que el código dentro del
				bucle se ejecute <strong>al menos una vez</strong>, incluso si la
				condición es falsa desde el principio.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`let i = 5;

do {
  console.log("Este mensaje se mostrará una vez.");
  i++;
} while (i < 5); // La condición (5 < 5) es falsa, pero el bloque ya se ejecutó.`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				5. Controlando el Flujo: `break` y `continue`
			</h3>
			<p className='mb-4'>
				A veces necesitamos más control sobre el comportamiento de nuestros
				bucles.
			</p>
			<h4 className='text-xl font-semibold mt-6 mb-2'>`break`</h4>
			<p className='mb-4'>
				La sentencia <code>break</code> (romper) sale del bucle inmediatamente,
				sin importar si la condición del bucle sigue siendo verdadera.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Encontrar el primer número divisible por 7 después de 100
for (let i = 101; i < 200; i++) {
  if (i % 7 === 0) {
    console.log("El primer número divisible por 7 es: " + i);
    break; // Salimos del bucle una vez que lo encontramos
  }
}`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`continue`</h4>
			<p className='mb-4'>
				La sentencia <code>continue</code> (continuar) no rompe el bucle, sino
				que salta el resto del código de la iteración actual y pasa directamente
				a la siguiente.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Imprimir solo los números impares del 1 al 10
for (let i = 1; i <= 10; i++) {
  // Si el número es par...
  if (i % 2 === 0) {
    continue; // ...sáltate esta iteración y no ejecutes el console.log
  }
  console.log(i);
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Tablas de Multiplicar y Adivina el Número
			</h3>
			<p className='mb-4'>
				¡Vamos a practicar los bucles con dos pequeños ejercicios!
			</p>
			<ol className='list-decimal list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>Ejercicio 1: La Tabla de Multiplicar del 7</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Usa un bucle <code>for</code> para generar la tabla de multiplicar
							del 7.
						</li>
						<li>El bucle debe ir del 1 al 10.</li>
						<li>
							En cada iteración, imprime en la consola una línea con el formato
							"7 x [número] = [resultado]". Por ejemplo, "7 x 1 = 7", "7 x 2 =
							14", etc.
						</li>
					</ul>
				</li>
				<li>
					<strong>Ejercicio 2: FizzBuzz Clásico</strong>
					<p className='my-2'>
						Este es un problema de programación clásico. El objetivo es escribir
						un script que imprima los números del 1 al 100, pero con algunas
						excepciones:
					</p>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Para los múltiplos de 3, imprime "Fizz" en lugar del número.
						</li>
						<li>
							Para los múltiplos de 5, imprime "Buzz" en lugar del número.
						</li>
						<li>
							Para los números que son múltiplos de 3 y 5, imprime "FizzBuzz".
						</li>
						<li>
							<strong>Pista:</strong> Necesitarás un bucle <code>for</code> que
							vaya de 1 a 100. Dentro del bucle, usarás una estructura{" "}
							<code>if...else if...else</code>. Recuerda que el operador módulo
							(<code>%</code>) es tu mejor amigo aquí para comprobar si un
							número es múltiplo de otro.
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture22Es;
