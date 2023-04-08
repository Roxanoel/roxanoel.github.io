import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Footer from "./components/Footer";
import HeroText from "./components/HeroText";

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
    </div>
  );
}

export default App;
