import CodeBlock from "@/components/ui/code-block";

const Lecture39Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Síncrono vs. Asíncrono: El Flujo del Tiempo en el Código
			</h3>
			<p className='mb-4'>
				Hasta ahora, todo nuestro código ha sido <strong>síncrono</strong>. Esto
				significa que las tareas se ejecutan una tras otra, en orden. Si una
				tarea tarda mucho, bloquea todo lo que viene después.
			</p>
			<p className='mb-4'>
				<strong>Analogía síncrona:</strong> Una fila en un banco con un solo
				cajero. No puedes ser atendido hasta que todas las personas delante de
				ti hayan terminado.
			</p>
			<p>
				El código <strong>asíncrono</strong> es diferente. Nos permite iniciar
				una tarea que toma tiempo (como esperar, descargar un archivo o pedir
				datos a un servidor) y continuar con otras tareas mientras tanto. Cuando
				la tarea larga termina, nuestro programa es notificado y puede
				reaccionar.
			</p>
			<p className='mb-4'>
				<strong>Analogía asíncrona:</strong> Pedir comida en un restaurante con
				un buscapersonas. Haces tu pedido (inicias la tarea), te dan un
				buscapersonas (un "callback") y te puedes sentar y charlar. Cuando la
				comida está lista, el buscapersonas vibra (el callback se ejecuta) y vas
				a recogerla. ¡No tuviste que esperar bloqueado en el mostrador!
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Temporizadores: `setTimeout` y `setInterval`
			</h3>
			<p className='mb-4'>
				Las funciones de temporización son la forma más sencilla de experimentar
				la asincronía en JavaScript.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`setTimeout`</h4>
			<p className='mb-4'>
				Ejecuta una función (callback) <strong>una vez</strong> después de que
				haya transcurrido un número específico de milisegundos.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// setTimeout(funcionCallback, retrasoEnMilisegundos);

console.log("Inicio del script");

setTimeout(() => {
  console.log("¡Han pasado 2 segundos!");
}, 2000); // 2000 ms = 2 segundos

console.log("Fin del script");

// Orden en la consola:
// 1. "Inicio del script"
// 2. "Fin del script"
// 3. (Después de 2 segundos) "¡Han pasado 2 segundos!"`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`setInterval`</h4>
			<p className='mb-4'>
				Ejecuta una función (callback) <strong>repetidamente</strong>, con un
				intervalo fijo de milisegundos entre cada llamada.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`let contador = 0;

const intervaloId = setInterval(() => {
  contador++;
  console.log(\`Tick número \${contador}\`);

  if (contador >= 5) {
    clearInterval(intervaloId); // Detenemos el intervalo
    console.log("¡Intervalo detenido!");
  }
}, 1000);`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Cancelando Temporizadores: `clearTimeout` y `clearInterval`
			</h3>
			<p className='mb-4'>
				Tanto <code>setTimeout</code> como <code>setInterval</code> devuelven un
				ID numérico único. Podemos guardar este ID en una variable y usarlo para
				cancelar el temporizador antes de que se ejecute (o para detener un
				intervalo).
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`clearTimeout(idDelTimeout)`</strong>: Cancela un `setTimeout`
					programado.
				</li>
				<li>
					<strong>`clearInterval(idDelIntervalo)`</strong>: Detiene un
					`setInterval` en ejecución.
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. El Problema: "Callback Hell" (El Infierno de los Callbacks)
			</h3>
			<p className='mb-4'>
				Los callbacks son poderosos, pero ¿qué pasa si tenemos varias
				operaciones asíncronas que dependen una de la otra? Terminamos anidando
				callbacks dentro de callbacks, creando una estructura difícil de leer y
				mantener conocida como la "Pirámide de la Muerte" o "Callback Hell".
			</p>
			<CodeBlock
				language='javascript'
				codeString={`setTimeout(() => {
  console.log("Primera tarea completada.");
  setTimeout(() => {
    console.log("Segunda tarea completada.");
    setTimeout(() => {
      console.log("Tercera tarea completada.");
      // Imagina 10 niveles de esto...
    }, 1000);
  }, 1000);
}, 1000);`}
			/>
			<p className='mt-4'>
				Este es el problema que las Promesas (que veremos en la próxima lección)
				vienen a resolver.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Temporizador de Cuenta Regresiva
			</h3>
			<p className='mb-4'>
				Vamos a crear un temporizador que haga una cuenta regresiva en la
				página.
			</p>
			<p>
				1. Crea un archivo HTML con un <code>&lt;h1&gt;</code> para mostrar la
				cuenta.
			</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="es">
<head><title>Cuenta Regresiva</title></head>
<body>
    <h1 id="contador">10</h1>
    <script src="main.js"></script>
</body>
</html>`}
			/>
			<p className='mt-4'>2. En tu archivo JavaScript:</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Selecciona el <code>&lt;h1&gt;</code> del contador.
				</li>
				<li>
					Crea una variable <code>tiempoRestante</code> y inicialízala en 10.
				</li>
				<li>
					Usa <code>setInterval</code> para ejecutar una función cada segundo
					(1000 ms).
				</li>
				<li>
					Dentro de la función del intervalo:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Decrementa la variable <code>tiempoRestante</code> en 1.
						</li>
						<li>
							Actualiza el <code>textContent</code> del <code>&lt;h1&gt;</code>{" "}
							con el nuevo valor.
						</li>
						<li>
							Añade una condición: si <code>tiempoRestante</code> llega a 0,
							detén el intervalo usando <code>clearInterval</code> y cambia el
							texto del <code>&lt;h1&gt;</code> a "¡Despegue!".
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture39Es;
