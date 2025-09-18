import CodeBlock from "@/components/ui/code-block";

const Lecture36Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. A Primeira Linha de Defesa: Validação no Cliente
			</h3>
			<p className='mb-4'>
				A validação de formulários consiste em garantir que os dados
				introduzidos pelo utilizador estão corretos e completos antes de os
				processar. A validação do lado do cliente (no navegador) é a nossa
				primeira linha de defesa. Fornece feedback instantâneo ao utilizador,
				melhorando enormemente a experiência e evitando envios desnecessários
				para o servidor.
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					Importante!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					A validação no cliente é uma ajuda para a UX,{" "}
					<strong>não uma medida de segurança</strong>. Um utilizador
					mal-intencionado pode sempre contorná-la. A validação{" "}
					<strong>sempre</strong> deve ser repetida no lado do servidor.
				</p>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Validação com Atributos de HTML5
			</h3>
			<p className='mb-4'>
				O HTML5 fornece-nos uma série de atributos que podemos adicionar aos
				nossos campos de formulário para que o navegador realize validações
				básicas automaticamente, sem necessidade de JavaScript.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`required`</strong>: O campo не pode estar vazio.
				</li>
				<li>
					<strong>`minlength` / `maxlength`</strong>: Especifica o comprimento
					mínimo e máximo para campos de texto.
				</li>
				<li>
					<strong>`min` / `max`</strong>: Define o valor mínimo e máximo para
					campos numéricos.
				</li>
				<li>
					<strong>`type`</strong>: Atributos como <code>email</code> ou{" "}
					<code>url</code> fazem com que o navegador verifique se o formato está
					correto.
				</li>
				<li>
					<strong>`pattern`</strong>: O mais poderoso. Permite definir uma
					expressão regular que o valor deve cumprir.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<form>
  <label for="username">Nome de utilizador (mín. 5 caracteres):</label>
  <input type="text" id="username" name="username" required minlength="5">

  <label for="email">Correio eletrónico:</label>
  <input type="email" id="email" name="email" required>

  <label for="zip">Código Postal (4 dígitos):</label>
  <input type="text" id="zip" name="zip" required pattern="[0-9]{4}">

  <button type="submit">Enviar</button>
</form>`}
			/>
			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Feedback Visual com Pseudo-classes CSS
			</h4>
			<p className='mb-4'>
				Podemos usar as pseudo-classes <code>:valid</code> e{" "}
				<code>:invalid</code> no nosso CSS para dar feedback visual imediato ao
				utilizador.
			</p>
			<CodeBlock
				language='css'
				codeString={`input:invalid {
  border-color: red;
}

input:valid {
  border-color: green;
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Validação com JavaScript: Lógica Personalizada
			</h3>
			<p className='mb-4'>
				Para regras mais complexas (como "a palavra-passe deve conter um número"
				ou "as duas palavras-passe devem coincidir"), precisamos de JavaScript.
				A estratégia é a mesma: intercetamos o evento <code>submit</code> e,
				antes de fazer qualquer coisa com os dados, verificamos se cumprem as
				nossas regras.
			</p>
			<CodeBlock
				language='html'
				codeString={`<form id="registo">
  <label for="pass1">Palavra-passe:</label>
  <input type="password" id="pass1" name="pass1" required>

  <label for="pass2">Confirmar Palavra-passe:</label>
  <input type="password" id="pass2" name="pass2" required>

  <p id="error-msg" style="color: red;"></p>
  <button type="submit">Registar</button>
</form>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const form = document.querySelector('#registo');
const pass1 = document.querySelector('#pass1');
const pass2 = document.querySelector('#pass2');
const errorMsg = document.querySelector('#error-msg');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Limpamos a mensagem de erro anterior
  errorMsg.textContent = '';

  // A nossa regra de validação personalizada
  if (pass1.value !== pass2.value) {
    errorMsg.textContent = "As palavras-passe não coincidem.";
    return; // Paramos a execução
  }

  if (pass1.value.length < 8) {
    errorMsg.textContent = "A palavra-passe deve ter pelo menos 8 caracteres.";
    return;
  }

  // Se tudo estiver correto...
  alert("Registo bem-sucedido!");
  // Aqui enviaríamos os dados.
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Melhorando o Formulário de Registo
			</h3>
			<p className='mb-4'>
				Vamos pegar no formulário de registo da lição anterior e adicionar-lhe
				várias camadas de validação.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Validação HTML5:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Torne os campos de nome, email e palavra-passe obrigatórios (
							<code>required</code>).
						</li>
						<li>
							Adicione um comprimento mínimo (<code>minlength</code>) de 8
							caracteres ao campo da palavra-passe.
						</li>
					</ul>
				</li>
				<li>
					<strong>Feedback CSS:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>Crie um ficheiro CSS e ligue-o ao seu HTML.</li>
						<li>
							Adicione regras para <code>input:invalid</code> para que tenham
							uma borda vermelha e para <code>input:valid</code> para que tenham
							uma borda verde. Isto dará feedback instantâneo.
						</li>
					</ul>
				</li>
				<li>
					<strong>Validação com JavaScript:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Adicione um segundo campo de palavra-passe para "Confirmar
							Palavra-passe".
						</li>
						<li>
							No seu script, dentro do ouvinte do evento <code>submit</code>,
							implemente a lógica para verificar se as duas palavras-passe
							coincidem.
						</li>
						<li>
							Se não coincidirem, mostre uma mensagem de erro num parágrafo
							abaixo dos campos e не envie o formulário.
						</li>
						<li>
							Se todas as validações passarem, mostre um <code>alert</code> de
							"Formulário enviado com sucesso!".
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture36Pt;
