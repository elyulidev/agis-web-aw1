import CodeBlock from "@/components/ui/code-block";

const Lecture21Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Tomando Decisões no Código
			</h3>
			<p className='mb-4'>
				Até agora, o nosso código é executado de forma linear, uma instrução
				após a outra. Mas os programas interessantes precisam de tomar decisões
				e seguir caminhos diferentes de acordo com certas condições. O
				utilizador está registado? A palavra-passe está correta? O produto tem
				stock? Para lidar com estas situações, usamos as estruturas de controlo
				condicionais.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. A Declaração `if...else`
			</h3>
			<p className='mb-4'>
				A estrutura condicional mais fundamental é o <code>if</code> (se).
				Permite executar um bloco de código apenas se uma condição específica
				for verdadeira (<code>true</code>).
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`if` básico</h4>
			<CodeBlock
				language='javascript'
				codeString={`const idade = 20;

if (idade >= 18) {
  console.log("É maior de idade. Pode entrar.");
}
// Se a idade fosse 15, este bloco de código nunca seria executado.`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Adicionando o `else`</h4>
			<p className='mb-4'>
				Muitas vezes, queremos que algo diferente aconteça se a condição for
				falsa (<code>false</code>). Para isso, adicionamos um bloco{" "}
				<code>else</code> (senão).
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const temperatura = 15;

if (temperatura > 25) {
  console.log("Está calor. Vista roupa leve!");
} else {
  console.log("Não está calor. É melhor levar um casaco.");
}`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Encadeando com `else if`
			</h4>
			<p className='mb-4'>
				Para lidar com múltiplas condições, podemos encadear blocos com{" "}
				<code>else if</code>. O JavaScript avaliará cada condição por ordem e
				executará o primeiro bloco cujo resultado seja <code>true</code>. Se
				nenhum for verdadeiro, executará o bloco <code>else</code> final (se
				existir).
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const nota = 75;

if (nota >= 90) {
  console.log("Excelente (A)");
} else if (nota >= 80) {
  console.log("Muito Bom (B)");
} else if (nota >= 70) {
  console.log("Bom (C)");
} else {
  console.log("Precisa de melhorar (F)");
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Operadores Lógicos: `&&`, `||`, `!`
			</h3>
			<p className='mb-4'>
				Para criar condições mais complexas, usamos os operadores lógicos.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`&&` (AND - E):</strong> Devolve <code>true</code> apenas se{" "}
					<strong>ambas</strong> as condições forem verdadeiras.
					<CodeBlock
						language='javascript'
						codeString={`const temCartaDeConducao = true;
const temCarro = false;

if (temCartaDeConducao && temCarro) {
  console.log("Pode conduzir."); // Não é executado
}`}
					/>
				</li>
				<li>
					<strong>`||` (OR - OU):</strong> Devolve <code>true</code> se{" "}
					<strong>pelo menos uma</strong> das condições for verdadeira.
					<CodeBlock
						language='javascript'
						codeString={`const eMembroPremium = true;
const temCupao = false;

if (eMembroPremium || temCupao) {
  console.log("Tem acesso a desconto."); // É executado
}`}
					/>
				</li>
				<li>
					<strong>`!` (NOT - NÃO):</strong> Inverte o valor booleano. Converte{" "}
					<code>true</code> em <code>false</code> e vice-versa.
					<CodeBlock
						language='javascript'
						codeString={`const estaChovendo = false;

if (!estaChovendo) {
  console.log("Está um bom dia para sair."); // É executado
}`}
					/>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. O Operador Ternário: um atalho para `if...else`
			</h3>
			<p className='mb-4'>
				Para condicionais simples que atribuem um valor a uma variável, o
				operador ternário é uma alternativa mais curta e elegante.
			</p>
			<p className='mb-4'>
				A sua sintaxe é:{" "}
				<code>condição ? valor_se_verdadeiro : valor_se_falso;</code>
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const idade = 19;

// Usando if...else
let tipoEntrada;
if (idade >= 18) {
  tipoEntrada = "Adulto";
} else {
  tipoEntrada = "Menor";
}

// Usando o operador ternário (mais conciso)
const tipoEntradaTernario = idade >= 18 ? "Adulto" : "Menor";

console.log(tipoEntradaTernario); // Mostra "Adulto"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>5. A Declaração `switch`</h3>
			<p className='mb-4'>
				Quando precisa de comparar uma única variável com muitos valores
				possíveis, uma longa cadeia de <code>if...else if</code> pode tornar-se
				difícil de ler. A declaração <code>switch</code> é uma alternativa mais
				limpa nestes casos.
			</p>
			<p className='mb-4'>
				Compara uma expressão com diferentes <code>case</code> (casos). Quando
				encontra uma correspondência, executa o código e a declaração{" "}
				<code>break</code> pára a execução. O bloco <code>default</code> é
				opcional e é executado se não houver nenhuma correspondência.
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					Não se esqueça do `break`!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					Se omitir o <code>break</code>, o código continuará a ser executado
					nos `case` seguintes até encontrar um <code>break</code> ou terminar o{" "}
					<code>switch</code>, o que geralmente é um erro.
				</p>
			</div>
			<CodeBlock
				language='javascript'
				codeString={`const diaDaSemana = "terça";

switch (diaDaSemana) {
  case "segunda":
    console.log("Começa a semana!");
    break;
  case "sexta":
    console.log("Quase fim de semana!");
    break;
  case "sábado":
  case "domingo":
    console.log("Aproveite o fim de semana!");
    break;
  default:
    console.log("É um dia normal de trabalho.");
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Classificador de Idades
			</h3>
			<p className='mb-4'>
				Vamos criar um script que pergunta ao utilizador a sua idade e lhe diz
				em que categoria de vida se encontra.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					No seu ficheiro <code>main.js</code>, utilize a função{" "}
					<code>prompt()</code> para perguntar ao utilizador a sua idade. Guarde
					o resultado numa variável. Por exemplo:{" "}
					<code>let idadeInput = prompt("Qual é a sua idade?");</code>
				</li>
				<li>
					O valor que o <code>prompt()</code> devolve é sempre uma string.
					Precisamos de o converter para número. Use a função{" "}
					<code>parseInt()</code>:{" "}
					<code>let idade = parseInt(idadeInput);</code>
				</li>
				<li>
					Agora, escreva uma estrutura <code>if...else if...else</code> que faça
					o seguinte:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Se a idade for menor que 0, mostre um alerta (<code>alert()</code>
							) a dizer "Idade inválida".
						</li>
						<li>Se a idade estiver entre 0 e 12, mostre "É uma criança".</li>
						<li>
							Se a idade estiver entre 13 e 18, mostre "É um adolescente".
						</li>
						<li>Se a idade estiver entre 19 e 64, mostre "É um adulto/a".</li>
						<li>Se a idade for 65 ou maior, mostre "É um idoso/a".</li>
					</ul>
				</li>
				<li>
					Adicione uma verificação no início. Se o utilizador introduzir algo
					que não seja um número (<code>parseInt</code> devolverá{" "}
					<code>NaN</code> - Not a Number), mostre um alerta a dizer "Por favor,
					introduza um número válido". Pode verificar se um valor é{" "}
					<code>NaN</code> com a função <code>isNaN(variavel)</code>.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture21Pt;
