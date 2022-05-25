import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ChangePassword from '../containers/ChangePassword';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css'

const App = () =>{
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/change-password" element={<ChangePassword />} />
                        <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                        <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
