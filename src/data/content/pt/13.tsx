import CodeBlock from "@/components/ui/code-block";

const Lecture13Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Margem (Margin): Espaço Exterior
			</h3>
			<p className='mb-4'>
				Cobrimos as três camadas internas do modelo de caixa. A última camada é
				a <strong>margem (margin)</strong>, que é o espaço <em>fora</em> da
				borda. A margem é transparente e é usada para criar espaço entre um
				elemento e os seus vizinhos.
			</p>
			<p>
				A sintaxe para as margens é idêntica à do padding, com propriedades
				individuais (<code>margin-top</code>, etc.) e atalhos (shorthands).
			</p>
			<CodeBlock
				language='css'
				codeString={`.elemento {
  /* 20px de espaço em cima, 15px nos lados, 30px em baixo */
  margin: 20px 15px 30px;
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. O Mistério do Colapso de Margens
			</h3>
			<p className='mb-4'>
				As margens têm um comportamento único chamado{" "}
				<strong>colapso de margens (margin collapsing)</strong>. Quando dois
				elementos de bloco com margens verticais estão um em cima do outro, as
				suas margens não se somam. Em vez disso, a margem maior "ganha" e a
				menor "colapsa" ou desaparece.
			</p>
			<p>
				Isto só acontece com as margens verticais (<code>margin-top</code> e{" "}
				<code>margin-bottom</code>), não com as horizontais.
			</p>
			<CodeBlock
				language='css'
				codeString={`.caixa-cima { margin-bottom: 30px; }
.caixa-baixo { margin-top: 20px; }
/* O espaço entre as duas caixas será de 30px, não de 50px */`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Centralização Horizontal: `margin: auto`
			</h3>
			<p className='mb-4'>
				Uma das técnicas mais comuns e essenciais em CSS é centrar um elemento
				de bloco horizontalmente dentro do seu contentor. Isto consegue-se
				facilmente dando ao elemento uma largura definida e definindo as suas
				margens esquerda e direita para <code>auto</code>.
			</p>
			<CodeBlock
				language='css'
				codeString={`.contentor-centrado {
  width: 80%; /* Deve ter uma largura definida que não seja 100% */
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

/* Atalho (shorthand) para o mesmo */
.contentor-centrado-atalho {
  width: 80%;
  max-width: 900px;
  margin: 0 auto; /* 0 para cima/baixo, auto para esquerda/direita */
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. A Propriedade `display`: O Comportamento do Elemento
			</h3>
			<p className='mb-4'>
				A propriedade <code>display</code> é uma das mais importantes do CSS.
				Define como um elemento é renderizado e como interage com os outros. Os
				valores mais fundamentais são:
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`display: block;`</strong>
					<ul className='list-inside space-y-1 pl-6 my-2'>
						<li>Começa numa nova linha.</li>
						<li>Ocupa toda a largura disponível por defeito.</li>
						<li>
							Respeita as propriedades <code>width</code>, <code>height</code>,{" "}
							<code>margin</code>, <code>padding</code> e <code>border</code>.
						</li>
						<li>
							Exemplos: <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>,{" "}
							<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>,{" "}
							<code>&lt;ul&gt;</code>, <code>&lt;li&gt;</code>.
						</li>
					</ul>
				</li>
				<li>
					<strong>`display: inline;`</strong>
					<ul className='list-inside space-y-1 pl-6 my-2'>
						<li>Não começa numa nova linha; flui com o texto.</li>
						<li>Ocupa apenas a largura do seu conteúdo.</li>
						<li>
							<strong>Ignora</strong> <code>width</code> e <code>height</code>.
							As margens e paddings verticais têm um efeito limitado.
						</li>
						<li>
							Exemplos: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>,{" "}
							<code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>.
						</li>
					</ul>
				</li>
				<li>
					<strong>`display: inline-block;`</strong>
					<ul className='list-inside space-y-1 pl-6 my-2'>
						<li>
							O melhor de dois mundos: comporta-se como um elemento{" "}
							<code>inline</code> (não começa numa nova linha) mas respeita{" "}
							<code>width</code>, <code>height</code>, <code>margin</code> e{" "}
							<code>padding</code> como um elemento <code>block</code>.
						</li>
						<li>
							Muito útil para criar elementos de navegação ou botões que devem
							estar um ao lado do outro mas com dimensões específicas.
						</li>
					</ul>
				</li>
				<li>
					<strong>`display: none;`</strong>
					<ul className='list-inside space-y-1 pl-6 my-2'>
						<li>
							Remove completamente o elemento da página. Não ocupa espaço e é
							como se não existisse no HTML.
						</li>
						<li>
							Diferença chave com <code>visibility: hidden;</code>, que oculta o
							elemento mas este continua a ocupar o seu espaço no layout.
						</li>
					</ul>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Maquetando um Blog Simples
			</h3>
			<p className='mb-4'>
				Vamos aplicar estes conceitos para criar a estrutura de uma página de
				blog.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>HTML:</strong> Crie uma <code>&lt;div&gt;</code> com a classe{" "}
					<code>pagina-wrapper</code>. Dentro, coloque um{" "}
					<code>&lt;header&gt;</code>, um <code>&lt;main&gt;</code> e um{" "}
					<code>&lt;footer&gt;</code>. Dentro do <code>&lt;main&gt;</code>, crie
					vários elementos <code>&lt;article&gt;</code>.
				</li>
				<li>
					<strong>CSS:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Dê à <code>.pagina-wrapper</code> uma <code>width</code> (ex.{" "}
							<code>90%</code>) e uma <code>max-width</code> (ex.{" "}
							<code>1000px</code>).
						</li>
						<li>
							Use a técnica de <code>margin: 0 auto;</code> para centrar a{" "}
							<code>.pagina-wrapper</code> na página.
						</li>
						<li>
							Dê a cada <code>&lt;article&gt;</code> uma{" "}
							<code>margin-bottom</code> para os separar verticalmente.
						</li>
						<li>
							Dentro de um <code>&lt;article&gt;</code>, adicione um{" "}
							<code>&lt;span&gt;</code> com a classe <code>categoria</code>. Dê
							a esta classe um <code>padding</code>, uma{" "}
							<code>background-color</code> e um <code>border-radius</code>.
							Observe como, por ser <code>inline</code> por defeito, o padding
							se comporta.
						</li>
						<li>
							Agora, altere o <code>display</code> de <code>.categoria</code>{" "}
							para <code>inline-block</code>. Observe como agora respeita melhor
							o espaço.
						</li>
						<li>
							Finalmente, crie um botão "Ler mais" (um <code>&lt;a&gt;</code>{" "}
							com uma classe) e dê-lhe <code>display: inline-block;</code> para
							poder aplicar-lhe padding e margens e para que se alinhe
							corretamente com o texto.
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture13Pt;
