import CodeBlock from "@/components/ui/code-block";

const Lecture34Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. O Problema dos Múltiplos Listeners
			</h3>
			<p className='mb-4'>
				Imagine uma lista com 100 itens. Se quisermos que cada item reaja a um
				clique, a abordagem ingénua seria adicionar um{" "}
				<code>addEventListener</code> a cada um dos 100 <code>&lt;li&gt;</code>.
			</p>
			<p className='mb-4'>Isto apresenta dois grandes problemas:</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Desempenho:</strong> Adicionar centenas ou milhares de
					ouvintes de eventos pode consumir memória e fazer com que a página
					pareça mais lenta.
				</li>
				<li>
					<strong>Elementos Dinâmicos:</strong> Se adicionarmos um novo item à
					lista com JavaScript, esse novo item não terá o ouvinte de eventos!
					Teríamos de nos lembrar de o adicionar manualmente de cada vez.
				</li>
			</ul>
			<p>
				Felizmente, existe um padrão de design muito mais elegante e eficiente
				para resolver isto: a <strong>delegação de eventos</strong>.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. O Mecanismo: Borbulhamento de Eventos (Event Bubbling)
			</h3>
			<p className='mb-4'>
				Para entender a delegação, primeiro devemos entender como os eventos
				viajam pelo DOM. Quando um evento ocorre num elemento (por exemplo, um
				clique num <code>&lt;button&gt;</code>), o evento não para aí. Depois de
				ser executado no botão, ele "borbulha" para cima: é disparado no pai do
				botão, depois no avô, e assim sucessivamente, até chegar ao{" "}
				<code>&lt;html&gt;</code> e, finalmente, ao objeto <code>document</code>
				.
			</p>
			<div className='my-6 p-4 border rounded-lg bg-gray-50 dark:bg-gray-800/50 text-center'>
				<h4 className='font-semibold mb-2'>Fluxo do Borbulhamento</h4>
				<pre className='font-mono text-sm leading-relaxed text-left p-4 bg-white dark:bg-gray-900 rounded-md'>
					{`
   document
      ↑
     html
      ↑
     body
      ↑
      ul  <-- O evento chega aqui
      ↑
     li   <-- O evento chega aqui
      ↑
   button <-- Clique aqui (event.target)
`}
				</pre>
			</div>
			<p>
				Podemos aproveitar este comportamento. Em vez de ouvir no alvo original,
				podemos ouvir num ancestral comum.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. A Solução: Delegação de Eventos
			</h3>
			<p className='mb-4'>
				O padrão de delegação de eventos consiste no seguinte:
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Em vez de adicionar um ouvinte a cada elemento filho, adicionamos{" "}
					<strong>um único ouvinte</strong> ao seu contentor pai (por exemplo,
					ao <code>&lt;ul&gt;</code> em vez de a cada <code>&lt;li&gt;</code>).
				</li>
				<li>
					Dentro da função callback, usamos a propriedade{" "}
					<strong>`event.target`</strong> para identificar exatamente que
					elemento filho originou o evento.
				</li>
				<li>
					Verificamos se <code>event.target</code> é o tipo de elemento que nos
					interessa.
				</li>
			</ol>
			<p className='mb-4'>Vejamos como se aplica à nossa lista de itens.</p>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML -->
<ul id="lista-pai">
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</ul>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const listaPai = document.querySelector('#lista-pai');

listaPai.addEventListener('click', function(event) {
  // 'this' e 'event.currentTarget' referem-se a #lista-pai
  // 'event.target' refere-se ao <li> específico onde se clicou

  // Verificamos se o elemento clicado tem a classe 'item'
  if (event.target && event.target.matches('.item')) {
    console.log("Clicou-se no item:", event.target.textContent);
  }
});`}
			/>
			<p className='mt-4'>
				O método <code>.matches('seletorCSS')</code> é perfeito para isto.
				Devolve <code>true</code> se o elemento corresponder ao seletor, e{" "}
				<code>false</code> se não corresponder.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Benefícios da Delegação de Eventos
			</h3>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Eficiência:</strong> Usamos um único ouvinte de eventos em vez
					de potencialmente centenas. Isto poupa memória e melhora o desempenho.
				</li>
				<li>
					<strong>Gestão de Elementos Dinâmicos:</strong> Se mais tarde
					adicionarmos um novo <code>&lt;li&gt;</code> à lista, o código
					continuará a funcionar para ele sem necessidade de fazer mais nada,
					porque o ouvinte está no pai, que sempre esteve lá.
				</li>
				<li>
					<strong>Simplicidade:</strong> O código é muitas vezes mais limpo e
					fácil de manter, pois não temos de nos preocupar em adicionar e
					remover ouvintes à medida que os elementos mudam.
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Lista de Tarefas com Remoção Delegada
			</h3>
			<p className='mb-4'>
				Vamos melhorar a lista de tarefas que fizemos na lição 30. A
				funcionalidade de adicionar tarefas continua igual, mas agora
				implementaremos a remoção de itens usando o padrão de delegação de
				eventos.
			</p>
			<p>1. Comece com o HTML da lição 30.</p>
			<p>
				2. Modifique o JavaScript que adiciona tarefas. Quando criar um novo{" "}
				<code>&lt;li&gt;</code>, crie também um botão "Remover" e adicione-o
				dentro do <code>&lt;li&gt;</code>.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Dentro da função para adicionar tarefa...
const novoLi = document.createElement('li');
novoLi.textContent = textoTarefa + ' '; // Adicionamos um espaço

const botaoRemover = document.createElement('button');
botaoRemover.textContent = 'Remover';
botaoRemover.classList.add('btn-remover'); // Muito importante para a delegação

novoLi.append(botaoRemover);
lista.append(novoLi);`}
			/>
			<p className='mt-4'>
				3. Agora, a parte crucial. Adicione <strong>um único</strong> ouvinte de
				eventos de clique à lista <code>&lt;ul&gt;</code> (
				<code>#lista-tarefas</code>).
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Dentro da função callback, verifique se o elemento clicado (
					<code>event.target</code>) tem a classe <code>.btn-remover</code>.
				</li>
				<li>Se tiver, significa que se clicou num botão de remover.</li>
				<li>
					O objetivo é remover o <code>&lt;li&gt;</code> pai desse botão. Use{" "}
					<code>event.target.parentElement</code> para obter o{" "}
					<code>&lt;li&gt;</code> e depois chame o método <code>.remove()</code>{" "}
					nele.
				</li>
			</ol>
			<p>
				Teste a sua aplicação: adicione várias tarefas e depois remova-as
				clicando nos respetivos botões. Verá que funciona perfeitamente, mesmo
				para as novas tarefas, graças a ter um único ouvinte inteligente no
				contentor pai.
			</p>
		</section>
	</div>
);

export default Lecture34Pt;
