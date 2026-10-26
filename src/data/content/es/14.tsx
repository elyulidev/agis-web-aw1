import { Sparkles } from "lucide-react";
import { Callout } from "@/components/lecture/lecture-blocks";
import CodeTabs from "@/components/ui/code-tabs";

const Code = ({ children }: { children: React.ReactNode }) => (
	<code className="rounded-md bg-gray-200 px-1.5 py-1 font-mono text-sm text-pink-600 dark:bg-gray-700 dark:text-pink-400">
		{children}
	</code>
);

const Subhead = ({ children }: { children: React.ReactNode }) => (
	<p className="mt-8 mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
		<span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden />
		<span>{children}</span>
	</p>
);

const Preview = ({
	label,
	children,
}: {
	label: string;
	children: React.ReactNode;
}) => (
	<div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-5 dark:border-gray-600 dark:bg-gray-800/40">
		<p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
			{label}
		</p>
		<div className="text-gray-800 dark:text-gray-200">{children}</div>
	</div>
);

const Lecture14Es = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Módulo 3 · box model y posicionamiento
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Última conferencia del módulo: hoy rompemos el flujo normal. Cuando
				termines, superposiciones, menús desplegables y encabezados fijos dejan
				de ser magia.
			</p>
		</section>

		<section>
			<Subhead>
				Rompiendo las reglas: sacando elementos del flujo normal
			</Subhead>
			<p className="mb-4">
				Hemos dominado el modelo de caja y cómo los elementos se apilan y fluyen
				uno tras otro. Pero para diseños más complejos, como superposiciones,
				menús desplegables o encabezados fijos, necesitamos una forma de sacar a
				los elementos de este "flujo normal" del documento. Aquí es donde entra
				la propiedad <Code>position</Code>.
			</p>
		</section>

		<section>
			<Subhead>La propiedad `position` y las coordenadas</Subhead>
			<p className="mb-4">
				La propiedad <Code>position</Code>, junto con las propiedades de
				coordenadas <Code>top</Code>, <Code>right</Code>, <Code>bottom</Code> y{" "}
				<Code>left</Code>, nos permite colocar un elemento en cualquier lugar de
				la página.
			</p>

			<p className="mb-2 font-bold">
				<Code>position: static;</Code> (El Valor por Defecto)
			</p>
			<p className="mb-8">
				Todo elemento es <Code>static</Code> por defecto. Significa que sigue el
				flujo normal de la página. Las propiedades <Code>top</Code>,{" "}
				<Code>right</Code>, etc., no tienen ningún efecto sobre él.
			</p>

			<p className="mb-2 font-bold">
				<Code>position: relative;</Code> (El Punto de Partida)
			</p>
			<p className="mb-4">
				El elemento sigue ocupando su espacio en el flujo normal, pero ahora
				podemos "moverlo" o desplazarlo de su posición original usando las
				coordenadas. Lo más importante es que{" "}
				<strong>crea un contexto de posicionamiento</strong> para sus elementos
				hijos con <Code>position: absolute;</Code>.
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · relative: se desplaza, pero su hueco queda reservado">
					<style>{`.d14-c {
  display: inline-block; background-color: #ddd6fe; border: 1px solid #8b5cf6;
  padding: 4px 10px; font-size: 0.9rem; color: #1f2937;
}
.d14-c2 { position: relative; left: 30px; top: 10px; }`}</style>
					<div>
						<div className="d14-c">Caja 1: en su sitio</div>
						<div className="d14-c d14-c2">
							Caja 2: relative, left 30px, top 10px
						</div>
						<p className="mt-2 text-sm">
							El hueco de la caja 2 sigue reservado: solo se desplaza el dibujo,
							no la reserva de espacio.
						</p>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- La caja 2 requiere display: inline-block para verse alineada -->
<div class="caja">Caja 1: en su sitio</div>
<div class="caja caja-desplazada">Caja 2: relative, left 30px, top 10px</div>`}
				css={`.caja {
  display: inline-block; /* scaffolding para que el ejemplo se vea */
  background-color: #ddd6fe;
  border: 1px solid #8b5cf6;
  padding: 4px 10px;
  font-size: 0.9rem;
}
.caja-desplazada {
  position: relative; /* crea el contexto y permite moverla */
  left: 30px;
  top: 10px;
}`}
			/>

			<p className="mt-8 mb-2 font-bold">
				<Code>position: absolute;</Code> (El Elemento "Libre")
			</p>
			<p className="mb-4">
				Este es un cambio radical. El elemento es{" "}
				<strong>completamente removido</strong> del flujo del documento. Ya no
				ocupa espacio y los otros elementos se comportan como si no existiera.
				Se posiciona con respecto a su{" "}
				<strong>ancestro posicionado más cercano</strong> (cualquier ancestro
				cuya posición no sea <Code>static</Code>). Si no encuentra ninguno, se
				posiciona con respecto al <Code>&lt;body&gt;</Code>.
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · absolute: el badge flota sobre la esquina del botón">
					<style>{`.d14-padre { position: relative; display: inline-block; }
.d14-boton-msj { padding: 6px 12px; font-size: 0.9rem; border-radius: 8px; border: 1px solid #9ca3af; background-color: #f9fafb; color: #1f2937; }
.d14-badge { position: absolute; top: -10px; right: -10px; background-color: red; color: white; padding: 2px 7px; border-radius: 999px; font-size: 0.8rem; }`}</style>
					<div className="d14-padre">
						<button type="button" className="d14-boton-msj">
							Nuevo mensaje
						</button>
						<span className="d14-badge">3</span>
					</div>
					<p className="mt-2 text-sm">
						El contador rojo está fuera del flujo: flota sobre la esquina del
						botón sin empujar nada.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- El padre fija el contexto; el badge flota sobre una esquina -->
<div class="contenedor-padre">
  <button>Nuevo mensaje</button>
  <span class="badge">3</span>
</div>`}
				css={`.contenedor-padre {
  position: relative; /* Contexto de posicionamiento */
  display: inline-block;
}
.badge {
  position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    color: white;
    padding: 2px 7px;
    border-radius: 999px;
    font-size: 0.8rem;
}`}
			/>

			<p className="mt-8 mb-2 font-bold">
				<Code>position: fixed;</Code> (El Elemento "Pegado")
			</p>
			<p className="mb-4">
				También es removido del flujo normal, pero se posiciona con respecto a
				la <strong>ventana del navegador (viewport)</strong>. Esto significa que
				no se moverá aunque el usuario haga scroll en la página. Es perfecto
				para encabezados fijos, barras de cookies o botones de "volver arriba".
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · fixed: haz scroll DENTRO de la ventanita y el encabezado no se mueve">
					<iframe
						title="Demo de position fixed"
						className="h-[170px] w-full rounded-lg border border-gray-300 bg-white"
						srcDoc={`<!doctype html><html><head><style>
body { margin: 0; padding-top: 2.5rem; background-color: #fff; color: #1f2937; font-family: system-ui, sans-serif; }
p { margin: 0; padding: 8px 12px; font-size: 0.9rem; border-bottom: 1px dashed #e5e7eb; }
.encabezado-fijo { position: fixed; top: 0; left: 0; width: 100%; background-color: #2e86c1; color: white; padding: 8px 12px; font-size: 0.9rem; }
</style></head><body>
<header class="encabezado-fijo">Menú fijo (fixed, top: 0)</header>
<p id="arriba">Fila 1: haz scroll dentro de esta ventanita…</p>
<p>Fila 2: el contenido se mueve…</p>
<p>Fila 3: …pero el encabezado no…</p>
<p>Fila 4</p>
<p>Fila 5</p>
<p>Fila 6</p>
<p>Fila 7</p>
<p>Fila 8</p>
</body></html>`}
					/>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- El encabezado queda clavado arriba, aunque la página scrollee -->
<header class="encabezado-fijo">Menú fijo (fixed, top: 0)</header>
<p>Fila 1: haz scroll dentro de esta ventanita…</p>
<p>Fila 2: el contenido se mueve…</p>
<p>Fila 3: …pero el encabezado no…</p>
<p>Fila 4</p>
<p>Fila 5</p>
<p>Fila 6</p>
<p>Fila 7</p>
<p>Fila 8</p>`}
				css={`body {
  margin: 0;
  padding-top: 2.5rem; /* deja espacio para que la barra no tape la primera fila */
  min-height: 110vh; /* fuerza una página más alta que la ventana: garantiza el scroll */
  background-color: #fff;
  color: #1f2937;
  font-family: system-ui, sans-serif;
}
p {
  margin: 0;
  padding: 8px 12px;
  font-size: 0.9rem;
  border-bottom: 1px dashed #e5e7eb;
}
.encabezado-fijo {
  position: fixed; /* Respecto a la ventana, no al contenedor */
  top: 0;
  left: 0;
  width: 100%;
  background-color: #2e86c1;
  color: white;
  padding: 8px 12px;
  font-size: 0.9rem;
}`}
			/>

			<p className="mt-8 mb-2 font-bold">
				<Code>position: sticky;</Code> (El Híbrido Inteligente)
			</p>
			<p className="mb-4">
				Se comporta como <Code>relative</Code> hasta que el usuario hace scroll
				y el elemento alcanza un umbral definido por las coordenadas (ej.{" "}
				<Code>top: 0;</Code>). En ese momento, se comporta como{" "}
				<Code>fixed</Code>. Ideal para encabezados de sección o barras laterales
				que deben "pegarse" en la parte superior al hacer scroll.
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · sticky: haz scroll y mira cómo la caja se pega">
					<style>{`.d14-scroll { max-height: 150px; overflow-y: auto; border: 1px solid #d1d5db; border-radius: 8px; }
.d14-caja-sticky { position: sticky; top: 10px; background-color: #8e44ad; color: white; margin: 4px 8px; padding: 6px 10px; border-radius: 8px; font-size: 0.9rem; }
.d14-fila { margin: 0; padding: 8px 10px; font-size: 0.9rem; border-bottom: 1px dashed #f3f4f6; }`}</style>
					<div className="d14-scroll">
						<p className="d14-fila">Fila 1: sigue bajando…</p>
						<p className="d14-fila">
							Fila 2: la caja todavía viaja con el contenido…
						</p>
						<div className="d14-caja-sticky">Caja sticky (top: 10px)</div>
						<p className="d14-fila">
							Fila 3: …la caja ya se pegó en su posición…
						</p>
						<p className="d14-fila">Fila 4</p>
						<p className="d14-fila">Fila 5</p>
						<p className="d14-fila">Fila 6</p>
						<p className="d14-fila">Fila 7</p>
						<p className="d14-fila">Fila 8</p>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="lista-scroll">
  <p class="fila">Fila 1: sigue bajando…</p>
  <p class="fila">Fila 2: la caja todavía viaja con el contenido…</p>
  <div class="caja-sticky">Caja sticky (top: 10px)</div>
  <p class="fila">Fila 3: …la caja ya se pegó en su posición…</p>
  <p class="fila">Fila 4</p>
  <p class="fila">Fila 5</p>
  <p class="fila">Fila 6</p>
  <p class="fila">Fila 7</p>
  <p class="fila">Fila 8</p>
</div>`}
				css={`.lista-scroll {
  max-height: 150px;
  overflow-y: auto; /* el scroll interno gatilla el sticky */
  border: 1px solid #d1d5db;
  border-radius: 8px;
}
.caja-sticky {
  position: sticky; /* relative hasta cruzar top: 10px, entonces se pega */
  top: 10px;
  background-color: #8e44ad;
  color: white;
  margin: 4px 8px;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 0.9rem;
}
.fila { margin: 0; padding: 8px 10px; font-size: 0.9rem; border-bottom: 1px dashed #f3f4f6; }`}
			/>
		</section>

		<section>
			<Subhead>Apilando elementos: `z-index`</Subhead>
			<p className="mb-4">
				Cuando los elementos se posicionan fuera del flujo normal, pueden
				superponerse. La propiedad <Code>z-index</Code> controla el orden de
				apilamiento en el eje Z (la profundidad).
			</p>
			<p className="mb-4">
				Un elemento con un <Code>z-index</Code> más alto aparecerá encima de un
				elemento con un <Code>z-index</Code> más bajo. Importante:{" "}
				<strong>
					<Code>z-index</Code> solo funciona en elementos posicionados
				</strong>{" "}
				(aquellos cuya posición no es <Code>static</Code>).
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · el eje Z visto desde arriba">
					<style>{`.d14-tablero { position: relative; height: 170px; }
.d14-ficha { position: absolute; width: 110px; height: 110px; border-radius: 12px; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; text-align: center; padding: 6px; }
.d14-f1 { z-index: 1; background-color: #34d399; top: 12px; left: 12px; }
.d14-f2 { z-index: 2; background-color: #f59e0b; top: 40px; left: 52px; }
.d14-f3 { z-index: 3; background-color: #ef4444; top: 68px; left: 92px; }`}</style>
					<div className="d14-tablero">
						<div className="d14-ficha d14-f1">z-index: 1</div>
						<div className="d14-ficha d14-f2">z-index: 2</div>
						<div className="d14-ficha d14-f3">z-index: 3</div>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="tablero">
  <div class="ficha ficha-1">z-index: 1</div>
  <div class="ficha ficha-2">z-index: 2</div>
  <div class="ficha ficha-3">z-index: 3</div>
</div>`}
				css={`/* El contenedor también debe estar posicionado para que absolute anide bien */
.tablero {
  position: relative;
  height: 170px;
}

/* Sin position: absolute las fichas no se superponen y z-index no actúa */
.ficha {
  position: absolute;
  width: 110px;
  height: 110px;
  border-radius: 12px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  text-align: center;
  padding: 6px;
}

.ficha-1 { z-index: 1; background-color: #34d399; top: 12px; left: 12px; }
.ficha-2 { z-index: 2; background-color: #f59e0b; top: 40px; left: 52px; }
.ficha-3 { z-index: 3; background-color: #ef4444; top: 68px; left: 92px; }
`}
			/>
		</section>

		<section>
			<Subhead>Una nota sobre `float` (Legado)</Subhead>
			<p className="mb-4">
				Antes de que existieran herramientas modernas como Flexbox y Grid, la
				propiedad <Code>float</Code> (con valores <Code>left</Code> o{" "}
				<Code>right</Code>) era la principal forma de crear diseños de columnas
				y hacer que el texto fluyera alrededor de las imágenes.
			</p>
			<p className="mb-4">
				Hoy en día, su uso para la maquetación general de una página se
				considera una <strong>práctica obsoleta</strong>. Sin embargo, todavía
				es útil para su propósito original: hacer que un elemento, como una
				imagen, "flote" dentro de un bloque de texto.
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · el propósito original de float">
					<style>{`.d14-imagen {
  float: left; width: 64px; height: 64px; background-color: #7c3aed; color: white;
  border-radius: 10px; display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; margin: 0 12px 8px 0;
}`}</style>
					<p className="text-sm leading-relaxed">
						<span className="d14-imagen">IMG</span>
						El elemento flotante deja que el texto lo rodee, como una foto
						impresa.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<p>
  <span class="miniatura">IMG</span>
  El elemento flotante deja que el texto lo rodee, como una foto impresa.
</p>`}
				css={`/* El float original: texto alrededor de la imagen */
.miniatura {
  float: left; /* o right */
  width: 64px;
  height: 64px;
  margin: 0 12px 8px 0;
  background-color: #7c3aed;
  color: white;
  border-radius: 10px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}`}
			/>
		</section>

		<section>
			<Subhead>📝 Tarea: Creando un "Modal" Básico</Subhead>
			<p className="mb-4">
				Vamos a aplicar lo aprendido sobre posicionamiento y{" "}
				<Code>z-index</Code> para crear la estructura de una ventana modal, un
				componente de UI muy común.
			</p>
			<p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
				Partimos de este HTML y este esqueleto de CSS; completa donde los pasos
				te pidan:
			</p>
			<CodeTabs
				html={`<div class="overlay"></div>
<div class="modal-content">
  <h2>¿Confirmar?</h2>
  <p>Ventana modal sobre un fondo oscuro.</p>
</div>`}
				css={`/* Paso 2: el overlay cubre toda la pantalla */
.overlay {
  /* position: fixed; */
  /* top: 0; left: 0; width: 100%; height: 100%; */
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* z-index: 10; */
}

/* Paso 3: el contenido del modal flota encima, centrado */
.modal-content {
  /* position: fixed; */
  /* top: 50%; left: 50%; transform: translate(-50%, -50%); */
  /* background-color: white; */
  /* padding: 24px; */
  /* width: 320px; */
  /* z-index: 20; */
}`}
			/>
			<ol className="list-decimal list-inside space-y-2 pl-4 mb-4 mt-4">
				<li>
					<strong>HTML:</strong> Ya arrancaste con dos <Code>&lt;div&gt;</Code>{" "}
					en tu HTML: uno con la clase <Code>overlay</Code> y otro con la clase{" "}
					<Code>modal-content</Code>.
				</li>
				<li>
					<strong>CSS para el Overlay:</strong>
					<ul className="list-disc list-inside space-y-1 pl-6 my-2">
						<li>
							Dale a <Code>.overlay</Code> un <Code>position: fixed;</Code>.
						</li>
						<li>
							Haz que ocupe toda la pantalla usando{" "}
							<Code>top: 0; left: 0; width: 100%; height: 100%;</Code>.
						</li>
						<li>
							Dale un color de fondo semi-transparente, por ejemplo:{" "}
							<Code>background-color: rgba(0, 0, 0, 0.5);</Code>.
						</li>
						<li>
							Asígnale un <Code>z-index: 10;</Code>.
						</li>
					</ul>
				</li>
				<li>
					<strong>CSS para el Contenido del Modal:</strong>
					<ul className="list-disc list-inside space-y-1 pl-6 my-2">
						<li>
							Dale a <Code>.modal-content</Code> un{" "}
							<Code>position: fixed;</Code>.
						</li>
						<li>
							Céntralo en la pantalla. (Una forma simple es:{" "}
							<Code>
								top: 50%; left: 50%; transform: translate(-50%, -50%);
							</Code>
							. La propiedad <Code>transform</Code> la veremos más adelante,
							pero por ahora puedes usarla).
						</li>
						<li>
							Dale un <Code>background-color: white;</Code>, un{" "}
							<Code>padding</Code>, y un <Code>width</Code>.
						</li>
						<li>
							Asígnale un <Code>z-index: 20;</Code> para que aparezca por encima
							del overlay.
						</li>
					</ul>
				</li>
				<li>
					Observa el resultado. Deberías tener una ventana de contenido flotando
					sobre un fondo oscuro que cubre toda la página.
				</li>
			</ol>
			<Callout variant="info" title="Cierre del módulo 3">
				Con esto ya calculas cajas (box model), pones bloques en el centro
				(margin: auto) y rompes el flujo (position y z-index). El módulo 4 te
				espera con colores, unidades y variables.
			</Callout>
		</section>
	</div>
);

export default Lecture14Es;
