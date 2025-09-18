import CodeBlock from "@/components/ui/code-block";

const Lecture16Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Para Além da Cor Sólida: Fundos com Imagens
			</h3>
			<p className='mb-4'>
				Os fundos são uma parte essencial do design visual. Podemos ir muito
				além de um simples `background-color` usando imagens para criar
				texturas, padrões ou banners impactantes. A propriedade principal para
				isto é <code>background-image</code>.
			</p>
			<CodeBlock
				language='css'
				codeString={`.hero-section {
  background-image: url('caminho/para/a/minha/imagem.jpg');
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Controlando a Imagem de Fundo
			</h3>
			<p className='mb-4'>
				Uma vez que adicionamos uma imagem, temos um conjunto de propriedades
				para controlar o seu comportamento.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`background-repeat`</strong>: Por defeito, as imagens de fundo
					repetem-se em mosaico se forem mais pequenas que o seu contentor.
					<ul className='list-inside space-y-1 pl-6 my-2'>
						<li>
							<code>repeat</code> (valor padrão): Repete horizontal e
							verticalmente.
						</li>
						<li>
							<code>no-repeat</code>: Mostra a imagem uma única vez.
						</li>
						<li>
							<code>repeat-x</code> / <code>repeat-y</code>: Repete apenas no
							eixo horizontal ou vertical.
						</li>
					</ul>
				</li>
				<li>
					<strong>`background-position`</strong>: Define a posição inicial da
					imagem. Podemos usar palavras-chave (<code>top</code>,{" "}
					<code>center</code>, <code>bottom</code>, <code>left</code>,{" "}
					<code>right</code>) ou valores precisos (<code>50% 50%</code>,{" "}
					<code>20px 100px</code>).
					<CodeBlock
						language='css'
						codeString={`.icone-utilizador {
  background-image: url('user.svg');
  background-repeat: no-repeat;
  background-position: center left;
}`}
					/>
				</li>
				<li>
					<strong>`background-size`</strong>: Controla o tamanho da imagem de
					fundo.
					<ul className='list-inside space-y-1 pl-6 my-2'>
						<li>
							<code>auto</code> (valor padrão): A imagem mantém o seu tamanho
							original.
						</li>
						<li>
							<code>cover</code>: <strong>Muito importante.</strong>{" "}
							Redimensiona a imagem para que cubra completamente a área do
							contentor, mantendo a sua proporção. Pode ser que parte da imagem
							seja cortada.
						</li>
						<li>
							<code>contain</code>: Redimensiona a imagem para que caiba
							completamente dentro do contentor, mantendo a sua proporção. Pode
							ser que fiquem espaços vazios.
						</li>
					</ul>
				</li>
				<li>
					<strong>`background-attachment`</strong>: Define se a imagem se
					desloca com o resto do conteúdo.
					<ul className='list-inside space-y-1 pl-6 my-2'>
						<li>
							<code>scroll</code> (valor padrão): A imagem desloca-se com a
							página.
						</li>
						<li>
							<code>fixed</code>: A imagem fica fixa na janela do navegador,
							criando um efeito de paralaxe simples.
						</li>
					</ul>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>3. O Atalho `background`</h3>
			<p className='mb-4'>
				Podemos combinar todas estas propriedades numa única declaração
				`background` para um código mais conciso.
			</p>
			<CodeBlock
				language='css'
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
			<h3 className='text-2xl font-semibold mb-3'>
				4. Degradês CSS: Cores Fluidas
			</h3>
			<p className='mb-4'>
				O CSS permite-nos criar degradês diretamente no código, sem necessidade
				de ficheiros de imagem. Aplicam-se usando a propriedade{" "}
				<code>background-image</code>.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Degradê Linear (`linear-gradient`)
			</h4>
			<p className='mb-4'>Cria um degradê que progride em linha reta.</p>
			<CodeBlock
				language='css'
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

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Degradê Radial (`radial-gradient`)
			</h4>
			<p className='mb-4'>
				Cria um degradê que irradia a partir de um ponto central.
			</p>
			<CodeBlock
				language='css'
				codeString={`/* De dentro para fora */
.gradiente-radial {
  background-image: radial-gradient(circle, white, steelblue);
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Criando um Banner de Herói
			</h3>
			<p className='mb-4'>
				Vamos combinar imagens de fundo e degradês para criar um "hero banner"
				atrativo, uma secção de cabeçalho grande e visualmente impactante.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>HTML:</strong> Crie um elemento <code>&lt;section&gt;</code>{" "}
					com a classe <code>hero-banner</code>. Dentro, coloque um{" "}
					<code>&lt;h1&gt;</code> e um <code>&lt;p&gt;</code>.
				</li>
				<li>
					<strong>CSS:</strong> Selecione <code>.hero-banner</code> e
					aplique-lhe os seguintes estilos:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Dê-lhe uma altura fixa, por exemplo, `height: 60vh;` (60% da
							altura da janela).
						</li>
						<li>
							Use `background-image` para aplicar uma imagem de fundo à sua
							escolha.
						</li>
						<li>
							Adicione `background-size: cover;` e `background-position:
							center;` para que a imagem cubra sempre a secção e esteja
							centrada.
						</li>
						<li>
							Para melhorar a legibilidade do texto, adicione uma sobreposição
							de degradê. Pode aplicar múltiplos fundos, separando-os por
							vírgulas. O primeiro que declarar estará por cima.
							<CodeBlock
								language='css'
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
