import OptionButton from "./optionButton";

export default function OptionList() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      <OptionButton
        imageUrl="src/assets/registro-pessoas.svg"
        textButton="Registro de pessoas"
      />
      <OptionButton
        imageUrl="src/assets/registrar-imovel.svg"
        textButton="Registrar um imóvel"
      />
      <OptionButton
        imageUrl="src/assets/transferir-imovel.svg"
        textButton="Tranferir um imóvel"
      />
      <OptionButton
        imageUrl="src/assets/documentos-digitais.svg"
        textButton="Documentos digitais"
      />
    </div>
  );
}
