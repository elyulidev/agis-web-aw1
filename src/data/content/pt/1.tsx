import {
	ArrowLeftRight,
	Brush,
	Code2,
	Download,
	FileWarning,
	Globe,
	History,
	LayoutTemplate,
	Monitor,
	Server,
	Sparkles,
	Wrench,
	Zap,
} from "lucide-react";
import {
	Callout,
	ConceptCard,
	Figure,
	Step,
} from "@/components/lecture/lecture-blocks";
import CodeBlock from "@/components/ui/code-block";

const Code = ({ children }: { children: React.ReactNode }) => (
	<code className="rounded-md bg-gray-200 px-1.5 py-1 font-mono text-sm text-pink-600 dark:bg-gray-700 dark:text-pink-400">
		{children}
	</code>
);

const clientServerImg =
	typeof globalThis !== "undefined" &&
	(
		globalThis as {
			process?: { env?: { NODE_ENV?: string } };
		}
	).process?.env?.NODE_ENV === "production"
		? "https://1rqzd6uwpqe1a157.public.blob.vercel-storage.com/conf1/cliente-servidor.webp"
		: "/conf1/cliente-servidor.webp";

const Lecture1Pt = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Começamos do zero
			</p>
			<h3 className="text-2xl font-semibold mb-3">
				1. Boas-vindas ao mundo do design e desenvolvimento web
			</h3>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
				Olá e bem-vindos a este curso! Dou-lhes as mais cordiais boas-vindas a
				este maravilhoso mundo do design e desenvolvimento web. Este curso foi
				projetado para começar do zero, então não se preocupem se nunca tiveram
				contato com programação ou código.
			</p>

			<div className="grid gap-4 md:grid-cols-3">
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="HTML · Estrutura"
					iconClassName="bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-300"
				>
					O <strong>HTML (HyperText Markup Language)</strong> é a base e a
					estrutura da casa. Define parágrafos, imagens e links.
				</ConceptCard>
				<ConceptCard
					icon={<Brush className="h-5 w-5" aria-hidden />}
					title="CSS · Decoração"
					iconClassName="bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-300"
				>
					O <strong>CSS (Cascading Style Sheets)</strong> é a pintura, os
					tapetes e o papel de parede. Descreve a apresentação para tudo ficar
					bonito.
				</ConceptCard>
				<ConceptCard
					icon={<Zap className="h-5 w-5" aria-hidden />}
					title="JavaScript · Interatividade"
					iconClassName="bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300"
				>
					O <strong>JavaScript</strong> adiciona dinamismo e interatividade,
					como mudar de um tema claro para um escuro.
				</ConceptCard>
			</div>

			<Callout variant="info" title="Só precisas do navegador e de um editor">
				Em conjunto, HTML, CSS e JavaScript são as tecnologias fundamentais que
				qualquer navegador web entende nativamente, então não precisam instalar
				nada além das ferramentas que veremos a seguir.
			</Callout>
		</section>

		<section>
			<h3 className="text-2xl font-semibold mb-3">
				2. O que é HTML e sua história?
			</h3>
			<div className="grid gap-6 md:grid-cols-[1fr_200px] md:items-start">
				<div>
					<p className="mb-4">
						HTML significa Linguagem de Marcação de Hipertexto (HyperText Markup
						Language).
					</p>
					<div className="grid gap-4 sm:grid-cols-2">
						<ConceptCard
							icon={<ArrowLeftRight className="h-5 w-5" aria-hidden />}
							title="Hipertexto"
							iconClassName="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
						>
							Os links que conectam as páginas da web entre si, permitindo-nos
							navegar pela rede.
						</ConceptCard>
						<ConceptCard
							icon={<Code2 className="h-5 w-5" aria-hidden />}
							title="Marcação"
							iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
						>
							Usamos “marcas” ou “etiquetas” (
							<span className="italic">tags</span>) para dizer ao navegador
							“isto é um cabeçalho” ou “isto é um parágrafo”. HTML não é
							programação: define o conteúdo.
						</ConceptCard>
					</div>
				</div>
				<figure className="mx-auto w-40 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800/60">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						aria-label="Logo do HTML5"
						className="h-auto w-full"
					>
						<path fill="#E34F26" d="M71 460L30 0h451l-41 460-195 52z"></path>
						<path fill="#EF652A" d="M256 472l159-44L454 41H256z"></path>
						<path
							fill="#EBEBEB"
							d="M256 208h-75l-5-58h80V94H94l13 150h149v-58zm0 184l-84-23-6-60h-56l11 127 135 37v-57z"
						></path>
						<path
							fill="#FFF"
							d="M256 208v58h70l-7 74-84 23v57l135-37 14-159h-56l-6 60H256zm86-114l-5 56h80l4-42h-79z"
						></path>
					</svg>
					<figcaption className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
						HTML5 · linguagem de marcação
					</figcaption>
				</figure>
			</div>

			<div className="mt-4 grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<History className="h-5 w-5" aria-hidden />}
					title="1994 · Nasce o CSS"
					iconClassName="bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300"
				>
					O HTML começou a acumular demasiado design. A separação conteúdo
					(HTML) / apresentação (CSS) tornou-se necessária. O CSS foi proposto
					por Håkon Wium Lie em 10 de outubro de 1994 no CERN com Tim
					Berners-Lee.
				</ConceptCard>
				<ConceptCard
					icon={<Globe className="h-5 w-5" aria-hidden />}
					title="W3C · Padrões"
					iconClassName="bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
				>
					A especificação do HTML é mantida pelo World Wide Web Consortium
					(W3C), o órgão responsável pelos padrões da web.
				</ConceptCard>
			</div>

			<h4 className="text-xl font-semibold mt-6 mb-2">
				Exemplo de código HTML:
			</h4>
			<CodeBlock
				language="html"
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
			<h3 className="text-2xl font-semibold mb-3">
				3. Configuração do ambiente de desenvolvimento: Visual Studio Code
			</h3>
			<p className="mb-4">
				Para começar, precisamos apenas de duas ferramentas de software:
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Globe className="h-5 w-5" aria-hidden />}
					title="1 · Um navegador web"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					Recomendo o Google Chrome ou o Mozilla Firefox: ambos incluem
					excelentes ferramentas para desenvolvedores que serão muito úteis.
				</ConceptCard>
				<ConceptCard
					icon={<Code2 className="h-5 w-5" aria-hidden />}
					title="2 · Um editor de código"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Aqui escreveremos nosso código. Usaremos o Visual Studio Code (VS
					Code): gratuito, da Microsoft, para Windows, Mac e Linux.
				</ConceptCard>
			</div>

			<div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800/60">
				<a
					href="https://code.visualstudio.com/download"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
				>
					Baixar o Visual Studio Code
					<Download className="h-5 w-5 ml-2" aria-hidden />
				</a>
				<p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
					Grátis · Windows, Mac e Linux
				</p>
			</div>

			<p className="my-4">
				Para organizar nosso projeto, é fundamental criar uma pasta em nosso
				computador onde salvaremos todos os arquivos. Uma vez criada, a
				abriremos no VS Code.
			</p>
			<Callout variant="info" title="Prática recomendada:">
				Sempre abram a pasta completa do projeto no VS Code, não arquivos
				individuais. Isso ajuda a manter tudo organizado e a fazer com que o
				editor entenda a estrutura do nosso projeto.
			</Callout>
			<p className="mt-4">
				Dentro do VS Code, criaremos nosso primeiro arquivo, que chamaremos de{" "}
				<Code>index.html</Code>. Este é o nome padrão para a página principal de
				um site.
			</p>
		</section>

		<section>
			<h3 className="text-2xl font-semibold mb-3">
				4. Uso do Emmet para escrita ágil de código
			</h3>
			<p className="mb-4">
				O Visual Studio Code integra uma ferramenta extremamente útil chamada
				Emmet, que nos permite escrever código HTML e CSS de maneira muito
				rápida usando atalhos. Por exemplo, para criar a estrutura básica de um
				documento HTML, em vez de escrever tudo manualmente, simplesmente
				digitamos um ponto de exclamação (<Code>!</Code>) e pressionamos a tecla
				Enter ou Tab.
			</p>
			<Callout variant="tip" title="Testa em 2 segundos">
				Cria um <Code>index.html</Code> vazio, digita <Code>!</Code> e aperta{" "}
				<Code>Enter</Code>. O Emmet gera todo o esqueleto por ti.
			</Callout>
			<CodeBlock
				language="html"
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
			<h3 className="text-2xl font-semibold mb-3">
				5. Organização do código: indentação e o plugin Prettier
			</h3>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<LayoutTemplate className="h-5 w-5" aria-hidden />}
					title="Indentação = hierarquia"
				>
					Um código bem organizado é mais fácil de ler e manter. A indentação
					mostra o aninhamento. A convenção mais comum: dois espaços por nível.
				</ConceptCard>
				<ConceptCard
					icon={<Sparkles className="h-5 w-5" aria-hidden />}
					title="Prettier faz por ti"
					iconClassName="bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300"
				>
					Instala a extensão <strong>Prettier</strong> no VS Code. Ela formata o
					código automaticamente sempre que salvas o arquivo.
				</ConceptCard>
			</div>
			<p className="mt-4">
				Você pode configurar o Prettier para ser executado ao salvar com esta
				configuração no arquivo <Code>settings.json</Code> do VS Code:
			</p>
			<CodeBlock
				language="json"
				codeString={`{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.singleQuote": true,
  "prettier.tabWidth": 2
}`}
			/>
		</section>

		<section>
			<h3 className="text-2xl font-semibold mb-3">
				6. Servidores Web e funcionamento da extensão Live Server
			</h3>
			<div className="grid gap-4 sm:grid-cols-2">
				<div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/60">
					<p className="flex items-center gap-2 font-semibold text-gray-700 dark:text-gray-200">
						<FileWarning className="h-5 w-5 text-gray-400" aria-hidden />
						Abrir com <Code>file:///...</Code>
					</p>
					<p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
						Quando você abre um arquivo HTML direto do disco, o navegador o
						trata como arquivo local isolado. Isso não simula um site real na
						internet.
					</p>
				</div>
				<div className="rounded-2xl border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-950/30">
					<p className="flex items-center gap-2 font-semibold text-green-800 dark:text-green-200">
						<Server className="h-5 w-5" aria-hidden />
						Servir com <Code>http://127.0.0.1:5500</Code>
					</p>
					<p className="mt-2 text-sm text-green-900/80 dark:text-green-100/80">
						Um <strong>servidor web</strong> aguarda requisições, encontra os
						arquivos e os devolve como resposta HTTP para renderizar a página.
					</p>
				</div>
			</div>

			<Callout variant="success" title="Live Server poupa-te horas">
				A extensão <strong>Live Server</strong> cria esse servidor local por ti,
				abre a página num endereço local e recarrega o navegador sempre que
				salvas uma alteração.
			</Callout>

			<div className="mt-10 border-t-2 border-blue-500/30 pt-8">
				<h4 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">
					Mergulho Profundo: O Ciclo Requisição-Resposta HTTP
				</h4>
				<p className="mb-6 text-gray-600 dark:text-gray-400">
					Esta visão geral detalha a estrutura de uma Requisição e Resposta
					HTTP, oferecendo uma visão aprofundada dos componentes internos numa
					configuração de servidor típica.
				</p>

				<Figure
					src={clientServerImg}
					alt="Arquitetura Cliente-Servidor"
					caption="Figura 1 · O navegador (cliente) pede e o servidor responde. Toda a web segue este ciclo."
				/>

				<div className="mb-6 grid gap-3 sm:grid-cols-4">
					<div className="flex items-center gap-2 rounded-xl bg-blue-50 p-3 text-sm font-medium text-blue-800 dark:bg-blue-950/40 dark:text-blue-200">
						<Monitor className="h-4 w-4 shrink-0" aria-hidden /> 1 · Cliente
						pede
					</div>
					<div className="flex items-center gap-2 rounded-xl bg-green-50 p-3 text-sm font-medium text-green-800 dark:bg-green-950/40 dark:text-green-200">
						<Server className="h-4 w-4 shrink-0" aria-hidden /> 2 · Servidor
						processa
					</div>
					<div className="flex items-center gap-2 rounded-xl bg-purple-50 p-3 text-sm font-medium text-purple-800 dark:bg-purple-950/40 dark:text-purple-200">
						<Wrench className="h-4 w-4 shrink-0" aria-hidden /> 3 · Servidor
						responde
					</div>
					<div className="flex items-center gap-2 rounded-xl bg-yellow-50 p-3 text-sm font-medium text-yellow-800 dark:bg-yellow-950/40 dark:text-yellow-200">
						<Zap className="h-4 w-4 shrink-0" aria-hidden /> 4 · Cliente
						renderiza
					</div>
				</div>

				<div className="space-y-8">
					<div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
						<h5 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
							1. Requisição HTTP (Do Cliente)
						</h5>
						<p className="mb-4 text-sm leading-relaxed">
							Quando um cliente (navegador, app móvel, etc.) precisa de
							interagir com um servidor, constrói uma Requisição HTTP: uma
							mensagem formatada a pedir uma ação ou recurso.
						</p>
						<div className="grid gap-4 md:grid-cols-3">
							<div className="rounded-xl border-l-4 border-blue-500 bg-white p-4 dark:bg-gray-900">
								<h6 className="font-bold">Linha de início</h6>
								<p className="mt-1 text-sm">Método + recurso + versão.</p>
								<div className="mt-2 flex flex-wrap gap-1.5">
									{["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"].map(
										(m) => (
											<Code key={m}>{m}</Code>
										),
									)}
								</div>
								<p className="mt-2 text-xs text-gray-500">
									Ex: <Code>/utilizadores/perfil</Code> · <Code>HTTP/1.1</Code>
								</p>
							</div>
							<div className="rounded-xl border-l-4 border-blue-500 bg-white p-4 dark:bg-gray-900">
								<h6 className="font-bold">Cabeçalhos</h6>
								<p className="mt-1 text-sm">Pares chave-valor.</p>
								<ul className="mt-2 space-y-1.5 text-xs">
									<li>
										<Code>Host: www.exemplo.com</Code>
									</li>
									<li>
										<Code>User-Agent: Mozilla/5.0...</Code>
									</li>
									<li>
										<Code>Accept: text/html</Code>
									</li>
									<li>
										<Code>Authorization: Bearer &lt;token&gt;</Code>
									</li>
								</ul>
							</div>
							<div className="rounded-xl border-l-4 border-blue-500 bg-white p-4 dark:bg-gray-900">
								<h6 className="font-bold">Corpo</h6>
								<p className="mt-1 text-sm">
									Dados com <Code>POST</Code>, <Code>PUT</Code>,{" "}
									<Code>PATCH</Code>: formulários, JSON, ficheiros.
								</p>
							</div>
						</div>
					</div>

					<div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
						<h5 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
							2. Operação Interna do Servidor
						</h5>
						<div className="grid gap-4 md:grid-cols-3">
							<div className="rounded-xl border-l-4 border-green-500 bg-white p-4 dark:bg-gray-900">
								<h6 className="font-bold">Servidor Web</h6>
								<p className="mt-1 text-sm">
									Nginx, Apache. É o primeiro ponto de contacto. Analisa a
									requisição, serve ficheiros estáticos (HTML, CSS, imagens)
									diretamente, e redireciona as requisições dinâmicas para o
									servidor de aplicações.
								</p>
							</div>
							<div className="rounded-xl border-l-4 border-green-500 bg-white p-4 dark:bg-gray-900">
								<h6 className="font-bold">Servidor de Aplicações</h6>
								<p className="mt-1 text-sm">
									Node.js, Python, Java. Aqui reside a lógica de negócio.
									Processa os dados da requisição, interage com a base de dados
									e gera o conteúdo dinâmico da resposta (HTML, JSON, etc.).
								</p>
							</div>
							<div className="rounded-xl border-l-4 border-green-500 bg-white p-4 dark:bg-gray-900">
								<h6 className="font-bold">Base de Dados</h6>
								<p className="mt-1 text-sm">
									PostgreSQL, MongoDB. Armazena e gere os dados da aplicação.
									Executa as consultas enviadas pelo servidor de aplicações e
									devolve os resultados.
								</p>
							</div>
						</div>
					</div>

					<div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
						<h5 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
							3. Resposta HTTP (Do Servidor)
						</h5>
						<div className="grid gap-4 md:grid-cols-3">
							<div className="rounded-xl border-l-4 border-purple-500 bg-white p-4 dark:bg-gray-900">
								<h6 className="font-bold">Linha de início</h6>
								<ul className="mt-2 space-y-1.5 text-xs">
									<li>
										<Code>HTTP/1.1</Code>
									</li>
									<li>
										<Code>2xx Sucesso</Code> — 200 OK, 201 Created
									</li>
									<li>
										<Code>3xx Redirecionamento</Code> — 301 Moved Permanently
									</li>
									<li>
										<Code>4xx Erro do cliente</Code> — 404, 401
									</li>
									<li>
										<Code>5xx Erro do servidor</Code> — 500 Internal Error
									</li>
								</ul>
							</div>
							<div className="rounded-xl border-l-4 border-purple-500 bg-white p-4 dark:bg-gray-900">
								<h6 className="font-bold">Cabeçalhos</h6>
								<ul className="mt-2 space-y-1.5 text-xs">
									<li>
										<Code>Content-Type: text/html</Code>
									</li>
									<li>
										<Code>Content-Length: 1024</Code>
									</li>
									<li>
										<Code>Set-Cookie: ...</Code>
									</li>
								</ul>
							</div>
							<div className="rounded-xl border-l-4 border-purple-500 bg-white p-4 dark:bg-gray-900">
								<h6 className="font-bold">Corpo</h6>
								<p className="mt-1 text-sm">
									HTML, JSON, imagem, etc. O conteúdo real para o cliente.
								</p>
							</div>
						</div>
					</div>

					<div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
						<h5 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
							4. Processamento no Cliente
						</h5>
						<ul className="grid gap-3 text-sm md:grid-cols-3">
							<li className="rounded-xl bg-white p-3 dark:bg-gray-900">
								<strong>Verifica o estado:</strong> sucesso, redirecionamento ou
								falha?
							</li>
							<li className="rounded-xl bg-white p-3 dark:bg-gray-900">
								<strong>Lê cabeçalhos:</strong> como interpretar o corpo e os
								cookies.
							</li>
							<li className="rounded-xl bg-white p-3 dark:bg-gray-900">
								<strong>Renderiza:</strong> HTML → página (+ CSS/JS); JSON →
								dados da app.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section>
			<h3 className="text-2xl font-semibold mb-3">
				7. Conceitos básicos: separação de formato e conteúdo
			</h3>
			<p className="mb-4">
				O princípio fundamental do desenvolvimento web moderno é a separação de
				responsabilidades (ou "separation of concerns" em inglês): o conteúdo e
				a estrutura devem estar separados da apresentação visual.
			</p>
			<div className="grid gap-4 sm:grid-cols-3">
				<div className="rounded-2xl border-t-4 border-orange-500 bg-white p-4 shadow-sm dark:bg-gray-800/60 dark:border-orange-400">
					<p className="font-bold">HTML</p>
					<p className="text-sm text-gray-600 dark:text-gray-300">
						Conteúdo e estrutura semântica (<Code>index.html</Code>).
					</p>
				</div>
				<div className="rounded-2xl border-t-4 border-blue-500 bg-white p-4 shadow-sm dark:bg-gray-800/60 dark:border-blue-400">
					<p className="font-bold">CSS</p>
					<p className="text-sm text-gray-600 dark:text-gray-300">
						Apresentação e design visual (<Code>style.css</Code>).
					</p>
				</div>
				<div className="rounded-2xl border-t-4 border-yellow-500 bg-white p-4 shadow-sm dark:bg-gray-800/60 dark:border-yellow-400">
					<p className="font-bold">JavaScript</p>
					<p className="text-sm text-gray-600 dark:text-gray-300">
						Interatividade dinâmica (<Code>script.js</Code>).
					</p>
				</div>
			</div>
			<div className="mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 font-mono text-sm max-w-sm">
				<div className="flex items-center">
					<span role="img" aria-label="Folder icon">
						📁
					</span>{" "}
					<span className="ml-2 font-bold">meu-projeto/</span>
				</div>
				<div className="pl-6 border-l-2 border-gray-300 dark:border-gray-600 ml-2">
					<div className="flex items-center mt-2">
						<span className="text-orange-500">📄</span>{" "}
						<span className="ml-2">index.html</span>
					</div>
					<div className="flex items-center mt-2">
						<span className="text-blue-500">🎨</span>{" "}
						<span className="ml-2">style.css</span>
					</div>
					<div className="flex items-center mt-2">
						<span className="text-yellow-500">📜</span>{" "}
						<span className="ml-2">script.js</span>
					</div>
				</div>
			</div>
			<Callout variant="success" title="Um HTML, muitas aparências">
				Graças a isso, um mesmo documento HTML pode ter aparências diferentes
				para mídias distintas, como tela, impressão ou leitor de tela para
				pessoas com deficiência visual.
			</Callout>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2">
				📝 Tarefa: Sua Primeira Página Web
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Agora que você tem as ferramentas, é hora de construir! O objetivo é te
				familiarizar com o ambiente e criar sua primeira página HTML.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Instale as Ferramentas">
					Certifique-se de ter o Visual Studio Code instalado no seu computador.
				</Step>
				<Step number={2} title="Instale as Extensões">
					No painel de extensões procure e instale "Live Server" e "Prettier -
					Code formatter".
				</Step>
				<Step number={3} title="Crie seu Projeto">
					Crie a pasta <Code>meu-primeiro-site</Code> na área de trabalho e
					abra-a com o VS Code.
				</Step>
				<Step number={4} title="Crie o Arquivo">
					Crie <Code>index.html</Code> dentro do VS Code.
				</Step>
				<Step number={5} title="Escreva o Código">
					Digite <Code>!</Code> e aperte Enter para gerar a base com o Emmet.
				</Step>
				<Step number={6} title="Adicione Conteúdo">
					Dentro de <Code>&lt;body&gt;</Code> adicione um{" "}
					<Code>&lt;h1&gt;</Code> “Olá, Mundo!” e um <Code>&lt;p&gt;</Code> com
					sua apresentação.
				</Step>
				<Step number={7} title="Lance-o ao Mundo (Local)">
					Clique direito em <Code>index.html</Code> → "Open with Live Server".
				</Step>
			</ol>
			<Callout variant="success" title="Parabéns!">
				Você criou e serviu sua primeira página web. Mude o texto, salve e veja
				como o Live Server atualiza o navegador na hora.
			</Callout>
		</section>
	</div>
);

export default Lecture1Pt;
