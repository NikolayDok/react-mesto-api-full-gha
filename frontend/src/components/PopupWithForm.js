import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form
          className="popup__form popup__form-profile"
          action="#"
          name={props.name}
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button className="popup__btn" type="submit">
            {props.titleBtn}
          </button>
        </form>
        <button
          onClick={props.onClose}
          className="popup__close-btn"
          type="button"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
