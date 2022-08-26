import { AUTHOR, CATEGORY } from "./actionTypes";
import initialState from "./initialState";


const blogReducer = (state=initialState,action) => {
    switch(action.type){
        case CATEGORY:
            return state.filter(blog => blog.tagName === action.payload);
        case AUTHOR:
            return state.filter(blog => blog.authorName === action.payload);
        default:
            return state;
    }
}

export default blogReducer;