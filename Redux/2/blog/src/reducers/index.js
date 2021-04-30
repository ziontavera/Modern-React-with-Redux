import { combineReducers } from "redux";
import postReducer from "./postReducer";
import usersReducer from "./usersReducer";

//combination of reducers
export default combineReducers({
  posts: postReducer,
  users: usersReducer,
});
