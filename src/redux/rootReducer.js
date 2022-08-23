import { combineReducers } from "redux";
import blogReducer from "./blogs/blogsReducer";
import searchReducer from "./search/searchReducer";

const rootReducer = combineReducers({
    blogs: blogReducer,
    searchText: searchReducer
})

export default rootReducer;