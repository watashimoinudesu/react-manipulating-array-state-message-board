import { useState } from "react";
import MessageItem from "./MessageItem";

const INITIAL_MESSAGES = [
  {
    id: 1,
    text: "Hello all ! This is first message.",
    createdAt: new Date().toISOString(),
  },
];

function MessageBoard() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputMessage, setInputMessage] = useState("");

  function handleInputChange(event) {
    setInputMessage(event.target.value);
  }

  function handleAddMessage(event) {
    event.preventDefault();

    const trimmedMessage = inputMessage.trim();
    if (!trimmedMessage) return;

    const newMessage = {
      id: Date.now(),
      text: trimmedMessage,
      createdAt: new Date().toISOString(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage("");
  }

  function handleDeleteMessage(idToRemove) {
    setMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== idToRemove)
    );
  }

  return (
    <section className="app-wrapper">
      <header>
        <h1 className="app-title">Message board</h1>
      </header>

      <section className="message-input-container">
        <form onSubmit={handleAddMessage}>
          <label htmlFor="message-text">
            Message
            <input
              id="message-text"
              name="message-text"
              type="text"
              placeholder="Enter message here"
              value={inputMessage}
              onChange={handleInputChange}
            />
          </label>
          <button className="submit-message-button" type="submit">
            Submit
          </button>
        </form>
      </section>

      {messages.length > 0 && (
        <section className="board" aria-label="Message board">
          <ul>
            {messages.map((message) => (
              <li key={message.id}>
                <MessageItem
                  message={message.text}
                  timestamp={message.createdAt}
                  onDelete={() => handleDeleteMessage(message.id)}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
}

export default MessageBoard;
