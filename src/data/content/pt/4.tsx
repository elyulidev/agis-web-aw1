import {
	Anchor,
	Check,
	Clapperboard,
	ExternalLink,
	Eye,
	Frame,
	Image,
	Link2,
	Mail,
	MousePointerClick,
	Music,
	Phone,
	Sparkles,
} from "lucide-react";
import {
	Callout,
	ConceptCard,
	SectionTitle,
	Step,
} from "@/components/lecture/lecture-blocks";
import CodeBlock from "@/components/ui/code-block";

const Code = ({ children }: { children: React.ReactNode }) => (
	<code className="rounded-md bg-gray-200 px-1.5 py-1 font-mono text-sm text-pink-600 dark:bg-gray-700 dark:text-pink-400">
		{children}
	</code>
);

const CheckItem = ({ children }: { children: React.ReactNode }) => (
	<li className="flex items-start gap-2">
		<Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" aria-hidden />
		<span>{children}</span>
	</li>
);

const Subhead = ({ children }: { children: React.ReactNode }) => (
	<p className="mt-8 mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
		<span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden />
		<span>{children}</span>
	</p>
);

const Preview = ({
	label,
	children,
}: {
	label: string;
	children: React.ReactNode;
}) => (
	<div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-5 dark:border-gray-600 dark:bg-gray-800/40">
		<p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
			{label}
		</p>
		<div className="text-gray-800 dark:text-gray-200">{children}</div>
	</div>
);

const Lecture4Pt = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Links, imagens e multimídia
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Olá novamente! Na aula anterior, dominamos a formatação de texto e as
				listas. Hoje, daremos um passo fundamental para dar vida às nossas
				páginas web: vamos conectar nosso conteúdo ao mundo através de links,
				dar-lhe um rosto com imagens e enriquecer a experiência com conteúdo
				multimídia.
			</p>
			<Callout variant="info" title="De documento a experiência">
				Estes são os elementos que transformam um simples documento numa
				experiência web interativa e visualmente atraente.
			</Callout>
		</section>

		<section>
			<SectionTitle index={1}>Links (&lt;a&gt;): Conectando a Web</SectionTitle>
			<p className="mb-4">
				A tag <Code>&lt;a&gt;</Code> (de <i>anchor</i> ou âncora) é o pilar do
				hipertexto; é o que nos permite navegar entre páginas e recursos. Um
				link precisa do atributo <Code>href</Code> (hypertext reference) para
				saber para onde deve direcionar o usuário.
			</p>
			<div className="mb-4">
				<Preview label="Prévia · um link real, clica">
					<a
						href="https://developer.mozilla.org/"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1 font-medium text-blue-600 underline decoration-blue-300 underline-offset-4 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
					>
						Ir para a MDN Web Docs
						<ExternalLink className="h-4 w-4" aria-hidden />
					</a>
				</Preview>
			</div>

			<Subhead>Links Externos</Subhead>
			<p className="mb-4">
				São aqueles que apontam para outro site. O valor do <Code>href</Code>{" "}
				deve ser a URL completa, incluindo <Code>http://</Code> ou{" "}
				<Code>https://</Code>.
			</p>
			<Callout variant="info" title="Prática recomendada:">
				Para que os links externos abram numa nova aba, use o atributo{" "}
				<Code>target="_blank"</Code>. Por segurança, acompanhe-o sempre de{" "}
				<Code>rel="noopener noreferrer"</Code>.
			</Callout>
			<CodeBlock
				language="html"
				codeString={`<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
  Ir para o Google
</a>`}
			/>

			<Subhead>Links Internos para Outras Páginas</Subhead>
			<p className="mb-4">
				É assim que construímos sites com várias páginas: links para outros
				arquivos HTML do projeto usando caminhos relativos. Imagina esta
				estrutura:
			</p>
			<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 font-mono text-sm max-w-sm">
				<div className="flex items-center">
					<span role="img" aria-label="Pasta">
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
						<span className="text-orange-500">📄</span>{" "}
						<span className="ml-2">contato.html</span>
					</div>
					<div className="flex items-center mt-2">
						<span role="img" aria-label="Pasta">
							📁
						</span>{" "}
						<span className="ml-2">paginas/</span>
					</div>
					<div className="pl-12 border-l-2 border-gray-300 dark:border-gray-600 ml-2">
						<div className="flex items-center mt-2">
							<span className="text-orange-500">📄</span>{" "}
							<span className="ml-2">sobre.html</span>
						</div>
					</div>
				</div>
			</div>
			<p className="mt-4 mb-2 font-medium">
				A partir de <Code>index.html</Code>, os links seriam assim:
			</p>
			<CodeBlock
				language="html"
				codeString={`<!-- 1. Link para um arquivo na mesma pasta -->
<a href="contato.html">Fale Conosco</a>

<!-- 2. Link para um arquivo numa subpasta -->
<a href="paginas/sobre.html">Sobre Nós</a>

<!-- 3. A partir de "sobre.html", para voltar ao início (subir um nível) -->
<a href="../index.html">Voltar ao Início</a>

<!-- 4. Link para a raiz do site (útil em sites grandes) -->
<a href="/index.html">Página Principal</a>`}
			/>

			<Subhead>Links para Seções Específicas (Âncoras)</Subhead>
			<p className="mb-4">
				Podemos direcionar o usuário para uma parte específica de uma página.
				Útil para índices ou menus em páginas longas.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Anchor className="h-5 w-5" aria-hidden />}
					title="Âncora na mesma página"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Dá um <Code>id</Code> único ao destino e usa <Code>#</Code> + o nome
					no <Code>href</Code>.
				</ConceptCard>
				<ConceptCard
					icon={<Link2 className="h-5 w-5" aria-hidden />}
					title="Âncora noutra página"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Combina o link com a âncora: <Code>paginas/sobre.html#equipe</Code>.
				</ConceptCard>
			</div>
			<CodeBlock
				language="html"
				codeString={`<!-- O Link -->
<a href="#secao-2">Ir para a Seção 2</a>

<!-- Muito conteúdo aqui... -->

<!-- O Destino -->
<h2 id="secao-2">Esta é a Seção 2</h2>
<p>Conteúdo da seção...</p>`}
			/>
			<CodeBlock
				language="html"
				codeString={`<!-- A partir de index.html, link para a seção "equipe" em sobre.html -->
<a href="paginas/sobre.html#equipe">Conheça nossa equipe</a>`}
			/>

			<Subhead>Links Especiais: E-mail e Telefone</Subhead>
			<p className="mb-4">
				Também podemos criar links que interagem com outras aplicações do
				dispositivo do usuário:
			</p>
			<div className="mb-4">
				<Preview label="Prévia · links reais">
					<div className="flex flex-wrap gap-3">
						<a
							href="mailto:info@exemplo.com"
							className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
						>
							<Mail className="h-4 w-4" aria-hidden />
							Enviar um e-mail
						</a>
						<a
							href="tel:+5511999999999"
							className="inline-flex items-center gap-2 rounded-lg border border-green-500 px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-50 dark:text-green-300 dark:hover:bg-green-950/40"
						>
							<Phone className="h-4 w-4" aria-hidden />
							Ligue para nós
						</a>
					</div>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<!-- Abre o cliente de e-mail padrão -->
<a href="mailto:info@exemplo.com">Enviar um e-mail</a>

<!-- Inicia uma chamada em dispositivos móveis -->
<a href="tel:+5511999999999">Ligue para nós</a>`}
			/>

			<Subhead>Imagens como Links</Subhead>
			<p className="mb-4">
				Para fazer de uma imagem um link, simplesmente envolva a tag{" "}
				<Code>&lt;img&gt;</Code> dentro de uma tag <Code>&lt;a&gt;</Code>. Clica
				para testar:
			</p>
			<div className="mb-4">
				<Preview label="Prévia · imagem clicável real">
					<a
						href="https://developer.mozilla.org/"
						target="_blank"
						rel="noopener noreferrer"
						className="block overflow-hidden rounded-xl transition-shadow hover:shadow-lg hover:ring-2 hover:ring-blue-500"
					>
						<img
							src="https://picsum.photos/seed/mdn-link/640/220"
							alt="Imagem de exemplo que liga para a MDN Web Docs"
							className="h-auto w-full"
							loading="lazy"
						/>
					</a>
					<p className="mt-2 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
						<MousePointerClick className="h-3.5 w-3.5" aria-hidden />
						Toda a imagem é um link para a MDN
					</p>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<a href="https://developer.mozilla.org/">
  <img src="/logo-mdn.png" alt="Logotipo da MDN Web Docs">
</a>`}
			/>
		</section>

		<section>
			<SectionTitle index={2}>
				Imagens (&lt;img&gt;): O Conteúdo Visual
			</SectionTitle>
			<p className="mb-4">
				A tag <Code>&lt;img&gt;</Code> permite-nos inserir imagens. É uma tag
				“vazia” ou de autofechamento, e requer dois atributos essenciais:
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Image className="h-5 w-5" aria-hidden />}
					title="src · Fonte"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					O caminho do arquivo: relativo (dentro do projeto) ou absoluto (URL
					completa).
				</ConceptCard>
				<ConceptCard
					icon={<Eye className="h-5 w-5" aria-hidden />}
					title="alt · Texto alternativo"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Exibido se a imagem não carregar. <strong>Fundamental</strong> para a
					acessibilidade: os leitores de tela leem em voz alta.
				</ConceptCard>
			</div>
			<div className="mt-4 grid gap-4 md:grid-cols-2">
				<Preview label="Prévia · imagem com alt correto">
					<img
						src="https://picsum.photos/seed/curso-web/640/360"
						alt="Paisagem de exemplo de 640x360 pixels"
						className="h-auto w-full rounded-xl"
						loading="lazy"
					/>
					<p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
						alt: “Paisagem de exemplo de 640x360 pixels”
					</p>
				</Preview>
				<Preview label="Prévia · quando a imagem falha">
					<img
						src="caminho-que-nao-existe/foto.png"
						alt="Logotipo da empresa"
						className="h-auto w-full rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300"
					/>
					<p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
						O navegador mostra o <Code>alt</Code> no lugar da imagem
					</p>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<!-- Imagem com caminho relativo -->
<img src="imagens/logo.png" alt="Logotipo da empresa">

<!-- Imagem com caminho absoluto -->
<img src="https://picsum.photos/200/300" alt="Uma imagem aleatória de 200x300 pixels">`}
			/>
		</section>

		<section>
			<SectionTitle index={3}>
				Conteúdo Multimídia: &lt;audio&gt; e &lt;video&gt;
			</SectionTitle>
			<p className="mb-4">
				O HTML5 permite-nos incorporar áudio e vídeo nativamente. Ambas as tags
				usam o atributo <Code>src</Code> para o caminho do arquivo e partilham
				atributos chave:
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Music className="h-5 w-5" aria-hidden />}
					title="controls"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					Booleano: exibe play, pausa e volume.
				</ConceptCard>
				<ConceptCard
					icon={<Clapperboard className="h-5 w-5" aria-hidden />}
					title="autoplay · loop · poster"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					<Code>autoplay</Code> tenta tocar sozinho (bloqueado com som);{" "}
					<Code>loop</Code> repete em ciclo; <Code>poster</Code> mostra uma
					imagem antes de tocar o vídeo.
				</ConceptCard>
			</div>
			<div className="mt-4">
				<Preview label="Prévia · reprodutor de áudio real">
					{/* biome-ignore lint/a11y/useMediaCaption: reprodutor demo sem arquivo de legendas */}
					<audio controls preload="none" className="w-full">
						<source
							src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
							type="audio/mpeg"
						/>
						O seu navegador não suporta o elemento de áudio.
					</audio>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<!-- Exemplo de Áudio -->
<audio src="sons/musica.mp3" controls>
  O seu navegador não suporta o elemento de áudio.
</audio>

<!-- Exemplo de Vídeo -->
<video src="videos/tutorial.mp4" poster="imagens/capa.jpg" controls width="600">
  O seu navegador não suporta o elemento de vídeo.
</video>`}
			/>
		</section>

		<section>
			<SectionTitle index={4}>
				Incorporação de Conteúdo Externo: &lt;iframe&gt;
			</SectionTitle>
			<p className="mb-4">
				Um <Code>&lt;iframe&gt;</Code> (inline frame) permite-nos incorporar um
				documento HTML completo dentro de outro. É como ter uma “janela” para
				outro site: vídeos do YouTube, mapas do Google Maps ou PDFs. Para ficar
				bem em todos os dispositivos, usamos CSS responsivo em vez de largura e
				altura fixas.
			</p>
			<Callout variant="warning" title="Aviso de Segurança:">
				Nem todos os sites permitem ser incorporados num{" "}
				<Code>&lt;iframe&gt;</Code> por razões de segurança, para prevenir
				ataques como “clickjacking”.
			</Callout>
			<CodeBlock
				language="html"
				codeString={`<!-- Vídeo do YouTube Responsivo -->
<div class="aspect-ratio-16-9">
  <iframe
    class="w-full h-full"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="Vídeo do YouTube"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

<!-- Mapa do Google Maps Responsivo -->
<div class="aspect-ratio-4-3">
  <iframe
    class="w-full h-full"
    src="https://www.google.com/maps/embed?pb=..."
    allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>`}
			/>
			<p className="mt-6 mb-2 font-medium">
				Resultado · iframes reais ao vivo:
			</p>
			<div className="grid gap-6 lg:grid-cols-2">
				<figure className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-700">
					<iframe
						className="w-full border-0"
						style={{ aspectRatio: "16/9" }}
						src="https://www.youtube.com/embed/dQw4w9WgXcQ"
						title="Vídeo do YouTube"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
					<figcaption className="border-t border-gray-100 bg-white px-4 py-2 text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
						Vídeo do YouTube incorporado e responsivo
					</figcaption>
				</figure>
				<figure className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-700">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.906155556202!2d-0.1277583844621535!3d51.50735097963595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce393081e7%3A0x2863a34a17a78363!2sPal%C3%A1cio%20de%20Westminster!5e0!3m2!1spt-PT!2spt!4v1678886591325!5m2!1spt-PT!2spt"
						className="w-full border-0"
						style={{ aspectRatio: "16/9" }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="Mapa do Google Maps"
					></iframe>
					<figcaption className="border-t border-gray-100 bg-white px-4 py-2 text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
						Mapa do Google Maps incorporado e responsivo
					</figcaption>
				</figure>
			</div>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
				<Frame className="h-6 w-6 text-blue-500" aria-hidden />📝 Tarefa: Minha
				Galeria Multimídia Interativa
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Agora é a sua vez de criar uma página interativa e conectá-la à sua
				página principal. Uma galeria simples com links, imagens e multimídia.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Crie o Arquivo">
					Crie <Code>galeria.html</Code> com a estrutura base e o{" "}
					<Code>&lt;head&gt;</Code> configurado.
				</Step>
				<Step number={2} title="Título Principal">
					Um <Code>&lt;h1&gt;</Code> a dizer “Minha Galeria Pessoal”.
				</Step>
				<Step number={3} title="Seção de Imagens">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							<Code>&lt;h2&gt;</Code> “Minhas Fotos Favoritas”.
						</CheckItem>
						<CheckItem>
							Duas <Code>&lt;img&gt;</Code> (relativas ou absolutas, ex. Lorem
							Picsum).
						</CheckItem>
						<CheckItem>
							<strong>Importante!</strong> Cada imagem com o seu{" "}
							<Code>alt</Code> descritivo.
						</CheckItem>
						<CheckItem>
							Uma imagem como link <Code>&lt;a&gt;</Code> para um site externo.
						</CheckItem>
					</ul>
				</Step>
				<Step number={4} title="Seção de Vídeo e Mapa">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							<Code>&lt;h2&gt;</Code> “Meu Vídeo Musical Favorito” + YouTube em{" "}
							<Code>&lt;iframe&gt;</Code> responsivo.
						</CheckItem>
						<CheckItem>
							<Code>&lt;h2&gt;</Code> “Localização do Meu Lugar Favorito” +
							Google Maps responsivo.
						</CheckItem>
					</ul>
				</Step>
				<Step number={5} title="Conecte as suas Páginas">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							Em <Code>index.html</Code>:{" "}
							<Code>
								&lt;a href="galeria.html"&gt;Ver minha galeria&lt;/a&gt;
							</Code>
							.
						</CheckItem>
						<CheckItem>
							Em <Code>galeria.html</Code>:{" "}
							<Code>&lt;a href="index.html"&gt;Voltar ao Início&lt;/a&gt;</Code>
							.
						</CheckItem>
					</ul>
				</Step>
				<Step number={6} title="Visualize e Navegue">
					Abra <Code>index.html</Code> com o Live Server, navegue ida e volta.
					Criaste um site de várias páginas!
				</Step>
			</ol>
			<Callout variant="success" title="Parabéns!">
				Criaste um site de várias páginas com galeria multimídia interativa.
			</Callout>
		</section>
	</div>
);

export default Lecture4Pt;
