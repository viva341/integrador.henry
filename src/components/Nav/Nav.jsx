import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"; // Importa tu archivo de estilos de Nav

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.navContainer}> {/* Agrega una clase para contener los enlaces */}
        <SearchBar onSearch={this.props.onSearch} />
        <div className={style.navLinks}> {/* Agrega una clase para los enlaces */}
          <Link to="/about">
            <h3>ABOUT</h3>
          </Link>
          <Link to="/home">
            <h3>HOME</h3>
          </Link>  
          <Link to="/favorites">
            <h3>FAVORITES</h3>
          </Link>  
        </div>
      </div>
    );
  }
}

export default Nav;
