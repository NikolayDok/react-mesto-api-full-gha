import React from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";

const Register = (props) => {
  const { handleChange, values, isValid } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmitRegister(values.email, values.password);
  };

  return (
    <section className="authorization">
      <h2 className="authorization__title">Регистрация</h2>
      <form className="authorization__form">
        <label>
          <input
            id="register-email"
            className="authorization__input"
            name="email"
            type="email"
            placeholder="Email"
            minLength="2"
            maxLength="30"
            required
            value={values.email || ""}
            onChange={handleChange}
          />
          <span className="authorization__error"></span>
        </label>
        <label>
          <input
            id="register-password"
            className="authorization__input"
            name="password"
            type="password"
            placeholder="Пароль"
            minLength="2"
            required
            value={values.password || ""}
            onChange={handleChange}
          />
          <span className="authorization__error"></span>
        </label>
        <button
          onClick={handleSubmit}
          className={`authorization__button ${
            !isValid ? "authorization__button_disabled" : ""
          }`}
          type="submit"
        >
          Зарегистрироваться
        </button>
        <Link to="/sign-in" className="authorization__link-login">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </section>
  );
};

export default Register;
