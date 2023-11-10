import Navbar from "./components/Navbar";
import Title from "./components/Title";
import JobTitles from "./components/JobTitles";
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
              <JobTitles />
              <HeroText />
              <Button customClass="contact-button">
                  <a href="mailto:roxane.noel92@gmail.com">Get in touch</a>
              </Button>
            </section>
            <aside className="portrait"></aside>
          </div>
          {/*<Footer /> */}
      </div>
    </div>
  );
}

export default App;
