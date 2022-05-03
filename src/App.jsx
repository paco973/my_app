import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import './styles/uikit.css';
import {Main} from "./screen/main/Main";
import {Developper} from "./screen/developper/Developper";
import {Nav} from "./screen/main/component/Nav";
import {Auth} from "./screen/auth/Auth";
import {Account} from "./screen/account/Account";

function App() {
    return (

            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route path="/developper" element={<Developper/>}/>
                    <Route path="/login" element={<Auth/>}/>
                    <Route path="/account" element={<Account/>}/>
                </Routes>
            </BrowserRouter>

    );
}

export default App;
