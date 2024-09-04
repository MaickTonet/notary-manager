import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="bg-primary h-screen flex flex-col justify-center items-center p-2">
      <img
        src="src/assets/page-not-found.svg"
        alt="Page not found illustration"
        className="w-full md:w-1/3"
      />
      <div className="flex flex-col gap-5 items-center ">
        <h1 className="font-bold text-4xl text-center">
          Página não encontrada
        </h1>
        <Link to={"/home"}>
          <button className="flex gap-3 items-center  border border-black/50 p-3 font-bold text-xl w-fit rounded-md shadow hover:scale-105        transition-all hover:shadow-md">
            <LogIn />
            Voltar para o início
          </button>
        </Link>
      </div>
    </div>
  );
}
