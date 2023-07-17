import './App.css';
import {BrowserRouter, Routes} from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <div className="app-wrapper-content">
            <Routes>

            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
