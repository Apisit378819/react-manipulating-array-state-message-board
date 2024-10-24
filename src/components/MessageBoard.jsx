import { useState } from "react";

function MessageBoard() {
  const [messageTodo, setMessageTodo] = useState([]);
  const [textTodo, setTextTodo] = useState("");

  console.log(textTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newMess = {
      id: messageTodo.length + 1,
      message: textTodo,
    };
    setMessageTodo([...messageTodo, newMess]);
    setTextTodo("");
  };

  const deleteTodo = (index) => {
    const updataMess = messageTodo.filter((mess) => mess.id !== index);
    setMessageTodo(updataMess);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(e) => setTextTodo(e.target.value)}
            value={textTodo}
          />
        </label>
        <button className="submit-message-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div className="board">
        {messageTodo.map((todo) => (
          <div className="message" key={todo.id}>
            <h1>{todo.message}</h1>
            <button
              className="delete-button"
              onClick={() => deleteTodo(todo.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
