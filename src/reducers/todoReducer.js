const todoReducer = (state = [], action) => {
  console.log("taskreducer");

  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.payload];
    }
    case "EDIT_TODO": {
      const data = state.map((item) => {
        if (Number(item.id) === Number(action.payload.id)) {
          return { ...item, task: action.payload.task };
        }
        return item;
      });
      return data;
    }
    case "STATUS_TODO": {
      const data = state.map((item) => {
        if (Number(item.id) === Number(action.payload)) {
          return { ...item, status: !item.status };
        }
        return item;
      });
      return data;
    }
    case "DELETE_TODO": {
      const data = state.filter((item) => item.id !== action.payload);
      return data;
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;
