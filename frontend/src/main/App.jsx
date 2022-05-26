import './App.css'
import React from 'react'

// Componentes
import Logo from "../components/template/Logo.jsx"
import Nav from "../components/template/Nav.jsx"
import Main from "../components/template/Main.jsx"
import Footer from "../components/template/Footer.jsx"

export default props => 
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>

