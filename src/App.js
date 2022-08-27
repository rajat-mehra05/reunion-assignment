import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import FilterBox from "./components/filterbox/FilterBox";
import Navbar from "./components/navbar/Navbar";
import SearchContainer from "./components/search/SearchContainer";
import data from "./fakeData/data.json";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyInfo, setPropertyInfo] = useState(data.propertyData);

  return (
    <div className="App">
      <Navbar />
      <main className="main-container">
        <SearchContainer
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <FilterBox
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          propertyInfo={propertyInfo}
          setPropertyInfo={setPropertyInfo}
        />
        <div className="cards-wrapper">
          {propertyInfo.length < 1 ? (
            <div className="cards-no-item">
              <h1>Sorry! Can't find your requested item </h1>
            </div>
          ) : (
            propertyInfo?.map((item) => <Card key={item.id} content={item} />)
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
