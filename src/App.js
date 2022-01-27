import "./styles/App.scss";
import Header from "./components/header/header.jsx";
import Todo from "./components/todo/todo";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
