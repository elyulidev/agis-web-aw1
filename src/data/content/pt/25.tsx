import CodeBlock from "@/components/ui/code-block";

const Lecture25Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. O Onde e Quando das Variáveis
			</h3>
			<p className='mb-4'>
				Bem-vindos a uma das lições conceptuais mais importantes de JavaScript!
				Hoje, vamos desvendar dois conceitos que, uma vez entendidos,
				esclarecerão grande parte do "comportamento mágico" do JavaScript:{" "}
				<strong>Scope (Escopo)</strong> e <strong>Hoisting (Içamento)</strong>.
			</p>
			<p className='mb-4'>
				O <strong>Scope</strong> responde à pergunta: "
				<em>De onde posso aceder a esta variável ou função?</em>". Define a
				visibilidade e o ciclo de vida das nossas variáveis.
			</p>
			<p>
				O <strong>Hoisting</strong> responde à pergunta: "
				<em>
					Como é que o JavaScript lê e prepara o meu código antes de o executar?
				</em>
				".
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Aprofundando o Scope (Escopo)
			</h3>
			<p className='mb-4'>
				Em JavaScript, existem principalmente três tipos de escopo:
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Escopo Global (Global Scope)
			</h4>
			<p className='mb-4'>
				Uma variável declarada fora de qualquer função ou bloco{" "}
				<code>{"{...}"}</code> tem um escopo global. Isto significa que é
				acessível de qualquer parte do nosso código.
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					Cuidado com o Escopo Global!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					Embora seja útil, abusar de variáveis globais é uma má prática. Pode
					levar a conflitos de nomes ("name collisions") e a um código difícil
					de depurar, pois qualquer parte do programa pode modificar o seu
					valor.
				</p>
			</div>
			<CodeBlock
				language='javascript'
				codeString={`const planeta = "Terra"; // Escopo Global

function mostrarPlaneta() {
  console.log(planeta); // Acessível dentro da função
}

mostrarPlaneta(); // Mostra "Terra"
console.log(planeta); // Acessível fora da função também`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Escopo de Função (Function Scope)
			</h4>
			<p className='mb-4'>
				Variáveis declaradas com <code>var</code> dentro de uma função têm
				escopo de função. Só podem ser acedidas de dentro dessa função.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`function minhaFuncao() {
  var segredo = "123"; // Escopo de Função
  console.log(segredo);
}

minhaFuncao(); // Mostra "123"
// console.log(segredo); // ReferenceError: segredo is not defined`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Escopo de Bloco (Block Scope) - A Chave de `let` e `const`!
			</h4>
			<p className='mb-4'>
				Introduzido no ES6, o escopo de bloco é uma das melhorias mais
				importantes. Um "bloco" é qualquer código delimitado por chavetas{" "}
				<code>{"{...}"}</code> (como num <code>if</code>, <code>for</code>, ou
				simplesmente um par de chavetas). As variáveis declaradas com{" "}
				<code>let</code> e <code>const</code> respeitam este escopo.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`if (true) {
  let poder = "Voar";     // Escopo de Bloco
  const fraqueza = "Kriptonita"; // Escopo de Bloco
  var cor = "Vermelho";   // Escopo de Função! (ou Global)
}

console.log(cor);      // Mostra "Vermelho" (var ignora o bloco)
// console.log(poder);   // ReferenceError: poder is not defined
// console.log(fraqueza); // ReferenceError: fraqueza is not defined`}
			/>
			<p className='mt-4'>
				Esta é a razão principal pela qual{" "}
				<strong>devemos sempre preferir `let` e `const` em vez de `var`</strong>
				. Dão-nos um controlo muito mais previsível e granular sobre onde as
				nossas variáveis existem.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>3. Hoisting (Içamento)</h3>
			<p className='mb-4'>
				O JavaScript tem um comportamento peculiar: antes de executar o código,
				ele "analisa" e move as declarações de variáveis e funções para o topo
				do seu escopo (global ou de função). Isto chama-se hoisting. No entanto,
				a forma como o faz depende de como a variável é declarada.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Hoisting com `var`</h4>
			<p className='mb-4'>
				Com <code>var</code>, apenas a <strong>declaração</strong> é içada, não
				a <strong>inicialização</strong> (a atribuição do valor). Isto significa
				que a variável existe desde o início do seu escopo, mas o seu valor é{" "}
				<code>undefined</code> até o código chegar à linha donde o valor é
				atribuído.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`console.log(meuNome); // Mostra "undefined", não um erro.
var meuNome = "Carlos";
console.log(meuNome); // Mostra "Carlos"

// O que o JS interpreta na realidade:
// var meuNome;
// console.log(meuNome);
// meuNome = "Carlos";
// console.log(meuNome);`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Hoisting com `let` e `const` (Temporal Dead Zone)
			</h4>
			<p className='mb-4'>
				As variáveis <code>let</code> e <code>const</code> também são içadas,
				mas de uma forma diferente. São içadas para o topo do seu bloco, mas não
				são inicializadas. Entram num estado chamado{" "}
				<strong>"Temporal Dead Zone" (TDZ)</strong>. Qualquer tentativa de
				aceder à variável dentro da TDZ (antes da sua declaração) resultará num{" "}
				<code>ReferenceError</code>.
			</p>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					A TDZ é sua amiga:
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					Este comportamento é bom. Obriga-nos a declarar as nossas variáveis
					antes de as usarmos, o que torna o código mais limpo, lógico e menos
					propenso a erros do que o comportamento <code>undefined</code> do{" "}
					<code>var</code>.
				</p>
			</div>
			<CodeBlock
				language='javascript'
				codeString={`// console.log(minhaIdade); // ReferenceError: Cannot access 'minhaIdade' before initialization
let minhaIdade = 30;
console.log(minhaIdade); // Mostra 30`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Hoisting de Funções</h4>
			<p className='mb-4'>
				{/* FIX: Escaped curly braces to prevent JSX parsing error. */}
				As <strong>declarações de função</strong> (
				<code>function minhaFuncao() {"{...}"}</code>) são completamente içadas.
				Tanto o nome como o corpo da função são movidos para o topo, pelo que
				podemos chamá-las antes de aparecerem no código.
			</p>
			<p>
				{/* FIX: Escaped curly braces to prevent JSX parsing error. */}
				As <strong>expressões de função</strong> (
				<code>const minhaFuncao = function() {"{...}"}</code>) seguem as regras
				de hoisting da sua variável (<code>let</code>, <code>const</code> ou{" "}
				<code>var</code>). Se usar <code>const</code>, não poderá chamá-la antes
				da sua definição devido à TDZ.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Preveja o Resultado
			</h3>
			<p className='mb-4'>
				Analise os seguintes trechos de código. Sem os executar, tente prever o
				que cada <code>console.log</code> irá mostrar na consola. Será um valor,{" "}
				<code>undefined</code> ou um erro? Anote as suas respostas e depois
				verifique as suas previsões na consola do navegador.
			</p>

			<h4 className='text-xl font-semibold mt-4 mb-2'>Trecho 1:</h4>
			<CodeBlock
				language='javascript'
				codeString={`var a = 1;
function minhaFuncao() {
  console.log(a);
  var a = 2;
  console.log(a);
}
minhaFuncao();`}
			/>

			<h4 className='text-xl font-semibold mt-4 mb-2'>Trecho 2:</h4>
			<CodeBlock
				language='javascript'
				codeString={`let b = "global";
if (true) {
  let b = "bloco";
  console.log(b);
}
console.log(b);`}
			/>

			<h4 className='text-xl font-semibold mt-4 mb-2'>Trecho 3:</h4>
			<CodeBlock
				language='javascript'
				codeString={`console.log(c);
let c = 10;`}
			/>
		</section>
	</div>
);

export default Lecture25Pt;
