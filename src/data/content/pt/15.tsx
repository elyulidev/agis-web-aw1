import { SectionTitle } from "@/components/lecture/lecture-blocks";
import CodeBlock from "@/components/ui/code-block";
import CodeTabs from "@/components/ui/code-tabs";

const Code = ({ children }: { children: React.ReactNode }) => (
	<code className="rounded-md bg-gray-200 px-1.5 py-1 font-mono text-sm text-pink-600 dark:bg-gray-700 dark:text-pink-400">
		{children}
	</code>
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

const Subhead = ({ children }: { children: React.ReactNode }) => (
	<p className="mt-8 mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
		<span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden />
		<span>{children}</span>
	</p>
);

const Lecture15Pt = () => (
	<div className="space-y-8">
		<section>
			<SectionTitle index={1}>Pintando a Web: Formatos de Cor</SectionTitle>
			<p className="mb-4">
				A cor é uma das ferramentas de design mais poderosas. O CSS oferece-nos
				várias formas de definir cores, cada uma com as suas vantagens.
			</p>
			<ul className="list-none space-y-4 pl-0 mb-4 [&>li]:relative [&>li]:pl-7 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.5em] [&>li]:before:h-2.5 [&>li]:before:w-2.5 [&>li]:before:rounded-full [&>li]:before:bg-blue-500">
				<li>
					<strong>
						Hexadecimal (<Code>#RRGGBB</Code>):
					</strong>{" "}
					O formato mais comum. Representa os valores de Vermelho, Verde e Azul
					em base 16. Também existe uma sintaxe curta (<Code>#RGB</Code>).
					<CodeBlock
						language="css"
						codeString={`/* Vermelho puro */
color: #FF0000;
/* Azul, forma curta */
color: #00F;`}
					/>
				</li>
				<li>
					<strong>
						RGB / RGBA (<Code>rgb(r, g, b)</Code>):
					</strong>{" "}
					Representa as cores usando valores decimais de 0 a 255. A versão{" "}
					<Code>rgba</Code> adiciona um quarto valor, o canal{" "}
					<strong>alfa (transparência)</strong>, que vai de 0 (totalmente
					transparente) a 1 (totalmente opaco).
					<CodeBlock
						language="css"
						codeString={`/* Verde puro */
color: rgb(0, 255, 0);
/* Preto semi-transparente */
background-color: rgba(0, 0, 0, 0.5);`}
					/>
				</li>
				<li>
					<strong>
						HSL / HSLA (<Code>hsl(h, s, l)</Code>):
					</strong>{" "}
					Um formato mais intuitivo para os humanos. Representa a cor pelo seu{" "}
					<strong>Tom (Hue)</strong> (um ângulo de 0 a 360 no círculo
					cromático), <strong>Saturação (Saturation)</strong> (0-100%) e{" "}
					<strong>Luminosidade (Lightness)</strong> (0-100%). <Code>hsla</Code>{" "}
					adiciona o canal alfa.
					<CodeBlock
						language="css"
						codeString={`/* Um azul vibrante */
color: hsl(240, 100%, 50%);
/* Um magenta semi-transparente */
background-color: hsla(300, 100%, 50%, 0.75);`}
					/>
				</li>
			</ul>

			<div className="mb-4">
				<Preview label="Pré-visualização · a mesma cor em três formatos e a alfa em ação">
					<style>{`.d15-quadro {
  background-color: gold; padding: 12px; border-radius: 10px;
  display: flex; flex-wrap: wrap; gap: 12px; color: #1f2937;
}
.d15-amostra {
  display: inline-block; padding: 8px 12px; border-radius: 10px;
  font-family: monospace; font-size: 0.85rem; color: white;
}
.d15-hex { background-color: #FF0000; }
.d15-rgb { background-color: rgb(0, 255, 0); }
.d15-hsl { background-color: hsl(240, 100%, 50%); }
.d15-alfa { background-color: rgba(0, 0, 0, 0.5); color: white; }`}</style>
					<div className="d15-quadro">
						<div className="d15-amostra d15-hex">#FF0000 (hex)</div>
						<div className="d15-amostra d15-rgb">rgb(0, 255, 0)</div>
						<div className="d15-amostra d15-hsl">hsl(240, 100%, 50%)</div>
						<div className="d15-amostra d15-alfa">rgba(0, 0, 0, 0.5)</div>
					</div>
					<p className="mt-2 text-sm">
						As três primeiras fichas usam o mesmo tom escrito em hex, rgb e hsl.
						A ficha escura é preto rgba com alfa 0.5: sobre o quadro dourado
						repara-se que deixa ver o fundo atrás.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- Quatro fichas sobre um quadro dourado para notar a transparência -->
<div class="quadro">
  <div class="amostra amostra-hex">#FF0000 (hex)</div>
  <div class="amostra amostra-rgb">rgb(0, 255, 0)</div>
  <div class="amostra amostra-hsl">hsl(240, 100%, 50%)</div>
  <div class="amostra amostra-alfa">rgba(0, 0, 0, 0.5)</div>
</div>`}
				css={`.quadro {
  background-color: gold; /* dourado: deixa ver a alfa atrás */
  padding: 12px;
  border-radius: 10px;
  display: flex; /* põe as fichas em fila */
  flex-wrap: wrap;
  gap: 12px;
  color: #1f2937;
}
.amostra {
  display: inline-block; /* scaffolding para o exemplo ficar visível */
  padding: 8px 12px;
  border-radius: 10px;
  font-family: monospace;
  font-size: 0.85rem;
  color: white;
}
.amostra-hex { background-color: #FF0000; }
.amostra-rgb { background-color: rgb(0, 255, 0); }
.amostra-hsl { background-color: hsl(240, 100%, 50%); }
.amostra-alfa { background-color: rgba(0, 0, 0, 0.5); color: white; }`}
			/>
		</section>

		<section>
			<SectionTitle index={2}>
				Unidades de Medida: Absolutas vs. Relativas
			</SectionTitle>
			<p className="mb-4">
				Escolher a unidade de medida correta é fundamental para criar designs
				flexíveis e acessíveis.
			</p>

			<Subhead>Unidades Absolutas</Subhead>
			<p className="mb-4">
				Têm um tamanho fixo e não mudam. A mais comum é o{" "}
				<strong>
					píxel (<Code>px</Code>)
				</strong>
				. São úteis para elementos que não devem escalar, como uma borda de{" "}
				<Code>1px</Code>.
			</p>

			<Subhead>Unidades Relativas</Subhead>
			<p className="mb-4">
				O seu tamanho é calculado em relação a outro valor, o que as torna
				ideais para designs responsivos e acessíveis.
			</p>
			<ul className="list-none space-y-4 pl-0 mb-4 [&>li]:relative [&>li]:pl-7 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.5em] [&>li]:before:h-2.5 [&>li]:before:w-2.5 [&>li]:before:rounded-full [&>li]:before:bg-blue-500">
				<li>
					<strong>
						<Code>%</Code> (Percentagem):
					</strong>{" "}
					Relativo ao tamanho do elemento pai. <Code>width: 50%;</Code> fará com
					que um elemento ocupe metade da largura do seu contentor.
				</li>
				<li>
					<strong>
						<Code>em</Code>
					</strong>
					: Relativo ao <strong>tamanho de fonte do elemento pai</strong>. Se
					uma div tem
					<Code>font-size: 16px;</Code>, um <Code>p</Code> dentro com{" "}
					<Code>font-size: 1.2em;</Code> terá 19.2px. Pode ser complicado de
					gerir se houver muito aninhamento.
				</li>
				<li>
					<strong>
						<Code>rem</Code> (Root EM):
					</strong>{" "}
					A melhor opção para a tipografia. É relativo ao{" "}
					<strong>
						tamanho de fonte do elemento raiz (<Code>&lt;html&gt;</Code>)
					</strong>
					. Por defeito, na maioria dos navegadores é <Code>16px</Code>. Se um
					utilizador alterar o tamanho da fonte no seu navegador por
					acessibilidade, todos os tamanhos em <Code>rem</Code> escalarão
					proporcionalmente.
					<CodeBlock
						language="css"
						codeString={`html {
  font-size: 16px; /* 1rem = 16px */
}
h1 {
  font-size: 2rem; /* 32px */
}
p {
  font-size: 1rem; /* 16px */
  padding: 1.5rem; /* 24px */
}`}
					/>
				</li>
				<li>
					<strong>
						<Code>vw</Code> / <Code>vh</Code> (Viewport Width / Height):
					</strong>{" "}
					Relativas ao tamanho da janela do navegador. <Code>1vw</Code> é 1% da
					largura da janela. São perfeitas para criar secções que ocupem todo o
					ecrã (<Code>height: 100vh;</Code>).
				</li>
			</ul>

			<div className="mb-4">
				<Preview label="Pré-visualização · 50% depende do contentor, rem depende da raiz">
					<style>{`.d15-contentor {
  border: 2px dashed #f59e0b; background-color: #fffbeb;
  padding: 10px; color: #1f2937;
}
.d15-caixa-percentagem {
  width: 50%; background-color: #dbeafe; border: 1px solid #3b82f6;
  padding: 8px;
}
.d15-texto-rem {
  font-size: 1.5rem; border: 1px solid #9ca3af; padding: 4px 8px;
}`}</style>
					<div className="d15-contentor">
						<div className="d15-caixa-percentagem">
							Caixa: width 50% do meu contentor
						</div>
						<p className="d15-texto-rem mt-2">
							Texto em 1.5rem com borda de 1px
						</p>
						<p className="mt-1 text-sm">
							Os 50% são metade deste contentor (não do ecrã). O texto usa
							1.5rem (escala se a raiz muda) mas a sua borda de 1px é absoluta:
							essa mistura de unidades é comum e útil.
						</p>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- O contentor amarelo é o pai: os 50% repartem-se sobre a sua largura -->
<div class="contentor">
  <div class="caixa-percentagem">Caixa: width 50% do meu contentor</div>
  <p class="texto-rem">Texto em 1.5rem com borda de 1px</p>
</div>`}
				css={`.contentor {
  border: 2px dashed #f59e0b; /* a referência visual do pai */
  background-color: #fffbeb;
  padding: 10px;
  color: #1f2937;
}
.caixa-percentagem {
  width: 50%; /* metade da largura do contentor */
  background-color: #dbeafe;
  border: 1px solid #3b82f6;
  padding: 8px;
}
.texto-rem {
  font-size: 1.5rem; /* 24px com a raiz em 16px */
  border: 1px solid #9ca3af; /* px: absoluto, não escala */
  padding: 4px 8px;
}`}
			/>
		</section>

		<section>
			<SectionTitle index={3}>
				Variáveis CSS (Propriedades Personalizadas)
			</SectionTitle>
			<p className="mb-4">
				As variáveis CSS são uma das características mais potentes e modernas.
				Permitem-nos definir valores reutilizáveis num único local, o que
				simplifica enormemente a manutenção e a criação de temas.
			</p>
			<p>
				São declaradas com dois traços (<Code>--nome-variavel</Code>) e usadas
				com a função
				<Code>var()</Code>. É uma boa prática declará-las no pseudo-seletor{" "}
				<Code>:root</Code>, que representa o elemento <Code>&lt;html&gt;</Code>,
				para que estejam disponíveis globalmente.
			</p>

			<div className="mb-4">
				<Preview label="Pré-visualização · um cartão vestido com variáveis de :root">
					<style>{`.d15-demo {
  --cor-primaria: #3498db;
  --cor-texto: #333333;
  --fonte-principal: Helvetica, sans-serif;
  color: var(--cor-texto);
  font-family: var(--fonte-principal);
}
.d15-cartao {
  background-color: white; border: 1px solid #d1d5db;
  border-radius: 10px; padding: 1.5rem;
}
.d15-cartao-titulo { font-size: 1.25rem; font-weight: bold; margin-bottom: 8px; }
.d15-cartao-texto { margin-bottom: 12px; }
.d15-botao-principal {
  background-color: var(--cor-primaria); color: white;
  border: none; padding: 8px 14px; border-radius: 6px; font-size: 0.9rem;
}`}</style>
					<div className="d15-demo">
						<div className="d15-cartao">
							<p className="d15-cartao-titulo">Paleta de estilo</p>
							<p className="d15-cartao-texto">
								O título, o texto e o botão tomam os seus valores das variáveis
								de <Code>:root</Code>: alterá-las aí retoca tudo em simultâneo.
							</p>
							<button className="d15-botao-principal" type="button">
								Botão principal
							</button>
						</div>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- O body herda cor e fonte das variáveis; o cartão vestido -->
<div class="cartao">
  <p class="cartao-titulo">Paleta de estilo</p>
  <p class="cartao-texto">O título, o texto e o botão tomam os seus valores das variáveis de <code>:root</code>: alterá-las aí retoca tudo em simultâneo.</p>
  <button class="botao-principal" type="button">Botão principal</button>
</div>`}
				css={`:root {
  --cor-primaria: #3498db;
  --cor-texto: #333;
  --fonte-principal: 'Helvetica', sans-serif;
}

body {
  color: var(--cor-texto);
  font-family: var(--fonte-principal);
}

.cartao { /* scaffolding para o exemplo ficar visível */
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 1.5rem;
}
.cartao-titulo { font-size: 1.25rem; font-weight: bold; margin-bottom: 8px; }
.cartao-texto { margin-bottom: 12px; }

.botao-principal {
  background-color: var(--cor-primaria);
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
}`}
			/>
		</section>

		<section>
			<SectionTitle index={4}>
				📝 Tarefa: Criando uma Paleta de Estilo
			</SectionTitle>
			<p className="mb-4">
				Vamos aplicar estes conceitos para criar um pequeno guia de estilo para
				uma página.
			</p>
			<ol className="list-decimal list-outside space-y-2 pl-5 mb-4 marker:font-bold marker:text-blue-600 dark:marker:text-blue-400">
				<li>
					<strong>Defina as suas Variáveis:</strong> No seu ficheiro CSS, dentro
					do seletor <Code>:root</Code>, crie pelo menos 4 variáveis:{" "}
					<Code>--cor-primaria</Code>,<Code>--cor-fundo</Code>,{" "}
					<Code>--cor-texto</Code> e <Code>--espacamento-base</Code> (ex.{" "}
					<Code>1rem</Code>).
				</li>
				<li>
					<strong>Aplique as Variáveis:</strong>
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							No <Code>body</Code>, use as variáveis para definir o{" "}
							<Code>background-color</Code>,<Code>color</Code> e{" "}
							<Code>font-family</Code>.
						</li>
						<li>
							Crie um botão com a classe <Code>.botao</Code> e use{" "}
							<Code>--cor-primaria</Code> para o seu fundo e <Code>white</Code>{" "}
							para o texto.
						</li>
					</ul>
				</li>
				<li>
					<strong>Use Unidades Relativas:</strong>
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							Defina o <Code>font-size</Code> do <Code>&lt;html&gt;</Code> para{" "}
							<Code>100%</Code> (ou deixe por defeito).
						</li>
						<li>
							Defina o <Code>font-size</Code> dos seus cabeçalhos (
							<Code>h1</Code>) e parágrafos (<Code>p</Code>) usando{" "}
							<Code>rem</Code>.
						</li>
						<li>
							Use a sua variável <Code>--espacamento-base</Code> para o{" "}
							<Code>padding</Code> do botão e o <Code>margin-bottom</Code> dos
							parágrafos.
						</li>
					</ul>
				</li>
				<li>
					<strong>Experimente:</strong> Abra as ferramentas de programador no
					seu navegador, selecione o elemento <Code>&lt;html&gt;</Code> e altere
					o seu
					<Code>font-size</Code>. Observe como todo o texto e os espaçamentos
					que usam
					<Code>rem</Code> escalam juntos de forma fluida.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture15Pt;
