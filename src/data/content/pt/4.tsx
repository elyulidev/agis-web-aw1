import CodeBlock from "@/components/ui/code-block";

const Lecture4Pt = () => (
	<div className='space-y-8'>
		<section>
			<p>
				Olá novamente! Na aula anterior, dominamos a formatação de texto e as
				listas. Hoje, daremos um passo fundamental para dar vida às nossas
				páginas web: vamos conectar nosso conteúdo ao mundo através de links,
				dar-lhe um rosto com imagens e enriquecer a experiência com conteúdo
				multimídia.
			</p>
			<p className='mt-4'>
				Estes são os elementos que transformam um simples documento numa
				experiência web interativa e visualmente atraente.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Links (&lt;a&gt;): Conectando a Web
			</h3>
			<p className='mb-4'>
				A tag <code>&lt;a&gt;</code> (de <i>anchor</i> ou âncora) é o pilar do
				hipertexto; é o que nos permite navegar entre páginas e recursos. Um
				link precisa do atributo <code>href</code> (hypertext reference) para
				saber para onde deve direcionar o usuário.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Links Externos</h4>
			<p className='mb-4'>
				São aqueles que apontam para outro site. O valor do <code>href</code>{" "}
				deve ser a URL completa, incluindo <code>http://</code> ou{" "}
				<code>https://</code>.
			</p>
			<div className='p-4 bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg my-4'>
				<p className='font-semibold text-blue-800 dark:text-blue-300'>
					Prática recomendada:
				</p>
				<p className='text-blue-700 dark:text-gray-300'>
					Para que os links externos abram numa nova aba, use o atributo{" "}
					<code>target="_blank"</code>. Por segurança, acompanhe-o sempre de{" "}
					<code>rel="noopener noreferrer"</code>.
				</p>
			</div>
			<CodeBlock
				language='html'
				codeString={`<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
  Ir para o Google
</a>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Links Internos para Outras Páginas (Navegação do Site)
			</h4>
			<p className='mb-4'>
				Esta é a forma como construímos sites com várias páginas. Criamos links
				que apontam para outros arquivos HTML dentro do nosso próprio projeto
				usando caminhos relativos.
			</p>
			<p className='mb-4'>
				Imagine que o seu projeto tem a seguinte estrutura de arquivos:
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
						<span className='text-orange-500'>📄</span>{" "}
						<span className='ml-2'>contato.html</span>
					</div>
					<div className='flex items-center mt-2'>
						<span role='img' aria-label='Folder icon'>
							📁
						</span>{" "}
						<span className='ml-2'>paginas/</span>
					</div>
					<div className='pl-12 border-l-2 border-gray-300 dark:border-gray-600 ml-2'>
						<div className='flex items-center mt-2'>
							<span className='text-orange-500'>📄</span>{" "}
							<span className='ml-2'>sobre.html</span>
						</div>
					</div>
				</div>
			</div>
			<p className='mt-4'>
				A partir de <code>index.html</code>, os links seriam assim:
			</p>
			<CodeBlock
				language='html'
				codeString={`<!-- 1. Link para um arquivo na mesma pasta -->
<a href="contato.html">Fale Conosco</a>

<!-- 2. Link para um arquivo numa subpasta -->
<a href="paginas/sobre.html">Sobre Nós</a>

<!-- 3. A partir de "sobre.html", para voltar ao início (subir um nível) -->
<a href="../index.html">Voltar ao Início</a>

<!-- 4. Link para a raiz do site (útil em sites grandes) -->
<a href="/index.html">Página Principal</a>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Links para Seções Específicas (Âncoras)
			</h4>
			<p className='mb-4'>
				Podemos direcionar o usuário para uma parte específica de uma página.
				Isto é útil para criar índices ou menus de navegação em páginas longas.
			</p>
			<h5 className='text-lg font-semibold mt-4 mb-2'>
				Âncora na mesma página:
			</h5>
			<p>
				Primeiro, atribua um <code>id</code> com um nome único ao elemento para
				o qual quer saltar. Depois, no <code>href</code>, use <code>#</code>{" "}
				seguido do nome do <code>id</code>.
			</p>
			<CodeBlock
				language='html'
				codeString={`<!-- O Link -->
<a href="#secao-2">Ir para a Seção 2</a>

<!-- Muito conteúdo aqui... -->

<!-- O Destino -->
<h2 id="secao-2">Esta é a Seção 2</h2>
<p>Conteúdo da seção...</p>`}
			/>

			<h5 className='text-lg font-semibold mt-4 mb-2'>
				Âncora em uma página diferente:
			</h5>
			<p>Simplesmente combine o link para a página com a âncora.</p>
			<CodeBlock
				language='html'
				codeString={`<!-- A partir de index.html, link para a seção "equipe" em sobre.html -->
<a href="paginas/sobre.html#equipe">Conheça nossa equipe</a>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Links Especiais: E-mail e Telefone
			</h4>
			<p className='mb-4'>
				Também podemos criar links que interagem com outras aplicações do
				dispositivo do usuário:
			</p>
			<CodeBlock
				language='html'
				codeString={`<!-- Abre o cliente de e-mail padrão -->
<a href="mailto:info@exemplo.com">Enviar um e-mail</a>

<!-- Inicia uma chamada em dispositivos móveis -->
<a href="tel:+5511999999999">Ligue para nós</a>`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Imagens como Links</h4>
			<p className='mb-4'>
				Para fazer de uma imagem um link, simplesmente envolva a tag{" "}
				<code>&lt;img&gt;</code> dentro de uma tag <code>&lt;a&gt;</code>.
			</p>
			<CodeBlock
				language='html'
				codeString={`<a href="https://developer.mozilla.org/">
  <img src="/logo-mdn.png" alt="Logotipo da MDN Web Docs">
</a>`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Imagens (&lt;img&gt;): O Conteúdo Visual
			</h3>
			<p className='mb-4'>
				A tag <code>&lt;img&gt;</code> permite-nos inserir imagens. É uma tag
				"vazia" ou de autofechamento, e requer dois atributos essenciais:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>src (Source - Fonte):</strong> Contém o caminho para o arquivo
					da imagem. O caminho pode ser relativo (dentro do seu projeto) ou
					absoluto (uma URL completa).
				</li>
				<li>
					<strong>alt (Alternative text - Texto alternativo):</strong> Um texto
					descritivo que é exibido se a imagem não puder ser carregada. É{" "}
					<strong>fundamental</strong> para a acessibilidade, pois os leitores
					de tela o leem em voz alta.
				</li>
			</ul>
			<CodeBlock
				language='html'
				codeString={`<!-- Imagem com caminho relativo -->
<img src="imagens/logo.png" alt="Logotipo da empresa">

<!-- Imagem com caminho absoluto -->
<img src="https://picsum.photos/200/300" alt="Uma imagem aleatória de 200x300 pixels">`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				3. Conteúdo Multimídia: &lt;audio&gt; e &lt;video&gt;
			</h3>
			<p className='mb-4'>
				O HTML5 permite-nos incorporar áudio e vídeo nativamente. Ambas as tags
				usam o atributo <code>src</code> para especificar o caminho do arquivo e
				compartilham atributos chave:
			</p>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>controls:</strong> Atributo booleano que exibe os controles de
					reprodução (play, pausa, volume).
				</li>
				<li>
					<strong>autoplay:</strong> Tenta reproduzir o conteúdo automaticamente
					(geralmente bloqueado pelos navegadores se tiver som).
				</li>
				<li>
					<strong>loop:</strong> Faz com que o áudio ou vídeo seja reproduzido
					em um ciclo contínuo.
				</li>
				<li>
					<strong>poster (apenas para &lt;video&gt;):</strong> Especifica uma
					imagem para ser exibida enquanto o vídeo carrega ou antes de ser
					reproduzido.
				</li>
			</ul>
			<CodeBlock
				language='html'
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
			<h3 className='text-2xl font-semibold mb-3'>
				4. Incorporação de Conteúdo Externo: &lt;iframe&gt;
			</h3>
			<p className='mb-4'>
				Um <code>&lt;iframe&gt;</code> (inline frame) permite-nos incorporar um
				documento HTML completo dentro de outro. É como ter uma "janela" para
				outro site. É muito útil para inserir conteúdo de terceiros como vídeos
				do YouTube, mapas do Google Maps ou documentos PDF. Para garantir que
				ele seja exibido corretamente em todos os dispositivos, em vez de usar
				atributos de largura e altura fixos, usamos CSS para torná-lo
				responsivo.
			</p>
			<div className='p-4 bg-yellow-50 dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg my-4'>
				<p className='font-semibold text-yellow-800 dark:text-yellow-300'>
					Aviso de Segurança:
				</p>
				<p className='text-yellow-700 dark:text-gray-300'>
					Nem todos os sites permitem ser incorporados num{" "}
					<code>&lt;iframe&gt;</code> por razões de segurança para prevenir
					ataques como "clickjacking".
				</p>
			</div>
			<CodeBlock
				language='html'
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

			<h5 className='text-lg font-semibold mt-6 mb-2'>Resultado:</h5>
			<p className='mb-4'>Vídeo do YouTube:</p>
			<div className='my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700'>
				<iframe
					className='w-full border-0'
					style={{ aspectRatio: "16/9" }}
					src='https://www.youtube.com/embed/dQw4w9WgXcQ'
					title='Vídeo do YouTube'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				></iframe>
			</div>

			<p className='mb-4'>Mapa do Google Maps:</p>
			<div className='my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.906155556202!2d-0.1277583844621535!3d51.50735097963595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce393081e7%3A0x2863a34a17a78363!2sPal%C3%A1cio%20de%20Westminster!5e0!3m2!1spt-PT!2spt!4v1678886591325!5m2!1spt-PT!2spt'
					className='w-full border-0'
					style={{ aspectRatio: "4/3" }}
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				></iframe>
			</div>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Minha Galeria Multimídia Interativa
			</h3>
			<p className='mb-4'>
				Agora é a sua vez de criar uma página interativa e conectá-la à sua
				página principal. Você construirá uma galeria simples para mostrar os
				seus interesses usando links, imagens e conteúdo multimídia.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>Crie o Arquivo:</strong> No seu projeto, crie um novo arquivo
					chamado <code>galeria.html</code>. Não se esqueça da estrutura HTML
					básica e da configuração do <code>&lt;head&gt;</code>.
				</li>
				<li>
					<strong>Título Principal:</strong> Em <code>galeria.html</code>,
					adicione um <code>&lt;h1&gt;</code> que diga "Minha Galeria Pessoal".
				</li>
				<li>
					<strong>Seção de Imagens:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Crie um <code>&lt;h2&gt;</code> para "Minhas Fotos Favoritas".
						</li>
						<li>
							Adicione pelo menos duas imagens (<code>&lt;img&gt;</code>). Pode
							usar imagens do seu computador (caminho relativo) ou da internet
							(caminho absoluto, por exemplo, de{" "}
							<a
								href='https://picsum.photos/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Lorem Picsum
							</a>
							).
						</li>
						<li>
							<strong>Importante!</strong> Certifique-se de que cada imagem
							tenha um atributo <code>alt</code> descritivo.
						</li>
						<li>
							Faça de uma das imagens um link (<code>&lt;a&gt;</code>) para um
							site externo relacionado (ex: uma foto de uma paisagem que linka
							para uma página sobre turismo).
						</li>
					</ul>
				</li>
				<li>
					<strong>Seção de Vídeo e Mapa:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Crie um <code>&lt;h2&gt;</code> para "Meu Vídeo Musical Favorito"
							e incorpore um vídeo do YouTube de forma responsiva.
						</li>
						<li>
							Crie outro <code>&lt;h2&gt;</code> para "Localização do Meu Lugar
							Favorito" e incorpore um mapa do Google Maps de forma responsiva.
						</li>
					</ul>
				</li>
				<li>
					<strong>Conecte as suas Páginas:</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							No seu arquivo principal <code>index.html</code>, adicione um link
							que leve para a sua nova galeria. Por exemplo:{" "}
							<code>
								&lt;a href="galeria.html"&gt;Ver minha galeria&lt;/a&gt;
							</code>
							.
						</li>
						<li>
							Em <code>galeria.html</code>, adicione um link para regressar à
							página principal. Por exemplo:{" "}
							<code>&lt;a href="index.html"&gt;Voltar ao Início&lt;/a&gt;</code>
							.
						</li>
					</ul>
				</li>
				<li>
					<strong>Visualize e Navegue:</strong> Abra <code>index.html</code> com
					o Live Server. Clique no link para ir para a sua galeria e depois use
					o link de regresso para voltar à página inicial. Parabéns, você criou
					um site de várias páginas!
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture4Pt;
