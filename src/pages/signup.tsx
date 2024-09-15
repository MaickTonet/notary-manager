import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ISignUp {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
}

Modal.setAppElement("#root");

export default function SignUp() {
  const { register, handleSubmit } = useForm<ISignUp>();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  async function signUp(data: ISignUp) {
    const { name, email, cpf, phone, password } = data;
    console.log(data);

    try {
      await axios.post("http://localhost:3000/usuarios", {
        name,
        email,
        cpf,
        phone,
        password,
        role: "user",
      });

      navigate("/home");
    } catch (error) {
      console.error(error);
      toggleModal();
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-primary ">
      <div className="bg-blue-800 w-full md:w-[60%] my-9 flex flex-col gap-3 items-center p-6 rounded-md text-white shadow-md">
        <img
          src="src/assets/signup.png"
          alt="Imagem de login"
          draggable={false}
          className="w-[70%] md:w-1/4"
        />
        <h2 className="font-bold text-2xl mb-6">Registre sua conta</h2>
        <form
          onSubmit={handleSubmit(signUp)}
          className="flex flex-col gap-6 w-full md:w-1/2"
        >
          <label className="flex flex-col gap-2">
            Nome
            <input
              type="text"
              {...register("name")}
              className="px-2 py-1 rounded-lg outline-none text-black"
              placeholder="Digite seu nome"
              required={true}
            />
          </label>
          <label className="flex flex-col gap-2">
            Email
            <input
              type="text"
              {...register("email")}
              className="px-2 py-1 rounded-lg outline-none text-black"
              placeholder="Digite seu email"
              required={true}
            />
          </label>
          <label className="flex flex-col gap-2">
            CPF
            <input
              type="text"
              {...register("cpf")}
              className="px-2 py-1 rounded-lg outline-none text-black"
              placeholder="Digite seu CPF"
              required={true}
            />
          </label>
          <label className="flex flex-col gap-2">
            Telefone para contato
            <input
              type="text"
              {...register("phone")}
              className="px-2 py-1 rounded-lg outline-none text-black"
              placeholder="Digite seu telefone"
              required={true}
            />
          </label>
          <label className="flex flex-col gap-2">
            Senha
            <input
              type="password"
              {...register("password")}
              className="px-2 py-1 rounded-lg outline-none text-black"
              placeholder="Digite sua senha"
              required={true}
            />
          </label>
          <button
            type="submit"
            className="font-bold text-xl p-1 rounded-lg ease-in duration-100 bg-blue-700 shadow hover:bg-blue-600"
          >
            Cadastrar
          </button>
          <Link to={"/login"}>
            <p className="font-bold text-center mt-4 cursor-pointer hover:text-blue-200 ">
              Já possui uma conta?
            </p>
          </Link>
        </form>
      </div>
      <Modal
        isOpen={modal}
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
        <div className="flex flex-col gap-4 items-center bg-white w-[80%] md:w-1/3 p-8 rounded-lg shadow-lg mx-auto mt-20 outline-none">
          <img
            src="src/assets/error.svg"
            alt="Imagem de erro de cadastro"
            className=""
          />
          <h2 className="text-center text-xl">
            Parece que algo deu errado, tente novamente mais tarde
          </h2>
          <button onClick={toggleModal} className="action-button-secondary">
            Fechar
          </button>
        </div>
      </Modal>
    </div>
  );
}
