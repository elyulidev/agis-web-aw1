import { SectionTitle } from "@/components/lecture/lecture-blocks";
import CodeBlock from "@/components/ui/code-block";
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

const Lecture17Pt = () => (
	<div className="space-y-8">
		<section>
			<SectionTitle index={1}>
				Dando Vida à Web: Movimento e Dinamismo
			</SectionTitle>
			<p className="mb-4">
				Uma página web estática pode ser informativa, mas o movimento subtil e
				com propósito pode melhorar drasticamente a experiência do utilizador. O
				CSS fornece-nos duas ferramentas poderosas para adicionar dinamismo:{" "}
				<strong>Transições</strong>, para animar suavemente as mudanças de
				estado, e <strong>Transformações</strong>, para alterar a forma e a
				posição de um elemento.
			</p>
		</section>

		<section>
			<SectionTitle index={2}>
				Transições: Animando Mudanças de Estado
			</SectionTitle>
			<p className="mb-4">
				A propriedade <Code>transition</Code> permite-nos definir como um
				elemento deve mudar de um estado para outro de forma gradual, em vez de
				instantaneamente. É perfeita para usar com pseudo-classes como{" "}
				<Code>:hover</Code> ou quando se adicionam classes com JavaScript.
			</p>

			<Subhead>
				A diferença fica a cargo do <Code>transition</Code>
			</Subhead>

			<div className="mb-4">
				<Preview label="Pré-visualização · passe o cursor pelos dois cartões">
					<style>{`.d17-cartao {
  width: 130px; padding: 12px 10px; border-radius: 10px; text-align: center;
  background-color: #3498db; color: white; font-size: 0.85rem;
  cursor: pointer;
}
.d17-sem { background-color: #3498db; }
.d17-sem:hover { background-color: #e74c3c; }
.d17-com { transition: background-color 0.6s ease; }
.d17-com:hover { background-color: #e74c3c; }
.d17-fila { display: flex; flex-wrap: wrap; gap: 16px; }`}</style>
					<div className="d17-fila">
						<div className="d17-cartao d17-sem">sem transition</div>
						<div className="d17-cartao d17-com">com transition 0.6s</div>
					</div>
					<p className="mt-2 text-sm">
						Ambos mudam de azul para vermelho ao passar o cursor, mas o segundo
						faz isso de forma gradual porque a mudança dura <code>0.6s</code>.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- Dois cartões iguais: o segundo declara transition no seu estado base -->
<div class="fila">
  <div class="cartao sem-transition">sem transition</div>
  <div class="cartao com-transition">com transition 0.6s</div>
</div>`}
				css={`.fila { display: flex; flex-wrap: wrap; gap: 16px; }
.cartao {
  width: 130px; padding: 12px 10px; border-radius: 10px; text-align: center;
  background-color: #3498db; color: white; font-size: 0.85rem;
  cursor: pointer;
}
.sem-transition:hover { background-color: #e74c3c; } /* mudança instantânea */
.com-transition { transition: background-color 0.6s ease; } /* a mudança é animada */
.com-transition:hover { background-color: #e74c3c; }`}
			/>

			<Subhead>Propriedades da Transição</Subhead>
			<ul className="list-none space-y-4 pl-0 mb-4 [&>li]:relative [&>li]:pl-7 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.5em] [&>li]:before:h-2.5 [&>li]:before:w-2.5 [&>li]:before:rounded-full [&>li]:before:bg-blue-500">
				<li>
					<strong>
						<Code>transition-property</Code>
					</strong>
					: A propriedade CSS que queremos animar (ex.{" "}
					<Code>background-color</Code>, <Code>transform</Code>).
				</li>
				<li>
					<strong>
						<Code>transition-duration</Code>
					</strong>
					: O tempo que a animação deve durar (ex. <Code>0.3s</Code> ou{" "}
					<Code>300ms</Code>).
				</li>
				<li>
					<strong>
						<Code>transition-timing-function</Code>
					</strong>
					: A "curva de aceleração" da animação (ex. <Code>ease-in</Code>,{" "}
					<Code>ease-out</Code>, <Code>linear</Code>).
				</li>
				<li>
					<strong>
						<Code>transition-delay</Code>
					</strong>
					: Um atraso opcional antes de a animação começar.
				</li>
			</ul>

			<Subhead>
				Atalho <Code>transition</Code>
			</Subhead>
			<p className="mb-4">
				Normalmente, usa-se o atalho para combinar estas propriedades.
			</p>
			<CodeBlock
				language="css"
				codeString={`/* Sintaxe: transition: <propriedade> <duração> <função-tempo> <atraso>; */

.botao {
  background-color: #3498db;
  transform: scale(1);
  /* Definimos a transição no estado base */
  transition: background-color 0.3s ease-out, transform 0.3s ease-out;
}

.botao:hover {
  background-color: #2980b9;
  transform: scale(1.1); /* Fazemos o botão 10% maior */
}`}
			/>
		</section>

		<section>
			<SectionTitle index={3}>
				Transformações 2D: Manipulando a Geometria
			</SectionTitle>
			<p className="mb-4">
				A propriedade <Code>transform</Code> permite-nos modificar visualmente
				um elemento sem afetar o espaço que ele ocupa no fluxo do documento. Os
				outros elementos não se moverão para lhe dar espaço.
			</p>

			<div className="mb-4">
				<Preview label="Pré-visualização · quatro caixas com a mesma transformação aplicada">
					<style>{`.d17-caixa {
  width: 64px; height: 64px; border-radius: 8px;
  background-image: repeating-linear-gradient(45deg, #38bdf8 0 8px, #0ea5e9 8px 16px);
  border: 2px solid #0369a1;
}
.d17-tf-translate { transform: translate(20px, -8px); }
.d17-tf-rotate { transform: rotate(20deg); }
.d17-tf-scale { transform: scale(1.3); }
.d17-tf-skew { transform: skewX(-15deg); }
.d17-fila { display: flex; flex-wrap: wrap; gap: 22px; align-items: flex-start; padding-top: 14px; }
.d17-etiqueta { font-size: 0.75rem; margin-top: 6px; color: #1f2937; }`}</style>
					<p className="text-sm mb-2">
						A caixa original está à esquerda; as restantes aplicam a sua{" "}
						<code>transform</code> a partir da mesma posição sem deslocar o
						resto do conteúdo.
					</p>
					<div className="d17-fila">
						<div>
							<div className="d17-caixa" />
							<p className="d17-etiqueta">original</p>
						</div>
						<div>
							<div className="d17-caixa d17-tf-translate" />
							<p className="d17-etiqueta">translate(20px, -8px)</p>
						</div>
						<div>
							<div className="d17-caixa d17-tf-rotate" />
							<p className="d17-etiqueta">rotate(20deg)</p>
						</div>
						<div>
							<div className="d17-caixa d17-tf-scale" />
							<p className="d17-etiqueta">scale(1.3)</p>
						</div>
						<div>
							<div className="d17-caixa d17-tf-skew" />
							<p className="d17-etiqueta">skewX(-15deg)</p>
						</div>
					</div>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- Quatro caixas: a base e as quatro funções de transformação -->
<div class="fila">
  <div><div class="caixa"></div><p class="etiqueta">original</p></div>
  <div><div class="caixa tf-translate"></div><p class="etiqueta">translate(20px, -8px)</p></div>
  <div><div class="caixa tf-rotate"></div><p class="etiqueta">rotate(20deg)</p></div>
  <div><div class="caixa tf-scale"></div><p class="etiqueta">scale(1.3)</p></div>
  <div><div class="caixa tf-skew"></div><p class="etiqueta">skewX(-15deg)</p></div>
</div>`}
				css={`.fila { display: flex; flex-wrap: wrap; gap: 22px; align-items: flex-start; padding-top: 14px; }
.caixa {
  width: 64px; height: 64px; border-radius: 8px;
  background-image: repeating-linear-gradient(45deg, #38bdf8 0 8px, #0ea5e9 8px 16px);
  border: 2px solid #0369a1;
}
.tf-translate { transform: translate(20px, -8px); }
.tf-rotate { transform: rotate(20deg); }
.tf-scale { transform: scale(1.3); }
.tf-skew { transform: skewX(-15deg); }
.etiqueta { font-size: 0.75rem; margin-top: 6px; color: #1f2937; }`}
			/>

			<Subhead>Funções de Transformação Comuns</Subhead>
			<ul className="list-none space-y-4 pl-0 mb-4 [&>li]:relative [&>li]:pl-7 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.5em] [&>li]:before:h-2.5 [&>li]:before:w-2.5 [&>li]:before:rounded-full [&>li]:before:bg-blue-500">
				<li>
					<strong>
						<Code>translate(x, y)</Code>
					</strong>
					: Move o elemento no plano.
					<Code>translateX()</Code> e <Code>translateY()</Code> são atalhos.
					<CodeBlock
						language="css"
						codeString={`.elemento { transform: translate(50px, 20px); }`}
					/>
				</li>
				<li>
					<strong>
						<Code>rotate(ângulo)</Code>
					</strong>
					: Roda o elemento. O ângulo é especificado em graus (<Code>deg</Code>
					), radianos (<Code>rad</Code>) ou voltas (<Code>turn</Code>).
					<CodeBlock
						language="css"
						codeString={`.icone-atualizar:hover { transform: rotate(360deg); }`}
					/>
				</li>
				<li>
					<strong>
						<Code>scale(x, y)</Code>
					</strong>
					: Escala o elemento. <Code>scale(1)</Code> é o tamanho normal,{" "}
					<Code>scale(1.5)</Code> torna-o 50% maior, <Code>scale(0.5)</Code>{" "}
					torna-o 50% menor. <Code>scaleX()</Code> e <Code>scaleY()</Code> são
					atalhos.
					<CodeBlock
						language="css"
						codeString={`.imagem-galeria:hover { transform: scale(1.05); }`}
					/>
				</li>
				<li>
					<strong>
						<Code>skew(x-ângulo, y-ângulo)</Code>
					</strong>
					: Inclina ou distorce o elemento. <Code>skewX()</Code> e{" "}
					<Code>skewY()</Code> são atalhos.
					<CodeBlock
						language="css"
						codeString={`.forma-decorativa { transform: skewX(-15deg); }`}
					/>
				</li>
			</ul>
			<p className="mb-4">
				Podemos combinar múltiplas transformações numa única declaração. A ordem
				importa.
			</p>
			<CodeBlock
				language="css"
				codeString={`.elemento:hover {
  transform: rotate(10deg) scale(1.2);
}`}
			/>

			<Subhead>
				<Code>transform-origin</Code>
			</Subhead>
			<p className="mb-4">
				Por defeito, as rotações e escalonamentos ocorrem a partir do centro do
				elemento (<Code>50% 50%</Code>). A propriedade{" "}
				<Code>transform-origin</Code> permite-nos alterar este ponto de pivô.
			</p>

			<div className="mb-4">
				<Preview label="Pré-visualização · o mesmo rotate(30deg), pivô diferente (o ponto azul marca a origem)">
					<style>{`.d17-origem {
  position: relative; width: 120px; height: 90px;
  border: 1px dashed #94a3b8; border-radius: 8px; background-color: #f8fafc;
}
.d17-agulha {
  position: absolute; left: 14px; top: 14px; width: 48px; height: 60px;
  background-image: repeating-linear-gradient(0deg, #fbbf24 0 8px, #f59e0b 8px 16px);
  border: 2px solid #b45309; border-radius: 6px;
}
.d17-agulha-girada { transform: rotate(30deg); }
.d17-agulha-centro { transform-origin: center; }
.d17-agulha-base { transform-origin: bottom left; }
.d17-ponto {
  position: absolute; width: 10px; height: 10px; border-radius: 50%;
  background-color: #2563eb; z-index: 2;
}
.d17-centro { left: 33px; top: 39px; }
.d17-base { left: 8px; top: 70px; }
.d17-fila { display: flex; gap: 16px; }
.d17-etiqueta { font-size: 0.75rem; margin-top: 6px; color: #1f2937; }`}</style>
					<div className="d17-fila">
						<div>
							<div className="d17-origem">
								<div className="d17-agulha d17-agulha-girada d17-agulha-centro" />
								<div className="d17-ponto d17-centro" />
							</div>
							<p className="d17-etiqueta">transform-origin: center</p>
						</div>
						<div>
							<div className="d17-origem">
								<div className="d17-agulha d17-agulha-girada d17-agulha-base" />
								<div className="d17-ponto d17-base" />
							</div>
							<p className="d17-etiqueta">transform-origin: bottom left</p>
						</div>
					</div>
					<p className="mt-2 text-sm">
						O mesmo <code>rotate(30deg)</code> nas duas agulhas, mas o pivô
						diferente muda todo o percurso: no centro gira no lugar; apoiada na
						base, varre como o ponteiro dos minutos.
					</p>
				</Preview>
			</div>
			<CodeTabs
				html={`<!-- Duas agulhas giradas 30deg com pivô diferente; cada ponto azul marca a origem -->
<div class="fila">
  <div>
    <div class="origem">
      <div class="agulha agulha-girada agulha-centro"></div>
      <div class="ponto ponto-centro"></div>
    </div>
    <p class="etiqueta">transform-origin: center</p>
  </div>
  <div>
    <div class="origem">
      <div class="agulha agulha-girada agulha-base"></div>
      <div class="ponto ponto-base"></div>
    </div>
    <p class="etiqueta">transform-origin: bottom left</p>
  </div>
</div>`}
				css={`.fila { display: flex; gap: 16px; }
.origem {
  position: relative; width: 120px; height: 90px;
  border: 1px dashed #94a3b8; border-radius: 8px; background-color: #f8fafc;
}
.agulha {
  position: absolute; left: 14px; top: 14px; width: 48px; height: 60px;
  background-image: repeating-linear-gradient(0deg, #fbbf24 0 8px, #f59e0b 8px 16px);
  border: 2px solid #b45309; border-radius: 6px;
}
.agulha-girada { transform: rotate(30deg); }
.agulha-centro { transform-origin: center; }
.agulha-base { transform-origin: bottom left; }
.ponto {
  position: absolute; width: 10px; height: 10px; border-radius: 50%;
  background-color: #2563eb; z-index: 2;
}
.ponto-centro { left: 33px; top: 39px; }
.ponto-base { left: 8px; top: 70px; }
.etiqueta { font-size: 0.75rem; margin-top: 6px; color: #1f2937; }`}
			/>

			<CodeBlock
				language="css"
				codeString={`.ponteiro-relogio {
  transform-origin: bottom center; /* O ponto de rotação estará na base */
}`}
			/>
		</section>

		<section>
			<SectionTitle index={4}>📝 Tarefa: Cartões Interativos</SectionTitle>
			<p className="mb-4">
				Vamos criar um conjunto de cartões que reagem ao passar do cursor sobre
				eles, combinando transições e transformações.
			</p>
			<ol className="list-decimal list-outside space-y-2 pl-5 mb-4 marker:font-bold marker:text-blue-600 dark:marker:text-blue-400">
				<li>
					<strong>HTML:</strong> Crie uma <Code>div</Code> contentora e, dentro
					dela, três
					<Code>div</Code> com a classe <Code>cartao</Code>. Cada cartão pode
					ter um <Code>h3</Code> e um <Code>p</Code>.
				</li>
				<li>
					<strong>CSS (Estado Base):</strong>
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							Estilize os <Code>.cartao</Code> com uma largura, padding, borda,
							sombra (<Code>box-shadow</Code>), etc.
						</li>
						<li>
							<strong>Crucial:</strong> No seletor <Code>.cartao</Code>,
							adicione uma
							<Code>transition: all 0.4s ease;</Code> para que todas as
							alterações sejam animadas suavemente.
						</li>
					</ul>
				</li>
				<li>
					<strong>CSS (Estado Hover):</strong>
					<ul className="list-none space-y-1.5 pl-6 my-2 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-['–'] [&>li]:before:text-blue-500">
						<li>
							Crie uma regra para <Code>.cartao:hover</Code>.
						</li>
						<li>
							Dentro desta regra, use a propriedade <Code>transform</Code> para
							fazer o cartão mover-se um pouco para cima e aumentar de tamanho.
							Por exemplo:{" "}
							<Code>transform: translateY(-10px) scale(1.03);</Code>
						</li>
						<li>
							Adicione também uma alteração na <Code>box-shadow</Code> para a
							tornar mais pronunciada no estado hover.
						</li>
					</ul>
				</li>
				<li>
					Passe o cursor sobre os seus cartões! Deverá ver um efeito de elevação
					suave e atrativo.
				</li>
			</ol>
		</section>
	</div>
);

export default Lecture17Pt;
