import { useDispatch, useSelector } from "react-redux";
import {
  completeTodoAction,
  removeTodoAction,
} from "../../../redux/reducers/todosReducer";

import classes from "./Items.module.scss";

const Items = () => {
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
    <div className={classes.items}>
      {filteredTodos(todoItems, filter).map(({ id, text, isCompleted }) => {
        return (
          <div
            className={
              isCompleted
                ? `${classes.item} ${classes.completed}`
                : `${classes.item}`
            }
            key={id}>
            <button
              className={classes.check}
              onClick={() => completeTodo(id)}>
              <i
                className={
                  isCompleted ? "far fa-check-circle" : "far fa-circle"
                }
              />
            </button>
            <div className={classes.text}>{text}</div>
            <button
              className={classes.delete}
              onClick={() => removeTodo(id)}>
              <i className="fas fa-times" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
