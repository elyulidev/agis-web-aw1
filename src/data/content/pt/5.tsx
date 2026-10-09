import {
	Ban,
	Check,
	LayoutTemplate,
	Menu,
	MoveHorizontal,
	MoveVertical,
	Sparkles,
	Table,
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

const tableCell = "whitespace-nowrap px-4 py-2";
const tableHead =
	"px-4 py-2 text-left font-medium text-gray-900 dark:text-white";

const Lecture5Pt = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Tabelas e semântica estrutural
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Bem-vindos à quinta aula! Hoje, vamos estruturar dois tipos de conteúdo.
				Primeiro, aprenderemos a lidar com dados tabulares de forma semântica e
				acessível usando tabelas. Depois, daremos um grande passo na organização
				das nossas páginas ao introduzir as tags semânticas estruturais, que são
				a base de qualquer design web moderno.
			</p>
		</section>

		<section>
			<SectionTitle index={1}>
				Tabelas (&lt;table&gt;): Estrutura e Semântica
			</SectionTitle>
			<Callout variant="warning" title="Só dados tabulares">
				As tabelas servem <strong>exclusivamente para dados tabulares</strong>{" "}
				(folhas de cálculo, estatísticas, calendários). Fazer layout com tabelas
				é obsoleto: isso resolve-se com CSS.
			</Callout>

			<Subhead>As peças básicas: table, tr, th e td</Subhead>
			<p className="mb-4">
				Toda a tabela nasce de quatro tags. <Code>&lt;table&gt;</Code> é o
				contentor, <Code>&lt;tr&gt;</Code> é uma linha (<em>table row</em>),{" "}
				<Code>&lt;th&gt;</Code> é uma célula de cabeçalho (<em>table header</em>
				) e <Code>&lt;td&gt;</Code> é uma célula de dados (<em>table data</em>
				). Os cabeçalhos levam <Code>scope="col"</Code> ou{" "}
				<Code>scope="row"</Code> para dizer ao leitor de ecrã que células
				descrevem.
			</p>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<Table className="h-5 w-5" aria-hidden />}
					title="<tr>"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Uma linha. Contém sempre <Code>&lt;th&gt;</Code> ou{" "}
					<Code>&lt;td&gt;</Code>, nunca texto solto.
				</ConceptCard>
				<ConceptCard
					icon={<Table className="h-5 w-5" aria-hidden />}
					title="<th>"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Cabeçalho em negrito e centrado por defeito. Usa{" "}
					<Code>scope="col"</Code> nas colunas e <Code>scope="row"</Code> nas
					linhas.
				</ConceptCard>
				<ConceptCard
					icon={<Table className="h-5 w-5" aria-hidden />}
					title="<td>"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					Dado normal. Vai dentro de <Code>&lt;tr&gt;</Code> no corpo ou no
					rodapé da tabela.
				</ConceptCard>
			</div>
			<CodeBlock
				language="html"
				codeString={`<table border="1">
  <tr>
    <th scope="col">Produto</th>
    <th scope="col">Quantidade</th>
  </tr>
  <tr>
    <td>Maçãs</td>
    <td>10</td>
  </tr>
</table>`}
			/>

			<Subhead>Estrutura Semântica: thead, tbody e tfoot</Subhead>
			<p className="mb-4">
				Para tabelas corretas agrupamos as linhas com{" "}
				<Code>&lt;thead&gt;</Code>, <Code>&lt;tbody&gt;</Code> e{" "}
				<Code>&lt;tfoot&gt;</Code>: melhoram a organização e a acessibilidade.
				Nos exemplos usamos <Code>&lt;table border="1"&gt;</Code> só para ver
				as bordas sem CSS; no Módulo 2 vais substituí-lo por estilo com CSS.
			</p>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<Table className="h-5 w-5" aria-hidden />}
					title="<thead>"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					O cabeçalho: a linha de títulos de cada coluna.
				</ConceptCard>
				<ConceptCard
					icon={<Table className="h-5 w-5" aria-hidden />}
					title="<tbody>"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					O corpo principal com os dados.
				</ConceptCard>
				<ConceptCard
					icon={<Table className="h-5 w-5" aria-hidden />}
					title="<tfoot>"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					O rodapé: totais ou resumos da tabela.
				</ConceptCard>
			</div>
			<div className="mt-4">
				<Callout variant="tip" title="Lê a tabela por partes">
					Primeiro as linhas de <Code>&lt;thead&gt;</Code> (os{" "}
					<Code>&lt;th scope="col"&gt;</Code>), depois cada{" "}
					<Code>&lt;tr&gt;</Code> de <Code>&lt;tbody&gt;</Code> com os seus{" "}
					<Code>&lt;td&gt;</Code>, e no fim o resumo em{" "}
					<Code>&lt;tfoot&gt;</Code>.
				</Callout>
			</div>
			<CodeBlock
				language="html"
				codeString={`<table border="1">
  <thead>
    <tr>
      <th scope="col">Produto</th>
      <th scope="col">Quantidade</th>
      <th scope="col">Preço Unitário</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Maçãs</th>
      <td>10</td>
      <td>R$2.50</td>
    </tr>
    <tr>
      <th scope="row">Laranjas</th>
      <td>15</td>
      <td>R$2.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>25</td>
      <td>R$55.00</td>
    </tr>
  </tfoot>
</table>`}
			/>
			<p className="mt-6 mb-2 font-medium">
				Resultado · tabela real renderizada:
			</p>
			<div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
				<table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900 text-sm">
					<thead className="text-left">
						<tr>
							<th className={`${tableHead} whitespace-nowrap`}>Produto</th>
							<th className={`${tableHead} whitespace-nowrap`}>Quantidade</th>
							<th className={`${tableHead} whitespace-nowrap`}>
								Preço Unitário
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
						<tr>
							<td
								className={`${tableCell} font-medium text-gray-900 dark:text-white`}
							>
								Maçãs
							</td>
							<td className={`${tableCell} text-gray-700 dark:text-gray-300`}>
								10
							</td>
							<td className={`${tableCell} text-gray-700 dark:text-gray-300`}>
								R$2.50
							</td>
						</tr>
						<tr>
							<td
								className={`${tableCell} font-medium text-gray-900 dark:text-white`}
							>
								Laranjas
							</td>
							<td className={`${tableCell} text-gray-700 dark:text-gray-300`}>
								15
							</td>
							<td className={`${tableCell} text-gray-700 dark:text-gray-300`}>
								R$2.00
							</td>
						</tr>
					</tbody>
					<tfoot className="bg-gray-50 dark:bg-gray-800">
						<tr>
							<td
								className={`${tableCell} font-medium text-gray-900 dark:text-white`}
							>
								Total
							</td>
							<td className={`${tableCell} text-gray-700 dark:text-gray-300`}>
								25
							</td>
							<td className={`${tableCell} text-gray-700 dark:text-gray-300`}>
								R$55.00
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</section>

		<section>
			<SectionTitle index={2}>
				Mesclagem de Células: colspan e rowspan
			</SectionTitle>
			<p className="mb-4">
				Às vezes, uma célula precisa ocupar o espaço de várias colunas ou
				linhas. Dois atributos chave:
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<MoveHorizontal className="h-5 w-5" aria-hidden />}
					title="colspan · colunas"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Estende a célula <strong>horizontalmente</strong> por múltiplas
					colunas.
				</ConceptCard>
				<ConceptCard
					icon={<MoveVertical className="h-5 w-5" aria-hidden />}
					title="rowspan · linhas"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					Estende a célula <strong>verticalmente</strong> por múltiplas linhas.
				</ConceptCard>
			</div>
			<CodeBlock
				language="html"
				codeString={`<table border="1">
  <thead>
    <tr>
      <th scope="col" rowspan="2">Dia</th>
      <th scope="col" colspan="2">Horário</th>
    </tr>
    <tr>
      <th scope="col">Manhã</th>
      <th scope="col">Tarde</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Segunda</th>
      <td>Aula A</td>
      <td>Aula B</td>
    </tr>
    <tr>
      <th scope="row">Terça</th>
      <td colspan="2">Livre</td>
    </tr>
  </tbody>
</table>`}
			/>
			<p className="mt-6 mb-2 font-medium">
				Resultado · vê como “Dia” desce duas linhas e “Livre” abrange duas
				colunas:
			</p>
			<div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
				<table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 text-sm">
					<thead className="bg-gray-50 dark:bg-gray-800">
						<tr>
							<th rowSpan={2} className={`${tableHead} align-middle`}>
								Dia
							</th>
							<th colSpan={2} className={`${tableHead} text-center`}>
								Horário
							</th>
						</tr>
						<tr>
							<th className={tableHead}>Manhã</th>
							<th className={tableHead}>Tarde</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
						<tr>
							<th
								className={`${tableCell} text-left font-medium text-gray-900 dark:text-white`}
							>
								Segunda
							</th>
							<td className={`${tableCell} text-gray-700 dark:text-gray-300`}>
								Aula A
							</td>
							<td className={`${tableCell} text-gray-700 dark:text-gray-300`}>
								Aula B
							</td>
						</tr>
						<tr>
							<th
								className={`${tableCell} text-left font-medium text-gray-900 dark:text-white`}
							>
								Terça
							</th>
							<td
								colSpan={2}
								className={`${tableCell} text-center text-gray-700 dark:text-gray-300`}
							>
								Livre
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section>
			<SectionTitle index={3}>
				Introdução às Tags Semânticas Estruturais
			</SectionTitle>
			<p className="mb-4">
				Antes do HTML5, tudo era <Code>&lt;div&gt;</Code>: uma caixa genérica{" "}
				<strong>sem significado</strong>. O HTML5 trouxe tags que descrevem o{" "}
				<strong>propósito</strong> de cada seção — vital para SEO e
				acessibilidade.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/40">
					<p className="flex items-center gap-2 font-semibold text-gray-500 dark:text-gray-400">
						<Ban className="h-5 w-5" aria-hidden />
						Antes · só &lt;div&gt;
					</p>
					<div className="mt-3 space-y-2" aria-hidden>
						<div className="rounded bg-gray-200 px-3 py-2 font-mono text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400">
							&lt;div&gt;
						</div>
						<div className="rounded bg-gray-200 px-3 py-2 font-mono text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400">
							&lt;div&gt;
						</div>
						<div className="rounded bg-gray-200 px-3 py-2 font-mono text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400">
							&lt;div&gt;
						</div>
					</div>
					<p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
						Três caixas idênticas: o navegador não sabe o que é o quê.
					</p>
				</div>
				<div className="rounded-2xl border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-950/30">
					<p className="flex items-center gap-2 font-semibold text-green-800 dark:text-green-200">
						<LayoutTemplate className="h-5 w-5" aria-hidden />
						Agora · semântica
					</p>
					<div className="mt-3 space-y-2 font-mono text-xs" aria-hidden>
						<div className="rounded bg-blue-200 px-3 py-2 text-blue-900 dark:bg-blue-900 dark:text-blue-100">
							&lt;header&gt; + &lt;nav&gt;
						</div>
						<div className="rounded bg-emerald-200 px-3 py-2 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100">
							&lt;main&gt; + &lt;section&gt;
						</div>
						<div className="rounded bg-amber-200 px-3 py-2 text-amber-900 dark:bg-amber-900 dark:text-amber-100">
							&lt;article&gt; + &lt;aside&gt;
						</div>
						<div className="rounded bg-purple-200 px-3 py-2 text-purple-900 dark:bg-purple-900 dark:text-purple-100">
							&lt;footer&gt;
						</div>
					</div>
					<p className="mt-2 text-xs text-green-900/70 dark:text-green-100/70">
						Cada parte declara o seu propósito.
					</p>
				</div>
			</div>

			<Subhead>As sete tags estruturais</Subhead>
			<p className="mb-4">
				São estas que dão esqueleto à página. Decora-as como um mapa:{" "}
				<Code>&lt;header&gt;</Code> em cima, <Code>&lt;nav&gt;</Code> para te
				moveres, <Code>&lt;main&gt;</Code> com o conteúdo único,{" "}
				<Code>&lt;section&gt;</Code> e <Code>&lt;article&gt;</Code> para o
				agrupar, <Code>&lt;aside&gt;</Code> para o secundário e{" "}
				<Code>&lt;footer&gt;</Code> para fechar.
			</p>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="<header>"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Cabeçalho de página ou seção: logotipo, <Code>&lt;h1&gt;</Code> e
					às vezes o <Code>&lt;nav&gt;</Code>.
				</ConceptCard>
				<ConceptCard
					icon={<Menu className="h-5 w-5" aria-hidden />}
					title="<nav>"
					iconClassName="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
				>
					Só navegação principal: o menu do site, não qualquer lista de
					links.
				</ConceptCard>
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="<main>"
					iconClassName="bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
				>
					O conteúdo único da página. Um só por página, sem repetir noutras.
				</ConceptCard>
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="<section>"
					iconClassName="bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300"
				>
					Bloco temático dentro de <Code>&lt;main&gt;</Code>: um capítulo com
					o seu próprio cabeçalho.
				</ConceptCard>
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="<article>"
					iconClassName="bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300"
				>
					Peça autocontida que se percebe sozinha: uma notícia, um post, um
					cartão.
				</ConceptCard>
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="<aside>"
					iconClassName="bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300"
				>
					O secundário: barra lateral, avisos ou links relacionados com o{" "}
					<Code>&lt;main&gt;</Code>.
				</ConceptCard>
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="<footer>"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Fecho de página ou seção: autoria, copyright, contato.
				</ConceptCard>
			</div>

			<Subhead>E &lt;div&gt; e &lt;span&gt;?</Subhead>
			<Callout variant="warning" title="Não são semânticas">
				<Code>&lt;div&gt;</Code> (bloco) e <Code>&lt;span&gt;</Code> (em linha){" "}
				<strong>não descrevem nada</strong>. Usa-as só quando nenhuma das sete
				acima se aplica.
			</Callout>
			<CodeBlock
				language="html"
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

  <main>
    <section>
      <h2>Notícias</h2>
      <article>
        <h3>Meu primeiro artigo</h3>
        <p>Este conteúdo percebe-se sozinho.</p>
      </article>
    </section>
    <aside>
      <h2>Links relacionados</h2>
      <p>Conteúdo secundário.</p>
    </aside>
  </main>

  <footer>
    <p>&copy; 2024 - Todos os direitos reservados.</p>
  </footer>
</body>`}
			/>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
				<Table className="h-6 w-6 text-blue-500" aria-hidden />📝 Tarefa: Meu
				Horário de Aulas
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Vais organizar o teu horário semanal com uma tabela e estruturar a
				página com as tags semânticas aprendidas.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Crie o Arquivo">
					Cria <Code>horario.html</Code>.
				</Step>
				<Step number={2} title="Parte 1: A Tabela de Horário">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>Tabela de segunda a sexta.</CheckItem>
						<CheckItem>
							<Code>&lt;thead&gt;</Code> com os dias; <Code>&lt;tbody&gt;</Code>{" "}
							com horas e aulas.
						</CheckItem>
						<CheckItem>
							Estrutura pura: <Code>&lt;table&gt;</Code>,{" "}
							<Code>&lt;tr&gt;</Code>, <Code>&lt;th scope&gt;</Code> e{" "}
							<Code>&lt;td&gt;</Code>, sem classes nem estilos.
						</CheckItem>
						<CheckItem>
							<strong>Desafio:</strong> <Code>rowspan="2"</Code> para a aula de
							duas horas; <Code>colspan</Code> com “Livre” na tarde livre.
						</CheckItem>
					</ul>
				</Step>
				<Step number={3} title="Parte 2: Estrutura Semântica">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							<Code>&lt;header&gt;</Code> com <Code>&lt;h1&gt;</Code> “Meu
							Horário Semanal”.
						</CheckItem>
						<CheckItem>
							<Code>&lt;nav&gt;</Code> com link para <Code>index.html</Code>.
						</CheckItem>
						<CheckItem>
							A tabela no corpo (numa <Code>&lt;div&gt;</Code> se quiseres).
						</CheckItem>
						<CheckItem>
							<Code>&lt;footer&gt;</Code> com o teu nome e o ano.
						</CheckItem>
					</ul>
				</Step>
				<Step number={4} title="Visualize">
					Abre <Code>horario.html</Code> com o Live Server.
				</Step>
			</ol>
			<Callout variant="success" title="Fecho">
				Tabela semântica + estrutura semântica: a base de qualquer design web
				moderno.
			</Callout>
		</section>
	</div>
);

export default Lecture5Pt;
