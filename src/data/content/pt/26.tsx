import CodeBlock from "@/components/ui/code-block";

const Lecture26Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Um Novo Paradigma: Programação Orientada a Objetos (POO)
			</h3>
			<p className='mb-4'>
				Aprendemos sobre variáveis, tipos de dados, condicionais, laços e
				funções. Agora, vamos organizar tudo isso de uma forma muito mais
				estruturada e escalável. A{" "}
				<strong>Programação Orientada a Objetos (POO)</strong> é um paradigma ou
				estilo de programação que se baseia no conceito de "objetos" para
				representar entidades do mundo real (como um utilizador, um produto, um
				carro) e as suas interações.
			</p>
			<p>
				Um objeto em JavaScript é uma coleção de propriedades (variáveis) e
				métodos (funções) relacionados. A POO ajuda-nos a escrever código mais
				modular, reutilizável e fácil de entender. A porta de entrada para este
				mundo é entender uma das palavras-chave mais confusas, mas poderosas, do
				JavaScript: <code>this</code>.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. O Mistério de `this`: Quem sou eu?
			</h3>
			<p className='mb-4'>
				A palavra-chave <code>this</code> refere-se ao{" "}
				<strong>contexto de execução</strong>. O seu valor é determinado por
				como a função é chamada, não por onde é definida.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				`this` no Contexto Global
			</h4>
			<p>
				Fora de qualquer função, <code>this</code> refere-se ao objeto global (
				<code>window</code> nos navegadores).
			</p>
			<CodeBlock
				language='javascript'
				codeString={`console.log(this); // Mostra o objeto Window`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				`this` num Método de Objeto
			</h4>
			<p>
				Quando uma função é chamada como um método de um objeto,{" "}
				<code>this</code> refere-se ao objeto que contém o método.{" "}
				<strong>Este é o uso mais importante para a POO.</strong>
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const pessoa = {
  nome: "Maria",
  saudar: function() {
    // Aqui, 'this' refere-se ao objeto 'pessoa'
    console.log(\`Olá, o meu nome é \${this.nome}\`);
  }
};

pessoa.saudar(); // Mostra "Olá, o meu nome é Maria"`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				`this` em Arrow Functions: A Solução Léxica
			</h4>
			<p className='mb-4'>
				Ao contrário das funções normais, as funções de seta{" "}
				<strong>
					não têm o seu próprio contexto <code>this</code>
				</strong>
				. Elas herdam o <code>this</code> do escopo em que foram criadas (o que
				se chama de escopo léxico). Isto resolve muitos problemas comuns.
			</p>

			<h5 className='text-lg font-semibold mt-4 mb-2'>
				Exemplo num Objeto Literal:
			</h5>
			<CodeBlock
				language='javascript'
				codeString={`const equipa = {
  nome: "Guerreiros do Código",
  membros: ["Ana", "Luís", "Elena"],
  apresentarMembros: function() {
    // 'this' aqui é o objeto 'equipa'
    console.log(\`Equipa: \${this.nome}\`);

    this.membros.forEach(membro => {
      // Graças à arrow function, 'this' aqui continua a ser o objeto 'equipa'.
      // Não perde o contexto como uma função normal faria.
      console.log(\`- \${membro} faz parte de \${this.nome}\`);
    });
  }
};

equipa.apresentarMembros();`}
			/>

			<h5 className='text-lg font-semibold mt-4 mb-2'>
				Exemplo numa Classe (com `setInterval`):
			</h5>
			<p>
				Um caso clássico onde `this` se perde é com funções como `setInterval`.
				Uma arrow function resolve-o elegantemente.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`class Cronometro {
  constructor(nome) {
    this.nome = nome;
    this.segundos = 0;
    this.timerId = null;
  }

  iniciar() {
    // 'this' aqui é a instância de Cronometro
    this.timerId = setInterval(() => {
      // Graças à arrow function, 'this' dentro de setInterval
      // continua a ser a instância de Cronometro. Com uma função normal,
      // 'this' seria o objeto 'window' e isto falharia.
      this.segundos++;
      console.log(\`\${this.nome}: \${this.segundos}s\`);
    }, 1000);
  }

  parar() {
    clearInterval(this.timerId);
    console.log(\`\${this.nome} parado.\`);
  }
}

const meuCronometro = new Cronometro("Temporizador de estudo");
// Descomente para testar: meuCronometro.iniciar();`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Manipulando `this` Explicitamente: `call`, `apply` e `bind`
			</h3>
			<p className='mb-4'>
				Às vezes, precisamos de controlar manualmente a que o <code>this</code>{" "}
				se refere. O JavaScript oferece-nos três métodos para isso, que estão
				disponíveis em todas as funções.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				`.call(thisArg, arg1, arg2, ...)`
			</h4>
			<p className='mb-4'>
				Invoca uma função imediatamente, especificando um valor para{" "}
				<code>this</code> e passando os argumentos individualmente.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const apresentador = {
  nome: "Alex",
  saudar: function(evento) {
    console.log(\`Olá, sou o \${this.nome} e estou no evento \${evento}.\`);
  }
};

const outroApresentador = { nome: "Sofia" };

// Usamos .call() para que 'outroApresentador' "peça emprestado" o método 'saudar'.
apresentador.saudar.call(outroApresentador, "WebConf 2024");
// Mostra: "Olá, sou a Sofia e estou no evento WebConf 2024."`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				`.apply(thisArg, [argsArray])`
			</h4>
			<p className='mb-4'>
				É idêntico ao <code>.call()</code>, mas os argumentos são passados como
				um array.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`// Usando os mesmos objetos de antes
apresentador.saudar.apply(outroApresentador, ["MusicFest Live"]);
// Mostra: "Olá, sou a Sofia e estou no evento MusicFest Live."`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`.bind(thisArg)`</h4>
			<p className='mb-4'>
				Não invoca a função imediatamente. Em vez disso, cria uma{" "}
				<strong>nova função</strong> com o valor de <code>this</code> "fixo" ou
				"vinculado" permanentemente. É extremamente útil para callbacks ou
				eventos onde o contexto pode ser perdido.
			</p>
			<CodeBlock
				language='javascript'
				codeString={`const utilizador = {
  nome: "Daniel",
  handleClick: function() {
    console.log(\`\${this.nome} clicou!\`);
  }
};

// Com .bind(), criamos uma nova função onde 'this' SEMPRE será 'utilizador'.
const manipuladorCliqueVinculado = utilizador.handleClick.bind(utilizador);

// Imaginemos que passamos 'manipuladorCliqueVinculado' para um botão.
// Ao clicar, será executado corretamente.
// Para demonstrar, chamamo-lo diretamente:
manipuladorCliqueVinculado(); // Mostra: "Daniel clicou!"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Classes em ES6: O Molde para Criar Objetos
			</h3>
			<p className='mb-4'>
				Antes do ES6, criar "moldes" para objetos era mais complicado. Agora,
				temos a palavra-chave <code>class</code>, que é "açúcar sintático" sobre
				o sistema de protótipos do JavaScript, tornando a sintaxe muito mais
				clara e familiar para quem vem de outras linguagens de POO.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Classe:</strong> Um molde ou modelo para criar objetos.
				</li>
				<li>
					<strong>Construtor:</strong> Um método especial chamado{" "}
					<code>constructor</code> que é executado automaticamente quando uma
					nova instância da classe é criada. É usado para inicializar as
					propriedades do objeto.
				</li>
				<li>
					<strong>Instância:</strong> Um objeto criado a partir de uma classe.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`class Veiculo {
  // O construtor é executado quando fazemos 'new Veiculo()'
  constructor(marca, modelo) {
    // 'this' refere-se à nova instância que está a ser criada
    this.marca = marca;
    this.modelo = modelo;
    this.velocidade = 0;
  }

  // Métodos da classe
  acelerar(quantidade) {
    this.velocidade += quantidade;
    console.log(\`Acelerando. Velocidade atual: \${this.velocidade} km/h\`);
  }

  travar(quantidade) {
    this.velocidade -= quantidade;
    console.log(\`Travando. Velocidade atual: \${this.velocidade} km/h\`);
  }
}

// Criar instâncias (objetos) da classe Veiculo
const meuCarro = new Veiculo("Toyota", "Corolla");
const minhaMoto = new Veiculo("Honda", "CBR");

meuCarro.acelerar(50); // Mostra "Acelerando. Velocidade atual: 50 km/h"
minhaMoto.acelerar(80);  // Mostra "Acelerando. Velocidade atual: 80 km/h"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				5. Herança: Criando Classes Especializadas
			</h3>
			<p className='mb-4'>
				A herança é um pilar da POO que nos permite criar uma nova classe
				(classe filha ou subclasse) que herda propriedades e métodos de uma
				classe existente (classe pai ou superclasse). Isto promove a
				reutilização de código.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`extends`</strong>: A palavra-chave para indicar que uma
					classe herda de outra.
				</li>
				<li>
					<strong>`super()`</strong>: Dentro do construtor de uma classe filha,{" "}
					<code>super()</code> chama o construtor da classe pai. É obrigatório
					chamá-lo antes de poder usar <code>this</code> no construtor da filha.
				</li>
			</ul>

			<CodeBlock
				language='javascript'
				codeString={`// A classe pai é Veiculo (definida acima)

// CarroEletrico é uma classe filha que herda de Veiculo
class CarroEletrico extends Veiculo {
  constructor(marca, modelo, autonomia) {
    // 1. Chama o construtor do pai (Veiculo)
    super(marca, modelo);

    // 2. Adiciona propriedades específicas da classe filha
    this.autonomia = autonomia;
  }

  // Método específico da classe filha
  mostrarAutonomia() {
    console.log(\`Autonomia restante: \${this.autonomia} km\`);
  }

  // Também podemos sobrescrever um método do pai
  acelerar(quantidade) {
    super.acelerar(quantidade); // Chama o método acelerar() original do pai
    console.log("O motor elétrico zune silenciosamente.");
  }
}

const meuTesla = new CarroEletrico("Tesla", "Model S", 500);
meuTesla.acelerar(100);
meuTesla.mostrarAutonomia();`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				6. Tarefa: Modelando Produtos de uma Loja
			</h3>
			<p className='mb-4'>
				Vamos aplicar tudo o que aprendemos para modelar a estrutura de produtos
				numa loja online.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Criar a Classe Pai `Produto`</strong>:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Defina uma classe chamada <code>Produto</code>.
						</li>
						<li>
							No <code>constructor</code>, deve aceitar três parâmetros:{" "}
							<code>nome</code>, <code>preco</code> e <code>stock</code>.
							Atribua-os a propriedades do objeto usando <code>this</code>.
						</li>
						<li>
							Adicione um método chamado <code>getInfo()</code> que devolva uma
							string com a informação do produto, por exemplo: "Produto:
							Portátil, Preço: €1200, Stock: 10".
						</li>
					</ul>
				</li>
				<li>
					<strong>Criar a Subclasse `Livro`</strong>:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Defina uma nova classe <code>Livro</code> que{" "}
							<strong>herda</strong> de <code>Produto</code> usando{" "}
							<code>extends</code>.
						</li>
						<li>
							O <code>constructor</code> de <code>Livro</code> deve aceitar{" "}
							<code>nome</code>, <code>preco</code>, <code>stock</code> e um
							parâmetro adicional: <code>autor</code>.
						</li>
						<li>
							Dentro do construtor, use <code>super()</code> para chamar o
							construtor de <code>Produto</code> e passar-lhe os parâmetros
							necessários. Depois, inicialize a propriedade <code>autor</code>.
						</li>
						<li>
							<strong>Sobrescreva</strong> o método <code>getInfo()</code> na
							classe <code>Livro</code>. Este novo método deve primeiro chamar o
							método <code>getInfo()</code> do pai (usando{" "}
							<code>super.getInfo()</code>) e depois adicionar a informação do
							autor. Por exemplo: "Produto: Dom Quixote, Preço: €25, Stock: 50,
							Autor: Miguel de Cervantes".
						</li>
					</ul>
				</li>
				<li>
					<strong>Criar Instâncias e Testar</strong>:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Crie uma instância de <code>Produto</code> (ex. um teclado).
						</li>
						<li>
							Crie uma instância de <code>Livro</code>.
						</li>
						<li>
							Chame o método <code>getInfo()</code> de cada objeto e mostre os
							resultados na consola para verificar que tudo funciona
							corretamente.
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture26Pt;
