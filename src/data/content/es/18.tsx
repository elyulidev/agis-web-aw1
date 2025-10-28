import CodeBlock from "@/components/ui/code-block";

const Lecture18Es = () => {
	// FIX: Moved inline styles to a constant and used dangerouslySetInnerHTML to prevent TSX parsing errors.
	const bentoGridStyles = `
          .bento-grid-final {
            display: grid;
            gap: 1rem;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: hsl(36, 100%, 99%);
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: repeat(5, 8vh);
            grid-template-areas:
              "hero hero hero hero aside2 aside2"
              "hero hero hero hero aside2 aside2"
              "hero hero hero hero aside2 aside2"
              "hero hero hero hero aside2 aside2"
              "aside3 aside3 aside4 aside4 aside5 aside5";
          }
          .bento-grid-final .item {
            border: 2px solid #464545;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: sans-serif;
            font-size: 1.1rem;
            font-weight: bold;
          }
          .bento-grid-final .item:nth-child(1) { grid-area: hero; }
          .bento-grid-final .item:nth-child(2) { grid-area: aside2; }
          .bento-grid-final .item:nth-child(3) { grid-area: aside3; }
          .bento-grid-final .item:nth-child(4) { grid-area: aside4; }
          .bento-grid-final .item:nth-child(5) { grid-area: aside5; }

          @media screen and (max-width: 1000px) {
            .bento-grid-final {
              grid-template-columns: repeat(4, 1fr);
              grid-template-rows: repeat(4, 8vh);
              grid-template-areas:
                "hero   hero   hero   hero"
                "hero   hero   hero   hero"
                "aside2 aside2 aside2 aside3"
                "aside4 aside4 aside5 aside5";
            }
          }

          @media screen and (max-width: 750px) {
            .bento-grid-final {
              grid-template-columns: 1fr;
              grid-template-rows: auto;
              grid-template-areas:
                "hero"
                "aside2"
                "aside3"
                "aside4"
                "aside5";
            }
            .bento-grid-final .item {
                min-height: 15vh;
            }
            .bento-grid-final .item:nth-child(1) { min-height: 25vh; }
          }
        `;

	return (
		<div className='space-y-8'>
			<section>
				<h3 className='text-2xl font-semibold mb-3'>
					1. Un Mundo, Múltiples Pantallas
				</h3>
				<p className='mb-4'>
					Hoy en día, los usuarios acceden a la web desde una increíble variedad
					de dispositivos: teléfonos, tabletas, portátiles, televisores. El{" "}
					<strong>Diseño Web Responsivo (Responsive Web Design)</strong> es el
					enfoque que sugiere que el diseño y el desarrollo deben responder al
					comportamiento y entorno del usuario en función del tamaño de la
					pantalla, la plataforma y la orientación.
				</p>
				<p>
					Una web responsiva se adapta fluidamente para ofrecer la mejor
					experiencia posible en cualquier dispositivo.
				</p>
			</section>

			<section>
				<h3 className='text-2xl font-semibold mb-3'>
					2. Los Tres Ingredientes del Diseño Responsivo
				</h3>
				<p className='mb-4'>
					El diseño responsivo se basa en tres pilares técnicos:
				</p>
				<ol className='list-decimal list-inside space-y-4 pl-4 mb-4'>
					<li>
						<strong>Layouts Fluidos:</strong> En lugar de usar anchos fijos en
						píxeles (<code>width: 960px;</code>), usamos unidades relativas como
						porcentajes (<code>width: 80%;</code>). Esto permite que el layout
						se estire o encoja con el tamaño de la pantalla.
					</li>
					<li>
						<strong>Imágenes Flexibles:</strong> Para evitar que las imágenes se
						desborden de sus contenedores en pantallas pequeñas, usamos una
						regla de oro:
						<CodeBlock
							language='css'
							codeString={`img {
  max-width: 100%;
  height: auto;
}`}
						/>
						<p className='mt-2'>
							Esto asegura que una imagen nunca será más ancha que su
							contenedor, pero puede encogerse si es necesario, manteniendo su
							proporción.
						</p>
					</li>
					<li>
						<strong>Media Queries:</strong> La herramienta más poderosa. Nos
						permiten aplicar bloques de CSS solo cuando se cumplen ciertas
						condiciones, generalmente relacionadas con el tamaño de la pantalla.
					</li>
				</ol>
			</section>

			<section>
				<h3 className='text-2xl font-semibold mb-3'>
					3. Media Queries: CSS con Superpoderes
				</h3>
				<p className='mb-4'>
					Una media query es una "pregunta" que le hacemos al navegador sobre el
					dispositivo en el que se está mostrando la página. Si la respuesta es
					"sí", se aplican los estilos dentro de la query.
				</p>
				<p className='mb-4'>
					La sintaxis básica es{" "}
					<code>
						@media (condición) {"{"} /* reglas CSS aquí */ {"}"}
					</code>
					.
				</p>

				<h4 className='text-xl font-semibold mt-6 mb-2'>
					`max-width` vs `min-width`
				</h4>
				<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
					<li>
						<strong>`max-width` (Desktop-First):</strong> Los estilos se aplican
						si el ancho de la ventana es <strong>menor o igual</strong> al valor
						especificado. Es como decir "para pantallas pequeñas".
						<CodeBlock
							language='css'
							codeString={`/* Estilos base para escritorio */
.contenedor {
  width: 900px;
}

/* Si la pantalla es de 600px o menos, aplica esto */
@media (max-width: 600px) {
  .contenedor {
    width: 100%;
  }
}`}
						/>
					</li>
					<li>
						<strong>`min-width` (Mobile-First):</strong> Los estilos se aplican
						si el ancho de la ventana es <strong>mayor o igual</strong> al valor
						especificado. Es como decir "a partir de este tamaño de pantalla".
						<CodeBlock
							language='css'
							codeString={`/* Estilos base para móvil */
.contenedor {
  width: 100%;
}

/* Si la pantalla es de 768px o más, aplica esto */
@media (min-width: 768px) {
  .contenedor {
    width: 750px;
  }
}`}
						/>
					</li>
				</ul>
				<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
					<p className='font-semibold text-blue-800 dark:text-blue-300'>
						Mobile-First es el Estándar Moderno
					</p>
					<p className='text-blue-700 dark:text-gray-300'>
						Diseñar primero para pantallas pequeñas (móviles) y luego añadir
						complejidad para pantallas más grandes (usando `min-width`) es la
						práctica recomendada. Obliga a priorizar el contenido y suele
						resultar en un CSS más limpio y un mejor rendimiento en dispositivos
						móviles.
					</p>
				</div>
			</section>

			<section>
				<h3 className='text-2xl font-semibold mb-3'>
					Bento Grids en la Práctica: Un Ejemplo Guiado
				</h3>
				<p className='mb-4'>
					Para finalizar este módulo, exploraremos una técnica de maquetación
					moderna y popular: la <strong>Bento Grid</strong>. Inspirada en las
					cajas de almuerzo japonesas, esta técnica organiza el contenido en una
					cuadrícula asimétrica que es visualmente atractiva y funcional. Es
					ideal para dashboards, portafolios y páginas de inicio. Usaremos CSS
					Grid, específicamente la propiedad <code>grid-template-areas</code>,
					para construir un layout responsivo.
				</p>
				<p className='mb-4'>
					Construiremos una estructura de layout como la que se muestra en el
					popular artículo de freeCodeCamp:
				</p>
				<img
					src={
						process.env.NODE_ENV === "production"
							? "https://1rqzd6uwpqe1a157.public.blob.vercel-storage.com/conf18/desktop-design-to-recreate.webp"
							: "conf18/desktop-design-to-recreate.webp"
					}
					alt='Exemplo de uma grelha bento com conteúdo'
					className='rounded-lg border my-4 mx-auto block max-w-full'
				/>

				<h4 className='text-xl font-semibold mt-8 mb-2'>
					Paso 1: La Estructura HTML
				</h4>
				<p className='mb-4'>
					La base es un contenedor principal (
					<code>&lt;div class="grid"&gt;</code>) y varios elementos hijos (
					<code>&lt;div class="item"&gt;</code>) que serán las celdas de nuestra
					cuadrícula.
				</p>
				<CodeBlock
					language='html'
					codeString={`<div class="grid">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>`}
				/>

				<h4 className='text-xl font-semibold mt-8 mb-2'>
					Paso 2: Definiendo la Cuadrícula y las Áreas
				</h4>
				<p className='mb-4'>
					Utilizamos <code>display: grid</code> para crear la cuadrícula y{" "}
					<code>grid-template-areas</code> para nombrar las áreas y definir su
					posición. Cada string representa una fila, y cada nombre un área de la
					cuadrícula.
				</p>
				<CodeBlock
					language='css'
					codeString={`.grid {
  background: hsl(36, 100%, 99%);
	margin: 0 auto;
	width: 100%;
	max-width: 1500px;
	height: 1000px;
	padding: 1vw;
	display: grid;
	gap: 1.5vw;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: auto;
	grid-template-areas:
		"hero   hero   hero"
		"hero   hero   hero"
		"aside2 aside2 aside2"
		"aside3 aside3 aside3"
		"aside4 aside4 aside4"
		"aside5 aside5 aside5";
}`}
				/>

				<h4 className='text-xl font-semibold mt-8 mb-2'>
					Paso 3: Asignando los Items a las Áreas
				</h4>
				<p className='mb-4'>
					Finalmente, asignamos cada item a su área correspondiente usando la
					propiedad <code>grid-area</code>. Usamos la pseudo-clase{" "}
					<code>:nth-child</code> para apuntar a cada item en orden.
				</p>
				<CodeBlock
					language='css'
					codeString={`.item {
  border: 2px solid #464545;
  border-radius: 5px;
}

.grid .item:nth-child(1) { grid-area: hero; }
.grid .item:nth-child(2) { grid-area: aside2; }
.grid .item:nth-child(3) { grid-area: aside3; }
.grid .item:nth-child(4) { grid-area: aside4; }
.grid .item:nth-child(5) { grid-area: aside5; }`}
				/>
				<p className='mt-4'>
					Con esto, hemos logrado la estructura base de nuestro layout.
				</p>

				<h4 className='text-xl font-semibold mt-8 mb-2'>
					Paso 4: Añadiendo Responsividad con Media Queries
				</h4>
				<p className='mb-4'>
					La gran ventaja de <code>grid-template-areas</code> es que reorganizar
					el layout para diferentes tamaños de pantalla es tan simple como
					redefinir el string de las áreas.
				</p>
				<CodeBlock
					language='css'
					codeString={`/* Para pantallas de tableta */
@media screen and (min-width: 750px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
		grid-template-areas:
			"hero   hero   hero   hero"
			"hero   hero   hero   hero"
			"aside2 aside2 aside2 aside3"
			"aside4 aside4 aside5 aside5";
  }
}

/* Para pantallas grandes (PC) */
@media screen and (min-width: 1000px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
     	"hero   hero   aside2"
			"hero   hero   aside2"
			"hero   hero   aside2"
			"hero   hero   aside2"
			"aside3 aside4 aside5 ";
  }
}`}
				/>

				<h4 className='text-xl font-semibold mt-8 mb-2'>
					Resultado Final Interactivo
				</h4>
				<p className='mb-4'>
					Aquí puedes ver el resultado final. Redimensiona tu navegador para
					observar cómo la cuadrícula se adapta a los diferentes breakpoints
					definidos en las media queries.
				</p>
				<div className='not-prose'>
					<style dangerouslySetInnerHTML={{ __html: bentoGridStyles }} />
					<div className='bento-grid-final'>
						<div className='item'>Hero</div>
						<div className='item'>Aside 2</div>
						<div className='item'>Aside 3</div>
						<div className='item'>Aside 4</div>
						<div className='item'>Aside 5</div>
					</div>
				</div>
			</section>

			<section>
				<h3 className='text-2xl font-semibold mb-3'>
					📝 Tarea: Haz Responsiva tu Galería
				</h3>
				<p className='mb-4'>
					Vamos a tomar un layout simple de tarjetas y hacerlo responsivo usando
					el enfoque Mobile-First.
				</p>
				<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
					<li>
						<strong>HTML:</strong> Crea un `div` contenedor que envuelva varias
						tarjetas (puedes usar las de la lección anterior).
					</li>
					<li>
						<strong>CSS (Mobile-First):</strong>
						<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
							<li>
								Estiliza tus tarjetas para que por defecto se muestren una
								debajo de la otra, ocupando la mayor parte del ancho disponible.
								Este será tu diseño para pantallas pequeñas.
							</li>
						</ul>
					</li>
					<li>
						<strong>CSS (Media Query):</strong>
						<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
							<li>
								Elige un "breakpoint" (un punto de ruptura), por ejemplo,{" "}
								<code>768px</code>.
							</li>
							<li>
								Crea una media query:{" "}
								<code>@media (min-width: 768px) {"{ ... }"}</code>.
							</li>
							<li>
								Dentro de esta media query, cambia los estilos del contenedor de
								las tarjetas para que se muestren en una cuadrícula. Por
								ejemplo, puedes usar{" "}
								<code>display: grid; grid-template-columns: 1fr 1fr;</code> para
								crear una cuadrícula de dos columnas.
							</li>
							<li>
								(Opcional) Añade otro breakpoint para pantallas más grandes (ej.{" "}
								<code>1024px</code>) y cambia la cuadrícula a tres columnas
								(`grid-template-columns: 1fr 1fr 1fr;`).
							</li>
						</ul>
					</li>
					<li>
						Abre tu página en el navegador y redimensiona la ventana. Deberías
						ver cómo el layout cambia de una columna a dos (y luego a tres) a
						medida que la pantalla se hace más ancha.
					</li>
				</ol>
			</section>
		</div>
	);
};

export default Lecture18Es;
