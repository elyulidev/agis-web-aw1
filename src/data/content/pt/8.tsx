import CodeBlock from "@/components/ui/code-block";

const Lecture8Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Três Caminhos para o Estilo: Formas de Incluir CSS
			</h3>
			<p className='mb-4'>
				Existem três maneiras de aplicar CSS a um documento HTML. Entender as
				suas diferenças é fundamental para escrever código organizado e
				eficiente.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				a) Estilos em Linha (Inline Styles)
			</h4>
			<p className='mb-4'>
				Aplicam-se diretamente a um elemento HTML usando o atributo{" "}
				<code>style</code>.
			</p>
			<CodeBlock
				language='html'
				codeString={`<p style="color: red; font-size: 16px;">Este parágrafo é vermelho.</p>`}
			/>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					Evite se possível!
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					Este método vai contra a "separação de responsabilidades". Mistura a
					estrutura (HTML) com a apresentação (CSS), o que torna o código muito
					difícil de manter. O seu uso reserva-se para casos muito específicos,
					como aplicar estilos dinâmicos com JavaScript.
				</p>
			</div>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				b) Folha de Estilos Interna (Internal Stylesheet)
			</h4>
			<p className='mb-4'>
				Definem-se as regras de CSS dentro de uma tag <code>&lt;style&gt;</code>{" "}
				na secção <code>&lt;head&gt;</code> do documento HTML.
			</p>
			<CodeBlock
				language='html'
				codeString={`<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>Este parágrafo é verde.</p>
</body>`}
			/>
			<p className='mt-4'>
				É melhor que os estilos em linha, mas os estilos aplicam-se apenas a
				essa página. Se tiver várias páginas, teria de repetir o código CSS em
				cada uma.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				c) Folha de Estilos Externa (External Stylesheet)
			</h4>
			<p className='mb-4'>
				Esta é a <strong>prática recomendada e padrão da indústria</strong>.
				Cria-se um ficheiro separado com a extensão <code>.css</code> (ex.{" "}
				<code>styles.css</code>) e liga-se a partir do HTML usando a tag{" "}
				<code>&lt;link&gt;</code> no <code>&lt;head&gt;</code>.
			</p>
			<CodeBlock
				language='css'
				codeString={`/* Dentro de styles.css */
p {
  color: blue;
}`}
			/>
			<CodeBlock
				language='html'
				codeString={`<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>Este parágrafo é azul.</p>
</body>`}
			/>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					Vantagens das Folhas Externas:
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Mantêm o código limpo e separado. Permitem que várias páginas HTML
					usem a mesma folha de estilos, facilitando a consistência e a
					manutenção. Além disso, o navegador pode guardar o ficheiro{" "}
					<code>.css</code> em cache, acelerando o carregamento das páginas.
				</p>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Seletores Básicos: Apontando para o Nosso Alvo
			</h3>
			<p className='mb-4'>
				Os seletores são o coração do CSS. São os padrões que usamos para dizer
				ao navegador a que elementos queremos aplicar os nossos estilos.
			</p>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>Seletor Universal (`*`)</strong>: Seleciona{" "}
					<strong>todos</strong> os elementos da página. É útil para aplicar
					estilos base ou reinicializações.
					<CodeBlock
						language='css'
						codeString={`* {
  box-sizing: border-box; /* Uma reinicialização comum */
}`}
					/>
				</li>
				<li>
					<strong>Seletor de Tipo/Tag</strong>: Seleciona todos os elementos de
					um tipo de tag específico.
					<CodeBlock
						language='css'
						codeString={`/* Torna todos os h2 de cor cinza escuro */
h2 {
  color: #333;
}`}
					/>
				</li>
				<li>
					<strong>Seletor de Classe (`.`)</strong>: Seleciona todos os elementos
					que têm um atributo <code>class</code> específico. É o seletor mais
					versátil e reutilizável. Um mesmo elemento pode ter várias classes.
					<CodeBlock
						language='css'
						codeString={`.alerta {
  color: red;
  font-weight: bold;
}`}
					/>
					<CodeBlock
						language='html'
						codeString={`<p class="alerta">Cuidado, isto é importante.</p>`}
					/>
				</li>
				<li>
					<strong>Seletor de ID (`#`)</strong>: Seleciona o{" "}
					<strong>único</strong> elemento que tem um atributo <code>id</code>{" "}
					específico. Os IDs devem ser únicos por página. Usa-se para elementos
					estruturais importantes que не se repetem.
					<CodeBlock
						language='css'
						codeString={`#cabecalho-principal {
  background-color: #f0f0f0;
}`}
					/>
					<CodeBlock
						language='html'
						codeString={`<header id="cabecalho-principal">...</header>`}
					/>
				</li>
				<li>
					<strong>Agrupamento de Seletores (`,`)</strong>: Permite aplicar o
					mesmo bloco de estilos a múltiplos seletores, separando-os por
					vírgulas.
					<CodeBlock
						language='css'
						codeString={`h1, h2, h3 {
  font-family: 'Georgia', serif;
  color: navy;
}`}
					/>
				</li>
			</ul>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Estilizando a sua Biografia
			</h3>
			<p className='mb-4'>
				É hora de dar um pouco de cor e forma à página de biografia que criou no
				Módulo 1.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					Crie um novo ficheiro chamado <code>estilos-biografia.css</code> na
					mesma pasta que o seu ficheiro <code>biografia.html</code>.
				</li>
				<li>
					Ligue esta nova folha de estilos na secção <code>&lt;head&gt;</code>{" "}
					do seu <code>biografia.html</code>.
				</li>
				<li>
					No seu ficheiro HTML, adicione algumas classes e IDs. Por exemplo, dê
					um ID ao seu <code>&lt;h1&gt;</code> principal (ex.{" "}
					<code>id="nome-titulo"</code>) e uma classe a todas as secções de
					conteúdo (ex. <code>class="seccao"</code>).
				</li>
				<li>
					Agora, em <code>estilos-biografia.css</code>, escreva as seguintes
					regras:
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Use o <strong>seletor de tipo</strong> para dar a todo o{" "}
							<code>body</code> uma cor de fundo (<code>background-color</code>)
							e uma fonte (<code>font-family</code>) à sua escolha.
						</li>
						<li>
							Use o <strong>seletor de ID</strong> para estilizar o seu{" "}
							<code>&lt;h1&gt;</code> (ex. mudar a sua cor e centrar o texto com{" "}
							<code>text-align: center;</code>).
						</li>
						<li>
							Use o <strong>seletor de classe</strong> para dar a cada{" "}
							<code>.seccao</code> uma borda (<code>border</code>) e um pouco de
							espaço interior (<code>padding</code>).
						</li>
						<li>
							Use o <strong>agrupamento de seletores</strong> para que todos os
							cabeçalhos (<code>h1</code>, <code>h2</code>) tenham uma cor
							específica.
						</li>
					</ul>
				</li>
				<li>
					Abra a sua página no navegador. Deverá ver os seus primeiros estilos
					aplicados!
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture8Pt;
