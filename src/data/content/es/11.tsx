import {
	Award,
	Flag,
	Hash,
	Layers,
	Sparkles,
	Trophy,
	Type,
} from "lucide-react";
import {
	Callout,
	ConceptCard,
	SectionTitle,
} from "@/components/lecture/lecture-blocks";
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

const Lecture11Es = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Módulo 3 · box model y posicionamiento
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Arrancamos el módulo 3 con la lección que separa a quien copia CSS de
				quien lo domina: qué regla gana cuando varias apuntan al mismo elemento.
			</p>
		</section>

		<section>
			<SectionTitle index={1}>
				Resolviendo el Misterio: ¿Por qué mi CSS no funciona?
			</SectionTitle>
			<p className="mb-4">
				Hemos llegado a una de las lecciones más importantes y a menudo confusas
				de CSS. Ya sabemos cómo escribir reglas básicas, pero ¿qué sucede cuando
				dos o más reglas apuntan al mismo elemento y definen la misma propiedad
				con valores diferentes?
			</p>
			<p className="mb-4">
				El navegador no se confunde; sigue un algoritmo estricto para determinar
				qué regla "gana". Entender la{" "}
				<strong>Cascada, la Especificidad y la Herencia</strong> es la clave
				para dejar de luchar contra tu CSS y empezar a controlarlo con
				precisión.
			</p>
		</section>

		<section>
			<SectionTitle index={2}>
				Profundizando en la Cascada y la Herencia
			</SectionTitle>
			<p className="mb-4">
				Estos dos conceptos, que introdujimos brevemente, forman la base de cómo
				fluyen los estilos.
			</p>
			<div className="mb-4 grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Layers className="h-5 w-5" aria-hidden />}
					title="Cascada"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Se refiere al orden en que se declaran las reglas. Si todas las demás
					condiciones son iguales,{" "}
					<strong>la última regla declarada gana</strong>. Esto significa que el
					orden de tus etiquetas <Code>&lt;link&gt;</Code> en el HTML o el orden
					de las reglas dentro de un archivo CSS es crucial.
				</ConceptCard>
				<ConceptCard
					icon={<Flag className="h-5 w-5" aria-hidden />}
					title="Herencia"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Recuerda que los elementos hijos heredan ciertas propiedades de sus
					padres, como <Code>color</Code> y <Code>font-family</Code>. Si no
					aplicas un color a un <Code>&lt;p&gt;</Code>, tomará el color de su
					padre, por ejemplo, el <Code>&lt;body&gt;</Code>.
				</ConceptCard>
			</div>
			<div className="mb-4">
				<Preview label="Vista previa · la cascada en acción">
					<style>{`.d11-cascada {
  color: #e74c3c; /* Primera regla: rojo */
}
.d11-cascada {
  color: #16a085; /* Misma especificidad: la última gana */
}`}</style>
					<p className="d11-cascada font-mono text-sm">
						Este texto declara el color dos veces: rojo primero, verde después.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<p class="cascada">
  Este texto declara el color dos veces: rojo primero, verde después.
</p>`}
				css={`/* Mismo selector, misma especificidad... */
.cascada {
  color: #e74c3c; /* rojo */
}

/* ...y gana la regla que aparece ÚLTIMA en la cascada */
.cascada {
  color: #16a085; /* verde */
}`}
			/>
			<p className="mt-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
				Y la herencia se ve así: el padre declara el color y la tipografía, y
				los hijos lo reciben gratis:
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · herencia del color del padre">
					<style>{`.d11-padre { color: #8e44ad; font-family: Georgia, serif; }`}</style>
					<div className="d11-padre">
						Soy el padre y declaro la tipografía.
						<p className="mt-2">
							Y yo, el párrafo hijo, heredé tu color y tu font-family.
						</p>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="padre">
  Soy el padre y declaro la tipografía.
  <p>Y yo, el párrafo hijo, heredé tu color y tu font-family.</p>
</div>`}
				css={`/* Solo el padre declara estilos... */
.padre {
  color: #8e44ad;
  font-family: Georgia, serif;
}

/* ...el hijo no tiene ninguna regla: hereda color y font-family */`}
			/>
		</section>

		<section>
			<SectionTitle index={3}>
				Especificidad: El Sistema de Puntuación de CSS
			</SectionTitle>
			<p className="mb-4">
				Cuando el orden no es suficiente para desempatar, el navegador calcula
				la <strong>especificidad</strong> de cada selector. El selector con la
				puntuación más alta gana, sin importar el orden. Podemos imaginar un
				sistema de puntos:
			</p>
			<div className="mb-4 grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Trophy className="h-5 w-5" aria-hidden />}
					title="Estilos en línea"
					iconClassName="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
				>
					<Code>style="..."</Code>: <strong>1000 puntos</strong>. Son los más
					poderosos.
				</ConceptCard>
				<ConceptCard
					icon={<Award className="h-5 w-5" aria-hidden />}
					title="IDs"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					<Code>#id</Code>: <strong>100 puntos</strong> por cada ID en el
					selector.
				</ConceptCard>
				<ConceptCard
					icon={<Hash className="h-5 w-5" aria-hidden />}
					title="Clases, Atributos y Pseudo-clases"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					<Code>.clase</Code>, <Code>[type="..."]</Code>, <Code>:hover</Code>:{" "}
					<strong>10 puntos</strong> por cada uno.
				</ConceptCard>
				<ConceptCard
					icon={<Type className="h-5 w-5" aria-hidden />}
					title="Elementos y Pseudo-elementos"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					<Code>div</Code>, <Code>p</Code>, <Code>::before</Code>:{" "}
					<strong>1 punto</strong> por cada uno.
				</ConceptCard>
			</div>
			<p>
				El selector universal (`*`), los combinadores (`&gt;`, `+`, `~`) y la
				pseudo-clase `:not()` no añaden puntos.
			</p>

			<Subhead>Ejemplos de Cálculo</Subhead>
			<div className="overflow-x-auto my-6 rounded-lg border">
				<table className="min-w-full text-sm">
					<thead className="bg-gray-50 dark:bg-gray-800">
						<tr>
							<th className="p-3 text-left">Selector</th>
							<th className="p-3 text-left">
								Cálculo (IDs, Clases, Elementos)
							</th>
							<th className="p-3 text-left">Puntuación Total</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
						<tr className="dark:bg-gray-900">
							<td className="p-3 font-mono">p</td>
							<td className="p-3">0, 0, 1</td>
							<td className="p-3">1</td>
						</tr>
						<tr className="dark:bg-gray-900/50">
							<td className="p-3 font-mono">.btn-principal</td>
							<td className="p-3">0, 1, 0</td>
							<td className="p-3">10</td>
						</tr>
						<tr className="dark:bg-gray-900">
							<td className="p-3 font-mono">#menu-principal</td>
							<td className="p-3">1, 0, 0</td>
							<td className="p-3">100</td>
						</tr>
						<tr className="dark:bg-gray-900/50">
							<td className="p-3 font-mono">#nav .link:hover</td>
							<td className="p-3">1, 2, 0</td>
							<td className="p-3">120</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="mb-4">
				<Preview label="Vista previa · batalla etiqueta vs clase vs ID">
					<style>{`p.d11-destacado { color: #16a085; } /* etiqueta + clase = 11 */
.d11-destacado { color: #e67e22; } /* clase = 10 */
#d11-titulo { color: #2980b9; } /* ID = 100: gana aunque se declare primero */`}</style>
					<p id="d11-titulo" className="d11-destacado font-medium">
						Tres selectores me apuntan a la vez: etiqueta, clase e ID.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<p id="titulo" class="destacado">
  Tres selectores me apuntan a la vez: etiqueta, clase e ID.
</p>`}
				css={`/* 1 punto: etiqueta, más 10 puntos: clase = 11 */
p.destacado {
  color: #16a085;
}

/* 10 puntos: solo la clase = 10 */
.destacado {
  color: #e67e22;
}

/* 100 puntos: el ID gana aunque aparezca primero en la cascada */
#titulo {
  color: #2980b9;
}`}
			/>
		</section>

		<section>
			<SectionTitle index={4}>La Opción Nuclear: `!important`</SectionTitle>
			<p className="mb-4">
				Si añades <Code>!important</Code> al final de una declaración de estilo,
				esa declaración anulará a cualquier otra, sin importar su especificidad.
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · !important se impone a los puntos">
					<style>{`.d11-campo .d11-cap { color: #e74c3c; } /* 20 puntos: dos clases */
.d11-campo p { color: #2e86c1 !important; } /* 11 puntos, pero con !important */`}</style>
					<div className="d11-campo">
						<p className="d11-cap font-mono text-sm">
							La regla de 20 puntos es más específica, pero pierde contra el
							azul porque lleva un !important.
						</p>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="campo">
  <p class="cap">La regla de 20 puntos es más específica, pero pierde contra el azul porque lleva un !important.</p>
</div>`}
				css={`/* 20 puntos: dos clases */
.campo .cap {
  color: #e74c3c;
}

/* 11 puntos (campo + p), pero con !important: gana */
.campo p {
  color: #2e86c1 !important;
}`}
			/>
			<Callout variant="warning" title="¡Úsalo con extrema precaución!">
				<Code>!important</Code> es a menudo una señal de que la estructura de tu
				CSS es demasiado compleja o "sucia". Rompe la cascada natural y hace que
				la depuración sea una pesadilla. Evítalo siempre que sea posible y
				resérvalo para casos muy específicos, como anular estilos de terceros.
			</Callout>
		</section>

		<section>
			<SectionTitle index={5}>📝 Tarea: Detective de CSS</SectionTitle>
			<p className="mb-4">
				Tu misión es analizar el siguiente HTML y CSS y predecir el resultado
				final.
			</p>
			<CodeTabs
				html={`<div class="container">
  <p id="texto-clave" class="parrafo" style="color: purple;">
    Este es un párrafo muy importante.
  </p>
</div>`}
				css={`/* Regla 1 */
.container p {
  color: blue;
}

/* Regla 2 */
#texto-clave {
  color: green;
}

/* Regla 3 */
p.parrafo {
  color: red;
}`}
			/>
			<p className="mt-4">
				Analiza las tres reglas CSS y el estilo en línea. Basándote en la
				cascada y la especificidad, responde:
			</p>
			<ol className="list-decimal list-inside space-y-2 pl-4 mb-4">
				<li>¿Qué regla tiene la mayor especificidad? ¿Y la menor?</li>
				<li>¿De qué color final será el texto del párrafo?</li>
				<li>Explica por qué ese color gana la "batalla de estilos".</li>
			</ol>
		</section>
	</div>
);

export default Lecture11Es;
