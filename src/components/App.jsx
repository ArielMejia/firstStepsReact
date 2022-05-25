import React from 'react';
import ChangePassword from '../containers/ChangePassword';
import Layout from '../containers/Layout';
import '../styles/global.css'

const App = () =>{
    return(
        <Layout>
            <ChangePassword />
        </Layout>
    );
}

export default App;
