import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="bg-primary h-screen flex flex-col justify-center items-center p-2">
      <img
        src="src/assets/not-found.svg"
        alt="Page not found illustration"
        className="w-full md:w-1/3"
        draggable={false}
      />
      <div className="flex flex-col gap-5 items-center ">
        <h1 className="font-bold text-4xl text-center">
          Página não encontrada
        </h1>
        <Link to={"/home"}>
          <button className="flex gap-3 items-center action-button-secondary">
            <LogIn />
            Voltar para o início
          </button>
        </Link>
      </div>
    </div>
  );
}
