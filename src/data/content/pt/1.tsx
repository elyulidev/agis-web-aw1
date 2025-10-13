import CodeBlock from "@/components/ui/code-block";

const ArrowRightCircleIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-7 w-7 mr-3 text-blue-500 shrink-0'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		strokeWidth={2}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
		/>
	</svg>
);

const ServerIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-7 w-7 mr-3 text-green-500 shrink-0'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		strokeWidth={2}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'
		/>
	</svg>
);

const ArrowLeftCircleIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-7 w-7 mr-3 text-purple-500 shrink-0'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		strokeWidth={2}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z'
		/>
	</svg>
);

const DesktopComputerIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-7 w-7 mr-3 text-yellow-500 shrink-0'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		strokeWidth={2}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
		/>
	</svg>
);

// FIX: Explicitly typed the children prop to resolve type inference errors.
const Code = ({ children }: { children: React.ReactNode }) => (
	<code className='bg-gray-200 dark:bg-gray-700 rounded-md px-1.5 py-1 font-mono text-sm text-pink-600 dark:text-pink-400'>
		{children}
	</code>
);

const Lecture1Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Boas-vindas ao mundo do design e desenvolvimento web
			</h3>
			<p className='mb-4'>
				Olá e bem-vindos a este curso! Dou-lhes as mais cordiais boas-vindas a
				este maravilhoso mundo do design e desenvolvimento web. Este curso foi
				projetado para começar do zero, então não se preocupem se nunca tiveram
				contato com programação ou código.
			</p>
			<p className='mb-4'>
				Para entender a base do que faremos, pensemos na construção de uma casa.
				O <strong>HTML (HyperText Markup Language)</strong> é a base e a
				estrutura dessa casa. Ele define o significado e a estrutura do conteúdo
				da web, como parágrafos, imagens e links. Por outro lado, o{" "}
				<strong>CSS (Cascading Style Sheets)</strong> é a decoração: a pintura,
				os tapetes, o papel de parede. É a linguagem de estilos que usamos para
				descrever a apresentação dos documentos, fazendo com que fiquem com uma
				boa aparência. Finalmente, o <strong>JavaScript</strong> é a linguagem
				de programação que adiciona dinamismo e interatividade, como mudar de um
				tema claro para um escuro.
			</p>
			<p>
				Em conjunto, HTML, CSS e JavaScript são as tecnologias fundamentais que
				qualquer navegador web entende nativamente, então não precisam instalar
				nada além das ferramentas que veremos a seguir.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. O que é HTML e sua história?
			</h3>
			<div className='float-right ml-6 mb-4 w-24 h-24'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 512 512'
					aria-label='Logo do HTML5'
				>
					<path fill='#E34F26' d='M71 460L30 0h451l-41 460-195 52z'></path>
					<path fill='#EF652A' d='M256 472l159-44L454 41H256z'></path>
					<path
						fill='#EBEBEB'
						d='M256 208h-75l-5-58h80V94H94l13 150h149v-58zm0 184l-84-23-6-60h-56l11 127 135 37v-57z'
					></path>
					<path
						fill='#FFF'
						d='M256 208v58h70l-7 74-84 23v57l135-37 14-159h-56l-6 60H256zm86-114l-5 56h80l4-42h-79z'
					></path>
				</svg>
			</div>
			<p className='mb-4'>
				HTML significa Linguagem de Marcação de Hipertexto (HyperText Markup
				Language).
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Hipertexto</strong> refere-se aos links que conectam as
					páginas da web entre si, permitindo-nos navegar pela rede.
				</li>
				<li>
					<strong>Marcação</strong> refere-se ao uso de "marcas" ou "etiquetas"
					(em inglês, <span className='italic'>tags</span>) para estruturar o
					conteúdo. Por exemplo, dizemos ao navegador "isto é um cabeçalho" ou
					"isto é um parágrafo". É importante destacar que o HTML não é uma
					linguagem de programação, mas sim uma linguagem de marcação que define
					o conteúdo.
				</li>
			</ul>
			<p className='mb-4'>
				A história da web está ligada ao HTML. As folhas de estilo como o CSS
				foram desenvolvidas para fornecer estilos à web, já que o HTML começou a
				incluir muitas capacidades de design, tornando-se mais complexo. A
				separação do conteúdo (HTML) e da apresentação (CSS) tornou-se uma
				necessidade. O CSS foi proposto pela primeira vez por Håkon Wium Lie em
				10 de outubro de 1994, enquanto trabalhava no CERN com Tim Berners-Lee,
				o criador da web.
			</p>
			<p className='mb-4'>
				A especificação do HTML é mantida pelo World Wide Web Consortium (W3C),
				o órgão responsável por definir os padrões da web.
			</p>
			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Exemplo de código HTML:
			</h4>
			<CodeBlock
				language='html'
				codeString={`<!DOCTYPE html>
<html>
<head>
  <title>Minha Primeira Página</title>
</head>
<body>
  <h1>Olá, Mundo!</h1>
  <p>Este é um parágrafo na minha página web.</p>
</body>
</html>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Configuração do ambiente de desenvolvimento: Visual Studio Code
			</h3>
			<p className='mb-4'>
				Para começar, precisamos apenas de duas ferramentas de software:
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Um navegador web:</strong> Recomendo usar o Google Chrome ou o
					Mozilla Firefox, pois ambos incluem excelentes ferramentas para
					desenvolvedores que serão muito úteis.
				</li>
				<li>
					<strong>Um editor de código:</strong> Este é o programa onde
					escreveremos nosso código. Embora existam muitas opções como Sublime
					Text ou Atom, a ferramenta que usaremos neste curso é o Visual Studio
					Code (VS Code). É gratuito, desenvolvido pela Microsoft e está
					disponível para Windows, Mac e Linux.
				</li>
			</ol>
			<a
				href='https://code.visualstudio.com/download'
				target='_blank'
				rel='noopener noreferrer'
				className='inline-flex items-center justify-center px-6 py-3 my-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
			>
				Baixar o Visual Studio Code
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5 ml-2'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
					/>
				</svg>
			</a>
			<p className='my-4'>
				Para organizar nosso projeto, é fundamental criar uma pasta em nosso
				computador onde salvaremos todos os arquivos. Uma vez criada, a
				abriremos no VS Code.
			</p>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					Prática recomendada:
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Sempre abram a pasta completa do projeto no VS Code, não arquivos
					individuais. Isso ajuda a manter tudo organizado e a fazer com que o
					editor entenda a estrutura do nosso projeto.
				</p>
			</div>
			<p className='mt-4'>
				Dentro do VS Code, criaremos nosso primeiro arquivo, que chamaremos de{" "}
				<code>index.html</code>. Este é o nome padrão para a página principal de
				um site.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				4. Uso do Emmet para escrita ágil de código
			</h3>
			<p className='mb-4'>
				O Visual Studio Code integra uma ferramenta extremamente útil chamada
				Emmet, que nos permite escrever código HTML e CSS de maneira muito
				rápida usando atalhos. Por exemplo, para criar a estrutura básica de um
				documento HTML, em vez de escrever tudo manualmente, simplesmente
				digitamos um ponto de exclamação (<code>!</code>) e pressionamos a tecla
				Enter ou Tab.
			</p>
			<p>
				Imediatamente, o Emmet gerará todo o esqueleto necessário para começar a
				trabalhar:
			</p>
			<CodeBlock
				language='html'
				codeString={`<!-- Se você digitar "!" e pressionar Enter... -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				5. Organização do código: indentação e o plugin Prettier
			</h3>
			<p className='mb-4'>
				Um código bem organizado é mais fácil de ler e manter. A indentação é
				crucial para visualizar a hierarquia e o aninhamento dos elementos HTML.
				A convenção mais comum é usar dois espaços para cada nível de
				aninhamento.
			</p>
			<p className='mb-4'>
				Para manter nosso código formatado de maneira consistente e automática,
				recomendo instalar a extensão <strong>Prettier</strong> no VS Code. Este
				plugin formata automaticamente o código cada vez que salvamos o arquivo.
			</p>
			<p>
				Você pode configurar o Prettier para ser executado ao salvar com esta
				configuração no arquivo <code>settings.json</code> do VS Code:
			</p>
			<CodeBlock
				language='json'
				codeString={`{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.singleQuote": true,
  "prettier.tabWidth": 2
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				6. Servidores Web e funcionamento da extensão Live Server
			</h3>
			<p className='mb-4'>
				Quando você abre um arquivo HTML diretamente no seu navegador a partir
				do seu disco rígido (usando uma URL <code>file:///...</code>), o
				navegador o trata como um arquivo local isolado. Isso não simula como um
				site real funcionará na internet, onde os arquivos são "servidos" por um
				servidor web.
			</p>
			<p className='mb-4'>
				Um <strong>servidor web</strong> é um software que aguarda requisições
				dos navegadores (clientes). Quando um usuário quer ver uma página, seu
				navegador envia uma requisição HTTP ao servidor. O servidor encontra os
				arquivos solicitados (HTML, CSS, JavaScript, imagens) e os envia de
				volta ao navegador como uma resposta HTTP. O navegador então renderiza
				esses arquivos para exibir a página web.
			</p>
			<p className='mb-4'>
				A extensão <strong>Live Server</strong> para o VS Code cria esse
				servidor de desenvolvimento local para você. Quando você a usa, ela abre
				sua página no navegador através de um endereço local (como{" "}
				<code>http://127.0.0.1:5500</code>). O mais importante é que ela
				monitora seus arquivos e recarrega automaticamente o navegador sempre
				que você salva uma alteração, agilizando enormemente o desenvolvimento.
			</p>

			<div className='mt-12 border-t-2 border-blue-500/30 pt-8'>
				<h4 className='text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400'>
					Mergulho Profundo: O Ciclo Requisição-Resposta HTTP
				</h4>
				<p className='mb-8 text-lg text-gray-600 dark:text-gray-400'>
					Esta visão geral detalha a estrutura de uma Requisição e Resposta
					HTTP, oferecendo uma visão aprofundada dos componentes internos numa
					configuração de servidor típica.
				</p>

				<div className='mb-8'>
					<img
						src={
							process.env.NODE_ENV === "production"
								? "https://1rqzd6uwpqe1a157.public.blob.vercel-storage.com/conf1/cliente-servidor.webp"
								: "/conf1/cliente-servidor.webp"
						}
						alt='Arquitetura Cliente-Servidor'
						className='h-96 bg-cover bg-no-repeat mx-auto'
						style={{ aspectRatio: "1/1" }}
					/>
				</div>

				<div className='space-y-10'>
					{/* 1. HTTP Request */}
					<div className='p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm'>
						<h5 className='text-2xl font-semibold mb-4 flex items-center text-gray-800 dark:text-gray-200'>
							<ArrowRightCircleIcon /> 1. Requisição HTTP (Do Cliente)
						</h5>
						<p className='mb-4'>
							Quando um cliente (navegador, app móvel, etc.) precisa de
							interagir com um servidor, constrói uma Requisição HTTP. É uma
							mensagem de texto formatada para pedir ao servidor uma ação ou um
							recurso específico.
						</p>
						<div className='mt-6 pl-4 border-l-4 border-blue-500 space-y-6'>
							<div>
								<h6 className='font-bold text-lg text-gray-700 dark:text-gray-300'>
									Linha de Início
								</h6>
								<p className='mt-1'>
									Define a ação fundamental e consiste em três partes:
								</p>
								<ul className='mt-3 space-y-3 text-gray-600 dark:text-gray-400'>
									<li>
										<strong>Método HTTP:</strong> A ação desejada.
										<div className='grid grid-cols-2 md:grid-cols-3 gap-2 mt-2 text-center'>
											<Code>GET</Code>
											<Code>POST</Code>
											<Code>PUT</Code>
											<Code>DELETE</Code>
											<Code>PATCH</Code>
											<Code>OPTIONS</Code>
										</div>
									</li>
									<li>
										<strong>Recurso (URI):</strong> O "endereço" do recurso no
										servidor. Ex: <Code>/utilizadores/perfil</Code>.
									</li>
									<li>
										<strong>Versão HTTP:</strong> A versão do protocolo. Ex:{" "}
										<Code>HTTP/1.1</Code>.
									</li>
								</ul>
							</div>
							<div>
								<h6 className='font-bold text-lg text-gray-700 dark:text-gray-300'>
									Cabeçalhos (Headers)
								</h6>
								<p className='mt-1'>
									Pares chave-valor com metadados sobre a requisição. Exemplos:
								</p>
								<ul className='mt-3 space-y-2 text-sm'>
									<li>
										<Code>Host: www.exemplo.com</Code> - Domínio do servidor.
									</li>
									<li>
										<Code>User-Agent: Mozilla/5.0...</Code> - Identifica o
										cliente.
									</li>
									<li>
										<Code>Accept: text/html</Code> - Tipos de conteúdo que o
										cliente entende.
									</li>
									<li>
										<Code>Authorization: Bearer &lt;token&gt;</Code> -
										Credenciais de autenticação.
									</li>
								</ul>
							</div>
							<div>
								<h6 className='font-bold text-lg text-gray-700 dark:text-gray-300'>
									Corpo (Body)
								</h6>
								<p className='mt-1'>
									Contém os dados enviados para o servidor (com{" "}
									<Code>POST</Code>, <Code>PUT</Code>, <Code>PATCH</Code>). Pode
									ser dados de formulário, um objeto JSON, ficheiros, etc.
								</p>
							</div>
						</div>
					</div>

					{/* 2. Server Operation */}
					<div className='p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm'>
						<h5 className='text-2xl font-semibold mb-4 flex items-center text-gray-800 dark:text-gray-200'>
							<ServerIcon /> 2. Operação Interna do Servidor
						</h5>
						<p className='mb-4'>
							Ao receber a requisição, o servidor processa-a através de vários
							componentes:
						</p>
						<div className='mt-6 pl-4 border-l-4 border-green-500 space-y-6'>
							<div>
								<h6 className='font-bold text-lg text-gray-700 dark:text-gray-300'>
									Servidor Web (Nginx, Apache)
								</h6>
								<p className='mt-1'>
									É o primeiro ponto de contacto. Analisa a requisição, serve
									ficheiros estáticos (HTML, CSS, imagens) diretamente, e
									redireciona as requisições dinâmicas para o servidor de
									aplicações.
								</p>
							</div>
							<div>
								<h6 className='font-bold text-lg text-gray-700 dark:text-gray-300'>
									Servidor de Aplicações (Node.js, Python, Java)
								</h6>
								<p className='mt-1'>
									Aqui reside a lógica de negócio. Processa os dados da
									requisição, interage com a base de dados e gera o conteúdo
									dinâmico da resposta (HTML, JSON, etc.).
								</p>
							</div>
							<div>
								<h6 className='font-bold text-lg text-gray-700 dark:text-gray-300'>
									Base de Dados (PostgreSQL, MongoDB)
								</h6>
								<p className='mt-1'>
									Armazena e gere os dados da aplicação. Executa as consultas
									enviadas pelo servidor de aplicações e devolve os resultados.
								</p>
							</div>
						</div>
					</div>

					{/* 3. HTTP Response */}
					<div className='p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm'>
						<h5 className='text-2xl font-semibold mb-4 flex items-center text-gray-800 dark:text-gray-200'>
							<ArrowLeftCircleIcon /> 3. Resposta HTTP (Do Servidor)
						</h5>
						<p className='mb-4'>
							Uma vez processada a requisição, o servidor constrói uma Resposta
							HTTP para enviar de volta ao cliente.
						</p>
						<div className='mt-6 pl-4 border-l-4 border-purple-500 space-y-6'>
							<div>
								<h6 className='font-bold text-lg text-gray-700 dark:text-gray-300'>
									Linha de Início
								</h6>
								<p className='mt-1'>
									Indica o resultado da requisição. Consiste em:
								</p>
								<ul className='mt-3 space-y-3 text-gray-600 dark:text-gray-400'>
									<li>
										<strong>Versão HTTP:</strong> Ex: <Code>HTTP/1.1</Code>.
									</li>
									<li>
										<strong>Código de Estado:</strong> Um número de 3 dígitos
										que indica o resultado.
										<ul className='text-sm mt-2 space-y-1'>
											<li>
												<Code>2xx (Sucesso)</Code> - 200 OK, 201 Created.
											</li>
											<li>
												<Code>3xx (Redirecionamento)</Code> - 301 Moved
												Permanently.
											</li>
											<li>
												<Code>4xx (Erro do Cliente)</Code> - 404 Not Found, 401
												Unauthorized.
											</li>
											<li>
												<Code>5xx (Erro do Servidor)</Code> - 500 Internal
												Server Error.
											</li>
										</ul>
									</li>
									<li>
										<strong>Frase de Razão:</strong> Uma descrição textual do
										estado (ex: "Not Found").
									</li>
								</ul>
							</div>
							<div>
								<h6 className='font-bold text-lg text-gray-700 dark:text-gray-300'>
									Cabeçalhos (Headers)
								</h6>
								<p className='mt-1'>Metadados sobre a resposta. Exemplos:</p>
								<ul className='mt-3 space-y-2 text-sm'>
									<li>
										<Code>Content-Type: text/html</Code> - Formato do corpo da
										resposta.
									</li>
									<li>
										<Code>Content-Length: 1024</Code> - Tamanho do corpo em
										bytes.
									</li>
									<li>
										<Code>Set-Cookie: ...</Code> - Instrui o cliente a guardar
										um cookie.
									</li>
								</ul>
							</div>
							<div>
								<h6 className='font-bold text-lg text-gray-700 dark:text-gray-300'>
									Corpo (Body)
								</h6>
								<p className='mt-1'>
									O conteúdo real enviado ao cliente: um documento HTML, dados
									JSON, uma imagem, etc.
								</p>
							</div>
						</div>
					</div>

					{/* 4. Client Processing */}
					<div className='p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm'>
						<h5 className='text-2xl font-semibold mb-4 flex items-center text-gray-800 dark:text-gray-200'>
							<DesktopComputerIcon /> 4. Processamento no Cliente
						</h5>
						<p className='mb-4'>
							O cliente recebe a resposta e age em conformidade:
						</p>
						<ul className='mt-3 space-y-3 text-gray-600 dark:text-gray-400 list-disc list-inside'>
							<li>
								<strong>Verifica o Código de Estado:</strong> Para saber se a
								requisição teve sucesso, foi redirecionada ou falhou.
							</li>
							<li>
								<strong>Lê os Cabeçalhos:</strong> Para entender como
								interpretar o corpo (`Content-Type`), gerir cookies
								(`Set-Cookie`), etc.
							</li>
							<li>
								<strong>Renderiza o Corpo:</strong> Se for um navegador a
								receber HTML, analisa-o e renderiza a página, fazendo novas
								requisições para CSS, JS e imagens. Se for um cliente de API a
								receber JSON, analisa-o para usar os dados na aplicação.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				7. Conceitos básicos: separação de formato e conteúdo
			</h3>
			<p className='mb-4'>
				O princípio fundamental do desenvolvimento web moderno é a separação de
				responsabilidades (ou "separation of concerns" em inglês). Isso
				significa que o conteúdo e a estrutura de um documento devem estar
				separados de sua apresentação visual.
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4'>
				<li>
					<strong>HTML</strong> é responsável exclusivamente pelo conteúdo e
					pela estrutura semântica (<code>index.html</code>).
				</li>
				<li>
					<strong>CSS</strong> é responsável pela apresentação, formatação e
					design visual (<code>style.css</code>).
				</li>
				<li>
					<strong>JavaScript</strong> é responsável pela interatividade e pelo
					comportamento dinâmico (<code>script.js</code>).
				</li>
			</ul>
			<p className='mt-4 mb-4'>
				Essa separação melhora a acessibilidade, oferece maior flexibilidade e
				controle sobre o design, e simplifica a manutenção do projeto. Uma
				representação visual desta estrutura de arquivos seria:
			</p>
			<div className='bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm max-w-sm'>
				<div className='flex items-center'>
					<span role='img' aria-label='Folder icon'>
						📁
					</span>{" "}
					<span className='ml-2 font-bold'>meu-projeto/</span>
				</div>
				<div className='pl-6 border-l-2 border-gray-300 dark:border-gray-600 ml-2'>
					<div className='flex items-center mt-2'>
						<span className='text-orange-500'>📄</span>{" "}
						<span className='ml-2'>index.html</span>
					</div>
					<div className='flex items-center mt-2'>
						<span className='text-blue-500'>🎨</span>{" "}
						<span className='ml-2'>style.css</span>
					</div>
					<div className='flex items-center mt-2'>
						<span className='text-yellow-500'>📜</span>{" "}
						<span className='ml-2'>script.js</span>
					</div>
				</div>
			</div>
			<p className='mt-4'>
				Graças a isso, um mesmo documento HTML pode ter diferentes aparências
				para diferentes mídias, como uma tela, uma versão para impressão ou um
				leitor de tela para pessoas com deficiência visual.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Sua Primeira Página Web
			</h3>
			<p className='mb-4'>
				Agora que você tem as ferramentas, é hora de construir! O objetivo desta
				tarefa é familiarizá-lo com o ambiente de desenvolvimento e criar sua
				primeira página HTML.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Instale as Ferramentas:</strong> Certifique-se de ter o Visual
					Studio Code instalado no seu computador.
				</li>
				<li>
					<strong>Instale as Extensões:</strong> Dentro do VS Code, vá para o
					painel de extensões (o ícone dos quadrados na barra lateral) e procure
					e instale "Live Server" e "Prettier - Code formatter".
				</li>
				<li>
					<strong>Crie seu Projeto:</strong> Crie uma nova pasta na sua área de
					trabalho chamada <code>meu-primeiro-site</code> e abra-a com o VS
					Code.
				</li>
				<li>
					<strong>Crie o Arquivo:</strong> Dentro do VS Code, crie um novo
					arquivo chamado <code>index.html</code>.
				</li>
				<li>
					<strong>Escreva o Código:</strong> No arquivo <code>index.html</code>,
					digite <code>!</code> e pressione Enter para gerar a estrutura HTML
					básica com o Emmet.
				</li>
				<li>
					<strong>Adicione Conteúdo:</strong> Dentro da tag{" "}
					<code>&lt;body&gt;</code>, adicione um cabeçalho{" "}
					<code>&lt;h1&gt;</code> que diga "Olá, Mundo!" e um parágrafo{" "}
					<code>&lt;p&gt;</code> com uma breve apresentação sua.
				</li>
				<li>
					<strong>Lance-o ao Mundo (Local):</strong> Clique com o botão direito
					no arquivo <code>index.html</code> e selecione "Open with Live
					Server". Seu navegador abrirá mostrando sua primeira página web.
				</li>
			</ol>
			<p>
				Parabéns! Você acabou de criar e servir sua primeira página web.
				Experimente mudar o texto e salvar as alterações para ver como o Live
				Server atualiza o navegador instantaneamente.
			</p>
		</section>
	</div>
);

export default Lecture1Pt;
