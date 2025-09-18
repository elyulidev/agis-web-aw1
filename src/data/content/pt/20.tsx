import CodeBlock from "@/components/ui/code-block";

const Lecture20Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Armazenando Informação: O que são Variáveis?
			</h3>
			<p className='mb-4'>
				Imagine que está a cozinhar. Precisa de recipientes para guardar os seus
				ingredientes: uma tigela para a farinha, uma chávena para o açúcar, etc.
				Em programação, esses recipientes chamam-se <strong>variáveis</strong>.
				Uma variável é um contentor com um nome onde podemos armazenar dados
				para os usar e manipular mais tarde no nosso programa.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Declarando Variáveis: `let`, `const` e o porquê de não usar `var`
			</h3>
			<p className='mb-4'>
				No JavaScript moderno, temos duas formas principais de declarar
				variáveis: <code>let</code> e <code>const</code>.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`let`</h4>
			<p className='mb-4'>
				É usado para declarar variáveis cujo valor pode mudar (ser reatribuído)
				ao longo do programa.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`let pontuacao = 100;
console.log(pontuacao); // Mostra 100

pontuacao = 150; // O valor pode ser atualizado
console.log(pontuacao); // Mostra 150`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`const`</h4>
			<p className='mb-4'>
				É usado para declarar "constantes", ou seja, variáveis cujo valor não
				mudará uma vez atribuído. Se tentar reatribuir uma `const`, o JavaScript
				irá dar um erro.
			</p>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					Prática recomendada:
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Use <code>const</code> por defeito. Só mude para <code>let</code> se
					souber que precisará de reatribuir a variável. Isto torna o seu código
					mais seguro и previsível.
				</p>
			</div>
			<CodeBlock
				language='javascript'
				codeString={`const nome = "Ana";
console.log(nome); // Mostra "Ana"

// Isto irá gerar um erro: TypeError: Assignment to constant variable.
// nome = "Carlos";`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>E quanto ao `var`?</h4>
			<p className='mb-4'>
				<code>var</code> era a forma original de declarar variáveis em
				JavaScript. No entanto, tem um comportamento confuso com algo chamado
				"scope" (escopo), o que pode levar a erros difíceis de encontrar.{" "}
				<strong>
					No desenvolvimento moderno, é considerada uma prática obsoleta e
					recomenda-se evitar completamente o seu uso em favor de `let` e
					`const`.
				</strong>
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Tipos de Dados Primitivos
			</h3>
			<p className='mb-4'>
				O JavaScript tem vários tipos de dados fundamentais que podemos
				armazenar nas nossas variáveis.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>String (Cadeia de caracteres):</strong> Para texto. Escreve-se
					entre aspas simples (<code>' '</code>), aspas duplas (<code>" "</code>
					) ou crases (<code>` `</code>). As crases permitem incorporar
					variáveis facilmente, o que é conhecido como "template literals".
					<CodeBlock
						language='javascript'
						codeString={`const saudacao = "Olá";
const pessoa = 'Mundo';
const saudacaoCompleta = \`\${saudacao}, \${pessoa}!\`; // "Olá, Mundo!"`}
					/>
				</li>
				<li>
					<strong>Number (Número):</strong> Para qualquer tipo de número, sejam
					inteiros ou com casas decimais.
					<CodeBlock
						language='javascript'
						codeString={`const idade = 30;
const preco = 19.99;`}
					/>
				</li>
				<li>
					<strong>Boolean (Booleano):</strong> Só pode ter dois valores:{" "}
					<code>true</code> (verdadeiro) ou <code>false</code> (falso). É a base
					da lógica e da tomada de decisões.
					<CodeBlock
						language='javascript'
						codeString={`const eMaiorDeIdade = true;
const temDesconto = false;`}
					/>
				</li>
				<li>
					<strong>undefined:</strong> Uma variável que foi declarada mas à qual
					ainda não foi atribuído um valor.
					<CodeBlock
						language='javascript'
						codeString={`let proximoPasso;
console.log(proximoPasso); // Mostra undefined`}
					/>
				</li>
				<li>
					<strong>null:</strong> Representa a ausência intencional de qualquer
					valor. É um valor que nós atribuímos para indicar que "não há nada".
					<CodeBlock
						language='javascript'
						codeString={`let vencedor = null; // Ainda não há vencedor`}
					/>
				</li>
			</ul>
			<p className='mb-4'>
				Podemos verificar o tipo de uma variável usando o operador{" "}
				<code>typeof</code>.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const nome = "João";
console.log(typeof nome); // Mostra "string"

const idade = 25;
console.log(typeof idade); // Mostra "number"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Operadores: Realizando Ações
			</h3>
			<p className='mb-4'>
				Os operadores são símbolos que realizam operações sobre as nossas
				variáveis e valores.
			</p>
			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Operadores Aritméticos
			</h4>
			<p>Para fazer matemática.</p>
			<CodeBlock
				language='javascript'
				codeString={`const a = 10;
const b = 5;

console.log(a + b); // Soma: 15
console.log(a - b); // Subtração: 5
console.log(a * b); // Multiplicação: 50
console.log(a / b); // Divisão: 2
console.log(a % b); // Módulo (resto da divisão): 0
console.log(a ** b); // Exponenciação: 100000`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Operadores de Atribuição
			</h4>
			<p>Para atribuir valores às variáveis.</p>
			<CodeBlock
				language='javascript'
				codeString={`let x = 10;
x += 5; // Equivalente a x = x + 5. Agora x é 15.
x -= 3; // Equivalente a x = x - 3. Agora x é 12.
x *= 2; // Equivalente a x = x * 2. Agora x é 24.`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Operadores de Comparação
			</h4>
			<p>
				Para comparar valores. O resultado é sempre um booleano (
				<code>true</code> ou <code>false</code>).
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					Importante!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					Use sempre <code>===</code> (igualdade estrita) em vez de{" "}
					<code>==</code> (igualdade flexível). <code>===</code> verifica tanto
					o valor como o tipo, o que evita erros inesperados. O mesmo se aplica
					a <code>!==</code> (desigualdade estrita).
				</p>
			</div>
			<CodeBlock
				language='javascript'
				codeString={`const num = 5;
const str = "5";

console.log(num == str);  // true (compara apenas o valor) -> Evitar!
console.log(num === str); // false (compara valor E tipo) -> Usar sempre!

console.log(num > 3);   // true
console.log(num <= 5);  // true
console.log(num !== 10); // true`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Mini Perfil de Utilizador
			</h3>
			<p className='mb-4'>
				Vamos criar um pequeno script que define variáveis para um perfil de
				utilizador e as exibe na consola.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					No seu ficheiro <code>main.js</code> (ou crie um novo, se preferir),
					apague o conteúdo anterior.
				</li>
				<li>
					Declare as seguintes variáveis usando <code>const</code>:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							<code>nomeUtilizador</code> com o seu nome (string).
						</li>
						<li>
							<code>anoNascimento</code> com o seu ano de nascimento (number).
						</li>
						<li>
							<code>eEstudante</code> com um valor booleano que indique se é
							estudante ou não.
						</li>
					</ul>
				</li>
				<li>
					Declare uma variável com <code>let</code> chamada{" "}
					<code>idadeAtual</code>.
				</li>
				<li>
					Calcule a sua idade atual subtraindo <code>anoNascimento</code> do ano
					atual (pode usar 2024 como número fixo) e atribua o resultado a{" "}
					<code>idadeAtual</code>.
				</li>
				<li>
					Use <code>console.log()</code> e "template literals" (crases ``) para
					imprimir uma mensagem de boas-vindas na consola que inclua todas as
					variáveis. Por exemplo: "Bem-vindo [nomeUtilizador], tem [idadeAtual]
					anos e o seu estado de estudante é [eEstudante]".
				</li>
				<li>
					Use <code>console.log()</code> e o operador <code>typeof</code> para
					mostrar o tipo de dado de cada uma das variáveis que criou.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture20Pt;
