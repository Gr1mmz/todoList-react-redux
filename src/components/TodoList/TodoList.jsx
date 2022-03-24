import Input from "./Input/Input";
import Items from "./Items/Items";
import classes from "./TodoList.module.scss";

const TodoList = () => {
  return (
    <div className={classes.todo}>
      <Input />
      <Items />
    </div>
  );
};

export default TodoList;
