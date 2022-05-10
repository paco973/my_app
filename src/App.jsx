import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import './styles/uikit.css';
import {Main} from "./screen/main/Main";
import {Developer} from "./screen/developper/Developper";
import {Nav} from "./screen/main/component/Nav";
import {Auth} from "./screen/auth/Auth";
import {Account} from "./screen/account/Account";

import {SkillForm} from "./screen/account/SkillForm";
import {Singup} from "./screen/register/Singup";
import {ProfileForm} from "./screen/account/ProfileForm";


function App() {
    return <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route path="/developer/:id" element={<Developer/>}/>
                    <Route path="/login" element={<Auth/>}/>
                    <Route path="/account" element={<Account/>}/>
                    <Route path="/projects" element={<SkillForm/>}/>
                    <Route path="/register" element={<Singup/>}/>
                    <Route path="/account/editProfile" element={<ProfileForm/>}/>
                    <Route path="/account/addSkill" element={<SkillForm/>}/>
                </Routes>
            </BrowserRouter>
}
export default App;
