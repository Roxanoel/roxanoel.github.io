import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Footer from "./components/Footer";
import HeroText from "./components/HeroText";
import Button from "./components/Button";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <Navbar />
        </header>
          <div id="app-body">
            <section class="hero-section">
              <Title />
              <HeroText />
            </section>
            <aside className="portrait"></aside>
          </div>
          {/*<Footer /> */}
      </div>
      <Button customClass="contact-button">
        <a href="mailto:roxane.noel92@gmail.com">Get in touch</a>
      </Button>
    </div>
  );
}

export default App;
