import {
	Ban,
	Braces,
	Eye,
	Hash,
	Lock,
	Palette,
	Ruler,
	Send,
	ShieldCheck,
	Sparkles,
	Zap,
} from "lucide-react";
import {
	Callout,
	ConceptCard,
	SectionTitle,
	Step,
} from "@/components/lecture/lecture-blocks";
import CodeBlock from "@/components/ui/code-block";

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

const inputClass =
	"w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100";
const labelClass =
	"mb-1 block text-xs font-semibold text-gray-600 dark:text-gray-300";

const Lecture7Es = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Formularios II · validación sin JavaScript + puente a CSS
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Cerramos el módulo de HTML y abrimos la puerta al siguiente: hoy le
				damos inteligencia a los formularios con atributos de HTML5 y, al final,
				presentamos a CSS, el lenguaje de la presentación.
			</p>
		</section>

		<section>
			<SectionTitle index={1}>Atributos que mejoran la usabilidad</SectionTitle>
			<p className="mb-4">
				Antes de validar, facilitemos la carga de datos. Estos cuatro atributos
				no validan: <strong>ayudan al usuario</strong> a completar el campo.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Eye className="h-5 w-5" aria-hidden />}
					title="placeholder"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Texto de ejemplo dentro del campo que desaparece al escribir. Es una
					pista, <strong>no una etiqueta</strong>.
				</ConceptCard>
				<ConceptCard
					icon={<Zap className="h-5 w-5" aria-hidden />}
					title="autocomplete"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Pista al navegador para autocompletar con datos guardados (por ejemplo{" "}
					<Code>email</Code>, <Code>name</Code>).
				</ConceptCard>
				<ConceptCard
					icon={<Ban className="h-5 w-5" aria-hidden />}
					title="disabled"
					iconClassName="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
				>
					Deshabilita el campo: no recibe foco, no se puede editar y su valor{" "}
					<strong>no se envía</strong>.
				</ConceptCard>
				<ConceptCard
					icon={<Lock className="h-5 w-5" aria-hidden />}
					title="readonly"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Solo lectura: no se puede editar, pero <strong>sí se envía</strong>{" "}
					con el formulario.
				</ConceptCard>
			</div>
			<Callout variant="tip" title="placeholder no reemplaza a label">
				Todo campo visible lleva su <Code>&lt;label&gt;</Code> asociado con{" "}
				<Code>for</Code> + <Code>id</Code>. El <Code>placeholder</Code> se borra
				al escribir y los lectores de pantalla no lo anuncian igual. Probalo acá
				abajo 👇
			</Callout>
			<div className="grid gap-4 sm:grid-cols-2">
				<Preview label="placeholder + autocomplete · en vivo">
					<form onSubmit={(e) => e.preventDefault()}>
						<label htmlFor="d7-email" className={labelClass}>
							Correo electrónico
						</label>
						<input
							id="d7-email"
							name="email"
							type="email"
							autoComplete="email"
							placeholder="tu@email.com"
							className={inputClass}
						/>
					</form>
				</Preview>
				<Preview label="disabled vs readonly · compará en vivo">
					<div className="space-y-3">
						<div>
							<label htmlFor="d7-dis" className={labelClass}>
								Deshabilitado (no se envía)
							</label>
							<input
								id="d7-dis"
								name="d7-dis"
								type="text"
								defaultValue="No editable"
								disabled
								className={`${inputClass} cursor-not-allowed opacity-60`}
							/>
						</div>
						<div>
							<label htmlFor="d7-ro" className={labelClass}>
								Solo lectura (sí se envía)
							</label>
							<input
								id="d7-ro"
								name="d7-ro"
								type="text"
								defaultValue="Valor de solo lectura"
								readOnly
								className={inputClass}
							/>
						</div>
					</div>
				</Preview>
			</div>
			<div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
				<table className="w-full text-left text-sm">
					<thead>
						<tr className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
							<th className="px-4 py-2">Atributo</th>
							<th className="px-4 py-2">¿Se puede editar?</th>
							<th className="px-4 py-2">¿Recibe foco?</th>
							<th className="px-4 py-2">¿Se envía?</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
						<tr>
							<td className="px-4 py-2 font-mono">disabled</td>
							<td className="px-4 py-2">No</td>
							<td className="px-4 py-2">No</td>
							<td className="px-4 py-2">No</td>
						</tr>
						<tr>
							<td className="px-4 py-2 font-mono">readonly</td>
							<td className="px-4 py-2">No</td>
							<td className="px-4 py-2">Sí</td>
							<td className="px-4 py-2">Sí</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="mt-4 space-y-4">
				<CodeBlock
					language="html"
					codeString={`<label for="email">Correo:</label>
<input type="email" id="email" name="email" placeholder="tu@email.com" autocomplete="email">`}
				/>
				<CodeBlock
					language="html"
					codeString={`<input type="text" value="No editable" disabled>
<input type="text" value="Valor de solo lectura" readonly>`}
				/>
			</div>
		</section>

		<section>
			<SectionTitle index={2}>Validación nativa del navegador</SectionTitle>
			<p className="mb-4">
				HTML5 deja que el navegador valide antes de enviar, mostrando mensajes
				de error <strong>sin escribir JavaScript</strong>. Si un campo no
				cumple, el envío se frena solo.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<ShieldCheck className="h-5 w-5" aria-hidden />}
					title="required"
					iconClassName="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
				>
					Campo obligatorio: el formulario no se envía si está vacío.
				</ConceptCard>
				<ConceptCard
					icon={<Ruler className="h-5 w-5" aria-hidden />}
					title="minlength / maxlength"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Número mínimo y máximo de caracteres en textos y contraseñas.
				</ConceptCard>
				<ConceptCard
					icon={<Hash className="h-5 w-5" aria-hidden />}
					title="min / max"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Valor numérico mínimo y máximo para <Code>type="number"</Code> o{" "}
					<Code>type="date"</Code>.
				</ConceptCard>
				<ConceptCard
					icon={<Braces className="h-5 w-5" aria-hidden />}
					title="pattern + title"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Expresión regular que el valor debe cumplir. <Code>title</Code>{" "}
					explica el formato esperado.
				</ConceptCard>
			</div>
			<Callout variant="info" title="Los mensajes los pone el navegador">
				El texto del error depende del navegador y su idioma, no de tu código.
				Por eso el atributo <Code>title</Code> es clave: le dice al usuario qué
				formato esperás. Intentá enviar este formulario vacío 👇
			</Callout>
			<div className="mb-4">
				<Preview label="Vista previa · formulario real, intentá enviarlo vacío">
					<form onSubmit={(e) => e.preventDefault()} className="space-y-3">
						<div>
							<label htmlFor="d7-nombre" className={labelClass}>
								Nombre (obligatorio)
							</label>
							<input
								id="d7-nombre"
								name="nombre"
								type="text"
								required
								placeholder="Tu nombre"
								className={inputClass}
							/>
						</div>
						<div>
							<label htmlFor="d7-pass" className={labelClass}>
								Contraseña (8 a 16 caracteres)
							</label>
							<input
								id="d7-pass"
								name="pass"
								type="password"
								minLength={8}
								maxLength={16}
								required
								placeholder="••••••••"
								className={inputClass}
							/>
						</div>
						<div>
							<label htmlFor="d7-edad" className={labelClass}>
								Edad (18 a 120)
							</label>
							<input
								id="d7-edad"
								name="edad"
								type="number"
								min={18}
								max={120}
								placeholder="25"
								className={inputClass}
							/>
						</div>
						<div>
							<label htmlFor="d7-cp" className={labelClass}>
								Código postal (5 dígitos)
							</label>
							<input
								id="d7-cp"
								name="cp"
								type="text"
								pattern="[0-9]{5}"
								title="Por favor, introduce 5 dígitos numéricos."
								placeholder="28001"
								className={inputClass}
							/>
						</div>
						<input
							type="submit"
							value="Enviar"
							className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
						/>
					</form>
				</Preview>
			</div>
			<div className="space-y-4">
				<CodeBlock
					language="html"
					codeString={`<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre" required>`}
				/>
				<CodeBlock
					language="html"
					codeString={`<label for="pass">Contraseña (8-16 caracteres):</label>
<input type="password" id="pass" name="pass" minlength="8" maxlength="16" required>`}
				/>
				<CodeBlock
					language="html"
					codeString={`<label for="edad">Edad (18+):</label>
<input type="number" id="edad" name="edad" min="18" max="120">`}
				/>
				<CodeBlock
					language="html"
					codeString={`<label for="cp">Código Postal (5 dígitos):</label>
<input type="text" id="cp" name="cp" pattern="[0-9]{5}" title="Por favor, introduce 5 dígitos numéricos.">`}
				/>
			</div>
		</section>

		<section>
			<SectionTitle index={3}>
				Puente a CSS: el arte de la presentación
			</SectionTitle>
			<p className="mb-4">
				Dominamos la estructura con HTML. Ahora entra{" "}
				<strong>CSS (Cascading Style Sheets)</strong>, el lenguaje que describe
				cómo se ven los elementos. El detalle de dónde se escribe lo vemos en la
				conferencia 8; hoy, la idea central.
			</p>
			<Callout variant="info" title="Separación de responsabilidades">
				HTML se encarga del <strong>contenido y la estructura</strong>. CSS se
				encarga de la <strong>presentación y el diseño</strong>. Separados, el
				código queda más limpio, fácil de mantener y más accesible.
			</Callout>
			<Subhead>Anatomía de una regla CSS</Subhead>
			<p className="mb-4">
				Toda regla tiene dos partes: <strong>selector</strong> (a quién
				estilizo) y <strong>bloque de declaración</strong> (propiedad, valor,
				punto y coma).
			</p>
			<div className="my-6 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800/60">
				<p className="mb-3 text-center font-mono text-sm font-semibold text-gray-700 dark:text-gray-200">
					Selector {"{"} Propiedad: Valor; {"}"}
				</p>
				<CodeBlock
					language="css"
					codeString={`h1 {
  color: blue;
  font-size: 24px;
}`}
				/>
				<p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
					Esta regla selecciona todos los <Code>&lt;h1&gt;</Code> y los pinta de
					azul con 24 píxeles.
				</p>
			</div>
			<div className="grid gap-4 sm:grid-cols-2">
				<Preview label="Sin CSS · solo HTML">
					<h1>Mi primer título</h1>
				</Preview>
				<Preview label="Con CSS · misma estructura, otra presentación">
					<h1 style={{ color: "#2563eb", fontSize: "24px" }}>
						Mi primer título
					</h1>
				</Preview>
			</div>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
				<Send className="h-6 w-6 text-blue-500" aria-hidden />📝 Tarea: un
				formulario robusto
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Aplicá lo nuevo sobre el <Code>contacto.html</Code> que creaste en la
				conferencia 6.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Hacelo obligatorio">
					Agregá <Code>required</Code> a nombre y email.
				</Step>
				<Step number={2} title="Mensaje con mínimo">
					En el <Code>&lt;textarea&gt;</Code> del mensaje agregá{" "}
					<Code>minlength="10"</Code>.
				</Step>
				<Step number={3} title="Teléfono con formato">
					Agregá un campo <Code>type="tel"</Code> con <Code>pattern</Code>{" "}
					simple (por ejemplo <Code>[0-9]{"{9}"}</Code> para 9 dígitos) y su{" "}
					<Code>title</Code> explicando el formato.
				</Step>
				<Step number={4} title="Probá la validación">
					Intentá enviar vacío o con datos malos: tenés que ver los errores del
					navegador <strong>sin JavaScript</strong>.
				</Step>
			</ol>
			<Callout variant="success" title="Cierre">
				Formularios con ayuda contextual y validación nativa, más el primer
				puente a CSS. En la conferencia 8 vemos dónde y cómo se escribe ese CSS.
				<div className="mt-2 flex items-center gap-2">
					<Palette className="h-4 w-4" aria-hidden />
					HTML estructura, CSS presenta.
				</div>
			</Callout>
		</section>
	</div>
);

export default Lecture7Es;
