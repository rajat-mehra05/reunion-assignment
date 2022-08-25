import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SearchContainer from "./components/search/SearchContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-container">
        <SearchContainer />
      </main>
    </div>
  );
}

export default App;
