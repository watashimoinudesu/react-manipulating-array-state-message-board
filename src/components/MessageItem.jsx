import PropTypes from "prop-types";

function MessageItem({ message, timestamp, onDelete }) {
  return (
    <article className="message">
      <h2 className="message-text">{message}</h2>
      <p className="message-timestamp">
        {new Date(timestamp).toLocaleTimeString()}
      </p>
      <button className="delete-button" type="button" onClick={onDelete}>
        x
      </button>
    </article>
  );
}

MessageItem.propTypes = {
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MessageItem;

