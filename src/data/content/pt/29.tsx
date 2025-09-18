import CodeBlock from "@/components/ui/code-block";

const Lecture29Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Para Além do Conteúdo: Atributos, Classes e Estilos
			</h3>
			<p className='mb-4'>
				Já sabemos como selecionar elementos e alterar o seu conteúdo. Agora,
				vamos aprender a manipular as "etiquetas" e "propriedades" desses
				elementos. Isto inclui alterar atributos como o <code>href</code> de um
				link, modificar dinamicamente as classes CSS para alterar a aparência, e
				ajustar estilos diretamente a partir do JavaScript.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Manipulação de Atributos
			</h3>
			<p className='mb-4'>
				Os atributos HTML (como <code>href</code>, <code>src</code>,{" "}
				<code>id</code>, <code>disabled</code>, etc.) são totalmente acessíveis
				a partir do JavaScript.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`getAttribute('nomeDoAtributo')`</strong>: Obtém o valor atual
					de um atributo.
				</li>
				<li>
					<strong>`setAttribute('nomeDoAtributo', 'novoValor')`</strong>: Define
					ou altera o valor de um atributo. Se o atributo não existir, cria-o.
				</li>
				<li>
					<strong>`removeAttribute('nomeDoAtributo')`</strong>: Remove um
					atributo por completo de um elemento.
				</li>
				<li>
					<strong>Acesso direto:</strong> Para atributos comuns (<code>id</code>
					, <code>href</code>, <code>src</code>, <code>className</code>,{" "}
					<code>value</code>), podemos frequentemente acedê-los diretamente como
					propriedades do objeto elemento.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML de exemplo -->
<a id="meu-link" href="/inicio">Ir para Início</a>
<img id="minha-imagem" src="/logo.png" alt="Logo">
<button id="meu-botao">Clique</button>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const link = document.querySelector('#meu-link');
const imagem = document.querySelector('#minha-imagem');
const botao = document.querySelector('#meu-botao');

// Ler atributos
console.log(link.getAttribute('href')); // Mostra "/inicio"
console.log(link.href); // Mostra a URL completa, ex: "http://localhost:3000/inicio"

// Alterar atributos
link.href = "/contato"; // Acesso direto
imagem.setAttribute('src', '/novo-logo.png');

// Adicionar e remover atributos
botao.setAttribute('disabled', 'true'); // Desativa o botão
// botao.removeAttribute('disabled'); // Ativaria o botão`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. A Forma Correta de Estilizar: `classList`
			</h3>
			<p className='mb-4'>
				Manipular os estilos de um elemento alterando as suas classes CSS é a{" "}
				<strong>prática mais recomendada</strong>. Mantém a separação de
				responsabilidades: o estilo vive no ficheiro CSS, e o JavaScript apenas
				se encarrega de decidir que classes são aplicadas.
			</p>
			<p className='mb-4'>
				Cada elemento do DOM tem uma propriedade <code>classList</code>, que é
				um objeto com métodos muito úteis para gerir as classes.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`.add('nomeClasse')`</strong>: Adiciona uma nova classe.
				</li>
				<li>
					<strong>`.remove('nomeClasse')`</strong>: Remove uma classe.
				</li>
				<li>
					<strong>`.toggle('nomeClasse')`</strong>: Se a classe existir,
					remove-a. Se não existir, adiciona-a. Perfeito para interruptores!
				</li>
				<li>
					<strong>`.contains('nomeClasse')`</strong>: Devolve <code>true</code>{" "}
					ou <code>false</code> se o elemento tiver a classe.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML -->
<p id="mensagem">Esta é uma mensagem.</p>`}
			/>
			<CodeBlock
				language='css'
				codeString={`/* CSS */
.ativo {
  background-color: #2563eb; /* Azul */
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
}`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const mensagem = document.querySelector('#mensagem');

// Adicionar uma classe
mensagem.classList.add('ativo');

// Verificar se tem a classe
console.log(mensagem.classList.contains('ativo')); // Mostra true

// Remover a classe
// mensagem.classList.remove('ativo');

// Alternar a classe
// mensagem.classList.toggle('ativo');`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Estilos em Linha (Inline Styles) com a Propriedade `style`
			</h3>
			<p className='mb-4'>
				Também podemos modificar diretamente os estilos em linha de um elemento
				através da propriedade <code>style</code>. Isto é útil para alterações
				muito específicas e dinâmicas que seriam difíceis de gerir com classes.
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					Lembre-se do camelCase!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					As propriedades CSS que têm um hífen (kebab-case), como{" "}
					<code>background-color</code> ou <code>font-size</code>, são escritas
					em JavaScript usando camelCase: <code>backgroundColor</code> e{" "}
					<code>fontSize</code>.
				</p>
			</div>
			<CodeBlock
				language='javascript'
				codeString={`const titulo = document.querySelector('#titulo');

// Definir estilos em linha
titulo.style.color = 'red';
titulo.style.backgroundColor = 'lightgrey';
titulo.style.fontSize = '24px';
titulo.style.padding = '10px';
titulo.style.borderRadius = '5px';`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Interruptor de Luz (Modo Escuro)
			</h3>
			<p className='mb-4'>
				Este é um exercício clássico e muito prático. Criaremos um botão que
				ativa e desativa um "modo escuro" na página, manipulando classes CSS.
			</p>
			<p>1. Crie um ficheiro HTML com um botão e algum conteúdo:</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="pt">
<head>
  <title>Modo Escuro</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <button id="interruptor">Alterar Modo</button>
  </header>
  <main>
    <h1>Bem-vindo à Página</h1>
    <p>Use o botão para alternar entre o modo claro e escuro.</p>
  </main>
  <script src="main.js"></script>
</body>
</html>`}
			/>
			<p className='mt-4'>
				2. Crie um ficheiro <code>styles.css</code> e adicione estes estilos:
			</p>
			<CodeBlock
				language='css'
				codeString={`body {
  padding: 2rem;
  transition: background-color 0.3s, color 0.3s;
}

/* Estilos para o modo escuro */
body.modo-escuro {
  background-color: #1a202c;
  color: #e2e8f0;
}`}
			/>
			<p className='mt-4'>
				3. Agora, a magia em <code>main.js</code>:
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Selecione o botão com o id <code>interruptor</code> e guarde-o numa
					variável.
				</li>
				<li>
					Selecione o <code>body</code> do documento (pode usar{" "}
					<code>document.body</code>).
				</li>
				<li>
					Adicione um "ouvinte de eventos" ao botão para que reaja ao clique.
					(Antecipação de futuras lições! Por agora, apenas copie esta
					estrutura). A função que lhe passarmos será executada cada vez que se
					clicar.
				</li>
				<li>
					Dentro da função do evento de clique, use{" "}
					<code>classList.toggle('modo-escuro')</code> no <code>body</code>.
				</li>
			</ol>
			<CodeBlock
				language='javascript'
				codeString={`const interruptor = document.querySelector('#interruptor');
const body = document.body;

interruptor.addEventListener('click', function() {
  // Cada vez que se clica, esta linha adiciona ou remove a classe.
  body.classList.toggle('modo-escuro');
});`}
			/>
			<p className='mt-4'>
				Abra o HTML no seu navegador. Agora, deverá conseguir alternar entre o
				modo claro e escuro com um único clique!
			</p>
		</section>
	</div>
);

export default Lecture29Pt;
