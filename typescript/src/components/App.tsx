import { useState, useEffect, useRef } from "react";
import { ITodo } from "../types/data";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, { 
        id: Date.now(),
        title: value;
        complete: false;
    }])
  }

  return (
    <div>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
};

export { App };
