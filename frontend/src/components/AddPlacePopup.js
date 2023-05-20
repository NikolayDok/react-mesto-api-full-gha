import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [cardName, setCardName] = React.useState("");
  const [cardLink, setCardLink] = React.useState("");

  function handleChangeCardName(e) {
    setCardName(e.target.value);
  }

  function handleChangeCardLink(e) {
    setCardLink(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPlace({
      name: cardName,
      link: cardLink,
    });
  };

  React.useEffect(() => {
    setCardName("");
    setCardLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      name="place-create"
      titleBtn="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label>
        <input
          className="popup__input popup__input_place_name"
          type="text"
          name="name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          value={cardName}
          onChange={handleChangeCardName}
        />
        <span className="popup__error name-error"></span>
      </label>
      <label>
        <input
          className="popup__input popup__input_place_link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
          value={cardLink}
          onChange={handleChangeCardLink}
        />
        <span className="popup__error link-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
