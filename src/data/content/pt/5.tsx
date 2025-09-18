import CodeBlock from "@/components/ui/code-block";

const Lecture5Pt = () => (
	<div className='space-y-8'>
		<section>
			<p>
				Bem-vindos à quinta aula! Hoje, vamos estruturar dois tipos de conteúdo.
				Primeiro, aprenderemos a lidar com dados tabulares de forma semântica e
				acessível usando tabelas. Depois, daremos um grande passo na organização
				das nossas páginas ao introduzir as tags semânticas estruturais, que são
				a base de qualquer design web moderno.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Tabelas (&lt;table&gt;): Estrutura e Semântica
			</h3>
			<p className='mb-4'>
				As tabelas são usadas{" "}
				<strong>exclusivamente para apresentar dados tabulares</strong>, como
				folhas de cálculo, estatísticas ou calendários. No passado, eram usadas
				incorretamente para o layout de páginas, uma prática que hoje está
				obsoleta e é resolvida com CSS. Para que uma tabela seja responsiva em
				ecrãs pequenos, envolvemo-la num contentor que permita a rolagem
				horizontal.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Estrutura Semântica e Estilizada de uma Tabela
			</h4>
			<p className='mb-4'>
				Para tabelas mais complexas e semanticamente corretas, usamos
				agrupadores de linhas que melhoram a organização e a acessibilidade:{" "}
				<code>&lt;thead&gt;</code> para o cabeçalho, <code>&lt;tbody&gt;</code>{" "}
				para o corpo principal e <code>&lt;tfoot&gt;</code> para o rodapé da
				tabela. Em vez de usar o atributo obsoleto <code>border="1"</code> ou
				estilos em linha, aplicamos classes de CSS (neste caso, do Tailwind)
				para o design, o que as torna adaptáveis e fáceis de manter.
			</p>
			<CodeBlock
				language='html'
				codeString={`
<div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
  <table class="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900 text-sm">
    <thead class="text-left">
      <tr>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Produto</th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Quantidade</th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Preço Unitário</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Maçãs</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">10</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">R$2.50</td>
      </tr>
      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Laranjas</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">15</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">R$2.00</td>
      </tr>
    </tbody>
    <tfoot class="bg-gray-50 dark:bg-gray-800">
      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Total</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">25</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">R$55.00</td>
      </tr>
    </tfoot>
  </table>
</div>
`}
			/>
			<h5 className='text-lg font-semibold mt-6 mb-2'>Resultado:</h5>
			<div className='overflow-x-auto my-6 rounded-lg border border-gray-200 dark:border-gray-700'>
				<table className='min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900 text-sm'>
					<thead className='text-left'>
						<tr>
							<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
								Produto
							</th>
							<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
								Quantidade
							</th>
							<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
								Preço Unitário
							</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
						<tr>
							<td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
								Maçãs
							</td>
							<td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300'>
								10
							</td>
							<td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300'>
								R$2.50
							</td>
						</tr>
						<tr>
							<td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
								Laranjas
							</td>
							<td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300'>
								15
							</td>
							<td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300'>
								R$2.00
							</td>
						</tr>
					</tbody>
					<tfoot className='bg-gray-50 dark:bg-gray-800'>
						<tr>
							<td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white'>
								Total
							</td>
							<td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300'>
								25
							</td>
							<td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300'>
								R$55.00
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Mesclagem de Células: colspan e rowspan
			</h3>
			<p className='mb-4'>
				Às vezes, uma célula precisa ocupar o espaço de várias colunas ou
				linhas. Para isso, usamos dois atributos chave:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>colspan:</strong> Permite que uma célula se estenda
					horizontalmente por múltiplas <strong>colunas</strong>.
				</li>
				<li>
					<strong>rowspan:</strong> Permite que uma célula se estenda
					verticalmente por múltiplas <strong>linhas</strong>.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
    <thead class="bg-gray-50 dark:bg-gray-800">
      <tr>
        <th rowspan="2" class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">Dia</th>
        <th colspan="2" class="px-4 py-2 text-center font-medium text-gray-900 dark:text-white">Horário</th>
      </tr>
      <tr>
        <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">Manhã</th>
        <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">Tarde</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
      <tr>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-left text-gray-900 dark:text-white">Segunda</th>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">Aula A</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">Aula B</td>
      </tr>
      <tr>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-left text-gray-900 dark:text-white">Terça</th>
        <td colspan="2" class="whitespace-nowrap px-4 py-2 text-center text-gray-700 dark:text-gray-300">Livre</td>
      </tr>
    </tbody>
  </table>
</div>`}
			/>
			<h5 className='text-lg font-semibold mt-6 mb-2'>Resultado:</h5>
			<div className='overflow-x-auto my-6 rounded-lg border border-gray-200 dark:border-gray-700'>
				<table className='min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 text-sm'>
					<thead className='bg-gray-50 dark:bg-gray-800'>
						<tr>
							<th
								rowSpan={2}
								className='px-4 py-2 text-left font-medium text-gray-900 dark:text-white align-middle'
							>
								Dia
							</th>
							<th
								colSpan={2}
								className='px-4 py-2 text-center font-medium text-gray-900 dark:text-white'
							>
								Horário
							</th>
						</tr>
						<tr>
							<th className='px-4 py-2 text-left font-medium text-gray-900 dark:text-white'>
								Manhã
							</th>
							<th className='px-4 py-2 text-left font-medium text-gray-900 dark:text-white'>
								Tarde
							</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
						<tr>
							<th className='whitespace-nowrap px-4 py-2 font-medium text-left text-gray-900 dark:text-white'>
								Segunda
							</th>
							<td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300'>
								Aula A
							</td>
							<td className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300'>
								Aula B
							</td>
						</tr>
						<tr>
							<th className='whitespace-nowrap px-4 py-2 font-medium text-left text-gray-900 dark:text-white'>
								Terça
							</th>
							<td
								colSpan={2}
								className='whitespace-nowrap px-4 py-2 text-center text-gray-700 dark:text-gray-300'
							>
								Livre
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Introdução às Tags Semânticas Estruturais
			</h3>
			<p className='mb-4'>
				Antes do HTML5, a estrutura de uma página era construída quase
				exclusivamente com <code>&lt;div&gt;</code>. Uma{" "}
				<code>&lt;div&gt;</code> não tem significado; é apenas uma caixa
				genérica. O HTML5 introduziu tags que descrevem o{" "}
				<strong>propósito</strong> de cada seção, o que é vital para SEO e
				acessibilidade.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;header&gt;:</strong> Representa o cabeçalho de uma página
					ou seção. Geralmente contém o logotipo, o título principal (
					<code>&lt;h1&gt;</code>) e o menu de navegação.
				</li>
				<li>
					<strong>&lt;nav&gt;:</strong> Usada para agrupar os links de navegação
					principais do site.
				</li>
				<li>
					<strong>&lt;footer&gt;:</strong> Representa o rodapé. Geralmente
					contém informações de copyright, links para políticas de privacidade,
					dados de contato, etc.
				</li>
				<li>
					<strong>&lt;div&gt; (Division):</strong> Continua a ser fundamental.
					Use-a quando nenhuma outra tag semântica for apropriada. É um
					contêiner genérico perfeito para agrupar elementos para fins de
					estilo.
				</li>
				<li>
					<strong>&lt;span&gt;:</strong> É o equivalente em linha da{" "}
					<code>&lt;div&gt;</code>. É usado para agrupar conteúdo dentro de um
					bloco (como uma palavra num parágrafo) para aplicar um estilo
					específico.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<body>
  <header>
    <h1>Meu Site</h1>
    <nav>
      <ul>
        <li><a href="/">Início</a></li>
        <li><a href="/sobre">Sobre</a></li>
        <li><a href="/contato">Contato</a></li>
      </ul>
    </nav>
  </header>

  <!-- O conteúdo principal da página iria aqui,
     usando tags como <main>, <section>, <article>
     que veremos na próxima aula. -->

  <div class="container-principal">
    <p>Este é o conteúdo principal da página.
       Aqui está uma <span class="text-red-600">palavra</span> importante.
    </p>
  </div>

  <footer>
    <p>&copy; 2024 - Todos os direitos reservados.</p>
  </footer>
</body>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Meu Horário de Aulas
			</h3>
			<p className='mb-4'>
				Nesta tarefa, você organizará seu horário semanal usando uma tabela e,
				em seguida, estruturará uma página simples com as tags semânticas que
				aprendemos.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Crie o Arquivo:</strong> Crie um novo arquivo chamado{" "}
					<code>horario.html</code>.
				</li>
				<li>
					<strong>Parte 1: A Tabela de Horário</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Crie uma tabela para o seu horário de aulas de segunda a
							sexta-feira.
						</li>
						<li>
							Use <code>&lt;thead&gt;</code> para os cabeçalhos dos dias da
							semana (Segunda, Terça, etc.).
						</li>
						<li>
							Use <code>&lt;tbody&gt;</code> para as linhas que representam as
							horas e as aulas.
						</li>
						<li>
							Garanta que a tabela seja responsiva, envolvendo-a numa{" "}
							<code>div</code> com <code>overflow-x-auto</code> e estilize-a com
							classes do Tailwind.
						</li>
						<li>
							<strong>Desafio:</strong> Se tiver uma aula que dura duas horas,
							use <code>rowspan="2"</code> para que a célula da aula ocupe duas
							linhas. Se um dia tiver a tarde livre, use <code>colspan</code>{" "}
							numa célula que diga "Livre".
						</li>
					</ul>
				</li>
				<li>
					<strong>Parte 2: Estrutura Semântica da Página</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>Envolva toda a sua página nas tags semânticas básicas.</li>
						<li>
							Crie um <code>&lt;header&gt;</code> que contenha um{" "}
							<code>&lt;h1&gt;</code> com o título "Meu Horário Semanal".
						</li>
						<li>
							Dentro do header, adicione uma <code>&lt;nav&gt;</code> com um
							link simples para a sua página <code>index.html</code>.
						</li>
						<li>
							Coloque a tabela que você criou na Parte 1 na seção principal do
							corpo da página. Pode envolvê-la numa <code>&lt;div&gt;</code> se
							quiser.
						</li>
						<li>
							Crie um <code>&lt;footer&gt;</code> no final da página com o seu
							nome e o ano.
						</li>
					</ul>
				</li>
				<li>
					<strong>Visualize:</strong> Abra <code>horario.html</code> com o Live
					Server para ver a sua tabela e a estrutura da página.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture5Pt;
