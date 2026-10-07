import {
	Accessibility,
	Bold,
	BookOpen,
	Check,
	ChefHat,
	Clock,
	Eye,
	Highlighter,
	Italic,
	List,
	ListOrdered,
	Sparkles,
	Superscript,
	Underline,
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

const Lecture3Pt = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Semântica · significado, não só aparência
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Olá novamente e bem-vindos à terceira aula do nosso módulo! Na sessão
				anterior, estabelecemos as bases da estrutura de um documento HTML.
				Hoje, vamos aprofundar como formatar e estruturar texto e listas, que
				são os componentes principais de quase qualquer página web.
			</p>
			<Callout variant="info" title="A ideia central de hoje">
				A <strong>semântica</strong>: a arte de usar as tags HTML corretas para
				descrever o significado do nosso conteúdo, não apenas a sua aparência.
				Isso é fundamental para a acessibilidade e o SEO.
			</Callout>
		</section>

		<section>
			<SectionTitle index={1}>
				Tags de Formatação de Texto: Além da Aparência
			</SectionTitle>
			<p className="mb-4">
				Ao formatar o texto, é crucial diferenciar entre as tags que são
				puramente de apresentação (visuais) e as que são semânticas (com
				significado).
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Eye className="h-5 w-5" aria-hidden />}
					title="Apresentação"
					iconClassName="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
				>
					Só muda a aparência: <Code>&lt;b&gt;</Code>, <Code>&lt;i&gt;</Code>,{" "}
					<Code>&lt;u&gt;</Code>. Ajuda visual sem importância extra.
				</ConceptCard>
				<ConceptCard
					icon={<Accessibility className="h-5 w-5" aria-hidden />}
					title="Semântica"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					Descreve significado: <Code>&lt;strong&gt;</Code>,{" "}
					<Code>&lt;em&gt;</Code>, <Code>&lt;ins&gt;</Code>. Um leitor de tela
					pode mudar o tom de voz.
				</ConceptCard>
			</div>

			<Subhead>Negrito: &lt;b&gt; vs. &lt;strong&gt;</Subhead>
			<p className="mb-4">
				Ambas as tags fazem o texto aparecer em negrito, mas o propósito delas é
				muito diferente.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Bold className="h-5 w-5" aria-hidden />}
					title="<b> · Bold"
					iconClassName="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
				>
					Apresentação: chama a atenção sem importância especial. Como destacar
					o nome de um produto numa resenha.
				</ConceptCard>
				<ConceptCard
					icon={<Bold className="h-5 w-5" aria-hidden />}
					title="<strong> · Importância forte"
					iconClassName="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
				>
					Semântica: grande importância, seriedade ou urgência. O leitor de tela
					pode enfatizar com outro tom.
				</ConceptCard>
			</div>
			<div className="mt-4">
				<Preview label="Prévia · como o navegador renderiza">
					<p>
						Esta receita precisa de <b>farinha de trigo</b> e açúcar.
					</p>
					<p className="mt-2">
						<strong>Aviso:</strong> O chão está molhado.
					</p>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<p>Esta receita precisa de <b>farinha de trigo</b> e açúcar.</p>
<p><strong>Aviso:</strong> O chão está molhado.</p>`}
			/>

			<Subhead>Itálico: &lt;i&gt; vs. &lt;em&gt;</Subhead>
			<p className="mb-4">
				Assim como com o negrito, aqui também temos uma diferença entre o visual
				e o semântico.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Italic className="h-5 w-5" aria-hidden />}
					title="<i> · Italic"
					iconClassName="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
				>
					Distingue texto sem ênfase particular: termos técnicos, nomes de
					navios, pensamentos ou frases noutro idioma.
				</ConceptCard>
				<ConceptCard
					icon={<Italic className="h-5 w-5" aria-hidden />}
					title="<em> · Ênfase"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Semântica: dá ênfase e pode mudar o significado da oração.
				</ConceptCard>
			</div>
			<div className="mt-4">
				<Preview label="Prévia · como o navegador renderiza">
					<p>
						O termo <i>Homo sapiens</i> refere-se à nossa espécie.
					</p>
					<p className="mt-2">
						Você deve fazê-lo <em>agora</em>, não depois.
					</p>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<p>O termo <i>Homo sapiens</i> refere-se à nossa espécie.</p>
<p>Você deve fazê-lo <em>agora</em>, não depois.</p>`}
			/>

			<Subhead>Sublinhado: &lt;u&gt; vs. &lt;ins&gt;</Subhead>
			<p className="mb-4">
				O uso de <Code>&lt;u&gt;</Code> tornou-se incomum porque os usuários
				associam texto sublinhado a links.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Underline className="h-5 w-5" aria-hidden />}
					title="<u> · Sublinhado"
					iconClassName="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
				>
					Reservado para anotações não textuais, como marcar uma palavra com
					erro de ortografia.
				</ConceptCard>
				<ConceptCard
					icon={<Underline className="h-5 w-5" aria-hidden />}
					title="<ins> · Inserido"
					iconClassName="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
				>
					Semântica: marca conteúdo adicionado ao documento (edição ou
					atualização).
				</ConceptCard>
			</div>
			<div className="mt-4">
				<Preview label="Prévia · como o navegador renderiza">
					<p>
						Esta palavra está{" "}
						<u className="underline decoration-red-500 decoration-wavy">
							escrita
						</u>{" "}
						erradamente.
					</p>
					<p className="mt-2">
						O preço é de <del>R$100</del> <ins>R$75</ins> por tempo limitado.
					</p>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<p>Esta palavra está <u class="decoration-red-500 underline-wavy">escrita</u> erradamente.</p>
<p>O preço é de <del>R$100</del> <ins>R$75</ins> por tempo limitado.</p>`}
			/>

			<Subhead>Subscrito (&lt;sub&gt;) e Sobrescrito (&lt;sup&gt;)</Subhead>
			<p className="mb-4">
				Estas tags são muito úteis para fórmulas matemáticas ou químicas:{" "}
				<Code>&lt;sub&gt;</Code> desce o texto da linha normal e{" "}
				<Code>&lt;sup&gt;</Code> sobe.
			</p>
			<div className="mt-4">
				<Preview label="Prévia · como o navegador renderiza">
					<p>
						A fórmula da água é H<sub>2</sub>O.
					</p>
					<p className="mt-2">
						O teorema de Pitágoras é a<sup>2</sup> + b<sup>2</sup> = c
						<sup>2</sup>.
					</p>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<p>A fórmula da água é H<sub>2</sub>O.</p>
<p>O teorema de Pitágoras é a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>.</p>`}
			/>

			<Subhead>Outras Tags de Formatação de Texto Úteis</Subhead>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<Superscript className="h-5 w-5" aria-hidden />}
					title="<small>"
				>
					Letras pequenas: comentários legais ou direitos autorais.
				</ConceptCard>
				<ConceptCard
					icon={<Highlighter className="h-5 w-5" aria-hidden />}
					title="<mark>"
					iconClassName="bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300"
				>
					Destaca por relevância em contexto, como em resultados de pesquisa.
				</ConceptCard>
				<ConceptCard
					icon={<Clock className="h-5 w-5" aria-hidden />}
					title="<time>"
					iconClassName="bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300"
				>
					Datas e horas, com <Code>datetime</Code> para as máquinas entenderem.
				</ConceptCard>
			</div>
			<div className="mt-4">
				<Preview label="Prévia · como o navegador renderiza">
					<p>
						O resultado da busca por <mark>HTML</mark> retornou 5 milhões de
						páginas.
					</p>
					<p className="mt-2">
						A reunião está agendada para{" "}
						<time dateTime="2024-10-26T10:00">26 de Outubro às 10:00 AM</time>.
					</p>
					<p className="mt-2">
						<small>© 2024 Meu Curso Web. Todos os direitos reservados.</small>
					</p>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<p>O resultado da busca por <mark>HTML</mark> retornou 5 milhões de páginas.</p>
<p>A reunião está agendada para <time datetime="2024-10-26T10:00">26 de Outubro às 10:00 AM</time>.</p>
<footer>
  <p><small>&copy; 2024 Meu Curso Web. Todos os direitos reservados.</small></p>
</footer>`}
			/>
		</section>

		<section>
			<SectionTitle index={2}>
				Listas: Ordenadas, Não Ordenadas e de Definição
			</SectionTitle>
			<p className="mb-4">
				Listas são fundamentais para agrupar e estruturar conteúdo relacionado.
				Elas são compostas por um elemento contêiner (<Code>&lt;ol&gt;</Code>,{" "}
				<Code>&lt;ul&gt;</Code>, <Code>&lt;dl&gt;</Code>) que contém itens de
				lista (<Code>&lt;li&gt;</Code>, <Code>&lt;dt&gt;</Code>,{" "}
				<Code>&lt;dd&gt;</Code>).
			</p>

			<Subhead>Listas Não Ordenadas &lt;ul&gt;</Subhead>
			<p className="mb-4">
				São usadas para agrupar itens cujo a ordem não é importante. Por padrão,
				são exibidas com marcadores (“bullet points”).
			</p>
			<div className="grid gap-4 md:grid-cols-2">
				<Preview label="Prévia · lista real">
					<p className="mb-2 font-semibold">Lista de compras:</p>
					<ul className="list-disc space-y-1 pl-5">
						<li>Leite</li>
						<li>Pão</li>
						<li>Ovos</li>
					</ul>
				</Preview>
				<div>
					<CodeBlock
						language="html"
						codeString={`<h4>Lista de compras:</h4>
<ul>
  <li>Leite</li>
  <li>Pão</li>
  <li>Ovos</li>
</ul>`}
					/>
				</div>
			</div>

			<Subhead>Listas Ordenadas &lt;ol&gt;</Subhead>
			<p className="mb-4">
				São usadas quando a sequência dos itens é crucial, como nos passos de
				uma receita ou um ranking.
			</p>
			<div className="grid gap-4 md:grid-cols-2">
				<Preview label="Prévia · lista real">
					<p className="mb-2 font-semibold">Instruções:</p>
					<ol className="list-decimal space-y-1 pl-5">
						<li>Bater os ovos.</li>
						<li>Aquecer a frigideira.</li>
						<li>Despejar a mistura.</li>
					</ol>
				</Preview>
				<div>
					<CodeBlock
						language="html"
						codeString={`<h4>Instruções:</h4>
<ol>
  <li>Bater os ovos.</li>
  <li>Aquecer a frigideira.</li>
  <li>Despejar a mistura.</li>
</ol>`}
					/>
				</div>
			</div>

			<Subhead>Atributos para Listas Ordenadas</Subhead>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<ListOrdered className="h-5 w-5" aria-hidden />}
					title="type"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Altera o marcador: <Code>1</Code>, <Code>a</Code>, <Code>A</Code>,{" "}
					<Code>i</Code>, <Code>I</Code>.
				</ConceptCard>
				<ConceptCard
					icon={<List className="h-5 w-5" aria-hidden />}
					title="start"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					O número a partir do qual a lista deve começar.
				</ConceptCard>
				<ConceptCard
					icon={<ListOrdered className="h-5 w-5" aria-hidden />}
					title="reversed"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Booleano que inverte a ordem da numeração.
				</ConceptCard>
			</div>
			<CodeBlock
				language="html"
				codeString={`<p>Top 3 países (em ordem alfabética inversa):</p>
<ol type="A" start="3" reversed>
  <li>Portugal</li>
  <li>Espanha</li>
  <li>Brasil</li>
</ol>`}
			/>

			<Subhead>Listas de Definição &lt;dl&gt;</Subhead>
			<p className="mb-4">
				Incrivelmente útil para glossários ou pares termo-definição. Três tags:{" "}
				<Code>&lt;dl&gt;</Code> (contêiner), <Code>&lt;dt&gt;</Code> (termo) e{" "}
				<Code>&lt;dd&gt;</Code> (descrição).
			</p>
			<div className="grid gap-4 md:grid-cols-2">
				<Preview label="Prévia · glossário real">
					<dl>
						<dt className="font-bold text-gray-900 dark:text-white">HTML</dt>
						<dd className="mb-2 text-sm">
							Linguagem de Marcação de Hipertexto, usada para estruturar o
							conteúdo web.
						</dd>
						<dt className="font-bold text-gray-900 dark:text-white">CSS</dt>
						<dd className="text-sm">
							Folhas de Estilo em Cascata, usado para estilizar a apresentação
							do conteúdo.
						</dd>
					</dl>
				</Preview>
				<div>
					<CodeBlock
						language="html"
						codeString={`<dl>
  <dt>HTML</dt>
  <dd>Linguagem de Marcação de Hipertexto, usada para estruturar o conteúdo web.</dd>
  <dt>CSS</dt>
  <dd>Folhas de Estilo em Cascata, usado para estilizar a apresentação do conteúdo.</dd>
</dl>`}
					/>
				</div>
			</div>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
				<ChefHat className="h-6 w-6 text-orange-500" aria-hidden />📝 Tarefa: A
				Página da sua Receita Favorita
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				É hora de cozinhar com código! Nesta tarefa, você criará uma página web
				para a sua receita favorita, aplicando tudo o que aprendeu sobre
				formatação de texto e listas.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Crie o Arquivo">
					Crie <Code>receita.html</Code> no seu projeto.
				</Step>
				<Step number={2} title="Estrutura Base">
					Gere a base com o Emmet (<Code>!</Code>) e configure o{" "}
					<Code>&lt;head&gt;</Code> (título, metadados, etc.).
				</Step>
				<Step number={3} title="Conteúdo da Receita">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							<Code>&lt;h1&gt;</Code> com o nome da receita.
						</CheckItem>
						<CheckItem>
							Intro em <Code>&lt;p&gt;</Code> com <Code>&lt;em&gt;</Code>{" "}
							enfatizando como é deliciosa.
						</CheckItem>
						<CheckItem>
							Seção “Ingredientes” (<Code>&lt;h2&gt;</Code>) com{" "}
							<Code>&lt;ul&gt;</Code>; o ingrediente principal com{" "}
							<Code>&lt;strong&gt;</Code>.
						</CheckItem>
						<CheckItem>
							Seção “Instruções” (<Code>&lt;h2&gt;</Code>) com{" "}
							<Code>&lt;ol&gt;</Code> para os passos.
						</CheckItem>
						<CheckItem>
							Glossário (<Code>&lt;h2&gt;</Code>) com <Code>&lt;dl&gt;</Code>:
							dois termos (ex: “Refogar”, “Banho-maria”).
						</CheckItem>
						<CheckItem>
							Nota com <Code>&lt;mark&gt;</Code>: Cuidado com o forno quente!
						</CheckItem>
						<CheckItem>
							Direitos autorais com <Code>&lt;small&gt;</Code>.
						</CheckItem>
					</ul>
				</Step>
				<Step number={4} title="Visualize">
					Abra <Code>receita.html</Code> com o Live Server e confira que tudo
					está como esperado.
				</Step>
			</ol>
			<Callout variant="success" title="Fechamento">
				Esta tarefa ajudará você a dominar a organização de conteúdo e a
				entender o poder da semântica em HTML.
			</Callout>
			<p className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
				<BookOpen className="h-4 w-4 shrink-0" aria-hidden />
				Glossário, receita e formato: tudo o de hoje numa só página.
			</p>
		</section>
	</div>
);

export default Lecture3Pt;
