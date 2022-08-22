import { createStore } from "redux";
import blogReducer from "./blogs/blogsReducer";

const store = createStore(blogReducer);

export default store;