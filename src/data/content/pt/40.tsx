import CodeBlock from "@/components/ui/code-block";

const Lecture40Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Escapando do "Callback Hell": O que é uma Promise?
			</h3>
			<p className='mb-4'>
				Na lição anterior, vimos como o aninhamento de callbacks pode levar a
				código desorganizado. Uma <strong>Promise (Promessa)</strong> é um
				objeto de JavaScript que representa a eventual conclusão (ou falha) de
				uma operação assíncrona. É uma solução muito mais limpa e manejável.
			</p>
			<p className='mb-4'>
				<strong>Analogia:</strong> Uma promessa é como um ticket que recebe num
				bengaleiro. Não é o seu casaco, mas é a "promessa" de que receberá o seu
				casaco mais tarde. Com esse ticket, pode ir fazer outras coisas e voltar
				para recolher o seu casaco quando estiver pronto.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Os Três Estados de uma Promise
			</h3>
			<p className='mb-4'>
				Uma promessa encontra-se sempre num destes três estados:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`pending` (pendente):</strong> O estado inicial. A operação
					ainda не foi concluída.
				</li>
				<li>
					<strong>`fulfilled` (cumprida):</strong> A operação foi concluída com
					sucesso. A promessa agora tem um valor resultante.
				</li>
				<li>
					<strong>`rejected` (rejeitada):</strong> A operação falhou. A promessa
					agora tem um motivo da falha (um erro).
				</li>
			</ul>
			<p>
				Uma vez que uma promessa está `fulfilled` ou `rejected`, o seu estado
				não pode mudar. Diz-se que a promessa está "settled" (estabelecida).
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Criando uma Promise (Produzindo Código Assíncrono)
			</h3>
			<p className='mb-4'>
				Embora na maior parte do tempo vamos consumir promises (como as que o
				`fetch` devolve), é útil saber como são criadas. Usa-se o construtor
				`new Promise()`, que recebe um callback com dois argumentos: `resolve` e
				`reject`.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const minhaPromise = new Promise((resolve, reject) => {
  // Simular uma operação assíncrona (ex: uma chamada a uma API)
  setTimeout(() => {
    const sucesso = true; // Altere para false para ver a rejeição
    if (sucesso) {
      resolve("Dados obtidos com sucesso!"); // Cumprir a promessa
    } else {
      reject("Erro: Não foi possível obter os dados."); // Rejeitar a promessa
    }
  }, 2000);
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Consumindo uma Promise: `.then()`, `.catch()` e `.finally()`
			</h3>
			<p className='mb-4'>
				Uma vez que temos uma promessa, podemos "anexar-lhe" funções para lidar
				com o seu resultado.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`.then()`</h4>
			<p className='mb-4'>
				O método `.then()` é usado para lidar com o caso de sucesso
				(`fulfilled`). Recebe um callback que será executado quando a promessa
				for cumprida, e receberá o valor da resolução como argumento.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`.catch()`</h4>
			<p className='mb-4'>
				O método `.catch()` é a forma recomendada de lidar com o caso de falha
				(`rejected`). Recebe um callback que será executado se a promessa for
				rejeitada, e receberá o motivo da rejeição como argumento.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`.finally()`</h4>
			<p className='mb-4'>
				O método `.finally()` recebe um callback que será executado sempre,
				independentemente de a promessa ter sido cumprida ou rejeitada. É
				perfeito para tarefas de limpeza, como ocultar um spinner de
				carregamento.
			</p>

			<CodeBlock
				language='javascript'
				codeString={`console.log("Iniciando o pedido...");

minhaPromise
  .then((resultado) => {
    // Isto é executado se a promessa for resolvida
    console.log("Sucesso:", resultado);
  })
  .catch((erro) => {
    // Isto é executado se a promessa for rejeitada
    console.error("Falha:", erro);
  })
  .finally(() => {
    // Isto é executado sempre
    console.log("A operação foi finalizada.");
  });`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				5. Encadeamento de Promises (Promise Chaining)
			</h3>
			<p className='mb-4'>
				É aqui que as promises realmente brilham. Cada chamada a `.then()` ou
				`.catch()` devolve uma <strong>nova promise</strong>. Isto permite-nos
				encadear operações assíncronas de uma forma sequencial e legível,
				resolvendo completamente o "Callback Hell".
			</p>
			<CodeBlock
				language='javascript'
				codeString={`new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 1000); // Começamos com o número 10
})
.then((numero) => {
  console.log("Passo 1:", numero); // 10
  return numero * 2; // Este valor é passado para o próximo .then()
})
.then((numero) => {
  console.log("Passo 2:", numero); // 20
  return numero + 5;
})
.then((numero) => {
  console.log("Passo 3, resultado final:", numero); // 25
})
.catch((erro) => {
  console.error("Algo correu mal na cadeia:", erro);
});`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Simulação de API
			</h3>
			<p className='mb-4'>
				Vamos criar uma função que simula uma chamada a uma API para obter dados
				de um utilizador. Esta função devolverá uma promise.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Crie uma função chamada <code>obterDadosUtilizador</code>.
				</li>
				<li>
					Dentro desta função, crie e devolva uma <code>new Promise</code>.
				</li>
				<li>
					Dentro da promise, use um <code>setTimeout</code> de 2 segundos para
					simular a demora da rede.
				</li>
				<li>
					Após os 2 segundos, a promise deve resolver com um objeto de
					utilizador. Por exemplo: <code>{'{ nome: "João", idade: 28 }'}</code>.
				</li>
				<li>
					Agora, chame a sua função <code>obterDadosUtilizador()</code>.
				</li>
				<li>
					Encadeie um <code>.then()</code> para lidar com a resposta de sucesso.
					Dentro do <code>.then()</code>, imprima uma mensagem na consola como
					"Nome do utilizador: [nome], Idade: [idade]".
				</li>
				<li>
					Encadeie um <code>.catch()</code> para lidar com qualquer possível
					erro e imprimi-lo na consola.
				</li>
				<li>
					Encadeie um <code>.finally()</code> que imprima "Busca de utilizador
					finalizada." na consola.
				</li>
				<li>
					<strong>Desafio (Opcional):</strong> Modifique a sua promise para que,
					aleatoriamente (usando <code>Math.random()</code>), às vezes falhe
					(chame <code>reject</code>) e às vezes tenha sucesso (chame{" "}
					<code>resolve</code>), para que possa testar tanto o caminho de{" "}
					<code>.then()</code> como o de <code>.catch()</code>.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture40Pt;
