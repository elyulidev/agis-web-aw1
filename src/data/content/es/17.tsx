import { SectionTitle } from "@/components/lecture/lecture-blocks";
import CodeBlock from "@/components/ui/code-block";
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

const Lecture17Es = () => (
	<div className="space-y-8">
		<section>
			<SectionTitle index={1}>
				Dando Vida a la Web: Movimiento y Dinamismo
			</SectionTitle>
			<p className="mb-4">
				Una página web estática puede ser informativa, pero el movimiento sutil
				y con propósito puede mejorar drásticamente la experiencia del usuario.
				CSS nos proporciona dos herramientas poderosas para añadir dinamismo:{" "}
				<strong>Transiciones</strong>, para animar suavemente los cambios de
				estado, y <strong>Transformaciones</strong>, para alterar la forma y
				posición de un elemento.
			</p>
		</section>

		<section>
			<SectionTitle index={2}>
				Transiciones: Animando Cambios de Estado
			</SectionTitle>
			<p className="mb-4">
				La propiedad <Code>transition</Code> nos permite definir cómo un
				elemento debe cambiar de un estado a otro de forma gradual, en lugar de
				instantáneamente. Es perfecta para usarla con pseudo-clases como{" "}
				<Code>:hover</Code> o cuando se añaden clases con JavaScript.
			</p>

			<Subhead>
				La diferencia la marca <Code>transition</Code>
			</Subhead>

			<div className="mb-4">
				<Preview label="Vista previa · pasa el cursor por ambas cartas">
					<style>{`.d17-carta {
  width: 130px; padding: 12px 10px; border-radius: 10px; text-align: center;
  background-color: #3498db; color: white; font-size: 0.85rem;
  cursor: pointer;
}
.d17-sin { background-color: #3498db; }
.d17-sin:hover { background-color: #e74c3c; }
.d17-con { transition: background-color 0.6s ease; }
.d17-con:hover { background-color: #e74c3c; }
.d17-fila { display: flex; flex-wrap: wrap; gap: 16px; }`}</style>
					<div className="d17-fila">
						<div className="d17-carta d17-sin">sin transition</div>
						<div className="d17-carta d17-con">con transition 0.6s</div>
					</div>
					<p className="mt-2 text-sm">
						Ambas cambian de azul a rojo al pasar el cursor, pero la segunda lo
						hace de forma gradual porque el cambio dura <Code>0.6s</Code>.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- Dos cartas iguales: la segunda declara transition en su estado base -->
<div class="fila">
  <div class="carta sin-transition">sin transition</div>
  <div class="carta con-transition">con transition 0.6s</div>
</div>`}
				css={`.fila { display: flex; flex-wrap: wrap; gap: 16px; }
.carta {
  width: 130px; padding: 12px 10px; border-radius: 10px; text-align: center;
  background-color: #3498db; color: white; font-size: 0.85rem;
  cursor: pointer;
}
.sin-transition:hover { background-color: #e74c3c; } /* cambio instantáneo */
.con-transition { transition: background-color 0.6s ease; } /* el cambio se anima */
.con-transition:hover { background-color: #e74c3c; }`}
			/>

			<Subhead>Propiedades de la Transición</Subhead>
			<ul className="list-none space-y-4 pl-0 mb-4 [&>li]:relative [&>li]:pl-7 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.5em] [&>li]:before:h-2.5 [&>li]:before:w-2.5 [&>li]:before:rounded-full [&>li]:before:bg-blue-500">
				<li>
					<strong>
						<Code>transition-property</Code>
					</strong>
					: La propiedad CSS que queremos animar (ej.{" "}
					<Code>background-color</Code>, <Code>transform</Code>).
				</li>
				<li>
					<strong>
						<Code>transition-duration</Code>
					</strong>
					: El tiempo que debe durar la animación (ej. <Code>0.3s</Code> o{" "}
					<Code>300ms</Code>).
				</li>
				<li>
					<strong>
						<Code>transition-timing-function</Code>
					</strong>
					: La "curva de aceleración" de la animación (ej. <Code>ease-in</Code>,{" "}
					<Code>ease-out</Code>, <Code>linear</Code>).
				</li>
				<li>
					<strong>
						<Code>transition-delay</Code>
					</strong>
					: Un retraso opcional antes de que comience la animación.
				</li>
			</ul>

			<Subhead>
				Atajo <Code>transition</Code>
			</Subhead>
			<p className="mb-4">
				Normalmente, se usa el atajo para combinar estas propiedades.
			</p>
			<CodeBlock
				language="css"
				codeString={`/* Sintaxis: transition: <propiedad> <duración> <función-tiempo> <retraso>; */

.boton {
  background-color: #3498db;
  transform: scale(1);
  /* Definimos la transición en el estado base */
  transition: background-color 0.3s ease-out, transform 0.3s ease-out;
}

.boton:hover {
  background-color: #2980b9;
  transform: scale(1.1); /* Hacemos el botón un 10% más grande */
}`}
			/>
		</section>

		<section>
			<SectionTitle index={3}>
				Transformaciones 2D: Manipulando la Geometría
			</SectionTitle>
			<p className="mb-4">
				La propiedad <Code>transform</Code> nos permite modificar visualmente un
				elemento sin afectar el espacio que ocupa en el flujo del documento. Los
				otros elementos no se moverán para hacerle sitio.
			</p>

			<div className="mb-4">
				<Preview label="Vista previa · cuatro cajas con la misma transformación aplicada">
					<style>{`.d17-caja {
  width: 64px; height: 64px; border-radius: 8px;
  background-image: repeating-linear-gradient(45deg, #38bdf8 0 8px, #0ea5e9 8px 16px);
  border: 2px solid #0369a1;
}
.d17-tf-translate { transform: translate(20px, -8px); }
.d17-tf-rotate { transform: rotate(20deg); }
.d17-tf-scale { transform: scale(1.3); }
.d17-tf-skew { transform: skewX(-15deg); }
.d17-fila { display: flex; flex-wrap: wrap; gap: 22px; align-items: flex-start; padding-top: 14px; }
.d17-etiqueta { font-size: 0.75rem; margin-top: 6px; color: #1f2937; }`}</style>
					<p className="text-sm mb-2">
						La caja original está a la izquierda; las demás aplican su{" "}
						<Code>transform</Code> desde la misma posición sin desplazar el
						resto del contenido.
					</p>
					<div className="d17-fila">
						<div>
							<div className="d17-caja" />
							<p className="d17-etiqueta">original</p>
						</div>
						<div>
							<div className="d17-caja d17-tf-translate" />
							<p className="d17-etiqueta">translate(20px, -8px)</p>
						</div>
						<div>
							<div className="d17-caja d17-tf-rotate" />
							<p className="d17-etiqueta">rotate(20deg)</p>
						</div>
						<div>
							<div className="d17-caja d17-tf-scale" />
							<p className="d17-etiqueta">scale(1.3)</p>
						</div>
						<div>
							<div className="d17-caja d17-tf-skew" />
							<p className="d17-etiqueta">skewX(-15deg)</p>
						</div>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- Cuatro cajas: la base y las cuatro funciones de transformación -->
<div class="fila">
  <div><div class="caja"></div><p class="etiqueta">original</p></div>
  <div><div class="caja tf-translate"></div><p class="etiqueta">translate(20px, -8px)</p></div>
  <div><div class="caja tf-rotate"></div><p class="etiqueta">rotate(20deg)</p></div>
  <div><div class="caja tf-scale"></div><p class="etiqueta">scale(1.3)</p></div>
  <div><div class="caja tf-skew"></div><p class="etiqueta">skewX(-15deg)</p></div>
</div>`}
				css={`.fila { display: flex; flex-wrap: wrap; gap: 22px; align-items: flex-start; padding-top: 14px; }
.caja {
  width: 64px; height: 64px; border-radius: 8px;
  background-image: repeating-linear-gradient(45deg, #38bdf8 0 8px, #0ea5e9 8px 16px);
  border: 2px solid #0369a1;
}
.tf-translate { transform: translate(20px, -8px); }
.tf-rotate { transform: rotate(20deg); }
.tf-scale { transform: scale(1.3); }
.tf-skew { transform: skewX(-15deg); }
.etiqueta { font-size: 0.75rem; margin-top: 6px; color: #1f2937; }`}
			/>

			<Subhead>Funciones de Transformación Comunes</Subhead>
			<ul className="list-none space-y-4 pl-0 mb-4 [&>li]:relative [&>li]:pl-7 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.5em] [&>li]:before:h-2.5 [&>li]:before:w-2.5 [&>li]:before:rounded-full [&>li]:before:bg-blue-500">
				<li>
					<strong>
						<Code>translate(x, y)</Code>
					</strong>
					: Mueve el elemento en el plano.
					<Code>translateX()</Code> y <Code>translateY()</Code> son atajos.
					<CodeBlock
						language="css"
						codeString={`.elemento { transform: translate(50px, 20px); }`}
					/>
				</li>
				<li>
					<strong>
						<Code>rotate(ángulo)</Code>
					</strong>
					: Gira el elemento. El ángulo se especifica en grados (
					<Code>deg</Code>), radianes (<Code>rad</Code>) o vueltas (
					<Code>turn</Code>).
					<CodeBlock
						language="css"
						codeString={`.icono-refrescar:hover { transform: rotate(360deg); }`}
					/>
				</li>
				<li>
					<strong>
						<Code>scale(x, y)</Code>
					</strong>
					: Escala el elemento. <Code>scale(1)</Code> es el tamaño normal,{" "}
					<Code>scale(1.5)</Code> lo hace un 50% más grande,{" "}
					<Code>scale(0.5)</Code> lo hace un 50% más pequeño.{" "}
					<Code>scaleX()</Code> y <Code>scaleY()</Code> son atajos.
					<CodeBlock
						language="css"
						codeString={`.imagen-galeria:hover { transform: scale(1.05); }`}
					/>
				</li>
				<li>
					<strong>
						<Code>skew(x-ángulo, y-ángulo)</Code>
					</strong>
					: Inclina o sesga el elemento. <Code>skewX()</Code> y{" "}
					<Code>skewY()</Code> son atajos.
					<CodeBlock
						language="css"
						codeString={`.forma-decorativa { transform: skewX(-15deg); }`}
					/>
				</li>
			</ul>
			<p className="mb-4">
				Podemos combinar múltiples transformaciones en una sola declaración. El
				orden importa.
			</p>
			<CodeBlock
				language="css"
				codeString={`.elemento:hover {
  transform: rotate(10deg) scale(1.2);
}`}
			/>

			<Subhead>
				<Code>transform-origin</Code>
			</Subhead>
			<p className="mb-4">
				Por defecto, las rotaciones y escalados ocurren desde el centro del
				elemento (<Code>50% 50%</Code>). La propiedad{" "}
				<Code>transform-origin</Code> nos permite cambiar este punto de pivote.
			</p>

			<div className="mb-4">
				<Preview label="Vista previa · mismo rotate(30deg), distinto punto de pivote (el punto azul marca el origen)">
					<style>{`.d17-origen {
  position: relative; width: 120px; height: 90px;
  border: 1px dashed #94a3b8; border-radius: 8px; background-color: #f8fafc;
}
.d17-aguja {
  position: absolute; left: 14px; top: 14px; width: 48px; height: 60px;
  background-image: repeating-linear-gradient(0deg, #fbbf24 0 8px, #f59e0b 8px 16px);
  border: 2px solid #b45309; border-radius: 6px;
}
.d17-aguja-girada { transform: rotate(30deg); }
.d17-aguja-centro { transform-origin: center; }
.d17-aguja-base { transform-origin: bottom left; }
.d17-punto {
  position: absolute; width: 10px; height: 10px; border-radius: 50%;
  background-color: #2563eb; z-index: 2;
}
.d17-centro { left: 33px; top: 39px; }
.d17-base { left: 8px; top: 70px; }
.d17-fila { display: flex; gap: 16px; }
.d17-etiqueta { font-size: 0.75rem; margin-top: 6px; color: #1f2937; }`}</style>
					<div className="d17-fila">
						<div>
							<div className="d17-origen">
								<div className="d17-aguja d17-aguja-girada d17-aguja-centro" />
								<div className="d17-punto d17-centro" />
							</div>
							<p className="d17-etiqueta">transform-origin: center</p>
						</div>
						<div>
							<div className="d17-origen">
								<div className="d17-aguja d17-aguja-girada d17-aguja-base" />
								<div className="d17-punto d17-base" />
							</div>
							<p className="d17-etiqueta">transform-origin: bottom left</p>
						</div>
					</div>
					<p className="mt-2 text-sm">
						Mismo <Code>rotate(30deg)</Code> en ambas agujas, pero el pivote
						distinto cambia el recorrido completo: en el centro gira en el
						sitio; apoyada en la base, barre como el minutero.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- Dos agujas giradas 30deg con distinto punto de pivote, cada marcador azul señala el origen -->
<div class="fila">
  <div>
    <div class="origen">
      <div class="aguja aguja-girada aguja-centro"></div>
      <div class="punto punto-centro"></div>
    </div>
    <p class="etiqueta">transform-origin: center</p>
  </div>
  <div>
    <div class="origen">
      <div class="aguja aguja-girada aguja-base"></div>
      <div class="punto punto-base"></div>
    </div>
    <p class="etiqueta">transform-origin: bottom left</p>
  </div>
</div>`}
				css={`.fila { display: flex; gap: 16px; }
.origen {
  position: relative; width: 120px; height: 90px;
  border: 1px dashed #94a3b8; border-radius: 8px; background-color: #f8fafc;
}
.aguja {
  position: absolute; left: 14px; top: 14px; width: 48px; height: 60px;
  background-image: repeating-linear-gradient(0deg, #fbbf24 0 8px, #f59e0b 8px 16px);
  border: 2px solid #b45309; border-radius: 6px;
}
.aguja-girada { transform: rotate(30deg); }
.aguja-centro { transform-origin: center; }
.aguja-base { transform-origin: bottom left; }
.punto {
  position: absolute; width: 10px; height: 10px; border-radius: 50%;
  background-color: #2563eb; z-index: 2;
}
.punto-centro { left: 38px; top: 36px; }
.punto-base { left: 8px; top: 70px; }
.etiqueta { font-size: 0.75rem; margin-top: 6px; color: #1f2937; }`}
			/>

			<CodeBlock
				language="css"
				codeString={`.aguja-reloj {
  transform-origin: bottom center; /* El punto de rotación estará en la base */
}`}
			/>
		</section>

		<section>
			<SectionTitle index={4}>📝 Tarea: Tarjetas Interactivas</SectionTitle>
			<p className="mb-4">
				Vamos a crear un conjunto de tarjetas que reaccionen al pasar el cursor
				sobre ellas, combinando transiciones y transformaciones.
			</p>
			<ol className="list-decimal list-outside space-y-2 pl-5 mb-4 marker:font-bold marker:text-blue-600 dark:marker:text-blue-400">
				<li>
					<strong>HTML:</strong> Crea un <Code>div</Code> contenedor y dentro,
					tres <Code>div</Code>
					con la clase <Code>tarjeta</Code>. Cada tarjeta puede tener un{" "}
					<Code>h3</Code> y un <Code>p</Code>.
				</li>
				<li>
					<strong>CSS (Estado Base):</strong>
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							Estiliza las <Code>.tarjeta</Code> con un ancho, padding, borde,
							sombra (<Code>box-shadow</Code>), etc.
						</li>
						<li>
							<strong>Crucial:</strong> En el selector <Code>.tarjeta</Code>,
							añade una
							<Code>transition: all 0.4s ease;</Code> para que todos los cambios
							se animen suavemente.
						</li>
					</ul>
				</li>
				<li>
					<strong>CSS (Estado Hover):</strong>
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							Crea una regla para <Code>.tarjeta:hover</Code>.
						</li>
						<li>
							Dentro de esta regla, usa la propiedad <Code>transform</Code> para
							hacer que la tarjeta se mueva un poco hacia arriba y se agrande.
							Por ejemplo:{" "}
							<Code>transform: translateY(-10px) scale(1.03);</Code>
						</li>
						<li>
							Añade también un cambio en la <Code>box-shadow</Code> para hacerla
							más pronunciada en el estado hover.
						</li>
					</ul>
				</li>
				<li>
					¡Pasa el cursor sobre tus tarjetas! Deberías ver un efecto de
					elevación suave y atractivo.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture17Es;
