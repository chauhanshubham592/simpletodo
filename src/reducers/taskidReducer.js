const taskidReducer = (state = 0, action) => {
  console.log("idreducer");
  switch (action.type) {
    case "ADD_TASKID": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
export default taskidReducer;
