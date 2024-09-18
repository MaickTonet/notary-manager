import Header from "../components/header";
import RegisterCard, {
  StatusType,
} from "../components/registerHistory/registerCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { formatDateTime } from "../components/registerHistory/registerCard";
import { CalendarClock } from "lucide-react";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");
interface Register {
  id: string;
  title: string;
  date: string;
  status: StatusType;
  remetente: string;
}

export default function RegisterHistory() {
  const [registers, setRegisters] = useState<Register[] | null>([]);
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Register | null>(null);
  const navigate = useNavigate();

  const handleItemClick = (item: Register) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  useEffect(() => {
    axios
      .get<Register[]>("http://localhost:3000/registros")
      .then((response) => {
        setRegisters(response.data);
      });

    const username = sessionStorage.getItem("username");

    if (username) {
      setName(username);
    }
  }, []);

  return (
    <div className="bg-primary min-h-screen">
      <Header name={name} />
      <div className="flex flex-col gap-8 py-5 px-[10%] ">
        <h1 className="font-bold text-3xl text-center">Registros criados</h1>
        <div className="flex justify-center"></div>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {registers
            ? registers.map((register) => {
                return (
                  <div
                    onClick={() =>
                      navigate(`/registro/${register.id}`)
                    }
                  >
                    <RegisterCard
                      key={register.id}
                      title={register.title}
                      date={register.date}
                      status={register.status}
                      remetente={register.remetente}
                    />
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        closeTimeoutMS={300}
        className={{
          base: "fixed inset-0 flex items-center justify-center z-50 transform transition-transform duration-300 ease-out",
          afterOpen: "scale-100 opacity-100",
          beforeClose: "scale-95 opacity-0",
        }}
        overlayClassName={{
          base: "fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300",
          afterOpen: "opacity-100",
          beforeClose: "opacity-0",
        }}
      >
        <div className="modal-style items-center">
          <h2 className="font-bold text-2xl ">{selectedItem?.title}</h2>
          <p className=" text-lg text-zinc-600 ">
            Nome do remetente: {selectedItem?.remetente}
          </p>
          {selectedItem?.status === "Novo" && (
            <div className="bg-blue-500 text-white rounded-md px-2 py-1 shadow ">
              {selectedItem.status}
            </div>
          )}
          {selectedItem?.status === "Aguardando" && (
            <div className="bg-yellow-500 text-white rounded-md px-2 py-1 shadow">
              {selectedItem.status}
            </div>
          )}
          {selectedItem?.status === "Concluído" && (
            <div className="bg-green-500 text-white rounded-md px-2 py-1 shadow">
              {selectedItem.status}
            </div>
          )}
          {selectedItem?.status === "Cancelado" && (
            <div className="bg-red-500 text-white rounded-md px-2 py-1 shadow">
              {selectedItem.status}
            </div>
          )}

          <div className="bg-zinc-300/40 p-2 flex items-center gap-5 rounded-md">
            <CalendarClock />
            <p className="text-lg">
              Horário sugerido: {formatDateTime(selectedItem?.date)}
            </p>
          </div>

          {sessionStorage.getItem("role") === "admin" &&
            selectedItem?.status === "Aguardando" && (
              <>
                <hr className="w-full my-4" />
                <div className="flex flex-col gap-2 items-center">
                  <h2 className="font-bold text-2xl">Aprovar solicitação</h2>
                  <form className="flex flex-col gap-5 border-black/20 p-4 rounded-lg border-dashed border-2 items-center">
                    <label className="flex flex-col gap-2 text-lg">
                      Informe os documentos nescessários
                      <input
                        type="text"
                        className="border-b-2 px-4 outline-none"
                        placeholder="Informar documentos"
                        required={true}
                      />
                    </label>
                    <label className="flex flex-col gap-2 text-lg">
                      Alterar horário de atendimento - opicional
                      <input
                        type="datetime-local"
                        className="border-b-2 px-4 outline-none"
                        value={selectedItem?.date}
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
          <button
            className="cancel-button mt-6"
            onClick={() => setIsOpen(false)}
          >
            Fechar{" "}
          </button>
        </div>
      </Modal>
    </div>
  );
}
