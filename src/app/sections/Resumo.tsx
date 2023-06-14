import Image from "next/image";
import Perfil from "../../assets/img/eu.png";
import Line from "../../assets/double-line.svg";

export default function Resumo() {
  return (
    <div className=" flex flex-col lg:flex-row h-screen">
      <div className="w-12/12 lg:w-7/12 h-1/2 lg:h-screen flex order-2 lg:order-1">
        <div className="m-auto">
          <div className="mb-5">
            <span className="font-regular font-open text-2xl lg:text-4xl">Olá, eu sou</span>{" "}
          </div>
          <h3 className="font-bold font-open text-5xl xl:text-6xl 2xl:text-8xl">Ícaro Teodoro.</h3>
          <div className="mt-5">
            <span className="font-regular font-open text-2xl lg:text-4xl">
              Desenvolvedor FullStack
            </span>
          </div>
        </div>
      </div>
      <div className="w-12/12 lg:w-5/12 h-1/2 lg:h-screen bg-blue-700 flex order-1 lg:order-2">
        <div className="h-max mx-auto mt-28 m-0 lg:m-auto w-8/12">
          <Image className="w-12/12" src={Perfil} alt="Minha foto de perfil" />
        </div>
      </div>
    </div>
  );
}
