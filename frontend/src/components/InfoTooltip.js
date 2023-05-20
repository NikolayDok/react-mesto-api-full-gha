import React from "react";
import iconAccessIsAllowed from "../images/access-is-allowed.svg";
import iconAccessDenied from "../images/access-denied.svg";

const InfoTooltip = (props) => {
  return (
    <section
      className={`popup-infoTooltip ${
        props.isOpen ? "popup-infoTooltip_opened" : ""
      } `}
    >
      <div className="popup-infoTooltip__container">
        <img
          className="popup-infoTooltip__icon"
          src={props.isAccessIsAllowed ? iconAccessIsAllowed : iconAccessDenied}
        />
        <h2 className="popap-infoTooltip__text">
          {props.isAccessIsAllowed
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте еще раз"}
        </h2>
        <button
          type="button"
          className="popup-infoTooltip__close-btn"
          onClick={props.onClose}
        ></button>
      </div>
    </section>
  );
};

export default InfoTooltip;
