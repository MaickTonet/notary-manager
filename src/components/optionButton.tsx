import { Link } from "react-router-dom";

interface OptionButtonProps {
  imageUrl: string;
  textButton: string;
  linkTo: string;
}

export default function OptionButton(props: OptionButtonProps) {
  const { imageUrl, textButton, linkTo } = props;

  return (
    <Link to={`${linkTo}`}>
      <div className="flex flex-col items-center p-2 rounded shadow bg-white  hover:scale-105   transition-all hover:shadow-md">
        <img
          src={imageUrl}
          alt="logo"
          className="w-1/3 md:w-1/2"
          draggable={false}
        />
        <h2 className="font-medium text-xl">{textButton}</h2>
      </div>
    </Link>
  );
}
