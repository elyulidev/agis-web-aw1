import CodeBlock from "@/components/ui/code-block";

const Lecture38Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Relembrando Dados entre Visitas
			</h3>
			<p className='mb-4'>
				Até agora, cada vez que recarregamos a página, toda a informação do
				nosso JavaScript é perdida. As variáveis são reiniciadas. Mas, e se
				quiséssemos lembrar as preferências de um utilizador, o conteúdo do seu
				carrinho de compras ou se ele já iniciou sessão? Para isto, precisamos
				do <strong>armazenamento do lado do cliente</strong>.
			</p>
			<p>
				Hoje aprenderemos a guardar dados diretamente no navegador do utilizador
				e a trabalhar com JSON, o formato de dados padrão para a web.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. JSON: A Linguagem Universal dos Dados
			</h3>
			<p className='mb-4'>
				<strong>JSON (JavaScript Object Notation)</strong> é um formato de texto
				leve para a troca de dados. Embora derive da sintaxe de objetos do
				JavaScript, é um padrão independente da linguagem. É a forma mais comum
				como as APIs devolvem informação.
			</p>
			<p className='mb-4'>
				Parece quase idêntico a um objeto de JavaScript, mas com uma regra
				chave: <strong>as chaves também devem estar entre aspas duplas</strong>.
			</p>
			<CodeBlock
				language='json'
				codeString={`{
  "nome": "João Silva",
  "idade": 30,
  "eAtivo": true,
  "cursos": ["HTML", "CSS", "JavaScript"]
}`}
			/>
			<h4 className='text-xl font-semibold mt-6 mb-2'>Conversão: JS ↔ JSON</h4>
			<p className='mb-4'>
				O JavaScript dá-nos dois métodos essenciais para trabalhar com JSON:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`JSON.stringify(objetoJS)`</strong>: Converte um objeto ou
					valor de JavaScript numa <strong>string de texto JSON</strong>. Isto é
					necessário para enviar dados para um servidor ou guardá-los no
					`localStorage`.
				</li>
				<li>
					<strong>`JSON.parse(stringJSON)`</strong>: Faz o oposto. Converte uma
					string de texto JSON num{" "}
					<strong>objeto ou valor de JavaScript</strong>.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`const utilizador = { nome: "Elena", id: 123 };

// Converter para string JSON
const utilizadorJSON = JSON.stringify(utilizador);
console.log(utilizadorJSON); // Mostra '{"nome":"Elena","id":123}'

// Converter de volta para objeto JS
const utilizadorObjeto = JSON.parse(utilizadorJSON);
console.log(utilizadorObjeto.nome); // Mostra "Elena"`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Armazenamento Persistente: `localStorage`
			</h3>
			<p className='mb-4'>
				O objeto <code>localStorage</code> é uma API do navegador que nos
				permite guardar dados de forma persistente (mesmo que o navegador seja
				fechado) para um domínio específico. Os dados não têm data de validade.
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					Importante!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					<code>localStorage</code> só pode armazenar{" "}
					<strong>strings de texto</strong>. Por isso é crucial usar{" "}
					<code>JSON.stringify()</code> antes de guardar objetos e{" "}
					<code>JSON.parse()</code> depois de os ler.
				</p>
			</div>
			<h4 className='text-xl font-semibold mt-6 mb-2'>Métodos Principais</h4>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`localStorage.setItem('chave', 'valor')`</strong>: Guarda um
					par chave-valor.
				</li>
				<li>
					<strong>`localStorage.getItem('chave')`</strong>: Recupera o valor
					associado a uma chave. Devolve <code>null</code> se a chave não
					existir.
				</li>
				<li>
					<strong>`localStorage.removeItem('chave')`</strong>: Remove um item
					específico.
				</li>
				<li>
					<strong>`localStorage.clear()`</strong>: Remove todos os dados
					guardados para esse domínio.
				</li>
			</ul>
			<CodeBlock
				language='javascript'
				codeString={`const preferencias = { tema: "escuro", notificacoes: true };

// Guardar no localStorage
localStorage.setItem('preferenciasUtilizador', JSON.stringify(preferencias));

// Ler do localStorage noutra visita
const prefsGuardadasJSON = localStorage.getItem('preferenciasUtilizador');
const prefsGuardadas = JSON.parse(prefsGuardadasJSON);

if (prefsGuardadas) {
  console.log(prefsGuardadas.tema); // Mostra "escuro"
}

// Remover o item
// localStorage.removeItem('preferenciasUtilizador');`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Guardando as Preferências do Utilizador
			</h3>
			<p className='mb-4'>
				Vamos criar um pequeno formulário de configuração que guarde as
				preferências do utilizador no <code>localStorage</code> e as carregue
				cada vez que a página é visitada.
			</p>
			<p>1. Crie um ficheiro HTML com um formulário de configuração:</p>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html lang="pt">
<head><title>Configurações</title></head>
<body>
  <h1>Configurações</h1>
  <form id="config-form">
    <label for="username">Nome de Utilizador:</label>
    <input type="text" id="username" name="username">
    <br><br>
    <label for="theme">Tema:</label>
    <select id="theme" name="theme">
      <option value="claro">Claro</option>
      <option value="escuro">Escuro</option>
    </select>
    <br><br>
    <button type="submit">Guardar</button>
  </form>
  <script src="main.js"></script>
</body>
</html>`}
			/>
			<p className='mt-4'>
				2. No seu ficheiro JavaScript, divida a lógica em duas partes:
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Guardar ao Submeter:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Adicione um ouvinte ao evento <code>submit</code> do formulário.
						</li>
						<li>Dentro do ouvinte, previna o comportamento padrão.</li>
						<li>
							Crie um objeto com os valores do nome de utilizador e do tema
							selecionado.
						</li>
						<li>
							Converta este objeto para uma string JSON usando{" "}
							<code>JSON.stringify()</code>.
						</li>
						<li>
							Guarde a string JSON no <code>localStorage</code> com a chave{" "}
							<code>'configUtilizador'</code>.
						</li>
						<li>
							Mostre um <code>alert</code> que diga "Configurações guardadas".
						</li>
					</ul>
				</li>
				<li>
					<strong>Carregar ao Iniciar:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Fora do ouvinte (no início do script), tente obter o item{" "}
							<code>'configUtilizador'</code> do <code>localStorage</code>.
						</li>
						<li>
							Verifique se existe. Se não for <code>null</code>:
						</li>
						<li>
							Use <code>JSON.parse()</code> para converter a string de volta
							para um objeto.
						</li>
						<li>
							Use os valores deste objeto para preencher os campos do
							formulário. Desta forma, da próxima vez que o utilizador visitar a
							página, verá as suas preferências já selecionadas.
						</li>
					</ul>
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture38Pt;
