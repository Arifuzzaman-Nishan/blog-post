import { AUTHOR, CATEGORY } from "./actionTypes";

const initialState = [
    {
        id: 1,
        img:"https://miro.medium.com/fit/c/140/140/1*OaDQFqgMfOkD4xxgaZ9HeA.png",
        tagName:"Reactjs",
        title:"React-Bricks , Create a site in 20min",
        authorName:"Moez Mustafa",
        authorImg:"https://miro.medium.com/fit/c/30/30/1*t6K1Kykzdi3SHwUh25N3yg.jpeg",
        postDate: "Aug 14",
        readingTime:"5 min read"
    },
    {
        id: 2,
        img:"https://miro.medium.com/fit/c/250/168/1*bGgPl4h8Y7p5C5Sg0IZfpw.jpeg",
        tagName:"Entrepreneurship",
        title:"I Asked 167 Successful Entrepreneurs How to Start a Business",
        authorName:"Toni Koraza",
        authorImg:"https://miro.medium.com/fit/c/25/25/1*Xt8-8wsEytgs1gyhWrA3Kw.jpeg",
        postDate: "Aug 16",
        readingTime:"14 min read"
    },
    {
        id: 3,
        img:"//upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/121px-Node.js_logo.svg.png",
        tagName:"Node js",
        title:"Basic Node js",
        authorName:"Moez Mustafa",
        authorImg:"https://miro.medium.com/fit/c/30/30/1*t6K1Kykzdi3SHwUh25N3yg.jpeg",
        postDate: "Aug 20",
        readingTime:"10 min read"
    },
    {
        id: 4,
        img:"https://miro.medium.com/fit/c/140/140/1*brAQm0RZYljlPLYScsDY8w.jpeg",
        tagName:"Entrepreneurship",
        title:"The Lazy Myth of Startup Failure",
        authorName:"Toni Koraza",
        authorImg:"https://miro.medium.com/fit/c/25/25/1*Xt8-8wsEytgs1gyhWrA3Kw.jpeg",
        postDate: "Aug 05",
        readingTime:"20 min read"
    },
]

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