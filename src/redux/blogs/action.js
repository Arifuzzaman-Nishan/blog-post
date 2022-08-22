import { AUTHOR, CATEGORY } from "./actionTypes"

export const category = (tagName) => {
    return{
        type: CATEGORY,
        payload: tagName
    }
}

export const author = (authorName) => {
    return{
        type: AUTHOR,
        payload: authorName
    }
}