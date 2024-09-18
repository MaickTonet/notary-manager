import axios from "axios";
import { CalendarClock } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDateTime } from "../components/registerHistory/registerCard";
import { useForm } from "react-hook-form";

interface Register {
  id: string;
  title: string;
  remetente: string;
  date: string;
  status: string;
  documments: string;
}

interface editRegister {
  documments: string;
  date: string;
}

export default function RegisterPage() {
  const { id } = useParams();
  const [currentRegister, setCurrentRegister] = useState<Register>();
  const { register, handleSubmit } = useForm<editRegister>();

  useEffect(() => {
    axios.get(`http://localhost:3000/registros/${id}`).then((response) => {
      setCurrentRegister(response.data);
    });
  });

  async function updateForm(data: editRegister) {
    const update = { ...currentRegister, ...data };
    update.status = "Aguardando";
    await axios.put(
      `http://localhost:3000/registros/${currentRegister?.id}`,
      update
    );
  }

  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-screen bg-primary py-6 px-4">
      <div className="flex flex-col items-center gap-6">
        <h2 className="font-bold text-2xl">{currentRegister?.title}</h2>
        <p className=" text-lg text-zinc-600 ">
          Nome do remetente: {currentRegister?.remetente}
        </p>
        {currentRegister?.status === "Novo" && (
          <div className="bg-blue-500 text-white rounded-md px-2 py-1 shadow ">
            <p className="text-lg">{currentRegister.status}</p>
          </div>
        )}
        {currentRegister?.status === "Aguardando" && (
          <div className="bg-yellow-500 text-white rounded-md px-2 py-1 shadow">
            <p className="text-lg">{currentRegister.status}</p>
          </div>
        )}
        {currentRegister?.status === "Concluído" && (
          <div className="bg-green-500 text-white rounded-md px-2 py-1 shadow">
            <p className="text-lg">{currentRegister.status}</p>
          </div>
        )}
        {currentRegister?.status === "Cancelado" && (
          <div className="bg-red-500 text-white rounded-md px-2 py-1 shadow">
            <p className="text-lg">{currentRegister.status}</p>
          </div>
        )}
        {currentRegister?.status !== "Concluído" &&
          currentRegister?.status !== "Cancelado" && (
            <div className="bg-zinc-300/40 p-2 flex items-center shadow gap-5 rounded-md">
              <CalendarClock />
              <p className="text-md">
                Horário sugerido: {formatDateTime(currentRegister?.date)}
              </p>
            </div>
          )}
      </div>
      {sessionStorage.getItem("role") === "admin" &&
        currentRegister?.status === "Novo" && (
          <>
            <div className="flex flex-col gap-2 items-center">
              <h2 className="font-bold text-2xl">Aprovar solicitação</h2>
              <form
                onSubmit={handleSubmit(updateForm)}
                className="flex flex-col gap-5 border-black/20 p-4 rounded-lg border-dashed border-2 items-center"
              >
                <label className="flex flex-col gap-2 text-lg">
                  Informe os documentos nescessários
                  <input
                    type="text"
                    className="border-b-2 px-4 outline-none bg-transparent"
                    placeholder="Informar documentos"
                    required={true}
                    {...register("documments")}
                  />
                </label>
                <label className="flex flex-col gap-2 text-lg">
                  Alterar horário de atendimento - opicional
                  <input
                    type="datetime-local"
                    className="border-b-2 px-4 outline-none bg-transparent"
                    value={currentRegister?.date}
                    {...register("date")}
                  />
                </label>
                <button type="submit" className="sucess-button">
                  Aprovar
                </button>
                <button type="submit" className="cancel-button">
                  Desaprovar
                </button>
              </form>
            </div>
          </>
        )}
      {currentRegister?.status === "Aguardando" && (
        <div className="px-8">
          <hr className="mb-8" />
          <p className="text-center text-lg text-zinc-600">
            Documentos nescessários: {currentRegister.documments}
          </p>
        </div>
      )}
      {sessionStorage.getItem("role") === "admin" &&
        currentRegister?.status === "Aguardando" && (
          <div className="flex flex-col gap-8">
            <button className="bg-blue-600 text-white text-lg p-2 rounded-md shadow hover:bg-blue-700">
              Finalizar atendimento
            </button>
            <button className="bg-red-600 text-white text-lg p-2 rounded-md shadow hover:bg-red-700">
              Concluír atendimento
            </button>
          </div>
        )}
    </div>
  );
}
