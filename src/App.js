import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <Navbar />
        </header>
          <div id="app-body">
            <HeroSection />
          </div>
          {/*<Footer /> */}
      </div>
    </div>
  );
}

export default App;
