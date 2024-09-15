import { Link } from "react-router-dom";
import CivilRegisterForm from "../components/forms/civilRegisterForm";
import Header from "../components/header";
import SendToRegisterHistory from "../components/registerHistory/sendToRegisterHistory";
import "../index.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    const role = sessionStorage.getItem("role");

    if (username) {
      setName(username);
    }

    if (role) {
      setRole(role);
    }
  }, []);

  if (!role) {
    return (
      <div className="min-h-screen bg-primary flex flex-col gap-4 justify-center p-3 items-center">
        <img
          src="src/assets/not-logged.png"
          alt="Usuário não esta logado"
          className="w-1/2 md:w-1/4"
          draggable={false}
        />
        <p className="font-bold text-lg">É preciso acesssar usando sua conta</p>
        <Link to={"/login"}>
          <button className="action-button-secondary">
            Entrar com sua conta
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-primary min-h-screen">
      <Header name={name} />
      <div className="py-5 px-[10%] md:mt-8">
        <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          <SendToRegisterHistory />
          <CivilRegisterForm />
        </div>
      </div>
    </div>
  );
}
