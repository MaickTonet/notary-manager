import Header from "../components/header";
import OptionList from "../components/optionList";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="bg-primary min-h-screen">
      <Header />
      <div className="py-5 px-[10%] ">
        <OptionList />
      </div>
      <Footer />
    </div>
  );
}
