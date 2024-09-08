import CivilRegisterForm from "../components/forms/civilRegisterForm";
import Header from "../components/header";
import SendToRegisterHistory from "../components/registerHistory/sendToRegisterHistory";
import "../index.css";

export default function Home() {
  return (
    <div className="bg-primary min-h-screen">
      <Header />
      <div className="py-5 px-[10%] md:mt-8">
        <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          <SendToRegisterHistory />
          <CivilRegisterForm />
        </div>
      </div>
    </div>
  );
}
