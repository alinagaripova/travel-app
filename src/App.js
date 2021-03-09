import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/search";
import SearchProvider from "./components/Search/searchContext";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchProvider>
        <Search />
      </SearchProvider>
      <Footer />
    </div>
  );
}

export default App;
