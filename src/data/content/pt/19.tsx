import CodeBlock from "@/components/ui/code-block";

const Lecture19Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Do Estático ao Dinâmico: Apresentando o JavaScript
			</h3>
			<p className='mb-4'>
				Parabéns por chegar ao Módulo 5! Até agora, aprendemos a construir a
				estrutura e o esqueleto de uma página web com HTML e, em módulos
				futuros, aprenderemos a estilizá-la com CSS. Criamos páginas estáticas,
				que são como folhetos digitais: mostram informação, mas não reagem às
				ações do utilizador.
			</p>
			<p className='mb-4'>
				Hoje, damos o salto para o mundo dinâmico com o{" "}
				<strong>JavaScript (JS)</strong>. Se o HTML é o esqueleto e o CSS é a
				pele, o JavaScript é o sistema nervoso e os músculos. É a linguagem de
				programação que nos permite adicionar interatividade, lógica e dinamismo
				aos nossos websites.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>2. O que é o JavaScript?</h3>
			<p className='mb-4'>
				JavaScript é uma linguagem de programação de alto nível, interpretada e
				orientada a objetos que é executada diretamente no navegador do
				utilizador (o que é conhecido como "lado do cliente" ou "client-side").
				Isto significa que não precisamos de compilar o nosso código antes que
				ele seja executado.
			</p>
			<p className='mb-4'>O que podemos fazer com ele?</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>Validar formulários antes de os enviar.</li>
				<li>Criar animações e efeitos visuais.</li>
				<li>
					Carregar novo conteúdo na página sem ter de a recarregar (AJAX).
				</li>
				<li>Construir jogos, calculadoras e aplicações web complexas.</li>
				<li>Manipular o HTML e o CSS da página em tempo real.</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. O Nosso Ambiente de Desenvolvimento: A Consola do Navegador
			</h3>
			<p className='mb-4'>
				A boa notícia é que não precisa de instalar nada de novo para começar
				com o JavaScript. O seu próprio navegador web (Chrome, Firefox, etc.)
				tem um poderoso conjunto de ferramentas para programadores, e a mais
				importante para nós agora é a <strong>Consola</strong>.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>Abra o seu navegador.</li>
				<li>
					Clique com o botão direito em qualquer parte da página e selecione
					"Inspecionar" (ou "Inspect").
				</li>
				<li>
					No painel que se abre, procure e clique no separador "Consola" (ou
					"Console").
				</li>
			</ol>
			<p className='mb-4'>
				A consola é um ambiente interativo onde pode escrever e executar código
				JavaScript diretamente. Experimente! Escreva o seguinte e pressione
				Enter:
			</p>
			<CodeBlock
				language='javascript'
				codeString={`console.log("Olá, Mundo a partir da Consola!");

2 + 2; // A consola irá mostrar o resultado: 4`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Como Ligar o JavaScript ao seu HTML
			</h3>
			<p className='mb-4'>
				Existem duas formas de incluir JavaScript num ficheiro HTML, mas uma é
				muito melhor que a outra.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Método 1: Script Interno (Menos Recomendado)
			</h4>
			<p className='mb-4'>
				Pode escrever o seu código JS diretamente dentro de uma tag{" "}
				<code>&lt;script&gt;</code> no seu HTML.
			</p>
			<CodeBlock
				language='html'
				codeString={`<body>
  <h1>A Minha Página</h1>

  <script>
    console.log("Este código está dentro do HTML.");
  </script>
</body>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Método 2: Script Externo (Prática Recomendada)
			</h4>
			<p className='mb-4'>
				Esta é a forma profissional e organizada. Criamos um ficheiro separado
				com a extensão <code>.js</code> (por exemplo, <code>script.js</code>) e
				ligamo-lo a partir do nosso HTML.
			</p>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					Porque é melhor um ficheiro externo?
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Mantém a separação de responsabilidades (HTML para estrutura, JS para
					comportamento), torna o código mais reutilizável e permite que o
					navegador armazene o ficheiro em cache, melhorando a velocidade de
					carregamento.
				</p>
			</div>

			<p className='mb-4'>
				Primeiro, crie um ficheiro <code>script.js</code> na mesma pasta que o
				seu <code>index.html</code>:
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Dentro de script.js
console.log("Olá a partir de um ficheiro externo!");`}
			/>

			<p className='mt-4'>
				Depois, ligue esse ficheiro no seu HTML usando a tag{" "}
				<code>&lt;script&gt;</code> com o atributo <code>src</code>. A convenção
				é colocar esta tag imediatamente antes do fecho da tag{" "}
				<code>&lt;/body&gt;</code>.
			</p>
			<CodeBlock
				language='html'
				codeString={`<body>
  <!-- Todo o conteúdo da sua página vai aqui -->
  <h1>O Meu Título</h1>
  <p>Um parágrafo de exemplo.</p>

  <script src="script.js"></script>
</body>`}
			/>
			<p className='mt-4'>
				<strong>Porque no final do `body`?</strong> Porque o navegador processa
				o HTML de cima para baixo. Se colocarmos o script no{" "}
				<code>&lt;head&gt;</code>, o navegador irá parar para descarregar e
				executar o JavaScript antes de ter mostrado o conteúdo da página, o que
				pode fazer com que a página pareça lenta. Ao colocá-lo no final,
				garantimos que todo o conteúdo visível é carregado primeiro.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				5. Sintaxe Básica: Comentários e Declarações
			</h3>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Declarações (Statements):</strong> São as instruções que damos
					ao programa. Cada declaração geralmente termina com um ponto e vírgula
					(<code>;</code>). Embora no JavaScript moderno seja frequentemente
					opcional, é uma boa prática incluí-lo para evitar erros inesperados.
				</li>
				<li>
					<strong>Comentários:</strong> São notas que deixamos no código para
					nós mesmos ou para outros programadores. O interpretador de JavaScript
					ignora-os completamente.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`// Este é um comentário de uma linha.

/*
  Este é um comentário
  de várias linhas.
  É útil para explicações mais longas.
*/

let minhaVariavel = "Olá"; // Isto é uma declaração.`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: O Seu Primeiro Script
			</h3>
			<p className='mb-4'>É hora de pôr a teoria em prática!</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Crie um novo ficheiro no seu projeto chamado{" "}
					<code>pratica-js.html</code>.
				</li>
				<li>
					Dentro deste ficheiro, gere a estrutura HTML básica com o Emmet (
					<code>!</code>).
				</li>
				<li>
					Crie um novo ficheiro chamado <code>main.js</code> na mesma pasta.
				</li>
				<li>
					Em <code>main.js</code>, escreva duas linhas de código:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Uma que use <code>console.log()</code> para imprimir uma saudação
							na consola.
						</li>
						<li>
							Outra que use <code>alert()</code> para mostrar uma mensagem
							pop-up no navegador. Por exemplo:{" "}
							<code>alert("O meu primeiro script está a funcionar!");</code>.
						</li>
					</ul>
				</li>
				<li>
					Em <code>pratica-js.html</code>, adicione um <code>&lt;h1&gt;</code>{" "}
					com um título e, imediatamente antes de fechar a tag{" "}
					<code>&lt;/body&gt;</code>, ligue o seu ficheiro <code>main.js</code>{" "}
					usando a tag <code>&lt;script&gt;</code>.
				</li>
				<li>
					Abra <code>pratica-js.html</code> com o Live Server. Deverá ver a
					janela pop-up do <code>alert</code> e, se abrir a consola, verá a sua
					mensagem do <code>console.log</code>.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture19Pt;
