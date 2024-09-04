import { Component } from "react";
import Header from "../components/header";
import { Plus } from "lucide-react";
import RegisterCard from "../components/registerCard";

export default class RegisterPeoplePage extends Component {
  render() {
    return (
      <div className="bg-primary min-h-screen">
        <Header />
        <div className="flex flex-col   gap-6  py-5 px-[10%] ">
          <h1 className="font-bold text-2xl text-center">Registros feitos</h1>
          <RegisterCard />
        </div>
        <div className="flex justify-center">
          <button className="flex gap-3 items-center  border border-black/50 p-3 font-bold text-xl w-fit rounded-md shadow hover:scale-105   transition-all hover:shadow-md">
            <Plus /> Novo registro
          </button>
        </div>
      </div>
    );
  }
}
