import CodeBlock from "@/components/ui/code-block";

const Lecture24Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Introdução à Próxima Geração de Funções
			</h3>
			<p className='mb-4'>
				Na lição anterior, estabelecemos as duas formas principais de criar
				funções: declarações e expressões. Hoje, vamos explorar uma sintaxe mais
				moderna e concisa introduzida no ES6: as{" "}
				<strong>Arrow Functions (Funções de Seta)</strong>.
			</p>
			<p className='mb-4'>
				Além disso, vamos mergulhar num dos conceitos mais importantes e
				poderosos do JavaScript: os <strong>Callbacks</strong>. Entender os
				callbacks é fundamental, pois são a base da programação assíncrona, da
				manipulação de eventos e muito mais.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Arrow Functions (`=&gt;`): Sintaxe Concisa e Moderna
			</h3>
			<p className='mb-4'>
				As funções de seta oferecem-nos uma forma mais curta de escrever
				expressões de função. Comparemos a sintaxe:
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Expressão de função clássica
const somar_classica = function(a, b) {
  return a + b;
};

// Função de seta
const somar_seta = (a, b) => {
  return a + b;
};`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Regras de Sintaxe e Atalhos
			</h4>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Retorno implícito:</strong> Se a função tiver apenas uma linha
					e essa linha for um <code>return</code>, podemos omitir as chavetas{" "}
					<code>{"{ }"}</code> e a palavra-chave <code>return</code>.
				</li>
				<li>
					<strong>Um único parâmetro:</strong> Se a função tiver apenas um
					parâmetro, podemos omitir os parênteses <code>()</code> à volta dele.
				</li>
				<li>
					<strong>Sem parâmetros:</strong> Se não houver parâmetros, devemos
					usar um par de parênteses vazios <code>()</code>.
				</li>
			</ul>

			<CodeBlock
				language='javascript'
				codeString={`// Retorno implícito
const somar = (a, b) => a + b;

// Um único parâmetro
const quadrado = numero => numero * numero;

// Sem parâmetros
const saudar = () => "Olá Mundo!";

console.log(somar(5, 3));       // Mostra 8
console.log(quadrado(4));      // Mostra 16
console.log(saudar());         // Mostra "Olá Mundo!"`}
			/>
			<p className='mt-4'>
				Além de serem mais curtas, as funções de seta têm uma diferença
				importante na forma como lidam com o contexto de <code>this</code>, algo
				que exploraremos numa lição futura, mas que as torna extremamente úteis
				em muitas situações.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Callbacks: Funções como Argumentos
			</h3>
			<p className='mb-4'>
				Lembremos que em JavaScript as funções são "cidadãos de primeira
				classe". Isto significa que uma função pode ser passada como argumento
				para outra função.
			</p>
			<p className='mb-4'>
				Um <strong>callback</strong> é precisamente isso: uma função que é
				passada a outra função como argumento, para ser "chamada de volta"
				(executada) mais tarde.
			</p>
			<p className='mb-4'>
				<strong>Analogia:</strong> Imagine que pede uma pizza ao domicílio. Dá
				ao entregador o seu endereço (o "callback") e diz-lhe: "quando a pizza
				estiver pronta, leve-a a este endereço". Não fica à espera na porta.
				Continua com a sua vida, e o entregador "executa a entrega" (chama o seu
				callback) quando a tarefa principal (fazer a pizza) termina. Esta é a
				essência da programação assíncrona, onde os callbacks são cruciais.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// 'saudar' é uma função normal
function saudar(nome) {
  console.log(\`Olá, \${nome}\`);
}

// 'processarEntrada' é uma função que aceita um callback
function processarEntrada(callback) {
  const nome = "Ana";
  callback(nome); // Executamos o callback que nos foi passado
}

// Passamos a função 'saudar' como um callback para 'processarEntrada'
processarEntrada(saudar); // Mostra "Olá, Ana"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Arrow Functions e Callbacks: Uma Combinação Poderosa
			</h3>
			<p className='mb-4'>
				A sintaxe concisa das funções de seta torna-as perfeitas para serem
				usadas como callbacks, especialmente com os métodos de array que veremos
				a seguir.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Métodos de Array Comuns
			</h4>
			<p className='mb-4'>
				Muitos dos métodos mais úteis para trabalhar com arrays em JavaScript
				utilizam callbacks para definir a operação a realizar em cada elemento.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`.forEach()`:</strong> Executa uma função (callback) uma vez
					por cada elemento do array. É um substituto moderno do laço{" "}
					<code>for</code> para iterar sobre arrays.
					<CodeBlock
						language='javascript'
						codeString={`const nomes = ["Carlos", "Diana", "Eduardo"];

nomes.forEach(nome => {
  console.log(\`Bem-vindo, \${nome}\`);
});`}
					/>
				</li>
				<li>
					<strong>`.map()`:</strong> Cria um <strong>novo array</strong> com os
					resultados de chamar uma função (callback) para cada elemento do array
					original. É ideal para transformar dados.
					<CodeBlock
						language='javascript'
						codeString={`const numeros = [1, 2, 3, 4];
const dobros = numeros.map(numero => numero * 2);

console.log(dobros); // Mostra [2, 4, 6, 8]`}
					/>
				</li>
				<li>
					<strong>`.filter()`:</strong> Cria um <strong>novo array</strong> com
					todos os elementos que passam num teste (um callback que devolve{" "}
					<code>true</code> ou <code>false</code>).
					<CodeBlock
						language='javascript'
						codeString={`const idades = [15, 22, 18, 30, 12];
const maioresDeIdade = idades.filter(idade => idade >= 18);

console.log(maioresDeIdade); // Mostra [22, 18, 30]`}
					/>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Processador de Dados de Alunos
			</h3>
			<p className='mb-4'>
				Vamos aplicar estes conceitos para manipular uma lista de alunos. Copie
				o seguinte array para o início do seu ficheiro <code>main.js</code>:
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const alunos = [
  { nome: "Ana", nota: 90, curso: "Matemática" },
  { nome: "Luís", nota: 65, curso: "História" },
  { nome: "João", nota: 85, curso: "Matemática" },
  { nome: "Elena", nota: 75, curso: "Ciências" },
  { nome: "Carlos", nota: 50, curso: "Matemática" }
];`}
			/>
			<p className='mt-4'>Agora, realize as seguintes tarefas:</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Filtrar Aprovados:</strong> Use o método `.filter()` com uma
					arrow function para criar um novo array chamado{" "}
					<code>alunosAprovados</code> que contenha apenas os alunos com uma{" "}
					<code>nota</code> de 70 ou mais. Imprima o resultado na consola.
				</li>
				<li>
					<strong>Mapear Nomes:</strong> Use o método `.map()` com uma arrow
					function para criar um novo array chamado <code>nomesAlunos</code> que
					contenha apenas os nomes de todos os alunos do array original. Imprima
					o resultado na consola.
				</li>
				<li>
					<strong>Mensagem aos Aprovados:</strong> Use o método `.forEach()`
					sobre o array <code>alunosAprovados</code> que criou no primeiro
					passo. Para cada aluno aprovado, imprima uma mensagem na consola que
					diga: "Parabéns, [nome]! Aprovado(a) a [curso]".
				</li>
				<li>
					<strong>Desafio (Opcional):</strong> Use uma combinação de `.filter()`
					e `.map()` numa única linha (encadeamento de métodos) para criar um
					array com os nomes dos alunos de "Matemática" que foram aprovados.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture24Pt;
