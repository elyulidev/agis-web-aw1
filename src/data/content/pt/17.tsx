import CodeBlock from "@/components/ui/code-block";

const Lecture17Pt = () => (
	<div className='space-y-8'>
		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				1. Dando Vida à Web: Movimento e Dinamismo
			</h3>
			<p className='mb-4'>
				Uma página web estática pode ser informativa, mas o movimento subtil e
				com propósito pode melhorar drasticamente a experiência do utilizador. O
				CSS fornece-nos duas ferramentas poderosas para adicionar dinamismo:{" "}
				<strong>Transições</strong>, para animar suavemente as mudanças de
				estado, e <strong>Transformações</strong>, para alterar a forma e a
				posição de um elemento.
			</p>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				2. Transições: Animando Mudanças de Estado
			</h3>
			<p className='mb-4'>
				A propriedade <code>transition</code> permite-nos definir como um
				elemento deve mudar de um estado para outro de forma gradual, em vez de
				instantaneamente. É perfeita para usar com pseudo-classes como{" "}
				<code>:hover</code> ou quando se adicionam classes com JavaScript.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Propriedades da Transição
			</h4>
			<ul className='list-disc list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>`transition-property`</strong>: A propriedade CSS que queremos
					animar (ex. `background-color`, `transform`).
				</li>
				<li>
					<strong>`transition-duration`</strong>: O tempo que a animação deve
					durar (ex. `0.3s` ou `300ms`).
				</li>
				<li>
					<strong>`transition-timing-function`</strong>: A "curva de aceleração"
					da animação (ex. `ease-in`, `ease-out`, `linear`).
				</li>
				<li>
					<strong>`transition-delay`</strong>: Um atraso opcional antes de a
					animação começar.
				</li>
			</ul>

			<h4 className='text-xl font-semibold mt-6 mb-2'>Atalho `transition`</h4>
			<p className='mb-4'>
				Normalmente, usa-se o atalho para combinar estas propriedades.
			</p>
			<CodeBlock
				language='css'
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
			<h3 className='text-2xl font-semibold mb-3'>
				3. Transformações 2D: Manipulando a Geometria
			</h3>
			<p className='mb-4'>
				A propriedade <code>transform</code> permite-nos modificar visualmente
				um elemento sem afetar o espaço que ele ocupa no fluxo do documento. Os
				outros elementos não se moverão para lhe dar espaço.
			</p>

			<h4 className='text-xl font-semibold mt-6 mb-2'>
				Funções de Transformação Comuns
			</h4>
			<ul className='list-disc list-inside space-y-4 pl-4 mb-4'>
				<li>
					<strong>`translate(x, y)`</strong>: Move o elemento no plano.
					`translateX()` e `translateY()` são atalhos.
					<CodeBlock
						language='css'
						codeString={`.elemento { transform: translate(50px, 20px); }`}
					/>
				</li>
				<li>
					<strong>`rotate(ângulo)`</strong>: Roda o elemento. O ângulo é
					especificado em graus (`deg`), radianos (`rad`) ou voltas (`turn`).
					<CodeBlock
						language='css'
						codeString={`.icone-atualizar:hover { transform: rotate(360deg); }`}
					/>
				</li>
				<li>
					<strong>`scale(x, y)`</strong>: Escala o elemento. `scale(1)` é o
					tamanho normal, `scale(1.5)` torna-o 50% maior, `scale(0.5)` torna-o
					50% menor. `scaleX()` e `scaleY()` são atalhos.
					<CodeBlock
						language='css'
						codeString={`.imagem-galeria:hover { transform: scale(1.05); }`}
					/>
				</li>
				<li>
					<strong>`skew(x-ângulo, y-ângulo)`</strong>: Inclina ou distorce o
					elemento. `skewX()` e `skewY()` são atalhos.
					<CodeBlock
						language='css'
						codeString={`.forma-decorativa { transform: skewX(-15deg); }`}
					/>
				</li>
			</ul>
			<p className='mb-4'>
				Podemos combinar múltiplas transformações numa única declaração. A ordem
				importa.
			</p>
			<CodeBlock
				language='css'
				codeString={`.elemento:hover {
  transform: rotate(10deg) scale(1.2);
}`}
			/>

			<h4 className='text-xl font-semibold mt-6 mb-2'>`transform-origin`</h4>
			<p className='mb-4'>
				Por defeito, as rotações e escalonamentos ocorrem a partir do centro do
				elemento (`50% 50%`). A propriedade <code>transform-origin</code>{" "}
				permite-nos alterar este ponto de pivô.
			</p>
			<CodeBlock
				language='css'
				codeString={`.ponteiro-relogio {
  transform-origin: bottom center; /* O ponto de rotação estará na base */
}`}
			/>
		</section>

		<section>
			<h3 className='text-2xl font-semibold mb-3'>
				📝 Tarefa: Cartões Interativos
			</h3>
			<p className='mb-4'>
				Vamos criar um conjunto de cartões que reagem ao passar do cursor sobre
				eles, combinando transições e transformações.
			</p>
			<ol className='list-decimal list-inside space-y-2 pl-4 mb-4'>
				<li>
					<strong>HTML:</strong> Crie uma `div` contentora e, dentro dela, três
					`div` com a classe `cartao`. Cada cartão pode ter um `h3` e um `p`.
				</li>
				<li>
					<strong>CSS (Estado Base):</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>
							Estilize os `.cartao` com uma largura, padding, borda, sombra
							(`box-shadow`), etc.
						</li>
						<li>
							<strong>Crucial:</strong> No seletor `.cartao`, adicione uma
							`transition: all 0.4s ease;` para que todas as alterações sejam
							animadas suavemente.
						</li>
					</ul>
				</li>
				<li>
					<strong>CSS (Estado Hover):</strong>
					<ul className='list-disc list-inside space-y-1 pl-6 my-2'>
						<li>Crie uma regra para `.cartao:hover`.</li>
						<li>
							Dentro desta regra, use a propriedade `transform` para fazer o
							cartão mover-se um pouco para cima e aumentar de tamanho. Por
							exemplo: `transform: translateY(-10px) scale(1.03);`
						</li>
						<li>
							Adicione também uma alteração na `box-shadow` para a tornar mais
							pronunciada no estado hover.
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
