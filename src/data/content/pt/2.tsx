import CodeBlock from "@/components/ui/code-block";

const Lecture2Pt = () => (
	<div className='space-y-8'>
		<p>
			Pensemos na construção de uma casa: o HTML é a base e a estrutura dessa
			casa. Ele define o significado e a estrutura do conteúdo, enquanto o CSS,
			que veremos mais adiante, é a decoração. Hoje, focaremos em construir esse
			esqueleto sólido e semântico. Ao longo destas duas horas, cobriremos os
			elementos essenciais que compõem qualquer página web.
		</p>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Anatomia de um documento HTML: &lt;!DOCTYPE&gt;, &lt;html&gt;,
				&lt;head&gt; e &lt;body&gt;
			</h3>
			<p className='mb-4'>
				Todo documento HTML segue uma estrutura fundamental que debemos
				respeitar. Essa estrutura é como o esqueleto da nossa página e é
				composta por quatro partes principais.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;!DOCTYPE html&gt;</strong>: Esta é a primeira linha que
					deve sempre aparecer no seu arquivo. Não é uma tag HTML, mas uma
					instrução especial que informa ao navegador que você está usando uma
					versão moderna do HTML (especificamente HTML5).
				</li>
				<li>
					<strong>&lt;html&gt;</strong>: Esta é a tag raiz que envolve todo o
					conteúdo da página. Dentro dela, aninhamos dois elementos principais:{" "}
					<code>&lt;head&gt;</code> e <code>&lt;body&gt;</code>.
				</li>
				<li>
					<strong>&lt;head&gt;</strong>: A seção <code>&lt;head&gt;</code> (ou
					cabeçalho) contém metadados, ou seja, informações sobre o documento
					que não são visíveis diretamente na página (como o título, links para
					CSS, etc.).
				</li>
				<li>
					<strong>&lt;body&gt;</strong>: A seção <code>&lt;body&gt;</code> (ou
					corpo) contém todo o conteúdo visível da página web: textos, imagens,
					links, etc.
				</li>
			</ul>
			<p className='mb-4'>Um esqueleto básico seria assim:</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html>
  <head>
    <!-- Metadados e links para estilos -->
  </head>
  <body>
    <!-- Conteúdo visível da página -->
  </body>
</html>`}
			/>
			<p className='mt-4'>
				É fundamental manter um aninhamento e indentação corretos no código para
				que seja legível e fácil de manter.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Meta Tags Essenciais e o Atributo `lang`
			</h3>
			<p className='mb-4'>
				Dentro da tag <code>&lt;head&gt;</code>, definimos informações cruciais
				tanto para o navegador quanto para os motores de busca (como o Google).
				Estas são as meta tags mais importantes:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;meta charset="utf-8"&gt;</strong>: Declara a codificação
					de caracteres. Usar UTF-8 é o padrão recomendado, pois permite
					representar corretamente quase qualquer caractere de qualquer idioma
					(como "ç" ou acentos).
				</li>
				<li>
					<strong>
						&lt;meta name="viewport" content="width=device-width,
						initial-scale=1.0"&gt;
					</strong>
					: Chave para o design responsivo, informa ao navegador que a largura
					da página deve se ajustar à do dispositivo e define o zoom inicial em
					100%.
				</li>
				<li>
					<strong>&lt;title&gt;</strong>: Define o título do documento que
					aparece na aba do navegador. É extremamente importante para o SEO.
				</li>
				<li>
					<strong>&lt;meta name="description" content="..."&gt;</strong>:
					Fornece uma breve descrição do conteúdo da página, usada pelos motores
					de busca nos resultados.
				</li>
				<li>
					<strong>Atributo `lang`</strong>: É colocado na tag{" "}
					<code>&lt;html&gt;</code> (ex: <code>&lt;html lang="pt"&gt;</code>) e
					especifica o idioma principal do documento, o que é crucial para a
					acessibilidade e o SEO.
				</li>
			</ul>
			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Exemplo de uma seção &lt;head&gt; completa:
			</h4>
			<CodeBlock
				language='html'
				codeString={`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Aprenda os fundamentos de HTML nesta lição interativa.">
  <title>Lição 2: Estrutura HTML - Meu Curso Web</title>
</head>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Cabeçalhos &lt;h1&gt; a &lt;h6&gt;: Hierarquia e SEO
			</h3>
			<p className='mb-4'>
				Os cabeçalhos são usados para estruturar o conteúdo de forma
				hierárquica. O HTML nos oferece seis níveis, de <code>&lt;h1&gt;</code>{" "}
				(o mais importante) a <code>&lt;h6&gt;</code> (o menos importante).
				Usá-los corretamente cria uma estrutura lógica que ajuda os usuários e
				os motores de busca a entender a organização do conteúdo.
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					Regra de Ouro para SEO:
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					Use uma única tag <code>&lt;h1&gt;</code> por página. Os buscadores
					identificam o <code>&lt;h1&gt;</code> como o título principal do
					conteúdo dessa página.
				</p>
			</div>
			<CodeBlock
				language='html'
				codeString={`<body>
  <h1>Anatomia de um Documento HTML</h1>
  <p>O documento é dividido em duas partes principais...</p>

  <h2>O Cabeçalho (&lt;head&gt;)</h2>
  <p>Aqui definimos os metadados...</p>

  <h3>Meta Tags Comuns</h3>
  <p>As meta tags mais importantes são...</p>

  <h2>O Corpo (&lt;body&gt;)</h2>
  <p>Aqui vai todo o conteúdo visível...</p>
</body>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Parágrafos &lt;p&gt;, Quebras de Linha &lt;br&gt;, e Linhas
				Horizontais &lt;hr&gt;
			</h3>
			<p className='mb-4'>
				Estes são os elementos básicos para formatar o fluxo de texto:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>&lt;p&gt;</strong>: Define um parágrafo de texto. É um
					elemento de bloco, o que significa que ocupa toda a largura disponível
					e começa em uma nova linha.
				</li>
				<li>
					<strong>&lt;br&gt;</strong>: Insere uma quebra de linha simples. É
					útil quando você precisa que o texto continue na linha seguinte sem
					criar um novo parágrafo (por exemplo, em endereços ou poemas). É uma
					tag "vazia" (não tem fechamento).
				</li>
				<li>
					<strong>&lt;hr&gt;</strong>: Cria uma "linha horizontal".
					Semanticamente, representa uma quebra temática entre seções.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<p>Este é o primeiro parágrafo. Fala sobre um tópico específico.</p>
<hr>
<p>Este é o segundo parágrafo, que aborda um tópico diferente após a quebra temática.</p>
<p>
  Ministério da Educação<br>
  Rua Falsa 123<br>
  Cidade Capital
</p>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				5. Pré-formatação de texto com &lt;pre&gt;
			</h3>
			<p className='mb-4'>
				Às vezes, precisamos que o navegador respeite os espaços em branco,
				tabulações e quebras de linha exatamente como os escrevemos em nosso
				código. Para isso, usamos a tag <code>&lt;pre&gt;</code>.
			</p>
			<p className='mb-4'>
				O texto dentro de um elemento <code>&lt;pre&gt;</code> é exibido em uma
				fonte de largura fixa (monoespaçada) e preserva tanto os espaços quanto
				as quebras de linha. É ideal para exibir trechos de código, poesia ou
				arte ASCII.
			</p>
			<CodeBlock
				language='html'
				codeString={`<pre>
  function saudar(nome) {
    console.log("Olá, " + nome);
  }

  saudar("Mundo");
</pre>

<pre>
  O Tejo é mais belo que o rio que corre pela minha aldeia,
  Mas o Tejo não é mais belo que o rio que corre pela minha aldeia
  Porque o Tejo não é o rio que corre pela minha aldeia.
      - Alberto Caeiro (Fernando Pessoa)
</pre>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Estruturando sua Biografia
			</h3>
			<p className='mb-4'>
				Nesta tarefa, você aplicará o que aprendeu sobre a estrutura de um
				documento HTML, metadados e tags de texto para criar uma página de
				biografia simples.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Crie o Arquivo:</strong> Na pasta do seu projeto, crie um novo
					arquivo chamado <code>biografia.html</code>.
				</li>
				<li>
					<strong>Estrutura Base:</strong> Use o Emmet (<code>!</code>) para
					gerar a estrutura inicial do documento.
				</li>
				<li>
					<strong>
						Configure o Cabeçalho (<code>&lt;head&gt;</code>):
					</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Certifique-se de que a codificação seja <code>UTF-8</code>.
						</li>
						<li>
							Inclua a meta tag <code>viewport</code> para o design responsivo.
						</li>
						<li>
							Altere o <code>&lt;title&gt;</code> para "Minha Biografia - [Seu
							Nome]".
						</li>
						<li>
							Adicione uma <code>&lt;meta name="description"&gt;</code> que
							descreva brevemente a página.
						</li>
						<li>
							Não se esqueça do atributo <code>lang="pt"</code> na tag{" "}
							<code>&lt;html&gt;</code>.
						</li>
					</ul>
				</li>
				<li>
					<strong>
						Construa o Corpo (<code>&lt;body&gt;</code>):
					</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Use uma tag <code>&lt;h1&gt;</code> para o seu nome completo.
						</li>
						<li>
							Crie uma seção com um <code>&lt;h2&gt;</code> que diga "Sobre Mim"
							e escreva um ou dois parágrafos (<code>&lt;p&gt;</code>) sobre
							você.
						</li>
						<li>
							Adicione uma linha horizontal (<code>&lt;hr&gt;</code>) para
							separar visualmente as seções.
						</li>
						<li>
							Crie outra seção com um <code>&lt;h2&gt;</code> para "Meus
							Hobbies" e descreva seus passatempos em um parágrafo.
						</li>
						<li>
							Use a tag <code>&lt;br&gt;</code> para adicionar uma quebra de
							linha no meio de um endereço ou um poema curto, se desejar.
						</li>
					</ul>
				</li>
				<li>
					<strong>Visualize seu Trabalho:</strong> Abra{" "}
					<code>biografia.html</code> com o Live Server para ver o resultado.
				</li>
			</ol>
			<p>
				Esta prática ajudará a solidificar sua compreensão da hierarquia de
				cabeçalhos e da estrutura semântica básica de uma página web.
			</p>
		</section>
	</div>
);

export default Lecture2Pt;
