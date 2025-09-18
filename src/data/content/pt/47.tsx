import CodeBlock from "@/components/ui/code-block";

const Lecture47Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. O Nosso Próximo Desafio: O Carrinho de Compras
			</h3>
			<p className='mb-4'>
				Bem-vindo ao Módulo 12! Com a experiência do nosso projeto de lista de
				tarefas, estamos prontos para um desafio maior que é fundamental no
				mundo do e-commerce: construir um{" "}
				<strong>Carrinho de Compras Básico</strong>.
			</p>
			<p>
				Este projeto solidificará a nossa compreensão da gestão de estado,
				manipulação do DOM, delegação de eventos e persistência de dados. No
				final, terá uma aplicação funcional que simula a experiência de compra
				numa loja online.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Planeamento e Requisitos
			</h3>
			<p className='mb-4'>
				Um bom planeamento é a chave. Vamos definir as funcionalidades da nossa
				aplicação:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Mostrar Produtos:</strong> A loja deve exibir uma lista de
					produtos disponíveis para compra.
				</li>
				<li>
					<strong>Adicionar ao Carrinho:</strong> Cada produto deve ter um botão
					para o adicionar ao carrinho.
				</li>
				<li>
					<strong>Visualizar o Carrinho:</strong> O utilizador deve poder ver os
					produtos que adicionou, a sua quantidade e o preço.
				</li>
				<li>
					<strong>Atualizar Quantidades:</strong> Permitir ao utilizador
					aumentar ou diminuir a quantidade de um produto no carrinho.
				</li>
				<li>
					<strong>Remover Produtos:</strong> Permitir ao utilizador remover um
					produto do carrinho.
				</li>
				<li>
					<strong>Calcular Total:</strong> O carrinho deve exibir sempre o custo
					total da compra.
				</li>
				<li>
					<strong>Persistência:</strong> O conteúdo do carrinho deve permanecer
					mesmo que a página seja recarregada.
				</li>
				<li>
					<strong>Esvaziar Carrinho:</strong> Um botão para esvaziar todo o
					carrinho, simulando uma compra finalizada.
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Estrutura de Dados: As Nossas "Fontes da Verdade"
			</h3>
			<p className='mb-4'>
				Precisaremos de dois arrays principais para gerir o estado:
			</p>
			<ol className='list-decimal list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`produtos`:</strong> Um array de objetos que representa o
					catálogo da loja. Iremos defini-lo diretamente no nosso script. Cada
					objeto terá `id`, `nome` e `preco`.
					<CodeBlock
						language='javascript'
						codeString={`const produtos = [
  { id: 1, nome: 'Portátil Gamer', preco: 1200 },
  { id: 2, nome: 'Rato Óptico', preco: 25 },
  { id: 3, nome: 'Teclado Mecânico', preco: 80 },
  { id: 4, nome: 'Monitor 27"', preco: 350 }
];`}
					/>
				</li>
				<li>
					<strong>`carrinho`:</strong> Um array (inicialmente vazio) que
					guardará os produtos que o utilizador adicionar. Cada objeto neste
					array será uma cópia do produto, mas com uma propriedade adicional:
					`quantidade`.
					<CodeBlock
						language='javascript'
						codeString={`// Exemplo de como o carrinho se pareceria com um produto
let carrinho = [
  { id: 2, nome: 'Rato Óptico', preco: 25, quantidade: 2 }
];`}
					/>
				</li>
			</ol>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Estrutura HTML e CSS Inicial
			</h3>
			<p className='mb-4'>
				Vamos preparar o esqueleto da nossa loja. Precisaremos de um contentor
				para os produtos e outro para o carrinho.
			</p>
			<p className='font-semibold mb-2'>Código HTML Inicial (`index.html`):</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Carrinho de Compras</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Loja de Tecnologia</h1>
        </header>
        <main>
            <div id="produtos-container">
                <!-- Os produtos serão renderizados aqui -->
            </div>
        </main>
        <aside id="carrinho-container">
            <h2>O Meu Carrinho</h2>
            <div id="carrinho-items">
                <!-- Os itens do carrinho serão renderizados aqui -->
            </div>
            <p>Total: €<span id="carrinho-total">0.00</span></p>
            <button id="btn-esvaziar-carrinho">Esvaziar Carrinho</button>
        </aside>
    </div>
    <script src="script.js"></script>
</body>
</html>`}
			/>
			<p className='mt-4 font-semibold mb-2'>
				Código CSS Inicial (`styles.css`):
			</p>
			<CodeBlock
				language='css'
				codeString={`/* Estilos gerais */
body { font-family: sans-serif; background-color: #f0f2f5; margin: 0; padding: 2rem; }
.container { display: flex; gap: 2rem; max-width: 1200px; margin: auto; }
main { flex: 3; }
aside { flex: 1; background-color: #fff; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }

/* Produtos */
#produtos-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1.5rem; }
.produto-card { border: 1px solid #ddd; border-radius: 8px; padding: 1rem; background-color: #fff; text-align: center; }
.produto-card h3 { margin-top: 0; }
.produto-card button { background-color: #28a745; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; }

/* Carrinho */
#carrinho-items { margin-bottom: 1rem; }
.carrinho-item { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; padding: 0.5rem 0; }
#btn-esvaziar-carrinho { width: 100%; background-color: #dc3545; color: white; border: none; padding: 0.6rem; border-radius: 4px; cursor: pointer; }
`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>📝 Tarefa: Montar a Loja</h3>
			<p className='mb-4'>
				A sua primeira tarefa é preparar o ambiente e exibir os produtos
				iniciais.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Crie uma nova pasta para o projeto (ex. <code>loja-js</code>) com os
					ficheiros <code>index.html</code>, <code>styles.css</code>, e{" "}
					<code>script.js</code>.
				</li>
				<li>
					Copie o HTML e o CSS fornecidos para os seus ficheiros
					correspondentes.
				</li>
				<li>
					Em <code>script.js</code>:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>Defina o array `produtos` com os dados de exemplo.</li>
						<li>Defina um array `carrinho` vazio.</li>
						<li>
							Selecione o contentor de produtos (
							<code>#produtos-container</code>).
						</li>
						<li>
							Crie uma função chamada <code>renderizarProdutos()</code>.
						</li>
						<li>
							Dentro desta função, use um ciclo (como <code>.forEach</code>)
							para percorrer o array `produtos`. Para cada produto, crie o HTML
							para um cartão de produto (um `div` com um `h3`, `p` para o preço
							e um `button`) e adicione-o ao `produtos-container`.{" "}
							<strong>Importante:</strong> Adicione um atributo `data-id` ao
							botão com o `id` do produto.
						</li>
						<li>
							Chame <code>renderizarProdutos()</code> no final do script para
							que os produtos apareçam ao carregar a página.
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture47Pt;
