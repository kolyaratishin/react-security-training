import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginContainer from "./components/Auth/Login/LoginContainer";
import RegistrationContainer from "./components/Auth/Registration/RegistrationContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile"
                               element={<ProfileContainer/>}/>
                        <Route path="/users"
                               element={<UsersContainer/>}/>
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
