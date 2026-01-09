import React from "react";

function MessageBoard() {
  const [messages, setMessages] = React.useState([]);
  const [inputMessages, setInputMessages] = React.useState("");

  function handleSubmit() {
    setMessages([...messages, inputMessages]);
    setInputMessages("");
  }

  function removeMessage(index) {
    setMessages(messages.filter((message, i) => i !== index));
    setInputMessages("");
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputMessages}
            onChange={(e) => setInputMessages(e.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={handleSubmit}>Submit</button>
      </div>
      <div class="board">
        {messages.map((message, index) => (
          <div className="message" key={index}>
            <h1>{message}</h1>
            <button className="delete-button" onClick={() => removeMessage(index)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
