import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Title />
        <Navbar />
      </header>
      <div id="app-body">
        <section>This is a section that will become its own component.</section>
        <aside className="portrait"></aside>
      </div>
      <Footer />
    </div>
  );
}

export default App;
