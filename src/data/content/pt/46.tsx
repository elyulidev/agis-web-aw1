import CodeBlock from "@/components/ui/code-block";

const Lecture46Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. De Funcional a Excecional: Refatoração e UX
			</h3>
			<p className='mb-4'>
				Chegámos à última lição do nosso projeto! A nossa aplicação de lista de
				tarefas é completamente funcional. Mas um bom programador não para por
				aí. Agora é o momento de <strong>refatorar</strong> (melhorar a
				estrutura interna do código sem alterar o seu comportamento externo) e
				adicionar pequenos detalhes que melhoram a{" "}
				<strong>Experiência do Utilizador (UX)</strong>.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Refatoração: Organizando o Nosso Código
			</h3>
			<p className='mb-4'>
				À medida que o nosso script cresce, mantê-lo organizado é crucial. Uma
				boa prática é estruturar o código em secções lógicas.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`document.addEventListener('DOMContentLoaded', () => {
  // === 1. SELETORES DO DOM ===
  const todoForm = document.querySelector('#todo-form');
  const todoInput = document.querySelector('#todo-input');
  const todoList = document.querySelector('#todo-list');
  const pendingCountSpan = document.querySelector('#pending-count');

  // === 2. ESTADO DA APLICAÇÃO ===
  let tarefas = [];

  // === 3. FUNÇÕES ===
  function guardarTarefas() { /* ... */ }
  function renderizarTarefas() { /* ... */ }
  // ... resto das funções

  // === 4. OUVINTES DE EVENTOS ===
  todoForm.addEventListener('submit', (e) => { /* ... */ });
  todoList.addEventListener('click', (e) => { /* ... */ });

  // === 5. INICIALIZAÇÃO ===
  function inicializar() {
    const tarefasGuardadas = localStorage.getItem('tarefas');
    if (tarefasGuardadas) {
      tarefas = JSON.parse(tarefasGuardadas);
    }
    renderizarTarefas();
  }

  inicializar();
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Melhorias de Experiência do Utilizador (UX)
			</h3>
			<p className='mb-4'>
				São os pequenos detalhes que fazem com que uma aplicação seja agradável
				de usar.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Melhoria 1: Foco Automático no Input
			</h4>
			<p className='mb-4'>
				Depois de adicionar uma tarefa, é conveniente que o cursor volte
				automaticamente para o campo de texto, pronto para escrever a seguinte.
				Isto consegue-se com o método <code>.focus()</code>.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Dentro do ouvinte do 'submit' do formulário, depois de limpar o input
todoInput.focus();`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Melhoria 2: Contador de Tarefas Pendentes
			</h4>
			<p className='mb-4'>
				Vamos fazer com que o contador do rodapé funcione. Modificaremos a nossa
				função <code>renderizarTarefas</code> para que, além de desenhar a
				lista, atualize o contador.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Dentro da função renderizarTarefas()
function renderizarTarefas() {
  // ... (código existente para limpar e desenhar a lista) ...

  // Atualizar o contador
  const tarefasPendentes = tarefas.filter(tarefa => !tarefa.concluida).length;
  pendingCountSpan.textContent = tarefasPendentes;
}`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Melhoria 3: Mensagem de Lista Vazia
			</h4>
			<p className='mb-4'>
				Mostrar uma lista vazia pode parecer um erro. É melhor mostrar uma
				mensagem amigável.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Dentro da função renderizarTarefas(), depois de limpar a lista
function renderizarTarefas() {
  todoList.innerHTML = '';

  if (tarefas.length === 0) {
    todoList.innerHTML = '<li class="mensagem-vazia">Parabéns, não há tarefas pendentes!</li>';
    pendingCountSpan.textContent = 0;
    return; // Saímos da função para não executar o resto
  }

  // ... (código existente para o forEach e o contador) ...
}`}
			/>
			<p className='mt-4'>E um pouco de estilo para a mensagem:</p>
			<CodeBlock
				language='css'
				codeString={`/* Em styles.css */
.mensagem-vazia {
    text-align: center;
    color: #7f8c8d;
    padding: 1rem;
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Revisão Final e Próximos Passos
			</h3>
			<p className='mb-4'>
				Conseguiste! Construíste uma aplicação web completa, desde o planeamento
				até aos toques finais. Integraste HTML, CSS e uma quantidade
				significativa de lógica de JavaScript, cobrindo os conceitos mais
				importantes do desenvolvimento frontend do lado do cliente.
			</p>
			<p>
				Este projeto é uma base excelente. Se quiseres continuar a praticar,
				podes tentar adicionar novas funcionalidades como:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>Filtros para mostrar apenas tarefas ativas ou concluídas.</li>
				<li>A capacidade de editar uma tarefa existente.</li>
				<li>Datas de vencimento para as tarefas.</li>
				<li>Animações suaves ao adicionar ou remover tarefas.</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Polindo a Aplicação
			</h3>
			<p className='mb-4'>
				A tua tarefa final para este projeto é aplicar as melhorias que
				discutimos.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Refatora:</strong> Organiza o teu ficheiro{" "}
					<code>script.js</code> usando a estrutura de secções comentadas que
					vimos.
				</li>
				<li>
					<strong>Implementa o Foco:</strong> Adiciona a linha{" "}
					<code>todoInput.focus();</code> no local correto para que o input
					receba o foco automaticamente.
				</li>
				<li>
					<strong>Implementa o Contador:</strong> Modifica a tua função{" "}
					<code>renderizarTarefas</code> para que calcule e mostre corretamente
					o número de tarefas pendentes.
				</li>
				<li>
					<strong>Implementa a Mensagem de Lista Vazia:</strong> Adiciona a
					lógica a `renderizarTarefas` para mostrar a mensagem quando não houver
					tarefas e adiciona o estilo correspondente ao teu CSS.
				</li>
				<li>
					Testa tudo novamente. A aplicação deve funcionar como antes, mas
					sentir-se mais polida e profissional.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture46Pt;
