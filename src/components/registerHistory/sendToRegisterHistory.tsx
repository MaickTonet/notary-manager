import { Link } from "react-router-dom";

export default function SendToRegisterHistory() {
  return (
    <Link to={"/histórico-de-registros"}>
      <div className="flex flex-col items-center p-2 pb-6 max-w-md rounded shadow bg-white  hover:scale-105 transition-all hover:shadow-md">
        <img
          src={"src/assets/register-history.svg"}
          alt="logo"
          className="w-1/3 md:w-1/2"
          draggable={false}
        />
        <h2 className="font-medium text-xl">Histórico de Registros</h2>
      </div>
    </Link>
  );
}
