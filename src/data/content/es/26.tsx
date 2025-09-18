import CodeBlock from "@/components/ui/code-block";

const Lecture26Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Un Nuevo Paradigma: Programación Orientada a Objetos (POO)
			</h3>
			<p className='mb-4'>
				Hemos aprendido sobre variables, tipos de datos, condicionales, bucles y
				funciones. Ahora, vamos a organizar todo eso de una manera mucho más
				estructurada y escalable. La{" "}
				<strong>Programación Orientada a Objetos (POO)</strong> es un paradigma
				o estilo de programación que se basa en el concepto de "objetos" para
				representar entidades del mundo real (como un usuario, un producto, un
				coche) y sus interacciones.
			</p>
			<p>
				Un objeto en JavaScript es una colección de propiedades (variables) y
				métodos (funciones) relacionados. La POO nos ayuda a escribir código más
				modular, reutilizable y fácil de entender. La puerta de entrada a este
				mundo es entender una de las palabras clave más confusas pero poderosas
				de JavaScript: <code>this</code>.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. El Misterio de `this`: ¿Quién soy yo?
			</h3>
			<p className='mb-4'>
				La palabra clave <code>this</code> se refiere al{" "}
				<strong>contexto de ejecución</strong>. Su valor se determina por cómo
				se llama a la función, no por dónde se define.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				`this` en el Contexto Global
			</h4>
			<p>
				Fuera de cualquier función, <code>this</code> se refiere al objeto
				global (<code>window</code> en los navegadores).
			</p>
			<CodeBlock
				language='javascript'
				codeString={`console.log(this); // Muestra el objeto Window`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				`this` en un Método de Objeto
			</h4>
			<p>
				Cuando una función es llamada como un método de un objeto,{" "}
				<code>this</code> se refiere al objeto que contiene el método.{" "}
				<strong>Este es el uso más importante para la POO.</strong>
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const persona = {
  nombre: "Maria",
  saludar: function() {
    // Aquí, 'this' se refiere al objeto 'persona'
    console.log(\`Hola, mi nombre es \${this.nombre}\`);
  }
};

persona.saludar(); // Muestra "Hola, mi nombre es Maria"`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				`this` en Arrow Functions: La Solución Léxica
			</h4>
			<p className='mb-4'>
				A diferencia de las funciones normales, las funciones de flecha{" "}
				<strong>
					no tienen su propio contexto <code>this</code>
				</strong>
				. Heredan el <code>this</code> del ámbito en el que fueron creadas (lo
				que se conoce como ámbito léxico). Esto resuelve muchos problemas
				comunes.
			</p>

			<h5 className='text-lg font-semibold mt-4 mb-2'>
				Ejemplo en un Objeto Literal:
			</h5>
			<CodeBlock
				language='javascript'
				codeString={`const equipo = {
  nombre: "Guerreros del Código",
  miembros: ["Ana", "Luis", "Elena"],
  presentarMiembros: function() {
    // 'this' aquí es el objeto 'equipo'
    console.log(\`Equipo: \${this.nombre}\`);

    this.miembros.forEach(miembro => {
      // Gracias a la arrow function, 'this' aquí sigue siendo el objeto 'equipo'.
      // No pierde el contexto como lo haría una función normal.
      console.log(\`- \${miembro} es parte de \${this.nombre}\`);
    });
  }
};

equipo.presentarMiembros();`}
			/>

			<h5 className='text-lg font-semibold mt-4 mb-2'>
				Ejemplo en una Clase (con `setInterval`):
			</h5>
			<p>
				Un caso clásico donde `this` se pierde es con funciones como
				`setInterval`. Una arrow function lo soluciona elegantemente.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`class Cronometro {
  constructor(nombre) {
    this.nombre = nombre;
    this.segundos = 0;
    this.timerId = null;
  }

  iniciar() {
    // 'this' aquí es la instancia de Cronometro
    this.timerId = setInterval(() => {
      // Gracias a la arrow function, 'this' dentro de setInterval
      // sigue siendo la instancia de Cronometro. Con una función normal,
      // 'this' sería el objeto 'window' y esto fallaría.
      this.segundos++;
      console.log(\`\${this.nombre}: \${this.segundos}s\`);
    }, 1000);
  }

  detener() {
    clearInterval(this.timerId);
    console.log(\`\${this.nombre} detenido.\`);
  }
}

const miCronometro = new Cronometro("Temporizador de estudio");
// Descomenta para probar: miCronometro.iniciar();`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Manipulando `this` Explícitamente: `call`, `apply` y `bind`
			</h3>
			<p className='mb-4'>
				A veces necesitamos controlar manualmente a qué apunta <code>this</code>
				. JavaScript nos ofrece tres métodos para ello, que están disponibles en
				todas las funciones.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				`.call(thisArg, arg1, arg2, ...)`
			</h4>
			<p className='mb-4'>
				Invoca una función inmediatamente, especificando un valor para{" "}
				<code>this</code> y pasando los argumentos de forma individual.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const presentador = {
  nombre: "Alex",
  saludar: function(evento) {
    console.log(\`Hola, soy \${this.nombre} y estoy en el evento \${evento}.\`);
  }
};

const otroPresentador = { nombre: "Sofia" };

// Usamos .call() para que 'otroPresentador' "preste" el método 'saludar'.
presentador.saludar.call(otroPresentador, "WebConf 2024");
// Muestra: "Hola, soy Sofia y estoy en el evento WebConf 2024."`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				`.apply(thisArg, [argsArray])`
			</h4>
			<p className='mb-4'>
				Es idéntico a <code>.call()</code>, pero los argumentos se pasan como un
				array.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Usando los mismos objetos de antes
presentador.saludar.apply(otroPresentador, ["MusicFest Live"]);
// Muestra: "Hola, soy Sofia y estoy en el evento MusicFest Live."`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`.bind(thisArg)`</h4>
			<p className='mb-4'>
				No invoca la función inmediatamente. En su lugar, crea una{" "}
				<strong>nueva función</strong> con el valor de <code>this</code>{" "}
				"fijado" o "atado" permanentemente. Es extremadamente útil para
				callbacks o eventos donde el contexto se puede perder.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const usuario = {
  nombre: "Daniel",
  handleClick: function() {
    console.log(\`\${this.nombre} hizo clic!\`);
  }
};

// Con .bind(), creamos una nueva función donde 'this' SIEMPRE será 'usuario'.
const manejadorClickAtado = usuario.handleClick.bind(usuario);

// Imaginemos que pasamos 'manejadorClickAtado' a un botón.
// Al hacer clic, se ejecutará correctamente.
// Para demostrarlo, la llamamos directamente:
manejadorClickAtado(); // Muestra: "Daniel hizo clic!"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Clases en ES6: El Molde para Crear Objetos
			</h3>
			<p className='mb-4'>
				Antes de ES6, crear "moldes" para objetos era más complicado. Ahora,
				tenemos la palabra clave <code>class</code>, que es "azúcar sintáctico"
				sobre el sistema de prototipos de JavaScript, haciendo la sintaxis mucho
				más clara y familiar para quien viene de otros lenguajes de POO.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Clase:</strong> Un molde o plano para crear objetos.
				</li>
				<li>
					<strong>Constructor:</strong> Un método especial llamado{" "}
					<code>constructor</code> que se ejecuta automáticamente cuando se crea
					una nueva instancia de la clase. Se usa para inicializar las
					propiedades del objeto.
				</li>
				<li>
					<strong>Instancia:</strong> Un objeto creado a partir de una clase.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`class Vehiculo {
  // El constructor se ejecuta cuando hacemos 'new Vehiculo()'
  constructor(marca, modelo) {
    // 'this' se refiere a la nueva instancia que se está creando
    this.marca = marca;
    this.modelo = modelo;
    this.velocidad = 0;
  }

  // Métodos de la clase
  acelerar(cantidad) {
    this.velocidad += cantidad;
    console.log(\`Acelerando. Velocidad actual: \${this.velocidad} km/h\`);
  }

  frenar(cantidad) {
    this.velocidad -= cantidad;
    console.log(\`Frenando. Velocidad actual: \${this.velocidad} km/h\`);
  }
}

// Crear instancias (objetos) de la clase Vehiculo
const miCoche = new Vehiculo("Toyota", "Corolla");
const miMoto = new Vehiculo("Honda", "CBR");

miCoche.acelerar(50); // Muestra "Acelerando. Velocidad actual: 50 km/h"
miMoto.acelerar(80);  // Muestra "Acelerando. Velocidad actual: 80 km/h"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				5. Herencia: Creando Clases Especializadas
			</h3>
			<p className='mb-4'>
				La herencia es un pilar de la POO que nos permite crear una nueva clase
				(clase hija o subclase) que hereda propiedades y métodos de una clase
				existente (clase padre o superclase). Esto promueve la reutilización de
				código.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`extends`</strong>: La palabra clave para indicar que una
					clase hereda de otra.
				</li>
				<li>
					<strong>`super()`</strong>: Dentro del constructor de una clase hija,{" "}
					<code>super()</code> llama al constructor de la clase padre. Es
					obligatorio llamarlo antes de poder usar <code>this</code> en el
					constructor de la hija.
				</li>
			</ul>

			<CodeBlock
				language='javascript'
				codeString={`// La clase padre es Vehiculo (definida arriba)

// CocheElectrico es una clase hija que hereda de Vehiculo
class CocheElectrico extends Vehiculo {
  constructor(marca, modelo, autonomia) {
    // 1. Llama al constructor del padre (Vehiculo)
    super(marca, modelo);

    // 2. Añade propiedades específicas de la clase hija
    this.autonomia = autonomia;
  }

  // Método específico de la clase hija
  mostrarAutonomia() {
    console.log(\`Autonomía restante: \${this.autonomia} km\`);
  }

  // También podemos sobreescribir un método del padre
  acelerar(cantidad) {
    super.acelerar(cantidad); // Llama al método acelerar() original del padre
    console.log("El motor eléctrico zumba silenciosamente.");
  }
}

const miTesla = new CocheElectrico("Tesla", "Model S", 500);
miTesla.acelerar(100);
miTesla.mostrarAutonomia();`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				6. Tarea: Modelando Productos de una Tienda
			</h3>
			<p className='mb-4'>
				Vamos a aplicar todo lo que hemos aprendido para modelar la estructura
				de productos en una tienda online.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Crear la Clase Padre `Producto`</strong>:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Define una clase llamada <code>Producto</code>.
						</li>
						<li>
							En el <code>constructor</code>, debe aceptar tres parámetros:{" "}
							<code>nombre</code>, <code>precio</code> y <code>stock</code>.
							Asígnalos a propiedades del objeto usando <code>this</code>.
						</li>
						<li>
							Añade un método llamado <code>getInfo()</code> que devuelva un
							string con la información del producto, por ejemplo: "Producto:
							Laptop, Precio: $1200, Stock: 10".
						</li>
					</ul>
				</li>
				<li>
					<strong>Crear la Subclase `Libro`</strong>:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Define una nueva clase <code>Libro</code> que{" "}
							<strong>herede</strong> de <code>Producto</code> usando{" "}
							<code>extends</code>.
						</li>
						<li>
							El <code>constructor</code> de <code>Libro</code> debe aceptar{" "}
							<code>nombre</code>, <code>precio</code>, <code>stock</code> y un
							parámetro adicional: <code>autor</code>.
						</li>
						<li>
							Dentro del constructor, usa <code>super()</code> para llamar al
							constructor de <code>Producto</code> y pasarle los parámetros
							necesarios. Después, inicializa la propiedad <code>autor</code>.
						</li>
						<li>
							<strong>Sobrescribe</strong> el método <code>getInfo()</code> en
							la clase <code>Libro</code>. Este nuevo método debe primero llamar
							al método <code>getInfo()</code> del padre (usando{" "}
							<code>super.getInfo()</code>) y luego añadir la información del
							autor. Por ejemplo: "Producto: Don Quijote, Precio: $25, Stock:
							50, Autor: Miguel de Cervantes".
						</li>
					</ul>
				</li>
				<li>
					<strong>Crear Instancias y Probar</strong>:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Crea una instancia de <code>Producto</code> (ej. un teclado).
						</li>
						<li>
							Crea una instancia de <code>Libro</code>.
						</li>
						<li>
							Llama al método <code>getInfo()</code> de cada objeto y muestra
							los resultados en la consola para verificar que todo funciona
							correctamente.
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture26Es;
