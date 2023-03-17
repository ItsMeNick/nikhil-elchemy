import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchEngine from "./SearchEngine";
import SearchList from "./SearchList";
import GithubDetails from "./GithubDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<SearchEngine />} />
          <Route path="/list" element={<SearchList />} />
          <Route path="/details" element={<GithubDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
