import CodeBlock from "@/components/ui/code-block";

const Lecture50Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Retoques Finais: Persistência e Finalização
			</h3>
			<p className='mb-4'>
				Bem-vindo à culminação do nosso projeto de carrinho de compras! A nossa
				aplicação é completamente interativa, mas ainda lhe falta uma
				característica chave: a persistência. Usaremos o `localStorage` para que
				o carrinho se lembre do seu conteúdo entre visitas. Além disso,
				adicionaremos a funcionalidade de "Esvaziar Carrinho" para simular uma
				compra finalizada.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Implementando Persistência com `localStorage`
			</h3>
			<p className='mb-4'>
				Tal como com a lista de tarefas, criaremos funções para guardar e
				carregar o estado do nosso carrinho. A diferença é que agora devemos
				chamar `guardarCarrinho()` após <strong>cada</strong> ação que modifique
				o array `carrinho`.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`function guardarCarrinho() {
  localStorage.setItem('carrinhoDeCompras', JSON.stringify(carrinho));
}

function carregarCarrinho() {
  const carrinhoGuardado = localStorage.getItem('carrinhoDeCompras');
  if (carrinhoGuardado) {
    carrinho = JSON.parse(carrinhoGuardado);
  }
  // Renderizamos tanto os produtos como o carrinho ao carregar
  renderizarProdutos();
  renderizarCarrinho();
}

// Substituímos as chamadas iniciais por uma única chamada a carregarCarrinho()
document.addEventListener('DOMContentLoaded', carregarCarrinho);`}
			/>
			<p className='mt-4'>
				Agora, devemos certificar-nos de chamar <code>guardarCarrinho()</code>{" "}
				nos locais corretos:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>No final da função `adicionarAoCarrinho()`.</li>
				<li>No final da função `atualizarQuantidade()`.</li>
				<li>No final da função `removerDoCarrinho()`.</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Funcionalidade de "Esvaziar Carrinho"
			</h3>
			<p className='mb-4'>
				Esta função simulará uma compra bem-sucedida. Esvaziaremos o array
				`carrinho`, atualizaremos o `localStorage` e voltaremos a renderizar a
				interface.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const btnEsvaziarCarrinho = document.querySelector('#btn-esvaziar-carrinho');

btnEsvaziarCarrinho.addEventListener('click', () => {
  if (carrinho.length > 0) {
    // Esvaziamos o array de estado
    carrinho = [];

    // Atualizamos o localStorage e a UI
    guardarCarrinho();
    renderizarCarrinho();

    alert('Obrigado pela sua compra!');
  } else {
    alert('O carrinho já está vazio.');
  }
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Melhoria Final: Mensagem de Carrinho Vazio
			</h3>
			<p className='mb-4'>
				Para melhorar a experiência do utilizador, exibiremos uma mensagem clara
				quando o carrinho estiver vazio, em vez de o deixar em branco.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Dentro de renderizarCarrinho(), depois de limpar o contentor
function renderizarCarrinho() {
  carrinhoItemsContainer.innerHTML = '';

  if (carrinho.length === 0) {
    carrinhoItemsContainer.innerHTML = '<p class="carrinho-vazio">O carrinho está vazio.</p>';
    carrinhoTotalSpan.textContent = '0.00';
    return; // Saímos da função
  }

  let total = 0;
  // ... resto do código de renderização ...
}`}
			/>
			<p className='mt-4'>E o estilo para a mensagem:</p>
			<CodeBlock
				language='css'
				codeString={`/* Em styles.css */
.carrinho-vazio {
  text-align: center;
  color: #888;
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Completando o Projeto
			</h3>
			<p className='mb-4'>
				A sua tarefa final é implementar estas últimas funcionalidades para
				completar o carrinho de compras.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Integre o `localStorage`:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Adicione as funções `guardarCarrinho()` e `carregarCarrinho()`.
						</li>
						<li>
							Substitua as suas chamadas iniciais a `renderizar...` por um
							`addEventListener` para `DOMContentLoaded` que chame
							`carregarCarrinho()`.
						</li>
						<li>
							Certifique-se de chamar `guardarCarrinho()` após cada modificação
							do carrinho (em `adicionarAoCarrinho`, `atualizarQuantidade` e
							`removerDoCarrinho`).
						</li>
					</ul>
				</li>
				<li>
					<strong>Implemente o Esvaziamento:</strong> Adicione o
					`addEventListener` para o botão "Esvaziar Carrinho" e a sua lógica
					correspondente.
				</li>
				<li>
					<strong>Adicione a Mensagem de Vazio:</strong> Modifique
					`renderizarCarrinho` para exibir a mensagem quando não houver produtos
					e adicione o CSS.
				</li>
				<li>
					<strong>Teste Tudo!</strong> Realize um fluxo de compra completo:
					adicione produtos, atualize quantidades, remova um, recarregue a
					página para verificar a persistência e, finalmente, esvazie o
					carrinho.
				</li>
			</ol>
			<p>
				<strong>Parabéns!</strong> Construiu um projeto prático e complexo,
				integrando todos os conceitos fundamentais do desenvolvimento web com
				JavaScript. Agora tem uma base sólida para enfrentar projetos ainda
				maiores.
			</p>
		</section>
	</div>
);

export default Lecture50Pt;
