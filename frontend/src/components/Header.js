import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <Routes>
        <Route
          path="/"
          element={
            <div className="header__info">
              <span className="header__user-email">{props.userEmail}</span>
              <a
                onClick={props.handleSignOut}
                className="header__link header__link_sign-out"
              >
                Выйти
              </a>
            </div>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Link to="/sign-up" className="header__link ">
              Регистрация
            </Link>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Link to="/sign-in" className="header__link ">
              Войти
            </Link>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
