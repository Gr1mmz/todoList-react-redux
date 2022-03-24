import Filter from "./Filter/Filter";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.text}>ToDo List React+Redux</h1>
      <Filter />
    </div>
  );
};

export default Header;
