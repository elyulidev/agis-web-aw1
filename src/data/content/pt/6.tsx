import CodeBlock from "@/components/ui/code-block";

const Lecture6Pt = () => (
	<div className='space-y-8'>
		<section>
			<p>
				Chegamos à nossa sexta aula! Hoje, mergulhamos num dos elementos mais
				interativos e cruciais da web: os formulários. Os formulários são a
				principal ferramenta para os utilizadores nos enviarem informações,
				desde um simples login até um complexo processo de compra.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Elemento &lt;form&gt; e o seu Propósito
			</h3>
			<p className='mb-4'>
				A tag <code>&lt;form&gt;</code> é o contêiner de todos os elementos de
				um formulário. A sua função é agrupar os campos de entrada (
				<code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, etc.) e
				definir como e para onde a informação será enviada quando o utilizador
				pressionar o botão de envio.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Tags &lt;label&gt; e a sua Associação com os Campos
			</h3>
			<p className='mb-4'>
				Cada campo de entrada deve ter um rótulo associado para indicar que
				informação é esperada do utilizador. A tag <code>&lt;label&gt;</code> é
				semanticamente a forma correta de o fazer e é{" "}
				<strong>crucial para a acessibilidade</strong>, pois os leitores de ecrã
				anunciam-na quando o utilizador chega ao campo.
			</p>
			<p className='mb-4'>
				Para associar uma <code>&lt;label&gt;</code> a um campo, utiliza-se o
				atributo <code>for</code> na tag e o atributo <code>id</code> no campo
				de entrada. O valor de <code>for</code> deve ser exatamente o mesmo que
				o valor de <code>id</code>. Esta ligação também melhora a usabilidade:
				ao clicar no rótulo, o foco move-se automaticamente para o campo
				correspondente.
			</p>
			<CodeBlock
				language='html'
				codeString={`<form>
  <label for="nomeUtilizador">Nome:</label>
  <input type="text" id="nomeUtilizador" name="utilizador">
</form>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Campos de Entrada (&lt;input&gt;): Tipos Comuns
			</h3>
			<p className='mb-4'>
				A tag <code>&lt;input&gt;</code> é a mais versátil. É uma tag de
				autofechamento e o seu comportamento muda de acordo com o valor do seu
				atributo <code>type</code>.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<code>text</code>: Um campo de texto de uma linha (valor padrão).
				</li>
				<li>
					<code>email</code>: Específico para endereços de e-mail. Os
					navegadores podem validar o seu formato.
				</li>
				<li>
					<code>password</code>: Oculta os caracteres que o utilizador digita.
				</li>
				<li>
					<code>number</code>: Para entradas numéricas, com setas para
					incrementar/decrementar.
				</li>
				<li>
					<code>date</code>: Fornece uma interface de calendário para selecionar
					uma data.
				</li>
				<li>
					<code>color</code>: Exibe um seletor de cores.
				</li>
				<li>
					<code>file</code>: Permite ao utilizador selecionar um arquivo do seu
					dispositivo.
				</li>
				<li>
					<code>submit</code>: Cria um botão que envia os dados do formulário.
				</li>
				<li>
					<code>reset</code>: Cria um botão que repõe os campos aos seus valores
					iniciais.
				</li>
				<li>
					<code>search</code>: Semelhante a <code>text</code>, mas otimizado
					para pesquisas.
				</li>
				<li>
					<code>hidden</code>: Um campo não visível, útil para enviar dados
					adicionais.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<input type="email" id="email" name="email">
<input type="date" id="data_nasc" name="data_nasc">
<input type="submit" value="Enviar Formulário">`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Outros Campos de Formulário
			</h3>
			<p className='mb-4'>
				Além de <code>&lt;input&gt;</code>, existem outros elementos
				importantes:
			</p>
			<h4 className='text-xl font-semibold mt-6 mb-2'>&lt;textarea&gt;</h4>
			<p className='mb-4'>
				Para campos de texto de várias linhas, como comentários ou mensagens. Ao
				contrário de <code>&lt;input&gt;</code>, tem uma tag de abertura e
				fecho.
			</p>
			<CodeBlock
				language='html'
				codeString={`<label for="comentario">Comentário:</label>
<textarea id="comentario" name="comentario" rows="4" cols="50"></textarea>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				&lt;select&gt; (Lista suspensa)
			</h4>
			<p className='mb-4'>
				Cria um menu suspenso. Cada opção é definida com a tag{" "}
				<code>&lt;option&gt;</code>. As opções podem ser agrupadas com{" "}
				<code>&lt;optgroup&gt;</code>.
			</p>
			<CodeBlock
				language='html'
				codeString={`<label for="pais">País:</label>
<select id="pais" name="pais">
  <optgroup label="América do Sul">
    <option value="br">Brasil</option>
    <option value="ar">Argentina</option>
  </optgroup>
  <optgroup label="Europa">
    <option value="pt">Portugal</option>
    <option value="es">Espanha</option>
  </optgroup>
</select>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				5. Atributos Básicos e Importantes
			</h3>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>placeholder:</strong> Exibe um texto de ajuda dentro do campo
					que desaparece ao digitar.
				</li>
				<li>
					<strong>value:</strong> Define o valor inicial de um campo.
				</li>
				<li>
					<strong>name:</strong> O mais importante para o envio de dados!
					Atribui um nome ao campo, que será usado como a "chave" no par
					chave-valor enviado ao servidor.{" "}
					<strong>
						Sem o atributo <code>name</code>, o dado desse campo não é enviado.
					</strong>
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<input type="text" name="pesquisa" placeholder="Procurar produtos...">`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Formulário de Contato
			</h3>
			<p className='mb-4'>
				Chegou a hora de criar o seu primeiro formulário. Você construirá um
				formulário de contato básico, aplicando as tags e atributos que vimos.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Crie o Arquivo:</strong> Crie um novo arquivo chamado{" "}
					<code>contato.html</code>.
				</li>
				<li>
					<strong>Estrutura do Formulário:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Comece com uma tag <code>&lt;form&gt;</code>.
						</li>
						<li>
							Adicione um campo para o <strong>Nome</strong> (
							<code>type="text"</code>).
						</li>
						<li>
							Adicione um campo para o <strong>E-mail</strong> (
							<code>type="email"</code>).
						</li>
						<li>
							Adicione uma <strong>lista suspensa</strong> (
							<code>&lt;select&gt;</code>) para o "Motivo do Contato", com
							opções como "Consulta Geral", "Suporte Técnico" e "Sugestões".
						</li>
						<li>
							Adicione uma <strong>área de texto</strong> (
							<code>&lt;textarea&gt;</code>) para o utilizador escrever a sua
							mensagem.
						</li>
						<li>
							<strong>Associação Chave!</strong> Certifique-se de que cada campo
							tenha uma <code>&lt;label&gt;</code> associada corretamente usando
							os atributos <code>for</code> e <code>id</code>.
						</li>
						<li>
							Adicione um atributo <code>name</code> único e descritivo a cada
							campo que deve enviar dados (nome, e-mail, select, textarea).
						</li>
						<li>
							Utilize o atributo <code>placeholder</code> nos campos de texto e
							na textarea para guiar o utilizador.
						</li>
						<li>
							Finalize com um botão de <strong>Enviar</strong> (
							<code>type="submit"</code>) e um botão de <strong>Limpar</strong>{" "}
							(<code>type="reset"</code>).
						</li>
					</ul>
				</li>
				<li>
					<strong>Visualize:</strong> Abra <code>contato.html</code> com o Live
					Server. Clique nos rótulos para verificar se focam nos campos
					corretos.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture6Pt;
