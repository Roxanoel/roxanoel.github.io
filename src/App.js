import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          {/*<Navbar />*/}
        </header>
          <div id="hero-section">
            <HeroSection />
          </div>
          {/*
          <ProjectsSection />
          */}
          {/*<Footer /> */}
      </div>
    </div>
  );
}

export default App;
