import PropTypes from "prop-types";

function MessageItem({ message, onDelete }) {
  return (
    <article className="message">
      <h2 className="message-text">{message}</h2>
      <button className="delete-button" type="button" onClick={onDelete}>
        x
      </button>
    </article>
  );
}

MessageItem.propTypes = {
  message: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MessageItem;

