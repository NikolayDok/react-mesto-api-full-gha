function ImagePopup(props) {
  return (
    <div
      className={`popup  popup_place_image ${
        props.card.link ? "popup_opened" : ""
      }`}
    >
      <figure className="popup__figure">
        <img
          src={props.card ? props.card.link : "#"}
          alt={props.card ? props.card.name : ""}
          className="popup__image"
        />
        <figcaption className="popup__figcaption">
          {props.card ? props.card.name : ""}
        </figcaption>
        <button
          onClick={props.onClose}
          className="popup__close-btn"
          type="button"
          aria-label="Close"
        ></button>
      </figure>
    </div>
  );
}

export default ImagePopup;
