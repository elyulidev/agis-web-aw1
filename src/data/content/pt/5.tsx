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
				obsoleta graças ao CSS.
			</p>
			<p className='mb-4'>A estrutura de uma tabela é composta por:</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;table&gt;:</strong> A tag que envolve toda a tabela.
				</li>
				<li>
					<strong>&lt;tr&gt; (Table Row):</strong> Define uma linha horizontal.
				</li>
				<li>
					<strong>&lt;td&gt; (Table Data):</strong> Define uma célula de dados
					padrão dentro de uma linha.
				</li>
				<li>
					<strong>&lt;th&gt; (Table Header):</strong> Define uma célula de
					cabeçalho. Os navegadores exibem-na em negrito e centrada por padrão.
				</li>
			</ul>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Estrutura Semântica da Tabela
			</h4>
			<p className='mb-4'>
				Para tabelas mais complexas e semanticamente corretas, usamos
				agrupadores de linhas que melhoram a organização e a acessibilidade:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;thead&gt;:</strong> Agrupa o conteúdo do cabeçalho da
					tabela (a linha com os <code>&lt;th&gt;</code>).
				</li>
				<li>
					<strong>&lt;tbody&gt;:</strong> Agrupa o conteúdo principal ou o corpo
					da tabela.
				</li>
				<li>
					<strong>&lt;tfoot&gt;:</strong> Agrupa o conteúdo do rodapé da tabela,
					como resumos ou totais.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<table border="1" style="width:100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th>Produto</th>
      <th>Quantidade</th>
      <th>Preço Unitário</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Maçãs</td>
      <td>10</td>
      <td>R$2.50</td>
    </tr>
    <tr>
      <td>Laranjas</td>
      <td>15</td>
      <td>R$2.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>25</td>
      <td>R$55.00</td>
    </tr>
  </tfoot>
</table>`}
			/>
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
				codeString={`<table border="1" style="width:100%; text-align:center; border-collapse: collapse;">
  <thead>
    <tr>
      <th rowspan="2">Dia</th>
      <th colspan="2">Horário</th>
    </tr>
    <tr>
      <th>Manhã</th>
      <th>Tarde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Segunda</th>
      <td>Aula A</td>
      <td>Aula B</td>
    </tr>
    <tr>
      <th>Terça</th>
      <td colspan="2">Livre</td>
    </tr>
  </tbody>
</table>`}
			/>
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
     que veremos mais tarde. -->

  <div class="container-principal">
    <p>Este é o conteúdo principal da página.
       Aqui está uma <span style="color:red;">palavra</span> importante.
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
