import { Sparkles } from "lucide-react";
import { Callout } from "@/components/lecture/lecture-blocks";
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

const Lecture14Pt = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Módulo 3 · modelo de caixa e posicionamento
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Última conferência do módulo: hoje quebramos o fluxo normal. Quando
				terminares, sobreposições, menus suspensos e cabeçalhos fixos deixam de
				ser magia.
			</p>
		</section>

		<section>
			<Subhead>
				Quebrando as regras: retirando elementos do fluxo normal
			</Subhead>
			<p className="mb-4">
				Dominámos o modelo de caixa e como os elementos se empilham e fluem um
				após o outro. Mas para designs mais complexos, como sobreposições, menus
				suspensos ou cabeçalhos fixos, precisamos de uma forma de retirar os
				elementos deste "fluxo normal" do documento. É aqui que entra a
				propriedade <Code>position</Code>.
			</p>
		</section>

		<section>
			<Subhead>A propriedade `position` e as coordenadas</Subhead>
			<p className="mb-4">
				A propriedade <Code>position</Code>, juntamente com as propriedades de
				coordenadas <Code>top</Code>, <Code>right</Code>, <Code>bottom</Code> e{" "}
				<Code>left</Code>, permite-nos colocar um elemento em qualquer lugar da
				página.
			</p>

			<p className="mb-2 font-bold">
				<Code>position: static;</Code> (O Valor Padrão)
			</p>
			<p className="mb-8">
				Todo o elemento é <Code>static</Code> por defeito. Significa que segue o
				fluxo normal da página. As propriedades <Code>top</Code>,{" "}
				<Code>right</Code>, etc., não têm qualquer efeito sobre ele.
			</p>

			<p className="mb-2 font-bold">
				<Code>position: relative;</Code> (O Ponto de Partida)
			</p>
			<p className="mb-4">
				O elemento continua a ocupar o seu espaço no fluxo normal, mas agora
				podemos "mover" ou deslocá-lo da sua posição original usando as
				coordenadas. O mais importante é que{" "}
				<strong>cria um contexto de posicionamento</strong> para os seus
				elementos filhos com <Code>position: absolute;</Code>.
			</p>
			<div className="mb-4">
				<Preview label="Pré-visualização · relative: deslocar-se, mas o seu buraco fica reservado">
					<style>{`.d14-c {
  display: inline-block; background-color: #ddd6fe; border: 1px solid #8b5cf6;
  padding: 4px 10px; font-size: 0.9rem; color: #1f2937;
}
.d14-c2 { position: relative; left: 30px; top: 10px; }`}</style>
					<div>
						<div className="d14-c">Caixa 1: no seu lugar</div>
						<div className="d14-c d14-c2">
							Caixa 2: relative, left 30px, top 10px
						</div>
						<p className="mt-2 text-sm">
							O buraco da caixa 2 continua reservado: só o desenho se desloca,
							não a reserva de espaço.
						</p>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- A caixa 2 precisa de display: inline-block para se ver alinhada -->
<div class="caixa">Caixa 1: no seu lugar</div>
<div class="caixa caixa-deslocada">Caixa 2: relative, left 30px, top 10px</div>`}
				css={`.caixa {
  display: inline-block; /* andaime para o exemplo se ver */
  background-color: #ddd6fe;
  border: 1px solid #8b5cf6;
  padding: 4px 10px;
  font-size: 0.9rem;
}
.caixa-deslocada {
  position: relative; /* cria o contexto e permite movê-la */
  left: 30px;
  top: 10px;
}`}
			/>

			<p className="mt-8 mb-2 font-bold">
				<Code>position: absolute;</Code> (O Elemento "Livre")
			</p>
			<p className="mb-4">
				Isto é uma mudança radical. O elemento é{" "}
				<strong>completamente removido</strong> do fluxo do documento. Já não
				ocupa espaço e os outros elementos comportam-se como se ele não
				existisse. Posiciona-se em relação ao seu{" "}
				<strong>ancestral posicionado mais próximo</strong> (qualquer ancestral
				cuja posição não seja <Code>static</Code>). Se não encontrar nenhum,
				posiciona-se em relação ao <Code>&lt;body&gt;</Code>.
			</p>
			<div className="mb-4">
				<Preview label="Pré-visualização · absolute: o badge flutua sobre o canto do botão">
					<style>{`.d14-padre { position: relative; display: inline-block; }
.d14-boton-msj { padding: 6px 12px; font-size: 0.9rem; border-radius: 8px; border: 1px solid #9ca3af; background-color: #f9fafb; color: #1f2937; }
.d14-badge { position: absolute; top: -10px; right: -10px; background-color: red; color: white; padding: 2px 7px; border-radius: 999px; font-size: 0.8rem; }`}</style>
					<div className="d14-padre">
						<button type="button" className="d14-boton-msj">
							Nova mensagem
						</button>
						<span className="d14-badge">3</span>
					</div>
					<p className="mt-2 text-sm">
						O contador vermelho está fora do fluxo: flutua sobre o canto do
						botão sem empurrar nada.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- O pai fixa o contexto; o badge flutua sobre um canto -->
<div class="contentor-pai">
  <button>Nova mensagem</button>
  <span class="badge">3</span>
</div>`}
				css={`.contentor-pai {
  position: relative; /* Contexto de posicionamento */
  display: inline-block;
}
.badge {
	position: absolute;
	top: -10px;
	right: -10px;
	background-color: red;
	color: white;
	padding: 2px 7px;
	border-radius: 999px;
	font-size: 0.8rem;
}`}
			/>

			<p className="mt-8 mb-2 font-bold">
				<Code>position: fixed;</Code> (O Elemento "Colado")
			</p>
			<p className="mb-4">
				Também é removido do fluxo normal, mas posiciona-se em relação à{" "}
				<strong>janela do navegador (viewport)</strong>. Isto significa que não
				se moverá mesmo que o utilizador faça scroll na página. É perfeito para
				cabeçalhos fixos, barras de cookies ou botões de "voltar ao topo".
			</p>
			<div className="mb-4">
				<Preview label="Pré-visualização · fixed: faz scroll DENTRO da janelinha e o cabeçalho não se move">
					<iframe
						title="Demo de position fixed"
						className="h-[170px] w-full rounded-lg border border-gray-300 bg-white"
						srcDoc={`<!doctype html><html><head><style>
body { margin: 0; padding-top: 2.5rem; background-color: #fff; color: #1f2937; font-family: system-ui, sans-serif; }
p { margin: 0; padding: 8px 12px; font-size: 0.9rem; border-bottom: 1px dashed #e5e7eb; }
.cabecalho-fixo { position: fixed; top: 0; left: 0; width: 100%; background-color: #2e86c1; color: white; padding: 8px 12px; font-size: 0.9rem; }
</style></head><body>
<header class="cabecalho-fixo">Menu fixo (fixed, top: 0)</header>
<p>Linha 1: deslize dentro desta janelinha…</p>
<p>Linha 2: o conteúdo se move…</p>
<p>Linha 3: …mas o cabeçalho não…</p>
<p>Linha 4</p>
<p>Linha 5</p>
<p>Linha 6</p>
<p>Linha 7</p>
</body></html>`}
					/>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- O cabeçalho fica pregado em cima, mesmo que a página deslize -->
<header class="cabecalho-fixo">Menu fixo (fixed, top: 0)</header>
<p>Linha 1: deslize dentro desta janelinha…</p>
<p>Linha 2: o conteúdo se move…</p>
<p>Linha 3: …mas o cabeçalho não…</p>
<p>Linha 4</p>`}
				css={`body {
  margin: 0;
  padding-top: 2.5rem; /* deixa espaço para a barra não tampar a primeira linha */
  background-color: #fff;
  color: #1f2937;
  font-family: system-ui, sans-serif;
}
p {
  margin: 0;
  padding: 8px 12px;
  font-size: 0.9rem;
  border-bottom: 1px dashed #e5e7eb;
}
.cabecalho-fixo {
  position: fixed; /* Em relação à janela, não ao contêiner */
  top: 0;
  left: 0;
  width: 100%;
  background-color: #2e86c1;
  color: white;
  padding: 8px 12px;
  font-size: 0.9rem;
}`}
			/>

			<p className="mt-8 mb-2 font-bold">
				<Code>position: sticky;</Code> (O Híbrido Inteligente)
			</p>
			<p className="mb-4">
				Comporta-se como <Code>relative</Code> até que o utilizador faça scroll
				e o elemento atinja um limiar definido pelas coordenadas (ex.{" "}
				<Code>top: 0;</Code>). Nesse momento, comporta-se como{" "}
				<Code>fixed</Code>. Ideal para cabeçalhos de secção ou barras laterais
				que devem "colar-se" no topo ao fazer scroll.
			</p>
			<div className="mb-4">
				<Preview label="Pré-visualização · sticky: faz scroll e vê a caixa colar-se">
					<style>{`.d14-scroll { max-height: 150px; overflow-y: auto; border: 1px solid #d1d5db; border-radius: 8px; }
.d14-caixa-sticky { position: sticky; top: 10px; background-color: #8e44ad; color: white; margin: 4px 8px; padding: 6px 10px; border-radius: 8px; font-size: 0.9rem; }
.d14-fila { margin: 0; padding: 8px 10px; font-size: 0.9rem; border-bottom: 1px dashed #f3f4f6; }`}</style>
					<div className="d14-scroll">
						<p className="d14-fila">Linha 1: continua a descer…</p>
						<p className="d14-fila">
							Linha 2: a caixa ainda viaja com o conteúdo…
						</p>
						<div className="d14-caixa-sticky">Caixa sticky (top: 10px)</div>
						<p className="d14-fila">
							Linha 3: …a caixa já se colou na sua posição…
						</p>
						<p className="d14-fila">Linha 4</p>
						<p className="d14-fila">Linha 5</p>
						<p className="d14-fila">Linha 6</p>
						<p className="d14-fila">Linha 7</p>
						<p className="d14-fila">Linha 8</p>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="lista-scroll">
  <p class="fila">Linha 1: continua a descer…</p>
  <p class="fila">Linha 2: a caixa ainda viaja com o conteúdo…</p>
  <div class="caixa-sticky">Caixa sticky (top: 10px)</div>
  <p class="fila">Linha 3: …a caixa já se colou na sua posição…</p>
  <p class="fila">Linha 4</p>
</div>`}
				css={`.lista-scroll {
  max-height: 150px;
  overflow-y: auto; /* o scroll interno detona o sticky */
  border: 1px solid #d1d5db;
  border-radius: 8px;
}
.caixa-sticky {
  position: sticky; /* relative até cruzar top: 10px, então colar-se */
  top: 10px;
  background-color: #8e44ad;
  color: white;
  margin: 4px 8px;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 0.9rem;
}
.fila { margin: 0; padding: 8px 10px; font-size: 0.9rem; border-bottom: 1px dashed #f3f4f6; }`}
			/>
		</section>

		<section>
			<Subhead>Empilhando elementos: `z-index`</Subhead>
			<p className="mb-4">
				Quando os elementos são posicionados fora do fluxo normal, podem
				sobrepor-se. A propriedade <Code>z-index</Code> controla a ordem de
				empilhamento no eixo Z (a profundidade).
			</p>
			<p className="mb-4">
				Um elemento com um <Code>z-index</Code> mais alto aparecerá por cima de
				um elemento com um <Code>z-index</Code> mais baixo. Importante:{" "}
				<strong>
					<Code>z-index</Code> só funciona em elementos posicionados
				</strong>{" "}
				(aqueles cuja posição não é <Code>static</Code>).
			</p>
			<div className="mb-4">
				<Preview label="Pré-visualização · o eixo Z visto de cima">
					<style>{`.d14-tabuleiro { position: relative; height: 170px; }
.d14-peca { position: absolute; width: 110px; height: 110px; border-radius: 12px; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; text-align: center; padding: 6px; }
.d14-p1 { z-index: 1; background-color: #34d399; top: 12px; left: 12px; }
.d14-p2 { z-index: 2; background-color: #f59e0b; top: 40px; left: 52px; }
.d14-p3 { z-index: 3; background-color: #ef4444; top: 68px; left: 92px; }`}</style>
					<div className="d14-tabuleiro">
						<div className="d14-peca d14-p1">z-index: 1</div>
						<div className="d14-peca d14-p2">z-index: 2</div>
						<div className="d14-peca d14-p3">z-index: 3</div>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="tabuleiro">
  <div class="peca peca-1">z-index: 1</div>
  <div class="peca peca-2">z-index: 2</div>
  <div class="peca peca-3">z-index: 3</div>
</div>`}
				css={`/* O contentor também precisa de estar posicionado para o absolute aninhar bem */
.tabuleiro {
  position: relative;
  height: 170px;
}

/* Sem position: absolute as peças não se sobrepõem e o z-index não atua */
.peca {
  position: absolute;
  width: 110px;
  height: 110px;
  border-radius: 12px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  text-align: center;
  padding: 6px;
}

.peca-1 { z-index: 1; background-color: #34d399; top: 12px; left: 12px; }
.peca-2 { z-index: 2; background-color: #f59e0b; top: 40px; left: 52px; }
.peca-3 { z-index: 3; background-color: #ef4444; top: 68px; left: 92px; }
`}
			/>
		</section>

		<section>
			<Subhead>Uma nota sobre `float` (Legado)</Subhead>
			<p className="mb-4">
				Antes de existirem ferramentas modernas como Flexbox e Grid, a
				propriedade <Code>float</Code> (com valores <Code>left</Code> ou{" "}
				<Code>right</Code>) era a principal forma de criar layouts de colunas e
				fazer com que o texto fluísse à volta das imagens.
			</p>
			<p className="mb-4">
				Hoje em dia, o seu uso para a maquetização geral de uma página é
				considerado uma <strong>prática obsoleta</strong>. No entanto, ainda é
				útil para o seu propósito original: fazer com que um elemento, como uma
				imagem, "flutue" dentro de um bloco de texto.
			</p>
			<div className="mb-4">
				<Preview label="Pré-visualização · o propósito original do float">
					<style>{`.d14-imagem {
  float: left; width: 64px; height: 64px; background-color: #7c3aed; color: white;
  border-radius: 10px; display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; margin: 0 12px 8px 0;
}`}</style>
					<p className="text-sm leading-relaxed">
						<span className="d14-imagem">IMG</span>O elemento flutuante deixa o
						texto rodeá-lo, como uma foto impressa.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<p>
  <span class="miniatura">IMG</span>
  O elemento flutuante deixa o texto rodeá-lo, como uma foto impressa.
</p>`}
				css={`/* O float original: texto á volta da imagem */
.miniatura {
  float: left; /* ou right */
  width: 64px;
  height: 64px;
  margin: 0 12px 8px 0;
  background-color: #7c3aed;
  color: white;
  border-radius: 10px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}`}
			/>
		</section>

		<section>
			<Subhead>📝 Tarefa: Criando um "Modal" Básico</Subhead>
			<p className="mb-4">
				Vamos aplicar o que aprendemos sobre posicionamento e{" "}
				<Code>z-index</Code> para criar a estrutura de uma janela modal, um
				componente de UI muito comum.
			</p>
			<p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
				Partimos deste HTML e deste esqueleto de CSS; completa onde os passos te
				pedirem:
			</p>
			<CodeTabs
				html={`<div class="overlay"></div>
<div class="modal-content">
  <h2>Confirmar?</h2>
  <p>Janela modal sobre um fundo escuro.</p>
</div>`}
				css={`/* Passo 2: o overlay cobre todo o ecrã */
.overlay {
  /* position: fixed; */
  /* top: 0; left: 0; width: 100%; height: 100%; */
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* z-index: 10; */
}

/* Passo 3: o conteúdo do modal flutua em cima, centrado */
.modal-content {
  /* position: fixed; */
  /* top: 50%; left: 50%; transform: translate(-50%, -50%); */
  /* background-color: white; */
  /* padding: 24px; */
  /* width: 320px; */
  /* z-index: 20; */
}`}
			/>
			<ol className="list-decimal list-inside space-y-2 pl-4 mb-4 mt-4">
				<li>
					<strong>HTML:</strong> Já arrancaste com duas <Code>&lt;div&gt;</Code>{" "}
					no teu HTML: uma com a classe <Code>overlay</Code> e outra com a
					classe <Code>modal-content</Code>.
				</li>
				<li>
					<strong>CSS para o Overlay:</strong>
					<ul className="list-disc list-inside space-y-1 pl-6 my-2">
						<li>
							Dê à <Code>.overlay</Code> uma <Code>position: fixed;</Code>.
						</li>
						<li>
							Faça com que ocupe todo o ecrã usando{" "}
							<Code>top: 0; left: 0; width: 100%; height: 100%;</Code>.
						</li>
						<li>
							Dê-lhe uma cor de fundo semi-transparente, por exemplo:{" "}
							<Code>background-color: rgba(0, 0, 0, 0.5);</Code>.
						</li>
						<li>
							Atribua-lhe um <Code>z-index: 10;</Code>.
						</li>
					</ul>
				</li>
				<li>
					<strong>CSS para o Conteúdo do Modal:</strong>
					<ul className="list-disc list-inside space-y-1 pl-6 my-2">
						<li>
							Dê à <Code>.modal-content</Code> uma <Code>position: fixed;</Code>
							.
						</li>
						<li>
							Centre-a no ecrã. (Uma forma simples é:{" "}
							<Code>
								top: 50%; left: 50%; transform: translate(-50%, -50%);
							</Code>
							. A propriedade <Code>transform</Code> veremos mais à frente, mas
							por agora pode usá-la).
						</li>
						<li>
							Dê-lhe uma <Code>background-color: white;</Code>, um{" "}
							<Code>padding</Code>, e uma <Code>width</Code>.
						</li>
						<li>
							Atribua-lhe um <Code>z-index: 20;</Code> para que apareça por cima
							do overlay.
						</li>
					</ul>
				</li>
				<li>
					Observe o resultado. Deverá ter uma janela de conteúdo a flutuar sobre
					um fundo escuro que cobre toda a página.
				</li>
			</ol>
			<Callout variant="info" title="Fecho do módulo 3">
				Com isto já calculas caixas (box model), pões blocos no centro (margin:
				auto) e quebras o fluxo (position e z-index). O módulo 4 espera-te com
				cores, unidades e variáveis.
			</Callout>
		</section>
	</div>
);

export default Lecture14Pt;
