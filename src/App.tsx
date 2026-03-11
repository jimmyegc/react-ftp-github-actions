import Hero from "./components/Hero";
import Cultura from "./components/Cultura";
import Gastronomia from "./components/Gastronomia";
import Tecnologia from "./components/Tecnologia";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Hero />
      <Cultura />
      <Gastronomia />
      <Tecnologia />
      <Footer />
    </>
  );
};

export default App;
