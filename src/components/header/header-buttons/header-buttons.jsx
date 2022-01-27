import { useDispatch, useSelector } from "react-redux";
import { changeFilterAction } from "../../../redux/reducers/todosReducer";

import "./header-buttons.scss";

const headerButtons = [
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

const HeaderBtns = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const onFilterChange = (name) => {
    dispatch(changeFilterAction(name));
  };

  return (
    <div className="header__buttons">
      {headerButtons.map((el) => {
        return (
          <button
            className={
              filter === el.name ? "header__btn active" : "header__btn"
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

export default HeaderBtns;
