import { useState } from 'react';

function MessageBoard() {

  const [text, setText] = useState([]);
  const [message, setMessage] = useState('');

  const addNewText = (event) => {
    const newText = [...text]
    newText.push(message)
    setText(newText)
  }
  const handleNewMessage = (event) => {
    setMessage(event.target.value)
  }
  const deletetext = (textIndex) =>{
    const newText = [...text]
    newText.splice(textIndex,1)
    setText(newText)
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
            onChange={handleNewMessage}
          />
        </label>
        <button className="submit-message-button" onClick={addNewText}>Submit</button>
      </div>
      <div class="board">
        <div className="message">

          <ul>
	        {text.map((text, index) => (
	          <li key={index}>{text}
            <button onClick ={() =>{
              deletetext(index)
            }}>
		          X
		        </button>
            </li>
	        ))}
	      </ul>
        </div>
      </div>
    </div>
  );
}

export default MessageBoard;
