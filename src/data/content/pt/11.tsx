import CodeBlock from "@/components/ui/code-block";

const Lecture11Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Resolvendo o Mistério: Porque é que o meu CSS não funciona?
			</h3>
			<p className='mb-4'>
				Chegámos a uma das lições mais importantes e, muitas vezes, confusas do
				CSS. Já sabemos como escrever regras básicas, mas o que acontece quando
				duas ou mais regras apontam para o mesmo elemento e definem a mesma
				propriedade com valores diferentes?
			</p>
			<p className='mb-4'>
				O navegador não se confunde; ele segue um algoritmo estrito para
				determinar que regra "ganha". Entender a{" "}
				<strong>Cascata, a Especificidade e a Herança</strong> é a chave para
				deixar de lutar contra o seu CSS e começar a controlá-lo com precisão.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Aprofundando a Cascata e a Herança
			</h3>
			<p className='mb-4'>
				Estes dois conceitos, que introduzimos brevemente, formam a base de como
				os estilos fluem.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Cascata:</strong> Refere-se à ordem em que as regras são
					declaradas. Se todas as outras condições forem iguais,{" "}
					<strong>a última regra declarada ganha</strong>. Isto significa que a
					ordem das suas tags <code>&lt;link&gt;</code> no HTML ou a ordem das
					regras dentro de um ficheiro CSS é crucial.
				</li>
				<li>
					<strong>Herança:</strong> Lembre-se que os elementos filhos herdam
					certas propriedades dos seus pais, como <code>color</code> e{" "}
					<code>font-family</code>. Se não aplicar uma cor a um{" "}
					<code>&lt;p&gt;</code>, ele assumirá a cor do seu pai, por exemplo, o{" "}
					<code>&lt;body&gt;</code>.
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Especificidade: O Sistema de Pontuação do CSS
			</h3>
			<p className='mb-4'>
				Quando a ordem não é suficiente para desempatar, o navegador calcula a{" "}
				<strong>especificidade</strong> de cada seletor. O seletor com a
				pontuação mais alta ganha, independentemente da ordem. Podemos imaginar
				um sistema de pontos:
			</p>
			<ul className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>
						Estilos em linha (<code>style="..."</code>):
					</strong>{" "}
					1000 pontos. São os mais poderosos.
				</li>
				<li>
					<strong>
						IDs (<code>#id</code>):
					</strong>{" "}
					100 pontos por cada ID no seletor.
				</li>
				<li>
					<strong>
						Classes (<code>.classe</code>), Atributos (<code>[type="..."]</code>
						), Pseudo-classes (<code>:hover</code>):
					</strong>{" "}
					10 pontos por cada um.
				</li>
				<li>
					<strong>
						Elementos (<code>div</code>, <code>p</code>), Pseudo-elementos (
						<code>::before</code>):
					</strong>{" "}
					1 ponto por cada um.
				</li>
			</ul>
			<p>
				O seletor universal (`*`), os combinadores (`&gt;`, `+`, `~`) e a
				pseudo-classe `:not()` não adicionam pontos.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Exemplos de Cálculo:</h4>
			<div className='overflow-x-auto my-6 rounded-lg border'>
				<table className='min-w-full text-sm'>
					<thead className='bg-gray-50 dark:bg-gray-800'>
						<tr>
							<th className='p-3 text-left'>Seletor</th>
							<th className='p-3 text-left'>
								Cálculo (IDs, Classes, Elementos)
							</th>
							<th className='p-3 text-left'>Pontuação Total</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
						<tr className='dark:bg-gray-900'>
							<td className='p-3 font-mono'>p</td>
							<td className='p-3'>0, 0, 1</td>
							<td className='p-3'>1</td>
						</tr>
						<tr className='dark:bg-gray-900/50'>
							<td className='p-3 font-mono'>.btn-principal</td>
							<td className='p-3'>0, 1, 0</td>
							<td className='p-3'>10</td>
						</tr>
						<tr className='dark:bg-gray-900'>
							<td className='p-3 font-mono'>#menu-principal</td>
							<td className='p-3'>1, 0, 0</td>
							<td className='p-3'>100</td>
						</tr>
						<tr className='dark:bg-gray-900/50'>
							<td className='p-3 font-mono'>#nav .link:hover</td>
							<td className='p-3'>1, 2, 0</td>
							<td className='p-3'>120</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. A Opção Nuclear: `!important`
			</h3>
			<p className='mb-4'>
				Se adicionar <code>!important</code> no final de uma declaração de
				estilo, essa declaração anulará qualquer outra, independentemente da sua
				especificidade.
			</p>
			<CodeBlock
				language='css'
				codeString={`p {
  color: blue !important; /* Esta regra ganhará sobre quase tudo */
}`}
			/>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					Use com extrema precaução!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					<code>!important</code> é frequentemente um sinal de que a estrutura
					do seu CSS é demasiado complexa ou "suja". Quebra a cascata natural e
					torna a depuração um pesadelo. Evite-o sempre que possível e reserve-o
					para casos muito específicos, como anular estilos de terceiros.
				</p>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Detetive de CSS
			</h3>
			<p className='mb-4'>
				A sua missão é analisar o seguinte HTML e CSS e prever o resultado
				final.
			</p>
			<CodeBlock
				language='html'
				codeString={`<div class="container">
  <p id="texto-chave" class="paragrafo" style="color: purple;">
    Este é um parágrafo muito importante.
  </p>
</div>`}
			/>
			<CodeBlock
				language='css'
				codeString={`/* Regra 1 */
.container p {
  color: blue;
}

/* Regra 2 */
#texto-chave {
  color: green;
}

/* Regra 3 */
p.paragrafo {
  color: red;
}`}
			/>
			<p className='mt-4'>
				Analise as três regras CSS e o estilo em linha. Com base na cascata e na
				especificidade, responda:
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>Qual regra tem a maior especificidade? E a menor?</li>
				<li>Qual será a cor final do texto do parágrafo?</li>
				<li>Explique por que essa cor ganha a "batalha de estilos".</li>
			</ol>
		</section>
	</div>
);

export default Lecture11Pt;
