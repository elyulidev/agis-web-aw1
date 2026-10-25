import type { Language } from "@/locales/translations";

const text = {
	es: {
		hello: "¡Hola, Mundo!",
		intro: "Soy estudiante de AW1 y esta es mi primera página.",
		name: "Tu Nombre",
		about: "Sobre Mí",
		aboutBody: "Estudio desarrollo web y me gusta el diseño.",
		hobbies: "Mis Hobbies",
		hobbiesBody: "Leer, programar y salir a caminar.",
		recipe: "Tortilla de papas",
		recipeIntro: "Deliciosa y fácil de hacer.",
		ingredients: "Ingredientes",
		mainIngredient: "Papas",
		instructions: "Instrucciones",
		step1: "Pelar y cortar las papas.",
		step2: "Freír a fuego medio.",
		glossary: "Glosario",
		note: "Dejar reposar 5 minutos.",
		rights: "© 2026 Tu Nombre",
		gallery: "Mi Galería Personal",
		schedule: "Mi Horario",
		contact: "Contacto",
		send: "Enviar",
		clear: "Limpiar",
		menu1: "Inicio",
		menu2: "Horario",
		menu3: "Contacto",
		quote: "El diseño es la inteligencia hecha visible.",
		button: "Botón principal",
		site: "Mi sitio: 3 páginas enlazadas",
		formName: "Nombre completo",
		formEmail: "Correo electrónico",
		formWorkshop: "Taller",
		formPhone: "Teléfono (9 dígitos)",
		formMsg: "Mensaje",
		reserve: "Reservar plaza",
		required: "obligatorio",
		wsPlaceholder: "Elige un taller",
		ws1: "HTML semántico",
		ws2: "CSS desde cero",
		ws3: "Git y GitHub",
		winner: "(gana el ID)",
		restaurant: "Restaurante La Plaza",
		slogan: "Cocina de temporada todos los días",
		starters: "Entrantes",
		mains: "Platos",
		dish1: "Tortilla de patatas - 8 €",
		dish2: "Gazpacho - 7 €",
		dish3: "Salmorejo con huevo - 14 €",
		dish4: "Lubina al horno - 19 €",
		box1: "Caja 1",
		box2: "Caja 2",
		boxesFit:
			"Con box-sizing: border-box las dos cajas de 200px entran lado a lado en los 400px de .fila.",
		festival: "Noche de Jazz",
		program: "Programa",
		tickets: "Entradas",
		programText: "Conciertos de 20:00 a 23:30 en la sala principal.",
		ticketsText: "Entrada general: 12 €. Entrada reducida: 8 €.",
		city: "Ayuntamiento de Música y Artes Escénicas",
		ranking: "Ranking de la temporada",
		r1: "Cielo roto",
		r2: "La casa de enfrente",
		r3: "Vértigo",
		r4: "Línea de sueño",
		r5: "El último tren",
		quote2: "La simplicidad es la última sofisticación.",
		reserveSeat: "Reservar butaca",
		library: "Librería El Faro",
		home: "Portada",
		catalog: "Catálogo",
		orders: "Pedidos",
		libQuote: "Una librería es un puerto con tejado.",
		book1: "La torre de cristal",
		book2: "Cuaderno de invierno",
		book3: "El jardín de los espejos",
		book4: "Marea baja",
		book5: "El último tranvía",
		author1: "M. Larrañaga",
		author2: "A. Ribeiro",
		author3: "L. Fonseca",
		author4: "P. Duarte",
		author5: "S. Almeida",
		price1: "14,50 €",
		price2: "11,00 €",
		price3: "16,90 €",
		price4: "13,20 €",
		price5: "18,00 €",
		libFooter: "Calle del Faro, 12 - 900 000 000",
		battle1: "1) Dos reglas iguales me apuntan: ¿cuál gana?",
		battle2: "2) Yo no declaro color: ¿de dónde lo saco?",
		battle3: "3) Una clase y un ID me disputan el color.",
		battleNote: "Verde por cascada · azul heredado · morado por el ID (100)",
		fichaA: "Ficha A",
		fichaB: "Ficha B",
		fichasNote:
			"Con border-box, cada ficha completa mide 200px y las dos caben en la fila de 440px.",
		nursery: "Vivero La Cortina",
		nurseryIntro: "Plantas de interior para todos los meses del año.",
		plant1: "Monstera",
		plant2: "Cactus",
		plant3: "Bonsái",
		plantNote: "El hueco entre tarjetas es 30px, no 50px.",
		article1: "Cuatro esquinas, un mismo banco",
		article2: "El kiosco que aprendió CSS",
		chip1: "ciudad",
		chip2: "data",
		readMore: "Leer más",
		chipsNote: "El padding vertical ya no se pisa: inline-block pide su lugar.",
		leagueTitle: "Clasificación · Jornada 12",
		league1: "Atlético Norte",
		league2: "Río Verde",
		league3: "Estrella Roja",
		leagueNote:
			"La cabecera sticky se pega arriba; la insignia del puesto 1 tapa el borde de su fila.",
		theater: "Reservas del teatro El Faro",
		theaterIntro:
			"La función de esta noche está llena. Confirmá tus datos abajo para entrar en la lista de espera.",
		theaterButton: "Abrir lista de espera",
		modalTitle: "Lista de espera",
		modalBody: "Confirmá tu correo para entrar en la lista de espera.",
		modalInput: "tu@correo.com",
		modalButton: "Confirmar",
		modalNote:
			"Overlay fijo (z-index 10) por debajo del modal (20), centrado con transform.",
	},
	pt: {
		hello: "Olá, Mundo!",
		intro: "Sou estudante de AW1 e esta é a minha primeira página.",
		name: "O Teu Nome",
		about: "Sobre Mim",
		aboutBody: "Estudo desenvolvimento web e gosto de design.",
		hobbies: "Meus Hobbies",
		hobbiesBody: "Ler, programar e passear.",
		recipe: "Omelete de batatas",
		recipeIntro: "Deliciosa e fácil de fazer.",
		ingredients: "Ingredientes",
		mainIngredient: "Batatas",
		instructions: "Instruções",
		step1: "Descascar e cortar as batatas.",
		step2: "Fritar em lume médio.",
		glossary: "Glossário",
		note: "Deixar repousar 5 minutos.",
		rights: "© 2026 O Teu Nome",
		gallery: "Minha Galeria Pessoal",
		schedule: "Meu Horário",
		contact: "Contato",
		send: "Enviar",
		clear: "Limpar",
		menu1: "Início",
		menu2: "Horário",
		menu3: "Contato",
		quote: "O design é a inteligência feita visível.",
		button: "Botão principal",
		site: "Meu site: 3 páginas ligadas",
		formName: "Nome completo",
		formEmail: "E-mail",
		formWorkshop: "Workshop",
		formPhone: "Telefone (9 dígitos)",
		formMsg: "Mensagem",
		reserve: "Reservar vaga",
		required: "obrigatório",
		wsPlaceholder: "Escolhe um workshop",
		ws1: "HTML semântico",
		ws2: "CSS do zero",
		ws3: "Git e GitHub",
		winner: "(gana o ID)",
		restaurant: "Restaurante A Praça",
		slogan: "Cozinha de estação todos os dias",
		starters: "Entrantes",
		mains: "Pratos",
		dish1: "Tortilha de batatas - 8 €",
		dish2: "Gazpacho - 7 €",
		dish3: "Salmorejo com ovo - 14 €",
		dish4: "Robalo assado - 19 €",
		box1: "Caixa 1",
		box2: "Caixa 2",
		boxesFit:
			"Com box-sizing: border-box as duas caixas de 200px entram lado a lado nos 400px de .fila.",
		festival: "Noite de Jazz",
		program: "Programa",
		tickets: "Entradas",
		programText: "Concertos das 20:00 às 23:30 na sala principal.",
		ticketsText: "Entrada geral: 12 €. Entrada meia: 8 €.",
		city: "Câmara Municipal de Música e Artes Performativas",
		ranking: "Ranking da temporada",
		r1: "Céu partido",
		r2: "A casa em frente",
		r3: "Vertigem",
		r4: "Linha de sonho",
		r5: "O último comboio",
		quote2: "A simplicidade é a última sofisticação.",
		reserveSeat: "Reservar lugar",
		library: "Livraria O Farol",
		home: "Capa",
		catalog: "Catálogo",
		orders: "Encomendas",
		libQuote: "Uma livraria é um porto com telhado.",
		book1: "A torre de cristal",
		book2: "Caderno de inverno",
		book3: "O jardim dos espelhos",
		book4: "Marea baixa",
		book5: "O último elétrico",
		author1: "M. Larrañaga",
		author2: "A. Ribeiro",
		author3: "L. Fonseca",
		author4: "P. Duarte",
		author5: "S. Almeida",
		price1: "14,50 €",
		price2: "11,00 €",
		price3: "16,90 €",
		price4: "13,20 €",
		price5: "18,00 €",
		libFooter: "Rua do Farol, 12 - 900 000 000",
		battle1: "1) Duas regras iguais apontam para mim: qual ganha?",
		battle2: "2) Eu não declaro cor: de onde tiro?",
		battle3: "3) Uma classe e um ID disputam a minha cor.",
		battleNote: "Verde pela cascata · azul herdado · roxo pelo ID (100)",
		fichaA: "Ficha A",
		fichaB: "Ficha B",
		fichasNote:
			"Com border-box, cada ficha completa mede 200px e as duas cabem na fila de 440px.",
		nursery: "Viveiro A Cortina",
		nurseryIntro: "Plantas de interior para todos os meses do ano.",
		plant1: "Costela-de-adão",
		plant2: "Cacto",
		plant3: "Bonsai",
		plantNote: "O buraco entre cartões é 30px, não 50px.",
		article1: "Quatro esquinas, um mesmo banco",
		article2: "O quiosque que aprendeu CSS",
		chip1: "cidade",
		chip2: "dados",
		readMore: "Ler mais",
		chipsNote:
			"O padding vertical já não se pisa: inline-block pede o seu lugar.",
		leagueTitle: "Classificação · Jornada 12",
		league1: "Atlético Norte",
		league2: "Río Verde",
		league3: "Estrela Vermelha",
		leagueNote:
			"O cabeçalho sticky cola-se no topo; a insígnia do lugar 1 tapa a borda da sua linha.",
		theater: "Reservas do teatro O Farol",
		theaterIntro:
			"A sessão de hoje está esgotada. Confirma os teus dados em baixo para entrar na lista de espera.",
		theaterButton: "Abrir lista de espera",
		modalTitle: "Lista de espera",
		modalBody: "Confirma o teu e-mail para entrar na lista de espera.",
		modalInput: "tu@correo.com",
		modalButton: "Confirmar",
		modalNote:
			"Overlay fixo (z-index 10) por baixo do modal (20), centrado com transform.",
	},
};

export default function ExpectedPreview({
	id,
	lang,
}: {
	id: number;
	lang: Language;
}) {
	const t = text[lang];

	switch (id) {
		case 1:
			return (
				<div>
					<h1 className="text-2xl font-extrabold"> {t.hello} </h1>
					<p className="mt-1 text-sm"> {t.intro} </p>
				</div>
			);
		case 2:
			return (
				<div>
					<h1 className="text-2xl font-extrabold"> {t.name} </h1>
					<h2 className="mt-2 text-lg font-bold"> {t.about} </h2>
					<p className="text-sm"> {t.aboutBody} </p>
					<hr className="my-2" />
					<h2 className="text-lg font-bold"> {t.hobbies} </h2>
					<p className="text-sm"> {t.hobbiesBody} </p>
				</div>
			);
		case 3:
			return (
				<div>
					<h1 className="text-xl font-extrabold"> {t.recipe} </h1>
					<p className="text-sm">
						<em> {t.recipeIntro} </em>
					</p>
					<h2 className="mt-2 font-bold"> {t.ingredients} </h2>
					<ul className="list-disc pl-5 text-sm">
						<li>
							<strong> {t.mainIngredient} </strong>
						</li>
						<li>Huevos / Ovos</li>
					</ul>
					<h2 className="mt-2 font-bold"> {t.instructions} </h2>
					<ol className="list-decimal pl-5 text-sm">
						<li> {t.step1} </li>
						<li> {t.step2} </li>
					</ol>
					<h2 className="mt-2 font-bold"> {t.glossary} </h2>
					<dl className="text-sm">
						<dt className="font-semibold">Saltear / Refogar</dt>
						<dd>Cocinar rápido / Cozinhar rápido</dd>
					</dl>
					<p className="mt-2 text-sm">
						<mark> {t.note} </mark>{" "}
						<small className="text-gray-500"> {t.rights} </small>
					</p>
				</div>
			);
		case 4:
			return (
				<div>
					<h1 className="text-xl font-extrabold"> {t.gallery} </h1>
					<div className="mt-2 grid grid-cols-2 gap-2">
						<img
							src="https://picsum.photos/seed/agis1/400/200"
							alt="Foto 1 de la galería"
							className="rounded-lg"
							loading="lazy"
						/>
						<a
							href="https://example.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://picsum.photos/seed/agis2/400/200"
								alt="Foto 2 que abre sitio externo"
								className="rounded-lg ring-2 ring-blue-500"
								loading="lazy"
							/>
						</a>
					</div>
					<div className="mt-2 grid gap-2">
						<div className="rounded-lg bg-gray-200 p-3 text-center text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300">
							Video de YouTube incrustado
						</div>
						<div className="rounded-lg bg-gray-200 p-3 text-center text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300">
							Mapa de Google incrustado
						</div>
					</div>
				</div>
			);
		case 5:
			return (
				<div>
					<h1 className="text-xl font-extrabold"> {t.schedule} </h1>
					<table className="mt-2 w-full border text-left text-xs" border={1}>
						<caption className="py-1 font-semibold">Mi horario</caption>
						<thead>
							<tr>
								<th scope="col">Hora</th>
								<th scope="col">Lun</th>
								<th scope="col">Mar</th>
								<th scope="col">Mié</th>
								<th scope="col">Jue</th>
								<th scope="col">Vie</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">8-10</th>
								<td rowSpan={2}>AW1</td>
								<td>MAT</td>
								<td>AW1</td>
								<td>FIS</td>
								<td>LAB</td>
							</tr>
							<tr>
								<th scope="row">10-12</th>
								<td>QUI</td>
								<td>HIS</td>
								<td>MAT</td>
								<td>LAB</td>
							</tr>
							<tr>
								<th scope="row">12-14</th>
								<td>Libre</td>
								<td>Libre</td>
								<td>Libre</td>
								<td colSpan={2}>Libre</td>
							</tr>
						</tbody>
					</table>
				</div>
			);
		case 6:
			return (
				<form
					className="space-y-2"
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<div>
						<label htmlFor="lab6-nombre" className="text-xs font-semibold">
							Nombre
						</label>
						<input
							id="lab6-nombre"
							name="nombre"
							type="text"
							placeholder="Tu nombre"
							className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-900"
						/>
					</div>
					<div>
						<label htmlFor="lab6-email" className="text-xs font-semibold">
							Correo
						</label>
						<input
							id="lab6-email"
							name="email"
							type="email"
							placeholder="tu@email.com"
							className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-900"
						/>
					</div>
					<div>
						<label htmlFor="lab6-mensaje" className="text-xs font-semibold">
							Mensaje
						</label>
						<textarea
							id="lab6-mensaje"
							name="mensaje"
							placeholder="Escribe tu mensaje"
							className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-900"
						/>
					</div>
					<div className="flex gap-2">
						<button
							type="submit"
							className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white"
						>
							{t.send}
						</button>
						<button
							type="reset"
							className="rounded-lg border px-3 py-1.5 text-xs"
						>
							{t.clear}
						</button>
					</div>
				</form>
			);
		case 8:
			return (
				<form
					className="space-y-2"
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<div>
						<label htmlFor="lab8-nombre" className="text-xs font-semibold">
							{t.formName} <span className="text-red-500">*</span>
						</label>
						<input
							id="lab8-nombre"
							name="nombre"
							type="text"
							required
							placeholder="Tu nombre"
							className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-900"
						/>
					</div>
					<div>
						<label htmlFor="lab8-email" className="text-xs font-semibold">
							{t.formEmail} <span className="text-red-500">*</span>
						</label>
						<input
							id="lab8-email"
							name="email"
							type="email"
							required
							placeholder="tu@correo.com"
							className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-900"
						/>
					</div>
					<div>
						<label htmlFor="lab8-taller" className="text-xs font-semibold">
							{t.formWorkshop} <span className="text-red-500">*</span>
						</label>
						<select
							id="lab8-taller"
							name="taller"
							required
							className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-900"
						>
							<option value="">{t.wsPlaceholder}</option>
							<option value="html">{t.ws1}</option>
							<option value="css">{t.ws2}</option>
							<option value="git">{t.ws3}</option>
						</select>
					</div>
					<div>
						<label htmlFor="lab8-telefono" className="text-xs font-semibold">
							{t.formPhone}
						</label>
						<input
							id="lab8-telefono"
							name="telefono"
							type="tel"
							pattern="[0-9]{9}"
							title="Introduce 9 dígitos numéricos."
							placeholder="600000000"
							className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-900"
						/>
					</div>
					<div>
						<label htmlFor="lab8-mensaje" className="text-xs font-semibold">
							{t.formMsg}
						</label>
						<textarea
							id="lab8-mensaje"
							name="mensaje"
							minLength={20}
							maxLength={300}
							placeholder="Cuéntanos por qué quieres ir"
							className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-900"
						/>
					</div>
					<div className="flex gap-2">
						<button
							type="submit"
							className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white"
						>
							{t.reserve}
						</button>
						<button
							type="reset"
							className="rounded-lg border px-3 py-1.5 text-xs"
						>
							{t.clear}
						</button>
					</div>
					<p className="text-[10px] text-gray-500 dark:text-gray-400">
						* {t.required}
					</p>
				</form>
			);
		case 7:
			return (
				<div>
					<nav className="flex gap-3 rounded-lg bg-gray-100 p-2 text-xs font-semibold dark:bg-gray-800">
						<span className="text-blue-600"> {t.menu1} </span>
						<span className="text-blue-600"> {t.menu2} </span>
						<span className="text-blue-600"> {t.menu3} </span>
					</nav>
					<h1 className="mt-2 text-xl font-extrabold"> {t.name} </h1>
					<p className="text-xs text-gray-500"> {t.site} </p>
				</div>
			);
		case 9:
			return (
				<div className="space-y-2">
					<div style={{ backgroundColor: "#f3ead9" }} className="p-2">
						<p className="text-sm font-bold"> {t.restaurant} </p>
						<p className="text-[11px]"> {t.slogan} </p>
					</div>
					<div className="text-[11px]">
						<p className="font-bold"> {t.starters} </p>
						<ul className="list-disc pl-4">
							<li>{t.dish1}</li>
							<li>{t.dish2}</li>
						</ul>
						<p className="font-bold"> {t.mains} </p>
						<ul className="list-disc pl-4">
							<li>{t.dish3}</li>
							<li>{t.dish4}</li>
						</ul>
					</div>
					<div className="overflow-x-auto">
						<div style={{ width: "400px" }} className="flex">
							<div
								style={{
									width: "200px",
									padding: "20px",
									border: "10px solid #94a3b8",
									boxSizing: "border-box",
								}}
								className="text-[11px]"
							>
								{t.box1}
							</div>
							<div
								style={{
									width: "200px",
									padding: "20px",
									border: "10px solid #94a3b8",
									boxSizing: "border-box",
								}}
								className="text-[11px]"
							>
								{t.box2}
							</div>
						</div>
						<p className="mt-1 text-[10px] text-gray-500 dark:text-gray-400">
							{t.boxesFit}
						</p>
					</div>
				</div>
			);
		case 10:
			return (
				<div
					style={{ backgroundColor: "#f8fafc", fontFamily: "Georgia, serif" }}
					className="p-2"
				>
					<h1
						id="titulo-festival"
						style={{ color: "#1d4ed8", textAlign: "center" }}
						className="text-lg font-extrabold"
					>
						{t.festival}
					</h1>
					<nav className="flex justify-center gap-3 text-[11px] font-semibold">
						<span className="text-blue-600"> {t.program} </span>
						<span className="text-blue-600"> {t.tickets} </span>
					</nav>
					<div
						className="bloque mt-2"
						style={{
							border: "1px solid #94a3b8",
							padding: "8px",
							backgroundColor: "#e2e8f0",
						}}
					>
						<h2 style={{ color: "#1d4ed8" }} className="text-sm font-bold">
							{t.program}
						</h2>
						<p className="text-[11px]"> {t.programText} </p>
					</div>
					<div
						className="bloque mt-2"
						style={{
							border: "1px solid #94a3b8",
							padding: "8px",
							backgroundColor: "#e2e8f0",
						}}
					>
						<h2 style={{ color: "#1d4ed8" }} className="text-sm font-bold">
							{t.tickets}
						</h2>
						<p className="text-[11px]"> {t.ticketsText} </p>
					</div>
					<p className="mt-2 text-[10px] text-gray-500"> {t.city} </p>
				</div>
			);
		case 11:
			return (
				<div>
					<nav>
						<ul className="flex gap-3 text-sm font-semibold">
							<li>
								<a
									href="#inicio"
									className="text-purple-600 hover:text-red-600 hover:underline"
								>
									{t.menu1}
								</a>
							</li>
							<li>
								<a
									href="#temporadas"
									className="text-purple-600 hover:text-red-600 hover:underline"
								>
									{t.menu2}
								</a>
							</li>
							<li>
								<a
									href="#contacto"
									className="text-purple-600 hover:text-red-600 hover:underline"
								>
									{t.menu3}
								</a>
							</li>
						</ul>
					</nav>
					<p className="mt-2 text-sm font-bold"> {t.ranking} </p>
					<ol className="mt-1 list-decimal space-y-0.5 pl-5 text-sm">
						<li className="font-bold">{t.r1}</li>
						<li className="bg-gray-100 dark:bg-gray-800">{t.r2}</li>
						<li>{t.r3}</li>
						<li className="bg-gray-100 dark:bg-gray-800">{t.r4}</li>
						<li className="border-b-2 border-blue-500">{t.r5}</li>
					</ol>
				</div>
			);
		case 12:
			return (
				<div className="space-y-2">
					<blockquote
						className="relative px-5 py-1 italic"
						style={{ color: "#3a0abe" }}
					>
						<span aria-hidden className="absolute top-0 left-0 text-3xl">
							“
						</span>
						{t.quote2}
						<span aria-hidden className="absolute right-0 bottom-0 text-3xl">
							”
						</span>
					</blockquote>
					<button
						type="button"
						id="btn-reservar"
						className={`${
							lang === "pt" ? "btn-acao" : "btn-accion"
						} rounded-lg px-3 py-1.5 text-xs font-medium text-white`}
						style={{ backgroundColor: "red" }}
					>
						{t.reserveSeat} {t.winner}
					</button>
				</div>
			);
		case 13:
			return (
				<div className="space-y-2">
					<nav className="flex gap-3 text-xs font-semibold">
						<span className="text-blue-600 hover:underline"> {t.home} </span>
						<span className="text-blue-600 hover:underline"> {t.catalog} </span>
						<span className="text-blue-600 hover:underline"> {t.orders} </span>
					</nav>
					<blockquote className="text-sm italic">“{t.libQuote}”</blockquote>
					<table className="w-full text-left text-[10px]">
						<tbody>
							<tr>
								<td>{t.book1}</td>
								<td>{t.author1}</td>
								<td>{t.price1}</td>
							</tr>
							<tr className="bg-gray-100 dark:bg-gray-800">
								<td>{t.book2}</td>
								<td>{t.author2}</td>
								<td>{t.price2}</td>
							</tr>
							<tr>
								<td>{t.book3}</td>
								<td>{t.author3}</td>
								<td>{t.price3}</td>
							</tr>
						</tbody>
					</table>
					<p className="text-[10px] text-gray-500"> {t.libFooter} </p>
				</div>
			);
		case 14:
			return (
				<div className="space-y-2">
					<p className="text-sm" style={{ color: "#16a085" }}>
						{t.battle1}
					</p>
					<div
						className="rounded p-2"
						style={{ border: "1px solid #3b82f6", color: "#2980b9" }}
					>
						<p className="text-sm">{t.battle2}</p>
					</div>
					<p className="text-sm" style={{ color: "#8e44ad" }}>
						{t.battle3}
					</p>
					<p className="text-[10px] text-gray-500">{t.battleNote}</p>
				</div>
			);
		case 15:
			return (
				<div className="space-y-2">
					<div
						className="p-2"
						style={{ border: "1px solid #94a3b8", width: "280px" }}
					>
						<code className="text-[10px] text-gray-500">.fila · 440px</code>
						<div
							className="mt-1 inline-block text-sm"
							style={{
								width: "240px",
								padding: "10px",
								border: "4px solid #94a3b8",
								backgroundColor: "#fde68a",
							}}
						>
							{t.fichaA}
						</div>
						<div
							className="inline-block text-sm"
							style={{
								width: "240px",
								padding: "10px",
								border: "4px solid #94a3b8",
								backgroundColor: "#fde68a",
							}}
						>
							{t.fichaB}
						</div>
					</div>
					<p className="text-[10px] text-gray-500">{t.fichasNote}</p>
				</div>
			);
		case 16:
			return (
				<div>
					<div
						className="mx-auto p-2"
						style={{
							width: "85%",
							maxWidth: "320px",
							border: "1px dashed #94a3b8",
						}}
					>
						<p className="text-sm font-bold">{t.nursery}</p>
						<p className="text-[10px]">{t.nurseryIntro}</p>
						{[t.plant1, t.plant2, t.plant3].map((plant) => (
							<div
								key={plant}
								className="mt-2 p-1.5 text-xs"
								style={{
									border: "1px solid #86efac",
									backgroundColor: "#dcfce7",
								}}
							>
								{plant}
							</div>
						))}
					</div>
					<p className="mt-1 text-[10px] text-gray-500">{t.plantNote}</p>
				</div>
			);
		case 17:
			return (
				<div className="space-y-2">
					<div className="rounded border border-gray-300 p-2">
						<h2 className="text-sm font-bold">{t.article1}</h2>
						<p className="text-xs">
							Lorem ipsum{" "}
							<span
								className="inline-block rounded-full px-2 py-1 text-[10px]"
								style={{ backgroundColor: "#fde68a" }}
							>
								{t.chip1}
							</span>
						</p>
						<button
							type="button"
							className="mt-1 rounded px-3 py-1.5 text-xs text-white"
							style={{ backgroundColor: "#2e86c1" }}
						>
							{t.readMore}
						</button>
					</div>
					<div className="rounded border border-gray-300 p-2">
						<h2 className="text-sm font-bold">{t.article2}</h2>
						<p className="text-xs">
							Lorem ipsum{" "}
							<span
								className="inline-block rounded-full px-2 py-1 text-[10px]"
								style={{ backgroundColor: "#fde68a" }}
							>
								{t.chip2}
							</span>
						</p>
						<button
							type="button"
							className="mt-1 rounded px-3 py-1.5 text-xs text-white"
							style={{ backgroundColor: "#2e86c1" }}
						>
							{t.readMore}
						</button>
					</div>
					<p className="text-[10px] text-gray-500">{t.chipsNote}</p>
				</div>
			);
		case 18:
			return (
				<div className="space-y-2">
					<div
						className="rounded border border-gray-300 p-2"
						style={{ maxHeight: "none" }}
					>
						<div
							className="-mx-2 -mt-2 mb-2 px-2 py-1.5 text-xs font-bold text-white"
							style={{ backgroundColor: "#2980b9" }}
						>
							{t.leagueTitle}
						</div>
						<div className="flex items-center gap-2 text-xs">
							<span
								className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
								style={{ backgroundColor: "#e67e22" }}
							>
								1
							</span>
							{t.league1}
						</div>
						<div className="mt-1 flex items-center gap-2 text-xs">
							<span className="font-bold text-[10px]">2</span>
							{t.league2}
						</div>
						<div className="mt-1 flex items-center gap-2 text-xs">
							<span className="font-bold text-[10px]">3</span>
							{t.league3}
						</div>
					</div>
					<p className="text-[10px] text-gray-500">{t.leagueNote}</p>
				</div>
			);
		case 19:
			return (
				<div>
					<div
						className="relative overflow-hidden rounded p-2"
						style={{ minHeight: "110px", backgroundColor: "#f3f4f6" }}
					>
						<p className="text-xs font-bold">{t.theater}</p>
						<p className="text-[10px]">{t.theaterIntro}</p>
						<button
							type="button"
							className="mt-1 rounded bg-blue-600 px-2 py-1 text-[10px] text-white"
						>
							{t.theaterButton}
						</button>
						<div
							className="absolute inset-0"
							style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
						/>
						<div
							className="absolute top-1/2 right-1/2 w-3/5 translate-x-1/2 -translate-y-1/2 rounded p-2"
							style={{ backgroundColor: "white" }}
						>
							<h2 className="text-xs font-bold">{t.modalTitle}</h2>
							<p className="text-[10px]">{t.modalBody}</p>
							<p className="text-[9px] text-gray-400">{t.modalInput}</p>
							<button
								type="button"
								className="mt-1 rounded bg-emerald-600 px-2 py-0.5 text-[10px] text-white"
							>
								{t.modalButton}
							</button>
						</div>
					</div>
					<p className="mt-1 text-[10px] text-gray-500">{t.modalNote}</p>
				</div>
			);
		default:
			return null;
	}
}
