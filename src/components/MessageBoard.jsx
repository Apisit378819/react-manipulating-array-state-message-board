import { useState } from "react";
function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const addMessage = (event) => {
    event.preventDefault();
    const newMessage = {
      id: message.length + 1,
      message: inputMessage,
    };
    setMessage([...message, newMessage]);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <form class="message-input-container" onSubmit={addMessage}>
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputMessage}
            onChange={(event) => setInputMessage(event.target.value)}
          />
        </label>
        <button className="submit-message-button" type="submit">
          Submit
        </button>
      </form>
      <div class="board">
          {message.map((message) => (
            <div key={message.id} className="message">
              <div>{message.message}</div>
              <button className="delete-button">x</button>
            </div>
          ))}        
      </div>
    </div>
  );
}

export default MessageBoard;
