import { useDispatch, useSelector } from "react-redux";
import {addTodoAction, changeInputAction,} from "../../../redux/reducers/todosReducer";
import classes from "./Input.module.scss";

const Input = () => {
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

  const onKeyPressHandler = (e) => {
    if (e.key === "Enter") addTodo(text);
  };

  return (
    <div className={classes.wrapper}>
      <input
        className={classes.input}
        placeholder="Type your todo"
        value={text}
        onKeyPress={(e) => onKeyPressHandler(e)}
        onChange={(e) => updateText(e.target.value)}/>
      <button className={classes.plus} onClick={() => addTodo(text)}>
        <span>+</span>
      </button>
    </div>
  );
};

export default Input;
