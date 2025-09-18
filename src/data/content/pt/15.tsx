import CodeBlock from "@/components/ui/code-block";

const Lecture15Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Pintando a Web: Formatos de Cor
			</h3>
			<p className='mb-4'>
				A cor é uma das ferramentas de design mais poderosas. O CSS oferece-nos
				várias formas de definir cores, cada uma com as suas vantagens.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>Hexadecimal (`#RRGGBB`):</strong> O formato mais comum.
					Representa os valores de Vermelho, Verde e Azul em base 16. Também
					existe uma sintaxe curta (`#RGB`).
					<CodeBlock
						language='css'
						codeString={`/* Vermelho puro */
color: #FF0000;
/* Azul, forma curta */
color: #00F;`}
					/>
				</li>
				<li>
					<strong>RGB / RGBA (`rgb(r, g, b)`):</strong> Representa as cores
					usando valores decimais de 0 a 255. A versão `rgba` adiciona um quarto
					valor, o canal <strong>alfa (transparência)</strong>, que vai de 0
					(totalmente transparente) a 1 (totalmente opaco).
					<CodeBlock
						language='css'
						codeString={`/* Verde puro */
color: rgb(0, 255, 0);
/* Preto semi-transparente */
background-color: rgba(0, 0, 0, 0.5);`}
					/>
				</li>
				<li>
					<strong>HSL / HSLA (`hsl(h, s, l)`):</strong> Um formato mais
					intuitivo para os humanos. Representa a cor pelo seu{" "}
					<strong>Tom (Hue)</strong> (um ângulo de 0 a 360 no círculo
					cromático), <strong>Saturação (Saturation)</strong> (0-100%) e{" "}
					<strong>Luminosidade (Lightness)</strong> (0-100%). `hsla` adiciona o
					canal alfa.
					<CodeBlock
						language='css'
						codeString={`/* Um azul vibrante */
color: hsl(240, 100%, 50%);
/* Um magenta semi-transparente */
background-color: hsla(300, 100%, 50%, 0.75);`}
					/>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Unidades de Medida: Absolutas vs. Relativas
			</h3>
			<p className='mb-4'>
				Escolher a unidade de medida correta é fundamental para criar designs
				flexíveis e acessíveis.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Unidades Absolutas</h4>
			<p className='mb-4'>
				Têm um tamanho fixo e не mudam. A mais comum é o{" "}
				<strong>píxel (`px`)</strong>. São úteis para elementos que não devem
				escalar, como uma borda de `1px`.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Unidades Relativas</h4>
			<p className='mb-4'>
				O seu tamanho é calculado em relação a outro valor, o que as torna
				ideais para designs responsivos e acessíveis.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`%` (Percentagem):</strong> Relativo ao tamanho do elemento
					pai. `width: 50%;` fará com que um elemento ocupe metade da largura do
					seu contentor.
				</li>
				<li>
					<strong>`em`</strong>: Relativo ao{" "}
					<strong>tamanho de fonte do elemento pai</strong>. Se uma div tem
					`font-size: 16px;`, um `p` dentro com `font-size: 1.2em;` terá 19.2px.
					Pode ser complicado de gerir se houver muito aninhamento.
				</li>
				<li>
					<strong>`rem` (Root EM):</strong> A melhor opção para a tipografia. É
					relativo ao{" "}
					<strong>tamanho de fonte do elemento raiz (`&lt;html&gt;`)</strong>.
					Por defeito, na maioria dos navegadores é `16px`. Se um utilizador
					alterar o tamanho da fonte no seu navegador por acessibilidade, todos
					os tamanhos em `rem` escalarão proporcionalmente.
					<CodeBlock
						language='css'
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
					<strong>`vw` / `vh` (Viewport Width / Height):</strong> Relativas ao
					tamanho da janela do navegador. `1vw` é 1% da largura da janela. São
					perfeitas para criar secções que ocupem todo o ecrã (`height:
					100vh;`).
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Variáveis CSS (Propriedades Personalizadas)
			</h3>
			<p className='mb-4'>
				As variáveis CSS são uma das características mais potentes e modernas.
				Permitem-nos definir valores reutilizáveis num único local, o que
				simplifica enormemente a manutenção e a criação de temas.
			</p>
			<p>
				São declaradas com dois traços (`--nome-variavel`) e usadas com a função
				`var()`. É uma boa prática declará-las no pseudo-seletor `:root`, que
				representa o elemento `&lt;html&gt;`, para que estejam disponíveis
				globalmente.
			</p>
			<CodeBlock
				language='css'
				codeString={`:root {
  --cor-primaria: #3498db;
  --cor-texto: #333;
  --fonte-principal: 'Helvetica', sans-serif;
}

body {
  color: var(--cor-texto);
  font-family: var(--fonte-principal);
}

.botao-principal {
  background-color: var(--cor-primaria);
  color: white;
}

/* Para mudar o tema, só precisaria de alterar as variáveis em :root */
`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Criando uma Paleta de Estilo
			</h3>
			<p className='mb-4'>
				Vamos aplicar estes conceitos para criar um pequeno guia de estilo para
				uma página.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Defina as suas Variáveis:</strong> No seu ficheiro CSS, dentro
					do seletor `:root`, crie pelo menos 4 variáveis: `--cor-primaria`,
					`--cor-fundo`, `--cor-texto` e `--espacamento-base` (ex. `1rem`).
				</li>
				<li>
					<strong>Aplique as Variáveis:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							No `body`, use as variáveis para definir o `background-color`,
							`color` e `font-family`.
						</li>
						<li>
							Crie um botão com a classe `.botao` e use `--cor-primaria` para o
							seu fundo e `white` para o texto.
						</li>
					</ul>
				</li>
				<li>
					<strong>Use Unidades Relativas:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Defina o `font-size` do `&lt;html&gt;` para `100%` (ou deixe por
							defeito).
						</li>
						<li>
							Defina o `font-size` dos seus cabeçalhos (`h1`) e parágrafos (`p`)
							usando `rem`.
						</li>
						<li>
							Use a sua variável `--espacamento-base` для o `padding` do botão e
							o `margin-bottom` dos parágrafos.
						</li>
					</ul>
				</li>
				<li>
					<strong>Experimente:</strong> Abra as ferramentas de programador no
					seu navegador, selecione o elemento `&lt;html&gt;` e altere o seu
					`font-size`. Observe como todo o texto e os espaçamentos que usam
					`rem` escalam juntos de forma fluida.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture15Pt;
