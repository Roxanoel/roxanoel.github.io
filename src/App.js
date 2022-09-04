import Navbar from "./components/Navbar";
import Title from "./components/Title";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Title />
        <Navbar />
      </header>
      <div id="app-body">
        <section>This is a section that will become its own component.</section>
        <aside></aside>
      </div>
      <footer className="navbar footer">
        <ul>
          <li>GITHUB</li>
          <li>ITCH</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
