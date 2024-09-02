import { CircleUserRound, Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-white  py-4 px-10 shadow">
      <Menu color="#000000" size={28} className="md:hidden" />
      <div>Notary Manager</div>
      <div className="flex gap-3 items-center font-medium">
        <p className="hidden md:flex" >Olá, Maick Tonet</p>
        <CircleUserRound color="#000000" size={28} />
      </div>
    </div>
  );
}
