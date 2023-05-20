import React from "react";
import useForm from "../hooks/useForm";

const Login = (props) => {
  const { handleChange, values, isValid } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmitLogin(values.email, values.password);
  };

  return (
    <section className="authorization">
      <h2 className="authorization__title">Вход</h2>
      <form className="authorization__form">
        <label>
          <input
            id="login-email"
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
            id="login-password"
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
          Войти
        </button>
      </form>
    </section>
  );
};

export default Login;
