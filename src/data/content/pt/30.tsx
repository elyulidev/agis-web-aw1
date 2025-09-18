import CodeBlock from "@/components/ui/code-block";

const Lecture30Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. O DOM como um Jardim Vivo
			</h3>
			<p className='mb-4'>
				Aprendemos a encontrar plantas (selecionar elementos), ler as suas
				etiquetas (obter atributos) e mudar a cor das suas flores (modificar
				estilos e classes). Hoje, vamos tornar-nos verdadeiros jardineiros do
				DOM: aprenderemos a plantar novas flores (criar elementos), a movê-las
				de lugar e a arrancá-las (eliminá-las).
			</p>
			<p>
				Dominar a criação e eliminação de nós é a chave para construir
				aplicações web verdadeiramente dinâmicas, como listas de tarefas, feeds
				de redes sociais ou carrinhos de compras.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Criando Novos Elementos: `createElement`
			</h3>
			<p className='mb-4'>
				O primeiro passo é criar um novo elemento de raiz. Isto é feito com o
				método <code>document.createElement('nomeDaTag')</code>.
			</p>
			<p className='mb-4'>
				Este método cria um elemento HTML na memória do JavaScript, mas{" "}
				<strong>ainda não é visível na página</strong>. É como construir um
				móvel na sua oficina; ele existe, mas ainda não o colocou em nenhuma
				divisão da casa.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Criamos um novo elemento <li>
const novoItemLista = document.createElement('li');

// Agora podemos manipulá-lo como qualquer outro elemento
novoItemLista.textContent = "Novo item a partir do JS";
novoItemLista.classList.add('item-especial');

console.log(novoItemLista); // Mostra o elemento <li> na consola
// Mas ainda não se vê na página.`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Adicionando Elementos ao DOM
			</h3>
			<p className='mb-4'>
				Assim que o nosso elemento está criado e configurado, precisamos de o
				inserir no DOM para que seja visível. Para isso, primeiro selecionamos
				um elemento "pai" que já exista na página.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Métodos Modernos (Recomendados)
			</h4>
			<p className='mb-4'>Estes métodos são mais intuitivos e flexíveis.</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`pai.append(filho)`</strong>: Adiciona o novo elemento ao{" "}
					<strong>final</strong> da lista de filhos do elemento pai.
				</li>
				<li>
					<strong>`pai.prepend(filho)`</strong>: Adiciona o novo elemento ao{" "}
					<strong>início</strong> da lista de filhos do elemento pai.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML -->
<ul id="minha-lista">
  <li>Primeiro item</li>
</ul>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const lista = document.querySelector('#minha-lista');

// Criamos um novo <li>
const itemFinal = document.createElement('li');
itemFinal.textContent = "Último item (adicionado com append)";
lista.append(itemFinal);

// Criamos outro <li>
const itemInicio = document.createElement('li');
itemInicio.textContent = "Primeiro item (adicionado com prepend)";
lista.prepend(itemInicio);`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Método Clássico: `appendChild`
			</h4>
			<p className='mb-4'>
				Antes do <code>append</code> e <code>prepend</code>, a forma padrão era{" "}
				<code>pai.appendChild(filho)</code>. Funciona de forma semelhante ao{" "}
				<code>append</code>, adicionando o elemento ao final. Ainda o verá em
				muito código antigo.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Removendo Elementos do DOM
			</h3>
			<p className='mb-4'>Remover elementos é igualmente importante.</p>
			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Método Moderno (Recomendado): `remove`
			</h4>
			<p className='mb-4'>
				A forma mais fácil e direta. Simplesmente chama o método{" "}
				<code>.remove()</code> no elemento que quer remover.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Supondo que queremos remover o elemento com id="item-a-remover"
const itemParaRemover = document.querySelector('#item-a-remover');

// Se o elemento existir, removemo-lo
if (itemParaRemover) {
  itemParaRemover.remove();
}`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Método Clássico: `removeChild`
			</h4>
			<p className='mb-4'>
				O método mais antigo exigia obter o pai do elemento para poder remover o
				filho: <code>pai.removeChild(filho)</code>. É mais verboso, mas
				funcional.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Forma antiga
const itemParaRemover = document.querySelector('#item-a-remover');
if (itemParaRemover) {
  const pai = itemParaRemover.parentElement;
  pai.removeChild(itemParaRemover);
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Lista de Tarefas Interativa
			</h3>
			<p className='mb-4'>
				Este é o projeto que une tudo o que aprendemos no Módulo 7. Criaremos
				uma aplicação simples de lista de tarefas que nos permitirá adicionar
				novos itens a uma lista.
			</p>
			<p>1. Crie um ficheiro HTML com a seguinte estrutura:</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="pt">
<head>
  <title>Lista de Tarefas</title>
</head>
<body>
  <h1>A Minha Lista de Tarefas</h1>

  <div>
    <input type="text" id="nova-tarefa-input" placeholder="Adicionar uma nova tarefa">
    <button id="adicionar-btn">Adicionar</button>
  </div>

  <ul id="lista-tarefas">
    <!-- As tarefas serão adicionadas aqui -->
  </ul>

  <script src="main.js"></script>
</body>
</html>`}
			/>
			<p className='mt-4'>
				2. No seu ficheiro <code>main.js</code>, siga estes passos:
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Selecionar Elementos:</strong> Selecione o input (
					<code>#nova-tarefa-input</code>), o botão (<code>#adicionar-btn</code>
					) e a lista (<code>#lista-tarefas</code>). Guarde-os em variáveis.
				</li>
				<li>
					<strong>Ouvir o Clique:</strong> Adicione um ouvinte de eventos de
					clique ao botão. A lógica para adicionar a tarefa irá dentro desta
					função.
				</li>
				<li>
					<strong>Dentro da função do clique:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Obtenha o valor atual do input e guarde-o numa variável. Por
							exemplo: <code>const textoTarefa = input.value;</code>
						</li>
						<li>
							<strong>Validação:</strong> Verifique se o{" "}
							<code>textoTarefa</code> não está vazio. Se estiver, não faça nada
							(pode usar <code>return;</code> para sair da função).
						</li>
						<li>
							<strong>Criar o `li`:</strong> Use{" "}
							<code>document.createElement('li')</code> para criar um novo
							elemento de lista.
						</li>
						<li>
							<strong>Adicionar Conteúdo:</strong> Defina o{" "}
							<code>textContent</code> do novo `li` com o{" "}
							<code>textoTarefa</code>.
						</li>
						<li>
							<strong>Adicionar à Lista:</strong> Use <code>.append()</code> na
							sua variável da lista para adicionar o novo `li` ao DOM.
						</li>
						<li>
							<strong>Limpar o Input:</strong> Depois de adicionar a tarefa,
							limpe o campo de texto definindo o seu valor para uma string
							vazia: <code>input.value = '';</code>
						</li>
					</ul>
				</li>
				<li>
					<strong>Desafio (Opcional):</strong> Dentro da função do clique,
					depois de criar o <code>li</code>, crie também um botão "Remover" (
					<code>createElement('button')</code>). Adicione este botão dentro do{" "}
					<code>li</code>. Depois, adicione um evento de clique a este novo
					botão que, quando ativado, remova o <code>li</code> completo (
					<code>novoLi.remove()</code>).
				</li>
			</ol>
			<p>
				Parabéns! Ao completar esta tarefa, terá construído a sua primeira mini
				aplicação web interativa usando manipulação do DOM.
			</p>
		</section>
	</div>
);

export default Lecture30Pt;
