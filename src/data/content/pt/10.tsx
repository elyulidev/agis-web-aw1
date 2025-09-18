import CodeBlock from "@/components/ui/code-block";

const Lecture10Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Pseudo-elementos: Estilizando Partes de um Elemento
			</h3>
			<p className='mb-4'>
				Ao contrário das pseudo-classes que selecionam um elemento completo num
				estado particular, os <strong>pseudo-elementos</strong> permitem-nos
				estilizar uma parte específica de um elemento ou até adicionar conteúdo
				cosmético sem necessidade de HTML adicional. Distinguem-se por usar dois
				pontos duplos (<code>::</code>).
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`::before` e `::after`</strong>: Os mais potentes. Criam um
					pseudo-elemento antes ou depois do conteúdo real de um elemento. Devem
					ser sempre usados com a propriedade <code>content</code>. São
					perfeitos para adicionar ícones, aspas decorativas ou formas.
					<CodeBlock
						language='css'
						codeString={`blockquote {
  font-style: italic;
  position: relative; /* Necessário para posicionar os pseudo-elementos */
}

blockquote::before {
  content: '“'; /* O conteúdo é obrigatório */
  font-size: 4em;
  color: #ddd;
  position: absolute;
  left: -0.5em;
  top: -0.2em;
}`}
					/>
				</li>
				<li>
					<strong>`::first-letter`</strong>: Seleciona a primeira letra do texto
					dentro de um elemento de bloco. Ideal para criar capitulares.
					<CodeBlock
						language='css'
						codeString={`p::first-letter {
  font-size: 200%;
  font-weight: bold;
  color: #2980b9;
}`}
					/>
				</li>
				<li>
					<strong>`::first-line`</strong>: Seleciona a primeira linha de texto
					de um elemento de bloco.
					<CodeBlock
						language='css'
						codeString={`p::first-line {
  color: #7f8c8d;
}`}
					/>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. O Algoritmo do CSS: Quem Ganha a Batalha de Estilos?
			</h3>
			<p className='mb-4'>
				Alguma vez se perguntou por que uma regra de CSS funciona e outra não? O
				navegador segue um conjunto de regras muito claras para resolver
				conflitos quando múltiplos estilos se aplicam ao mesmo elemento. Este
				algoritmo baseia-se em três conceitos:
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>3. Cascata e Herança</h3>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>A Cascata (The Cascade):</strong> A "ordem de chegada"
					importa. Se duas regras têm a mesma importância, a que é declarada{" "}
					<strong>mais tarde</strong> no CSS ganha. Por isso, a ordem dos seus
					ficheiros CSS no HTML é importante.
					<CodeBlock
						language='css'
						codeString={`p { color: blue; }
p { color: red; } /* Esta ganha, o parágrafo será vermelho */`}
					/>
				</li>
				<li>
					<strong>Herança (Inheritance):</strong> Alguns (não todos) os estilos
					aplicados a um elemento pai são "herdados" pelos seus elementos
					filhos. Propriedades como <code>color</code>, <code>font-family</code>
					, <code>font-size</code> e <code>text-align</code> são herdadas.
					Propriedades como <code>border</code>, <code>padding</code> ou{" "}
					<code>background-color</code> não são.
					<CodeBlock
						language='html'
						codeString={`<div style="color: green;">
  <p>Este texto é verde porque herda a cor da div.</p>
</div>`}
					/>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Especificidade: A Regra Mais Importante
			</h3>
			<p className='mb-4'>
				A especificidade é o cálculo que o navegador faz para decidir que
				seletor é mais "específico" e, portanto, qual regra deve aplicar. É a
				causa mais comum de "o meu CSS не funciona".
			</p>
			<p className='mb-4'>
				A hierarquia, do mais para o menos específico, é a seguinte:
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Estilos em Linha (Inline Styles):</strong> Um atributo{" "}
					<code>style</code> ganha sempre sobre as folhas de estilo.
				</li>
				<li>
					<strong>IDs (`#id`):</strong> Um seletor de ID é extremamente
					específico.
				</li>
				<li>
					<strong>
						Classes (`.class`), Pseudo-classes (`:hover`), Seletores de Atributo
						(`[type="text"]`)
					</strong>
					: Todos têm o mesmo nível de especificidade.
				</li>
				<li>
					<strong>
						Seletores de Tipo/Tag (`p`, `div`) e Pseudo-elementos (`::before`)
					</strong>
					: São os menos específicos.
				</li>
			</ol>
			<p>
				O seletor universal (`*`) e os combinadores (`&gt;`, `+`, `~`) não têm
				valor de especificidade.
			</p>

			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					Como se calcula?
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					O navegador conta quantos IDs, classes e tags existem num seletor.{" "}
					<code>#nav .link</code> (1 ID, 1 classe) é mais específico que{" "}
					<code>div a.button.active</code> (0 IDs, 3 classes).
				</p>
			</div>

			<CodeBlock
				language='html'
				codeString={`<p id="paragrafo-importante" class="texto-azul">Olá Mundo</p>`}
			/>
			<CodeBlock
				language='css'
				codeString={`#paragrafo-importante { color: red; }   /* GANHA (1 ID) */
.texto-azul { color: blue; }     /* Perde (1 Classe) */
p { color: green; }               /* Perde (1 Tag) */`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: O Puzzle da Especificidade
			</h3>
			<p className='mb-4'>
				Aplique os seus conhecimentos sobre pseudo-elementos e resolva um
				pequeno puzzle de especificidade.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>HTML:</strong> Crie um elemento{" "}
					<code>&lt;blockquote&gt;</code> com algum texto dentro.
				</li>
				<li>
					<strong>CSS (Pseudo-elementos):</strong> Use os pseudo-elementos{" "}
					<code>::before</code> e <code>::after</code> para adicionar aspas
					gigantes e estilizadas no início e no fim do `blockquote`, como no
					exemplo da lição.
				</li>
				<li>
					<strong>O Puzzle:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Crie um <code>&lt;button&gt;</code> com um ID e uma classe. Por
							exemplo:{" "}
							<code>
								&lt;button id="btn-principal"
								class="btn-acao"&gt;Clique&lt;/button&gt;
							</code>
						</li>
						<li>
							No seu CSS, escreva três regras que apontem para o mesmo botão,
							cada uma tentando alterar o <code>background-color</code> para uma
							cor diferente: uma usando o seletor de tag (`button`), outra
							usando o seletor de classe (`.btn-acao`), e a última usando o
							seletor de ID (`#btn-principal`).
						</li>
						<li>
							Antes de olhar para o navegador, <strong>preveja</strong> de que
							cor será o botão. Depois, verifique se a sua previsão estava
							correta e entenda por que uma regra ganhou sobre as outras.
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture10Pt;
