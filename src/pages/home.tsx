import Header from "./header";
import OptionList from "./optionList";
import Footer from "./footer";

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
