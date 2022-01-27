const defaultState = {
  todos: [
    {
      id: 1,
      text: "Learn HTML",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Learn CSS",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Learn JS",
      isCompleted: true,
    },
    {
      id: 4,
      text: "Learn React",
      isCompleted: false,
    },
  ],
  inputValue: "",
  filter: "all",
};

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const CHANGE_INPUT = "CHANGE_INPUT";
const CHANGE_FILTER = "CHANGE_FILTER";

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.todo] };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            todo.isCompleted = !todo.isCompleted;
          }
          return todo;
        }),
      };
    case CHANGE_INPUT:
      return { ...state, inputValue: action.text };
    case CHANGE_FILTER:
      return { ...state, filter: action.name };
    default:
      return state;
  }
};

export const addTodoAction = (todo) => ({ type: ADD_TODO, todo });
export const removeTodoAction = (id) => ({ type: REMOVE_TODO, id });
export const completeTodoAction = (id) => ({ type: COMPLETE_TODO, id });
export const changeInputAction = (text) => ({ type: CHANGE_INPUT, text });
export const changeFilterAction = (name) => ({ type: CHANGE_FILTER, name });

export default rootReducer;
