import CodeBlock from "@/components/ui/code-block";

const Lecture28Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Modificando o Mundo Visível
			</h3>
			<p className='mb-4'>
				Na lição anterior, aprendemos a "encontrar" e "agarrar" elementos do
				DOM. Agora, vamos dar o próximo passo lógico: alterar o que esses
				elementos contêm. O JavaScript permite-nos modificar dinamicamente o
				texto e o HTML dentro de qualquer elemento, o que abre um mundo de
				possibilidades para a interatividade.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. `textContent`: A Forma Segura de Lidar com Texto
			</h3>
			<p className='mb-4'>
				A propriedade <code>textContent</code> permite-nos obter ou definir o
				conteúdo de texto de um nó e de todos os seus descendentes. É como pedir
				"dá-me todo o texto que está aí dentro, independentemente das tags
				HTML".
			</p>
			<p className='mb-4'>
				Quando define <code>textContent</code>, qualquer HTML que inclua será
				tratado como texto literal. Não será interpretado como tags.
			</p>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					A Melhor Opção para a Segurança:
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Usar <code>textContent</code> para inserir texto fornecido pelo
					utilizador é a prática mais segura. Previne um tipo de ataque de
					segurança chamado Cross-Site Scripting (XSS), onde um atacante poderia
					injetar scripts maliciosos na sua página.
				</p>
			</div>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML Original -->
<h1 id="saudacao">Olá <strong>Mundo</strong></h1>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const saudacao = document.querySelector('#saudacao');

// Obter o textContent
console.log(saudacao.textContent); // Mostra "Olá Mundo" (ignora a tag <strong>)

// Definir o textContent
saudacao.textContent = "Bem-vindo, Visitante!";
// Agora o H1 ficará assim: <h1>Bem-vindo, Visitante!</h1>

// O que acontece se tentarmos colocar HTML?
saudacao.textContent = "<i>Olá de novo</i>";
// O H1 mostrará o texto literal: <h1>&lt;i&gt;Olá de novo&lt;/i&gt;</h1>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. `innerHTML`: O Poder (e o Perigo) de Lidar com HTML
			</h3>
			<p className='mb-4'>
				A propriedade <code>innerHTML</code> é semelhante, mas com uma diferença
				crucial: obtém ou define o conteúdo como uma string de{" "}
				<strong>código HTML</strong>.
			</p>
			<p className='mb-4'>
				Quando define <code>innerHTML</code>, o navegador interpreta a string e
				converte-a em elementos DOM reais. Isto dá-lhe o poder de criar e
				modificar a estrutura HTML dinamicamente.
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					Aviso de Segurança!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					Nunca use <code>innerHTML</code> para inserir conteúdo que provenha de
					uma fonte não confiável (como a entrada de um utilizador) sem o
					"sanitizar" primeiro. Um utilizador mal-intencionado poderia escrever{" "}
					<code>&lt;script&gt;alert('hackeado')&lt;/script&gt;</code>, e a sua
					página executaria esse script. Use <code>innerHTML</code> apenas com
					conteúdo que você controla ou que é completamente seguro.
				</p>
			</div>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML Original -->
<div id="container">
  <p>Conteúdo inicial.</p>
</div>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const container = document.querySelector('#container');

// Obter o innerHTML
console.log(container.innerHTML); // Mostra "<p>Conteúdo inicial.</p>"

// Definir o innerHTML para substituir o conteúdo
container.innerHTML = "<h2>Novo Título</h2><p>Este é um novo parágrafo.</p>";

// Adicionar conteúdo ao final sem apagar o anterior
container.innerHTML += "<p>Outro parágrafo adicionado ao final.</p>";
// O operador += é um atalho para container.innerHTML = container.innerHTML + "..."
`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. `innerText`: Uma Alternativa Consciente do Estilo
			</h3>
			<p className='mb-4'>
				Existe uma terceira propriedade, <code>innerText</code>. É semelhante a{" "}
				<code>textContent</code>, mas com uma diferença: <code>innerText</code>{" "}
				leva em consideração o estilo CSS e não devolverá o texto de elementos
				que estejam ocultos (por exemplo, com <code>display: none;</code>).
			</p>
			<p className='mb-4'>
				Embora isto possa ser útil em alguns casos, o seu desempenho é pior do
				que o de <code>textContent</code> porque o navegador precisa de calcular
				o layout da página. Geralmente,{" "}
				<strong>
					prefere-se `textContent` pela sua simplicidade e velocidade
				</strong>
				.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Perfil de Utilizador Dinâmico
			</h3>
			<p className='mb-4'>
				Vamos criar um cartão de perfil e preencher o seu conteúdo usando
				JavaScript, para simular o carregamento de dados de um utilizador.
			</p>
			<p>1. Crie um ficheiro HTML e cole a seguinte estrutura:</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="pt">
<head>
  <title>Perfil de Utilizador</title>
</head>
<body>
  <div id="perfil-card">
    <h1 id="nome-utilizador"></h1>
    <p>Email: <span id="email-utilizador"></span></p>
    <div id="bio-utilizador"></div>
  </div>
  <script src="main.js"></script>
</body>
</html>`}
			/>
			<p className='mt-4'>
				2. No seu ficheiro <code>main.js</code>, crie um objeto de JavaScript
				com os seus dados:
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const utilizador = {
  nome: "Ana Garcia",
  email: "ana.garcia@email.com",
  biografia: "Programadora web com paixão por <strong>design UX/UI</strong>."
};`}
			/>
			<p className='mt-4'>
				3. Agora, use JavaScript para preencher o cartão de perfil:
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Selecione o <code>&lt;h1&gt;</code> com o id{" "}
					<code>nome-utilizador</code> e defina o seu{" "}
					<strong>
						<code>textContent</code>
					</strong>{" "}
					com o nome do objeto utilizador.
				</li>
				<li>
					Selecione o <code>&lt;span&gt;</code> com o id{" "}
					<code>email-utilizador</code> e defina o seu{" "}
					<strong>
						<code>textContent</code>
					</strong>{" "}
					com o email do objeto utilizador.
				</li>
				<li>
					Selecione a <code>&lt;div&gt;</code> com o id{" "}
					<code>bio-utilizador</code>. Como a biografia contém tags HTML que
					queremos que sejam interpretadas, defina o seu{" "}
					<strong>
						<code>innerHTML</code>
					</strong>{" "}
					com a biografia do objeto utilizador.
				</li>
				<li>
					Abra o ficheiro HTML no seu navegador e verifique se o cartão de
					perfil é exibido com toda a informação e que a parte "design UX/UI"
					aparece a negrito.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture28Pt;
