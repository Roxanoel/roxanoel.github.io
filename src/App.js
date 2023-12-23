import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <Navbar />
        </header>
          <div id="app-body">
            <HomePage />
          </div>
          {/*<Footer /> */}
      </div>
    </div>
  );
}

export default App;
