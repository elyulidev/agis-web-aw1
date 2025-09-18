import CodeBlock from "@/components/ui/code-block";

const Lecture37Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Falando com o Mundo Exterior: O que é uma API?
			</h3>
			<p className='mb-4'>
				Os nossos formulários já capturam e validam dados, mas o que fazemos com
				eles? Geralmente, queremos enviá-los para algum lugar: uma base de
				dados, um serviço de e-mail, etc. É aqui que entram as{" "}
				<strong>APIs (Interfaces de Programação de Aplicações)</strong>.
			</p>
			<p className='mb-4'>
				<strong>Analogia:</strong> Pense numa API como o empregado de mesa de um
				restaurante. Você (o cliente, ou "frontend") não vai diretamente à
				cozinha (o servidor ou "backend"). Dá o seu pedido (um "pedido" ou
				"request") ao empregado (a API). O empregado leva o pedido à cozinha,
				espera que esteja pronto e traz-lhe a comida (a "resposta" ou
				"response").
			</p>
			<p>
				Uma API web é um conjunto de regras e URLs que um servidor expõe para
				que o nosso JavaScript possa interagir com ele, enviando e recebendo
				dados, geralmente em formato JSON.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. `fetch`: O Mensageiro do JavaScript
			</h3>
			<p className='mb-4'>
				A <strong>API Fetch</strong> é a ferramenta moderna integrada nos
				navegadores para realizar pedidos de rede (falar com APIs). É uma forma
				potente e flexível de enviar e receber informação de forma assíncrona
				(sem recarregar a página).
			</p>
			<p className='mb-4'>
				Um pedido <code>fetch</code> básico para enviar dados de um formulário
				parece-se com isto:
			</p>
			<CodeBlock
				language='javascript'
				codeString={`fetch(URL_DO_SERVIDOR, {
  method: 'POST', // O método para enviar dados
  headers: {
    'Content-Type': 'application/json' // Dizemos ao servidor que enviamos dados JSON
  },
  body: JSON.stringify(objetoComDados) // Convertemos o nosso objeto JS numa string JSON
})
.then(response => response.json()) // Processamos a resposta do servidor
.then(data => {
  console.log('Sucesso:', data); // Fazemos algo com a resposta de sucesso
})
.catch(error => {
  console.error('Erro:', error); // Lidamos com qualquer erro de rede
});`}
			/>
			<p className='mt-4'>
				Não se preocupe se <code>.then()</code> e <code>.catch()</code>{" "}
				parecerem estranhos. Fazem parte das "Promises", que estudaremos em
				detalhe no módulo de programação assíncrona. Por agora, pense neles
				como: "depois de o pedido terminar, <strong>então</strong> faz isto".
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Caso Prático: Enviando um Formulário para o Formspree
			</h3>
			<p className='mb-4'>
				Para praticar, não precisamos do nosso próprio servidor. Usaremos um
				serviço gratuito chamado <strong>Formspree</strong>. Ele fornece-lhe um
				"endpoint" (um URL) para o qual pode enviar os dados do seu formulário,
				e eles encarregam-se de os enviar para si por e-mail.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Vá a{" "}
					<a
						href='https://formspree.io/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-500 hover:underline'
					>
						Formspree.io
					</a>{" "}
					e crie uma conta.
				</li>
				<li>
					Crie um "New Form", dê-lhe um nome e obterá um URL único, algo como{" "}
					<code>https://formspree.io/f/xxxxxxxx</code>.
				</li>
				<li>Esse URL é a nossa API!</li>
			</ol>
			<CodeBlock
				language='html'
				codeString={`<!-- HTML para um formulário de contato -->
<form id="contact-form">
  <label for="email">O seu Email:</label>
  <input type="email" id="email" name="email" required>
  <label for="message">Mensagem:</label>
  <textarea id="message" name="message" required></textarea>
  <button type="submit">Enviar</button>
  <p id="status"></p>
</form>`}
			/>
			<CodeBlock
				language='javascript'
				codeString={`const form = document.getElementById('contact-form');
const status = document.getElementById('status');

form.addEventListener("submit", async function(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  try {
    const response = await fetch('https://formspree.io/f/O_SEU_ENDPOINT_AQUI', {
      method: 'POST',
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.textContent = "Obrigado pela sua mensagem!";
      form.reset(); // Limpa o formulário
    } else {
      status.textContent = "Oops! Houve um problema ao enviar o seu formulário.";
    }
  } catch (error) {
    status.textContent = "Oops! Houve um problema de rede.";
  }
});`}
			/>
			<p className='mt-4'>
				Neste exemplo, usamos `async/await`, que é outra forma de lidar com a
				assincronia e que também veremos mais à frente. É um pouco mais legível
				que `.then()`. O importante é o conceito: capturamos o `submit`,
				preparamos os dados e enviámo-los com `fetch` para um URL.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Conecte o seu Formulário de Contato
			</h3>
			<p className='mb-4'>
				É hora de fazer o seu formulário de contato funcionar de verdade.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Se ainda não o fez, vá ao <strong>Formspree</strong>, registe-se e
					crie um novo endpoint para o seu formulário.
				</li>
				<li>Pegue no formulário de contato que criou em lições anteriores.</li>
				<li>
					Implemente o script de JavaScript que vimos no exemplo. Certifique-se
					de:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Selecionar o formulário e um elemento para mostrar o estado.
						</li>
						<li>
							Adicionar o ouvinte para o evento <code>submit</code>.
						</li>
						<li>Prevenir o comportamento padrão.</li>
						<li>
							Usar <code>fetch</code> para enviar os dados para{" "}
							<strong>o seu URL do Formspree</strong>.
						</li>
						<li>
							Lidar com a resposta para mostrar uma mensagem de sucesso ou erro
							ao utilizador no elemento de estado.
						</li>
						<li>
							Se o envio for bem-sucedido, limpe os campos do formulário com o
							método <code>.reset()</code>.
						</li>
					</ul>
				</li>
				<li>
					Teste o seu formulário. Preencha-o e envie-o. Deverá receber um e-mail
					com os dados que introduziu.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture37Pt;
