import Navbar from "./components/Navbar";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Navbar />
      </header>
      <div id="App-body">
        <section>This is a section that will become its own component.</section>
        <aside></aside>
      </div>
    </div>
  );
}

export default App;
