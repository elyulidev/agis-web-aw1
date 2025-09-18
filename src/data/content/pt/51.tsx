import CodeBlock from "@/components/ui/code-block";

const Lecture51Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Parabéns, chegou ao fim!
			</h3>
			<p className='mb-4'>
				Este é o final da nossa jornada estruturada, mas o começo da sua
				carreira como programador web. Percorreu um longo caminho: desde
				escrever a sua primeira tag HTML até construir aplicações interativas e
				persistentes com JavaScript. É uma conquista imensa!
			</p>
			<p className='mb-4'>
				Uma das coisas mais importantes que deve saber é que o JavaScript é uma
				linguagem viva. É padronizada por uma organização chamada ECMA através
				de uma especificação chamada <strong>ECMAScript</strong>. Todos os anos,
				sai uma nova versão com melhorias. A atualização mais revolucionária foi
				a <strong>ECMAScript 2015</strong>, comummente conhecida como{" "}
				<strong>ES6</strong>, que modernizou a linguagem de forma fundamental.
			</p>
			<p>
				Nesta última lição, vamos consolidar algumas características do ES6+ que
				já viu e apresentar-lhe outras que são cruciais no desenvolvimento
				moderno, além de lhe dar um mapa para os seus próximos passos.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Uma Olhadela às Características Chave do ES6+
			</h3>
			<p className='mb-4'>
				Muitas das "boas práticas" que usámos baseiam-se no ES6.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`let` e `const`</strong>: Já sabe por que são superiores ao
					`var` graças ao escopo de bloco.
				</li>
				<li>
					<strong>Funções de Seta (`=&gt;`)</strong>: Sintaxe mais concisa e um
					tratamento previsível do `this`.
				</li>
				<li>
					<strong>
						Template Literals (<code>` `</code>)
					</strong>
					: Permitem incorporar expressões e variáveis em strings de uma forma
					muito mais limpa.
				</li>
			</ul>
			<p>Agora, vejamos algumas ferramentas novas e poderosas:</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Desestruturação (Destructuring)
			</h4>
			<p className='mb-4'>
				Uma sintaxe que permite "desempacotar" valores de arrays ou objetos em
				variáveis distintas.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const utilizador = { nome: 'Carlos', idade: 30 };
// Antes:
// const nome = utilizador.nome;
// const idade = utilizador.idade;

// Com desestruturação:
const { nome, idade } = utilizador;
console.log(nome); // 'Carlos'

const numeros = [10, 20, 30];
// Antes:
// const primeiro = numeros[0];
// Com desestruturação:
const [primeiro, segundo] = numeros;
console.log(primeiro); // 10`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Operadores Spread e Rest (`...`)
			</h4>
			<p className='mb-4'>
				O mesmo operador de três pontos tem dois usos opostos, dependendo do
				contexto.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Spread (Espalhar):</strong> Expande os elementos de um array
					ou objeto. É perfeito para fazer cópias ou combinar.
				</li>
				<li>
					<strong>Rest (Agrupar):</strong> Agrupa múltiplos elementos ou
					argumentos num único array. É muito útil em funções.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`// Spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Rest
function somar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}
console.log(somar(1, 2, 3, 4)); // 10`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Parâmetros Padrão</h4>
			<p className='mb-4'>
				Podemos atribuir valores padrão aos parâmetros de uma função, que serão
				usados se não for fornecido um argumento.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`function saudar(nome = 'Convidado') {
  console.log(\`Olá, \${nome}\`);
}
saudar('Ana'); // Olá, Ana
saudar();      // Olá, Convidado`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. O Ecossistema Moderno: O Que Vem a Seguir?
			</h3>
			<p className='mb-4'>
				Construiu uma base sólida de JavaScript "vanilla" (puro). Agora, está
				pronto para explorar o ecossistema que se constrói sobre esta base.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Frameworks e Bibliotecas Frontend
			</h4>
			<p className='mb-4'>
				Ferramentas como <strong>React</strong>, <strong>Angular</strong> e{" "}
				<strong>Vue</strong> são o padrão da indústria para construir interfaces
				de utilizador complexas. Elas não substituem o JavaScript; utilizam-no
				para criar "componentes" reutilizáveis (como um botão ou um cartão de
				produto) e gerir o estado da aplicação de forma eficiente.{" "}
				<strong>React</strong> é atualmente a biblioteca mais popular e um
				excelente próximo passo na sua aprendizagem.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				JavaScript no Backend: Node.js
			</h4>
			<p className='mb-4'>
				O JavaScript não vive apenas no navegador. <strong>Node.js</strong> é um
				ambiente de execução que lhe permite correr JavaScript num servidor. Com
				o Node.js, pode construir APIs, gerir bases de dados e criar aplicações
				web completas usando uma única linguagem.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Supersets: TypeScript</h4>
			<p className='mb-4'>
				À medida que os projetos crescem, manter o código torna-se um desafio. O{" "}
				<strong>TypeScript</strong> é um "superset" do JavaScript (criado pela
				Microsoft) que adiciona um sistema de tipos estáticos. Isto permite-lhe
				definir que tipo de dado é uma variável (string, number, etc.), ajudando
				a prevenir erros antes que ocorram e melhorando drasticamente o
				autocompletar e a manutenibilidade do código.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Módulos de ES6 (`import`/`export`)
			</h4>
			<p className='mb-4'>
				Em aplicações reais, não escrevemos todo o nosso código num único
				ficheiro. Dividimo-lo em ficheiros mais pequenos e manejáveis chamados{" "}
				<strong>módulos</strong>. O ES6 introduziu uma sintaxe padrão para isto:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					Usa <code>export</code> para tornar uma função, variável ou classe de
					um ficheiro disponível para outros.
				</li>
				<li>
					Usa <code>import</code> para trazer essas funcionalidades para outro
					ficheiro que precise delas.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`// Em helpers.js
export const somar = (a, b) => a + b;

// Em main.js
import { somar } from './helpers.js';
console.log(somar(5, 5)); // 10`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa Final: Consolidação e Exploração
			</h3>
			<p className='mb-4'>
				A sua última tarefa é dupla: aplicar alguns dos novos conceitos e
				começar a olhar para o futuro.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					{/* FIX: Escaped curly braces in the <code> tag to prevent JSX parsing errors. The code string was being interpreted as a JavaScript object. */}
					<strong>Refatore com Desestruturação:</strong> Volte ao seu projeto do
					carrinho de compras. Encontre a função onde renderiza os itens do
					carrinho. Em vez de aceder a `item.nome`, `item.preco`, etc., use
					desestruturação no início do ciclo:{" "}
					<code>
						const {"{"} nome, preco, quantidade {"}"} = item;
					</code>
					.
				</li>
				<li>
					<strong>Função com Operador Rest:</strong> Crie uma pequena função
					chamada `calcularMedia` que aceite qualquer número de argumentos
					usando o operador rest (`...`). A função deve calcular e devolver a
					média de todos os números passados. Teste-a com diferentes quantidades
					de argumentos.
				</li>
				<li>
					<strong>Investigue sobre React:</strong> Dedique 15-20 minutos a
					investigar o que é o React. Leia a página inicial de{" "}
					<a
						href='https://react.dev'
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-500 hover:underline'
					>
						react.dev
					</a>
					. Num comentário no seu ficheiro JS, escreva um parágrafo breve com as
					suas próprias palavras a explicar o que é o React e para que acha que
					serve.
				</li>
			</ol>
			<p className='mt-6 font-bold text-lg text-center'>
				Obrigado pela sua dedicação neste curso e muito sucesso na sua incrível
				jornada como programador web!
			</p>
		</section>
	</div>
);

export default Lecture51Pt;
