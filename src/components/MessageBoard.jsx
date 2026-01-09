import { useState } from "react";

function MessageBoard() {
  const [messages, setMessages] = useState([
    "Hello all ! This is first message.",
  ]);
  const [inputMessage,setInputMessage]=useState('');

  function addText(e){
    setInputMessage(e.target.value);
  }

  function addMessage(){
    if(inputMessage.length===0)return;
    setMessages([...messages,inputMessage]);
    setInputMessage('');
  }

  function deleteMessage(index) {
    const newMessage = [...messages];
    newMessage.splice(index, 1);
    setMessages(newMessage);
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
            value={inputMessage}
            onChange={addText}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>Submit</button>
      </div>
      {messages.length > 0 && (
        <div className="board">
          {messages.map((message, index) => (
            <div className="message">
              <h1 key={index}>{message}</h1>
              <button
                className="delete-button"
                onClick={() => deleteMessage(index)}
              >
                x
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MessageBoard;
