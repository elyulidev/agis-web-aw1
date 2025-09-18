import CodeBlock from "@/components/ui/code-block";

const Lecture14Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Quebrando as Regras: Retirando Elementos do Fluxo Normal
			</h3>
			<p className='mb-4'>
				Dominámos o modelo de caixa e como os elementos se empilham e fluem um
				após o outro. Mas para designs mais complexos, como sobreposições, menus
				suspensos ou cabeçalhos fixos, precisamos de uma forma de retirar os
				elementos deste "fluxo normal" do documento. É aqui que entra a
				propriedade <code>position</code>.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. A Propriedade `position` e as Coordenadas
			</h3>
			<p className='mb-4'>
				A propriedade <code>position</code>, juntamente com as propriedades de
				coordenadas <code>top</code>, <code>right</code>, <code>bottom</code> e{" "}
				<code>left</code>, permite-nos colocar um elemento em qualquer lugar da
				página.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`position: static;` (O Valor Padrão)</strong>
					<p className='mt-2'>
						Todo o elemento é <code>static</code> por defeito. Significa que
						segue o fluxo normal da página. As propriedades <code>top</code>,{" "}
						<code>right</code>, etc., não têm qualquer efeito sobre ele.
					</p>
				</li>
				<li>
					<strong>`position: relative;` (O Ponto de Partida)</strong>
					<p className='mt-2'>
						O elemento continua a ocupar o seu espaço no fluxo normal, mas agora
						podemos "movê-lo" ou deslocá-lo da sua posição original usando as
						coordenadas. O mais importante é que{" "}
						<strong>cria um contexto de posicionamento</strong> para os seus
						elementos filhos com <code>position: absolute;</code>.
					</p>
					<CodeBlock
						language='css'
						codeString={`.caixa-relativa {
  position: relative;
  left: 30px;
  top: 10px;
}`}
					/>
				</li>
				<li>
					<strong>`position: absolute;` (O Elemento "Livre")</strong>
					<p className='mt-2'>
						Isto é uma mudança radical. O elemento é{" "}
						<strong>completamente removido</strong> do fluxo do documento. Já
						não ocupa espaço e os outros elementos comportam-se como se ele не
						existisse. Posiciona-se em relação ao seu{" "}
						<strong>ancestral posicionado mais próximo</strong> (qualquer
						ancestral cuja posição não seja <code>static</code>). Se não
						encontrar nenhum, posiciona-se em relação ao{" "}
						<code>&lt;body&gt;</code>.
					</p>
					<CodeBlock
						language='css'
						codeString={`.contentor-pai {
  position: relative; /* Contexto de posicionamento */
}
.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
}`}
					/>
				</li>
				<li>
					<strong>`position: fixed;` (O Elemento "Colado")</strong>
					<p className='mt-2'>
						Também é removido do fluxo normal, mas posiciona-se em relação à{" "}
						<strong>janela do navegador (viewport)</strong>. Isto significa que
						não se moverá mesmo que o utilizador faça scroll na página. É
						perfeito para cabeçalhos fixos, barras de cookies ou botões de
						"voltar ao topo".
					</p>
					<CodeBlock
						language='css'
						codeString={`.cabecalho-fixo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
}`}
					/>
				</li>
				<li>
					<strong>`position: sticky;` (O Híbrido Inteligente)</strong>
					<p className='mt-2'>
						Comporta-se como <code>relative</code> até que o utilizador faça
						scroll e o elemento atinja um limiar definido pelas coordenadas (ex.{" "}
						<code>top: 0;</code>). Nesse momento, comporta-se como{" "}
						<code>fixed</code>. Ideal para cabeçalhos de secção ou barras
						laterais que devem "colar-se" no topo ao fazer scroll.
					</p>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Empilhando Elementos: `z-index`
			</h3>
			<p className='mb-4'>
				Quando os elementos são posicionados fora do fluxo normal, podem
				sobrepor-se. A propriedade <code>z-index</code> controla a ordem de
				empilhamento no eixo Z (a profundidade).
			</p>
			<p>
				Um elemento com um <code>z-index</code> mais alto aparecerá por cima de
				um elemento com um <code>z-index</code> mais baixo. Importante:{" "}
				<strong>
					<code>z-index</code> só funciona em elementos posicionados
				</strong>{" "}
				(aqueles cuja posição não é <code>static</code>).
			</p>
			<CodeBlock
				language='css'
				codeString={`.dialogo-modal {
  position: fixed;
  z-index: 100; /* Estará por cima de quase tudo */
}
.overlay {
  position: fixed;
  z-index: 99; /* Estará logo abaixo do diálogo */
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Uma Nota sobre `float` (Legado)
			</h3>
			<p className='mb-4'>
				Antes de existirem ferramentas modernas como Flexbox e Grid, a
				propriedade <code>float</code> (com valores <code>left</code> ou{" "}
				<code>right</code>) era a principal forma de criar layouts de colunas e
				fazer com que o texto fluísse à volta das imagens.
			</p>
			<p>
				Hoje em dia, o seu uso para a maquetização geral de uma página é
				considerado uma <strong>prática obsoleta</strong>. No entanto, ainda é
				útil para o seu propósito original: fazer com que um elemento, como uma
				imagem, "flutue" dentro de um bloco de texto.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Criando um "Modal" Básico
			</h3>
			<p className='mb-4'>
				Vamos aplicar o que aprendemos sobre posicionamento e `z-index` para
				criar a estrutura de uma janela modal, um componente de UI muito comum.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>HTML:</strong> Crie duas <code>&lt;div&gt;</code> no seu HTML.
					Uma com a classe <code>overlay</code> e outra com a classe{" "}
					<code>modal-content</code>.
				</li>
				<li>
					<strong>CSS para o Overlay:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Dê à <code>.overlay</code> uma <code>position: fixed;</code>.
						</li>
						<li>
							Faça com que ocupe todo o ecrã usando{" "}
							<code>top: 0; left: 0; width: 100%; height: 100%;</code>.
						</li>
						<li>
							Dê-lhe uma cor de fundo semi-transparente, por exemplo:{" "}
							<code>background-color: rgba(0, 0, 0, 0.5);</code>.
						</li>
						<li>
							Atribua-lhe um <code>z-index: 10;</code>.
						</li>
					</ul>
				</li>
				<li>
					<strong>CSS para o Conteúdo do Modal:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Dê à <code>.modal-content</code> uma <code>position: fixed;</code>
							.
						</li>
						<li>
							Centre-a no ecrã. (Uma forma simples é:{" "}
							<code>
								top: 50%; left: 50%; transform: translate(-50%, -50%);
							</code>
							. A propriedade <code>transform</code> veremos mais à frente, mas
							por agora pode usá-la).
						</li>
						<li>
							Dê-lhe uma <code>background-color: white;</code>, um{" "}
							<code>padding</code>, e uma <code>width</code>.
						</li>
						<li>
							Atribua-lhe um <code>z-index: 20;</code> para que apareça por cima
							do overlay.
						</li>
					</ul>
				</li>
				<li>
					Observe o resultado. Deverá ter uma janela de conteúdo a flutuar sobre
					um fundo escuro que cobre toda a página.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture14Pt;
