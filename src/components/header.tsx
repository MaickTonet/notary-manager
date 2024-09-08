import { CircleUserRound, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-white  py-4 px-10 shadow">
      <Menu color="#000000" size={28} className="md:hidden" />
      <Link to={"/home"}>
        <img
          src="public/notary-manager-desktop.png"
          alt="Notary Mananger logo"
          className="h-16 hidden md:flex"
        />
        <img
          src="public/notary-manager-mobile.png"
          alt="Notary Mananger logo"
          className="h-16 md:hidden"
        />
      </Link>
      <div className="flex gap-3 items-center font-medium">
        <p className="hidden md:flex text-xl">Olá, Maick Tonet</p>
        <CircleUserRound color="#000000" size={28} />
      </div>
    </div>
  );
}
