import todoReducer from "./todoReducer";
import taskidReducer from "./taskidReducer";
import { combineReducers } from "redux";

export default combineReducers({
  task: todoReducer,
  taskid: taskidReducer,
});
