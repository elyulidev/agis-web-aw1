import CodeBlock from "@/components/ui/code-block";

const Lecture43Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Da Teoria à Prática: O Nosso Primeiro Projeto
			</h3>
			<p className='mb-4'>
				Parabéns por chegar ao Módulo 11! Este é o momento que todos
				esperávamos. Vamos deixar de lado os exercícios isolados e aplicar tudo
				o que aprendemos de HTML, CSS e JavaScript para construir uma aplicação
				web completa e funcional do zero: uma{" "}
				<strong>Lista de Tarefas (To-Do List)</strong>.
			</p>
			<p>
				Este projeto permitirá-nos integrar conceitos como a manipulação do DOM,
				a gestão de eventos, as funções, os arrays, os objetos e o armazenamento
				local num caso de uso real.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Definição de Requisitos: O que Deve Fazer a Nossa App?
			</h3>
			<p className='mb-4'>
				Antes de escrever uma única linha de código, um bom programador planeia.
				Vamos definir as funcionalidades (ou "features") que a nossa aplicação
				terá:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Adicionar Tarefas:</strong> O utilizador deve poder escrever
					uma nova tarefa num campo de texto e adicioná-la a uma lista.
				</li>
				<li>
					<strong>Mostrar Tarefas:</strong> As tarefas adicionadas devem
					aparecer visualmente na página.
				</li>
				<li>
					<strong>Marcar como Concluída:</strong> O utilizador deve poder marcar
					uma tarefa como concluída, o que deve ser refletido visualmente (por
					exemplo, riscando o texto).
				</li>
				<li>
					<strong>Remover Tarefas:</strong> O utilizador deve poder remover
					tarefas da lista.
				</li>
				<li>
					<strong>Persistência de Dados:</strong> As tarefas не devem
					desaparecer se o utilizador recarregar a página. Devem ser guardadas
					no navegador.
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Planeamento da Estrutura HTML
			</h3>
			<p className='mb-4'>
				Com base nos requisitos, podemos desenhar a estrutura HTML. Precisaremos
				de:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					Um <code>&lt;header&gt;</code> para o título da aplicação.
				</li>
				<li>
					Um <code>&lt;form&gt;</code> que conterá o <code>&lt;input&gt;</code>{" "}
					para a nova tarefa e um <code>&lt;button&gt;</code> do tipo{" "}
					<code>submit</code>. Usar um formulário é semanticamente correto e
					permite-nos capturar o envio facilmente.
				</li>
				<li>
					Uma secção <code>&lt;main&gt;</code> que conterá a lista de tarefas.
				</li>
				<li>
					Uma lista não ordenada <code>&lt;ul&gt;</code> onde inseriremos
					dinamicamente cada tarefa.
				</li>
				<li>
					Cada tarefa será um <code>&lt;li&gt;</code> que, por sua vez, conterá
					o texto da tarefa e os botões de "Concluir" e "Remover".
				</li>
				<li>
					Um <code>&lt;footer&gt;</code> onde poderemos mostrar informação
					adicional, como o número de tarefas pendentes.
				</li>
			</ul>
			<p className='font-semibold mb-2'>Código HTML Inicial (`index.html`):</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tarefas</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="app-container">
        <header>
            <h1>Minhas Tarefas</h1>
        </header>
        <main>
            <form id="todo-form">
                <input type="text" id="todo-input" placeholder="O que precisa de fazer?" required>
                <button type="submit">Adicionar</button>
            </form>
            <ul id="todo-list">
                <!-- As tarefas serão adicionadas aqui com JavaScript -->
            </ul>
        </main>
        <footer id="app-footer">
            <p>Tarefas pendentes: <span id="pending-count">0</span></p>
        </footer>
    </div>
    <script src="script.js"></script>
</body>
</html>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Estilos Básicos para a Aparência
			</h3>
			<p className='mb-4'>
				Embora este não seja um curso de CSS avançado, uma boa aparência ajuda.
				Aqui ficam alguns estilos básicos para que a aplicação pareça limpa e
				moderna.
			</p>
			<p className='font-semibold mb-2'>Código CSS Inicial (`styles.css`):</p>
			<CodeBlock
				language='css'
				codeString={`/* (Pode copiar e colar estes estilos) */
body {
    font-family: sans-serif;
    background-color: #f4f7f6;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

.app-container {
    background-color: white;
    width: 100%;
    max-width: 500px;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

h1 {
    text-align: center;
    color: #2c3e50;
}

#todo-form {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

#todo-input {
    flex-grow: 1;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

#todo-form button {
    padding: 0.75rem 1.25rem;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s;
}

#todo-form button:hover {
    background-color: #2980b9;
}

#todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
}
`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Montando o Cenário
			</h3>
			<p className='mb-4'>
				A sua missão para esta lição é preparar todo o ambiente do nosso
				projeto.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Crie uma nova pasta para o projeto, por exemplo,{" "}
					<code>app-lista-tarefas</code>.
				</li>
				<li>
					Dentro dessa pasta, crie os três ficheiros: <code>index.html</code>,{" "}
					<code>styles.css</code>, e <code>script.js</code>.
				</li>
				<li>
					Copie e cole o código HTML e CSS fornecido nos seus respetivos
					ficheiros.
				</li>
				<li>
					No seu ficheiro <code>script.js</code>, escreva o código inicial:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Adicione um ouvinte para o evento `DOMContentLoaded` para garantir
							que o DOM está pronto.
						</li>
						<li>
							Dentro desse ouvinte, selecione todos os elementos do DOM de que
							vamos precisar (o formulário, o input e a lista `ul`) и guarde-os
							em constantes.
						</li>
						<li>
							Adicione um ouvinte ao formulário para o evento{" "}
							<code>submit</code>. Por agora, esta função deve fazer apenas duas
							coisas: chamar <code>event.preventDefault()</code> e mostrar uma
							mensagem na consola como{" "}
							<code>console.log('Formulário enviado');</code>.
						</li>
					</ul>
				</li>
				<li>
					Abra o seu <code>index.html</code> no navegador. Deverá ver a
					estrutura e os estilos. Ao escrever algo no input e pressionar o
					botão, a página não deve recarregar e deverá ver a sua mensagem na
					consola.
				</li>
			</ol>
			<p>
				Com isto, o nosso cenário está pronto para começarmos a adicionar a
				lógica na próxima lição!
			</p>
		</section>
	</div>
);

export default Lecture43Pt;
