import {
	Braces,
	Check,
	FileCode2,
	Globe,
	Heading1,
	Languages,
	Minus,
	MonitorSmartphone,
	Pilcrow,
	Search,
	SeparatorHorizontal,
	Sparkles,
	Type,
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

const Lecture2Pt = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />2 horas · Esqueleto
				sólido e semântico
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Pensemos na construção de uma casa: o HTML é a base e a estrutura dessa
				casa. Ele define o significado e a estrutura do conteúdo, enquanto o
				CSS, que veremos mais adiante, é a decoração. Hoje, focaremos em
				construir esse esqueleto sólido e semântico. Ao longo destas duas horas,
				cobriremos os elementos essenciais que compõem qualquer página web.
			</p>
		</section>

		<section>
			<SectionTitle index={1}>
				Anatomia de um documento HTML: &lt;!DOCTYPE&gt;, &lt;html&gt;,
				&lt;head&gt; e &lt;body&gt;
			</SectionTitle>
			<p className="mb-4">
				Todo documento HTML segue uma estrutura fundamental que debemos
				respeitar. Essa estrutura é como o esqueleto da nossa página e é
				composta por quatro partes principais.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<FileCode2 className="h-5 w-5" aria-hidden />}
					title="<!DOCTYPE html>"
					iconClassName="bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-300"
				>
					A primeira linha, sempre. Não é uma tag HTML: é uma instrução que
					informa ao navegador que você usa HTML5 moderno.
				</ConceptCard>
				<ConceptCard
					icon={<Braces className="h-5 w-5" aria-hidden />}
					title="<html>"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					A tag raiz que envolve tudo. Dentro dela aninhamos{" "}
					<Code>&lt;head&gt;</Code> e <Code>&lt;body&gt;</Code>.
				</ConceptCard>
				<ConceptCard
					icon={<Globe className="h-5 w-5" aria-hidden />}
					title="<head>"
					iconClassName="bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300"
				>
					O cabeçalho: metadados não visíveis (título, links para CSS, etc.).
				</ConceptCard>
				<ConceptCard
					icon={<MonitorSmartphone className="h-5 w-5" aria-hidden />}
					title="<body>"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					O corpo: todo o conteúdo visível (textos, imagens, links).
				</ConceptCard>
			</div>
			<p className="mt-6 mb-2 font-medium">Um esqueleto básico seria assim:</p>
			<CodeBlock
				language="html"
				codeString={`<!DOCTYPE html>
<html>
  <head>
    <!-- Metadados e links para estilos -->
  </head>
  <body>
    <!-- Conteúdo visível da página -->
  </body>
</html>`}
			/>
			<Callout variant="tip" title="Legibilidade acima de tudo">
				É fundamental manter um aninhamento e indentação corretos no código para
				que seja legível e fácil de manter.
			</Callout>
		</section>

		<section>
			<SectionTitle index={2}>
				Meta Tags Essenciais e o Atributo `lang`
			</SectionTitle>
			<p className="mb-4">
				Dentro da tag <Code>&lt;head&gt;</Code>, definimos informações cruciais
				tanto para o navegador quanto para os motores de busca (como o Google).
				Estas são as meta tags mais importantes:
			</p>
			<div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800/60">
				<div className="flex gap-3 p-4">
					<Languages className="h-5 w-5 shrink-0 text-blue-500" aria-hidden />
					<div className="text-sm">
						<Code>&lt;meta charset="utf-8"&gt;</Code>
						<p className="mt-1 text-gray-600 dark:text-gray-300">
							Declara a codificação. UTF-8 é o padrão: representa quase qualquer
							caractere de qualquer idioma (o “ç”, os acentos).
						</p>
					</div>
				</div>
				<div className="flex gap-3 p-4">
					<MonitorSmartphone
						className="h-5 w-5 shrink-0 text-green-500"
						aria-hidden
					/>
					<div className="text-sm">
						<Code>
							&lt;meta name="viewport" content="width=device-width,
							initial-scale=1.0"&gt;
						</Code>
						<p className="mt-1 text-gray-600 dark:text-gray-300">
							Chave para o design responsivo: a largura se ajusta ao dispositivo
							e o zoom inicial fica em 100%.
						</p>
					</div>
				</div>
				<div className="flex gap-3 p-4">
					<Type className="h-5 w-5 shrink-0 text-purple-500" aria-hidden />
					<div className="text-sm">
						<Code>&lt;title&gt;</Code>
						<p className="mt-1 text-gray-600 dark:text-gray-300">
							O título na aba do navegador. Extremamente importante para o SEO.
						</p>
					</div>
				</div>
				<div className="flex gap-3 p-4">
					<Search className="h-5 w-5 shrink-0 text-amber-500" aria-hidden />
					<div className="text-sm">
						<Code>&lt;meta name="description" content="..."&gt;</Code>
						<p className="mt-1 text-gray-600 dark:text-gray-300">
							Breve descrição que os buscadores exibem nos resultados.
						</p>
					</div>
				</div>
				<div className="flex gap-3 p-4">
					<Globe className="h-5 w-5 shrink-0 text-sky-500" aria-hidden />
					<div className="text-sm">
						<Code>lang</Code> em <Code>&lt;html lang="pt"&gt;</Code>
						<p className="mt-1 text-gray-600 dark:text-gray-300">
							Especifica o idioma principal do documento: crucial para
							acessibilidade e SEO.
						</p>
					</div>
				</div>
			</div>

			<div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-700">
				<div className="flex items-end gap-1 bg-gray-100 px-3 pt-2 dark:bg-gray-800">
					<div className="flex items-center gap-2 rounded-t-lg bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm dark:bg-gray-900 dark:text-gray-200">
						<span className="flex gap-1" aria-hidden>
							<span className="h-2 w-2 rounded-full bg-red-400" />
							<span className="h-2 w-2 rounded-full bg-yellow-400" />
							<span className="h-2 w-2 rounded-full bg-green-400" />
						</span>
						Lição 2: Estrutura HTML - Meu Curso Web
					</div>
				</div>
				<p className="bg-white px-4 py-3 text-center text-xs text-gray-500 dark:bg-gray-900 dark:text-gray-400">
					É assim que o <Code>&lt;title&gt;</Code> aparece na aba do navegador
				</p>
			</div>

			<h4 className="text-xl font-semibold mt-6 mb-2">
				Exemplo de uma seção &lt;head&gt; completa:
			</h4>
			<CodeBlock
				language="html"
				codeString={`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Aprenda os fundamentos de HTML nesta lição interativa.">
  <title>Lição 2: Estrutura HTML - Meu Curso Web</title>
</head>`}
			/>
		</section>

		<section>
			<SectionTitle index={3}>
				Cabeçalhos &lt;h1&gt; a &lt;h6&gt;: Hierarquia e SEO
			</SectionTitle>
			<p className="mb-4">
				Os cabeçalhos são usados para estruturar o conteúdo de forma
				hierárquica. O HTML nos oferece seis níveis, de <Code>&lt;h1&gt;</Code>{" "}
				(o mais importante) a <Code>&lt;h6&gt;</Code> (o menos importante).
				Usá-los corretamente cria uma estrutura lógica que ajuda os usuários e
				os motores de busca a entender a organização do conteúdo.
			</p>
			<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/60">
				<p className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
					<Heading1 className="h-4 w-4" aria-hidden />
					Prévia · os seis níveis em escala
				</p>
				<div className="space-y-1 border-l-4 border-blue-500 pl-4">
					<p className="text-3xl font-extrabold text-gray-900 dark:text-white">
						Título h1{" "}
						<span className="text-sm font-normal text-gray-400">
							· uma vez por página
						</span>
					</p>
					<p className="text-2xl font-bold text-gray-900 dark:text-white">
						Subtítulo h2
					</p>
					<p className="text-xl font-bold text-gray-800 dark:text-gray-100">
						Seção h3
					</p>
					<p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
						Subseção h4
					</p>
					<p className="text-base font-semibold text-gray-600 dark:text-gray-300">
						Detalhe h5
					</p>
					<p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
						Nota menor h6
					</p>
				</div>
			</div>
			<Callout variant="warning" title="Regra de Ouro para SEO:">
				Use uma única tag <Code>&lt;h1&gt;</Code> por página. Os buscadores
				identificam o <Code>&lt;h1&gt;</Code> como o título principal do
				conteúdo dessa página.
			</Callout>
			<CodeBlock
				language="html"
				codeString={`<body>
  <h1>Anatomia de um Documento HTML</h1>
  <p>O documento é dividido em duas partes principais...</p>

  <h2>O Cabeçalho (<head>)</h2>
  <p>Aqui definimos os metadados...</p>

  <h3>Meta Tags Comuns</h3>
  <p>As meta tags mais importantes são...</p>

  <h2>O Corpo (<body>)</h2>
  <p>Aqui vai todo o conteúdo visível...</p>
</body>`}
			/>
		</section>

		<section>
			<SectionTitle index={4}>
				Parágrafos &lt;p&gt;, Quebras de Linha &lt;br&gt;, e Linhas Horizontais
				&lt;hr&gt;
			</SectionTitle>
			<p className="mb-4">
				Estes são os elementos básicos para formatar o fluxo de texto:
			</p>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<Pilcrow className="h-5 w-5" aria-hidden />}
					title="<p> · Parágrafo"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Elemento de bloco: ocupa toda a largura e começa numa linha nova.
				</ConceptCard>
				<ConceptCard
					icon={<Minus className="h-5 w-5" aria-hidden />}
					title="<br> · Quebra"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					Quebra simples sem criar parágrafo (endereços, poemas). Tag vazia, sem
					fechamento.
				</ConceptCard>
				<ConceptCard
					icon={<SeparatorHorizontal className="h-5 w-5" aria-hidden />}
					title="<hr> · Ruptura"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Linha horizontal: quebra temática entre seções.
				</ConceptCard>
			</div>
			<div className="mt-4 rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-5 dark:border-gray-600 dark:bg-gray-800/40">
				<p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
					Prévia · como o navegador renderiza
				</p>
				<p className="text-gray-800 dark:text-gray-200">
					Este é o primeiro parágrafo. Fala sobre um tópico específico.
				</p>
				<hr className="my-3 border-gray-300 dark:border-gray-600" />
				<p className="text-gray-800 dark:text-gray-200">
					Este é o segundo parágrafo, após a quebra temática.
				</p>
				<p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
					Ministério da Educação
					<br />
					Rua Falsa 123
					<br />
					Cidade Capital
				</p>
			</div>
			<CodeBlock
				language="html"
				codeString={`<p>Este é o primeiro parágrafo. Fala sobre um tópico específico.</p>
<hr>
<p>Este é o segundo parágrafo, que aborda um tópico diferente após a quebra temática.</p>
<p>
  Ministério da Educação<br>
  Rua Falsa 123<br>
  Cidade Capital
</p>`}
			/>
		</section>

		<section>
			<SectionTitle index={5}>
				Pré-formatação de texto com &lt;pre&gt;
			</SectionTitle>
			<p className="mb-4">
				Às vezes, precisamos que o navegador respeite os espaços em branco,
				tabulações e quebras de linha exatamente como os escrevemos em nosso
				código. Para isso, usamos a tag <Code>&lt;pre&gt;</Code>.
			</p>
			<Callout variant="info" title="Monoespaçada e literal">
				O texto dentro de <Code>&lt;pre&gt;</Code> usa fonte de largura fixa e
				preserva espaços e quebras. Ideal para trechos de código, poesia ou arte
				ASCII.
			</Callout>
			<CodeBlock
				language="html"
				codeString={`<pre>
  function saudar(nome) {
    console.log("Olá, " + nome);
  }

  saudar("Mundo");
</pre>

<pre>
  O Tejo é mais belo que o rio que corre pela minha aldeia,
  Mas o Tejo não é mais belo que o rio que corre pela minha aldeia
  Porque o Tejo não é o rio que corre pela minha aldeia.
      - Alberto Caeiro (Fernando Pessoa)
</pre>`}
			/>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2">
				📝 Tarefa: Estruturando sua Biografia
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Nesta tarefa, você aplicará o que aprendeu sobre a estrutura de um
				documento HTML, metadados e tags de texto para criar uma página de
				biografia simples.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Crie o Arquivo">
					Na pasta do seu projeto, crie <Code>biografia.html</Code>.
				</Step>
				<Step number={2} title="Estrutura Base">
					Use o Emmet (<Code>!</Code>) para gerar a estrutura inicial.
				</Step>
				<Step number={3} title="Configure o Cabeçalho (<head>)">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							Codificação <Code>UTF-8</Code>.
						</CheckItem>
						<CheckItem>
							Meta tag <Code>viewport</Code> para design responsivo.
						</CheckItem>
						<CheckItem>
							<Code>&lt;title&gt;</Code> → “Minha Biografia - [Seu Nome]”.
						</CheckItem>
						<CheckItem>
							<Code>&lt;meta name="description"&gt;</Code> breve.
						</CheckItem>
						<CheckItem>
							<Code>lang="pt"</Code> na tag <Code>&lt;html&gt;</Code>.
						</CheckItem>
					</ul>
				</Step>
				<Step number={4} title="Construa o Corpo (<body>)">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							Uma tag <Code>&lt;h1&gt;</Code> com seu nome completo.
						</CheckItem>
						<CheckItem>
							Seção <Code>&lt;h2&gt;</Code> “Sobre Mim” + um ou dois{" "}
							<Code>&lt;p&gt;</Code>.
						</CheckItem>
						<CheckItem>
							Uma <Code>&lt;hr&gt;</Code> separando as seções.
						</CheckItem>
						<CheckItem>
							Seção <Code>&lt;h2&gt;</Code> “Meus Hobbies” + um parágrafo.
						</CheckItem>
						<CheckItem>
							Uma <Code>&lt;br&gt;</Code> num endereço ou poema curto.
						</CheckItem>
					</ul>
				</Step>
				<Step number={5} title="Visualize seu Trabalho">
					Abra <Code>biografia.html</Code> com o Live Server.
				</Step>
			</ol>
			<Callout variant="success" title="Fechamento">
				Esta prática ajudará a solidificar sua compreensão da hierarquia de
				cabeçalhos e da estrutura semântica básica de uma página web.
			</Callout>
		</section>
	</div>
);

export default Lecture2Pt;
