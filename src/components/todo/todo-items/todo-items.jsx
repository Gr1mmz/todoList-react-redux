import { useDispatch, useSelector } from "react-redux";
import {
  completeTodoAction,
  removeTodoAction,
} from "../../../redux/reducers/todosReducer";

import "./todo-items.scss";

const TodoItems = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);

  const filteredTodos = (todos, filter) => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.isCompleted);
      case "completed":
        return todos.filter((todo) => todo.isCompleted);
      default:
        return todos;
    }
  };
  const removeTodo = (id) => {
    dispatch(removeTodoAction(id));
  };
  const completeTodo = (id) => {
    dispatch(completeTodoAction(id));
  };
  return (
    <div className="todo__items todo-items">
      {filteredTodos(todoItems, filter).map(({ id, text, isCompleted }) => {
        return (
          <div
            className={
              isCompleted
                ? "todo-items__item todo-item completed"
                : "todo-items__item todo-item"
            }
            key={id}>
            <button
              className="todo-item__check"
              onClick={() => completeTodo(id)}>
              <i
                className={
                  isCompleted ? "far fa-check-circle" : "far fa-circle"
                }
              />
            </button>
            <div className="todo-item__text">{text}</div>
            <button
              className="todo-item__delete"
              onClick={() => removeTodo(id)}>
              <i className="fas fa-times" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItems;
