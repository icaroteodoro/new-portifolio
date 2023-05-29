import Image from "next/image";

import Git from "../assets/github-icon.svg";
import Linkedin from "../assets/linkedin-icon.svg";
import Mail from "../assets/mail-icon.svg";
import { Props } from "next/script";

export default function MenuMediaSocial(props : Props) {
  return (
    <div className={`${props.className} w-20 h-80 bg-gray-600 border-2 border-gray-200 rounded-lg`}>
      <div className="my-auto mx-auto space-y-12">
        <a href="https://github.com/icaroteodoro?tab=repositories" target="_blank" className="flex">
          <Image className="mx-auto" src={Git} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/%C3%ADcaro-teodoro-520259169/" target="_blank" className="flex">
          <Image className="mx-auto" src={Linkedin} alt="" />
        </a>
        <a href="" className="flex">
          <Image className="mx-auto" src={Mail} alt="" />
        </a>
      </div>
    </div>
  );
}
