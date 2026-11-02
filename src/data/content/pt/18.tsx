import { SectionTitle } from "@/components/lecture/lecture-blocks";
import CodeBlock from "@/components/ui/code-block";
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

const Lecture18Pt = () => (
	<div className="space-y-8">
		<section>
			<SectionTitle index={1}>Um Mundo, Múltiplas Ecrãs</SectionTitle>
			<p className="mb-4">
				Hoje em dia, os utilizadores acedem à web a partir de uma imensa
				variedade de dispositivos: telemóveis, tablets, portáteis, televisões. O{" "}
				<strong>Design Web Responsivo (Responsive Web Design)</strong> é a
				abordagem que defende que o design e o desenvolvimento devem responder
				ao comportamento e à envolvente do utilizador em função do tamanho do
				ecrã, da plataforma e da orientação.
			</p>
			<p>
				Um site responsivo adapta-se de forma fluida para oferecer a melhor
				experiência possível em qualquer dispositivo.
			</p>
		</section>

		<section>
			<SectionTitle index={2}>
				Os Três Ingredientes do Design Responsivo
			</SectionTitle>
			<p className="mb-4">
				O design responsivo assenta em três pilares técnicos:
			</p>
			<ol className="list-decimal list-outside space-y-4 pl-5 mb-4 marker:font-bold marker:text-blue-600 dark:marker:text-blue-400">
				<li>
					<strong>Layouts Fluidos:</strong> Em vez de usar larguras fixas em
					píxeis (<Code>width: 960px;</Code>), usamos unidades relativas como
					percentagens (<Code>width: 80%;</Code>). Isto permite que o layout se
					estique ou encolha com o tamanho do ecrã.
				</li>
				<li>
					<strong>Imagens Flexíveis:</strong> Para evitar que as imagens
					sobressaiam dos seus contentores em ecrãs pequenos, usamos uma regra
					de ouro:
					<CodeBlock
						language="css"
						codeString={`img {
  max-width: 100%;
  height: auto;
}`}
					/>
					<p className="mt-2">
						Isto garante que uma imagem nunca será mais larga que o seu
						contentor, mas pode encolher se for necessário, mantendo a sua
						proporção.
					</p>
				</li>
				<li>
					<strong>Media Queries:</strong> A ferramenta mais poderosa.
					Permite-nos aplicar blocos de CSS apenas quando se cumprem certas
					condições, geralmente relacionadas com o tamanho do ecrã.
				</li>
			</ol>
		</section>

		<section>
			<SectionTitle index={3}>Media Queries: CSS com Superpoderes</SectionTitle>
			<p className="mb-4">
				Uma media query é uma "pergunta" que fazemos ao navegador sobre o
				dispositivo em que a página está a ser apresentada. Se a resposta for
				"sim", aplicam-se os estilos dentro da query.
			</p>
			<p className="mb-4">
				A sintaxe básica é{" "}
				<Code>
					@media (condição) {"{"} {"/* regras CSS aqui */"} {"}"}
				</Code>
				.
			</p>

			<Subhead>
				<Code>max-width</Code> vs <Code>min-width</Code>
			</Subhead>
			<ul className="list-none space-y-4 pl-0 mb-4 [&>li]:relative [&>li]:pl-7 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.5em] [&>li]:before:h-2.5 [&>li]:before:w-2.5 [&>li]:before:rounded-full [&>li]:before:bg-blue-500">
				<li>
					<strong>
						<Code>max-width</Code> (Desktop-First):
					</strong>{" "}
					Os estilos aplicam-se se a largura da janela for{" "}
					<strong>menor ou igual</strong> ao valor especificado. É como dizer
					"para ecrãs pequenos".
					<CodeBlock
						language="css"
						codeString={`/* Estilos base para computador */
.contenedor {
  width: 900px;
}

/* Se o ecrã tiver 600px ou menos, aplica isto */
@media (max-width: 600px) {
  .contenedor {
    width: 100%;
  }
}`}
					/>
				</li>
				<li>
					<strong>
						<Code>min-width</Code> (Mobile-First):
					</strong>{" "}
					Os estilos aplicam-se se a largura da janela for{" "}
					<strong>maior ou igual</strong> ao valor especificado. É como dizer "a
					partir deste tamanho de ecrã".
					<CodeBlock
						language="css"
						codeString={`/* Estilos base para telemóvel */
.contenedor {
  width: 100%;
}

/* Se o ecrã tiver 768px ou mais, aplica isto */
@media (min-width: 768px) {
  .contenedor {
    width: 750px;
  }
}`}
					/>
				</li>
			</ul>
			<div className="p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4">
				<p className="font-semibold text-blue-800 dark:text-blue-300">
					Mobile-First é o Padrão Moderno
				</p>
				<p className="text-blue-700 dark:text-gray-300">
					Desenhar primeiro para ecrãs pequenos (telemóveis) e depois
					acrescentar complexidade para ecrãs maiores (usando{" "}
					<Code>min-width</Code>) é a prática recomendada. Obriga a priorizar o
					conteúdo e costuma resultar num CSS mais limpio e num melhor
					desempenho em dispositivos móveis.
				</p>
			</div>
		</section>

		<section>
			<SectionTitle index={4}>
				Bento Grids na Prática: Um Exemplo Guiado
			</SectionTitle>
			<p className="mb-4">
				Para fechar este módulo, vamos explorar uma técnica de maquetação
				moderna e popular: a <strong>Bento Grid</strong>. Inspirada nas caixas
				de almoço japonesas, esta técnica organiza o conteúdo numa grelha
				assimétrica que é visualmente atraente e funcional. É ideal para
				dashboards, portefólios e páginas iniciais. Usaremos CSS Grid,
				especificamente a propriedade <Code>grid-template-areas</Code>, para
				construir um layout responsivo.
			</p>
			<p className="mb-4">
				Vamos construir uma estrutura de layout como a que se mostra no popular
				artigo do freeCodeCamp:
			</p>
			<img
				src="/conf18/desktop-design-to-recreate.webp"
				alt="Exemplo de uma grelha bento com conteúdo"
				className="rounded-lg border my-4 mx-auto block max-w-full"
			/>

			<Subhead>Passo 1: A Estrutura HTML</Subhead>
			<p className="mb-4">
				A base é um contentor principal (<Code>&lt;div class="grid"&gt;</Code>)
				e vários elementos filhos (<Code>&lt;div class="item"&gt;</Code>) que
				serão as células da nossa grelha.
			</p>
			<CodeBlock
				language="html"
				codeString={`<div class="grid">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>`}
			/>

			<Subhead>Passo 2: Definindo a Grelha e as Áreas</Subhead>
			<p className="mb-4">
				Usamos <Code>display: grid</Code> para criar a grelha e{" "}
				<Code>grid-template-areas</Code> para nomear as áreas e definir a sua
				posição. Cada string representa uma fila, e cada nome uma área da
				grelha. Começamos com uma única coluna: a base mobile-first.
			</p>
			<CodeBlock
				language="css"
				codeString={`.grid {
  background: hsl(36, 100%, 99%);
  margin: 0 auto;
  width: 100%;
  max-width: 1500px;
  height: 1000px;
  padding: 1vw;
  display: grid;
  gap: 1.5vw;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "hero"
    "aside2"
    "aside3"
    "aside4"
    "aside5";
}`}
			/>

			<Subhead>Passo 3: Atribuindo os Items às Áreas</Subhead>
			<p className="mb-4">
				Por fim, atribuímos cada item à sua área correspondente usando a
				propriedade <Code>grid-area</Code>. Usamos a pseudo-classe{" "}
				<Code>:nth-child</Code> para apontar a cada item pela ordem.
			</p>
			<CodeBlock
				language="css"
				codeString={`.item {
  border: 2px solid #464545;
  border-radius: 5px;
}

.grid .item:nth-child(1) { grid-area: hero; }
.grid .item:nth-child(2) { grid-area: aside2; }
.grid .item:nth-child(3) { grid-area: aside3; }
.grid .item:nth-child(4) { grid-area: aside4; }
.grid .item:nth-child(5) { grid-area: aside5; }`}
			/>
			<p className="mt-4">
				Com isto, já temos a estrutura base do nosso layout.
			</p>

			<Subhead>Passo 4: Acrescentando Responsividade com Media Queries</Subhead>
			<p className="mb-4">
				A grande vantagem de <Code>grid-template-areas</Code> é que reorganizar
				o layout para diferentes tamanhos de ecrã é tão simples como redefinir o
				string das áreas.
			</p>
			<CodeBlock
				language="css"
				codeString={`/* Para ecrãs de tablet */
@media screen and (min-width: 750px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "hero   hero   hero   hero"
      "hero   hero   hero   hero"
      "aside2 aside2 aside2 aside3"
      "aside4 aside4 aside5 aside5";
  }
}

/* Para ecrãs grandes (PC) */
@media screen and (min-width: 1000px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "hero   hero   aside2"
      "hero   hero   aside2"
      "hero   hero   aside2"
      "hero   hero   aside2"
      "aside3 aside4 aside5";
  }
}`}
			/>

			<Subhead>Resultado Final Interativo</Subhead>
			<p className="mb-4">
				Aqui podes ver o resultado final. Redimensiona o navegador para observar
				como a grelha passa de uma coluna (base móvel) à tablet desde{" "}
				<Code>750px</Code> e ao computador desde <Code>1000px</Code>, exatamente
				as media queries dos passos.
			</p>

			<div className="mb-4">
				<Preview label="Pré-visualização · o mesmo grid-template-areas e breakpoints dos passos">
					<style>{`.d18-grid {
  /* Versão compacta do layout final: mesmas áreas e media queries
     dos passos 2-4; só mudam as medidas do contentor (px). */
  background: hsl(36, 100%, 99%);
  color: #1f2937;
  width: 100%;
  padding: 10px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "hero"
    "aside2"
    "aside3"
    "aside4"
    "aside5";
}
.d18-item {
  border: 2px solid #464545;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  background-color: #fdf6ec;
  min-height: 64px;
}
.d18-grid .d18-item:nth-child(1) { grid-area: hero; }
.d18-grid .d18-item:nth-child(2) { grid-area: aside2; }
.d18-grid .d18-item:nth-child(3) { grid-area: aside3; }
.d18-grid .d18-item:nth-child(4) { grid-area: aside4; }
.d18-grid .d18-item:nth-child(5) { grid-area: aside5; }

@media screen and (min-width: 750px) {
  .d18-grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "hero   hero   hero   hero"
      "hero   hero   hero   hero"
      "aside2 aside2 aside2 aside3"
      "aside4 aside4 aside5 aside5";
  }
}

@media screen and (min-width: 1000px) {
  .d18-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "hero   hero   aside2"
      "hero   hero   aside2"
      "hero   hero   aside2"
      "hero   hero   aside2"
      "aside3 aside4 aside5";
  }
}`}</style>
					<div className="d18-grid">
						<div className="d18-item">Hero</div>
						<div className="d18-item">Aside 2</div>
						<div className="d18-item">Aside 3</div>
						<div className="d18-item">Aside 4</div>
						<div className="d18-item">Aside 5</div>
					</div>
					<p className="mt-2 text-sm">
						Em móvel (base) empilham; desde <Code>750px</Code> a tablet partilha
						filas entre <Code>hero</Code> e os asides, e desde{" "}
						<Code>1000px</Code> o computador joga o clássico <Code>hero</Code>{" "}
						duplo + coluna lateral.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- O layout final do exercício: base mobile-first + media queries dos passos -->
<div class="grid">
  <div class="item">Hero</div>
  <div class="item">Aside 2</div>
  <div class="item">Aside 3</div>
  <div class="item">Aside 4</div>
  <div class="item">Aside 5</div>
</div>`}
				css={`.grid {
  background: hsl(36, 100%, 99%); /* base pura de mobile-first */
  color: #1f2937;
  padding: 10px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "hero"
    "aside2"
    "aside3"
    "aside4"
    "aside5";
}
.item {
  border: 2px solid #464545;
  border-radius: 5px;
  display: flex; align-items: center; justify-content: center;
  font-family: sans-serif; font-size: 0.9rem; font-weight: bold;
  background-color: #fdf6ec;
  min-height: 64px;
}
.grid .item:nth-child(1) { grid-area: hero; }
.grid .item:nth-child(2) { grid-area: aside2; }
.grid .item:nth-child(3) { grid-area: aside3; }
.grid .item:nth-child(4) { grid-area: aside4; }
.grid .item:nth-child(5) { grid-area: aside5; }

@media screen and (min-width: 750px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "hero   hero   hero   hero"
      "hero   hero   hero   hero"
      "aside2 aside2 aside2 aside3"
      "aside4 aside4 aside5 aside5";
  }
}

@media screen and (min-width: 1000px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "hero   hero   aside2"
      "hero   hero   aside2"
      "hero   hero   aside2"
      "hero   hero   aside2"
      "aside3 aside4 aside5";
  }
}`}
			/>
		</section>

		<section>
			<SectionTitle index={5}>
				📝 Tarefa: Torna a Tua Galeria Responsiva
			</SectionTitle>
			<p className="mb-4">
				Vamos pegar num layout simples de cartões e torná-lo responsivo usando a
				abordagem Mobile-First.
			</p>
			<ol className="list-decimal list-outside space-y-2 pl-5 mb-4 marker:font-bold marker:text-blue-600 dark:marker:text-blue-400">
				<li>
					<strong>HTML:</strong> Cria uma <Code>div</Code> contentora que
					envolva vários cartões (podes usar os da lição anterior).
				</li>
				<li>
					<strong>CSS (Mobile-First):</strong>
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							Estiliza os teus cartões para que, por defeito, apareçam uns por
							baixo dos outros, ocupando a maior parte da largura disponível.
							Este será o teu design para ecrãs pequenos.
						</li>
					</ul>
				</li>
				<li>
					<strong>CSS (Media Query):</strong>
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							Escolhe um "breakpoint" (um ponto de quebra), por exemplo,{" "}
							<Code>768px</Code>.
						</li>
						<li>
							Cria uma media query:{" "}
							<Code>@media (min-width: 768px) {"{ ... }"}</Code>.
						</li>
						<li>
							Dentro desta media query, altera os estilos do contentor dos
							cartões para que apareçam numa grelha. Por exemplo, podes usar{" "}
							<Code>display: grid; grid-template-columns: 1fr 1fr;</Code> para
							criar uma grelha de duas colunas.
						</li>
						<li>
							(Opcional) Acrescenta outro breakpoint para ecrãs maiores (ex.{" "}
							<Code>1024px</Code>) e muda a grelha para três colunas (
							<Code>grid-template-columns: 1fr 1fr 1fr;</Code>).
						</li>
					</ul>
				</li>
				<li>
					Abre a tua página no navegador e redimensiona a janela. Deverás ver
					como o layout muda de uma coluna para duas (e depois três) à medida
					que o ecrã se torna mais largo.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture18Pt;
