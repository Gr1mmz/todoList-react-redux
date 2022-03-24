import { useDispatch, useSelector } from "react-redux";
import { changeFilterAction } from "../../../redux/reducers/todosReducer";

import classes from "./Filter.module.scss";

const filterBtns = [
  {
    name: "all",
    text: "All",
  },
  {
    name: "active",
    text: "Active",
  },
  {
    name: "completed",
    text: "Completed",
  },
];

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const onFilterChange = (name) => {
    dispatch(changeFilterAction(name));
  };

  return (
    <div className={classes.filter}>
      {filterBtns.map((el) => {
        return (
          <button
            className={
              filter === el.name
                  ? `${classes.btn} ${classes.active}`
                  : `${classes.btn}`
            }
            onClick={() => {
              onFilterChange(el.name);
            }}
            key={el.name}>
            {el.text}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
