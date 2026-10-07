import {
	Calendar,
	Check,
	ChevronDown,
	EyeOff,
	FormInput,
	Hash,
	KeyRound,
	Lock,
	Mail,
	MessageSquare,
	MousePointerClick,
	Palette,
	RotateCcw,
	Search,
	Send,
	Sparkles,
	Tag,
	Upload,
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

const CheckItem = ({ children }: { children: React.ReactNode }) => (
	<li className="flex items-start gap-2">
		<Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" aria-hidden />
		<span>{children}</span>
	</li>
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

const Lecture6Es = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Formularios · la puerta de entrada del usuario
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				¡Llegamos a nuestra sexta conferencia! Hoy nos adentramos en uno de los
				elementos más interactivos y cruciales de la web: los formularios. Los
				formularios son la principal herramienta para que los usuarios nos
				envíen información, desde un simple inicio de sesión hasta un complejo
				proceso de compra.
			</p>
		</section>

		<section>
			<SectionTitle index={1}>
				Elemento &lt;form&gt; y su Propósito
			</SectionTitle>
			<p className="mb-4">
				La etiqueta <Code>&lt;form&gt;</Code> es el contenedor de todos los
				elementos de un formulario. Agrupa los campos (
				<Code>&lt;input&gt;</Code>, <Code>&lt;textarea&gt;</Code>, etc.) y
				define cómo y a dónde se enviará la información al presionar el botón de
				envío.
			</p>
			<div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
				<div className="flex-1 rounded-xl bg-blue-50 p-3 text-center text-sm font-semibold text-blue-800 dark:bg-blue-950/40 dark:text-blue-200">
					<FormInput className="mx-auto mb-1 h-5 w-5" aria-hidden />
					Usuario completa campos
				</div>
				<div className="text-center font-bold text-gray-400" aria-hidden>
					→
				</div>
				<div className="flex-1 rounded-xl bg-purple-50 p-3 text-center text-sm font-semibold text-purple-800 dark:bg-purple-950/40 dark:text-purple-200">
					<MousePointerClick className="mx-auto mb-1 h-5 w-5" aria-hidden />
					&lt;form&gt; agrupa y envía
				</div>
				<div className="text-center font-bold text-gray-400" aria-hidden>
					→
				</div>
				<div className="flex-1 rounded-xl bg-green-50 p-3 text-center text-sm font-semibold text-green-800 dark:bg-green-950/40 dark:text-green-200">
					<Send className="mx-auto mb-1 h-5 w-5" aria-hidden />
					Servidor recibe datos
				</div>
			</div>
		</section>

		<section>
			<SectionTitle index={2}>
				Etiquetas &lt;label&gt; y su Asociación con los Campos
			</SectionTitle>
			<p className="mb-4">
				Cada campo debe tener una etiqueta que indique qué información se
				espera. <Code>&lt;label&gt;</Code> es la forma semánticamente correcta y
				es <strong>crucial para la accesibilidad</strong>: los lectores de
				pantalla la anuncian al llegar al campo.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Tag className="h-5 w-5" aria-hidden />}
					title='for="nombreUsuario"'
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					En la <Code>&lt;label&gt;</Code>: apunta al campo por su nombre.
				</ConceptCard>
				<ConceptCard
					icon={<FormInput className="h-5 w-5" aria-hidden />}
					title='id="nombreUsuario"'
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					En el <Code>&lt;input&gt;</Code>: el identificador único del campo.
				</ConceptCard>
			</div>
			<Callout variant="tip" title="Deben ser idénticos">
				El valor de <Code>for</Code> debe ser exactamente igual al{" "}
				<Code>id</Code>. Bonus de usabilidad: al hacer clic en la etiqueta, el
				foco salta automáticamente al campo. Probalo acá abajo 👇
			</Callout>
			<div className="mb-4">
				<Preview label="Vista previa · hacé clic en la etiqueta Nombre">
					<form onSubmit={(e) => e.preventDefault()}>
						<label htmlFor="demo-nombre" className={labelClass}>
							Nombre:
						</label>
						<input
							id="demo-nombre"
							name="demo-nombre"
							type="text"
							placeholder="Escribí tu nombre y clickeá la etiqueta"
							className={inputClass}
						/>
					</form>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<form>
  <label for="nombreUsuario">Nombre:</label>
  <input type="text" id="nombreUsuario" name="usuario">
</form>`}
			/>
		</section>

		<section>
			<SectionTitle index={3}>
				Campos de Entrada (&lt;input&gt;): Tipos Comunes
			</SectionTitle>
			<p className="mb-4">
				La etiqueta <Code>&lt;input&gt;</Code> es la más versátil. Es de
				autocierre y su comportamiento cambia según el atributo{" "}
				<Code>type</Code>. Probá cada uno en vivo:
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<Preview label='type="text" · una línea (por defecto)'>
					<label htmlFor="t-text" className={labelClass}>
						Nombre de usuario
					</label>
					<input
						id="t-text"
						name="t-text"
						type="text"
						placeholder="juan_perez"
						className={inputClass}
					/>
				</Preview>
				<Preview label='type="email" · valida el formato'>
					<label htmlFor="t-email" className={labelClass}>
						Correo <Mail className="inline h-3.5 w-3.5" aria-hidden />
					</label>
					<input
						id="t-email"
						name="t-email"
						type="email"
						placeholder="juan@ejemplo.com"
						className={inputClass}
					/>
				</Preview>
				<Preview label='type="password" · oculta caracteres'>
					<label htmlFor="t-pass" className={labelClass}>
						Contraseña <Lock className="inline h-3.5 w-3.5" aria-hidden />
					</label>
					<input
						id="t-pass"
						name="t-pass"
						type="password"
						placeholder="••••••••"
						className={inputClass}
					/>
				</Preview>
				<Preview label='type="number" · con flechas'>
					<label htmlFor="t-num" className={labelClass}>
						Cantidad <Hash className="inline h-3.5 w-3.5" aria-hidden />
					</label>
					<input
						id="t-num"
						name="t-num"
						type="number"
						placeholder="1"
						className={inputClass}
					/>
				</Preview>
				<Preview label='type="date" · calendario'>
					<label htmlFor="t-date" className={labelClass}>
						Fecha de nacimiento{" "}
						<Calendar className="inline h-3.5 w-3.5" aria-hidden />
					</label>
					<input id="t-date" name="t-date" type="date" className={inputClass} />
				</Preview>
				<Preview label='type="color" · selector'>
					<label htmlFor="t-color" className={labelClass}>
						Color favorito{" "}
						<Palette className="inline h-3.5 w-3.5" aria-hidden />
					</label>
					<input
						id="t-color"
						name="t-color"
						type="color"
						defaultValue="#3b82f6"
						className="h-10 w-full cursor-pointer rounded-lg border border-gray-300 bg-white p-1 dark:border-gray-600 dark:bg-gray-900"
					/>
				</Preview>
				<Preview label='type="file" · archivo del dispositivo'>
					<label htmlFor="t-file" className={labelClass}>
						Adjuntar <Upload className="inline h-3.5 w-3.5" aria-hidden />
					</label>
					<input
						id="t-file"
						name="t-file"
						type="file"
						className="w-full text-sm text-gray-600 file:mr-3 file:rounded-lg file:border-0 file:bg-blue-600 file:px-3 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-blue-700 dark:text-gray-300"
					/>
				</Preview>
				<Preview label='type="search" · optimizado para búsquedas'>
					<label htmlFor="t-search" className={labelClass}>
						Buscar <Search className="inline h-3.5 w-3.5" aria-hidden />
					</label>
					<input
						id="t-search"
						name="t-search"
						type="search"
						placeholder="Buscar productos…"
						className={inputClass}
					/>
				</Preview>
				<Preview label='type="submit" y "reset" · botones'>
					<div className="flex flex-wrap gap-3">
						<input
							type="submit"
							value="Enviar Formulario"
							className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
						/>
						<input
							type="reset"
							value="Restablecer"
							className="cursor-pointer rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
						/>
					</div>
				</Preview>
				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/60">
					<p className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
						<EyeOff className="h-4 w-4 text-gray-400" aria-hidden />
						type="hidden" · invisible
					</p>
					<p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
						Campo no visible para enviar datos adicionales al servidor. No se
						renderiza: solo existe en el código.
					</p>
					<p className="mt-2">
						<Code>
							&lt;input type="hidden" name="origen" value="galeria"&gt;
						</Code>
					</p>
				</div>
			</div>
			<div className="mt-4 flex flex-wrap gap-2">
				<RotateCcw className="h-4 w-4 text-gray-400" aria-hidden />
				<p className="text-sm text-gray-500 dark:text-gray-400">
					Tip: el botón <Code>reset</Code> devuelve los campos a sus valores
					iniciales — probalo después de escribir algo arriba.
				</p>
			</div>
			<CodeBlock
				language="html"
				codeString={`<input type="email" id="correo" name="correo">
<input type="date" id="fecha_nac" name="fecha_nac">
<input type="submit" value="Enviar Formulario">`}
			/>
		</section>

		<section>
			<SectionTitle index={4}>Otros Campos de Formulario</SectionTitle>
			<p className="mb-4">
				Además de <Code>&lt;input&gt;</Code>, existen otros elementos
				importantes:
			</p>

			<Subhead>&lt;textarea&gt; · texto multilínea</Subhead>
			<p className="mb-4">
				Para comentarios o mensajes. A diferencia de <Code>&lt;input&gt;</Code>,
				tiene etiqueta de apertura y cierre.
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · área real, escribí algo">
					<label htmlFor="demo-comentario" className={labelClass}>
						Comentario{" "}
						<MessageSquare className="inline h-3.5 w-3.5" aria-hidden />
					</label>
					<textarea
						id="demo-comentario"
						name="demo-comentario"
						rows={3}
						placeholder="Contanos qué te pareció la clase…"
						className={`${inputClass} resize-y`}
					/>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<label for="comentario">Comentario:</label>
<textarea id="comentario" name="comentario" rows="4" cols="50"></textarea>`}
			/>

			<Subhead>&lt;select&gt; · lista desplegable</Subhead>
			<p className="mb-4">
				Crea un menú desplegable. Cada opción es un <Code>&lt;option&gt;</Code>.
				Se pueden agrupar con <Code>&lt;optgroup&gt;</Code>.
			</p>
			<div className="mb-4">
				<Preview label="Vista previa · desplegable real">
					<label htmlFor="demo-pais" className={labelClass}>
						País
					</label>
					<select
						id="demo-pais"
						name="demo-pais"
						className={inputClass}
						defaultValue="es"
					>
						<optgroup label="América del Norte">
							<option value="mx">México</option>
							<option value="us">Estados Unidos</option>
						</optgroup>
						<optgroup label="Europa">
							<option value="es">España</option>
							<option value="fr">Francia</option>
						</optgroup>
					</select>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<label for="pais">País:</label>
<select id="pais" name="pais">
  <optgroup label="América del Norte">
    <option value="mx">México</option>
    <option value="us">Estados Unidos</option>
  </optgroup>
  <optgroup label="Europa">
    <option value="es">España</option>
    <option value="fr">Francia</option>
  </optgroup>
</select>`}
			/>
		</section>

		<section>
			<SectionTitle index={5}>Atributos Básicos e Importantes</SectionTitle>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<Search className="h-5 w-5" aria-hidden />}
					title="placeholder"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Texto de ayuda dentro del campo que desaparece al escribir.
				</ConceptCard>
				<ConceptCard
					icon={<FormInput className="h-5 w-5" aria-hidden />}
					title="value"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Define el valor inicial de un campo.
				</ConceptCard>
				<ConceptCard
					icon={<KeyRound className="h-5 w-5" aria-hidden />}
					title="name · ¡el más importante!"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					La “clave” del par clave-valor enviado al servidor.
				</ConceptCard>
			</div>
			<Callout variant="warning" title="Sin name no hay envío">
				Sin el atributo <Code>name</Code>, el dato de ese campo{" "}
				<strong>no se envía</strong> al servidor, aunque el usuario lo haya
				completado.
			</Callout>
			<CodeBlock
				language="html"
				codeString={`<input type="text" name="busqueda" placeholder="Buscar productos...">`}
			/>
			<div>
				<Preview label="Vista previa · ese mismo campo, en vivo">
					<label htmlFor="demo-busqueda" className={labelClass}>
						Búsqueda
					</label>
					<input
						id="demo-busqueda"
						name="busqueda"
						type="text"
						placeholder="Buscar productos..."
						className={inputClass}
					/>
				</Preview>
			</div>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
				<Send className="h-6 w-6 text-blue-500" aria-hidden />📝 Tarea:
				Formulario de Contacto
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Llegó la hora de crear tu primer formulario: uno de contacto básico con
				las etiquetas y atributos vistos.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Crea el Archivo">
					Crea <Code>contacto.html</Code>.
				</Step>
				<Step number={2} title="Estructura del Formulario">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							Empezá con <Code>&lt;form&gt;</Code>.
						</CheckItem>
						<CheckItem>
							Campo <strong>Nombre</strong> (<Code>type="text"</Code>).
						</CheckItem>
						<CheckItem>
							Campo <strong>Correo Electrónico</strong> (
							<Code>type="email"</Code>).
						</CheckItem>
						<CheckItem>
							<Code>&lt;select&gt;</Code> “Motivo de Contacto”: Consulta
							General, Soporte Técnico, Sugerencias.
						</CheckItem>
						<CheckItem>
							<Code>&lt;textarea&gt;</Code> para el mensaje.
						</CheckItem>
						<CheckItem>
							<strong>¡Asociación clave!</strong> Cada campo con su{" "}
							<Code>&lt;label&gt;</Code> (<Code>for</Code> + <Code>id</Code>).
						</CheckItem>
						<CheckItem>
							<Code>name</Code> único y descriptivo en cada campo.
						</CheckItem>
						<CheckItem>
							<Code>placeholder</Code> en textos y textarea.
						</CheckItem>
						<CheckItem>
							Botones <Code>type="submit"</Code> y <Code>type="reset"</Code>.
						</CheckItem>
					</ul>
				</Step>
				<Step number={3} title="Visualiza">
					Abre <Code>contacto.html</Code> con Live Server y clickeá las
					etiquetas para comprobar el foco.
				</Step>
			</ol>
			<Callout variant="success" title="Cierre">
				Primer formulario completo: etiquetas asociadas, nombres correctos y
				botones de envío y limpieza.
			</Callout>
			<p className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
				<ChevronDown className="h-4 w-4 shrink-0" aria-hidden />
				En la próxima conferencia: validaciones y más atributos.
			</p>
		</section>
	</div>
);

export default Lecture6Es;
