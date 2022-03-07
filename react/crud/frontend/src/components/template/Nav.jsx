import "./Nav.css";
import React from "react";

const Nav = (props) => (
  <aside className="menu-area">
    <nav className="menu">
      {/*Refaturar em casa*/}
      <a href="#/">
        <i className="fa fa-home"></i>Inicio
      </a>
      <a href="#/users">
        <i className="fa fa-users"></i>Usuários
      </a>
    </nav>
    
  </aside>
);
export default Nav;
