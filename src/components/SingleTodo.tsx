import { Todo } from "../model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  // handle Done
  const handleDone = (id: number, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };

  // handle Delete
  const handleDelete = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <form action="">
      {todo.isDone ? <s>{todo.todo}</s> : <span>{todo.todo}</span>}
      <span>{todo.isDone}</span>
      <div>
        <button>Edit</button>
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
        <button onClick={(e) => handleDone(todo.id, e)}>Complete</button>
      </div>
    </form>
  );
};

export default SingleTodo;
