import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmDeleteCard({ isOpen, onClose, onCardDelete, card }) {
  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(card);
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="question"
      titleBtn="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}
export default ConfirmDeleteCard;
