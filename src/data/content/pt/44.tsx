import CodeBlock from "@/components/ui/code-block";

const Lecture44Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. A Fonte da Verdade: O Estado da Aplicação
			</h3>
			<p className='mb-4'>
				No desenvolvimento de aplicações interativas, é fundamental ter uma
				única "fonte da verdade" para os nossos dados. Em vez de ler e escrever
				diretamente no DOM, usaremos uma variável de JavaScript (um array) para
				manter o estado das nossas tarefas. O DOM será apenas um reflexo do que
				está nesta variável.
			</p>
			<p>
				Definiremos um array que conterá objetos. Cada objeto representará uma
				tarefa e terá três propriedades:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`id`</strong>: Um identificador único para cada tarefa.
					Usaremos <code>Date.now()</code> para gerar um simples.
				</li>
				<li>
					<strong>`texto`</strong>: O conteúdo da tarefa (uma string).
				</li>
				<li>
					<strong>`concluida`</strong>: Um booleano (<code>true</code> ou{" "}
					<code>false</code>) para saber se a tarefa está terminada.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`// Em script.js, dentro do ouvinte de DOMContentLoaded
let tarefas = [];`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. A Função Mágica: `renderizarTarefas()`
			</h3>
			<p className='mb-4'>
				Criaremos uma função central chamada <code>renderizarTarefas</code>. A
				sua única responsabilidade será pegar no array <code>tarefas</code> e
				"desenhar" a lista correspondente no HTML. Iremos chamá-la sempre que os
				nossos dados mudarem.
			</p>
			<p className='font-semibold'>Lógica da função:</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Limpar a lista:</strong> Antes de adicionar os novos itens,
					esvaziamos o conteúdo atual da `ul` com{" "}
					<code>lista.innerHTML = '';</code> para evitar duplicados.
				</li>
				<li>
					<strong>Percorrer o array:</strong> Usamos <code>.forEach()</code>{" "}
					para iterar sobre cada objeto `tarefa` no nosso array `tarefas`.
				</li>
				<li>
					<strong>Criar cada `li`:</strong> Para cada tarefa, criamos um novo
					elemento <code>&lt;li&gt;</code>.
				</li>
				<li>
					<strong>Adicionar classes e atributos:</strong> Se a tarefa estiver
					concluída (<code>tarefa.concluida</code> for <code>true</code>),
					adicionamos-lhe uma classe CSS (ex. <code>"concluida"</code>) para a
					podermos estilizar. Também adicionamos um atributo `data-id` com o
					`id` da tarefa, que será crucial mais tarde para sabermos que tarefa
					remover ou concluir.
				</li>
				<li>
					<strong>Construir o conteúdo interno:</strong> Usamos `innerHTML` para
					criar a estrutura interna do `li`, que incluirá um `span` para o texto
					e os botões de concluir e remover.
				</li>
				<li>
					<strong>Adicionar ao DOM:</strong> Finalmente, usamos `lista.append()`
					para adicionar o `li` recém-criado à `ul`.
				</li>
			</ol>
			<CodeBlock
				language='javascript'
				codeString={`// (Esta função vai dentro do ouvinte de DOMContentLoaded)
function renderizarTarefas() {
  todoList.innerHTML = ''; // Limpamos a lista

  tarefas.forEach(tarefa => {
    const li = document.createElement('li');

    // Adicionamos uma classe se a tarefa estiver concluída
    if (tarefa.concluida) {
      li.classList.add('concluida');
    }

    // Guardamos o id num atributo data-*
    li.setAttribute('data-id', tarefa.id);

    li.innerHTML = \`
      <span>\${tarefa.texto}</span>
      <div class="botoes">
        <button class="btn-concluir">Concluir</button>
        <button class="btn-remover">Remover</button>
      </div>
    \`;

    todoList.append(li);
  });
}`}
			/>
			<p className='mt-4'>
				Precisaremos de adicionar um pouco de CSS para a classe `.concluida`:
			</p>
			<CodeBlock
				language='css'
				codeString={`/* Em styles.css */
li.concluida span {
    text-decoration: line-through;
    color: #95a5a6;
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Implementando a Lógica para Adicionar Tarefas
			</h3>
			<p className='mb-4'>
				Agora, vamos modificar o ouvinte do formulário que criámos na lição
				anterior.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`todoForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtemos o texto do input e removemos espaços em branco
  const textoTarefa = todoInput.value.trim();

  // Validamos que não está vazio
  if (textoTarefa !== '') {
    // Criamos o novo objeto de tarefa
    const novaTarefa = {
      id: Date.now(),
      texto: textoTarefa,
      concluida: false
    };

    // Adicionamos a nova tarefa ao array de estado
    tarefas.push(novaTarefa);

    // Voltamos a renderizar toda a lista
    renderizarTarefas();

    // Limpamos o input para a próxima tarefa
    todoInput.value = '';
  }
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Faça Funcionar!
			</h3>
			<p className='mb-4'>
				É a sua vez de implementar a lógica principal da aplicação.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>Declare o seu array `tarefas` vazio.</li>
				<li>
					Copie e cole o CSS para a classe `.concluida` no seu ficheiro
					`styles.css`.
				</li>
				<li>
					Escreva a função `renderizarTarefas()` completa no seu `script.js`,
					tal como mostrado acima.
				</li>
				<li>
					Atualize o ouvinte do evento `submit` do seu formulário com a lógica
					para adicionar tarefas ao array e voltar a renderizar.
				</li>
				<li>
					Teste a sua aplicação. Agora, deverá conseguir escrever no campo de
					texto, pressionar "Adicionar", e ver a sua nova tarefa a aparecer na
					lista.
				</li>
			</ol>
			<p>
				Na próxima lição, faremos com que os botões de "Concluir" e "Remover"
				funcionem e guardaremos tudo na memória do navegador.
			</p>
		</section>
	</div>
);

export default Lecture44Pt;
