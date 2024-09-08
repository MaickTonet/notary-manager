import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function CivilRegisterForm() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
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
          <h2 className="font-medium text-xl">Histórico de Registros</h2>
        </div>
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
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
          <h1 className="font-bold text-2xl text-center">Novo registro</h1>
          <hr />
          <form className="flex flex-col gap-4 mb-5 ">
            <div className="flex flex-col gap-1">
              <label className="text-lg">Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="form-input"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-lg">CPF</label>
              <input
                type="number"
                placeholder="Digite seu nome"
                className="form-input"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-lg">RG</label>
              <input
                type="number"
                placeholder="Digite seu nome"
                className="form-input"
              />
            </div>
          </form>
          <h2 className="font-bold text-xl text-center">
            Documentos nescessários
          </h2>
          <p className="text-zinc-600 text-center">
            Para fazer o registro, os pais devem levar, os documentos pessoais
            (RG, CPF, certidão de nascimento ou casamento), bem como a
            “declaração de nascido vivo”, emitida pelo hospital ou maternidade e
            entregue aos pais do bebê após o seu nascimento.
          </p>
          <hr />
          <h2 className="font-bold text-xl text-center">
            Horários disponíveis
          </h2>
          <p className="text-zinc-600 text-center">
            Escolha um dos horários disponíveis para o atendimento
          </p>
          <hr />
          <div className="flex justify-center ">
            <button onClick={toggleModal} className="cancel-button ">
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
}
