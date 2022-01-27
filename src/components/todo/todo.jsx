import TodoInput from "./todo-input/todo-input";
import TodoItems from "./todo-items/todo-items";
import "./todo.scss";

const Todo = () => {
  return (
    <div className="app__todo todo">
      <TodoInput />
      <TodoItems />
    </div>
  );
};

export default Todo;
