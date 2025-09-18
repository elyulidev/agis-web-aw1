import CodeBlock from "@/components/ui/code-block";

const Lecture32Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Ouvindo o Utilizador: A Essência da Interatividade
			</h3>
			<p className='mb-4'>
				Chegamos ao cerne da criação de páginas web dinâmicas. A interatividade
				baseia-se num conceito simples:{" "}
				<strong>esperar que algo aconteça e depois reagir</strong>. Esses "algos
				que acontecem" chamam-se <strong>eventos</strong>.
			</p>
			<p className='mb-4'>
				Um evento pode ser qualquer coisa: um clique do utilizador num botão, o
				pressionar de uma tecla, o movimento do rato, ou até mesmo o fim do
				carregamento da página. O JavaScript permite-nos "ouvir" estes eventos e
				executar uma função (um callback) quando eles ocorrem.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. `addEventListener`: O Ouvido do JavaScript
			</h3>
			<p className='mb-4'>
				A forma moderna e padrão de lidar com eventos é com o método{" "}
				<code>.addEventListener()</code>. É um método que podemos chamar em
				qualquer elemento do DOM. A sua sintaxe básica é:
			</p>
			<CodeBlock
				language='javascript'
				codeString={`elemento.addEventListener('tipoDeEvento', funcaoCallback);`}
			/>
			<p className='mt-4'>Analisemos as suas partes:</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`elemento`</strong>: O nó do DOM que selecionamos previamente,
					no qual queremos ouvir o evento.
				</li>
				<li>
					<strong>`'tipoDeEvento'`</strong>: Uma string que especifica o evento
					que queremos ouvir. Os mais comuns são <code>'click'</code>,{" "}
					<code>'mouseover'</code>, <code>'keydown'</code>, etc.
				</li>
				<li>
					<strong>`funcaoCallback`</strong>: A função que será executada{" "}
					<strong>automaticamente</strong> quando o evento ocorrer no elemento.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML -->
<button id="meuBotao">Clica Aqui</button>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`// JS
const botao = document.querySelector('#meuBotao');

function aoClicar() {
  console.log("O botão foi pressionado!");
  alert("Clicaste!");
}

// Dizemos ao botão para "ouvir" o evento 'click'
// e para executar a função 'aoClicar' quando acontecer.
botao.addEventListener('click', aoClicar);`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. O Objeto `event`: Informação sobre o Ocorrido
			</h3>
			<p className='mb-4'>
				Quando um evento ocorre e a nossa função callback é chamada, o
				JavaScript passa-nos automaticamente um argumento muito especial: o
				objeto <strong>`event`</strong>. Este objeto contém uma grande
				quantidade de informação sobre o evento que acabou de ocorrer.
			</p>
			<p className='mb-4'>
				Para aceder a ele, simplesmente o definimos como o primeiro parâmetro da
				nossa função callback.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`botao.addEventListener('click', function(event) {
  // 'event' contém toda a informação sobre o clique
  console.log(event);
});`}
			/>
			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Propriedades Úteis do Objeto `event`
			</h4>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`event.target`</strong>: A mais importante! É o elemento
					específico que originou o evento. Por exemplo, se tiver um ouvinte num{" "}
					<code>div</code> com três botões lá dentro, <code>event.target</code>{" "}
					dir-lhe-á em qual dos três botões se clicou.
				</li>
				<li>
					<strong>`event.currentTarget`</strong>: É o elemento ao qual o
					`addEventListener` está anexado.
				</li>
				<li>
					<strong>`event.type`</strong>: O tipo de evento que ocorreu (ex.
					"click").
				</li>
				<li>
					Para eventos de teclado: <code>event.key</code>,{" "}
					<code>event.code</code>.
				</li>
				<li>
					Para eventos de rato: <code>event.clientX</code>,{" "}
					<code>event.clientY</code> (coordenadas).
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Controlando o Comportamento: `event.preventDefault()`
			</h3>
			<p className='mb-4'>
				Alguns elementos HTML têm um comportamento padrão quando interagimos com
				eles. Por exemplo:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4'>
				<li>
					Clicar num link (<code>&lt;a&gt;</code>) leva-o para uma nova página.
				</li>
				<li>
					Submeter um formulário (<code>&lt;form&gt;</code>) recarrega a página.
				</li>
			</ul>
			<p className='mt-4 mb-4'>
				Muitas vezes, queremos intercetar estes eventos com JavaScript e
				prevenir esse comportamento padrão para o gerirmos nós mesmos (por
				exemplo, validar um formulário antes de o submeter). Para isso, usamos o
				método <strong>`event.preventDefault()`</strong>.
			</p>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML -->
<form id="meuFormulario">
  <input type="text" placeholder="Escreve algo...">
  <button type="submit">Enviar</button>
</form>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const formulario = document.querySelector('#meuFormulario');

formulario.addEventListener('submit', function(event) {
  // Prevenimos que a página seja recarregada
  event.preventDefault();

  console.log("Formulário enviado, mas prevenimos o recarregamento.");
  // Aqui iria a lógica para enviar os dados com JS (que veremos mais à frente)
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Saudação Personalizada
			</h3>
			<p className='mb-4'>
				Vamos criar um pequeno programa que saúda o utilizador pelo nome quando
				ele clica num botão.
			</p>
			<p>1. Crie um ficheiro HTML com a seguinte estrutura:</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="pt">
<head>
    <title>Saudação</title>
</head>
<body>
    <input type="text" id="nome-input" placeholder="Escreve o teu nome">
    <button id="saudar-btn">Saudar</button>
    <h1 id="mensagem-saudacao"></h1>
</body>
</html>`}
			/>
			<p className='mt-4'>2. No seu ficheiro JavaScript:</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Selecione o campo de texto (<code>#nome-input</code>), o botão (
					<code>#saudar-btn</code>) e o <code>&lt;h1&gt;</code> (
					<code>#mensagem-saudacao</code>).
				</li>
				<li>
					Adicione um <code>addEventListener</code> ao botão para o evento{" "}
					<code>'click'</code>.
				</li>
				<li>
					Dentro da função callback do evento:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Obtenha o valor atual do campo de texto e guarde-o numa variável.
						</li>
						<li>
							Atualize o <code>textContent</code> do <code>&lt;h1&gt;</code>{" "}
							para que mostre uma saudação personalizada, por exemplo: "Olá,
							[nome]!".
						</li>
					</ul>
				</li>
				<li>
					<strong>Desafio (Opcional):</strong> Adicione uma pequena validação.
					Se o campo de texto estiver vazio quando o utilizador clicar no botão,
					a mensagem no <code>&lt;h1&gt;</code> deve dizer "Por favor, introduz
					o teu nome".
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture32Pt;
