import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <div className="app-wrapper-content">
            <Routes>
                <Route path="/profile"
                       element={<Profile/>}/>
                <Route path="/users"
                       element={<Users/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
