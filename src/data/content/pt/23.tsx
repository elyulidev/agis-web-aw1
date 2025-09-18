import CodeBlock from "@/components/ui/code-block";

const Lecture23Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. O que é uma Função? Empacotando o Nosso Código
			</h3>
			<p className='mb-4'>
				Até agora, escrevemos código que é executado de cima para baixo, uma
				linha após a outra. Mas, e se precisarmos de realizar a mesma tarefa em
				vários locais? Copiar e colar? Não! Isso vai contra um dos princípios
				mais importantes da programação:{" "}
				<strong>DRY (Don't Repeat Yourself - Não se Repita)</strong>.
			</p>
			<p className='mb-4'>
				É aqui que entram as <strong>funções</strong>. Uma função é um bloco de
				código reutilizável, projetado para realizar uma tarefa específica.
				Pense nela como uma receita de culinária: tem um nome (ex. "fazer uma
				omelete"), aceita ingredientes (parâmetros) e segue uma série de passos
				para produzir um resultado (um valor de retorno).
			</p>
			<p>
				As funções permitem-nos organizar, reutilizar e simplificar o nosso
				código, tornando-o mais legível e fácil de manter.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Declaração de Função (Function Declaration)
			</h3>
			<p className='mb-4'>
				Esta é a forma mais clássica e direta de criar uma função em JavaScript.
				A sua estrutura é muito clara:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					Começa com a palavra-chave <code>function</code>.
				</li>
				<li>
					Segue-se o nome que queremos dar à função (ex. <code>saudar</code>).
				</li>
				<li>
					Depois, um par de parênteses <code>()</code> que podem conter uma
					lista de <strong>parâmetros</strong> (os "ingredientes" que a função
					precisa para trabalhar).
				</li>
				<li>
					Finalmente, um bloco de código entre chavetas <code>{"{ ... }"}</code>
					, que é o corpo da função (os "passos da receita").
				</li>
			</ul>

			<h4 className='text-xl font-semibold mt-6 mb-2'>A Declaração `return`</h4>
			<p className='mb-4'>
				A palavra-chave <code>return</code> é crucial. Especifica o valor que a
				função "devolve" ou "produz" depois de ser executada. Quando um{" "}
				<code>return</code> é encontrado, a função termina imediatamente e envia
				esse valor de volta para o local onde foi chamada. Se uma função não
				tiver uma declaração <code>return</code>, devolve <code>undefined</code>{" "}
				por defeito.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// 1. Declaração da função
function somar(numeroA, numeroB) {
  const resultado = numeroA + numeroB;
  return resultado; // Devolve o valor calculado
}

// 2. Chamada (ou invocação) da função
const resultadoSoma = somar(5, 10); // Passamos 5 e 10 como argumentos

console.log(resultadoSoma); // Mostra 15 na consola`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Expressão de Função (Function Expression)
			</h3>
			<p className='mb-4'>
				Em JavaScript, as funções são "cidadãos de primeira classe". Isto
				significa que podem ser tratadas como qualquer outro valor: podem ser
				atribuídas a variáveis, passadas como argumentos para outras funções,
				etc.
			</p>
			<p className='mb-4'>
				Uma expressão de função ocorre quando criamos uma função e a atribuímos
				a uma variável. Frequentemente, estas funções são{" "}
				<strong>anónimas</strong> (não têm um nome depois da palavra{" "}
				<code>function</code>), uma vez que a variável é que agora contém a
				referência para a função.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// "subtrair" é uma variável que contém uma função
const subtrair = function(numeroA, numeroB) {
  return numeroA - numeroB;
};

// Chamamo-la usando o nome da variável
const resultadoSubtracao = subtrair(20, 7);

console.log(resultadoSubtracao); // Mostra 13`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Declaração vs. Expressão: A Diferença Chave do Hoisting
			</h3>
			<p className='mb-4'>
				Embora pareçam semelhantes, há uma diferença fundamental: o{" "}
				<strong>hoisting</strong> (içamento).
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Declarações de Função:</strong> São "içadas" (hoisted). O
					interpretador de JavaScript move-as para o topo do seu escopo antes de
					o código ser executado. Isto significa que pode chamar uma função
					declarada <strong>antes</strong> da sua definição no código.
				</li>
				<li>
					<strong>Expressões de Função:</strong> Não são "içadas". A variável
					que as contém é "içada" (se declarada com <code>var</code>, mas não é
					inicializada), mas a atribuição da função não. Portanto, deve definir
					uma expressão de função <strong>antes</strong> de a poder chamar.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`// Isto funciona graças ao hoisting das declarações
console.log(saudacaoDeclaracao("João")); // Mostra "Olá, João"

function saudacaoDeclaracao(nome) {
  return \`Olá, \${nome}\`;
}


// Isto irá produzir um erro: ReferenceError: Cannot access 'saudacaoExpressao' before initialization
// console.log(saudacaoExpressao("Ana"));

const saudacaoExpressao = function(nome) {
  return \`Olá, \${nome}\`;
};

// Para funcionar, a chamada deve estar depois
console.log(saudacaoExpressao("Ana")); // Mostra "Olá, Ana"`}
			/>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					Qual usar?
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Ambas são válidas. Muitos programadores preferem as expressões de
					função com <code>const</code> porque evitam o hoisting, o que pode
					tornar o código mais previsível e menos propenso a erros ao forçar uma
					estrutura de cima para baixo.
				</p>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: A Calculadora Universal
			</h3>
			<p className='mb-4'>
				É hora de construir o seu próprio conjunto de ferramentas matemáticas!
				Nesta tarefa, irá praticar ambas as formas de criar funções.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					No seu ficheiro <code>main.js</code>, crie quatro funções usando a
					sintaxe de <strong>declaração de função</strong>:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							<code>somar(a, b)</code> que devolva a soma de dois números.
						</li>
						<li>
							<code>subtrair(a, b)</code> que devolva a subtração.
						</li>
						<li>
							<code>multiplicar(a, b)</code> que devolva o produto.
						</li>
						<li>
							<code>dividir(a, b)</code> que devolva a divisão.
						</li>
					</ul>
				</li>
				<li>
					Agora, crie as mesmas quatro funções, mas desta vez usando a sintaxe
					de <strong>expressão de função</strong>. Atribua cada uma a uma
					constante com um nome diferente (ex. <code>somaExpressao</code>,{" "}
					<code>subtracaoExpressao</code>, etc.).
				</li>
				<li>
					Teste cada uma das suas oito funções. Chame-as com diferentes números
					e mostre os resultados na consola de uma forma clara e descritiva. Por
					exemplo:
					<CodeBlock
						language='javascript'
						codeString={`console.log("Declaração: 10 + 5 =", somar(10, 5));
console.log("Expressão: 20 * 4 =", multiplicarExpressao(20, 4));`}
					/>
				</li>
				<li>
					<strong>Desafio (Opcional):</strong> Na sua função{" "}
					<code>dividir</code>, adicione uma condição (<code>if</code>) para
					verificar se o segundo parâmetro (o divisor) é <code>0</code>. Se for,
					em vez de realizar a divisão, devolva uma string que diga "Erro: Não é
					possível dividir por zero".
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture23Pt;
