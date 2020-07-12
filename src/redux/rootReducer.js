import { combineReducers } from "redux";
import { postsPeducer } from "./postsPeducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  posts: postsPeducer,
  app: appReducer,
});
