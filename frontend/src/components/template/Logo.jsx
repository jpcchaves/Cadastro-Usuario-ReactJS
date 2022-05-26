import './Logo.css'
import Logo from '../../assets/imgs/logo.png'
import React from 'react'

export default props => 
    <aside className="logo">
        <a href="#">
            <img src={Logo} alt="logotipo da marca" />
        </a>
    </aside>


