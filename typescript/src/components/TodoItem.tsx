import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {}

const TodoItem: React.FC<ITodoItem> = ({ id, title, complete }) => {
  return <div>
    <input type="checkbox" checked={complete}/>
    {title}
    <button>x</button>
  </div>;
};

export { TodoItem };
