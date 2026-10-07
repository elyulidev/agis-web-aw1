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

			<Subhead>Estrutura Semântica: thead, tbody e tfoot</Subhead>
			<p className="mb-4">
				Para tabelas corretas usamos agrupadores de linhas que melhoram a
				organização e a acessibilidade. E em vez do obsoleto{" "}
				<Code>border="1"</Code> ou estilos em linha, aplicamos classes de CSS
				(aqui Tailwind): adaptáveis e fáceis de manter.
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
				<Callout variant="tip" title="Responsiva no móvil">
					Envolve a tabela num contentor com <Code>overflow-x-auto</Code> para
					rolagem horizontal em ecrãs pequenos.
				</Callout>
			</div>
			<CodeBlock
				language="html"
				codeString={`<div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
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
</div>`}
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
							&lt;header&gt;
						</div>
						<div className="rounded bg-emerald-200 px-3 py-2 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100">
							&lt;nav&gt; + conteúdo
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

			<Subhead>As cinco tags</Subhead>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="<header>"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Cabeçalho de página ou seção: logotipo, <Code>&lt;h1&gt;</Code> e menu
					de navegação.
				</ConceptCard>
				<ConceptCard
					icon={<Menu className="h-5 w-5" aria-hidden />}
					title="<nav>"
					iconClassName="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
				>
					Agrupa os links de navegação principais do site.
				</ConceptCard>
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="<footer>"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Rodapé: copyright, privacidade, contato.
				</ConceptCard>
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="<div>"
					iconClassName="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
				>
					Continua fundamental quando nenhuma tag semântica se aplica: contentor
					genérico para estilo.
				</ConceptCard>
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="<span>"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					O <Code>&lt;div&gt;</Code> em linha: agrupa palavras dentro de um
					bloco para lhes dar estilo.
				</ConceptCard>
			</div>
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
							Responsiva: <Code>div</Code> com <Code>overflow-x-auto</Code> +
							classes Tailwind.
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
