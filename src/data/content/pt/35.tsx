import CodeBlock from "@/components/ui/code-block";

const Lecture35Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>1. Da Estrutura à Ação</h3>
			<p className='mb-4'>
				Construímos formulários sólidos com HTML, mas até agora, são apenas
				estruturas passivas. Neste módulo, vamos dar-lhes vida. Aprenderemos a
				capturar a informação que o utilizador introduz, a processá-la e a
				prepará-la para ser enviada, tudo graças ao poder do JavaScript.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. O Evento `submit` e `event.preventDefault()`
			</h3>
			<p className='mb-4'>
				O ponto de partida para manipular um formulário é o evento{" "}
				<code>submit</code>. Este evento é disparado no elemento{" "}
				<code>&lt;form&gt;</code> (não no botão) quando o utilizador tenta
				enviá-lo, seja clicando num <code>&lt;input type="submit"&gt;</code> ou
				pressionando Enter num campo de texto.
			</p>
			<p className='mb-4'>
				Como devem recordar, o comportamento padrão de um formulário é
				recarregar a página. Para manipular o envio com JavaScript, o nosso
				primeiro passo é sempre prevenir este comportamento usando{" "}
				<code>event.preventDefault()</code>.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const meuFormulario = document.querySelector('#meu-formulario');

meuFormulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Passo crucial!
  console.log("Formulário intercetado. A página não será recarregada.");
  // Aqui irá a nossa lógica de captura de dados.
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Capturando Dados: O Objeto `FormData`
			</h3>
			<p className='mb-4'>
				Poderíamos selecionar cada campo do formulário individualmente e obter o
				seu valor, mas há uma forma muito mais eficiente e moderna: o objeto{" "}
				<strong>`FormData`</strong>.
			</p>
			<p className='mb-4'>
				<code>FormData</code> é uma API do navegador que nos permite construir
				facilmente um conjunto de pares chave/valor que representam os campos de
				um formulário. A "chave" é o atributo <code>name</code> de cada campo, e
				o "valor" é o que o utilizador introduziu.
			</p>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML -->
<form id="registo-form">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome_utilizador">
  <br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="correio_eletronico">
  <br>
  <button type="submit">Registar</button>
</form>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const form = document.querySelector('#registo-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // 1. Criamos uma nova instância de FormData, passando-lhe o formulário.
  const dados = new FormData(form);

  // 2. FormData não é um objeto simples, mas podemos iterar sobre ele.
  for (const [chave, valor] of dados.entries()) {
    console.log(\`\${chave}: \${valor}\`);
  }
  // Saída na consola se o utilizador escrever "Ana" e "ana@email.com":
  // nome_utilizador: Ana
  // correio_eletronico: ana@email.com
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Acesso a Campos Específicos
			</h3>
			<p className='mb-4'>
				Embora <code>FormData</code> seja ótimo para recolher tudo, por vezes
				precisamos de aceder a campos específicos para validação ou outras
				lógicas.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>Campos de texto, email, etc. (`.value`)</strong>: A
					propriedade <code>.value</code> dá-nos o conteúdo do campo.
				</li>
				<li>
					<strong>Checkboxes (`.checked`)</strong>: Para as checkboxes, não nos
					interessa o valor, mas sim se está marcada ou não. A propriedade{" "}
					<code>.checked</code> devolve <code>true</code> ou <code>false</code>.
				</li>
				<li>
					<strong>Select (`.value`)</strong>: A propriedade <code>.value</code>{" "}
					de um elemento <code>&lt;select&gt;</code> dá-nos o <code>value</code>{" "}
					do <code>&lt;option&gt;</code> selecionado.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`const inputNome = document.querySelector('#nome');
console.log(inputNome.value); // Mostra o que estiver escrito no campo

const checkboxTermos = document.querySelector('#termos');
if (checkboxTermos.checked) {
  console.log("O utilizador aceitou os termos.");
} else {
  console.log("O utilizador NÃO aceitou os termos.");
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Formulário de Registo Básico
			</h3>
			<p className='mb-4'>
				Vamos construir um formulário de registo e capturar todos os seus dados
				usando <code>FormData</code>.
			</p>
			<p>
				1. Crie um ficheiro HTML com um formulário que inclua os seguintes
				campos.{" "}
				<strong>
					Não se esqueça do `label` para cada campo e dos atributos `id` e
					`name`.
				</strong>
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					Nome Completo (<code>type="text"</code>,{" "}
					<code>name="nomeCompleto"</code>)
				</li>
				<li>
					Correio Eletrónico (<code>type="email"</code>,{" "}
					<code>name="email"</code>)
				</li>
				<li>
					Palavra-passe (<code>type="password"</code>,{" "}
					<code>name="password"</code>)
				</li>
				<li>
					País (um <code>&lt;select&gt;</code> com pelo menos 3 opções,{" "}
					<code>name="pais"</code>)
				</li>
				<li>
					Caixa para "Aceito os termos e condições" (
					<code>type="checkbox"</code>, <code>name="aceitaTermos"</code>)
				</li>
				<li>Um botão de submissão.</li>
			</ul>
			<p>2. No seu script de JavaScript:</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>Selecione o formulário.</li>
				<li>
					Adicione um ouvinte para o evento <code>submit</code>.
				</li>
				<li>Dentro do ouvinte, previna o comportamento padrão.</li>
				<li>
					Crie uma instância de <code>FormData</code> a partir do formulário.
				</li>
				<li>
					Use um ciclo <code>for...of</code> para percorrer os dados e
					mostrá-los na consola.
				</li>
				<li>
					<strong>Desafio (Opcional):</strong> Antes de criar o{" "}
					<code>FormData</code>, aceda diretamente à caixa de termos e
					condições. Se não estiver marcada (<code>.checked</code> é{" "}
					<code>false</code>), mostre um <code>alert</code> que diga "Deve
					aceitar os termos e condições" e pare a execução da função (com{" "}
					<code>return;</code>).
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture35Pt;
