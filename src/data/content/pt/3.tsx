import CodeBlock from "@/components/ui/code-block";

const Lecture3Pt = () => (
	<div className='space-y-8'>
		<section>
			<p>
				Olá novamente e bem-vindos à terceira aula do nosso módulo! Na sessão
				anterior, estabelecemos as bases da estrutura de um documento HTML.
				Hoje, vamos aprofundar como formatar e estruturar texto e listas, que
				são os componentes principais de quase qualquer página web.
			</p>
			<p className='mt-4'>
				Hoje, o tema central será a <strong>semântica</strong>: a arte de usar
				as tags HTML corretas para descrever o significado do nosso conteúdo,
				não apenas a sua aparência. Isso é fundamental para a acessibilidade e o
				SEO.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Tags de Formatação de Texto: Além da Aparência
			</h3>
			<p className='mb-4'>
				Ao formatar o texto, é crucial diferenciar entre as tags que são
				puramente de apresentação (visuais) e as que são semânticas (com
				significado).
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Negrito: &lt;b&gt; vs. &lt;strong&gt;
			</h4>
			<p className='mb-4'>
				Ambas as tags fazem o texto aparecer em negrito, mas o propósito delas é
				muito diferente.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;b&gt; (Bold - Negrito):</strong> Esta é uma tag de
					apresentação. É usada para chamar a atenção do leitor para uma palavra
					ou frase sem dar-lhe uma importância especial. Pense nela como uma
					ajuda visual, como destacar o nome de um produto em uma resenha.
				</li>
				<li>
					<strong>&lt;strong&gt; (Importância Forte):</strong> Esta é uma tag
					semântica. Indica que o conteúdo tem grande importância, seriedade ou
					urgência. Um leitor de tela poderia mudar o tom de voz para enfatizar
					este texto.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<p>Esta receita precisa de <b>farinha de trigo</b> e açúcar.</p>
<p><strong>Aviso:</strong> O chão está molhado.</p>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Itálico: &lt;i&gt; vs. &lt;em&gt;
			</h4>
			<p className='mb-4'>
				Assim como com o negrito, aqui também temos uma diferença entre o visual
				и o semântico.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;i&gt; (Italic - Itálico):</strong> Esta tag é usada para
					distinguir um texto do resto, mas sem uma ênfase particular. É ideal
					para termos técnicos, nomes de navios, pensamentos ou frases em outro
					idioma.
				</li>
				<li>
					<strong>&lt;em&gt; (Emphasis - Ênfase):</strong> É uma tag semântica
					usada para dar ênfase a uma palavra ou frase, o que pode mudar o
					significado da oração.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<p>O termo <i>Homo sapiens</i> refere-se à nossa espécie.</p>
<p>Você deve fazê-lo <em>agora</em>, não depois.</p>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Sublinhado: &lt;u&gt; vs. &lt;ins&gt;
			</h4>
			<p className='mb-4'>
				O uso de <code>&lt;u&gt;</code> tornou-se incomum porque os usuários
				associam texto sublinhado a links.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;u&gt; (Underline - Sublinhado):</strong> Seu uso semântico
					é reservado para anotações não textuais, como marcar uma palavra com
					erro de ortografia.
				</li>
				<li>
					<strong>&lt;ins&gt; (Inserted - Inserido):</strong> É uma tag
					semântica usada para marcar conteúdo que foi adicionado a um
					documento, indicando uma edição ou atualização.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<p>Esta palavra está <u class="decoration-red-500 underline-wavy">escrita</u> erradamente.</p>
<p>O preço é de <del>R$100</del> <ins>R$75</ins> por tempo limitado.</p>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Subscrito (&lt;sub&gt;) e Sobrescrito (&lt;sup&gt;)
			</h4>
			<p className='mb-4'>
				Estas tags são muito úteis para fórmulas matemáticas ou químicas.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;sub&gt; (Subscript):</strong> Coloca o texto como
					subscrito, ligeiramente abaixo da linha normal.
				</li>
				<li>
					<strong>&lt;sup&gt; (Superscript):</strong> Coloca o texto como
					sobrescrito, ligeiramente acima.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<p>A fórmula da água é H<sub>2</sub>O.</p>
<p>O teorema de Pitágoras é a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>.</p>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Outras Tags de Formatação de Texto Úteis
			</h4>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;small&gt;:</strong> Representa texto secundário ou "letras
					pequenas", como comentários legais ou direitos autorais.
				</li>
				<li>
					<strong>&lt;mark&gt;:</strong> É usada para destacar texto por sua
					relevância em um contexto particular, como em resultados de pesquisa.
				</li>
				<li>
					<strong>&lt;time&gt;:</strong> Envolve datas e horas, com um atributo{" "}
					<code>datetime</code> para que as máquinas o entendam.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<p>O resultado da busca por <mark>HTML</mark> retornou 5 milhões de páginas.</p>
<p>A reunião está agendada para <time datetime="2024-10-26T10:00">26 de Outubro às 10:00 AM</time>.</p>
<footer>
  <p><small>&copy; 2024 Meu Curso Web. Todos os direitos reservados.</small></p>
</footer>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Listas: Ordenadas, Não Ordenadas e de Definição
			</h3>
			<p className='mb-4'>
				Listas são fundamentais para agrupar e estruturar conteúdo relacionado.
				Elas são compostas por um elemento contêiner (<code>&lt;ol&gt;</code>,{" "}
				<code>&lt;ul&gt;</code>, <code>&lt;dl&gt;</code>) que contém itens de
				lista (<code>&lt;li&gt;</code>, <code>&lt;dt&gt;</code>,{" "}
				<code>&lt;dd&gt;</code>).
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Listas Não Ordenadas &lt;ul&gt;
			</h4>
			<p className='mb-4'>
				São usadas para agrupar itens cujo a ordem não é importante. Por padrão,
				são exibidas com marcadores ("bullet points").
			</p>
			<CodeBlock
				language='html'
				codeString={`<h4>Lista de compras:</h4>
<ul>
  <li>Leite</li>
  <li>Pão</li>
  <li>Ovos</li>
</ul>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Listas Ordenadas &lt;ol&gt;
			</h4>
			<p className='mb-4'>
				São usadas quando a sequência dos itens é crucial, como nos passos de
				uma receita ou um ranking.
			</p>
			<CodeBlock
				language='html'
				codeString={`<h4>Instruções:</h4>
<ol>
  <li>Bater os ovos.</li>
  <li>Aquecer a frigideira.</li>
  <li>Despejar a mistura.</li>
</ol>`}
			/>

			<h5 className='text-lg font-semibold mt-6 mb-2'>
				Atributos para Listas Ordenadas
			</h5>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>type:</strong> Altera o tipo de marcador ("1", "a", "A", "i",
					"I").
				</li>
				<li>
					<strong>start:</strong> Especifica o número a partir do qual a lista
					deve começar.
				</li>
				<li>
					<strong>reversed:</strong> É um atributo booleano que inverte a ordem
					da numeração.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<p>Top 3 países (em ordem alfabética inversa):</p>
<ol type="A" start="3" reversed>
  <li>Portugal</li>
  <li>Espanha</li>
  <li>Brasil</li>
</ol>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Listas de Definição &lt;dl&gt;
			</h4>
			<p className='mb-4'>
				Este tipo de lista é incrivelmente útil para glossários ou qualquer
				lista de pares de termo e definição. É composta por três tags:{" "}
				<code>&lt;dl&gt;</code> (contêiner), <code>&lt;dt&gt;</code> (termo) e{" "}
				<code>&lt;dd&gt;</code> (descrição).
			</p>
			<CodeBlock
				language='html'
				codeString={`<dl>
  <dt>HTML</dt>
  <dd>Linguagem de Marcação de Hipertexto, usada para estruturar o conteúdo web.</dd>
  <dt>CSS</dt>
  <dd>Folhas de Estilo em Cascata, usado para estilizar a apresentação do conteúdo.</dd>
</dl>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: A Página da sua Receita Favorita
			</h3>
			<p className='mb-4'>
				É hora de cozinhar com código! Nesta tarefa, você criará uma página web
				para a sua receita favorita, aplicando tudo o que aprendeu sobre
				formatação de texto e listas.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Crie o Arquivo:</strong> Crie um novo arquivo chamado{" "}
					<code>receita.html</code> no seu projeto.
				</li>
				<li>
					<strong>Estrutura Base:</strong> Gere a estrutura HTML básica com o
					Emmet (<code>!</code>) e configure a seção <code>&lt;head&gt;</code>{" "}
					adequadamente (título, metadados, etc.).
				</li>
				<li>
					<strong>Conteúdo da Receita:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Use um <code>&lt;h1&gt;</code> para o nome da receita.
						</li>
						<li>
							Escreva uma breve introdução em um parágrafo{" "}
							<code>&lt;p&gt;</code>. Use <code>&lt;em&gt;</code> para enfatizar
							como é deliciosa.
						</li>
						<li>
							Adicione uma seção "Ingredientes" com um <code>&lt;h2&gt;</code>.
							Use uma <strong>lista não ordenada</strong> (
							<code>&lt;ul&gt;</code>) para os ingredientes. Destaque o
							ingrediente mais importante com <code>&lt;strong&gt;</code>.
						</li>
						<li>
							Crie uma seção "Instruções" com outro <code>&lt;h2&gt;</code>. Use
							uma <strong>lista ordenada</strong> (<code>&lt;ol&gt;</code>) para
							os passos.
						</li>
						<li>
							Adicione uma seção "Glossário de Cozinha" com um{" "}
							<code>&lt;h2&gt;</code>. Use uma{" "}
							<strong>lista de definição</strong> (<code>&lt;dl&gt;</code>) para
							explicar dois termos de culinária que aparecem na sua receita (ex:
							"Refogar", "Banho-maria").
						</li>
						<li>
							Inclua uma nota importante usando a tag <code>&lt;mark&gt;</code>,
							por exemplo: <mark>Cuidado com o forno quente!</mark>
						</li>
						<li>
							No final, adicione os direitos autorais com a tag{" "}
							<code>&lt;small&gt;</code>.
						</li>
					</ul>
				</li>
				<li>
					<strong>Visualize:</strong> Abra <code>receita.html</code> com o Live
					Server e verifique se tudo está como esperado.
				</li>
			</ol>
			<p>
				Esta tarefa ajudará você a dominar a organização de conteúdo e a
				entender o poder da semântica em HTML.
			</p>
		</section>
	</div>
);

export default Lecture3Pt;
