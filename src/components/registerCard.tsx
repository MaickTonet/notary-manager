interface RegisterCardProps {
  title: string;
  date: string;
  description: string;
}

export default function RegisterCard(props: RegisterCardProps) {
  const { title, date, description } = props;

  return (
    <div
      className=" flex flex-col gap-2 border items-center border-black/20 bg-white p-2 shadow rounded-md hover:scale-105
         transition-all hover:shadow-md md:max-w-md "
    >
      <div className="flex gap-2 items-center">
        <h2 className="font-bold text-lg text-center">{title}</h2>
        <p>⬤</p>
        <p className="font-bold">{date}</p>
      </div>
      <p className="line-clamp-2 md:line-clamp-3">{description}</p>
    </div>
  );
}
