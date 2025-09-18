import CodeBlock from "@/components/ui/code-block";

const Lecture9Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Para Além do Básico: Seletores Relacionais
			</h3>
			<p className='mb-4'>
				Aprendemos a selecionar elementos pelo seu tipo, classe ou ID. Agora,
				vamos dar um passo em frente e aprender a selecionar elementos com base
				na sua <strong>relação e posição</strong> na árvore do DOM. Isto dá-nos
				um controlo muito mais preciso.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Combinadores: Selecionando por Relação
			</h3>
			<p className='mb-4'>
				Os combinadores permitem-nos selecionar elementos com base na sua
				relação com outro elemento.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>Seletor Descendente (espaço)</strong>: Seleciona todos os
					elementos que são descendentes (filhos, netos, etc.) de um elemento
					especificado.
					<CodeBlock
						language='css'
						codeString={`/* Seleciona TODOS os <a> dentro de um <nav> */
nav a {
  color: teal;
}`}
					/>
				</li>
				<li>
					<strong>Seletor de Filho Direto (`&gt;`)</strong>: Seleciona apenas os
					elementos que são filhos diretos de um elemento especificado.
					<CodeBlock
						language='css'
						codeString={`/* Seleciona apenas os <li> que são filhos diretos de um <ul> */
ul > li {
  list-style-type: square;
}`}
					/>
				</li>
				<li>
					<strong>Seletor de Irmão Adjacente (`+`)</strong>: Seleciona o
					elemento que vem <strong>imediatamente a seguir</strong> a outro
					elemento especificado, se ambos forem irmãos.
					<CodeBlock
						language='css'
						codeString={`/* Seleciona o primeiro <p> que vem logo após um <h1> */
h1 + p {
  margin-top: 0;
  font-style: italic;
}`}
					/>
				</li>
				<li>
					<strong>Seletor de Irmãos Gerais (`~`)</strong>: Seleciona{" "}
					<strong>todos</strong> os irmãos que vêm depois de um elemento
					especificado.
					<CodeBlock
						language='css'
						codeString={`/* Seleciona todos os <p> que são irmãos e vêm depois de um <h2> */
h2 ~ p {
  text-indent: 2em;
}`}
					/>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>3. Seletor de Atributo</h3>
			<p className='mb-4'>
				Podemos selecionar elementos com base na presença ou no valor dos seus
				atributos HTML.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<code>[attribute]</code>: Seleciona elementos que têm o atributo. Ex:{" "}
					<code>a[target]</code>.
				</li>
				<li>
					<code>[attribute="value"]</code>: Seleciona elementos onde o atributo
					tem um valor exato. Ex: <code>input[type="submit"]</code>.
				</li>
				<li>
					<code>[attribute*="value"]</code>: Seleciona elementos onde o valor do
					atributo contém uma substring. Ex: <code>a[href*="google.com"]</code>.
				</li>
				<li>
					<code>[attribute^="value"]</code>: Seleciona elementos onde o valor do
					atributo começa com a string. Ex: <code>a[href^="https"]</code>.
				</li>
				<li>
					<code>[attribute$="value"]</code>: Seleciona elementos onde o valor do
					atributo termina com a string. Ex: <code>img[src$=".pdf"]</code>.
				</li>
			</ul>
			<CodeBlock
				language='css'
				codeString={`/* Estiliza todos os links que abrem num novo separador */
a[target="_blank"] {
  background-color: yellow;
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Pseudo-classes: Selecionando por Estado e Posição
			</h3>
			<p className='mb-4'>
				As pseudo-classes são palavras-chave que se adicionam aos seletores para
				especificar um estado especial ou uma posição do elemento selecionado.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Pseudo-classes de Interação do Utilizador
			</h4>
			<p className='mb-4'>
				São fundamentais para a interatividade e o feedback visual.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`:hover`</strong>: Aplica-se quando o utilizador passa o
					cursor sobre um elemento.
				</li>
				<li>
					<strong>`:active`</strong>: Aplica-se enquanto o utilizador está a
					clicar num elemento.
				</li>
				<li>
					<strong>`:focus`</strong>: Aplica-se a elementos de formulário (como{" "}
					<code>&lt;input&gt;</code>) quando estão selecionados.
				</li>
			</ul>
			<CodeBlock
				language='css'
				codeString={`button {
  background-color: #3498db;
  color: white;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}

input:focus {
  outline: 2px solid #3498db;
  border-color: #3498db;
}`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Pseudo-classes Estruturais
			</h4>
			<p className='mb-4'>
				Selecionam elementos com base na sua posição na árvore do DOM.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`:first-child`</strong>: Seleciona o primeiro elemento entre
					um grupo de irmãos.
				</li>
				<li>
					<strong>`:last-child`</strong>: Seleciona o último elemento.
				</li>
				<li>
					<strong>`:nth-child(n)`</strong>: O mais versátil. Seleciona elementos
					com base numa fórmula.
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							<code>:nth-child(3)</code>: Seleciona o terceiro filho.
						</li>
						<li>
							<code>:nth-child(odd)</code>: Seleciona os filhos ímpares (1, 3,
							5...).
						</li>
						<li>
							<code>:nth-child(even)</code>: Seleciona os filhos pares (2, 4,
							6...).
						</li>
						<li>
							<code>:nth-child(2n+1)</code>: Outra forma de selecionar os
							ímpares.
						</li>
					</ul>
				</li>
			</ul>
			<CodeBlock
				language='css'
				codeString={`/* Remove a borda superior do primeiro item de uma lista */
li:first-child {
  border-top: none;
}

/* Estilo "zebra" para as linhas de uma tabela */
tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Menu Interativo e Lista Estilizada
			</h3>
			<p className='mb-4'>
				Vamos aplicar estes novos seletores para criar um menu de navegação que
				reage ao utilizador e uma lista com estilo alternado.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Crie o HTML:</strong> Crie uma estrutura de navegação com uma{" "}
					<code>&lt;nav&gt;</code> que contenha uma <code>&lt;ul&gt;</code>, e
					esta, por sua vez, vários <code>&lt;li&gt;</code> com links{" "}
					<code>&lt;a&gt;</code> dentro. Adicione também uma lista ordenada{" "}
					<code>&lt;ol&gt;</code> com vários itens.
				</li>
				<li>
					<strong>Estilize o Menu:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Use um <strong>seletor descendente</strong> (`nav a`) para dar um
							estilo base a todos os links do menu.
						</li>
						<li>
							Use a pseudo-classe <strong>`:hover`</strong> nos links para que
							mudem de cor ou sejam sublinhados quando o utilizador passar o
							cursor sobre eles.
						</li>
					</ul>
				</li>
				<li>
					<strong>Estilize a Lista Ordenada:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Use <strong>`:nth-child(odd)`</strong> para dar uma cor de fundo
							às linhas ímpares da sua lista ordenada.
						</li>
						<li>
							Use <strong>`:first-child`</strong> para tornar o texto do
							primeiro item a negrito (<code>font-weight: bold;</code>).
						</li>
						<li>
							Use <strong>`:last-child`</strong> para adicionar uma borda
							inferior especial apenas ao último item.
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture9Pt;
