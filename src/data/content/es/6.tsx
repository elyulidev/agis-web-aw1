import CodeBlock from "@/components/ui/code-block";

const Lecture6Es = () => (
	<div className='space-y-8'>
		<section>
			<p>
				¡Llegamos a nuestra sexta conferencia! Hoy nos adentramos en uno de los
				elementos más interactivos y cruciales de la web: los formularios. Los
				formularios son la principal herramienta para que los usuarios nos
				envíen información, desde un simple inicio de sesión hasta un complejo
				proceso de compra.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Elemento &lt;form&gt; y su Propósito
			</h3>
			<p className='mb-4'>
				La etiqueta <code>&lt;form&gt;</code> es el contenedor de todos los
				elementos de un formulario. Su función es agrupar los campos de entrada
				(<code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, etc.) y
				definir cómo y a dónde se enviará la información cuando el usuario
				presione el botón de envío.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Etiquetas &lt;label&gt; y su Asociación con los Campos
			</h3>
			<p className='mb-4'>
				Cada campo de entrada debe tener una etiqueta asociada para indicar qué
				información se espera del usuario. La etiqueta{" "}
				<code>&lt;label&gt;</code> es semánticamente la forma correcta de
				hacerlo y es <strong>crucial para la accesibilidad</strong>, ya que los
				lectores de pantalla la anuncian cuando el usuario llega al campo.
			</p>
			<p className='mb-4'>
				Para asociar una <code>&lt;label&gt;</code> con un campo, se utiliza el
				atributo <code>for</code> en la etiqueta y el atributo <code>id</code>{" "}
				en el campo de entrada. El valor de <code>for</code> debe ser
				exactamente el mismo que el valor de <code>id</code>. Esta vinculación
				también mejora la usabilidad: al hacer clic en la etiqueta, el foco se
				mueve automáticamente al campo correspondiente.
			</p>
			<CodeBlock
				language='html'
				codeString={`<form>
  <label for="nombreUsuario">Nombre:</label>
  <input type="text" id="nombreUsuario" name="usuario">
</form>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Campos de Entrada (&lt;input&gt;): Tipos Comunes
			</h3>
			<p className='mb-4'>
				La etiqueta <code>&lt;input&gt;</code> es la más versátil. Es una
				etiqueta de autocierre y su comportamiento cambia según el valor de su
				atributo <code>type</code>.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<code>text</code>: Un campo de texto de una sola línea (valor por
					defecto).
				</li>
				<li>
					<code>email</code>: Específico para correos electrónicos. Los
					navegadores pueden validar su formato.
				</li>
				<li>
					<code>password</code>: Oculta los caracteres que el usuario escribe.
				</li>
				<li>
					<code>number</code>: Para entradas numéricas, con flechas para
					incrementar/decrementar.
				</li>
				<li>
					<code>date</code>: Proporciona una interfaz de calendario para
					seleccionar una fecha.
				</li>
				<li>
					<code>color</code>: Muestra un selector de color.
				</li>
				<li>
					<code>file</code>: Permite al usuario seleccionar un archivo de su
					dispositivo.
				</li>
				<li>
					<code>submit</code>: Crea un botón que envía los datos del formulario.
				</li>
				<li>
					<code>reset</code>: Crea un botón que restablece los campos a sus
					valores iniciales.
				</li>
				<li>
					<code>search</code>: Similar a <code>text</code>, pero optimizado para
					búsquedas.
				</li>
				<li>
					<code>hidden</code>: Un campo no visible, útil para enviar datos
					adicionales.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<input type="email" id="correo" name="correo">
<input type="date" id="fecha_nac" name="fecha_nac">
<input type="submit" value="Enviar Formulario">`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Otros Campos de Formulario
			</h3>
			<p className='mb-4'>
				Además de <code>&lt;input&gt;</code>, existen otros elementos
				importantes:
			</p>
			<h4 className='text-xl font-semibold mt-6 mb-2'>&lt;textarea&gt;</h4>
			<p className='mb-4'>
				Para campos de texto de múltiples líneas, como comentarios o mensajes. A
				diferencia de <code>&lt;input&gt;</code>, tiene etiqueta de apertura y
				cierre.
			</p>
			<CodeBlock
				language='html'
				codeString={`<label for="comentario">Comentario:</label>
<textarea id="comentario" name="comentario" rows="4" cols="50"></textarea>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				&lt;select&gt; (Lista desplegable)
			</h4>
			<p className='mb-4'>
				Crea un menú desplegable. Cada opción se define con la etiqueta{" "}
				<code>&lt;option&gt;</code>. Se pueden agrupar opciones con{" "}
				<code>&lt;optgroup&gt;</code>.
			</p>
			<CodeBlock
				language='html'
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
			<h3 className='text-2xl font-semibold mb-3'>
				5. Atributos Básicos e Importantes
			</h3>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>placeholder:</strong> Muestra un texto de ayuda dentro del
					campo que desaparece al escribir.
				</li>
				<li>
					<strong>value:</strong> Define el valor inicial de un campo.
				</li>
				<li>
					<strong>name:</strong> ¡El más importante para el envío de datos!
					Asigna un nombre al campo, que se usará como la "clave" en el par
					clave-valor que se envía al servidor.{" "}
					<strong>
						Sin el atributo <code>name</code>, el dato de ese campo no se envía.
					</strong>
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<input type="text" name="busqueda" placeholder="Buscar productos...">`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarea: Formulario de Contacto
			</h3>
			<p className='mb-4'>
				Llegó la hora de crear tu primer formulario. Construirás un formulario
				de contacto básico, aplicando las etiquetas y atributos que hemos visto.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Crea el Archivo:</strong> Crea un nuevo archivo llamado{" "}
					<code>contacto.html</code>.
				</li>
				<li>
					<strong>Estructura del Formulario:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Comienza con una etiqueta <code>&lt;form&gt;</code>.
						</li>
						<li>
							Añade un campo para el <strong>Nombre</strong> (
							<code>type="text"</code>).
						</li>
						<li>
							Añade un campo para el <strong>Correo Electrónico</strong> (
							<code>type="email"</code>).
						</li>
						<li>
							Añade una <strong>lista desplegable</strong> (
							<code>&lt;select&gt;</code>) para el "Motivo de Contacto", con
							opciones como "Consulta General", "Soporte Técnico" y
							"Sugerencias".
						</li>
						<li>
							Añade un <strong>área de texto</strong> (
							<code>&lt;textarea&gt;</code>) para que el usuario escriba su
							mensaje.
						</li>
						<li>
							<strong>¡Asociación Clave!</strong> Asegúrate de que cada campo
							tenga una <code>&lt;label&gt;</code> asociada correctamente usando
							los atributos <code>for</code> y <code>id</code>.
						</li>
						<li>
							Añade un atributo <code>name</code> único y descriptivo a cada
							campo que deba enviar datos (nombre, email, select, textarea).
						</li>
						<li>
							Utiliza el atributo <code>placeholder</code> en los campos de
							texto y en el textarea para guiar al usuario.
						</li>
						<li>
							Finaliza con un botón de <strong>Envío</strong> (
							<code>type="submit"</code>) y un botón de <strong>Limpiar</strong>{" "}
							(<code>type="reset"</code>).
						</li>
					</ul>
				</li>
				<li>
					<strong>Visualiza:</strong> Abre <code>contacto.html</code> con Live
					Server. Haz clic en las etiquetas para comprobar que enfocan los
					campos correctos.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture6Es;
