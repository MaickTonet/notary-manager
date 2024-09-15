import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from "axios";

Modal.setAppElement("#root");

interface Register {
  name: string;
  date: string;
}

export default function CivilRegisterForm() {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useForm<Register>();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  async function createRegister(data: Register) {
    const { name, date } = data;

    console.log(data);

    try {
      await axios.post("http://localhost:3000/registros", {
        title: "Registro Civil",
        remetente: name,
        date: date,
        status: "Aguardando",
        description: "Um novo registro civil em aberto",
      });
      toggleModal();
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  }

  return (
    <React.Fragment>
      <button onClick={toggleModal} className="outline-none">
        <div className="flex flex-col items-center p-2 pb-6 max-w-md rounded shadow bg-white  hover:scale-105 transition-all hover:shadow-md">
          <img
            src={"src/assets/civil-register.svg"}
            alt="logo"
            className="w-1/3 md:w-1/2"
            draggable={false}
          />
          <h2 className="font-medium text-xl">Registro Civil</h2>
        </div>
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => toggleModal()}
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
        <div className="modal-style">
          <h1 className="font-bold text-2xl text-center">
            Novo registro civil
          </h1>
          <hr />
          <form
            onSubmit={handleSubmit(createRegister)}
            className="flex flex-col gap-4 mb-5"
          >
            <label className="flex flex-col gap-1 text-lg">
              Nome
              <input
                type="text"
                placeholder="Digite seu nome"
                className="form-input"
                required={true}
                {...register("name")}
              />
            </label>
            <hr />
            <label className="flex flex-col gap-1 text-lg">
              Horário Sugerido
              <input
                type="datetime-local"
                className="form-input"
                required={true}
                {...register("date")}
              />
            </label>
            <div className="flex flex-col items-center gap-6">
              <button type="submit" className="sucess-button">
                Solicitar agendamento
              </button>
              <button
                type="button"
                onClick={toggleModal}
                className="cancel-button "
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </React.Fragment>
  );
}
