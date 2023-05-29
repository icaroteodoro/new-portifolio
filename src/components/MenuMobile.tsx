import Link from "next/link";
import { Props } from "next/script";
import MenuMediaSocial from "./MenuMediaSocial";

export default function MenuMobile(props: Props) {
  return (
    <div className={`${props.className} transition-all duration-500 h-full w-6/12 fixed top-0 block lg:hidden bg-white`}>
      <div className="h-3/6 w-full flex">
        <div className="my-auto space-y-8 px-8">
          <div>
            <Link
              href="/"
              className={`${props.src} text-slate-950 font-regular font-open text-xl`}
            >
              HOME
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className={`${props.src} text-slate-950 font-regular font-open text-xl`}
            >
              MEU RESUMO
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className={`${props.src} text-slate-950 font-regular font-open text-xl`}
            >
              PROJETOS
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className={`${props.src} text-slate-950 font-regular font-open text-xl`}
            >
              CONTATO
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-3/6 flex">
        <MenuMediaSocial className="m-auto flex"/>

      </div>
    </div>
  );
}
