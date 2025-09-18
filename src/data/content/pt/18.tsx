import CodeBlock from "@/components/ui/code-block";

const Lecture18Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Um Mundo, Múltiplos Ecrãs
			</h3>
			<p className='mb-4'>
				Hoje em dia, os utilizadores acedem à web a partir de uma incrível
				variedade de dispositivos: telemóveis, tablets, portáteis, televisões. O{" "}
				<strong>Design Web Responsivo (Responsive Web Design)</strong> é a
				abordagem que sugere que o design e o desenvolvimento devem responder ao
				comportamento e ambiente do utilizador com base no tamanho do ecrã,
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
					percentagens (<code>width: 80%;</code>). Isto permite que o layout se
					estique ou encolha com o tamanho do ecrã.
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
					Permitem-nos aplicar blocos de CSS apenas quando certas condições são
					cumpridas, geralmente relacionadas com o tamanho do ecrã.
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
			{/* FIX: Escaped curly braces to prevent JSX parsing error. */}
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
					<strong>`max-width` (Desktop-First):</strong> Os estilos são aplicados
					se a largura da janela for <strong>menor ou igual</strong> ao valor
					especificado. É como dizer "para ecrãs pequenos".
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
					<strong>`min-width` (Mobile-First):</strong> Os estilos são aplicados
					se a largura da janela for <strong>maior ou igual</strong> ao valor
					especificado. É como dizer "a partir deste tamanho de ecrã".
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
				📝 Tarefa: Torne a sua Galeria Responsiva
			</h3>
			<p className='mb-4'>
				Vamos pegar num layout simples de cartões e torná-lo responsivo usando a
				abordagem Mobile-First.
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
							Estilize os seus cartões para que, por defeito, sejam exibidos um
							debaixo do outro, ocupando a maior parte da largura disponível.
							Este será o seu design para ecrãs pequenos.
						</li>
					</ul>
				</li>
				<li>
					<strong>CSS (Media Query):</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Escolha um "breakpoint" (um ponto de quebra), por exemplo,{" "}
							<code>768px</code>.
						</li>
						{/* FIX: Escaped curly braces to prevent JSX parsing error. */}
						<li>
							Crie uma media query:{" "}
							<code>@media (min-width: 768px) {"{ ... }"}</code>.
						</li>
						<li>
							Dentro desta media query, altere os estilos do contentor dos
							cartões para que sejam exibidos numa grelha. Por exemplo, pode
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

export default Lecture18Pt;
