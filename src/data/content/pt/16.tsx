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

const Lecture16Pt = () => (
	<div className="space-y-8">
		<section>
			<SectionTitle index={1}>
				Para Além da Cor Sólida: Fundos com Imagens
			</SectionTitle>
			<p className="mb-4">
				Os fundos são uma parte essencial do design visual. Podemos ir muito
				além de um simples <Code>background-color</Code> usando imagens para
				criar texturas, padrões ou banners impactantes. A propriedade principal
				para isto é <Code>background-image</Code>.
			</p>
			<CodeBlock
				language="css"
				codeString={`.hero-section {
  background-image: url('caminho/para/a/minha/imagem.jpg');
}`}
			/>
		</section>

		<section>
			<SectionTitle index={2}>Controlando a Imagem de Fundo</SectionTitle>
			<p className="mb-4">
				Uma vez que adicionamos uma imagem, temos um conjunto de propriedades
				para controlar o seu comportamento.
			</p>

			<div className="mb-4">
				<Preview label="Pré-visualização · a mesma imagem com repeat, position e no-repeat">
					<style>{`.d16-fundo {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Ccircle cx='8' cy='8' r='6' fill='%23e67e22'/%3E%3C/svg%3E");
  width: 110px; height: 70px; background-color: #f8fafc;
  border: 1px solid #cbd5e1; border-radius: 8px;
}
.d16-rep { background-repeat: repeat; }
.d16-semrep { background-repeat: no-repeat; }
.d16-repx { background-repeat: repeat-x; }
.d16-pos1 { background-repeat: no-repeat; background-position: top left; }
.d16-pos2 { background-repeat: no-repeat; background-position: right bottom; }
.d16-fila { display: flex; flex-wrap: wrap; gap: 12px; }
.d16-etiqueta { font-size: 0.75rem; margin-top: 4px; color: #1f2937; }`}</style>
					<div className="d16-fila">
						<div>
							<div className="d16-fundo d16-rep" />
							<p className="d16-etiqueta">repeat</p>
						</div>
						<div>
							<div className="d16-fundo d16-semrep" />
							<p className="d16-etiqueta">no-repeat</p>
						</div>
						<div>
							<div className="d16-fundo d16-repx" />
							<p className="d16-etiqueta">repeat-x</p>
						</div>
						<div>
							<div className="d16-fundo d16-pos1" />
							<p className="d16-etiqueta">position: top left</p>
						</div>
						<div>
							<div className="d16-fundo d16-pos2" />
							<p className="d16-etiqueta">position: right bottom</p>
						</div>
					</div>
					<p className="mt-2 text-sm">
						<code>repeat</code> pinta o mosaico completo, <code>repeat-x</code>{" "}
						só a fila horizontal; com <code>no-repeat</code>, a posição decide
						onde o círculo aterrisa.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- Cinco painéis: a mesma imagem com diferentes repeat e position -->
<div class="fila">
  <div><div class="caixa-fundo fundo-repeat"></div><p class="etiqueta">repeat</p></div>
  <div><div class="caixa-fundo fundo-no-repeat"></div><p class="etiqueta">no-repeat</p></div>
  <div><div class="caixa-fundo fundo-repeat-x"></div><p class="etiqueta">repeat-x</p></div>
  <div><div class="caixa-fundo fundo-pos-top-left"></div><p class="etiqueta">position: top left</p></div>
  <div><div class="caixa-fundo fundo-pos-right-bottom"></div><p class="etiqueta">position: right bottom</p></div>
</div>`}
				css={`.fila { display: flex; flex-wrap: wrap; gap: 12px; }
.etiqueta { font-size: 0.75rem; margin-top: 4px; color: #1f2937; }

.caixa-fundo {
  width: 110px; height: 70px; border-radius: 8px;
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  /* uma imagem pequenina para notar a repetição (SVG embebido) */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Ccircle cx='8' cy='8' r='6' fill='%23e67e22'/%3E%3C/svg%3E");
}
.fundo-repeat { background-repeat: repeat; }
.fundo-no-repeat { background-repeat: no-repeat; }
.fundo-repeat-x { background-repeat: repeat-x; }
.fundo-pos-top-left { background-repeat: no-repeat; background-position: top left; }
.fundo-pos-right-bottom { background-repeat: no-repeat; background-position: right bottom; }`}
			/>

			<ul className="list-none space-y-4 pl-0 mb-4 [&>li]:relative [&>li]:pl-7 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.5em] [&>li]:before:h-2.5 [&>li]:before:w-2.5 [&>li]:before:rounded-full [&>li]:before:bg-blue-500">
				<li>
					<strong>
						<Code>background-repeat</Code>
					</strong>
					: Por defeito, as imagens de fundo repetem-se em mosaico se forem mais
					pequenas que o seu contentor.
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							<Code>repeat</Code> (valor padrão): Repete horizontal e
							verticalmente.
						</li>
						<li>
							<Code>no-repeat</Code>: Mostra a imagem uma única vez.
						</li>
						<li>
							<Code>repeat-x</Code> / <Code>repeat-y</Code>: Repete apenas no
							eixo horizontal ou vertical.
						</li>
					</ul>
				</li>
				<li>
					<strong>
						<Code>background-position</Code>
					</strong>
					: Define a posição inicial da imagem. Podemos usar palavras-chave (
					<Code>top</Code>, <Code>center</Code>, <Code>bottom</Code>,{" "}
					<Code>left</Code>, <Code>right</Code>) ou valores precisos (
					<Code>50% 50%</Code>, <Code>20px 100px</Code>).
					<CodeBlock
						language="css"
						codeString={`.icone-utilizador {
  background-image: url('user.svg');
  background-repeat: no-repeat;
  background-position: center left;
}`}
					/>
				</li>
				<li>
					<strong>
						<Code>background-size</Code>
					</strong>
					: Controla o tamanho da imagem de fundo.
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							<Code>auto</Code> (valor padrão): A imagem mantém o seu tamanho
							original.
						</li>
						<li>
							<Code>cover</Code>: <strong>Muito importante.</strong>{" "}
							Redimensiona a imagem para que cubra completamente a área do
							contentor, mantendo a sua proporção. Pode ser que parte da imagem
							seja cortada.
						</li>
						<li>
							<Code>contain</Code>: Redimensiona a imagem para que caiba
							completamente dentro do contentor, mantendo a sua proporção. Pode
							ser que fiquem espaços vazios.
						</li>
					</ul>
				</li>
				<li>
					<strong>
						<Code>background-attachment</Code>
					</strong>
					: Define se a imagem se desloca com o resto do conteúdo.
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							<Code>scroll</Code> (valor padrão): A imagem desloca-se com a
							página.
						</li>
						<li>
							<Code>fixed</Code>: A imagem fica fixa na janela do navegador,
							criando um efeito de paralaxe simples.
						</li>
					</ul>
				</li>
			</ul>
		</section>

		<section>
			<SectionTitle index={3}>
				O Atalho <Code>background</Code>
			</SectionTitle>
			<p className="mb-4">
				Podemos combinar todas estas propriedades numa única declaração{" "}
				<Code>background</Code> para um código mais conciso.
			</p>
			<CodeBlock
				language="css"
				codeString={`.hero {
  background:
    url('hero-image.jpg') /* image */
    no-repeat /* repeat */
    center center /* position */
    / cover; /* size (separa-se com uma barra) */
}`}
			/>
		</section>

		<section>
			<SectionTitle index={4}>Degradês CSS: Cores Fluidas</SectionTitle>
			<p className="mb-4">
				O CSS permite-nos criar degradês diretamente no código, sem necessidade
				de ficheiros de imagem. Aplicam-se usando a propriedade{" "}
				<Code>background-image</Code>.
			</p>

			<Subhead>
				Degradê Linear (<Code>linear-gradient</Code>)
			</Subhead>
			<p className="mb-4">Cria um degradê que progride em linha reta.</p>

			<div className="mb-4">
				<Preview label="Pré-visualização · três direções de linear-gradient">
					<style>{`.d16-cartao { width: 150px; height: 70px; border-radius: 8px; }
.d16-grad-1 { background-image: linear-gradient(blue, pink); }
.d16-grad-2 { background-image: linear-gradient(to bottom right, #ff7e5f, #feb47b); }
.d16-grad-3 { background-image: linear-gradient(45deg, #6a11cb, #2575fc); }
.d16-etiqueta { font-size: 0.75rem; margin-top: 4px; color: #1f2937; }
.d16-fila { display: flex; flex-wrap: wrap; gap: 12px; }`}</style>
					<div className="d16-fila">
						<div>
							<div className="d16-cartao d16-grad-1" />
							<p className="d16-etiqueta">blue → pink</p>
						</div>
						<div>
							<div className="d16-cartao d16-grad-2" />
							<p className="d16-etiqueta">to bottom right</p>
						</div>
						<div>
							<div className="d16-cartao d16-grad-3" />
							<p className="d16-etiqueta">45deg</p>
						</div>
					</div>
					<p className="mt-2 text-sm">
						Sem direção o degradê cai de cima para baixo; com{" "}
						<code>to bottom right</code> cruza para o canto oposto e com{" "}
						<code>45deg</code> aplica a inclinação exata que pedes.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- Três faixas: por padrão, para o canto e com ângulo -->
<div class="fila">
  <div><div class="cartao-grad gradiente-1"></div><p class="etiqueta">blue → pink</p></div>
  <div><div class="cartao-grad gradiente-2"></div><p class="etiqueta">to bottom right</p></div>
  <div><div class="cartao-grad gradiente-3"></div><p class="etiqueta">45deg</p></div>
</div>`}
				css={`.fila { display: flex; flex-wrap: wrap; gap: 12px; }
.etiqueta { font-size: 0.75rem; margin-top: 4px; color: #1f2937; }
.cartao-grad { width: 150px; height: 70px; border-radius: 8px; }
.gradiente-1 { background-image: linear-gradient(blue, pink); }
.gradiente-2 { background-image: linear-gradient(to bottom right, #ff7e5f, #feb47b); }
.gradiente-3 { background-image: linear-gradient(45deg, #6a11cb, #2575fc); }`}
			/>

			<CodeBlock
				language="css"
				codeString={`/* Sintaxe: linear-gradient(direção, cor1, cor2, ...); */

/* De cima (padrão) para baixo */
.gradiente-1 {
  background-image: linear-gradient(blue, pink);
}

/* Diagonal: do canto superior esquerdo para o inferior direito */
.gradiente-2 {
  background-image: linear-gradient(to bottom right, #ff7e5f, #feb47b);
}

/* Com um ângulo específico */
.gradiente-3 {
  background-image: linear-gradient(45deg, #6a11cb, #2575fc);
}`}
			/>

			<Subhead>
				Degradê Radial (<Code>radial-gradient</Code>)
			</Subhead>
			<p className="mb-4">
				Cria um degradê que irradia a partir de um ponto central.
			</p>

			<div className="mb-4">
				<Preview label="Pré-visualização · radial-gradient irradiando do centro">
					<style>{`.d16-radial {
  width: 200px; height: 80px; border-radius: 8px;
  background-image: radial-gradient(circle, white, steelblue);
}`}</style>
					<div className="d16-radial" />
					<p className="mt-2 text-sm">
						O branco nasce no centro e esvaece até <code>steelblue</code> nos
						bordos.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- Um painel com o degradê radial -->
<div class="painel-radial"></div>`}
				css={`.painel-radial {
  width: 200px; height: 80px; border-radius: 8px;
  background-image: radial-gradient(circle, white, steelblue);
}`}
			/>

			<CodeBlock
				language="css"
				codeString={`/* De dentro para fora */
.gradiente-radial {
  background-image: radial-gradient(circle, white, steelblue);
}`}
			/>
		</section>

		<section>
			<SectionTitle index={5}>
				📝 Tarefa: Criando um Banner de Herói
			</SectionTitle>
			<p className="mb-4">
				Vamos combinar imagens de fundo e degradês para criar um "hero banner"
				atrativo, uma secção de cabeçalho grande e visualmente impactante.
			</p>
			<ol className="list-decimal list-outside space-y-2 pl-5 mb-4 marker:font-bold marker:text-blue-600 dark:marker:text-blue-400">
				<li>
					<strong>HTML:</strong> Crie um elemento <Code>&lt;section&gt;</Code>{" "}
					com a classe <Code>hero-banner</Code>. Dentro, coloque um{" "}
					<Code>&lt;h1&gt;</Code> e um <Code>&lt;p&gt;</Code>.
				</li>
				<li>
					<strong>CSS:</strong> Selecione <Code>.hero-banner</Code> e
					aplique-lhe os seguintes estilos:
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							Dê-lhe uma altura fixa, por exemplo, <Code>height: 60vh;</Code>{" "}
							(60% da altura da janela).
						</li>
						<li>
							Use <Code>background-image</Code> para aplicar uma imagem de fundo
							à sua escolha.
						</li>
						<li>
							Adicione <Code>background-size: cover;</Code> e{" "}
							<Code>background-position: center;</Code> para que a imagem cubra
							sempre a secção e esteja centrada.
						</li>
						<li>
							Para melhorar a legibilidade do texto, adicione uma sobreposição
							de degradê. Pode aplicar múltiplos fundos, separando-os por
							vírgulas. O primeiro que declarar estará por cima.
							<CodeBlock
								language="css"
								codeString={`.hero-banner {
  /* O degradê vem primeiro, sobre a imagem */
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('sua-imagem.jpg');
  /* ... outros estilos de fundo ... */
  color: white; /* Para que o texto seja visível */
}`}
							/>
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture16Pt;
