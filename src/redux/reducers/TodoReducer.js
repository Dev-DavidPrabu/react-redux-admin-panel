import {
  ADD_TODO,
  GET_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../actions/TodoAction";

const initialState = [
  {
    id: 1,
    task: "Pick up kids from school",
    completed: false,
  },
  {
    id: 2,
    task: "Prepare for presentation",
    completed: true,
  },
];

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO: {
      return [...state];
    }
    case ADD_TODO: {
      const { content } = action.payload;
      return [
        ...state,
        {
          id: state.length + 1,
          task: content,
          completed: false,
        },
      ];
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      let newState = state.map((obj) =>
        obj.id === id ? { ...obj, completed: true } : obj
      );
      return newState;
    }

    case REMOVE_TODO: {
      const { id } = action.payload;
      let newState = state.filter((obj) => obj.id === id);
      return newState;
    }

    default:
      return state;
  }
};

export default TodoReducer;
