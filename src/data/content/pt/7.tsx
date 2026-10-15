import {
	Ban,
	Braces,
	Eye,
	Hash,
	Lock,
	Palette,
	Ruler,
	Send,
	ShieldCheck,
	Sparkles,
	Zap,
} from "lucide-react";
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

const inputClass =
	"w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100";
const labelClass =
	"mb-1 block text-xs font-semibold text-gray-600 dark:text-gray-300";

const Lecture7Pt = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Formulários II · validação sem JavaScript + ponte para CSS
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Fechamos o módulo de HTML e abrimos a porta ao seguinte: hoje damos
				inteligência aos formulários com atributos de HTML5 e, no final,
				apresentamos o CSS, a linguagem da apresentação.
			</p>
		</section>

		<section>
			<SectionTitle index={1}>
				Atributos que melhoram a usabilidade
			</SectionTitle>
			<p className="mb-4">
				Antes de validar, vamos facilitar a introdução de dados. Estes quatro
				atributos não validam: <strong>ajudam o utilizador</strong> a preencher
				o campo.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Eye className="h-5 w-5" aria-hidden />}
					title="placeholder"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Texto de exemplo dentro do campo que desaparece ao escrever. É uma
					dica, <strong>não um rótulo</strong>.
				</ConceptCard>
				<ConceptCard
					icon={<Zap className="h-5 w-5" aria-hidden />}
					title="autocomplete"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Dica ao navegador para preencher com dados guardados (por exemplo{" "}
					<Code>email</Code>, <Code>name</Code>).
				</ConceptCard>
				<ConceptCard
					icon={<Ban className="h-5 w-5" aria-hidden />}
					title="disabled"
					iconClassName="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
				>
					Desativa o campo: não recebe foco, não pode ser editado e o seu valor{" "}
					<strong>não é enviado</strong>.
				</ConceptCard>
				<ConceptCard
					icon={<Lock className="h-5 w-5" aria-hidden />}
					title="readonly"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Apenas leitura: não pode ser editado, mas <strong>é enviado</strong>{" "}
					com o formulário.
				</ConceptCard>
			</div>
			<Callout variant="tip" title="placeholder não substitui o label">
				Todo o campo visível leva o seu <Code>&lt;label&gt;</Code> associado com{" "}
				<Code>for</Code> + <Code>id</Code>. O <Code>placeholder</Code> apaga-se
				ao escrever e os leitores de ecrã não o anunciam da mesma forma.
				Experimenta aqui em baixo 👇
			</Callout>
			<div className="grid gap-4 sm:grid-cols-2">
				<Preview label="placeholder + autocomplete · em direto">
					<form onSubmit={(e) => e.preventDefault()}>
						<label htmlFor="d7-email" className={labelClass}>
							Correio eletrónico
						</label>
						<input
							id="d7-email"
							name="email"
							type="email"
							autoComplete="email"
							placeholder="seu@email.com"
							className={inputClass}
						/>
					</form>
				</Preview>
				<Preview label="disabled vs readonly · compara em direto">
					<div className="space-y-3">
						<div>
							<label htmlFor="d7-dis" className={labelClass}>
								Desativado (não é enviado)
							</label>
							<input
								id="d7-dis"
								name="d7-dis"
								type="text"
								defaultValue="Não editável"
								disabled
								className={`${inputClass} cursor-not-allowed opacity-60`}
							/>
						</div>
						<div>
							<label htmlFor="d7-ro" className={labelClass}>
								Apenas leitura (é enviado)
							</label>
							<input
								id="d7-ro"
								name="d7-ro"
								type="text"
								defaultValue="Valor de apenas leitura"
								readOnly
								className={inputClass}
							/>
						</div>
					</div>
				</Preview>
			</div>
			<div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
				<table className="w-full text-left text-sm">
					<thead>
						<tr className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
							<th className="px-4 py-2">Atributo</th>
							<th className="px-4 py-2">Pode ser editado?</th>
							<th className="px-4 py-2">Recebe foco?</th>
							<th className="px-4 py-2">É enviado?</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
						<tr>
							<td className="px-4 py-2 font-mono">disabled</td>
							<td className="px-4 py-2">Não</td>
							<td className="px-4 py-2">Não</td>
							<td className="px-4 py-2">Não</td>
						</tr>
						<tr>
							<td className="px-4 py-2 font-mono">readonly</td>
							<td className="px-4 py-2">Não</td>
							<td className="px-4 py-2">Sim</td>
							<td className="px-4 py-2">Sim</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="mt-4 space-y-4">
				<CodeTabs
					html={`<label for="email">Email:</label>
<input type="email" id="email" name="email" placeholder="seu@email.com" autocomplete="email">

<input type="text" value="Não editável" disabled>
<input type="text" value="Valor de apenas leitura" readonly>`}
				/>
			</div>
		</section>

		<section>
			<SectionTitle index={2}>Validação nativa do navegador</SectionTitle>
			<p className="mb-4">
				O HTML5 permite ao navegador validar antes de enviar, mostrando
				mensagens de erro <strong>sem escrever JavaScript</strong>. Se um campo
				não cumprir, o envio é travado sozinho.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<ShieldCheck className="h-5 w-5" aria-hidden />}
					title="required"
					iconClassName="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
				>
					Campo obrigatório: o formulário não é enviado se estiver vazio.
				</ConceptCard>
				<ConceptCard
					icon={<Ruler className="h-5 w-5" aria-hidden />}
					title="minlength / maxlength"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Número mínimo e máximo de caracteres em textos e palavras-passe.
				</ConceptCard>
				<ConceptCard
					icon={<Hash className="h-5 w-5" aria-hidden />}
					title="min / max"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Valor numérico mínimo e máximo para <Code>type="number"</Code> ou{" "}
					<Code>type="date"</Code>.
				</ConceptCard>
				<ConceptCard
					icon={<Braces className="h-5 w-5" aria-hidden />}
					title="pattern + title"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					Expressão regular que o valor deve cumprir. O <Code>title</Code>{" "}
					explica o formato esperado.
				</ConceptCard>
			</div>
			<Callout variant="info" title="As mensagens são do navegador">
				O texto do erro depende do navegador e do seu idioma, não do teu código.
				Por isso o atributo <Code>title</Code> é essencial: diz ao utilizador
				que formato esperas. Tenta enviar este formulário vazio 👇
			</Callout>
			<div className="mb-4">
				<Preview label="Vista prévia · formulário real, tenta enviá-lo vazio">
					<form onSubmit={(e) => e.preventDefault()} className="space-y-3">
						<div>
							<label htmlFor="d7-nome" className={labelClass}>
								Nome (obrigatório)
							</label>
							<input
								id="d7-nome"
								name="nome"
								type="text"
								required
								placeholder="O teu nome"
								className={inputClass}
							/>
						</div>
						<div>
							<label htmlFor="d7-pass" className={labelClass}>
								Palavra-passe (8 a 16 caracteres)
							</label>
							<input
								id="d7-pass"
								name="pass"
								type="password"
								minLength={8}
								maxLength={16}
								required
								placeholder="••••••••"
								className={inputClass}
							/>
						</div>
						<div>
							<label htmlFor="d7-idade" className={labelClass}>
								Idade (18 a 120)
							</label>
							<input
								id="d7-idade"
								name="idade"
								type="number"
								min={18}
								max={120}
								placeholder="25"
								className={inputClass}
							/>
						</div>
						<div>
							<label htmlFor="d7-cp" className={labelClass}>
								Código postal (4 dígitos, exemplo simplificado)
							</label>
							<input
								id="d7-cp"
								name="cp"
								type="text"
								pattern="[0-9]{4}"
								title="Por favor, introduza 4 dígitos numéricos."
								placeholder="1000"
								className={inputClass}
							/>
						</div>
						<input
							type="submit"
							value="Enviar"
							className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
						/>
					</form>
				</Preview>
			</div>
			<div className="space-y-4">
				<CodeTabs
					html={`<label for="nome">Nome:</label>
<input type="text" id="nome" name="nome" required>

<label for="pass">Palavra-passe (8-16 caracteres):</label>
<input type="password" id="pass" name="pass" minlength="8" maxlength="16" required>

<label for="idade">Idade (18+):</label>
<input type="number" id="idade" name="idade" min="18" max="120">

<label for="cp">Código Postal (4 dígitos):</label>
<input type="text" id="cp" name="cp" pattern="[0-9]{4}" title="Por favor, introduza 4 dígitos numéricos.">`}
				/>
			</div>
		</section>

		<section>
			<SectionTitle index={3}>
				Ponte para CSS: a arte da apresentação
			</SectionTitle>
			<p className="mb-4">
				Dominámos a estrutura com HTML. Agora entra o{" "}
				<strong>CSS (Cascading Style Sheets)</strong>, a linguagem que descreve
				a aparência dos elementos. O detalhe de onde se escreve vê-se na lição
				8; hoje, a ideia central.
			</p>
			<Callout variant="info" title="Separação de responsabilidades">
				O HTML trata do <strong>conteúdo e da estrutura</strong>. O CSS trata da{" "}
				<strong>apresentação e do design</strong>. Separados, o código fica mais
				limpo, fácil de manter e mais acessível.
			</Callout>
			<Subhead>Anatomia de uma regra CSS</Subhead>
			<p className="mb-4">
				Toda a regra tem duas partes: <strong>seletor</strong> (a quem dou
				estilo) e <strong>bloco de declaração</strong> (propriedade, valor,
				ponto e vírgula).
			</p>
			<div className="my-6 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800/60">
				<p className="mb-3 text-center font-mono text-sm font-semibold text-gray-700 dark:text-gray-200">
					Seletor {"{"} Propriedade: Valor; {"}"}
				</p>
				<CodeTabs
					html={`<h1>O meu primeiro título</h1>`}
					css={`h1 {
  color: blue;
  font-size: 24px;
}`}
				/>
				<p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
					Esta regra seleciona todos os <Code>&lt;h1&gt;</Code> e pinta-os de
					azul com 24 pixels.
				</p>
			</div>
			<div className="grid gap-4 sm:grid-cols-2">
				<Preview label="Sem CSS · só HTML">
					<h1>O meu primeiro título</h1>
				</Preview>
				<Preview label="Com CSS · mesma estrutura, outra apresentação">
					<h1 style={{ color: "#2563eb", fontSize: "24px" }}>
						O meu primeiro título
					</h1>
				</Preview>
			</div>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
				<Send className="h-6 w-6 text-blue-500" aria-hidden />📝 Tarefa: um
				formulário robusto
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Aplica o novo sobre o <Code>contato.html</Code> que criaste na lição 6.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Torna-o obrigatório">
					Adiciona <Code>required</Code> a nome e email.
				</Step>
				<Step number={2} title="Mensagem com mínimo">
					No <Code>&lt;textarea&gt;</Code> da mensagem adiciona{" "}
					<Code>minlength="10"</Code>.
				</Step>
				<Step number={3} title="Telefone com formato">
					Adiciona um campo <Code>type="tel"</Code> com <Code>pattern</Code>{" "}
					simples (por exemplo <Code>[0-9]{"{9}"}</Code> para 9 dígitos) e o seu{" "}
					<Code>title</Code> a explicar o formato.
				</Step>
				<Step number={4} title="Testa a validação">
					Tenta enviar vazio ou com dados inválidos: deves ver os erros do
					navegador <strong>sem JavaScript</strong>.
				</Step>
			</ol>
			<Callout variant="success" title="Fecho">
				Formulários com ajuda contextual e validação nativa, mais a primeira
				ponte para CSS. Na lição 8 vemos onde e como se escreve esse CSS.
				<div className="mt-2 flex items-center gap-2">
					<Palette className="h-4 w-4" aria-hidden />
					HTML estrutura, CSS apresenta.
				</div>
			</Callout>
		</section>
	</div>
);

export default Lecture7Pt;
