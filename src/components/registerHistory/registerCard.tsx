import classNames from "classnames";

// Definindo os tipos permitidos para o status
export type StatusType = "Novo" | "Aguardando" | "Concluído" | "Cancelado";

interface RegisterCardProps {
  title: string;
  date: string;
  status: StatusType; // Restringimos o tipo de status
  remetente: string;
}

const formatDateTime = (dateTimeString: string) => {
  const date = new Date(dateTimeString);

  const horas = date.getHours().toString().padStart(2, "0");
  const minutos = date.getMinutes().toString().padStart(2, "0");
  const dia = date.getDate().toString().padStart(2, "0");
  const mes = (date.getMonth() + 1).toString().padStart(2, "0"); // Meses são base 0
  const ano = date.getFullYear();

  return `${horas}:${minutos} ${dia}/${mes}/${ano}`;
};

export default function RegisterCard(props: RegisterCardProps) {
  const { title, date, status, remetente } = props;

  const backgroundColors: Record<StatusType, string> = {
    Novo: "bg-blue-500",
    Aguardando: "bg-yellow-500",
    Concluído: "bg-green-500",
    Cancelado: "bg-red-500",
  };

  const backgroundColorClass = backgroundColors[status];

  return (
    <div className="flex flex-col gap-2 items-center action-card">
      <div className="flex gap-2 items-center">
        <h2 className="font-bold text-lg text-center">{title}</h2>
        <span className="bg-zinc-600 h-2 w-2 rounded-lg"></span>
        <p className="font-bold">{formatDateTime(date)}</p>
      </div>
      <div
        className={classNames(
          "flex justify-center text-white w-[80%] rounded-xl shadow",
          backgroundColorClass
        )}
      >
        {status}
      </div>
      <p className="line-clamp-2 md:line-clamp-3">Remetente: {remetente}</p>
    </div>
  );
}
