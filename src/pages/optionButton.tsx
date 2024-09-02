interface OptionButtonProps {
  imageUrl: string;
  textButton: string;
}

export default function OptionButton(props: OptionButtonProps) {
  const { imageUrl, textButton } = props;

  return (
    <div className="flex flex-col items-center p-2  rounded shadow bg-white">
      <img src={imageUrl} alt="logo" className="w-1/3 md:w-1/2" draggable={false} />
      <h2 className="font-medium text-xl">{textButton}</h2>
    </div>
  );
}
