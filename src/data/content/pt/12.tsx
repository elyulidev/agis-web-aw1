import CodeBlock from "@/components/ui/code-block";

const Lecture12Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. O Conceito Fundamental: Toda a Caixa é um Retângulo
			</h3>
			<p className='mb-4'>
				Em CSS, tudo o que vê numa página é uma caixa retangular. Um parágrafo,
				uma imagem, um cabeçalho, até mesmo a página inteira. O{" "}
				<strong>Modelo de Caixa (Box Model)</strong> é a regra que define como o
				tamanho destas caixas é calculado e como interagem entre si.
			</p>
			<p>Cada caixa é composta por quatro partes, de dentro para fora:</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Conteúdo (Content):</strong> A área onde o seu texto, imagens,
					etc., são exibidos.
				</li>
				<li>
					<strong>Preenchimento (Padding):</strong> Um espaço transparente à
					volta do conteúdo, dentro da borda.
				</li>
				<li>
					<strong>Borda (Border):</strong> Uma linha que rodeia o preenchimento
					e o conteúdo.
				</li>
				<li>
					<strong>Margem (Margin):</strong> Um espaço transparente fora da
					borda, que separa a caixa de outros elementos.
				</li>
			</ol>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Dimensões do Conteúdo: `width` e `height`
			</h3>
			<p className='mb-4'>
				Estas propriedades controlam o tamanho da área de conteúdo.
			</p>
			<CodeBlock
				language='css'
				codeString={`.caixa {
  width: 300px;
  height: 200px;
  background-color: lightblue;
}`}
			/>
			<p className='mt-4'>
				Também pode usar unidades relativas como percentagens (<code>%</code>)
				ou unidades de viewport (<code>vw</code>, <code>vh</code>). Além disso,
				existem propriedades para controlar as dimensões de forma mais flexível:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`min-width` / `min-height`</strong>: O tamanho mínimo que a
					caixa pode ter.
				</li>
				<li>
					<strong>`max-width` / `max-height`</strong>: O tamanho máximo.{" "}
					<code>max-width: 100%;</code> é muito comum para tornar as imagens
					responsivas.
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Preenchimento (Padding): Espaço Interior
			</h3>
			<p className='mb-4'>
				O padding é o espaço entre o conteúdo e a borda. É como a margem de um
				livro. Podem-se definir os quatro lados individualmente ou com um atalho
				(shorthand).
			</p>
			<CodeBlock
				language='css'
				codeString={`/* Lado a lado */
.caixa {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}

/* Atalho (shorthand) - no sentido dos ponteiros do relógio: Cima, Direita, Baixo, Esquerda */
.caixa {
  /* 1 valor: todos os lados */
  padding: 20px;

  /* 2 valores: (cima/baixo) (esquerda/direita) */
  padding: 10px 20px;
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Borda (Border): A Linha Exterior
			</h3>
			<p className='mb-4'>
				A borda é definida com três propriedades principais: espessura, estilo e
				cor.
			</p>
			<CodeBlock
				language='css'
				codeString={`/* Propriedades individuais */
.caixa {
  border-width: 2px;
  border-style: solid; /* Outros: dashed, dotted, double, etc. */
  border-color: #333;
}

/* Atalho (shorthand) - a ordem não importa */
.caixa {
  border: 2px solid #333;
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				5. O Dilema do Tamanho: `box-sizing`
			</h3>
			<p className='mb-4'>
				Por defeito (<code>box-sizing: content-box;</code>), quando define um{" "}
				<code>width: 300px;</code>, essa é a largura do{" "}
				<strong>conteúdo</strong>. O padding e a borda são adicionados a essa
				largura, tornando o tamanho total da caixa maior que 300px. Isto é muito
				pouco intuitivo.
			</p>
			<p className='mb-4'>
				A solução moderna é <strong>`box-sizing: border-box;`</strong>. Com este
				valor, o <code>width</code> que define é a largura total da caixa,
				incluindo padding e borda. O navegador ajusta o espaço do conteúdo
				automaticamente.
			</p>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					Prática Recomendada Universal:
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Aplique <code>border-box</code> a todos os elementos no início do seu
					CSS. Isto torna o design de layouts incrivelmente mais fácil e
					previsível.
				</p>
			</div>
			<CodeBlock
				language='css'
				codeString={`html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit; /* Todos os elementos herdam de html */
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Construa o seu Cartão de Perfil
			</h3>
			<p className='mb-4'>
				Vamos criar um componente de cartão simples para pôr em prática o modelo
				de caixa.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Crie uma <code>&lt;div&gt;</code> no seu HTML com a classe{" "}
					<code>cartao-perfil</code>. Dentro, coloque um <code>&lt;h2&gt;</code>{" "}
					com um nome e um <code>&lt;p&gt;</code> com uma breve descrição.
				</li>
				<li>
					No seu CSS, adicione a regra de <code>box-sizing: border-box;</code>{" "}
					para todos os elementos, como mostrado acima.
				</li>
				<li>
					Selecione <code>.cartao-perfil</code> e aplique-lhe os seguintes
					estilos:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Um <code>width</code> de <code>300px</code>.
						</li>
						<li>
							Um <code>padding</code> de <code>20px</code> em todos os lados.
						</li>
						<li>
							Uma <code>border</code> de <code>1px solid #ccc</code>.
						</li>
						<li>
							Um <code>background-color</code> de <code>#f9f9f9</code>.
						</li>
					</ul>
				</li>
				<li>
					Observe o resultado. Graças a <code>border-box</code>, a largura total
					do cartão na página será exatamente 300px.
				</li>
				<li>
					Experimente: Comente temporariamente a regra de{" "}
					<code>box-sizing</code>. Verá que o cartão se torna mais largo (300px
					+ 20px + 20px + 1px + 1px = 342px). Agora entende porque{" "}
					<code>border-box</code> é tão essencial!
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture12Pt;
