import OptionButton from "./optionButton";

export default function OptionList() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6">
      <OptionButton
        imageUrl="src/assets/registro-pessoas.svg"
        textButton="Registro de pessoas"
        linkTo="/registro-de-pessoas"
      />
      <OptionButton
        imageUrl="src/assets/registrar-imovel.svg"
        textButton="Registrar um imóvel"
        linkTo="/"
      />
      <OptionButton
        imageUrl="src/assets/transferir-imovel.svg"
        textButton="Tranferir um imóvel"
        linkTo="/"
      />
      <OptionButton
        imageUrl="src/assets/documentos-digitais.svg"
        textButton="Documentos digitais"
        linkTo="/"
      />
    </div>
  );
}
