import CodeBlock from "@/components/ui/code-block";

const Lecture45Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Fazendo os Dados Sobreviverem: `localStorage`
			</h3>
			<p className='mb-4'>
				A nossa aplicação funciona, mas tem um grande problema: se recarregarmos
				a página, todas as tarefas desaparecem. Isto acontece porque o nosso
				array `tarefas` vive na memória do JavaScript, que é reiniciada a cada
				recarregamento. Para resolver isto, usaremos o{" "}
				<strong>`localStorage`</strong>.
			</p>
			<p className='mb-4'>
				O `localStorage` permite-nos guardar dados como strings de texto no
				navegador do utilizador. Estes dados persistem mesmo depois de fechar e
				reabrir o navegador.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Guardar e Carregar Tarefas
			</h4>
			<p className='mb-4'>
				Criaremos duas funções auxiliares: uma para guardar e outra para
				carregar.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`function guardarTarefas() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function carregarTarefas() {
  const tarefasGuardadas = localStorage.getItem('tarefas');
  if (tarefasGuardadas) {
    tarefas = JSON.parse(tarefasGuardadas);
  }
  renderizarTarefas();
}

// Chamamos carregarTarefas() no início, depois de selecionar os elementos.
carregarTarefas();`}
			/>
			<p className='mt-4'>
				Agora, só temos de nos lembrar de chamar <code>guardarTarefas()</code>{" "}
				sempre que o nosso array `tarefas` mudar (ao adicionar, concluir ou
				remover uma tarefa).
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Interatividade com Delegação de Eventos
			</h3>
			<p className='mb-4'>
				Para lidar com os cliques nos botões "Concluir" e "Remover", usaremos o
				padrão de delegação de eventos que aprendemos. Adicionaremos um único
				ouvinte à `&lt;ul&gt;` e usaremos `event.target` para descobrir o que
				foi pressionado.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`todoList.addEventListener('click', function(event) {
  const elemento = event.target;
  const id = elemento.parentElement.parentElement.getAttribute('data-id');

  // Verificar se se clicou no botão de concluir
  if (elemento.classList.contains('btn-concluir')) {
    marcarComoConcluida(id);
  }

  // Verificar se se clicou no botão de remover
  if (elemento.classList.contains('btn-remover')) {
    removerTarefa(id);
  }
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Implementando as Funções `marcarComoConcluida` e `removerTarefa`
			</h3>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Marcar Tarefa como Concluída
			</h4>
			<p className='mb-4'>
				Esta função procurará a tarefa pelo seu ID no array e alterará o valor
				da sua propriedade `concluida`.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`function marcarComoConcluida(id) {
  // Encontramos o índice da tarefa no array
  const indice = tarefas.findIndex(tarefa => tarefa.id == id);

  if (indice > -1) {
    // Invertemos o valor booleano
    tarefas[indice].concluida = !tarefas[indice].concluida;
    guardarTarefas();
    renderizarTarefas();
  }
}`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Remover Tarefa</h4>
			<p className='mb-4'>
				Esta função criará um novo array que exclui a tarefa com o ID que
				queremos remover.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`function removerTarefa(id) {
  // Criamos um novo array com todas as tarefas, exceto a que corresponde ao id
  tarefas = tarefas.filter(tarefa => tarefa.id != id);

  guardarTarefas();
  renderizarTarefas();
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Funcionalidade Completa e Persistente
			</h3>
			<p className='mb-4'>
				Agora é o momento de unir todas as peças para que a nossa aplicação seja
				completamente funcional.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Adicionar Persistência:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Adicione as funções <code>guardarTarefas()</code> e{" "}
							<code>carregarTarefas()</code> ao seu script.
						</li>
						<li>
							Chame <code>carregarTarefas()</code> uma vez no início do seu
							código (depois de selecionar os elementos do DOM).
						</li>
						<li>
							Certifique-se de chamar <code>guardarTarefas()</code> dentro da
							sua função de adicionar tarefa.
						</li>
					</ul>
				</li>
				<li>
					<strong>Implementar Ações:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Adicione o `addEventListener` do tipo `click` à sua `&lt;ul&gt;`.
						</li>
						<li>
							Implemente as funções <code>marcarComoConcluida(id)</code> e{" "}
							<code>removerTarefa(id)</code>.
						</li>
						<li>
							Não se esqueça de chamar <code>guardarTarefas()</code> dentro
							destas duas funções também, para que as alterações sejam
							guardadas.
						</li>
					</ul>
				</li>
				<li>
					<strong>Teste a Fundo:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>Adicione várias tarefas.</li>
						<li>Marque algumas como concluídas.</li>
						<li>Remova outras.</li>
						<li>
							<strong>Recarregue a página.</strong> As suas tarefas devem
							reaparecer exatamente como as deixou. Parabéns, conseguiu a
							persistência de dados!
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture45Pt;
