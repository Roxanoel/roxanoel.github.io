import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Footer from "./components/Footer";
import HeroText from "./components/HeroText";
import Button from "./components/Button";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Title />
        <Navbar />
      </header>
      <div id="app-body">
        <HeroText />
        <aside className="portrait"></aside>
      </div>
      <Footer />
      <Button customClass="contact-button">
                Get in touch
      </Button>
    </div>
  );
}

export default App;
