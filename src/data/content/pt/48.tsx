import CodeBlock from "@/components/ui/code-block";

const Lecture48Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Ativando a Loja: Adicionar ao Carrinho
			</h3>
			<p className='mb-4'>
				Com a nossa loja montada, é hora de implementar a funcionalidade
				principal: permitir que os utilizadores adicionem produtos ao carrinho.
				Usaremos a delegação de eventos no contentor de produtos para gerir os
				cliques de forma eficiente.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Em script.js, depois de selecionar os elementos
const produtosContainer = document.querySelector('#produtos-container');

produtosContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const idProduto = event.target.getAttribute('data-id');
    adicionarAoCarrinho(idProduto);
  }
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Lógica de `adicionarAoCarrinho()`
			</h3>
			<p className='mb-4'>
				Esta função será o cérebro da operação. Receberá o ID de um produto e
				decidirá se deve adicionar um novo item ao carrinho ou simplesmente
				incrementar a quantidade de um existente.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Convertemos o ID (que vem como string do atributo `data-id`) para um
					número.
				</li>
				<li>
					Usamos o método de array `.find()` para procurar se já existe um item
					com esse ID no nosso array `carrinho`.
				</li>
				<li>
					<strong>Se existir:</strong> Simplesmente incrementamos a sua
					propriedade `quantidade`.
				</li>
				<li>
					<strong>Se não existir:</strong> Procuramos o produto completo no
					nosso array `produtos` e criamos um novo objeto para o carrinho,
					combinando os dados do produto e adicionando `quantidade: 1`. Depois,
					adicionamo-lo ao array `carrinho` com `.push()`.
				</li>
				<li>
					Finalmente, chamamos uma nova função,{" "}
					<code>renderizarCarrinho()</code>, para que a interface se atualize.
				</li>
			</ol>
			<CodeBlock
				language='javascript'
				codeString={`function adicionarAoCarrinho(id) {
  const idNum = parseInt(id);

  // Verificar se o produto já está no carrinho
  const itemExistente = carrinho.find(item => item.id === idNum);

  if (itemExistente) {
    // Se existir, incrementar a quantidade
    itemExistente.quantidade++;
  } else {
    // Se не existir, encontrar o produto e adicioná-lo ao carrinho
    const produtoAdicionar = produtos.find(produto => produto.id === idNum);
    if (produtoAdicionar) {
      carrinho.push({
        id: produtoAdicionar.id,
        nome: produtoAdicionar.nome,
        preco: produtoAdicionar.preco,
        quantidade: 1
      });
    }
  }

  renderizarCarrinho();
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Visualizando o Carrinho: `renderizarCarrinho()`
			</h3>
			<p className='mb-4'>
				Esta função é a contraparte de `renderizarProdutos`. O seu trabalho é
				pegar no estado atual do array `carrinho` e desenhá-lo no DOM.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>Limpamos o conteúdo anterior do contentor do carrinho.</li>
				<li>
					Percorremos o array `carrinho`. Para cada item, criamos o HTML
					correspondente (nome, quantidade, preço).
				</li>
				<li>
					Enquanto percorremos, calculamos o preço total somando o `preco *
					quantidade` de cada item.
				</li>
				<li>
					Finalmente, atualizamos o `textContent` do span do total com o valor
					calculado, formatado para duas casas decimais.
				</li>
			</ol>
			<CodeBlock
				language='javascript'
				codeString={`const carrinhoItemsContainer = document.querySelector('#carrinho-items');
const carrinhoTotalSpan = document.querySelector('#carrinho-total');

function renderizarCarrinho() {
  carrinhoItemsContainer.innerHTML = '';
  let total = 0;

  carrinho.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('carrinho-item');
    itemDiv.innerHTML = \`
      <span>\${item.nome} (x\${item.quantidade})</span>
      <span>€\${(item.preco * item.quantidade).toFixed(2)}</span>
    \`;
    carrinhoItemsContainer.append(itemDiv);

    total += item.preco * item.quantidade;
  });

  carrinhoTotalSpan.textContent = total.toFixed(2);
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Ligando os Pontos
			</h3>
			<p className='mb-4'>
				O seu objetivo é implementar a lógica para que o carrinho de compras
				ganhe vida.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Adicione o `addEventListener` ao contentor de produtos para delegar os
					eventos de clique.
				</li>
				<li>
					Implemente a função `adicionarAoCarrinho(id)` tal como foi descrito.
				</li>
				<li>
					Selecione os elementos do DOM necessários para o carrinho (
					<code>#carrinho-items</code> e <code>#carrinho-total</code>).
				</li>
				<li>Implemente a função `renderizarCarrinho()`.</li>
				<li>
					Teste a sua aplicação. Ao clicar nos botões "Adicionar ao Carrinho",
					deverá ver os produtos a aparecer na secção do carrinho e o total a
					ser atualizado corretamente. Se adicionar o mesmo produto várias
					vezes, a sua quantidade deverá aumentar.
				</li>
			</ol>
			<p>
				Na próxima lição, tornaremos o carrinho completamente interativo,
				permitindo atualizar quantidades e remover produtos.
			</p>
		</section>
	</div>
);

export default Lecture48Pt;
