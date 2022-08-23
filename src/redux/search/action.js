import { BLOGSEARCH } from "./actionTypes"

export const blogSearch = (text) => {
    return{
        type: BLOGSEARCH,
        payload: text
    }
}