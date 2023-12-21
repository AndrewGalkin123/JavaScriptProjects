import { TodoItem } from "./TodoItem";
import { ITodo } from "../types/data";

interface ITodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = ({
  items,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          key={todo.id}
          {...todo}
        />
      ))}
    </div>
  );
};

export { TodoList };
