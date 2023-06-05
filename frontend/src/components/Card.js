import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;

  const isLiked = card.likes.some((id) => id === currentUser._id);

  const cardLikeButtonClassName = `cards__likes-btn ${
    isLiked && "cards__likes-btn_active"
  }`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleClick() {
    onCardClick(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="cards__item">
      <img
        onClick={handleClick}
        src={card.link}
        alt={card.name}
        className="cards__image"
      />
      <div className="cards__info">
        <h2 className="cards__title">{card.name}</h2>
        <button
          onClick={handleLikeClick}
          className={cardLikeButtonClassName}
          type="button"
          aria-label="Like"
        ></button>
        <span className="cards__likes-counter">{card.likes.length}</span>
      </div>
      {isOwn && (
        <button
          onClick={handleDeleteClick}
          className=" cards__delete-btn"
          type="button"
          aria-label="Delete"
        ></button>
      )}
    </li>
  );
}

export default Card;
