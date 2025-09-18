import CodeBlock from "@/components/ui/code-block";

const Lecture15Es = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Pintando la Web: Formatos de Color
			</h3>
			<p className='mb-4'>
				El color es una de las herramientas de diseño más poderosas. CSS nos
				ofrece varias formas de definir colores, cada una con sus ventajas.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>Hexadecimal (`#RRGGBB`):</strong> El formato más común.
					Representa los valores de Rojo, Verde y Azul en base 16. También
					existe una sintaxis corta (`#RGB`).
					<CodeBlock
						language='css'
						codeString={`/* Rojo puro */
color: #FF0000;
/* Azul, forma corta */
color: #00F;`}
					/>
				</li>
				<li>
					<strong>RGB / RGBA (`rgb(r, g, b)`):</strong> Representa los colores
					usando valores decimales de 0 a 255. La versión `rgba` añade un cuarto
					valor, el canal <strong>alfa (transparencia)</strong>, que va de 0
					(totalmente transparente) a 1 (totalmente opaco).
					<CodeBlock
						language='css'
						codeString={`/* Verde puro */
color: rgb(0, 255, 0);
/* Negro semi-transparente */
background-color: rgba(0, 0, 0, 0.5);`}
					/>
				</li>
				<li>
					<strong>HSL / HSLA (`hsl(h, s, l)`):</strong> Un formato más intuitivo
					para los humanos. Representa el color por su{" "}
					<strong>Tono (Hue)</strong> (un ángulo de 0 a 360 en el círculo
					cromático), <strong>Saturación (Saturation)</strong> (0-100%) y{" "}
					<strong>Luminosidad (Lightness)</strong> (0-100%). `hsla` añade el
					canal alfa.
					<CodeBlock
						language='css'
						codeString={`/* Un azul vibrante */
color: hsl(240, 100%, 50%);
/* Un magenta semi-transparente */
background-color: hsla(300, 100%, 50%, 0.75);`}
					/>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Unidades de Medida: Absolutas vs. Relativas
			</h3>
			<p className='mb-4'>
				Elegir la unidad de medida correcta es fundamental para crear diseños
				flexibles y accesibles.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Unidades Absolutas</h4>
			<p className='mb-4'>
				Tienen un tamaño fijo y no cambian. La más común es el{" "}
				<strong>píxel (`px`)</strong>. Son útiles para elementos que no deben
				escalar, como un borde de `1px`.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Unidades Relativas</h4>
			<p className='mb-4'>
				Su tamaño se calcula en relación a otro valor, lo que las hace ideales
				para diseños responsivos y accesibles.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`%` (Porcentaje):</strong> Relativo al tamaño del elemento
					padre. `width: 50%;` hará que un elemento ocupe la mitad del ancho de
					su contenedor.
				</li>
				<li>
					<strong>`em`</strong>: Relativo al{" "}
					<strong>tamaño de fuente del elemento padre</strong>. Si un div tiene
					`font-size: 16px;`, un `p` dentro con `font-size: 1.2em;` tendrá
					19.2px. Puede ser complicado de gestionar si hay mucho anidamiento.
				</li>
				<li>
					<strong>`rem` (Root EM):</strong> La mejor opción para la tipografía.
					Es relativo al{" "}
					<strong>tamaño de fuente del elemento raíz (`&lt;html&gt;`)</strong>.
					Por defecto, en la mayoría de navegadores es `16px`. Si un usuario
					cambia el tamaño de fuente en su navegador por accesibilidad, todos
					los tamaños en `rem` escalarán proporcionalmente.
					<CodeBlock
						language='css'
						codeString={`html {
  font-size: 16px; /* 1rem = 16px */
}
h1 {
  font-size: 2rem; /* 32px */
}
p {
  font-size: 1rem; /* 16px */
  padding: 1.5rem; /* 24px */
}`}
					/>
				</li>
				<li>
					<strong>`vw` / `vh` (Viewport Width / Height):</strong> Relativas al
					tamaño de la ventana del navegador. `1vw` es el 1% del ancho de la
					ventana. Son perfectas para crear secciones que ocupen toda la
					pantalla (`height: 100vh;`).
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Variables CSS (Propiedades Personalizadas)
			</h3>
			<p className='mb-4'>
				Las variables CSS son una de las características más potentes y
				modernas. Nos permiten definir valores reutilizables en un solo lugar,
				lo que simplifica enormemente el mantenimiento y la creación de temas.
			</p>
			<p>
				Se declaran con dos guiones (`--nombre-variable`) y se usan con la
				función `var()`. Es una buena práctica declararlas en el pseudo-selector
				`:root`, que representa el elemento `&lt;html&gt;`, para que estén
				disponibles globalmente.
			</p>
			<CodeBlock
				language='css'
				codeString={`:root {
  --color-primario: #3498db;
  --color-texto: #333;
  --fuente-principal: 'Helvetica', sans-serif;
}

body {
  color: var(--color-texto);
  font-family: var(--fuente-principal);
}

.boton-principal {
  background-color: var(--color-primario);
  color: white;
}

/* Para cambiar el tema, solo necesitarías cambiar las variables en :root */
`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Creando una Paleta de Estilo
			</h3>
			<p className='mb-4'>
				Vamos a aplicar estos conceptos para crear una pequeña guía de estilo
				para una página.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Define tus Variables:</strong> En tu archivo CSS, dentro del
					selector `:root`, crea al menos 4 variables: `--color-primario`,
					`--color-fondo`, `--color-texto` y `--espaciado-base` (ej. `1rem`).
				</li>
				<li>
					<strong>Aplica las Variables:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							En el `body`, usa las variables para definir el
							`background-color`, `color` y `font-family`.
						</li>
						<li>
							Crea un botón con la clase `.boton` y usa `--color-primario` para
							su fondo y `white` para el texto.
						</li>
					</ul>
				</li>
				<li>
					<strong>Usa Unidades Relativas:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Establece el `font-size` del `&lt;html&gt;` a `100%` (o déjalo por
							defecto).
						</li>
						<li>
							Define el `font-size` de tus encabezados (`h1`) y párrafos (`p`)
							usando `rem`.
						</li>
						<li>
							Usa tu variable `--espaciado-base` para el `padding` del botón y
							el `margin-bottom` de los párrafos.
						</li>
					</ul>
				</li>
				<li>
					<strong>Experimenta:</strong> Abre las herramientas de desarrollador
					en tu navegador, selecciona el elemento `&lt;html&gt;` y cambia su
					`font-size`. Observa cómo todo el texto y los espaciados que usan
					`rem` se escalan juntos de manera fluida.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture15Es;
