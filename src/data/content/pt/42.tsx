import CodeBlock from "@/components/ui/code-block";

const Lecture42Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Juntando Tudo: O Pedido Real
			</h3>
			<p className='mb-4'>
				Parabéns por chegar à última lição deste módulo! Aprendemos sobre
				callbacks, promises e `async/await`. Agora, vamos aplicar todo este
				conhecimento no caso de uso mais comum para a programação assíncrona no
				frontend: <strong>consumir uma API externa</strong>.
			</p>
			<p>
				Vamos revisitar a <strong>API Fetch</strong>, mas desta vez com uma
				compreensão completa de como ela funciona por baixo.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Desmistificando a API `fetch`
			</h3>
			<p className='mb-4'>
				A função global <code>fetch()</code> inicia o processo de obter um
				recurso da rede. A sua grande vantagem é que é baseada em promises, o
				que a torna perfeita para usar com <code>.then()</code> ou{" "}
				<code>async/await</code>.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				O Processo de Dois Passos
			</h4>
			<p className='mb-4'>
				Um pedido `fetch` envolve sempre <strong>duas promises</strong>. Isto
				muitas vezes confunde os iniciantes.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					A chamada a <code>fetch(url)</code> devolve imediatamente uma promise.
					Esta primeira promise resolve-se num objeto{" "}
					<strong>`Response`</strong> assim que o servidor começa a enviar uma
					resposta. Não contém os dados finais ainda, apenas o cabeçalho e o
					estado da resposta.
				</li>
				<li>
					O objeto `Response` tem métodos para extrair o corpo da resposta em
					diferentes formatos (como <code>.json()</code>, <code>.text()</code>,{" "}
					<code>.blob()</code>). Estes métodos também devolvem uma promise, que
					se resolve quando o corpo completo foi descarregado e processado.
				</li>
			</ol>

			<p>
				Isto significa que precisamos de "esperar" duas vezes: uma pela resposta
				inicial e outra pelo corpo dos dados.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. `fetch` com `async/await` (Método Recomendado)
			</h3>
			<p className='mb-4'>
				A sintaxe `async/await` torna o processo de dois passos incrivelmente
				claro. Para os nossos exemplos, usaremos a API gratuita{" "}
				<strong>JSONPlaceholder</strong>, que fornece dados falsos para testes.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// URL da API para obter um utilizador específico
const url = 'https://jsonplaceholder.typicode.com/users/1';

async function obterUtilizador() {
  try {
    // 1. Esperamos pela resposta inicial do servidor
    const resposta = await fetch(url);

    // fetch не rejeita a promise por erros HTTP (como 404 ou 500)
    // Por isso, devemos verificá-lo manualmente.
    if (!resposta.ok) {
      throw new Error(\`Erro HTTP: \${resposta.status}\`);
    }

    // 2. Esperamos que o corpo seja convertido para JSON
    const dadosUtilizador = await resposta.json();

    console.log(dadosUtilizador);
    // Aqui podemos usar os dados para atualizar o DOM

  } catch (erro) {
    // Isto captura erros de rede (ex. sem ligação) ou o nosso erro lançado
    console.error("Não foi possível obter o utilizador:", erro);
  }
}

obterUtilizador();`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Cartão de Perfil de Utilizador a partir de uma API
			</h3>
			<p className='mb-4'>
				Vamos construir uma pequena aplicação que obtém dados de um utilizador
				de uma API e os exibe num cartão de perfil.
			</p>
			<p>1. Crie um ficheiro HTML com a seguinte estrutura:</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="pt">
<head><title>Perfil de API</title></head>
<body>
    <h1>Perfil de Utilizador</h1>
    <div id="user-card">
        <p id="loading-message">A carregar dados do utilizador...</p>
        <h2 id="user-name" style="display:none;"></h2>
        <p id="user-email" style="display:none;"></p>
        <p id="user-phone" style="display:none;"></p>
    </div>
    <script src="main.js"></script>
</body>
</html>`}
			/>
			<p className='mt-4'>2. No seu ficheiro JavaScript:</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Crie uma função <code>async</code> chamada{" "}
					<code>mostrarDadosUtilizador</code>.
				</li>
				<li>
					Dentro da função, selecione todos os elementos do DOM que irá precisar
					(a mensagem de carregamento, o nome, email e telefone).
				</li>
				<li>
					Use um bloco <code>try...catch...finally</code>.
				</li>
				<li>
					<strong>No bloco `try`</strong>:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Faça um pedido <code>fetch</code> para o URL{" "}
							<code>https://jsonplaceholder.typicode.com/users/1</code>.
						</li>
						<li>
							Verifique se a resposta é <code>ok</code>. Se не for, lance um
							erro.
						</li>
						<li>Converta a resposta para JSON.</li>
						<li>
							Use os dados recebidos para preencher o <code>textContent</code>{" "}
							dos elementos de nome, email e telefone.
						</li>
						<li>
							Assim que os dados estiverem prontos, esconda a mensagem de
							carregamento (<code>loadingMessage.style.display = 'none';</code>)
							e mostre os outros elementos (alterando o seu <code>display</code>{" "}
							para <code>'block'</code> ou removendo o estilo).
						</li>
					</ul>
				</li>
				<li>
					<strong>No bloco `catch`</strong>:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Altere o texto da mensagem de carregamento para uma mensagem de
							erro, por exemplo: "Erro ao carregar os dados.".
						</li>
					</ul>
				</li>
				<li>
					Chame a sua função <code>mostrarDadosUtilizador()</code> no final do
					script para que seja executada quando a página carregar.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture42Pt;
