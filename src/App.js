import React from 'react'
import Header from './components/header/Header'
import {Footer} from './components/footer/Footer'

import Login from './components/login/Login'

const App = () => {
    return (
        <div>
            <Header/>
            <Login/>
            <Footer/>
        </div>
    );
}

export default App
