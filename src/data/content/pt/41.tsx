import CodeBlock from "@/components/ui/code-block";

const Lecture41Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. A Evolução da Assincronia: `async/await`
			</h3>
			<p className='mb-4'>
				Viajámos desde os callbacks, passando pelas promises com{" "}
				<code>.then()</code> e <code>.catch()</code>. Hoje, chegamos à sintaxe
				mais moderna e legível para lidar com código assíncrono em JavaScript:{" "}
				<strong>`async/await`</strong>.
			</p>
			<p className='mb-4'>
				<code>async/await</code> не é uma nova invenção; é "açúcar sintático"
				sobre as promises. Isto significa que não substitui as promises, mas
				dá-nos uma forma muito mais limpa e simples de trabalhar com elas.
				Permite-nos escrever código assíncrono que parece e se comporta como
				código síncrono.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. A Palavra-chave `async`
			</h3>
			<p className='mb-4'>
				Para usar `await`, a função que o contém deve ser declarada com a
				palavra-chave <code>async</code>.
			</p>
			<p className='mb-4'>
				Uma função <code>async</code> faz sempre duas coisas:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					Garante que a função devolve sempre uma promise. Se devolver um valor
					normal, o JavaScript irá envolvê-lo automaticamente numa promise
					resolvida.
				</li>
				<li>
					Permite o uso da palavra-chave <code>await</code> dentro dela.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`async function minhaFuncao() {
  return "Olá!"; // Isto é convertido numa Promise resolvida com o valor "Olá!"
}

minhaFuncao().then(valor => console.log(valor)); // Mostra "Olá!"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. A Palavra-chave `await`
			</h3>
			<p className='mb-4'>
				É aqui que a magia acontece. A palavra-chave <code>await</code> só pode
				ser usada <strong>dentro de uma função `async`</strong>.
			</p>
			<p className='mb-4'>
				<code>await</code> faz com que o JavaScript espere até que a promise à
				sua direita seja estabelecida (cumprida ou rejeitada). Enquanto espera,
				não bloqueia a thread principal; simplesmente pausa a execução da função{" "}
				<code>async</code>.
			</p>
			<p>
				Se a promise for cumprida, <code>await</code> "desembrulha" o valor e
				devolve-o. Se for rejeitada, lança um erro, que podemos capturar.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Comparação: `.then()` vs. `async/await`
			</h4>
			<p>Lembremos o nosso encadeamento de promises da lição anterior:</p>
			<CodeBlock
				language='javascript'
				codeString={`// Com .then()
function executarPassosComThen() {
  obterNumeroInicial() // Assuma que esta função devolve uma promise
    .then(numero => processarPasso1(numero))
    .then(novoNumero => processarPasso2(novoNumero))
    .then(resultadoFinal => console.log(resultadoFinal))
    .catch(erro => console.error(erro));
}`}
			/>
			<p className='mt-4'>Agora, vejamos o mesmo com `async/await`:</p>
			<CodeBlock
				language='javascript'
				codeString={`// Com async/await
async function executarPassosComAwait() {
  try {
    const numero = await obterNumeroInicial();
    const novoNumero = await processarPasso1(numero);
    const resultadoFinal = await processarPasso2(novoNumero);
    console.log(resultadoFinal);
  } catch (erro) {
    console.error(erro);
  }
}`}
			/>
			<p className='mt-4'>
				Como pode ver, a versão com <code>async/await</code> é muito mais fácil
				de ler. Parece-se com um script síncrono normal, de cima para baixo.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Tratamento de Erros com `try...catch`
			</h3>
			<p className='mb-4'>
				Quando uma promise que estamos a "esperar" com <code>await</code> é
				rejeitada, ela lança uma exceção. A forma padrão de lidar com exceções
				em JavaScript síncrono é com um bloco <code>try...catch</code>, e
				funciona exatamente da mesma forma aqui.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`try`</strong>: Envolvemos o código que pode falhar (as nossas
					chamadas com `await`) dentro deste bloco.
				</li>
				<li>
					<strong>`catch (erro)`</strong>: Se algo no bloco `try` falhar, a
					execução salta imediatamente para este bloco, e podemos lidar com o
					erro.
				</li>
				<li>
					<strong>`finally`</strong>: (Opcional) Este bloco é executado sempre,
					quer tenha havido um erro ou não. É o equivalente ao{" "}
					<code>.finally()</code> das promises.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`async function obterDados() {
  console.log("A tentar obter dados...");
  try {
    // Assumimos que esta promise pode ser rejeitada
    const dados = await promiseQuePodeFalhar();
    console.log("Dados recebidos:", dados);
  } catch (erro) {
    console.error("Ocorreu um erro!", erro);
  } finally {
    console.log("Operação finalizada.");
  }
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Refatorizando a Simulação de API
			</h3>
			<p className='mb-4'>
				Vamos pegar na tarefa da lição anterior e reescrevê-la usando a sintaxe{" "}
				<code>async/await</code>.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Mantenha a sua função <code>obterDadosUtilizador</code> que devolve
					uma promise da lição anterior.
				</li>
				<li>
					Crie uma nova função{" "}
					<strong>
						<code>async</code>
					</strong>{" "}
					chamada <code>mostrarUtilizador</code>.
				</li>
				<li>
					Dentro de <code>mostrarUtilizador</code>, use um bloco{" "}
					<code>try...catch...finally</code>.
				</li>
				<li>
					No bloco <code>try</code>:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Chame <code>obterDadosUtilizador</code> usando <code>await</code>{" "}
							e guarde o resultado numa variável.
						</li>
						<li>
							Imprima a mensagem de boas-vindas com os dados do utilizador, tal
							como fez com <code>.then()</code>.
						</li>
					</ul>
				</li>
				<li>
					No bloco <code>catch</code>, capture o erro e imprima-o na consola.
				</li>
				<li>
					No bloco <code>finally</code>, imprima a mensagem "Busca de utilizador
					finalizada.".
				</li>
				<li>
					Finalmente, chame a sua nova função <code>mostrarUtilizador()</code>{" "}
					para executar todo o processo.
				</li>
			</ol>
			<p>
				Compare este novo código com o que usava <code>.then()</code>. Não é
				muito mais fácil de ler e seguir?
			</p>
		</section>
	</div>
);

export default Lecture41Pt;
