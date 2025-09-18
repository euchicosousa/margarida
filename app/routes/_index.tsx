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
    <div
      className="min-h-dvh bg-amber-100 grid items-end relative sm:w-[600px] mx-auto"
      style={{
        backgroundImage: "url('./bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="text-center absolute w-full top-0 text-xs py-4 font-bold tracking-wider">
        MÉDICA OFTALMOPEDIATRA EM SOBRAL
      </div>
      <div className="w-full grid items-end bg-gradient-to-t from-[#fffc]">
        <div className="pb-8 text-center">
          <div className="flex my-12 flex-col gap-2 px-8">
            <a
              target="_blank"
              rel="noreferrer"
              href={encodeURI(
                "https://wa.me/+5588992003000?text=Olá, gostaria de marcar uma CONSULTA DOMICILIAR com a Dra. Margarida."
              )}
              className="text-xl font-bold p-8 rounded-full w-60 animate-bounce z-10 leading-none self-end bg-white text-[#444] "
            >
              Inscreva-se aqui para o{" "}
              <span className="text-[#399]">EXAME GRATUITO</span> contra o{" "}
              <span className="text-[#399]">Retinoblastoma</span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={encodeURI(
                "https://wa.me/+5588992003000?text=Olá, gostaria de marcar uma CONSULTA DOMICILIAR com a Dra. Margarida."
              )}
              className="link bg-[#399] hover:bg-[#366] text-white -rotate-6"
            >
              Consulta <br /> Domiciliar
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={encodeURI(
                "https://wa.me/+5588992003000?text=Olá, gostaria de marcar uma CONSULTA OFTALMOLÓGICA EM SOBRAL com a Dra. Margarida."
              )}
              className="link self-end bg-[#fd3] hover:bg-[#366] text-[#444] -rotate-6"
            >
              Consulta <br />
              em Sobral
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={encodeURI(
                "https://wa.me/+5588992003000?text=Olá, gostaria de marcar uma CONSULTA OFTALMOLÓGICA EM MASSAPÊ com a Dra. Margarida."
              )}
              className="link bg-[#f79] hover:bg-[#366] text-white rotate-3"
            >
              Consulta <br />
              em Massapê
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={encodeURI(
                "https://wa.me/+5588992003000?text=Olá, gostaria de marcar uma CONSULTA OFTALMOLÓGICA EM IPU com a Dra. Margarida."
              )}
              className="link self-end bg-[#3b4] hover:bg-[#366] text-white -rotate-12"
            >
              Consulta <br />
              no Ipu
            </a>
          </div>

          <img src="./logo.png" alt="" className="w-40 mx-auto " />

          <div className="text-xs">
            Siga o meu{" "}
            <a
              href="https://instagram.com/dramargaridacarneiro"
              target="_blank"
              rel="noreferrer"
              className="text-[#444] font-bold  underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
