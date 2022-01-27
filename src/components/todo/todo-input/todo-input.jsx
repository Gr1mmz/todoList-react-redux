import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAction,
  changeInputAction,
} from "../../../redux/reducers/todosReducer";
import "./todo-input.scss";

const TodoInput = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.inputValue);
  const updateText = (text) => {
    dispatch(changeInputAction(text));
  };
  const addTodo = (text) => {
    if (text) {
      const todo = {
        id: Date.now(),
        text: text,
        isCompleted: false,
      };
      dispatch(addTodoAction(todo));
      updateText("");
    }
  };

  return (
    <div className="todo__input todo-input">
      <input
        className="todo-input__input"
        placeholder="Type your todo"
        value={text}
        onKeyPress={(e) => {
          if (e.key === "Enter") addTodo(text);
        }}
        onChange={(e) => updateText(e.target.value)}></input>
      <button className="todo-input__plus" onClick={() => addTodo(text)}>
        <span>+</span>
      </button>
    </div>
  );
};

export default TodoInput;
