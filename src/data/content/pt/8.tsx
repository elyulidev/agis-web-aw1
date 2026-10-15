import {
	Braces,
	Eraser,
	FileText,
	Globe,
	KeyRound,
	Link2,
	Palette,
	Send,
	Sparkles,
	Star,
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

const Lecture8Pt = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				CSS · onde vive, de que base parte e a quem aponta
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Na lição 7 conhecemos a ideia: CSS apresenta, HTML estrutura. Hoje
				respondemos a três perguntas práticas:{" "}
				<strong>onde escrevo o CSS?</strong>,{" "}
				<strong>de que base parto se o navegador já põe estilos?</strong> e{" "}
				<strong>como escolho a que elementos se aplica?</strong>
			</p>
		</section>

		<section>
			<SectionTitle index={1}>
				Três caminhos para o estilo: formas de incluir CSS
			</SectionTitle>
			<p className="mb-4">
				Há três maneiras de aplicar CSS. O resultado no ecrã pode parecer igual:
				o que muda é <strong>onde vive o código</strong> e quão fácil é fazer a
				manutenção.
			</p>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<Zap className="h-5 w-5" aria-hidden />}
					title="a) Em linha (inline)"
					iconClassName="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
				>
					Atributo <Code>style</Code> direto no elemento. Rápido, mas mistura
					estrutura com apresentação.
				</ConceptCard>
				<ConceptCard
					icon={<FileText className="h-5 w-5" aria-hidden />}
					title="b) Interna"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Tag <Code>&lt;style&gt;</Code> no <Code>&lt;head&gt;</Code>. Vale para
					uma só página.
				</ConceptCard>
				<ConceptCard
					icon={<Link2 className="h-5 w-5" aria-hidden />}
					title="c) Externa ⭐"
					iconClassName="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
				>
					Ficheiro <Code>.css</Code> à parte, ligado com{" "}
					<Code>&lt;link&gt;</Code>. A prática recomendada.
				</ConceptCard>
			</div>

			<Subhead>O mesmo resultado, código diferente</Subhead>
			<div className="grid gap-4 sm:grid-cols-3">
				<Preview label="a) Inline · style no elemento">
					<p style={{ color: "red", fontSize: "16px" }}>
						Este parágrafo é vermelho.
					</p>
				</Preview>
				<Preview label="b) Interna · <style> no head">
					<p style={{ color: "green" }}>Este parágrafo é verde.</p>
				</Preview>
				<Preview label="c) Externa · styles.css + <link>">
					<p style={{ color: "blue" }}>Este parágrafo é azul.</p>
				</Preview>
			</div>

			<Callout variant="warning" title="Evite se possível">
				O estilo em linha vai contra a separação de responsabilidades: mistura
				HTML com CSS e o código torna-se muito difícil de manter. Reserve-o para
				casos pontuais, como estilos dinâmicos com JavaScript.
			</Callout>
			<div className="space-y-4">
				<CodeTabs
					html={`<p style="color: red; font-size: 16px;">Este parágrafo é vermelho.</p>`}
				/>
				<CodeTabs
					html={`<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>Este parágrafo é verde.</p>
</body>`}
				/>
				<p className="text-sm text-gray-600 dark:text-gray-400">
					A interna já é melhor, mas só vale para essa página: com várias
					páginas repetiria o CSS em cada uma.
				</p>
				<CodeTabs
					html={`<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>Este parágrafo é azul.</p>
</body>`}
					css={`/* Dentro de styles.css */
p {
  color: blue;
}`}
				/>
			</div>
			<Callout variant="success" title="Vantagens da folha externa">
				Código limpo e separado, uma só folha para muitas páginas
				(consistência), e o navegador guarda o <Code>.css</Code> em cache: as
				páginas carregam mais rápido. Por isso é o padrão da indústria.
			</Callout>
			<div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
				<div className="flex-1 rounded-xl bg-orange-50 p-3 text-center text-sm font-semibold text-orange-800 dark:bg-orange-950/40 dark:text-orange-200">
					<FileText className="mx-auto mb-1 h-5 w-5" aria-hidden />
					biografia.html
				</div>
				<div className="text-center font-bold text-gray-400" aria-hidden>
					→
				</div>
				<div className="flex-1 rounded-xl bg-blue-50 p-3 text-center text-sm font-semibold text-blue-800 dark:bg-blue-950/40 dark:text-blue-200">
					<Link2 className="mx-auto mb-1 h-5 w-5" aria-hidden />
					&lt;link&gt; para estilos-biografia.css
				</div>
				<div className="text-center font-bold text-gray-400" aria-hidden>
					→
				</div>
				<div className="flex-1 rounded-xl bg-green-50 p-3 text-center text-sm font-semibold text-green-800 dark:bg-green-950/40 dark:text-green-200">
					<Palette className="mx-auto mb-1 h-5 w-5" aria-hidden />
					Página toda com estilo
				</div>
			</div>
		</section>

		<section>
			<SectionTitle index={2}>
				O teu CSS não parte do zero: o navegador, os resets e o box-sizing
			</SectionTitle>
			<p className="mb-4">
				Antes de escrever a tua primeira regra tens de saber algo: o navegador{" "}
				<strong>já aplica os seus próprios estilos</strong> a cada página, mesmo
				sem uma única linha de CSS teu. Essa base chama-se{" "}
				<em>user agent stylesheet</em> (folha de estilos do navegador).
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Globe className="h-5 w-5" aria-hidden />}
					title="O que o navegador põe sozinho"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					<Code>body</Code> com uma margem de uns 8px à volta de tudo,{" "}
					<Code>h1</Code>–<Code>h6</Code> grandes e a negrito com margens,{" "}
					<Code>p</Code> com margem em cima e em baixo, <Code>ul</Code> com
					marcas e preenchimento à esquerda, <Code>a</Code> azul e sublinhado.
				</ConceptCard>
				<ConceptCard
					icon={<Eraser className="h-5 w-5" aria-hidden />}
					title="Porque te deve importar"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Esses estilos <strong>variam entre navegadores</strong> e quase nunca
					são os do teu design. O teu CSS não pinta sobre uma tela em branco:{" "}
					<strong>compete com essa base</strong>. Por isso os projetos sérios
					começam por fazer reset.
				</ConceptCard>
			</div>
			<div className="mt-4">
				<Preview label="Simulação · assim pinta o navegador um h1 e um p SEM o teu CSS">
					<div>
						<p
							style={{
								fontSize: "2em",
								fontWeight: "bold",
								margin: "0.67em 0",
							}}
						>
							Título sem estilos meus
						</p>
						<p style={{ margin: "1em 0" }}>
							Parágrafo sem estilos meus, com as margens que põe o navegador.
						</p>
					</div>
				</Preview>
			</div>
			<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
				Atenção: esta plataforma já normaliza as margens por dentro, por isso em
				cima simulámo-las com estilo em linha para veres o que faria um
				navegador normal.
			</p>

			<Subhead>Os resets mais comuns</Subhead>
			<p className="mb-4">
				Fazer reset é devolver os elementos a um ponto de partida neutro e
				previsível. Estes são os três resets que vais ver em quase todos os
				projetos:
			</p>
			<div className="space-y-4">
				<CodeTabs
					css={`/* 1. Reset universal: o ponto de partida mais comum */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`}
				/>
				<p className="text-sm text-gray-600 dark:text-gray-400">
					Linha a linha: <Code>margin: 0</Code> tira as margens do navegador (
					<Code>body</Code>, <Code>h1</Code>, <Code>p</Code>);{" "}
					<Code>padding: 0</Code> tira os preenchimentos (as listas); e{" "}
					<Code>box-sizing</Code> vê-se em detalhe aqui em baixo: é o que torna
					as larguras previsíveis. Aplicamo-lo também a <Code>*::before</Code> e{" "}
					<Code>*::after</Code>, porque esses pseudo-elementos geram caixinhas
					que, senão, medir-se-iam com a regra antiga.
				</p>
				<CodeTabs
					css={`/* 2. Reset do body: o navegador deixa ~8px à volta de tudo */
body {
  margin: 0;
}

/* 3. Reset de listas: tira marcas e o preenchimento lateral */
ul.sem-marcas {
  list-style: none;
  padding: 0;
}`}
				/>
			</div>
			<Callout variant="tip" title="Faz reset à mão, pelo menos no início">
				Existem folhas prontas como <Code>normalize.css</Code> que igualam os
				navegadores, mas neste curso fazemos reset à mão: se perceberes o que
				tira cada linha, depois qualquer biblioteca parece-te óbvia. E lembra
				que <Code>*</Code> afeta <strong>tudo</strong>: usa-o para a base, não
				para estilos de design.
			</Callout>

			<Subhead>O problema do box-sizing, com uma caixa a sério</Subhead>
			<p className="mb-4">
				Pensa assim: compras uma caixa de cartão de <strong>20 cm</strong> para
				enviar uma prenda por correio (<Code>width: 200px</Code>). A pergunta
				chave é: esses 20 cm são <strong>só o espaço interior</strong> ou{" "}
				<strong>a caixa inteira com tudo e bordas</strong>? O CSS responde com
				dois modos:
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Send className="h-5 w-5" aria-hidden />}
					title="content-box: o pacote surpresa"
					iconClassName="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
				>
					Esses 20 cm são <strong>só a prenda lá dentro</strong>. Se juntares
					acolchoado de 2 cm de cada lado (<Code>padding: 20px</Code>) e uma
					moldura de 1 cm de cada lado (<Code>border: 5px</Code>), a caixa real
					já não mede 20 cm. O carteiro cobra-te mais.
				</ConceptCard>
				<ConceptCard
					icon={<Sparkles className="h-5 w-5" aria-hidden />}
					title="border-box: o tamanho obrigatório"
					iconClassName="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
				>
					Dizes ao fabricante:{" "}
					<strong>“quero que a caixa inteira meça 20 cm”</strong>. Ponhas o
					acolchoado e a borda que puseres, a caixa crava 200px no total: o
					único que encolhe é o espaço interior para a prenda.
				</ConceptCard>
			</div>
			<Callout variant="warning" title="A frase que explica tudo">
				Em CSS, <Code>width</Code> não significa{" "}
				<strong>“quanto ocupa a minha caixa no ecrã”</strong>. No modo por
				defeito significa <strong>“quanto mede o conteúdo lá dentro”</strong>.
				Por isso o navegador soma coisas por fora em vez de obedecer aos teus
				200px.
			</Callout>
			<p className="mb-4">
				Por defeito o navegador usa <Code>content-box</Code>: o preenchimento (
				<Code>padding</Code>) e a borda (<Code>border</Code>){" "}
				<strong>somam-se por fora</strong>. Vê a conta com{" "}
				<Code>width: 200px</Code>, <Code>padding: 20px</Code> e{" "}
				<Code>border: 5px</Code> (20px de cada lado, 5px de cada lado):
			</p>
			<p className="mb-4 text-center font-mono text-sm font-semibold text-gray-700 dark:text-gray-200">
				200 + (2 × 20) + (2 × 5) = 250px de largura real
			</p>
			<p className="mb-4">
				Pediste 200 e ocupas 250. Duas caixas assim já não cabem lado a lado em
				400px e o layout parte-se sem perceberes porquê. Com{" "}
				<Code>border-box</Code>, pelo contrário, esses 200px são o{" "}
				<strong>total final</strong>: o conteúdo encolhe sozinho para 150px (200
				− 40 − 10) e a caixa ocupa exatamente o pedido. Contas felizes: se a tua
				coluna mede 400px e metes duas caixas de 200px, cabem na perfeição.
			</p>
			<div className="mb-4">
				<Preview label="Em direto · mesma width: 200px, box-sizing diferente">
					<div className="space-y-4">
						<div>
							<p className="mb-1 block text-xs font-semibold text-gray-600 dark:text-gray-300">
								content-box (por defeito) → ocupa 250px, transborda
							</p>
							<div
								style={{
									width: "200px",
									padding: "20px",
									border: "5px solid #ef4444",
									boxSizing: "content-box",
									backgroundColor: "#fee2e2",
									color: "#7f1d1d",
								}}
							>
								200 de conteúdo + 40 de preenchimento + 10 de borda ={" "}
								<strong>250px</strong> no ecrã.
							</div>
						</div>
						<div>
							<p className="mb-1 block text-xs font-semibold text-gray-600 dark:text-gray-300">
								border-box → ocupa 200px exatos, previsível
							</p>
							<div
								style={{
									width: "200px",
									padding: "20px",
									border: "5px solid #16a34a",
									boxSizing: "border-box",
									backgroundColor: "#dcfce7",
									color: "#14532d",
								}}
							>
								Tudo cabe em <strong>200px</strong>: o conteúdo encolhe sozinho.
							</div>
						</div>
					</div>
				</Preview>
			</div>
			<div className="space-y-4">
				<CodeTabs
					css={`/* content-box: a largura estica-se por fora */
.caixa-default {
  width: 200px;
  padding: 20px;
  border: 5px solid red;
  box-sizing: content-box; /* valor por defeito: 250px reais */
}

/* border-box: a largura é o total final */
.caixa-ordenada {
  width: 200px;
  padding: 20px;
  border: 5px solid green;
  box-sizing: border-box; /* 200px reais, sempre */
}`}
				/>
			</div>
			<Callout
				variant="success"
				title="O truque de mestre: o reset que põe tudo em ordem"
			>
				Por isso os programadores põem isto no início de qualquer projeto:{" "}
				<Code>box-sizing: border-box</Code> dentro do reset. Significa:{" "}
				<strong>
					“a partir de agora, obriga-me a que todas as caixas meçam exatamente o
					que peço, sem surpresas nem somas estranhas por fora”
				</strong>
				.
			</Callout>
			<div className="mt-4 space-y-4">
				<CodeTabs
					css={`/* O truque de mestre: todas as caixas medem o que pedes */
*,
*::before,
*::after {
  box-sizing: border-box;
}`}
				/>
			</div>
		</section>

		<section>
			<SectionTitle index={3}>
				Seletores básicos: apontando para o nosso alvo
			</SectionTitle>
			<p className="mb-4">
				Os seletores são o coração do CSS: o padrão que diz ao navegador{" "}
				<strong>a que elementos</strong> aplicar cada regra.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Star className="h-5 w-5" aria-hidden />}
					title="Universal (*)"
					iconClassName="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
				>
					Seleciona <strong>todos</strong> os elementos. Útil para estilos base
					ou reinicializações.
				</ConceptCard>
				<ConceptCard
					icon={<Type className="h-5 w-5" aria-hidden />}
					title="De tipo / tag"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Seleciona todos os elementos de uma tag, por exemplo todos os{" "}
					<Code>h2</Code>.
				</ConceptCard>
				<ConceptCard
					icon={<Tag className="h-5 w-5" aria-hidden />}
					title="De classe (.)"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					O mais versátil e reutilizável: todos os elementos com essa{" "}
					<Code>class</Code>. Um elemento pode ter várias classes.
				</ConceptCard>
				<ConceptCard
					icon={<KeyRound className="h-5 w-5" aria-hidden />}
					title="De ID (#)"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					O <strong>único</strong> elemento com esse <Code>id</Code>. Os ID
					devem ser únicos por página.
				</ConceptCard>
			</div>

			<Callout variant="tip" title="Classe vs ID: a diferença essencial">
				A <Code>class</Code> <strong>repete-se</strong> (vários avisos com{" "}
				<Code>.alerta</Code>). O <Code>id</Code> é <strong>único</strong> (um só{" "}
				<Code>#cabecalho-principal</Code> por página, para blocos estruturais
				que não se repetem).
			</Callout>

			<Subhead>Universal e tipo · código</Subhead>
			<div className="space-y-4">
				<CodeTabs
					css={`*,
*::before,
*::after {
  box-sizing: border-box; /* Uma reinicialização comum */
}`}
				/>
				<p className="text-sm text-gray-600 dark:text-gray-400">
					O porquê do <Code>box-sizing</Code> (<Code>content-box</Code> vs{" "}
					<Code>border-box</Code>) acabámos de ver na secção 2: com esta
					reinicialização todas as larguras ficam previsíveis.
				</p>
				<CodeTabs
					css={`/* Torna todos os h2 de cor cinza escuro */
h2 {
  color: #333;
}`}
				/>
			</div>

			<Subhead>Classe · repete-se (experimente em direto)</Subhead>
			<div className="mb-4">
				<Preview label="Vista prévia · dois parágrafos, mesma classe .alerta">
					<div className="space-y-2">
						<p style={{ color: "red", fontWeight: "bold" }}>
							Cuidado, isto é importante.
						</p>
						<p style={{ color: "red", fontWeight: "bold" }}>
							Outro aviso com a mesma classe.
						</p>
					</div>
				</Preview>
			</div>
			<div className="space-y-4">
				<CodeTabs
					html={`<p class="alerta">Cuidado, isto é importante.</p>`}
					css={`.alerta {
  color: red;
  font-weight: bold;
}`}
				/>
			</div>

			<Subhead>ID · único por página</Subhead>
			<div className="mb-4">
				<Preview label="Vista prévia · um só cabeçalho com ID">
					<header style={{ backgroundColor: "#f0f0f0", padding: "12px" }}>
						Cabeçalho principal da página
					</header>
				</Preview>
			</div>
			<div className="space-y-4">
				<CodeTabs
					html={`<header id="cabecalho-principal">...</header>`}
					css={`#cabecalho-principal {
  background-color: #f0f0f0;
}`}
				/>
			</div>

			<Subhead>Agrupamento (,) · uma regra, vários seletores</Subhead>
			<div className="mb-4">
				<Preview label="Vista prévia · h1, h2 e h3 com a mesma regra">
					<div className="space-y-1">
						<h1 style={{ fontFamily: "Georgia, serif", color: "navy" }}>
							Título 1
						</h1>
						<h2 style={{ fontFamily: "Georgia, serif", color: "navy" }}>
							Título 2
						</h2>
						<h3 style={{ fontFamily: "Georgia, serif", color: "navy" }}>
							Título 3
						</h3>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<h1>Título 1</h1>
<h2>Título 2</h2>
<h3>Título 3</h3>`}
				css={`h1, h2, h3 {
  font-family: 'Georgia', serif;
  color: navy;
}`}
			/>
			<div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
				<Braces className="h-4 w-4" aria-hidden />A vírgula evita repetir o
				mesmo bloco três vezes.
			</div>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
				<Send className="h-6 w-6 text-blue-500" aria-hidden />📝 Tarefa:
				estilizando a sua biografia
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Hora de dar cor e forma à biografia do Módulo 1, tudo com folha externa.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Crie a folha externa">
					Crie <Code>estilos-biografia.css</Code> na mesma pasta que{" "}
					<Code>biografia.html</Code>.
				</Step>
				<Step number={2} title="Ligue-a">
					No <Code>&lt;head&gt;</Code> do <Code>biografia.html</Code> adicione{" "}
					<Code>
						&lt;link rel="stylesheet" href="estilos-biografia.css"&gt;
					</Code>
					.
				</Step>
				<Step number={3} title="Marque com classes e ID">
					Dê um ID ao seu <Code>&lt;h1&gt;</Code> (por exemplo{" "}
					<Code>id="nome-titulo"</Code>) e uma classe a cada secção (por exemplo{" "}
					<Code>class="seccao"</Code>).
				</Step>
				<Step number={4} title="Escreva as quatro regras">
					Em <Code>estilos-biografia.css</Code>: tipo para <Code>body</Code> (
					<Code>background-color</Code> + <Code>font-family</Code>), ID para o{" "}
					<Code>h1</Code> (cor + <Code>text-align: center;</Code>), classe{" "}
					<Code>.seccao</Code> (<Code>border</Code> + <Code>padding</Code>) e
					agrupamento para <Code>h1, h2</Code>.
				</Step>
				<Step number={5} title="Veja o resultado">
					Abra a página no navegador: os seus primeiros estilos aplicados.
				</Step>
			</ol>
			<Callout variant="success" title="Fecho">
				Já sabe onde vive o CSS, de que base parte (e como lhe fazer reset) e
				como apontar com seletores. Na lição 9 subimos de nível: seletores
				avançados e pseudo-classes.
			</Callout>
		</section>
	</div>
);

export default Lecture8Pt;
