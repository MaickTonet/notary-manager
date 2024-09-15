import { CircleUserRound, LogOut, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface IHeader {
  name: string;
}

export default function Header(props: IHeader) {
  const { name } = props;
  const navigate = useNavigate();

  function logOut() {
    sessionStorage.clear();
    navigate("/login");
  }

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
      <div className="flex md:gap-10 items-center">
        <Link
          to={"/home"}
          className="flex gap-3 items-center hover:scale-105 ease-in-out duration-100"
        >
          <p className="hidden md:flex text-xl font-medium">Olá, {name}</p>
          <CircleUserRound color="#000000" size={28} />
        </Link>
        <button onClick={logOut} className="hover:scale-105 ease-in-out duration-100">
          <LogOut color="#000000" size={28} className="hidden md:flex" />
        </button>
      </div>
    </div>
  );
}
