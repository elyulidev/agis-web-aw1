import CodeBlock from "@/components/ui/code-block";

const Lecture31Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Navegando pela Árvore Genealógica do DOM
			</h3>
			<p className='mb-4'>
				Já sabemos como selecionar qualquer elemento do DOM. Mas, por vezes, uma
				vez que temos um elemento, precisamos de nos mover a partir dele para
				encontrar os seus "familiares": o seu pai, os seus filhos ou os seus
				irmãos. Este processo chama-se{" "}
				<strong>percurso do DOM (DOM Traversing)</strong>.
			</p>
			<p className='mb-4'>
				É uma técnica extremamente poderosa porque nos permite escrever código
				mais flexível. Em vez de dependermos de IDs e classes específicas para
				tudo, podemos encontrar elementos com base na sua relação com outros.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Movendo-se Para Cima: Pais e Ancestrais
			</h3>
			<p className='mb-4'>
				A forma mais comum de subir na árvore é para encontrar o contentor
				direto de um elemento.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`.parentElement`</strong>: Devolve o elemento pai direto de um
					nó. É a propriedade mais utilizada para subir no DOM.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML -->
<div class="container">
  <p id="paragrafo-filho">Sou um parágrafo filho.</p>
</div>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const paragrafo = document.querySelector('#paragrafo-filho');
const container = paragrafo.parentElement;

console.log(container.className); // Mostra "container"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Movendo-se Para Baixo: Filhos e Descendentes
			</h3>
			<p className='mb-4'>
				A partir de um elemento pai, podemos aceder a todos os elementos que ele
				contém.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`.children`</strong>: Devolve uma <code>HTMLCollection</code>{" "}
					(uma lista semelhante a um array) com os{" "}
					<strong>elementos filhos diretos</strong>. Ignora nós de texto,
					comentários, etc., pelo que costuma ser a mais útil.
				</li>
				<li>
					<strong>`.firstElementChild`</strong> e{" "}
					<strong>`.lastElementChild`</strong>: Atalhos convenientes para obter
					o primeiro ou o último filho, respetivamente. São equivalentes a{" "}
					<code>.children[0]</code> e{" "}
					<code>.children[children.length - 1]</code>.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML -->
<ul id="lista-principal">
  <li class="item">Maçã</li>
  <li class="item">Laranja</li>
  <li class="item">Banana</li>
</ul>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const lista = document.querySelector('#lista-principal');

// Obter todos os filhos
const items = lista.children;
console.log(items.length); // Mostra 3

// Percorrer os filhos com um laço for
for (let i = 0; i < items.length; i++) {
  items[i].textContent += " (fruta)";
}

// Obter o primeiro e o último filho
const primeiroItem = lista.firstElementChild;
const ultimoItem = lista.lastElementChild;
console.log(primeiroItem.textContent); // Mostra "Maçã (fruta)"
console.log(ultimoItem.textContent); // Mostra "Banana (fruta)"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Movendo-se Lateralmente: Irmãos
			</h3>
			<p className='mb-4'>
				Os elementos irmãos são aqueles que estão no mesmo nível hierárquico,
				dentro do mesmo pai.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`.nextElementSibling`</strong>: Devolve o próximo elemento
					irmão.
				</li>
				<li>
					<strong>`.previousElementSibling`</strong>: Devolve o elemento irmão
					anterior.
				</li>
			</ul>
			<p>
				Ambas as propriedades devolvem <code>null</code> se não houver um irmão
				nessa direção.
			</p>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML -->
<ul>
  <li>Um</li>
  <li id="elemento-central">Dois</li>
  <li>Três</li>
</ul>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const elementoCentral = document.querySelector('#elemento-central');

const irmaoSeguinte = elementoCentral.nextElementSibling;
console.log(irmaoSeguinte.textContent); // Mostra "Três"

const irmaoAnterior = elementoCentral.previousElementSibling;
console.log(irmaoAnterior.textContent); // Mostra "Um"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Desconstruindo um Cartão
			</h3>
			<p className='mb-4'>
				Vamos usar o percurso do DOM para navegar pela estrutura de um cartão de
				produto. Copie este HTML para um ficheiro e ligue-o a um novo script de
				JS.
			</p>
			<CodeBlock
				language='html'
				codeString={`<div class="cartao-produto">
  <header class="cartao-header">
    <h2>Produto Incrível</h2>
  </header>
  <div class="cartao-corpo">
    <p>Uma descrição fascinante do produto.</p>
    <button id="botao-comprar">Comprar Agora</button>
  </div>
  <footer class="cartao-footer">
    <p>Preço: 99.99€</p>
  </footer>
</div>`}
			/>
			<p className='mt-4'>No seu ficheiro JavaScript:</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Selecione o botão com o id <code>botao-comprar</code> e guarde-o numa
					variável.
				</li>
				<li>
					<strong>Suba no DOM:</strong> A partir do botão, use{" "}
					<code>.parentElement</code> para selecionar a{" "}
					<code>div.cartao-corpo</code>. Mostre o resultado na consola.
				</li>
				<li>
					<strong>Suba mais alto:</strong> A partir da{" "}
					<code>div.cartao-corpo</code> que acabou de selecionar, use novamente{" "}
					<code>.parentElement</code> para selecionar o contentor principal{" "}
					<code>div.cartao-produto</code>.
				</li>
				<li>
					<strong>Desça para o Cabeçalho:</strong> A partir do contentor
					principal (<code>div.cartao-produto</code>), use{" "}
					<code>.firstElementChild</code> para selecionar o <code>header</code>{" "}
					e mostre-o na consola.
				</li>
				<li>
					<strong>Mova-se Lateralmente:</strong> A partir da{" "}
					<code>div.cartao-corpo</code> (o pai do botão), use{" "}
					<code>.nextElementSibling</code> para selecionar o <code>footer</code>{" "}
					e mostre-o na consola.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture31Pt;
