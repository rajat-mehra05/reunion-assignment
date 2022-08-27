import "./App.css";
import Card from "./components/card/Card";
import FilterBox from "./components/filterbox/FilterBox";
import Navbar from "./components/navbar/Navbar";
import SearchContainer from "./components/search/SearchContainer";
import data from "./fakeData/data.json";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-container">
        <SearchContainer />
        <FilterBox />
        <div className="cards-wrapper">
          {data.propertyData.map((item) => (
            <Card key={item.id} content={item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
