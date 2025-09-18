import CodeBlock from "@/components/ui/code-block";

const Lecture27Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. A Ponte entre JavaScript e HTML: O que é o DOM?
			</h3>
			<p className='mb-4'>
				Bem-vindo ao Módulo 7! É aqui que tudo o que aprendemos de JavaScript
				ganha vida. Até agora, o nosso HTML era estático e o nosso JavaScript
				vivia no seu próprio mundo, a consola. O{" "}
				<strong>Document Object Model (DOM)</strong> é a ponte que os conecta.
			</p>
			<p className='mb-4'>
				Quando um navegador carrega um documento HTML, ele cria um "modelo de
				objeto" dessa página na memória. Esse modelo é o DOM. O DOM representa o
				documento como uma árvore de nós e objetos, onde cada tag HTML é um
				objeto (ou nó) na árvore.
			</p>
			<p className='mb-4'>
				<strong>Analogia:</strong> Pense no seu documento HTML como uma árvore
				genealógica. A tag <code>&lt;html&gt;</code> é o ancestral principal.
				Tem dois filhos diretos: <code>&lt;head&gt;</code> e{" "}
				<code>&lt;body&gt;</code>. Por sua vez, <code>&lt;body&gt;</code> pode
				ter filhos como <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code> e{" "}
				<code>&lt;div&gt;</code>, e assim por diante. O JavaScript, através do
				DOM, pode interagir com cada membro desta família: selecioná-los,
				alterar as suas propriedades, adicionar novos membros ou eliminá-los.
			</p>
			<div className='my-6 p-4 border rounded-lg bg-gray-50 dark:bg-gray-800/50 text-center'>
				<h4 className='font-semibold mb-2'>Representação da Árvore DOM</h4>
				<pre className='font-mono text-sm leading-relaxed text-left p-4 bg-white dark:bg-gray-900 rounded-md'>
					{`
  HTML
  ├── HEAD
  │   ├── TITLE
  │   └── ...
  └── BODY
      ├── H1 (com texto "Título Principal")
      └── P (com um A (link) dentro)
          └── A (com texto "Clique aqui")
`}
				</pre>
			</div>
			<p>
				O objeto global que nos dá acesso a todo o DOM é o objeto{" "}
				<code>document</code>.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Selecionando Elementos (Nós)
			</h3>
			<p className='mb-4'>
				Para podermos manipular um elemento, primeiro devemos selecioná-lo e
				guardá-lo numa variável. O JavaScript oferece-nos vários métodos para o
				fazer.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Métodos Clássicos</h4>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`getElementById('idDoElemento')`</strong>: O mais rápido e
					específico. Seleciona o único elemento que tenha o <code>id</code>{" "}
					fornecido.
					<CodeBlock
						language='javascript'
						codeString={`// HTML: <h1 id="titulo-principal">A Minha Página</h1>
const titulo = document.getElementById('titulo-principal');`}
					/>
				</li>
				<li>
					<strong>`getElementsByClassName('nomeDaClasse')`</strong>: Seleciona{" "}
					<strong>todos</strong> os elementos que têm uma classe específica.
					Devolve uma <code>HTMLCollection</code>, que é semelhante a um array,
					mas não exatamente igual.
					<CodeBlock
						language='javascript'
						codeString={`// HTML: <p class="paragrafo">...</p> <p class="paragrafo">...</p>
const paragrafos = document.getElementsByClassName('paragrafo');`}
					/>
				</li>
				<li>
					<strong>`getElementsByTagName('nomeDaTag')`</strong>: Seleciona{" "}
					<strong>todos</strong> os elementos de um tipo de tag específico (ex.
					todos os <code>&lt;li&gt;</code>). Também devolve uma{" "}
					<code>HTMLCollection</code>.
					<CodeBlock
						language='javascript'
						codeString={`// HTML: <li>Item 1</li> <li>Item 2</li>
const itensLista = document.getElementsByTagName('li');`}
					/>
				</li>
			</ul>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Métodos Modernos e Recomendados
			</h4>
			<p className='mb-4'>
				Estes métodos são mais poderosos e flexíveis porque usam a mesma sintaxe
				de seletores que usamos em CSS.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`querySelector('seletorCSS')`</strong>: Devolve o{" "}
					<strong>primeiro</strong> elemento do documento que corresponda ao
					seletor CSS especificado. Se não encontrar nada, devolve{" "}
					<code>null</code>. Pode usar qualquer seletor CSS!
					<CodeBlock
						language='javascript'
						codeString={`// Selecionar por ID
const titulo = document.querySelector('#titulo-principal');

// Selecionar o primeiro elemento com a classe .paragrafo
const primeiroParagrafo = document.querySelector('.paragrafo');

// Selecionar o primeiro link dentro de uma div com id "menu"
const primeiroLinkMenu = document.querySelector('#menu a');`}
					/>
				</li>
				<li>
					<strong>`querySelectorAll('seletorCSS')`</strong>: Devolve{" "}
					<strong>todos</strong> os elementos que correspondam ao seletor CSS.
					Devolve uma <code>NodeList</code>.
					<CodeBlock
						language='javascript'
						codeString={`// Selecionar todos os parágrafos com a classe .destacado
const todosDestacados = document.querySelectorAll('.destacado');

// Selecionar todos os li dentro de uma ul com id "lista-compras"
const todosItens = document.querySelectorAll('#lista-compras li');`}
					/>
				</li>
			</ul>

			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					HTMLCollection vs. NodeList
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Ambas são coleções de elementos semelhantes a um array, mas a
					principal diferença é que uma <code>HTMLCollection</code> é "viva"
					(atualiza-se automaticamente se adicionar ou remover elementos do
					DOM), enquanto uma <code>NodeList</code> de{" "}
					<code>querySelectorAll</code> é "estática". Na maioria dos casos, esta
					diferença não é crucial. Para percorrer ambas, pode usar laços{" "}
					<code>for</code> ou, no caso da <code>NodeList</code>, métodos de
					array como <code>forEach</code>.
				</p>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>📝 Tarefa: Selecione Tudo</h3>
			<p className='mb-4'>
				Para esta tarefa, primeiro crie um novo ficheiro HTML chamado{" "}
				<code>pratica_seletores.html</code> e cole o seguinte código nele.
				Depois, crie um ficheiro <code>pratica_seletores.js</code> e ligue-o no
				final do <code>&lt;body&gt;</code>.
			</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Prática de Seletores</title>
</head>
<body>
    <header id="header-principal">
        <h1 id="titulo">Título da Página</h1>
        <nav>
            <a href="#" class="nav-link">Início</a>
            <a href="#" class="nav-link">Serviços</a>
            <a href="#" class="nav-link">Contato</a>
        </nav>
    </header>

    <main>
        <section class="secao-conteudo">
            <h2>Notícias</h2>
            <p class="paragrafo">Primeira notícia importante.</p>
        </section>
        <section class="secao-conteudo">
            <h2>Eventos</h2>
            <p>Próximo evento na sexta-feira.</p>
        </section>
    </main>

    <footer id="footer-principal">
        <p>Copyright 2024</p>
        <ul>
            <li><a href="#">Privacidade</a></li>
            <li><a href="#">Termos</a></li>
        </ul>
    </footer>

    <script src="pratica_seletores.js"></script>
</body>
</html>`}
			/>
			<p className='mt-4'>
				Agora, no seu ficheiro <code>pratica_seletores.js</code>, escreva o
				código para realizar as seguintes seleções e mostre cada uma na consola
				usando <code>console.log()</code> para verificar que selecionou os
				elementos corretos.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Selecione o <code>&lt;h1&gt;</code> pelo seu ID.
				</li>
				<li>
					Selecione todos os elementos com a classe <code>nav-link</code>.
				</li>
				<li>
					Selecione todas as tags <code>&lt;section&gt;</code>.
				</li>
				<li>
					Selecione o <code>footer</code> usando <code>querySelector</code> e o
					seu ID.
				</li>
				<li>
					Selecione o primeiro parágrafo que tenha a classe{" "}
					<code>paragrafo</code>.
				</li>
				<li>
					Selecione todos os links (<code>&lt;a&gt;</code>) que estejam dentro
					do <code>footer</code>.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture27Pt;
