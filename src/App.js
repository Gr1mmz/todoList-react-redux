import "./styles/App.scss";
import Header from "./components/Header/Header.jsx";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
