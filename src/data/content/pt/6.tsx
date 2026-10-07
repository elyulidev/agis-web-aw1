import {
	Calendar,
	Check,
	ChevronDown,
	EyeOff,
	FormInput,
	Hash,
	KeyRound,
	Lock,
	Mail,
	MessageSquare,
	MousePointerClick,
	Palette,
	RotateCcw,
	Search,
	Send,
	Sparkles,
	Tag,
	Upload,
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

const inputClass =
	"w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100";
const labelClass =
	"mb-1 block text-xs font-semibold text-gray-600 dark:text-gray-300";

const Lecture6Pt = () => (
	<div className="space-y-12">
		<section>
			<p className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
				<Sparkles className="h-3.5 w-3.5" aria-hidden />
				Formulários · a porta de entrada do utilizador
			</p>
			<p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
				Chegamos à nossa sexta aula! Hoje, mergulhamos num dos elementos mais
				interativos e cruciais da web: os formulários. Os formulários são a
				principal ferramenta para os utilizadores nos enviarem informações,
				desde um simples login até um complexo processo de compra.
			</p>
		</section>

		<section>
			<SectionTitle index={1}>
				Elemento &lt;form&gt; e o seu Propósito
			</SectionTitle>
			<p className="mb-4">
				A tag <Code>&lt;form&gt;</Code> é o contêiner de todos os elementos de
				um formulário. Agrupa os campos (<Code>&lt;input&gt;</Code>,{" "}
				<Code>&lt;textarea&gt;</Code>, etc.) e define como e para onde a
				informação será enviada ao pressionar o botão de envio.
			</p>
			<div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
				<div className="flex-1 rounded-xl bg-blue-50 p-3 text-center text-sm font-semibold text-blue-800 dark:bg-blue-950/40 dark:text-blue-200">
					<FormInput className="mx-auto mb-1 h-5 w-5" aria-hidden />
					Utilizador preenche campos
				</div>
				<div className="text-center font-bold text-gray-400" aria-hidden>
					→
				</div>
				<div className="flex-1 rounded-xl bg-purple-50 p-3 text-center text-sm font-semibold text-purple-800 dark:bg-purple-950/40 dark:text-purple-200">
					<MousePointerClick className="mx-auto mb-1 h-5 w-5" aria-hidden />
					&lt;form&gt; agrupa e envia
				</div>
				<div className="text-center font-bold text-gray-400" aria-hidden>
					→
				</div>
				<div className="flex-1 rounded-xl bg-green-50 p-3 text-center text-sm font-semibold text-green-800 dark:bg-green-950/40 dark:text-green-200">
					<Send className="mx-auto mb-1 h-5 w-5" aria-hidden />
					Servidor recebe dados
				</div>
			</div>
		</section>

		<section>
			<SectionTitle index={2}>
				Tags &lt;label&gt; e a sua Associação com os Campos
			</SectionTitle>
			<p className="mb-4">
				Cada campo deve ter um rótulo a indicar que informação é esperada. A tag{" "}
				<Code>&lt;label&gt;</Code> é a forma semanticamente correta e é{" "}
				<strong>crucial para a acessibilidade</strong>: os leitores de ecrã
				anunciam-na ao chegar ao campo.
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<ConceptCard
					icon={<Tag className="h-5 w-5" aria-hidden />}
					title='for="nomeUtilizador"'
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Na <Code>&lt;label&gt;</Code>: aponta para o campo pelo nome.
				</ConceptCard>
				<ConceptCard
					icon={<FormInput className="h-5 w-5" aria-hidden />}
					title='id="nomeUtilizador"'
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					No <Code>&lt;input&gt;</Code>: o identificador único do campo.
				</ConceptCard>
			</div>
			<Callout variant="tip" title="Têm de ser idênticos">
				O valor de <Code>for</Code> tem de ser exatamente igual ao{" "}
				<Code>id</Code>. Bónus: ao clicar no rótulo, o foco salta para o campo.
				Testa aqui 👇
			</Callout>
			<div className="mb-4">
				<Preview label="Prévia · clica no rótulo Nome">
					<form onSubmit={(e) => e.preventDefault()}>
						<label htmlFor="demo-nome" className={labelClass}>
							Nome:
						</label>
						<input
							id="demo-nome"
							name="demo-nome"
							type="text"
							placeholder="Escreve o teu nome e clica no rótulo"
							className={inputClass}
						/>
					</form>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<form>
  <label for="nomeUtilizador">Nome:</label>
  <input type="text" id="nomeUtilizador" name="utilizador">
</form>`}
			/>
		</section>

		<section>
			<SectionTitle index={3}>
				Campos de Entrada (&lt;input&gt;): Tipos Comuns
			</SectionTitle>
			<p className="mb-4">
				A tag <Code>&lt;input&gt;</Code> é a mais versátil. É de autofechamento
				e o comportamento muda com o atributo <Code>type</Code>. Testa cada um
				ao vivo:
			</p>
			<div className="grid gap-4 sm:grid-cols-2">
				<Preview label='type="text" · uma linha (padrão)'>
					<label htmlFor="t-text" className={labelClass}>
						Nome de utilizador
					</label>
					<input
						id="t-text"
						name="t-text"
						type="text"
						placeholder="joao_silva"
						className={inputClass}
					/>
				</Preview>
				<Preview label='type="email" · valida o formato'>
					<label htmlFor="t-email" className={labelClass}>
						E-mail <Mail className="inline h-3.5 w-3.5" aria-hidden />
					</label>
					<input
						id="t-email"
						name="t-email"
						type="email"
						placeholder="joao@exemplo.com"
						className={inputClass}
					/>
				</Preview>
				<Preview label='type="password" · oculta carateres'>
					<label htmlFor="t-pass" className={labelClass}>
						Palavra-passe <Lock className="inline h-3.5 w-3.5" aria-hidden />
					</label>
					<input
						id="t-pass"
						name="t-pass"
						type="password"
						placeholder="••••••••"
						className={inputClass}
					/>
				</Preview>
				<Preview label='type="number" · com setas'>
					<label htmlFor="t-num" className={labelClass}>
						Quantidade <Hash className="inline h-3.5 w-3.5" aria-hidden />
					</label>
					<input
						id="t-num"
						name="t-num"
						type="number"
						placeholder="1"
						className={inputClass}
					/>
				</Preview>
				<Preview label='type="date" · calendário'>
					<label htmlFor="t-date" className={labelClass}>
						Data de nascimento{" "}
						<Calendar className="inline h-3.5 w-3.5" aria-hidden />
					</label>
					<input id="t-date" name="t-date" type="date" className={inputClass} />
				</Preview>
				<Preview label='type="color" · seletor'>
					<label htmlFor="t-color" className={labelClass}>
						Cor favorita <Palette className="inline h-3.5 w-3.5" aria-hidden />
					</label>
					<input
						id="t-color"
						name="t-color"
						type="color"
						defaultValue="#3b82f6"
						className="h-10 w-full cursor-pointer rounded-lg border border-gray-300 bg-white p-1 dark:border-gray-600 dark:bg-gray-900"
					/>
				</Preview>
				<Preview label='type="file" · ficheiro do dispositivo'>
					<label htmlFor="t-file" className={labelClass}>
						Anexar <Upload className="inline h-3.5 w-3.5" aria-hidden />
					</label>
					<input
						id="t-file"
						name="t-file"
						type="file"
						className="w-full text-sm text-gray-600 file:mr-3 file:rounded-lg file:border-0 file:bg-blue-600 file:px-3 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-blue-700 dark:text-gray-300"
					/>
				</Preview>
				<Preview label='type="search" · otimizado para pesquisas'>
					<label htmlFor="t-search" className={labelClass}>
						Procurar <Search className="inline h-3.5 w-3.5" aria-hidden />
					</label>
					<input
						id="t-search"
						name="t-search"
						type="search"
						placeholder="Procurar produtos…"
						className={inputClass}
					/>
				</Preview>
				<Preview label='type="submit" e "reset" · botões'>
					<div className="flex flex-wrap gap-3">
						<input
							type="submit"
							value="Enviar Formulário"
							className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
						/>
						<input
							type="reset"
							value="Repor"
							className="cursor-pointer rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
						/>
					</div>
				</Preview>
				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/60">
					<p className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
						<EyeOff className="h-4 w-4 text-gray-400" aria-hidden />
						type="hidden" · invisível
					</p>
					<p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
						Campo não visível para enviar dados adicionais ao servidor. Não se
						renderiza: só existe no código.
					</p>
					<p className="mt-2">
						<Code>
							&lt;input type="hidden" name="origem" value="galeria"&gt;
						</Code>
					</p>
				</div>
			</div>
			<div className="mt-4 flex flex-wrap gap-2">
				<RotateCcw className="h-4 w-4 text-gray-400" aria-hidden />
				<p className="text-sm text-gray-500 dark:text-gray-400">
					Dica: o botão <Code>reset</Code> repõe os valores iniciais — testa
					depois de escrever algo acima.
				</p>
			</div>
			<CodeBlock
				language="html"
				codeString={`<input type="email" id="email" name="email">
<input type="date" id="data_nasc" name="data_nasc">
<input type="submit" value="Enviar Formulário">`}
			/>
		</section>

		<section>
			<SectionTitle index={4}>Outros Campos de Formulário</SectionTitle>
			<p className="mb-4">
				Além de <Code>&lt;input&gt;</Code>, existem outros elementos
				importantes:
			</p>

			<Subhead>&lt;textarea&gt; · texto multilinha</Subhead>
			<p className="mb-4">
				Para comentários ou mensagens. Ao contrário de{" "}
				<Code>&lt;input&gt;</Code>, tem tag de abertura e fecho.
			</p>
			<div className="mb-4">
				<Preview label="Prévia · área real, escreve algo">
					<label htmlFor="demo-comentario" className={labelClass}>
						Comentário{" "}
						<MessageSquare className="inline h-3.5 w-3.5" aria-hidden />
					</label>
					<textarea
						id="demo-comentario"
						name="demo-comentario"
						rows={3}
						placeholder="Conta-nos o que achaste da aula…"
						className={`${inputClass} resize-y`}
					/>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<label for="comentario">Comentário:</label>
<textarea id="comentario" name="comentario" rows="4" cols="50"></textarea>`}
			/>

			<Subhead>&lt;select&gt; · lista suspensa</Subhead>
			<p className="mb-4">
				Cria um menu suspenso. Cada opção é um <Code>&lt;option&gt;</Code>.
				Podem agrupar-se com <Code>&lt;optgroup&gt;</Code>.
			</p>
			<div className="mb-4">
				<Preview label="Prévia · suspensa real">
					<label htmlFor="demo-pais" className={labelClass}>
						País
					</label>
					<select
						id="demo-pais"
						name="demo-pais"
						className={inputClass}
						defaultValue="pt"
					>
						<optgroup label="América do Sul">
							<option value="br">Brasil</option>
							<option value="ar">Argentina</option>
						</optgroup>
						<optgroup label="Europa">
							<option value="pt">Portugal</option>
							<option value="es">Espanha</option>
						</optgroup>
					</select>
				</Preview>
			</div>
			<CodeBlock
				language="html"
				codeString={`<label for="pais">País:</label>
<select id="pais" name="pais">
  <optgroup label="América do Sul">
    <option value="br">Brasil</option>
    <option value="ar">Argentina</option>
  </optgroup>
  <optgroup label="Europa">
    <option value="pt">Portugal</option>
    <option value="es">Espanha</option>
  </optgroup>
</select>`}
			/>
		</section>

		<section>
			<SectionTitle index={5}>Atributos Básicos e Importantes</SectionTitle>
			<div className="grid gap-4 sm:grid-cols-3">
				<ConceptCard
					icon={<Search className="h-5 w-5" aria-hidden />}
					title="placeholder"
					iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
				>
					Texto de ajuda dentro do campo que desaparece ao digitar.
				</ConceptCard>
				<ConceptCard
					icon={<FormInput className="h-5 w-5" aria-hidden />}
					title="value"
					iconClassName="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
				>
					Define o valor inicial de um campo.
				</ConceptCard>
				<ConceptCard
					icon={<KeyRound className="h-5 w-5" aria-hidden />}
					title="name · o mais importante!"
					iconClassName="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
				>
					A “chave” do par chave-valor enviado ao servidor.
				</ConceptCard>
			</div>
			<Callout variant="warning" title="Sem name não há envio">
				Sem o atributo <Code>name</Code>, o dado desse campo{" "}
				<strong>não é enviado</strong> ao servidor, mesmo preenchido.
			</Callout>
			<CodeBlock
				language="html"
				codeString={`<input type="text" name="pesquisa" placeholder="Procurar produtos...">`}
			/>
			<div>
				<Preview label="Prévia · esse mesmo campo, ao vivo">
					<label htmlFor="demo-pesquisa" className={labelClass}>
						Pesquisa
					</label>
					<input
						id="demo-pesquisa"
						name="pesquisa"
						type="text"
						placeholder="Procurar produtos..."
						className={inputClass}
					/>
				</Preview>
			</div>
		</section>

		<section className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 dark:border-gray-700 dark:from-gray-800/60 dark:to-gray-900 sm:p-8">
			<h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
				<Send className="h-6 w-6 text-blue-500" aria-hidden />📝 Tarefa:
				Formulário de Contato
			</h3>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Chegou a hora de criar o seu primeiro formulário: um de contato básico
				com as tags e atributos vistos.
			</p>
			<ol className="space-y-3">
				<Step number={1} title="Crie o Arquivo">
					Cria <Code>contato.html</Code>.
				</Step>
				<Step number={2} title="Estrutura do Formulário">
					<ul className="mt-2 space-y-1.5">
						<CheckItem>
							Começa com <Code>&lt;form&gt;</Code>.
						</CheckItem>
						<CheckItem>
							Campo <strong>Nome</strong> (<Code>type="text"</Code>).
						</CheckItem>
						<CheckItem>
							Campo <strong>E-mail</strong> (<Code>type="email"</Code>).
						</CheckItem>
						<CheckItem>
							<Code>&lt;select&gt;</Code> “Motivo do Contato”: Consulta Geral,
							Suporte Técnico, Sugestões.
						</CheckItem>
						<CheckItem>
							<Code>&lt;textarea&gt;</Code> para a mensagem.
						</CheckItem>
						<CheckItem>
							<strong>Associação chave!</strong> Cada campo com a sua{" "}
							<Code>&lt;label&gt;</Code> (<Code>for</Code> + <Code>id</Code>).
						</CheckItem>
						<CheckItem>
							<Code>name</Code> único e descritivo em cada campo.
						</CheckItem>
						<CheckItem>
							<Code>placeholder</Code> nos textos e na textarea.
						</CheckItem>
						<CheckItem>
							Botões <Code>type="submit"</Code> e <Code>type="reset"</Code>.
						</CheckItem>
					</ul>
				</Step>
				<Step number={3} title="Visualize">
					Abre <Code>contato.html</Code> com o Live Server e clica nos rótulos
					para conferir o foco.
				</Step>
			</ol>
			<Callout variant="success" title="Fecho">
				Primeiro formulário completo: rótulos associados, nomes corretos e
				botões de envio e limpeza.
			</Callout>
			<p className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
				<ChevronDown className="h-4 w-4 shrink-0" aria-hidden />
				Na próxima aula: validações e mais atributos.
			</p>
		</section>
	</div>
);

export default Lecture6Pt;
