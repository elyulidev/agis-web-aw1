import { Box, Sparkles, Square } from "lucide-react";
import {
	Callout,
	ConceptCard,
	SectionTitle,
	Step,
} from "@/components/lecture/lecture-blocks";
import CodeTabs from "@/components/ui/code-tabs";

const Code = ({ children }: { children: React.ReactNode }) => (
	<code className="rounded-md bg-gray-200 px-1.5 py-1 font-mono text-sm text-pink-600 dark:bg-gray-700 dark:text-pink-400">
		{children}
	</code>
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

const Lecture12Pt = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Módulo 3 · modelo de caixa e posicionamento
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Hoje o navegador deixa de ser magia: a página inteira desmonta-se em
				retângulos, e vais poder calcular o tamanho de cada um.
			</p>
		</section>

		<section>
			<SectionTitle index={1}>
				O Conceito Fundamental: Toda a Caixa é um Retângulo
			</SectionTitle>
			<p className="mb-4">
				Em CSS, tudo o que vê numa página é uma caixa retangular. Um parágrafo,
				uma imagem, um cabeçalho, até mesmo a página inteira. O{" "}
				<strong>Modelo de Caixa (Box Model)</strong> é a regra que define como o
				tamanho destas caixas é calculado e como interagem entre si.
			</p>
			<p className="mb-4">
				Cada caixa é composta por quatro partes, de dentro para fora:
			</p>
			<ol className="list-none space-y-3">
				<Step number={1} title="Conteúdo (Content)">
					A área onde o seu texto, imagens, etc., são exibidos.
				</Step>
				<Step number={2} title="Preenchimento (Padding)">
					Um espaço transparente à volta do conteúdo, dentro da borda.
				</Step>
				<Step number={3} title="Borda (Border)">
					Uma linha que rodeia o preenchimento e o conteúdo.
				</Step>
				<Step number={4} title="Margem (Margin)">
					Um espaço transparente fora da borda, que separa a caixa de outros
					elementos.
				</Step>
			</ol>
			<div className="mt-4 grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Box className="h-5 w-5" aria-hidden />}
					title="A caixa de dentro para fora"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Content → Padding → Border: o que a caixa{" "}
					<strong>de dentro para fora</strong> soma ao seu tamanho visível.
				</ConceptCard>
				<ConceptCard
					icon={<Square className="h-5 w-5" aria-hidden />}
					title="A caixa para fora"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Margin: o que a caixa <strong>empurra nos outros</strong>. Não pinta
					nada, só reserva espaço.
				</ConceptCard>
			</div>
		</section>

		<section>
			<SectionTitle index={2}>
				Dimensões do Conteúdo: `width` e `height`
			</SectionTitle>
			<p className="mb-4">
				Estas propriedades controlam o tamanho da área de conteúdo.
			</p>
			<div className="mb-4">
				<Preview label="Pré-visualização · uma caixa de 300×200">
					<style>{`.d12-caixa-largura { width: 300px; height: 200px; background-color: lightblue; }`}</style>
					<div className="d12-caixa-largura flex items-center justify-center text-sm">
						300px × 200px, a cor exata do exemplo
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="caixa">
  Sou a caixa do exemplo: 300px de largura, 200px de altura.
</div>`}
				css={`.caixa {
  width: 300px;
  height: 200px;
  background-color: lightblue;
}`}
			/>
			<Subhead>Min e max: limites em vez de tamanhos fixos</Subhead>
			<p className="mb-4">
				Também pode usar unidades relativas como percentagens (<Code>%</Code>)
				ou unidades de viewport (<Code>vw</Code>, <Code>vh</Code>). Além disso,
				existem propriedades para controlar as dimensões de forma mais flexível:
			</p>
			<ul className="list-disc list-inside space-y-2 pl-4 mb-4">
				<li>
					<strong>
						<Code>min-width</Code> / <Code>min-height</Code>
					</strong>
					: O tamanho mínimo que a caixa pode ter.
				</li>
				<li>
					<strong>
						<Code>max-width</Code> / <Code>max-height</Code>
					</strong>
					: O tamanho máximo. <Code>max-width: 100%;</Code> é muito comum para
					tornar as imagens responsivas.
				</li>
			</ul>
		</section>

		<section>
			<SectionTitle index={3}>
				Preenchimento (Padding): Espaço Interior
			</SectionTitle>
			<p className="mb-4">
				O padding é o espaço entre o conteúdo e a borda. É como a margem de um
				livro. Podem-se definir os quatro lados individualmente ou com um atalho
				(shorthand).
			</p>
			<div className="mb-4">
				<Preview label="Pré-visualização · o padding vê-se e sente-se">
					<style>{`.d12-caixa-pad {
  padding: 10px 20px;
  background-color: lemonchiffon;
  border: 1px solid #999;
}`}</style>
					<div className="d12-caixa-pad text-sm">
						O meu conteúdo respira 10px em cima, 20px nos lados e 10px em baixo.
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="caixa">
  O meu conteúdo respira graças ao padding.
</div>`}
				css={`/* Lado a lado */
.caixa {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}

/* Atalho (shorthand) - no sentido dos ponteiros do relógio: Cima, Direita, Baixo, Esquerda */
.caixa {
  /* 1 valor: todos os lados */
  padding: 20px;

  /* 2 valores: (cima/baixo) (esquerda/direita) */
  padding: 10px 20px;
}`}
			/>
		</section>

		<section>
			<SectionTitle index={4}>Borda (Border): A Linha Exterior</SectionTitle>
			<p className="mb-4">
				A borda é definida com três propriedades principais: espessura, estilo e
				cor.
			</p>
			<div className="mb-4">
				<Preview label="Pré-visualização · três estilos de borda">
					<style>{`.d12-tag-b { border: 2px solid #333; padding: 6px 10px; display: inline-block; margin: 2px; font-size: 0.85rem; }
.d12-tag-d { border: 2px dashed #333; padding: 6px 10px; display: inline-block; margin: 2px; font-size: 0.85rem; }
.d12-tag-dot { border: 2px dotted #333; padding: 6px 10px; display: inline-block; margin: 2px; font-size: 0.85rem; }`}</style>
					<div>
						<span className="d12-tag-b">solid</span>
						<span className="d12-tag-d">dashed</span>
						<span className="d12-tag-dot">dotted</span>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="caixa">
  A minha borda envolve-me: 2px, traço sólido, cor #333.
</div>`}
				css={`/* Propriedades individuais */
.caixa {
  border-width: 2px;
  border-style: solid; /* Outros: dashed, dotted, double, etc. */
  border-color: #333;
}

/* Atalho (shorthand) - a ordem não importa */
.caixa {
  border: 2px solid #333;
}`}
			/>
		</section>

		<section>
			<SectionTitle index={5}>O Dilema do Tamanho: `box-sizing`</SectionTitle>
			<p className="mb-4">
				Por defeito (<Code>box-sizing: content-box;</Code>), quando define um{" "}
				<Code>width: 300px;</Code>, essa é a largura do{" "}
				<strong>conteúdo</strong>. O padding e a borda são adicionados a essa
				largura, tornando o tamanho total da caixa maior que 300px. Isto é muito
				pouco intuitivo.
			</p>
			<p className="mb-4">
				A solução moderna é{" "}
				<strong>
					<Code>box-sizing: border-box;</Code>
				</strong>
				. Com este valor, o <Code>width</Code> que define é a largura total da
				caixa, incluindo padding e borda. O navegador ajusta o espaço do
				conteúdo automaticamente.
			</p>
			<div className="mb-4">
				<Preview label="Pré-visualização · mesma declaração width, dois totais diferentes">
					<style>{`.d12-cont, .d12-bor {
  width: 200px; padding: 20px; border: 4px solid #64748b; background-color: #e0f2fe; margin-bottom: 6px;
}
.d12-cont { box-sizing: content-box; } /* 200 + 20 + 20 + 4 + 4 = 248px */
.d12-bor { box-sizing: border-box; }  /* 200px no total, o navegador subtrai */`}</style>
					<div>
						<div className="d12-cont text-sm">content-box: total 248px</div>
						<div className="d12-bor text-sm">border-box: total 200px</div>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="duas-caixas">
  <div class="conteudo">content-box: total 248px</div>
  <div class="bordada">border-box: total 200px</div>
</div>`}
				css={`/* As duas têm a MESMA declaração width... */
.conteudo, .bordada {
  width: 200px;
  padding: 20px;
  border: 4px solid #64748b;
  background-color: #e0f2fe;
}

/* ...mas o modo do tamanho muda o total */
.conteudo {
  box-sizing: content-box; /* 200 + 40 + 8 = 248px */
}

.bordada {
  box-sizing: border-box; /* 200px, o navegador subtrai por dentro */
}`}
			/>
			<Callout variant="info" title="Prática Recomendada Universal">
				Aplique <Code>border-box</Code> a todos os elementos no início do seu
				CSS. Isto torna o design de layouts incrivelmente mais fácil e
				previsível.
			</Callout>
			<CodeTabs
				css={`html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit; /* Todos os elementos herdam de html */
}`}
			/>
		</section>

		<section>
			<SectionTitle index={6}>
				📝 Tarefa: Construa o seu Cartão de Perfil
			</SectionTitle>
			<p className="mb-4">
				Vamos criar um componente de cartão simples para pôr em prática o modelo
				de caixa.
			</p>
			<p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
				Podes arrancar com este HTML e esta folha prontos (copia e cola), e
				depois completar o CSS onde os passos o pedem:
			</p>
			<CodeTabs
				html={`<div class="cartao-perfil">
  <h2>Ada Lovelace</h2>
  <p>Primeira programadora da história.</p>
</div>`}
				css={`/* Passo 2: o reset de box-sizing para todos os elementos */
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

/* Passo 3: aplique os estilos pedidos ao cartão */
.cartao-perfil {
  /* width: 300px; */
  /* padding: 20px; */
  /* border: 1px solid #ccc; */
  /* background-color: #f9f9f9; */
}`}
			/>
			<ol className="list-decimal list-inside space-y-2 pl-4 mb-4 mt-4">
				<li>
					Já tens a estrutura: uma <Code>&lt;div&gt;</Code> no seu HTML com a
					classe <Code>cartao-perfil</Code>, um <Code>&lt;h2&gt;</Code> com um
					nome e um <Code>&lt;p&gt;</Code> com uma breve descrição.
				</li>
				<li>
					No seu CSS, adicione a regra de <Code>box-sizing: border-box;</Code>{" "}
					para todos os elementos, como mostrado acima.
				</li>
				<li>
					Selecione <Code>.cartao-perfil</Code> e aplique-lhe os seguintes
					estilos:
					<ul className="list-disc list-inside space-y-1 pl-6 my-2">
						<li>
							Um <Code>width</Code> de <Code>300px</Code>.
						</li>
						<li>
							Um <Code>padding</Code> de <Code>20px</Code> em todos os lados.
						</li>
						<li>
							Uma <Code>border</Code> de <Code>1px solid #ccc</Code>.
						</li>
						<li>
							Um <Code>background-color</Code> de <Code>#f9f9f9</Code>.
						</li>
					</ul>
				</li>
				<li>
					Observe o resultado. Graças a <Code>border-box</Code>, a largura total
					do cartão na página será exatamente 300px.
				</li>
				<li>
					Experimente: Comente temporariamente a regra de{" "}
					<Code>box-sizing</Code>. Verá que o cartão se torna mais largo (300px
					+ 20px + 20px + 1px + 1px = 342px). Agora entende porque{" "}
					<Code>border-box</Code> é tão essencial!
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture12Pt;
