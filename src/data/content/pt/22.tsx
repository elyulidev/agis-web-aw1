import CodeBlock from "@/components/ui/code-block";

const Lecture22Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Repetindo Tarefas sem Repetir Código
			</h3>
			<p className='mb-4'>
				Imagine que precisa de mostrar uma lista de 100 produtos ou saudar 50
				utilizadores. Copiaria e colaria o mesmo código 100 ou 50 vezes? Claro
				que não! A programação baseia-se na eficiência. Para realizar tarefas
				repetitivas, utilizamos <strong>laços</strong> (ou "loops" em inglês).
				Um laço é uma estrutura de controlo que repete um bloco de código várias
				vezes até que uma condição de saída seja cumprida.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>2. O Laço `for`</h3>
			<p className='mb-4'>
				O laço <code>for</code> é o mais comum e estruturado. É ideal quando
				sabe de antemão quantas vezes quer que o código se repita. A sua sintaxe
				é composta por três partes, separadas por ponto e vírgula:
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Inicialização:</strong> É executada uma única vez, no início.
					Geralmente, é usada para declarar uma variável contadora
					(frequentemente chamada <code>i</code> de "índice").
				</li>
				<li>
					<strong>Condição:</strong> É avaliada antes de cada repetição.
					Enquanto for <code>true</code>, o laço continua. Quando for{" "}
					<code>false</code>, o laço termina.
				</li>
				<li>
					<strong>Incremento/Decremento:</strong> É executado no final de cada
					repetição. É usado para atualizar a variável contadora.
				</li>
			</ol>
			<CodeBlock
				language='javascript'
				codeString={`// Sintaxe: for (inicialização; condição; incremento)

// Exemplo: Imprimir números de 1 a 5
for (let i = 1; i <= 5; i++) {
  console.log("O número é: " + i);
}

// i++ é um atalho para i = i + 1`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>3. O Laço `while`</h3>
			<p className='mb-4'>
				O laço <code>while</code> (enquanto) é mais simples. Repete um bloco de
				código enquanto uma condição for verdadeira. É útil quando não sabe
				exatamente quantas iterações precisará, mas sabe quando o laço deve
				parar.
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					Cuidado com os laços infinitos!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					Com o <code>while</code>, é da sua responsabilidade garantir que a
					condição eventualmente se torne <code>false</code>. Se se esquecer de
					atualizar a variável de controlo dentro do laço, criará um laço
					infinito que bloqueará o seu navegador.
				</p>
			</div>
			<CodeBlock
				language='javascript'
				codeString={`let contador = 0; // 1. Inicialização fora do laço

while (contador < 3) { // 2. Condição
  console.log("Olá!");
  contador++; // 3. Incremento DENTRO do laço! (Muito importante)
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>4. O Laço `do...while`</h3>
			<p className='mb-4'>
				Este laço é uma variante do <code>while</code>. A principal diferença é
				que a condição é avaliada <strong>depois</strong> de executar o bloco de
				código. Isto garante que o código dentro do laço é executado{" "}
				<strong>pelo menos uma vez</strong>, mesmo que a condição seja falsa
				desde o início.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`let i = 5;

do {
  console.log("Esta mensagem será mostrada uma vez.");
  i++;
} while (i < 5); // A condição (5 < 5) é falsa, mas o bloco já foi executado.`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				5. Controlando o Fluxo: `break` e `continue`
			</h3>
			<p className='mb-4'>
				Às vezes, precisamos de mais controlo sobre o comportamento dos nossos
				laços.
			</p>
			<h4 className='text-xl font-semibold mt-6 mb-2'>`break`</h4>
			<p className='mb-4'>
				A declaração <code>break</code> (quebrar) sai do laço imediatamente,
				independentemente de a condição do laço continuar a ser verdadeira.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Encontrar o primeiro número divisível por 7 depois de 100
for (let i = 101; i < 200; i++) {
  if (i % 7 === 0) {
    console.log("O primeiro número divisível por 7 é: " + i);
    break; // Saímos do laço assim que o encontramos
  }
}`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`continue`</h4>
			<p className='mb-4'>
				A declaração <code>continue</code> (continuar) não quebra o laço, mas
				sim salta o resto do código da iteração atual e passa diretamente para a
				seguinte.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Imprimir apenas os números ímpares de 1 a 10
for (let i = 1; i <= 10; i++) {
  // Se o número for par...
  if (i % 2 === 0) {
    continue; // ...salta esta iteração e não executes o console.log
  }
  console.log(i);
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Tabuadas e Adivinhe o Número
			</h3>
			<p className='mb-4'>
				Vamos praticar os laços com dois pequenos exercícios!
			</p>
			<ol className='list-decimal list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>Exercício 1: A Tabuada dos 7</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Use um laço <code>for</code> para gerar a tabuada dos 7.
						</li>
						<li>O laço deve ir de 1 a 10.</li>
						<li>
							Em cada iteração, imprima na consola uma linha com o formato "7 x
							[número] = [resultado]". Por exemplo, "7 x 1 = 7", "7 x 2 = 14",
							etc.
						</li>
					</ul>
				</li>
				<li>
					<strong>Exercício 2: FizzBuzz Clássico</strong>
					<p className='my-2'>
						Este é um problema de programação clássico. O objetivo é escrever um
						script que imprima os números de 1 a 100, mas com algumas exceções:
					</p>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>Para os múltiplos de 3, imprima "Fizz" em vez do número.</li>
						<li>Para os múltiplos de 5, imprima "Buzz" em vez do número.</li>
						<li>
							Para os números que são múltiplos de 3 e 5, imprima "FizzBuzz".
						</li>
						<li>
							<strong>Dica:</strong> Precisará de um laço <code>for</code> que
							vá de 1 a 100. Dentro do laço, usará uma estrutura{" "}
							<code>if...else if...else</code>. Lembre-se que o operador módulo
							(<code>%</code>) é o seu melhor amigo aqui para verificar se um
							número é múltiplo de outro.
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture22Pt;
