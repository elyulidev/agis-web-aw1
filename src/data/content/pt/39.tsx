import CodeBlock from "@/components/ui/code-block";

const Lecture39Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Síncrono vs. Assíncrono: O Fluxo do Tempo no Código
			</h3>
			<p className='mb-4'>
				Até agora, todo o nosso código foi <strong>síncrono</strong>. Isto
				significa que as tarefas são executadas uma após a outra, por ordem. Se
				uma tarefa demora muito, bloqueia tudo o que vem a seguir.
			</p>
			<p className='mb-4'>
				<strong>Analogia síncrona:</strong> Uma fila num banco com um único
				caixa. Não pode ser atendido até que todas as pessoas à sua frente
				tenham terminado.
			</p>
			<p>
				O código <strong>assíncrono</strong> é diferente. Permite-nos iniciar
				uma tarefa que leva tempo (como esperar, descarregar um ficheiro ou
				pedir dados a um servidor) e continuar com outras tarefas entretanto.
				Quando a tarefa longa termina, o nosso programa é notificado e pode
				reagir.
			</p>
			<p className='mb-4'>
				<strong>Analogia assíncrona:</strong> Pedir comida num restaurante com
				um pager. Faz o seu pedido (inicia a tarefa), dão-lhe um pager (um
				"callback") e pode sentar-se e conversar. Quando a comida está pronta, o
				pager vibra (o callback é executado) e vai buscá-la. Não teve de esperar
				bloqueado ao balcão!
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Temporizadores: `setTimeout` e `setInterval`
			</h3>
			<p className='mb-4'>
				As funções de temporização são a forma mais simples de experimentar a
				assincronia em JavaScript.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`setTimeout`</h4>
			<p className='mb-4'>
				Executa uma função (callback) <strong>uma vez</strong> depois de ter
				decorrido um número específico de milissegundos.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// setTimeout(funcaoCallback, atrasoEmMilissegundos);

console.log("Início do script");

setTimeout(() => {
  console.log("Passaram 2 segundos!");
}, 2000); // 2000 ms = 2 segundos

console.log("Fim do script");

// Ordem na consola:
// 1. "Início do script"
// 2. "Fim do script"
// 3. (Após 2 segundos) "Passaram 2 segundos!"`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`setInterval`</h4>
			<p className='mb-4'>
				Executa uma função (callback) <strong>repetidamente</strong>, com um
				intervalo fixo de milissegundos entre cada chamada.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`let contador = 0;

const intervaloId = setInterval(() => {
  contador++;
  console.log(\`Tick número \${contador}\`);

  if (contador >= 5) {
    clearInterval(intervaloId); // Paramos o intervalo
    console.log("Intervalo parado!");
  }
}, 1000);`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Cancelando Temporizadores: `clearTimeout` e `clearInterval`
			</h3>
			<p className='mb-4'>
				Tanto <code>setTimeout</code> como <code>setInterval</code> devolvem um
				ID numérico único. Podemos guardar este ID numa variável e usá-lo para
				cancelar o temporizador antes de ser executado (ou para parar um
				intervalo).
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`clearTimeout(idDoTimeout)`</strong>: Cancela um `setTimeout`
					agendado.
				</li>
				<li>
					<strong>`clearInterval(idDoIntervalo)`</strong>: Para um `setInterval`
					em execução.
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. O Problema: "Callback Hell" (O Inferno dos Callbacks)
			</h3>
			<p className='mb-4'>
				Os callbacks são poderosos, mas o que acontece se tivermos várias
				operações assíncronas que dependem uma da outra? Acabamos por aninhar
				callbacks dentro de callbacks, criando uma estrutura difícil de ler e
				manter, conhecida como a "Pirâmide da Perdição" ou "Callback Hell".
			</p>
			<CodeBlock
				language='javascript'
				codeString={`setTimeout(() => {
  console.log("Primeira tarefa concluída.");
  setTimeout(() => {
    console.log("Segunda tarefa concluída.");
    setTimeout(() => {
      console.log("Terceira tarefa concluída.");
      // Imagine 10 níveis disto...
    }, 1000);
  }, 1000);
}, 1000);`}
			/>
			<p className='mt-4'>
				Este é o problema que as Promises (que veremos na próxima lição) vêm
				resolver.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Temporizador de Contagem Decrescente
			</h3>
			<p className='mb-4'>
				Vamos criar um temporizador que faz uma contagem decrescente na página.
			</p>
			<p>
				1. Crie um ficheiro HTML com um <code>&lt;h1&gt;</code> para mostrar a
				contagem.
			</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="pt">
<head><title>Contagem Decrescente</title></head>
<body>
    <h1 id="contador">10</h1>
    <script src="main.js"></script>
</body>
</html>`}
			/>
			<p className='mt-4'>2. No seu ficheiro JavaScript:</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Selecione o <code>&lt;h1&gt;</code> do contador.
				</li>
				<li>
					Crie uma variável <code>tempoRestante</code> e inicialize-a com 10.
				</li>
				<li>
					Use <code>setInterval</code> para executar uma função a cada segundo
					(1000 ms).
				</li>
				<li>
					Dentro da função do intervalo:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Decremente a variável <code>tempoRestante</code> em 1.
						</li>
						<li>
							Atualize o <code>textContent</code> do <code>&lt;h1&gt;</code> com
							o novo valor.
						</li>
						<li>
							Adicione uma condição: se <code>tempoRestante</code> chegar a 0,
							pare o intervalo usando <code>clearInterval</code> e mude o texto
							do <code>&lt;h1&gt;</code> para "Lançar!".
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture39Pt;
