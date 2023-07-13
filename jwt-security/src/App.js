import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";
import LoginContainer from "./components/Auth/Login/LoginContainer";
import RegistrationContainer from "./components/Auth/Registration/RegistrationContainer";

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
                        <Route path="/login"
                               element={<LoginContainer/>}/>
                        <Route path="/registration"
                               element={<RegistrationContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
