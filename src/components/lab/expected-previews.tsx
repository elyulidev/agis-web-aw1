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
		case 8: {
			const robust = id === 8;
			return (
				<form
					className="space-y-2"
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<div>
						<label
							htmlFor={`lab${id}-nombre`}
							className="text-xs font-semibold"
						>
							Nombre
						</label>
						<input
							id={`lab${id}-nombre`}
							name="nombre"
							type="text"
							required={robust}
							placeholder="Tu nombre"
							className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-900"
						/>
					</div>
					<div>
						<label htmlFor={`lab${id}-email`} className="text-xs font-semibold">
							Correo
						</label>
						<input
							id={`lab${id}-email`}
							name="email"
							type="email"
							required={robust}
							placeholder="tu@email.com"
							className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-900"
						/>
					</div>
					{robust && (
						<div>
							<label htmlFor={`lab${id}-tel`} className="text-xs font-semibold">
								Teléfono (9 dígitos)
							</label>
							<input
								id={`lab${id}-tel`}
								name="telefono"
								type="tel"
								pattern="[0-9]{9}"
								title="Introduce 9 dígitos numéricos."
								placeholder="123456789"
								className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-900"
							/>
						</div>
					)}
					<div>
						<label htmlFor={`lab${id}-msg`} className="text-xs font-semibold">
							Mensaje
						</label>
						<textarea
							id={`lab${id}-msg`}
							name="mensaje"
							minLength={robust ? 10 : undefined}
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
		}
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
				<div className="grid gap-2 sm:grid-cols-2">
					<div className="rounded-lg border p-2">
						<p className="text-xs font-semibold">Sin reset: ~8px</p>
						<div className="mt-1 border border-dashed p-2">
							<p
								style={{
									margin: "8px",
								}}
								className="bg-amber-100 text-xs"
							>
								Contenido separado del borde
							</p>
						</div>
					</div>
					<div className="rounded-lg border p-2">
						<p className="text-xs font-semibold">Con reset: pegado</p>
						<div className="border border-dashed p-2">
							<p
								style={{
									margin: 0,
								}}
								className="bg-emerald-100 text-xs"
							>
								Contenido pegado al borde
							</p>
						</div>
					</div>
				</div>
			);
		case 10:
			return (
				<div
					style={{ backgroundColor: "#f8fafc", fontFamily: "Georgia, serif" }}
				>
					<h1
						id="nombre-titulo"
						style={{ color: "#1d4ed8", textAlign: "center" }}
					>
						{t.name}
					</h1>
					<h2 style={{ color: "#1d4ed8" }}> {t.about} </h2>
					<div
						className="seccion"
						style={{ border: "1px solid #94a3b8", padding: "8px" }}
					>
						<p className="text-sm"> {t.aboutBody} </p>
					</div>
				</div>
			);
		case 11:
			return (
				<div>
					<nav>
						<ul className="flex gap-3 text-sm font-semibold">
							<li>
								<a
									href="#lab11"
									className="text-blue-600 hover:text-red-600 hover:underline"
								>
									{t.menu1}
								</a>
							</li>
							<li>
								<a
									href="#lab11"
									className="text-blue-600 hover:text-red-600 hover:underline"
								>
									{t.menu2}
								</a>
							</li>
							<li>
								<a
									href="#lab11"
									className="text-blue-600 hover:text-red-600 hover:underline"
								>
									{t.menu3}
								</a>
							</li>
						</ul>
					</nav>
					<ol className="mt-2 list-decimal space-y-0.5 pl-5 text-sm">
						<li className="font-bold">Primer ítem</li>
						<li className="bg-gray-100 dark:bg-gray-800">Segundo ítem</li>
						<li>Tercer ítem</li>
						<li className="bg-gray-100 dark:bg-gray-800">Cuarto ítem</li>
						<li className="border-b-2 border-blue-500">Último ítem</li>
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
						{t.quote}
						<span aria-hidden className="absolute right-0 bottom-0 text-3xl">
							”
						</span>
					</blockquote>
					<button
						type="button"
						id="btn-principal"
						className="btn-accion rounded-lg px-3 py-1.5 text-xs font-medium text-white"
						style={{ backgroundColor: "red" }}
					>
						{t.button} (gana el ID)
					</button>
				</div>
			);
		case 13:
			return (
				<div className="space-y-2">
					<nav className="flex gap-3 text-xs font-semibold">
						<span className="text-blue-600 hover:underline">{t.menu1}</span>
						<span className="text-blue-600 hover:underline">{t.menu2}</span>
						<span className="text-blue-600 hover:underline">{t.menu3}</span>
					</nav>
					<table className="w-full text-left text-xs" border={1}>
						<tbody>
							<tr className="bg-gray-100 dark:bg-gray-800">
								<td>AW1</td>
							</tr>
							<tr>
								<td>Libre</td>
							</tr>
						</tbody>
					</table>
					<blockquote className="text-sm italic">“{t.quote}”</blockquote>
				</div>
			);
		default:
			return null;
	}
}
