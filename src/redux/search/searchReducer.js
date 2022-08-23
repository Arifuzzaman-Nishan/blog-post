import { BLOGSEARCH } from "./actionTypes";


const searchReducer = (state="",action) => {
    switch(action.type){
        case BLOGSEARCH:
            return action.payload;
        default:
            return state;
    }
}

export default searchReducer;