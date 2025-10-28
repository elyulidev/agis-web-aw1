import CodeBlock from "@/components/ui/code-block";

const Lecture18Pt = () => {
	// FIX: Moved inline styles to a constant and used dangerouslySetInnerHTML to prevent TSX parsing errors.
	const bentoGridStyles = `
          .bento-grid-final-pt {
            display: grid;
            gap: 1rem;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: hsl(36, 100%, 99%);
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: repeat(5, 8vh);
            grid-template-areas:
              "hero hero hero hero aside2 aside2"
              "hero hero hero hero aside2 aside2"
              "hero hero hero hero aside2 aside2"
              "hero hero hero hero aside2 aside2"
              "aside3 aside3 aside4 aside4 aside5 aside5";
          }
          .bento-grid-final-pt .item {
            border: 2px solid #464545;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: sans-serif;
            font-size: 1.1rem;
            font-weight: bold;
          }
          .bento-grid-final-pt .item:nth-child(1) { grid-area: hero; }
          .bento-grid-final-pt .item:nth-child(2) { grid-area: aside2; }
          .bento-grid-final-pt .item:nth-child(3) { grid-area: aside3; }
          .bento-grid-final-pt .item:nth-child(4) { grid-area: aside4; }
          .bento-grid-final-pt .item:nth-child(5) { grid-area: aside5; }

          @media screen and (max-width: 1000px) {
            .bento-grid-final-pt {
              grid-template-columns: repeat(4, 1fr);
              grid-template-rows: repeat(4, 8vh);
              grid-template-areas:
                "hero   hero   hero   hero"
                "hero   hero   hero   hero"
                "aside2 aside2 aside2 aside3"
                "aside4 aside4 aside5 aside5";
            }
          }

          @media screen and (max-width: 750px) {
            .bento-grid-final-pt {
              grid-template-columns: 1fr;
              grid-template-rows: auto;
              grid-template-areas:
                "hero"
                "aside2"
                "aside3"
                "aside4"
                "aside5";
            }
            .bento-grid-final-pt .item {
                min-height: 15vh;
            }
            .bento-grid-final-pt .item:nth-child(1) { min-height: 25vh; }
          }
        `;

	return (
		<div className='space-y-8'>
			<section>
				<h3 className='text-2xl font-semibold mb-3'>
					1. Um Mundo, Múltiplos Ecrãs
				</h3>
				<p className='mb-4'>
					Hoje em dia, os utilizadores acedem à web a partir de uma incrível
					variedade de dispositivos: telemóveis, tablets, portáteis, televisões.
					O <strong>Design Web Responsivo (Responsive Web Design)</strong> é a
					abordagem que sugere que o design e o desenvolvimento devem responder
					ao comportamento e ambiente do utilizador com base no tamanho do ecrã,
					plataforma e orientação.
				</p>
				<p>
					Uma web responsiva adapta-se fluidamente para oferecer a melhor
					experiência possível em qualquer dispositivo.
				</p>
			</section>

			<section>
				<h3 className='text-2xl font-semibold mb-3'>
					2. Os Três Ingredientes do Design Responsivo
				</h3>
				<p className='mb-4'>
					O design responsivo baseia-se em três pilares técnicos:
				</p>
				<ol className='list-decimal list-inside space-y-4 pl-4 mb-4'>
					<li>
						<strong>Layouts Fluidos:</strong> Em vez de usar larguras fixas em
						píxeis (<code>width: 960px;</code>), usamos unidades relativas como
						percentagens (<code>width: 80%;</code>). Isto permite que o layout
						se estique ou encolha com o tamanho do ecrã.
					</li>
					<li>
						<strong>Imagens Flexíveis:</strong> Para evitar que as imagens
						transbordem dos seus contentores em ecrãs pequenos, usamos uma regra
						de ouro:
						<CodeBlock
							language='css'
							codeString={`img {
  max-width: 100%;
  height: auto;
}`}
						/>
						<p className='mt-2'>
							Isto garante que uma imagem nunca será mais larga que o seu
							contentor, mas pode encolher se necessário, mantendo a sua
							proporção.
						</p>
					</li>
					<li>
						<strong>Media Queries:</strong> A ferramenta mais poderosa.
						Permitem-nos aplicar blocos de CSS apenas quando certas condições
						são cumpridas, geralmente relacionadas com o tamanho do ecrã.
					</li>
				</ol>
			</section>

			<section>
				<h3 className='text-2xl font-semibold mb-3'>
					3. Media Queries: CSS com Superpoderes
				</h3>
				<p className='mb-4'>
					Uma media query é uma "pergunta" que fazemos ao navegador sobre o
					dispositivo no qual a página está a ser exibida. Se a resposta for
					"sim", os estilos dentro da query são aplicados.
				</p>
				<p className='mb-4'>
					A sintaxe básica é{" "}
					<code>
						@media (condição) {"{"} /* regras CSS aqui */ {"}"}
					</code>
					.
				</p>

				<h4 className='text-xl font-semibold mt-6 mb-2'>
					`max-width` vs `min-width`
				</h4>
				<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
					<li>
						<strong>`max-width` (Desktop-First):</strong> Os estilos são
						aplicados se a largura da janela for <strong>menor ou igual</strong>{" "}
						ao valor especificado. É como dizer "para ecrãs pequenos".
						<CodeBlock
							language='css'
							codeString={`/* Estilos base para desktop */
.contentor {
  width: 900px;
}

/* Se o ecrã for de 600px ou menos, aplica isto */
@media (max-width: 600px) {
  .contentor {
    width: 100%;
  }
}`}
						/>
					</li>
					<li>
						<strong>`min-width` (Mobile-First):</strong> Os estilos são
						aplicados se a largura da janela for <strong>maior ou igual</strong>{" "}
						ao valor especificado. É como dizer "a partir deste tamanho de
						ecrã".
						<CodeBlock
							language='css'
							codeString={`/* Estilos base para mobile */
.contentor {
  width: 100%;
}

/* Se o ecrã for de 768px ou mais, aplica isto */
@media (min-width: 768px) {
  .contentor {
    width: 750px;
  }
}`}
						/>
					</li>
				</ul>
				<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
					<p className='font-semibold text-blue-800 dark:text-blue-300'>
						Mobile-First é o Padrão Moderno
					</p>
					<p className='text-blue-700 dark:text-gray-300'>
						Desenhar primeiro para ecrãs pequenos (móveis) e depois adicionar
						complexidade para ecrãs maiores (usando `min-width`) é a prática
						recomendada. Obriga a priorizar o conteúdo e geralmente resulta num
						CSS mais limpo e melhor desempenho em dispositivos móveis.
					</p>
				</div>
			</section>

			<section>
				<h3 className='text-2xl font-semibold mb-3'>
					Bento Grids na Prática: Um Exemplo Guiado
				</h3>
				<p className='mb-4'>
					Para finalizar este módulo, vamos explorar uma técnica de layout
					moderna e popular: a <strong>Grelha Bento</strong>. Inspirada nas
					caixas de almoço japonesas, esta técnica organiza o conteúdo numa
					grelha assimétrica que é visualmente apelativa e funcional. É ideal
					para dashboards, portfólios e páginas de início. Usaremos CSS Grid,
					especificamente a propriedade <code>grid-template-areas</code>, para
					construir um layout responsivo.
				</p>
				<p className='mb-4'>
					Vamos construir uma estrutura de layout como a mostrada a continuação:
				</p>
				<img
					src={
						process.env.NODE_ENV === "production"
							? "https://1rqzd6uwpqe1a157.public.blob.vercel-storage.com/conf18/desktop-design-to-recreate.webp"
							: "conf18/desktop-design-to-recreate.webp"
					}
					alt='Exemplo de uma grelha bento com conteúdo'
					className='rounded-lg border my-4 mx-auto block max-w-full'
				/>

				<h4 className='text-xl font-semibold mt-8 mb-2'>
					Passo 1: A Estrutura HTML
				</h4>
				<p className='mb-4'>
					A base é um contentor principal (<code>&lt;div class="grid"&gt;</code>
					) e vários elementos filhos (<code>&lt;div class="item"&gt;</code>)
					que serão as células da nossa grelha.
				</p>
				<CodeBlock
					language='html'
					codeString={`<div class="grid">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>`}
				/>

				<h4 className='text-xl font-semibold mt-8 mb-2'>
					Passo 2: Definindo a Grelha e as Áreas
				</h4>
				<p className='mb-4'>
					Utilizamos <code>display: grid</code> para criar a grelha e{" "}
					<code>grid-template-areas</code> para nomear as áreas e definir a sua
					posição. Cada string representa uma linha, e cada nome uma área da
					grelha.
				</p>
				<CodeBlock
					language='css'
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
		"hero   hero   hero"
		"hero   hero   hero"
		"aside2 aside2 aside2"
		"aside3 aside3 aside3"
		"aside4 aside4 aside4"
		"aside5 aside5 aside5";
}`}
				/>

				<h4 className='text-xl font-semibold mt-8 mb-2'>
					Passo 3: Atribuindo os Itens às Áreas
				</h4>
				<p className='mb-4'>
					Finalmente, atribuímos cada item à sua área correspondente usando a
					propriedade <code>grid-area</code>. Usamos a pseudo-classe{" "}
					<code>:nth-child</code> para apontar para cada item em ordem.
				</p>
				<CodeBlock
					language='css'
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
				<p className='mt-4'>
					Com isto, alcançámos a estrutura base do nosso layout.
				</p>

				<h4 className='text-xl font-semibold mt-8 mb-2'>
					Passo 4: Adicionando Responsividade com Media Queries
				</h4>
				<p className='mb-4'>
					A grande vantagem de <code>grid-template-areas</code> é que
					reorganizar o layout para diferentes tamanhos de ecrã é tão simples
					como redefinir a string das áreas.
				</p>
				<CodeBlock
					language='css'
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
      "hero   hero   hero"
      "hero   hero   hero"
      "aside2 aside2 aside2"
      "aside3 aside3 aside3"
      "aside4 aside4 aside4"
      "aside5 aside5 aside5";
  }
}`}
				/>

				<h4 className='text-xl font-semibold mt-8 mb-2'>
					Resultado Final Interativo
				</h4>
				<p className='mb-4'>
					Aqui pode ver o resultado final. Redimensione o seu navegador para
					observar como a grelha se adapta aos diferentes breakpoints definidos
					nas media queries.
				</p>
				<div className='not-prose'>
					<style dangerouslySetInnerHTML={{ __html: bentoGridStyles }} />
					<div className='bento-grid-final-pt'>
						<div className='item'>Herói</div>
						<div className='item'>Lateral 2</div>
						<div className='item'>Lateral 3</div>
						<div className='item'>Lateral 4</div>
						<div className='item'>Lateral 5</div>
					</div>
				</div>
			</section>

			<section>
				<h3 className='text-2xl font-semibold mb-3'>
					📝 Tarefa: Torne a sua Galeria Responsiva
				</h3>
				<p className='mb-4'>
					Vamos pegar num layout simples de cartões e torná-lo responsivo usando
					a abordagem Mobile-First.
				</p>
				<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
					<li>
						<strong>HTML:</strong> Crie uma `div` contentora que envolva vários
						cartões (pode usar os da lição anterior).
					</li>
					<li>
						<strong>CSS (Mobile-First):</strong>
						<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
							<li>
								Estilize os seus cartões para que, por defeito, sejam exibidos
								um debaixo do outro, ocupando a maior parte da largura
								disponível. Este será o seu design para ecrãs pequenos.
							</li>
						</ul>
					</li>
					<li>
						<strong>CSS (Media Query):</strong>
						<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
							<li>
								Escolha um "breakpoint" (um ponto de quebra), por ejemplo,{" "}
								<code>768px</code>.
							</li>
							<li>
								Crie uma media query:{" "}
								<code>@media (min-width: 768px) {"{ ... }"}</code>.
							</li>
							<li>
								Dentro desta media query, altere os estilos do contentor dos
								cartões para que sejam exibidos numa grelha. Por ejemplo, pode
								usar `display: grid; grid-template-columns: 1fr 1fr;` para criar
								uma grelha de duas colunas.
							</li>
							<li>
								(Opcional) Adicione outro breakpoint para ecrãs maiores (ex.
								`1024px`) e altere a grelha para três colunas
								(`grid-template-columns: 1fr 1fr 1fr;`).
							</li>
						</ul>
					</li>
					<li>
						Abra a sua página no navegador e redimensione a janela. Deverá ver o
						layout a mudar de uma coluna para duas (e depois para três) à medida
						que o ecrã se torna mais largo.
					</li>
				</ol>
			</section>
		</div>
	);
};

export default Lecture18Pt;
