interface RegisterCardProps {
  title: string;
  date: string;
  description: string;
}

export default function RegisterCard(props: RegisterCardProps) {
  const { title, date, description } = props;

  return (
    <div
      className=" flex flex-col gap-2  items-center action-card"
    >
      <div className="flex gap-2 items-center ">
        <h2 className="font-bold text-lg text-center">{title}</h2>
        <span className="bg-zinc-600 h-2 w-2 rounded-lg"></span>
        <p className="font-bold">{date}</p>
      </div>
      <p className="line-clamp-2 md:line-clamp-3">{description}</p>
    </div>
  );
}
