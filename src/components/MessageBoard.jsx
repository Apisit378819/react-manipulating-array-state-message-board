import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [inputText, setInputText] = useState("");
  const addMessage = (event) => {
    event.preventDefault();
    setMessage([...message, inputText]);
  };

  const deleteMessage = (item) => {
    setMessage([...message].filter((x) => x !== item));
  };

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
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div class="board">
        {message.map((item, index) => {
          return (
            <div className="message" key={index}>
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => deleteMessage(item)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
