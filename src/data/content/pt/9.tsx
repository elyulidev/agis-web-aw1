import {
	Check,
	ChevronRight,
	ChevronsDown,
	CornerDownRight,
	Filter,
	Flag,
	Hand,
	Keyboard,
	ListOrdered,
	MousePointerClick,
	MoveDown,
	Send,
	Sparkles,
	Star,
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

const Lecture9Pt = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				CSS · seletores com superpoderes
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Já sabemos apontar por tipo, classe e ID. Hoje subimos de nível:
				selecionar por <strong>relação</strong> entre elementos, por{" "}
				<strong>atributos</strong> e por <strong>estado ou posição</strong>. O
				especial: quase tudo se pode <strong>experimentar em direto</strong>{" "}
				aqui mesmo, porque as demos usam o mesmo CSS que vais escrever.
			</p>
		</section>

		<section>
			<SectionTitle index={1}>
				Combinadores: selecionar por relação
			</SectionTitle>
			<p className="mb-4">
				Os combinadores selecionam segundo o parentesco na árvore do DOM:
				descendentes, filhos diretos e irmãos. Quatro símbolos, quatro ideias.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<MoveDown className="h-5 w-5" aria-hidden />}
					title="Descendente (espaço)"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Todos os que estão dentro, sem importar o nível: filhos, netos,
					bisnetos. <Code>nav a</Code> pinta <strong>todos</strong> os links do
					menu.
				</ConceptCard>
				<ConceptCard
					icon={<ChevronRight className="h-5 w-5" aria-hidden />}
					title="Filho direto (>)"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Só o primeiro nível: <Code>ul &gt; li</Code> afeta os <Code>li</Code>{" "}
					filhos do <Code>ul</Code>, não os de sublistas encaixadas.
				</ConceptCard>
				<ConceptCard
					icon={<CornerDownRight className="h-5 w-5" aria-hidden />}
					title="Irmão adjacente (+)"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					O irmão que vem <strong>imediatamente a seguir</strong>.{" "}
					<Code>h1 + p</Code> é só o primeiro parágrafo após o título.
				</ConceptCard>
				<ConceptCard
					icon={<ChevronsDown className="h-5 w-5" aria-hidden />}
					title="Irmãos gerais (~)"
					iconClassName="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
				>
					<strong>Todos</strong> os irmãos que vêm depois. <Code>h2 ~ p</Code>{" "}
					alcança cada parágrafo posterior ao subtítulo.
				</ConceptCard>
			</div>
			<Callout variant="tip" title="A confusão clássica: espaço vs >">
				O espaço pinta toda a descendência; o <Code>&gt;</Code> só o primeiro
				nível. Se o teu submenu se tinge de um estilo que não querias, quase de
				certeza usaste um descendente onde ia um filho direto. Vê em direto 👇
			</Callout>

			<Subhead>Descendente vs filho direto · em direto</Subhead>
			<div className="mb-4">
				<Preview label="Vista prévia · repara no que se pinta e no que não">
					<style>{`.d9-arbol a { color: teal; }
.d9-arbol > ul > li { font-weight: bold; list-style-type: square; }`}</style>
					<nav className="d9-arbol">
						<ul>
							<li>
								<a href="#d9-inicio">Início</a>
								<ul>
									<li>
										<a href="#d9-sub">Subnível encaixado</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#d9-contato">Contato</a>
							</li>
						</ul>
					</nav>
				</Preview>
			</div>
			<p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
				Os três links estão em teal (<Code>nav a</Code> chega a todos), mas só o
				primeiro nível está a negrito com marca quadrada (<Code>&gt;</Code>{" "}
				trava nos filhos diretos). O subnível encaixado denuncia-o.
			</p>
			<div className="space-y-4">
				<CodeBlock
					language="css"
					codeString={`/* Seleciona TODOS os <a> dentro de um <nav> */
nav a {
  color: teal;
}`}
				/>
				<CodeBlock
					language="css"
					codeString={`/* Só os <li> filhos diretos do <ul> */
ul > li {
  list-style-type: square;
}`}
				/>
			</div>

			<Subhead>Irmãos: + e ~ · em direto</Subhead>
			<div className="mb-4">
				<Preview label="Vista prévia · o primeiro parágrafo vs todos">
					<style>{`.d9-hermanos h2 + p { margin-top: 0; font-style: italic; }
.d9-hermanos h2 ~ p { text-indent: 2em; }`}</style>
					<div className="d9-hermanos">
						<h2>Subtítulo de exemplo</h2>
						<p>Primeiro parágrafo: itálico e avanço (pegam ambas as regras).</p>
						<p>Segundo parágrafo: só avanço (só pega a de ~).</p>
					</div>
				</Preview>
			</div>
			<div className="space-y-4">
				<CodeBlock
					language="css"
					codeString={`/* Só o <p> logo após o <h1> */
h1 + p {
  margin-top: 0;
  font-style: italic;
}`}
				/>
				<CodeBlock
					language="css"
					codeString={`/* Todos os <p> irmãos posteriores ao <h2> */
h2 ~ p {
  text-indent: 2em;
}`}
				/>
			</div>
		</section>

		<section>
			<SectionTitle index={2}>Seletores de atributo</SectionTitle>
			<p className="mb-4">
				Selecionam pela presença ou pelo valor de um atributo HTML. Ideais para
				diferenciar links, botões e campos{" "}
				<strong>sem adicionar classes</strong>.
			</p>
			<div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
				<table className="w-full text-left text-sm">
					<thead>
						<tr className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
							<th className="px-4 py-2">Padrão</th>
							<th className="px-4 py-2">Seleciona</th>
							<th className="px-4 py-2">Exemplo</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
						<tr>
							<td className="px-4 py-2 font-mono">[attr]</td>
							<td className="px-4 py-2">têm o atributo</td>
							<td className="px-4 py-2 font-mono">a[target]</td>
						</tr>
						<tr>
							<td className="px-4 py-2 font-mono">[attr=&quot;v&quot;]</td>
							<td className="px-4 py-2">valor exato</td>
							<td className="px-4 py-2 font-mono">
								input[type=&quot;submit&quot;]
							</td>
						</tr>
						<tr>
							<td className="px-4 py-2 font-mono">[attr*=&quot;v&quot;]</td>
							<td className="px-4 py-2">o valor contém</td>
							<td className="px-4 py-2 font-mono">
								a[href*=&quot;google&quot;]
							</td>
						</tr>
						<tr>
							<td className="px-4 py-2 font-mono">[attr^=&quot;v&quot;]</td>
							<td className="px-4 py-2">o valor começa com</td>
							<td className="px-4 py-2 font-mono">
								a[href^=&quot;https&quot;]
							</td>
						</tr>
						<tr>
							<td className="px-4 py-2 font-mono">[attr$=&quot;v&quot;]</td>
							<td className="px-4 py-2">o valor termina com</td>
							<td className="px-4 py-2 font-mono">a[href$=&quot;.pdf&quot;]</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="mt-4 mb-4">
				<Preview label="Vista prévia · três regras de atributo a funcionar">
					<style>{`.d9-attrs a[target="_blank"] { background-color: yellow; }
.d9-attrs input[type="submit"] { background-color: #3498db; color: white; border: none; border-radius: 8px; padding: 8px 16px; cursor: pointer; }
.d9-attrs a[href$=".pdf"] { color: red; font-weight: bold; }`}</style>
					<div className="d9-attrs space-y-3">
						<p>
							<a href="https://exemplo.com" target="_blank" rel="noopener">
								Link externo (novo separador, fundo amarelo)
							</a>
						</p>
						<p>
							<a href="/contato">Link interno (sem mudanças)</a>
						</p>
						<p>
							<a href="guia.pdf">Guia em PDF (vermelho e negrito)</a>
						</p>
						<p>
							<input type="submit" value="Botão por atributo" />{" "}
							<input
								type="text"
								placeholder="Campo normal"
								className={inputClass}
							/>
						</p>
					</div>
				</Preview>
			</div>
			<CodeBlock
				language="css"
				codeString={`/* Estiliza todos os links que abrem num novo separador */
a[target="_blank"] {
  background-color: yellow;
}`}
			/>
			<div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
				<Filter className="h-4 w-4" aria-hidden />O navegador já distingue os
				elementos pelos seus atributos: aproveita-o antes de inventar classes
				novas.
			</div>
		</section>

		<section>
			<SectionTitle index={3}>Pseudo-classes: estado e posição</SectionTitle>
			<p className="mb-4">
				Palavras-chave com dois pontos que se juntam ao seletor para apontar a
				um <strong>estado especial</strong> (<Code>:hover</Code>) ou a uma{" "}
				<strong>posição</strong> (<Code>:nth-child()</Code>). Não adicionam
				elementos ao HTML: descrevem <em>como está</em> o elemento.
			</p>

			<Subhead>Interação com o utilizador · em direto</Subhead>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<MousePointerClick className="h-5 w-5" aria-hidden />}
					title=":hover"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Quando o cursor passa sobre o elemento. A base do feedback visual.
				</ConceptCard>
				<ConceptCard
					icon={<Hand className="h-5 w-5" aria-hidden />}
					title=":active"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Enquanto se clica (o instante do pressionado).
				</ConceptCard>
				<ConceptCard
					icon={<Keyboard className="h-5 w-5" aria-hidden />}
					title=":focus"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Quando um campo fica selecionado, com clique ou com <Code>Tab</Code>.
					Essencial para acessibilidade.
				</ConceptCard>
			</div>
			<Callout variant="tip" title="A ordem importa (LoVe-HA)">
				Se estilizares links nos seus quatro estados, escreve-os nesta ordem:{" "}
				<Code>:link</Code> → <Code>:visited</Code> → <Code>:hover</Code> →{" "}
				<Code>:active</Code>. Se <Code>:hover</Code> for antes, os estilos base
				pisam-no e o efeito “não funciona”.
			</Callout>
			<div className="mb-4">
				<Preview label="Vista prévia · passa o cursor, clica e usa Tab">
					<style>{`.d9-btn { background-color: #3498db; color: white; border: none; border-radius: 8px; padding: 10px 20px; cursor: pointer; transition: background-color 0.3s; }
.d9-btn:hover { background-color: #2980b9; }
.d9-btn:active { transform: scale(0.96); }
.d9-focus:focus { outline: 2px solid #3498db; border-color: #3498db; }`}</style>
					<div className="space-y-3">
						<button type="button" className="d9-btn">
							Passa o cursor e clica-me
						</button>
						<div>
							<label htmlFor="d9-foco" className={labelClass}>
								Campo com :focus (clica ou chega com Tab)
							</label>
							<input
								id="d9-foco"
								name="d9-foco"
								type="text"
								placeholder="Olha a borda"
								className={`d9-focus ${inputClass}`}
							/>
						</div>
					</div>
				</Preview>
			</div>
			<CodeBlock
				language="css"
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

			<Subhead>Estruturais: posição no DOM · em direto</Subhead>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<Star className="h-5 w-5" aria-hidden />}
					title=":first-child"
					iconClassName="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
				>
					O primeiro entre os seus irmãos.
				</ConceptCard>
				<ConceptCard
					icon={<Flag className="h-5 w-5" aria-hidden />}
					title=":last-child"
					iconClassName="bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300"
				>
					O último entre os seus irmãos.
				</ConceptCard>
				<ConceptCard
					icon={<ListOrdered className="h-5 w-5" aria-hidden />}
					title=":nth-child()"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					O mais versátil, com número ou fórmula: <Code>(3)</Code>,{" "}
					<Code>(odd)</Code>, <Code>(even)</Code>, <Code>(2n+1)</Code>.
				</ConceptCard>
			</div>
			<div className="mb-4">
				<Preview label="Vista prévia · lista zebra: primeiro, pares e último">
					<style>{`.d9-zebra li:first-child { font-weight: bold; }
.d9-zebra li:nth-child(even) { background-color: #f2f2f2; }
.d9-zebra li:last-child { border-bottom: 3px solid #3498db; }`}</style>
					<ol className="d9-zebra list-decimal list-inside space-y-1">
						<li>Primeiro item (negrito)</li>
						<li>Segundo item (fundo cinza)</li>
						<li>Terceiro item</li>
						<li>Quarto item (fundo cinza)</li>
						<li>Último item (borda azul)</li>
					</ol>
				</Preview>
			</div>
			<div className="space-y-4">
				<CodeBlock
					language="css"
					codeString={`/* Sem borda superior no primeiro item */
li:first-child {
  border-top: none;
}

/* Estilo "zebra" para as linhas de uma tabela */
tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}`}
				/>
			</div>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
				<Send className="h-6 w-6 text-blue-500" aria-hidden />📝 Tarefa: menu
				interativo e lista estilizada
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Um menu que reage ao utilizador e uma lista com ritmo visual, tudo com o
				novo de hoje.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Crie o HTML">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							<Code>&lt;nav&gt;</Code> com <Code>&lt;ul&gt;</Code> e vários{" "}
							<Code>&lt;li&gt;</Code> com <Code>&lt;a&gt;</Code> dentro.
						</CheckItem>
						<CheckItem>
							Uma <Code>&lt;ol&gt;</Code> com vários itens.
						</CheckItem>
					</ul>
				</Step>
				<Step number={2} title="Estilize o menu">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							Seletor descendente <Code>nav a</Code> para a base dos links.
						</CheckItem>
						<CheckItem>
							<Code>a:hover</Code> para mudarem de cor ou serem sublinhados com
							o cursor em cima.
						</CheckItem>
					</ul>
				</Step>
				<Step number={3} title="Estilize a lista">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							<Code>:nth-child(odd)</Code> com fundo nas linhas ímpares.
						</CheckItem>
						<CheckItem>
							<Code>:first-child</Code> a negrito (
							<Code>font-weight: bold;</Code>).
						</CheckItem>
						<CheckItem>
							<Code>:last-child</Code> com uma borda inferior especial.
						</CheckItem>
					</ul>
				</Step>
				<Step number={4} title="Teste tudo">
					Passe o cursor pelo menu e veja a zebra da lista: se algo “não
					funciona”, reveja a ordem LoVe-HA.
				</Step>
			</ol>
			<Callout variant="success" title="Fecho">
				Já seleciona por relação, atributo, estado e posição. Na lição 10 chegam
				os pseudo-elementos e o algoritmo que decide que regra ganha quando
				várias apontam ao mesmo elemento.
			</Callout>
		</section>
	</div>
);

export default Lecture9Pt;
