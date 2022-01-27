import HeaderBtns from "./header-buttons/header-buttons";
import "./header.scss";

const Header = (props) => {
  return (
    <div className="app__header header">
      <h1 className="header__text">ToDo List React+Redux</h1>
      <HeaderBtns />
    </div>
  );
};

export default Header;
