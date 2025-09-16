import CodeBlock from "@/components/ui/code-block";

const Lecture3Content = () => (
	<div className='space-y-6'>
		<p>
			El texto es el componente más fundamental de la web. HTML nos proporciona
			una variedad de etiquetas para estructurar y dar significado semántico a
			nuestro contenido textual.
		</p>

		<h3 className='text-2xl font-semibold border-b pb-2'>Encabezados</h3>
		<p>
			Los encabezados se utilizan para definir la jerarquía de un documento.{" "}
			<code>&lt;h1&gt;</code> es el más importante y <code>&lt;h6&gt;</code> es
			el menos importante. Es crucial usarlos en orden para la accesibilidad y
			el SEO.
		</p>
		<CodeBlock
			codeString={`<h1>Encabezado Principal</h1>
<h2>Sub-encabezado</h2>
<h3>Encabezado de Nivel 3</h3>`}
			language='html'
		/>

		<h3 className='text-2xl font-semibold border-b pb-2'>
			Párrafos y Saltos de Línea
		</h3>
		<p>
			La etiqueta <code>&lt;p&gt;</code> se utiliza para párrafos. Los
			navegadores añaden automáticamente un espacio antes y después de cada
			párrafo. Para un salto de línea simple sin iniciar un nuevo párrafo, se
			utiliza la etiqueta <code>&lt;br&gt;</code>.
		</p>
		<CodeBlock
			codeString={`<p>Este es un párrafo de texto.</p>
<p>Este es otro párrafo.<br>Con un salto de línea en medio.</p>`}
			language='html'
		/>

		<h3 className='text-2xl font-semibold border-b pb-2'>
			Formato de Texto Semántico
		</h3>
		<p>HTML ofrece etiquetas para dar un significado especial al texto:</p>
		<ul className='list-disc list-inside space-y-2 pl-4'>
			<li>
				<code>&lt;strong&gt;</code>: Para texto con gran importancia.
				(Visualmente es negrita)
			</li>
			<li>
				<code>&lt;em&gt;</code>: Para texto enfatizado. (Visualmente es cursiva)
			</li>
			<li>
				<code>&lt;code&gt;</code>: Para fragmentos de código.
			</li>
			<li>
				<code>&lt;q&gt;</code>: Para citas cortas.
			</li>
			<li>
				<code>&lt;blockquote&gt;</code>: Para bloques de citas más largos.
			</li>
		</ul>
		<CodeBlock
			codeString={`<p><strong>Cuidado:</strong> ¡No tocar!</p>
<p>Esto es <em>realmente</em> importante.</p>
<p>La etiqueta HTML para el código es <code>&lt;code&gt;</code>.</p>`}
			language='html'
		/>
	</div>
);

export default Lecture3Content;
