import {
	Check,
	Clock,
	Dna,
	KeyRound,
	ListOrdered,
	Quote,
	Scale,
	Send,
	Sparkles,
	Tag,
	Type,
	Zap,
} from "lucide-react";
import {
	Callout,
	ConceptCard,
	SectionTitle,
	Step,
} from "@/components/lecture/lecture-blocks";
import CodeTabs from "@/components/ui/code-tabs";

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

const Lecture10Pt = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				CSS · pintar partes e ganhar lutas
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Na lição 9 aprendemos a apontar. Hoje, dois superpoderes para fechar o
				módulo: estilizar <strong>partes</strong> de um elemento sem adicionar
				HTML e perceber o <strong>algoritmo</strong> com que o navegador decide
				que regra ganha.
			</p>
		</section>

		<section>
			<SectionTitle index={1}>
				Pseudo-elementos: partes sem HTML extra
			</SectionTitle>
			<p className="mb-4">
				As pseudo-classes descrevem o <strong>estado</strong> de um elemento
				completo (<Code>:hover</Code>). Os <strong>pseudo-elementos</strong>,
				pelo contrário, apontam a uma <strong>parte</strong> ou geram conteúdo
				cosmético sem HTML adicional. Distinguem-se pelos{" "}
				<strong>dois pontos duplos</strong> (<Code>::</Code>).
			</p>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<Quote className="h-5 w-5" aria-hidden />}
					title="::before / ::after"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Os mais potentes: criam conteúdo antes ou depois do real. Exigem{" "}
					<Code>content</Code>. Ideais para aspas, ícones e formas.
				</ConceptCard>
				<ConceptCard
					icon={<Type className="h-5 w-5" aria-hidden />}
					title="::first-letter"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					A primeira letra de um bloco. A clássica capitular dos livros.
				</ConceptCard>
				<ConceptCard
					icon={<Tag className="h-5 w-5" aria-hidden />}
					title="::first-line"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					A primeira linha de texto do bloco, seja qual for o seu tamanho.
				</ConceptCard>
			</div>
			<Callout variant="warning" title="Sem content não existem">
				<Code>::before</Code> e <Code>::after</Code>{" "}
				<strong>não se renderizam</strong> sem a propriedade{" "}
				<Code>content</Code>, ainda que vazia (
				<Code>content: &quot;&quot;</Code>). É o esquecimento número um com
				estes seletores.
			</Callout>
			<div className="mb-4">
				<Preview label="Vista prévia · aspas, capitular e primeira linha em direto">
					<style>{`.d10-cita { font-style: italic; }
.d10-cita::before { content: '\\201C'; font-size: 2em; color: #3498db; }
.d10-cita::after { content: '\\201D'; font-size: 2em; color: #3498db; }
.d10-cap::first-letter { font-size: 200%; font-weight: bold; color: #2980b9; }
.d10-linea::first-line { color: #7f8c8d; }`}</style>
					<div className="space-y-4">
						<blockquote className="d10-cita">
							O design é a inteligência feita visível.
						</blockquote>
						<p className="d10-cap">
							Era uma vez um parágrafo aberto por uma letra gigante, como nos
							livros antigos.
						</p>
						<p className="d10-linea">
							Só esta primeira linha vai em cinzento: se estreitares a janela, a
							segunda linha volta à cor normal porque já não é a primeira.
						</p>
					</div>
				</Preview>
			</div>
			<p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
				Na demo simplificámos as aspas sem posicionamento (o posicionamento
				chega no módulo 3). O exemplo completo da lição, com aspas gigantes
				absolutas, é este:
			</p>
			<CodeTabs
				html={`<blockquote>O design é a inteligência feita visível.</blockquote>

<p>Era uma vez um parágrafo aberto por uma letra gigante.</p>

<p>Só esta primeira linha vai em cinzento: se estreitares a janela, a segunda volta à cor normal.</p>`}
				css={`blockquote {
  font-style: italic;
  position: relative; /* Necessário para posicionar os pseudo-elementos */
}

blockquote::before {
  content: '"'; /* O conteúdo é obrigatório */
  font-size: 4em;
  color: #ddd;
  position: absolute;
  left: -0.5em;
  top: -0.2em;
}

p::first-letter {
  font-size: 200%;
  font-weight: bold;
  color: #2980b9;
}

p::first-line {
  color: #7f8c8d;
}`}
			/>
		</section>

		<section>
			<SectionTitle index={2}>
				O algoritmo: quem ganha a batalha de estilos
			</SectionTitle>
			<p className="mb-4">
				Porque uma regra funciona e outra não? Quando vários estilos apontam ao
				mesmo elemento, o navegador resolve o conflito em três passos,{" "}
				<strong>nesta ordem</strong>:
			</p>
			<div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
				<div className="flex-1 rounded-xl bg-amber-50 p-3 text-center text-sm font-semibold text-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
					<Scale className="mx-auto mb-1 h-5 w-5" aria-hidden />1 ·
					Especificidade
				</div>
				<div className="text-center font-bold text-gray-400" aria-hidden>
					→
				</div>
				<div className="flex-1 rounded-xl bg-blue-50 p-3 text-center text-sm font-semibold text-blue-800 dark:bg-blue-950/40 dark:text-blue-200">
					<Clock className="mx-auto mb-1 h-5 w-5" aria-hidden />2 · Ordem
					(cascata)
				</div>
				<div className="text-center font-bold text-gray-400" aria-hidden>
					→
				</div>
				<div className="flex-1 rounded-xl bg-green-50 p-3 text-center text-sm font-semibold text-green-800 dark:bg-green-950/40 dark:text-green-200">
					<Dna className="mx-auto mb-1 h-5 w-5" aria-hidden />3 · Herança
				</div>
			</div>

			<Subhead>Passo 1 · Especificidade: o peso do seletor</Subhead>
			<p className="mb-4">
				O navegador calcula que seletor é mais “específico”. A hierarquia, do
				maior para o menor peso:
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Zap className="h-5 w-5" aria-hidden />}
					title="Estilos em linha"
					iconClassName="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
				>
					Um atributo <Code>style</Code> ganha sobre qualquer folha. (Mas já
					sabes pela lição 8 que convém evitá-lo.)
				</ConceptCard>
				<ConceptCard
					icon={<KeyRound className="h-5 w-5" aria-hidden />}
					title="ID (#)"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Extremamente específico: um só ID pesa mais que qualquer quantidade de
					classes.
				</ConceptCard>
				<ConceptCard
					icon={<Tag className="h-5 w-5" aria-hidden />}
					title="Classes, pseudo-classes e atributos"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					<Code>.btn</Code>, <Code>:hover</Code>,{" "}
					<Code>[type=&quot;text&quot;]</Code>: o mesmo nível entre eles.
				</ConceptCard>
				<ConceptCard
					icon={<Type className="h-5 w-5" aria-hidden />}
					title="Tipos e pseudo-elementos"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					<Code>p</Code>, <Code>div</Code>, <Code>::before</Code>: os menos
					específicos. O <Code>*</Code> e os combinadores valem zero.
				</ConceptCard>
			</div>
			<Callout variant="info" title="Como se calcula?">
				O navegador conta IDs, classes e tags de cada seletor.{" "}
				<Code>#nav .link</Code> (1 ID + 1 classe) ganha a{" "}
				<Code>div a.button.active</Code> (0 IDs + 3 classes): o ID pesa mais que
				todas as classes juntas.
			</Callout>
			<div className="mb-4">
				<Preview label="Vista prévia · três regras lutam, uma ganha (prevê antes de ver)">
					<style>{`.d10-batalla p { color: green; }
.d10-batalla .texto-azul { color: blue; }
.d10-batalla #parrafo-importante { color: red; }`}</style>
					<div className="d10-batalla">
						<p id="parrafo-importante" className="texto-azul">
							Olá Mundo (deveria ver-se vermelho)
						</p>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<p id="paragrafo-importante" class="texto-azul">Olá Mundo</p>`}
				css={`#paragrafo-importante { color: red; }   /* GANHA (1 ID) */
.texto-azul { color: blue; }     /* Perde (1 Classe) */
p { color: green; }               /* Perde (1 Tag) */`}
			/>

			<Subhead>Passo 2 · Cascata: em empate, ganha a última</Subhead>
			<p className="mb-4">
				Se duas regras empatam em especificidade, importa a “ordem de chegada”:
				a declarada <strong>mais tarde</strong> ganha. Por isso a ordem dos teus
				ficheiros <Code>&lt;link&gt;</Code> também importa.
			</p>
			<div className="mb-4">
				<Preview label="Vista prévia · mesmo seletor, duas cores">
					<style>{`.d10-empate p { color: blue; }
.d10-empate p { color: red; }`}</style>
					<div className="d10-empate">
						<p>Este parágrafo é vermelho: ganhou a última regra.</p>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<p>Este parágrafo é vermelho: ganhou a última regra.</p>`}
				css={`p { color: blue; }
p { color: red; } /* Esta ganha, o parágrafo será vermelho */`}
			/>

			<Subhead>Passo 3 · Herança: o último recurso</Subhead>
			<p className="mb-4">
				Se <strong>nenhuma</strong> regra aponta ao elemento, herda do pai. Mas
				nem tudo se herda: <Code>color</Code>, <Code>font-family</Code>,{" "}
				<Code>font-size</Code> e <Code>text-align</Code> sim;{" "}
				<Code>border</Code>, <Code>padding</Code> e{" "}
				<Code>background-color</Code> não.
			</p>
			<div className="mb-4">
				<Preview label="Vista prévia · a cor herda-se, a borda não">
					<div
						style={{
							color: "green",
							border: "2px solid green",
							padding: "12px",
						}}
					>
						<p>
							Texto verde por herança da div. A borda, pelo contrário, é só da
							div.
						</p>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div style="color: green;">
  <p>Este texto é verde porque herda a cor da div.</p>
</div>`}
			/>
			<div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
				<ListOrdered className="h-4 w-4" aria-hidden />O algoritmo completo:
				especificidade → ordem → herança. Na lição 11 vê-se a fundo.
			</div>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
				<Send className="h-6 w-6 text-blue-500" aria-hidden />📝 Tarefa: o
				puzzle da especificidade
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Pseudo-elementos em ação e um duelo de seletores onde primeiro{" "}
				<strong>prevês</strong> e depois confirmas.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Citação com aspas gigantes">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							Crie um <Code>&lt;blockquote&gt;</Code> com texto dentro.
						</CheckItem>
						<CheckItem>
							Com <Code>::before</Code> e <Code>::after</Code> adicione aspas
							gigantes no início e no fim, como na lição (não se esqueça do{" "}
							<Code>content</Code>).
						</CheckItem>
					</ul>
				</Step>
				<Step number={2} title="O botão em disputa">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							Crie{" "}
							<Code>
								&lt;button id=&quot;btn-principal&quot;
								class=&quot;btn-acao&quot;&gt;
							</Code>
							.
						</CheckItem>
						<CheckItem>
							Três regras para o <Code>background-color</Code>: uma com{" "}
							<Code>button</Code>, outra com <Code>.btn-acao</Code> e outra com{" "}
							<Code>#btn-principal</Code>, cada uma de uma cor.
						</CheckItem>
					</ul>
				</Step>
				<Step number={3} title="Preveja antes de ver">
					Anote de que cor acha que será o botão <strong>antes</strong> de abrir
					o navegador. Depois confirme e explique que passo do algoritmo
					decidiu.
				</Step>
			</ol>
			<Callout variant="success" title="Fecho do módulo">
				Fechamos Fundamentos de CSS: onde vive o estilo, a quem aponta, os seus
				superpoderes e quem ganha cada luta. Na lição 11 aprofundamos
				especificidade e herança, e depois entramos no modelo de caixa.
			</Callout>
		</section>
	</div>
);

export default Lecture10Pt;
