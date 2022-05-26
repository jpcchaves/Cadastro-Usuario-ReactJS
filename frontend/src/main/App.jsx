import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

// Componentes
import Logo from "../components/template/Logo.jsx"
import Nav from "../components/template/Nav.jsx"
import Home from "../components/home/Home.jsx"
import Footer from "../components/template/Footer.jsx"

export default props => 
    <div className="app">
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </div>

