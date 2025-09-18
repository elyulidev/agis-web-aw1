import CodeBlock from "@/components/ui/code-block";

const Lecture7Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Formulários II: Potenciando com Atributos de HTML5
			</h3>
			<p className='mb-4'>
				Na última lição do módulo de HTML, estabelecemos as bases dos
				formulários. Agora, vamos adicionar-lhes inteligência e robustez usando
				atributos de HTML5 que melhoram a experiência do utilizador e fornecem
				validação básica sem necessidade de JavaScript.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Atributos para Melhorar a Usabilidade e a Entrada de Dados
			</h3>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`placeholder`</strong>: Mostra um texto de exemplo no campo de
					entrada que desaparece quando o utilizador começa a escrever. É uma
					dica, não um rótulo.
					<CodeBlock
						language='html'
						codeString={`<input type="email" placeholder="seu@email.com">`}
					/>
				</li>
				<li>
					<strong>`disabled`</strong>: Desativa um campo de entrada. O
					utilizador не pode interagir com ele e o seu valor não é enviado com o
					formulário.
					<CodeBlock
						language='html'
						codeString={`<input type="text" value="Não editável" disabled>`}
					/>
				</li>
				<li>
					<strong>`readonly`</strong>: Semelhante a `disabled`, o utilizador não
					pode modificar o valor, mas o campo é enviado com o formulário.
					<CodeBlock
						language='html'
						codeString={`<input type="text" value="Valor de apenas leitura" readonly>`}
					/>
				</li>
				<li>
					<strong>`autocomplete`</strong>: Dá uma pista ao navegador sobre o
					tipo de informação esperada, permitindo-lhe preencher automaticamente
					o campo com dados guardados do utilizador (ex. "on", "off", "email",
					"name").
					<CodeBlock
						language='html'
						codeString={`<input type="email" name="email" autocomplete="email">`}
					/>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Validação Integrada no Navegador com HTML5
			</h3>
			<p className='mb-4'>
				O HTML5 introduziu atributos que permitem ao navegador validar os dados
				de um formulário antes de o enviar, mostrando mensagens de erro sem
				escrever uma única linha de JavaScript.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`required`</strong>: O atributo mais comum. Torna um campo
					obrigatório. O formulário não será enviado se o campo estiver vazio.
					<CodeBlock
						language='html'
						codeString={`<label for="nome">Nome:</label>
<input type="text" id="nome" name="nome" required>`}
					/>
				</li>
				<li>
					<strong>`minlength` e `maxlength`</strong>: Definem o número mínimo e
					máximo de caracteres permitidos num campo de texto.
					<CodeBlock
						language='html'
						codeString={`<label for="pass">Palavra-passe (8-16 caracteres):</label>
<input type="password" id="pass" name="pass" minlength="8" maxlength="16" required>`}
					/>
				</li>
				<li>
					<strong>`min` e `max`</strong>: Definem o valor numérico mínimo e
					máximo para campos do tipo `number` ou `date`.
					<CodeBlock
						language='html'
						codeString={`<label for="idade">Idade (18+):</label>
<input type="number" id="idade" name="idade" min="18" max="120">`}
					/>
				</li>
				<li>
					<strong>`pattern`</strong>: O mais potente. Permite especificar uma{" "}
					<strong>expressão regular</strong> que o valor do campo deve cumprir.
					É ideal para formatos personalizados como códigos postais ou números
					de telefone.
					<CodeBlock
						language='html'
						codeString={`<label for="cp">Código Postal (4 dígitos):</label>
<input type="text" id="cp" name="cp" pattern="[0-9]{4}" title="Por favor, introduza 4 dígitos numéricos.">`}
					/>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Introdução ao CSS: A Arte da Apresentação
			</h3>
			<p className='mb-4'>
				Dominámos a estrutura (HTML), agora é o momento de adicionar o estilo.{" "}
				<strong>
					CSS (Cascading Style Sheets - Folhas de Estilo em Cascata)
				</strong>{" "}
				é a linguagem que usamos para descrever a aparência dos elementos HTML.
			</p>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					Princípio Chave: Separação de Responsabilidades
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					O HTML encarrega-se do <strong>conteúdo e da estrutura</strong>. O CSS
					encarrega-se da <strong>apresentação e do design</strong>. Mantê-los
					separados torna o nosso código mais limpo, fácil de manter e mais
					acessível.
				</p>
			</div>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Anatomia de uma Regra CSS
			</h4>
			<p className='mb-4'>
				Uma regra CSS é composta por duas partes principais:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Seletor:</strong> Aponta para o elemento ou elementos HTML que
					quer estilizar.
				</li>
				<li>
					<strong>Bloco de Declaração:</strong> Contém uma ou mais declarações
					entre chavetas. Cada declaração inclui uma propriedade CSS e um valor,
					separados por dois pontos e terminados com um ponto e vírgula.
				</li>
			</ul>
			<div className='my-6 p-4 border rounded-lg bg-gray-50 dark:bg-gray-800/50'>
				<h5 className='font-semibold text-center mb-2'>
					Seletor {"{"} Propriedade: Valor; {"}"}
				</h5>
				<CodeBlock
					language='css'
					codeString={`h1 {
  color: blue;
  font-size: 24px;
}`}
				/>
				<p className='mt-2 text-center text-sm text-gray-600 dark:text-gray-400'>
					Esta regra seleciona todos os elementos `&lt;h1&gt;` e torna-os de cor
					azul e com 24 pixels de tamanho.
				</p>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Um Formulário Robusto
			</h3>
			<p className='mb-4'>
				É hora de aplicar estes novos conhecimentos. Pegue no formulário de
				contacto que criou no Módulo 1 e melhore-o.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Abra o seu ficheiro <code>contato.html</code>.
				</li>
				<li>
					Adicione o atributo <code>required</code> aos campos de nome e email
					para que sejam obrigatórios.
				</li>
				<li>
					No campo de mensagem (<code>&lt;textarea&gt;</code>), adicione um{" "}
					<code>minlength="10"</code> para garantir que a mensagem não é
					demasiado curta.
				</li>
				<li>
					Adicione um campo para o número de telefone. Use{" "}
					<code>type="tel"</code> e um atributo <code>pattern</code> для validar
					um formato simples (por exemplo, que contenha apenas números e tenha
					um comprimento específico). Não se esqueça de adicionar um atributo{" "}
					<code>title</code> para explicar o formato esperado.
				</li>
				<li>
					Teste o seu formulário. Tente enviá-lo vazio ou com dados incorretos.
					Deverá ver as mensagens de erro do navegador sem ter escrito nada de
					JavaScript.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture7Pt;
