import CodeBlock from "@/components/ui/code-block";

const Lecture49Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Um Carrinho Completamente Interativo
			</h3>
			<p className='mb-4'>
				O nosso carrinho já exibe os produtos, mas um carrinho de compras real
				precisa de ser dinâmico. Os utilizadores devem poder mudar de ideias,
				ajustar quantidades ou remover produtos. Hoje, vamos implementar essa
				interatividade.
			</p>
			<p>
				Para o conseguir, primeiro modificaremos a nossa função
				`renderizarCarrinho` para que inclua os botões de controlo para cada
				item.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Atualizando `renderizarCarrinho`
			</h3>
			<p className='mb-4'>
				Adicionaremos botões para incrementar (+), decrementar (-) e remover (x)
				a quantidade de cada produto. É crucial que cada um destes botões tenha
				um atributo `data-id` com o ID do produto a que pertencem, para que a
				nossa delegação de eventos funcione.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`function renderizarCarrinho() {
  carrinhoItemsContainer.innerHTML = '';
  let total = 0;

  carrinho.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('carrinho-item');
    // Adicionamos um data-id ao contentor do item também!
    itemDiv.setAttribute('data-id', item.id);
    itemDiv.innerHTML = \`
      <div class="item-info">
        <span>\${item.nome}</span>
        <span>€\${item.preco.toFixed(2)}</span>
      </div>
      <div class="item-controles">
        <button class="btn-decrementar" data-id="\${item.id}">-</button>
        <span class="quantidade">\${item.quantidade}</span>
        <button class="btn-incrementar" data-id="\${item.id}">+</button>
        <button class="btn-remover" data-id="\${item.id}">X</button>
      </div>
    \`;
    carrinhoItemsContainer.append(itemDiv);
    total += item.preco * item.quantidade;
  });

  carrinhoTotalSpan.textContent = total.toFixed(2);
}`}
			/>
			<p className='mt-4'>E adicionamos um pouco de CSS para que fique bem:</p>
			<CodeBlock
				language='css'
				codeString={`/* Em styles.css */
.carrinho-item { flex-direction: column; align-items: stretch; }
.item-info, .item-controles { display: flex; justify-content: space-between; align-items: center; padding: 0.2rem 0; }
.item-controles button { background-color: #6c757d; color: white; border: none; width: 24px; height: 24px; border-radius: 4px; cursor: pointer; }
.btn-remover { background-color: #dc3545; }
.quantidade { font-weight: bold; }
`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Delegação de Eventos no Carrinho
			</h3>
			<p className='mb-4'>
				Usaremos o mesmo padrão que com os produtos. Adicionaremos um único
				ouvinte de `click` ao contentor do carrinho e determinaremos que botão
				foi pressionado com base na sua classe.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`carrinhoItemsContainer.addEventListener('click', (event) => {
  const idProduto = event.target.getAttribute('data-id');

  if (event.target.classList.contains('btn-incrementar')) {
    atualizarQuantidade(idProduto, 1);
  } else if (event.target.classList.contains('btn-decrementar')) {
    atualizarQuantidade(idProduto, -1);
  } else if (event.target.classList.contains('btn-remover')) {
    removerDoCarrinho(idProduto);
  }
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Implementando as Funções de Controlo
			</h3>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				`atualizarQuantidade(id, alteracao)`
			</h4>
			<p className='mb-4'>
				Esta função encontrará o item no carrinho e modificará a sua quantidade.
				Se a quantidade chegar a zero, irá removê-lo.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`function atualizarQuantidade(id, alteracao) {
  const idNum = parseInt(id);
  const itemIndex = carrinho.findIndex(item => item.id === idNum);

  if (itemIndex > -1) {
    carrinho[itemIndex].quantidade += alteracao;
    // Se a quantidade chegar a 0, removemos o produto
    if (carrinho[itemIndex].quantidade <= 0) {
      carrinho.splice(itemIndex, 1); // .splice remove elementos do array
    }
  }

  renderizarCarrinho();
}`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				`removerDoCarrinho(id)`
			</h4>
			<p className='mb-4'>
				Esta função filtrará o array `carrinho`, criando um novo sem o item que
				queremos remover.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`function removerDoCarrinho(id) {
  const idNum = parseInt(id);
  carrinho = carrinho.filter(item => item.id !== idNum);

  renderizarCarrinho();
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Carrinho Interativo
			</h3>
			<p className='mb-4'>
				A sua missão é implementar a interatividade completa do carrinho.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Atualize a sua função `renderizarCarrinho` para incluir os novos
					botões de controlo e o `data-id` no contentor do item.
				</li>
				<li>Adicione o novo CSS ao seu ficheiro `styles.css`.</li>
				<li>
					Implemente o ouvinte de `click` no contentor do carrinho (
					<code>#carrinho-items</code>) usando delegação de eventos.
				</li>
				<li>
					Escreva as funções `atualizarQuantidade(id, alteracao)` e
					`removerDoCarrinho(id)`.
				</li>
				<li>
					Teste a sua aplicação. Agora deverá ser capaz de:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>Incrementar a quantidade de um produto.</li>
						<li>Decrementar a quantidade.</li>
						<li>
							Ver que o produto é removido se a sua quantidade chegar a 0.
						</li>
						<li>Remover um produto diretamente com o botão "X".</li>
					</ul>
				</li>
			</ol>
			<p>
				O nosso carrinho está quase pronto! Na última lição, adicionaremos a
				persistência de dados e a funcionalidade de esvaziar o carrinho.
			</p>
		</section>
	</div>
);

export default Lecture49Pt;
