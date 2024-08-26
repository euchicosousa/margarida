import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{
			title: "Dra. Margarida Carneiro - Oftalmologia Pediátrica e Estrabismo.",
		},
		{
			name: "description",
			content:
				"Agende suas consultas oftalmológicas com a Dra. Margarida Carneiro Sobral, Massapê, Ipu ou domiciliar.",
		},
	];
};

export default function Index() {
	// console.log(
	// 	encodeURI(
	// 		"https://wa.me/+5588992003000?text=Olá, Gostaria de agendar uma CONSULTA OFTALMOLÓGICA com a Dra. Margarida."
	// 	)
	// );

	return (
		<div className="min-h-dvh bg-amber-100 grid place-content-center">
			<div className="max-w-96 p-8 rounded-xl text-center">
				<div className="rounded-full mx-auto">
					<img
						src="./margarida.png"
						alt="Dra. Margarida Carneiro - Oftalmologia Pediátrica e Estrabismo"
						className="mx-auto w-40"
					/>
				</div>
				<div className="text-center text-3xl font-bold tracking-tight mt-4 text-amber-900">
					Dra. Margarida Carneiro
				</div>
				<div className="flex my-12 flex-col gap-2">
					<a
						target="_blank"
						rel="noreferrer"
						href={encodeURI(
							"https://wa.me/+5588992003000?text=Olá, gostaria de marcar uma CONSULTA DOMICILIAR com a Dra. Margarida."
						)}
						className="link bg-white focus:ring-amber-400 hover:bg-amber-200 text-amber-800"
					>
						Agendar Consulta Domiciliar
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href={encodeURI(
							"https://wa.me/+5588992003000?text=Olá, gostaria de marcar uma CONSULTA OFTALMOLÓGICA EM SOBRAL com a Dra. Margarida."
						)}
						className="link bg-white focus:ring-amber-400 hover:bg-amber-200 text-amber-800"
					>
						Agendar Consulta em Sobral
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href={encodeURI(
							"https://wa.me/+5588992003000?text=Olá, gostaria de marcar uma CONSULTA OFTALMOLÓGICA EM MASSAPÊ com a Dra. Margarida."
						)}
						className="link bg-white focus:ring-amber-400 hover:bg-amber-200 text-amber-800"
					>
						Agendar Consulta em Massapê
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href={encodeURI(
							"https://wa.me/+5588992003000?text=Olá, gostaria de marcar uma CONSULTA OFTALMOLÓGICA EM IPU com a Dra. Margarida."
						)}
						className="link bg-white focus:ring-amber-400 hover:bg-amber-200 text-amber-800"
					>
						Agendar Consulta no Ipu
					</a>
				</div>

				<div className="text-xs text-amber-800 tracking-tight">
					© Dra. Margarida Carneiro
				</div>
			</div>
		</div>
	);
}
