import Header from "../components/header";
import RegisterCard, {
  StatusType,
} from "../components/registerHistory/registerCard";
import axios from "axios";
import { useEffect, useState } from "react";

interface Register {
  id: string;
  title: string;
  date: string;
  status: StatusType;
  remetente: string;
}

export default function RegisterHistory() {
  const [registers, setRegisters] = useState<Register[] | null>([]);

  useEffect(() => {
    axios
      .get<Register[]>("http://localhost:3000/registros")
      .then((response) => {
        setRegisters(response.data);
      });
  }, []);

  return (
    <div className="bg-primary min-h-screen">
      <Header />
      <div className="flex flex-col gap-8 py-5 px-[10%] ">
        <h1 className="font-bold text-3xl text-center">Registros criados</h1>
        <div className="flex justify-center"></div>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {registers
            ? registers.map((register) => {
                return (
                  <RegisterCard
                    key={register.id}
                    title={register.title}
                    date={register.date}
                    status={register.status}
                    remetente={register.remetente}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
