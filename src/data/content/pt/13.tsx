import { LifeBuoy, MoveHorizontal, Rows3, Sparkles, Timer } from "lucide-react";
import {
	Callout,
	ConceptCard,
	SectionTitle,
} from "@/components/lecture/lecture-blocks";
import CodeTabs from "@/components/ui/code-tabs";

const Code = ({ children }: { children: React.ReactNode }) => (
	<code className="rounded-md bg-gray-200 px-1.5 py-1 font-mono text-sm text-pink-600 dark:bg-gray-700 dark:text-pink-400">
		{children}
	</code>
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

const Lecture13Pt = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Módulo 3 · modelo de caixa e posicionamento
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Ontem fechámos a caixa por dentro. Hoje a caixa convive com os vizinhos:
				margens, o mistério do colapso, a centralização e o <em>display</em>.
			</p>
		</section>

		<section>
			<SectionTitle index={1}>Margem (Margin): Espaço Exterior</SectionTitle>
			<p className="mb-4">
				Cobrimos as três camadas internas do modelo de caixa. A última camada é
				a <strong>margem (margin)</strong>, que é o espaço <em>fora</em> da
				borda. A margem é transparente e é usada para criar espaço entre um
				elemento e os seus vizinhos.
			</p>
			<p className="mb-4">
				A sintaxe para as margens é idêntica à do padding, com propriedades
				individuais (<Code>margin-top</Code>, etc.) e atalhos (shorthands).
			</p>
			<div className="mb-4">
				<Preview label="Pré-visualização · o contorno laranja marca a borda: todo o ar em redor é margem">
					<style>{`.d13-marcada { margin: 20px 15px 30px; outline: 1px dashed #f97316; }`}</style>
					<div className="d13-marcada dark:text-gray-900 bg-blue-50 border border-blue-200 p-2 text-sm">
						20px de espaço em cima, 15px nos lados, 30px em baixo.
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="elemento">
  20px de espaço em cima, 15px nos lados, 30px em baixo.
</div>`}
				css={`.elemento {
  /* 20px de espaço em cima, 15px nos lados, 30px em baixo */
  margin: 20px 15px 30px;
}

/* Andaime para o exemplo se ver: */
.elemento {
  background-color: #eff6ff;
  border: 1px solid #bfdbfe;
  padding: 8px;
}`}
			/>
		</section>

		<section>
			<SectionTitle index={2}>O Mistério do Colapso de Margens</SectionTitle>
			<p className="mb-4">
				As margens têm um comportamento único chamado{" "}
				<strong>colapso de margens (margin collapsing)</strong>. Quando dois
				elementos de bloco com margens verticais estão um em cima do outro, as
				suas margens não se somam. Em vez disso, a margem maior "ganha" e a
				menor "colapsa" ou desaparece.
			</p>
			<p className="mb-4">
				Isto só acontece com as margens verticais (<Code>margin-top</Code> e{" "}
				<Code>margin-bottom</Code>), não com as horizontais.
			</p>
			<div className="mb-4">
				<Preview label="Pré-visualização · o buraco é 30px, não 50px">
					<style>{`.d13-sub { background-color: #dbeafe; border: 1px solid #93c5fd; padding: 8px; font-size: 0.9rem; color: #1f2937; }
.d13-sub-cima { margin-bottom: 30px; }
.d13-sub-baixo { margin-top: 20px; }`}</style>
					<div>
						<div className="d13-sub d13-sub-cima">
							Caixa superior: margin-bottom: 30px
						</div>
						<div className="d13-sub d13-sub-baixo">
							Caixa inferior: margin-top: 20px
						</div>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="caixa-cima">Caixa superior: margin-bottom: 30px</div>
<div class="caixa-baixo">Caixa inferior: margin-top: 20px</div>`}
				css={`.caixa-cima {
  margin-bottom: 30px;
}
.caixa-baixo { margin-top: 20px; }

/* Andaime para o exemplo se ver: */
.caixa-cima,
.caixa-baixo {
  background-color: #dbeafe;
  border: 1px solid #93c5fd;
  padding: 8px;
  font-size: 0.9rem;
}

/* O espaço entre as duas caixas será de 30px, não de 50px */`}
			/>
		</section>

		<section>
			<SectionTitle index={3}>
				Centralização Horizontal: `margin: auto`
			</SectionTitle>
			<p className="mb-4">
				Uma das técnicas mais comuns e essenciais em CSS é centrar um elemento
				de bloco horizontalmente dentro do seu contentor. Isto consegue-se
				facilmente dando ao elemento uma largura definida e definindo as suas
				margens esquerda e direita para <Code>auto</Code>.
			</p>
			<div className="mb-4">
				<Preview label="Pré-visualização · o bloco centra-se com margin: 0 auto">
					<style>{`.d13-centrada {
  width: 80%;
  background-color: #dcfce7;
  border: 1px solid #86efac;
  padding: 8px;
  color: #1f2937;
  margin: 0 auto; /* auto nos lados reparte o espaço disponível */
}`}</style>
					<div className="d13-centrada text-sm">
						Tenho a largura definida e as margens excedentes levam-me ao centro.
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="contentor-centrado">
  Tenho a largura definida e as margens excedentes levam-me ao centro.
</div>`}
				css={`.contentor-centrado {
  width: 80%; /* Deve ter uma largura definida que não seja 100% */
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

/* Andaime para o exemplo se ver: */
.contentor-centrado {
  background-color: #dcfce7;
  border: 1px solid #86efac;
  padding: 8px;
}

/* Atalho (shorthand) para o mesmo */
.contentor-centrado-atalho {
  width: 80%;
  max-width: 900px;
  margin: 0 auto; /* 0 para cima/baixo, auto para esquerda/direita */
  background-color: #dcfce7;
  border: 1px solid #86efac;
  padding: 8px;
}`}
			/>
		</section>

		<section>
			<SectionTitle index={4}>
				A Propriedade `display`: O Comportamento do Elemento
			</SectionTitle>
			<p className="mb-4">
				A propriedade <Code>display</Code> é uma das mais importantes do CSS.
				Define como um elemento é renderizado e como interage com os outros. Os
				valores mais fundamentais são:
			</p>
			<div className="mb-4 grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Rows3 className="h-5 w-5" aria-hidden />}
					title="display: block"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					<ul className="list-disc list-inside space-y-1">
						<li>Começa numa nova linha.</li>
						<li>Ocupa toda a largura disponível por defeito.</li>
						<li>
							Respeita as propriedades <Code>width</Code>, <Code>height</Code>,{" "}
							<Code>margin</Code>, <Code>padding</Code> e <Code>border</Code>.
						</li>
						<li>
							Exemplos: <Code>&lt;div&gt;</Code>, <Code>&lt;p&gt;</Code>,{" "}
							<Code>&lt;h1&gt;</Code>-<Code>&lt;h6&gt;</Code>,{" "}
							<Code>&lt;ul&gt;</Code>, <Code>&lt;li&gt;</Code>.
						</li>
					</ul>
				</ConceptCard>
				<ConceptCard
					icon={<MoveHorizontal className="h-5 w-5" aria-hidden />}
					title="display: inline"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					<ul className="list-disc list-inside space-y-1">
						<li>Não começa numa nova linha; flui com o texto.</li>
						<li>Ocupa apenas a largura do seu conteúdo.</li>
						<li>
							<strong>Ignora</strong> <Code>width</Code> e <Code>height</Code>.
							As margens e paddings verticais têm um efeito limitado.
						</li>
						<li>
							Exemplos: <Code>&lt;span&gt;</Code>, <Code>&lt;a&gt;</Code>,{" "}
							<Code>&lt;strong&gt;</Code>, <Code>&lt;em&gt;</Code>.
						</li>
					</ul>
				</ConceptCard>
				<ConceptCard
					icon={<LifeBuoy className="h-5 w-5" aria-hidden />}
					title="display: inline-block"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					<ul className="list-disc list-inside space-y-1">
						<li>
							o melhor de dois mundos: comporta-se como um elemento{" "}
							<Code>inline</Code> (não começa numa nova linha) mas respeita{" "}
							<Code>width</Code>, <Code>height</Code>, <Code>margin</Code> e{" "}
							<Code>padding</Code> como um elemento <Code>block</Code>.
						</li>
						<li>
							Muito útil para criar elementos de navegação ou botões que devem
							estar um ao lado do outro mas com dimensões específicas.
						</li>
					</ul>
				</ConceptCard>
				<ConceptCard
					icon={<Timer className="h-5 w-5" aria-hidden />}
					title="display: none"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					<ul className="list-disc list-inside space-y-1">
						<li>
							Remove completamente o elemento da página. Não ocupa espaço e é
							como se não existisse no HTML.
						</li>
						<li>
							Diferença chave com <Code>visibility: hidden;</Code>, que oculta o
							elemento mas este continua a ocupar o seu espaço no layout.
						</li>
					</ul>
				</ConceptCard>
			</div>
			<div className="mb-4">
				<Preview label="Pré-visualização · um inline pisa o seu padding vertical; um inline-block não">
					<style>{`.d13-categoria {
  padding: 6px 12px;
  background-color: gold;
  border-radius: 999px;
  color: #1f2937;
}
.d13-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #2e86c1;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}`}</style>
					<div className="text-sm">
						<p>
							Um <span className="d13-categoria">tutorial</span> com padding
							vertical: a etiqueta pisa-se sobre as linhas vizinhas.
						</p>
						<a href="#ler-mais" className="d13-btn">
							Ler mais
						</a>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<article>
  <p>
    Um <span class="categoria">tutorial</span> para principiantes.
  </p>
  <a class="btn-ler-mais" href="#">Ler mais</a>
</article>`}
				css={`/* Um <span> é inline por defeito: o padding vertical "pisa-se" */
.categoria {
  padding: 6px 12px;
  background-color: gold;
  border-radius: 999px;
  /* display: inline-block;  ← descomenta e vê como agora respeita o espaço */
}

/* O botão precisa de inline-block para aceitar padding e margens */
.btn-ler-mais {
  display: inline-block;
  padding: 10px 20px;
  background-color: #2e86c1;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}`}
			/>
		</section>

		<section>
			<SectionTitle index={5}>
				📝 Tarefa: Maquetando um Blog Simples
			</SectionTitle>
			<p className="mb-4">
				Vamos aplicar estes conceitos para criar a estrutura de uma página de
				blog.
			</p>
			<p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
				Partimos deste HTML e deste esqueleto de CSS; depois completa onde os
				passos te pedirem:
			</p>
			<CodeTabs
				html={`<div class="pagina-wrapper">
  <header>O meu blog</header>
  <main>
    <article>
      <h2>Título do artigo</h2>
      <p>
        Publicado em <span class="categoria">tutorial</span>
      </p>
      <a class="btn-ler-mais" href="#">Ler mais</a>
    </article>
    <article>
      <!-- Cria mais artigos -->
    </article>
  </main>
  <footer>Rodapé</footer>
</div>`}
				css={`/* Centra o wrapper na página */
.pagina-wrapper {
  /* width: 90%; */
  /* max-width: 1000px; */
  /* margin: 0 auto; */
}

/* Separa os artigos verticalmente */
article {
  /* margin-bottom: 24px; */
}

/* A etiqueta de categoria: primeiro inline, depois inline-block */
.categoria {
  /* padding: 6px 12px; */
  /* background-color: gold; */
  /* border-radius: 999px; */
}

/* O botão "Ler mais" */
.btn-ler-mais {
  /* display: inline-block; */
  /* padding: 10px 20px; */
}`}
			/>
			<ol className="list-decimal list-inside space-y-2 pl-4 mb-4 mt-4">
				<li>
					<strong>HTML:</strong> Já tens a <Code>&lt;div&gt;</Code> com a classe{" "}
					<Code>pagina-wrapper</Code>, um <Code>&lt;header&gt;</Code>, um{" "}
					<Code>&lt;main&gt;</Code> e um <Code>&lt;footer&gt;</Code>, com vários{" "}
					<Code>&lt;article&gt;</Code> dentro do <Code>&lt;main&gt;</Code>.
				</li>
				<li>
					<strong>CSS:</strong>
					<ul className="list-disc list-inside space-y-1 pl-6 my-2">
						<li>
							Dê à <Code>.pagina-wrapper</Code> uma <Code>width</Code> (ex.{" "}
							<Code>90%</Code>) e uma <Code>max-width</Code> (ex.{" "}
							<Code>1000px</Code>).
						</li>
						<li>
							Use a técnica de <Code>margin: 0 auto;</Code> para centrar a{" "}
							<Code>.pagina-wrapper</Code> na página.
						</li>
						<li>
							Dê a cada <Code>&lt;article&gt;</Code> uma{" "}
							<Code>margin-bottom</Code> para os separar verticalmente.
						</li>
						<li>
							Dentro de um <Code>&lt;article&gt;</Code>, adicione um{" "}
							<Code>&lt;span&gt;</Code> com a classe <Code>categoria</Code>. Dê
							a esta classe um <Code>padding</Code>, uma{" "}
							<Code>background-color</Code> e um <Code>border-radius</Code>.
							Observe como, por ser <Code>inline</Code> por defeito, o padding
							se comporta.
						</li>
						<li>
							Agora, altere o <Code>display</Code> de <Code>.categoria</Code>{" "}
							para <Code>inline-block</Code>. Observe como agora respeita melhor
							o espaço.
						</li>
						<li>
							Finalmente, crie um botão "Ler mais" (um <Code>&lt;a&gt;</Code>{" "}
							com uma classe) e dê-lhe <Code>display: inline-block;</Code> para
							poder aplicar-lhe padding e margens e para que se alinhe
							corretamente com o texto.
						</li>
					</ul>
				</li>
			</ol>
			<Callout variant="tip" title="Cierre">
				Ao terminar, tens uma página centrada, artigos separados e botões com
				padding. Tudo só com margin e display: não precisas de flexbox nem de
				nada parecido ainda.
			</Callout>
		</section>
	</div>
);

export default Lecture13Pt;
