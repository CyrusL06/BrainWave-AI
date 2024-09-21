import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
  return (
    //👇🏼 react fragmetn to allow us more elements
    <>
      <div className="pt-[4.75rem] lg:pt=[5.25] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
