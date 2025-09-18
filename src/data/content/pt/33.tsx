import CodeBlock from "@/components/ui/code-block";

const Lecture33Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Um Universo de Interações
			</h3>
			<p className='mb-4'>
				Já dominamos o evento <code>click</code>, mas a interação do utilizador
				vai muito para além disso. O JavaScript pode ouvir uma vasta gama de
				eventos para criar experiências ricas e responsivas. Hoje, vamos
				explorar as categorias de eventos mais comuns que usará no dia a dia.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Eventos de Rato (Mouse Events)
			</h3>
			<p className='mb-4'>
				Estes eventos são despoletados por ações realizadas com o ponteiro do
				rato.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`click`</strong>: Dispara quando se pressiona e solta o botão
					principal do rato sobre um elemento.
				</li>
				<li>
					<strong>`dblclick`</strong>: Dispara com um duplo clique.
				</li>
				<li>
					<strong>`mouseover` / `mouseout`</strong>: Disparam quando o ponteiro
					entra ou sai da área de um elemento, respetivamente. Importante: estes
					eventos "borbulham", o que significa que também disparam se entrar ou
					sair de um elemento filho.
				</li>
				<li>
					<strong>`mouseenter` / `mouseleave`</strong>: Semelhantes aos
					anteriores, mas não borbulham. São mais previsíveis e muitas vezes
					preferíveis para efeitos de hover.
				</li>
				<li>
					<strong>`mousemove`</strong>: Dispara continuamente enquanto o
					ponteiro se move sobre o elemento. Use com cuidado, pois pode disparar
					muitas vezes por segundo e afetar o desempenho!
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`const caixa = document.querySelector('#minhaCaixa');

caixa.addEventListener('mouseenter', () => {
  caixa.textContent = "Estás dentro!";
});

caixa.addEventListener('mouseleave', () => {
  caixa.textContent = "Estás fora.";
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Eventos de Teclado (Keyboard Events)
			</h3>
			<p className='mb-4'>
				Fundamentais para capturar a entrada do utilizador, criar atalhos de
				teclado ou validar formulários em tempo real.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`keydown`</strong>: Dispara quando uma tecla é pressionada.
				</li>
				<li>
					<strong>`keyup`</strong>: Dispara quando uma tecla é solta.
				</li>
				<li>
					<strong>`keypress`</strong>: (Obsoleto) Semelhante a `keydown`, mas
					apenas para teclas que produzem um carácter. É melhor usar `keydown`.
				</li>
			</ul>
			<p className='mb-4'>
				O objeto <code>event</code> nestes casos tem uma propriedade muito útil:{" "}
				<strong>`event.key`</strong>, que nos dá uma string com o valor da tecla
				pressionada (ex. "a", "Enter", "Escape").
			</p>
			<CodeBlock
				language='javascript'
				codeString={`document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    console.log("A tecla Escape foi pressionada.");
    // Aqui poderíamos fechar um modal, por exemplo.
  }
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Eventos de Formulário (Form Events)
			</h3>
			<p className='mb-4'>
				Essenciais para criar formulários interativos e com boa experiência de
				utilizador.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`submit`</strong>: Dispara no elemento{" "}
					<code>&lt;form&gt;</code> quando se tenta enviar (seja com um botão do
					tipo "submit" ou pressionando Enter). É aqui que usamos
					`event.preventDefault()` para gerir o envio com JavaScript.
				</li>
				<li>
					<strong>`input`</strong>: Dispara num <code>&lt;input&gt;</code>,{" "}
					<code>&lt;select&gt;</code>, ou <code>&lt;textarea&gt;</code>{" "}
					<strong>imediatamente</strong> cada vez que o seu valor muda. Ideal
					para feedback em tempo real.
				</li>
				<li>
					<strong>`change`</strong>: Semelhante a `input`, mas dispara quando o
					valor é "confirmado", ou seja, quando o elemento perde o foco (blur).
				</li>
				<li>
					<strong>`focus` / `blur`</strong>: Disparam quando um elemento de
					formulário ganha ou perde o foco, respetivamente.
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				5. Eventos da Janela e do Documento
			</h3>
			<p className='mb-4'>
				Estes eventos aplicam-se ao documento completo ou à janela do navegador.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`DOMContentLoaded`</strong>: O mais importante! Dispara no
					objeto <code>document</code> quando o documento HTML foi completamente
					carregado e processado, sem esperar que folhas de estilo, imagens e
					sub-frames sejam carregados.
				</li>
			</ul>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					Prática recomendada:
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Envolva todo o seu código JavaScript que manipula o DOM dentro de um
					ouvinte para `DOMContentLoaded`. Isto garante que o seu código não
					tentará selecionar um elemento que ainda não existe na página,
					evitando erros.
				</p>
			</div>
			<CodeBlock
				language='javascript'
				codeString={`document.addEventListener('DOMContentLoaded', function() {
  // Todo o seu código JS que interage com o DOM vai aqui.
  const botao = document.querySelector('#meuBotao');
  if(botao) {
    botao.addEventListener('click', () => {
      console.log('O DOM estava pronto quando este ouvinte foi adicionado.');
    });
  }
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Contador de Caracteres
			</h3>
			<p className='mb-4'>
				Vamos construir uma pequena utilidade que mostre ao utilizador quantos
				caracteres ele escreveu numa <code>&lt;textarea&gt;</code>,
				atualizando-se em tempo real.
			</p>
			<p>1. Crie um ficheiro HTML com a seguinte estrutura:</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="pt">
<head><title>Contador</title></head>
<body>
    <h2>Escreva a sua mensagem:</h2>
    <textarea id="mensagem-input" maxlength="200"></textarea>
    <p>Caracteres restantes: <span id="contador">200</span></p>
    <script src="main.js"></script>
</body>
</html>`}
			/>
			<p className='mt-4'>2. No seu ficheiro JavaScript:</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Envolva todo o seu código num ouvinte para o evento{" "}
					<code>DOMContentLoaded</code>.
				</li>
				<li>
					Dentro do ouvinte, selecione a <code>&lt;textarea&gt;</code> e o{" "}
					<code>&lt;span&gt;</code> do contador.
				</li>
				<li>
					Adicione um <code>addEventListener</code> à{" "}
					<code>&lt;textarea&gt;</code> para o evento{" "}
					<strong>
						<code>input</code>
					</strong>
					.
				</li>
				<li>
					Dentro da função callback do evento `input`:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Obtenha o comprimento do valor atual da textarea (
							<code>textarea.value.length</code>).
						</li>
						<li>
							Calcule os caracteres restantes (por exemplo, 200 - comprimento
							atual).
						</li>
						<li>
							Atualize o <code>textContent</code> do <code>&lt;span&gt;</code>{" "}
							com o número de caracteres restantes.
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture33Pt;
