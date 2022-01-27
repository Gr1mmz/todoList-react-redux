import "./App.scss";
import Header from "./components/header/header.jsx";
import Todo from "./components/todo/todo";
// import { useSelector, useDispatch } from "react-redux";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
