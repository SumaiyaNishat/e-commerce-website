import { BrowserRouter, Route, Routes } from "react-router";

import Navbar from "./../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Error from "../pages/Error/Error";
import Authcheck from "../Authcheck/Authcheck";

const MainLayout = () => {
    return (
        <BrowserRouter>
        {/* navbar */}
        <Navbar/>
        <Routes>
            <Route path="/" element={
                <Authcheck>
                <Home/>
                </Authcheck>
                } />
            <Route path="auth" element={<Auth/>} >
                 <Route path="login" element={<Login/>}/>
                  <Route path="register" element={<Register/>}/>
            </Route>
            
            {/* not found routes*/}
            <Route path="*" element={<Error/>}/>


        </Routes>

        </BrowserRouter>
    );
};

export default MainLayout;