import "./Logo.css";
import Logo from "../../assets/imgs/logo.png";
import React from "react";
import { Link } from "react-router-dom";

export default (props) => (
  <aside className="logo">
    <Link to="/">
      <img src={Logo} alt="logotipo da marca" />
    </Link>
  </aside>
);
