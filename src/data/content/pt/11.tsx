import {
	Award,
	Flag,
	Hash,
	Layers,
	Sparkles,
	Trophy,
	Type,
} from "lucide-react";
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

const Lecture11Pt = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Módulo 3 · modelo de caixa e posicionamento
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Arrancamos o módulo 3 com a lição que separa quem copia CSS de quem o
				domina: qual regra ganha quando várias apontam para o mesmo elemento.
			</p>
		</section>

		<section>
			<SectionTitle index={1}>
				Resolvendo o Mistério: Porque é que o meu CSS não funciona?
			</SectionTitle>
			<p className="mb-4">
				Chegámos a uma das lições mais importantes e, muitas vezes, confusas do
				CSS. Já sabemos como escrever regras básicas, mas o que acontece quando
				duas ou mais regras apontam para o mesmo elemento e definem a mesma
				propriedade com valores diferentes?
			</p>
			<p className="mb-4">
				O navegador não se confunde; ele segue um algoritmo estrito para
				determinar que regra "ganha". Entender a{" "}
				<strong>Cascata, a Especificidade e a Herança</strong> é a chave para
				deixar de lutar contra o seu CSS e começar a controlá-lo com precisão.
			</p>
		</section>

		<section>
			<SectionTitle index={2}>Aprofundando a Cascata e a Herança</SectionTitle>
			<p className="mb-4">
				Estes dois conceitos, que introduzimos brevemente, formam a base de como
				os estilos fluem.
			</p>
			<div className="mb-4 grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Layers className="h-5 w-5" aria-hidden />}
					title="Cascata"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Refere-se à ordem em que as regras são declaradas. Se todas as outras
					condições forem iguais,{" "}
					<strong>a última regra declarada ganha</strong>. Isto significa que a
					ordem das suas tags <Code>&lt;link&gt;</Code> no HTML ou a ordem das
					regras dentro de um ficheiro CSS é crucial.
				</ConceptCard>
				<ConceptCard
					icon={<Flag className="h-5 w-5" aria-hidden />}
					title="Herança"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Lembre-se que os elementos filhos herdam certas propriedades dos seus
					pais, como <Code>color</Code> e <Code>font-family</Code>. Se não
					aplicar uma cor a um <Code>&lt;p&gt;</Code>, ele assumirá a cor do seu
					pai, por exemplo, o <Code>&lt;body&gt;</Code>.
				</ConceptCard>
			</div>
			<div className="mb-4">
				<Preview label="Pré-visualização · a cascata em ação">
					<style>{`.d11-cascada {
  color: #e74c3c; /* Primeira regra: vermelho */
}
.d11-cascada {
  color: #16a085; /* Mesma especificidade: a última ganha */
}`}</style>
					<p className="d11-cascada font-mono text-sm">
						Ao ver este texto em verde, percebes a cascata: o parágrafo declara
						a cor duas vezes, e simplesmente chegou último.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<p class="cascata">
  Este texto declara a cor duas vezes: vermelho primeiro, verde depois.
</p>`}
				css={`/* Mesmo seletor, mesma especificidade... */
.cascata {
  color: #e74c3c; /* vermelho */
}

/* ...e ganha a regra que aparece ÚLTIMA na cascata */
.cascata {
  color: #16a085; /* verde */
}`}
			/>
			<p className="mt-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
				E a herança vê-se assim: o pai declara a cor e a tipografia, e os filhos
				recebem-nas grátis:
			</p>
			<div className="mb-4">
				<Preview label="Pré-visualização · herança da cor do pai">
					<style>{`.d11-pai { color: #8e44ad; font-family: Georgia, serif; }`}</style>
					<div className="d11-pai">
						Sou o pai e declaro a tipografia.
						<p className="mt-2">
							E eu, o parágrafo filho, herdei o teu <em>color</em> e a tua{" "}
							<em>font-family</em> sem declarar nada.
						</p>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<div class="pai">
  Sou o pai e declaro a tipografia.
  <p>E eu, o parágrafo filho, herdei o teu color e a tua font-family.</p>
</div>`}
				css={`/* Só o pai declara estilos... */
.pai {
  color: #8e44ad;
  font-family: Georgia, serif;
}

/* ...o filho não tem nenhuma regra: hereda color e font-family */`}
			/>
		</section>

		<section>
			<SectionTitle index={3}>
				Especificidade: O Sistema de Pontuação do CSS
			</SectionTitle>
			<p className="mb-4">
				Quando a ordem não é suficiente para desempatar, o navegador calcula a{" "}
				<strong>especificidade</strong> de cada seletor. O seletor com a
				pontuação mais alta ganha, independentemente da ordem. Podemos imaginar
				um sistema de pontos:
			</p>
			<div className="mb-4 grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Trophy className="h-5 w-5" aria-hidden />}
					title="Estilos em linha"
					iconClassName="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
				>
					<Code>style="..."</Code>: <strong>1000 pontos</strong>. São os mais
					poderosos.
				</ConceptCard>
				<ConceptCard
					icon={<Award className="h-5 w-5" aria-hidden />}
					title="IDs"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					<Code>#id</Code>: <strong>100 pontos</strong> por cada ID no seletor.
				</ConceptCard>
				<ConceptCard
					icon={<Hash className="h-5 w-5" aria-hidden />}
					title="Classes, Atributos e Pseudo-classes"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					<Code>.classe</Code>, <Code>[type="..."]</Code>, <Code>:hover</Code>:{" "}
					<strong>10 pontos</strong> por cada um.
				</ConceptCard>
				<ConceptCard
					icon={<Type className="h-5 w-5" aria-hidden />}
					title="Elementos e Pseudo-elementos"
					iconClassName="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
				>
					<Code>div</Code>, <Code>p</Code>, <Code>::before</Code>:{" "}
					<strong>1 ponto</strong> por cada um.
				</ConceptCard>
			</div>
			<p>
				O seletor universal (`*`), os combinadores (`&gt;`, `+`, `~`) e a
				pseudo-classe `:not()` não adicionam pontos.
			</p>

			<Subhead>Exemplos de Cálculo</Subhead>
			<div className="overflow-x-auto my-6 rounded-lg border">
				<table className="min-w-full text-sm">
					<thead className="bg-gray-50 dark:bg-gray-800">
						<tr>
							<th className="p-3 text-left">Seletor</th>
							<th className="p-3 text-left">
								Cálculo (IDs, Classes, Elementos)
							</th>
							<th className="p-3 text-left">Pontuação Total</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
						<tr className="dark:bg-gray-900">
							<td className="p-3 font-mono">p</td>
							<td className="p-3">0, 0, 1</td>
							<td className="p-3">1</td>
						</tr>
						<tr className="dark:bg-gray-900/50">
							<td className="p-3 font-mono">.btn-principal</td>
							<td className="p-3">0, 1, 0</td>
							<td className="p-3">10</td>
						</tr>
						<tr className="dark:bg-gray-900">
							<td className="p-3 font-mono">#menu-principal</td>
							<td className="p-3">1, 0, 0</td>
							<td className="p-3">100</td>
						</tr>
						<tr className="dark:bg-gray-900/50">
							<td className="p-3 font-mono">#nav .link:hover</td>
							<td className="p-3">1, 2, 0</td>
							<td className="p-3">120</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="mb-4">
				<Preview label="Pré-visualização · batalha etiqueta vs classe vs ID">
					<style>{`p.d11-paragrafo { color: #16a085; } /* etiqueta + classe = 11 */
.d11-destacado { color: #e67e22; } /* classe = 10 */
#d11-titulo { color: #2980b9; } /* ID = 100: ganha apesar de declarar-se primeiro */`}</style>
					<p id="d11-titulo" className="d11-paragrafo font-medium">
						Três regras apontam para mim ao mesmo tempo: etiqueta+classe (11),
						classe (10) e ID (100). Ganha o ID, declarado primeiro ou por
						último.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<p id="titulo" class="destacado">
  Três seletores apontam para mim ao mesmo tempo: etiqueta, classe e ID.
</p>`}
				css={`/* 1 ponto: etiqueta, mais 10 pontos: classe = 11 */
p.destacado {
  color: #16a085;
}

/* 10 pontos: só a classe = 10 */
.destacado {
  color: #e67e22;
}

/* 100 pontos: o ID ganha apesar de aparecer primeiro na cascata */
#titulo {
  color: #2980b9;
}`}
			/>
		</section>

		<section>
			<SectionTitle index={4}>A Opção Nuclear: `!important`</SectionTitle>
			<p className="mb-4">
				Se adicionar <Code>!important</Code> no final de uma declaração de
				estilo, essa declaração anulará qualquer outra, independentemente da sua
				especificidade.
			</p>
			<div className="mb-4">
				<Preview label="Pré-visualização · !important impõe-se aos pontos">
					<style>{`.d11-campo .d11-capa { color: #e74c3c; } /* 20 pontos: duas classes */
.d11-campo p { color: #2e86c1 !important; } /* 11 pontos, mas com !important */`}</style>
					<div className="d11-campo">
						<p className="d11-capa font-mono text-sm">
							A regra de 20 pontos é mais específica, mas perde contra o azul
							porque tem um !important.
						</p>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<p class="rainha">
  Este texto declara a cor duas vezes e o azul ganha.
</p>`}
				css={`/* Uma de 11 pontos: etiqueta + classe... */
p.rainha {
  color: red;
}

/* ...perde contra esta de 1 ponto pelo !important */
p {
  color: blue !important;
}`}
			/>
			<Callout variant="warning" title="Use com extrema precaução!">
				<Code>!important</Code> é frequentemente um sinal de que a estrutura do
				seu CSS é demasiado complexa ou "suja". Quebra a cascata natural e torna
				a depuração um pesadelo. Evite-o sempre que possível e reserve-o para
				casos muito específicos, como anular estilos de terceiros.
			</Callout>
		</section>

		<section>
			<SectionTitle index={5}>📝 Tarefa: Detetive de CSS</SectionTitle>
			<p className="mb-4">
				A sua missão é analisar o seguinte HTML e CSS e prever o resultado
				final.
			</p>
			<CodeTabs
				html={`<div class="container">
  <p id="texto-chave" class="paragrafo" style="color: purple;">
    Este é um parágrafo muito importante.
  </p>
</div>`}
				css={`/* Regra 1 */
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
			<p className="mt-4">
				Analise as três regras CSS e o estilo em linha. Com base na cascata e na
				especificidade, responda:
			</p>
			<ol className="list-decimal list-inside space-y-2 pl-4 mb-4">
				<li>Qual regra tem a maior especificidade? E a menor?</li>
				<li>Qual será a cor final do texto do parágrafo?</li>
				<li>Explique por que essa cor vence a "batalha de estilos".</li>
			</ol>
		</section>
	</div>
);

export default Lecture11Pt;
