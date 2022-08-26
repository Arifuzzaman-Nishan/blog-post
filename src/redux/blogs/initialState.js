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
        img:"//upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/121px-Node.js_logo.svg.png",
        tagName:"Nodejs",
        title:"Basic Node js",
        authorName:"Moez Mustafa",
        authorImg:"https://miro.medium.com/fit/c/30/30/1*t6K1Kykzdi3SHwUh25N3yg.jpeg",
        postDate: "Aug 20",
        readingTime:"9 min read"
    },
    {
        id: 3,
        img:"https://miro.medium.com/fit/c/140/140/1*CyYFCMKbyDdfCCaC2dlWSg.jpeg",
        tagName:"Entrepreneurship",
        title:"When a Little Startup Success Becomes a Big Problem",
        authorName:"Moez Mustafa",
        authorImg:"https://miro.medium.com/fit/c/30/30/1*t6K1Kykzdi3SHwUh25N3yg.jpeg",
        postDate: "Aug 16",
        readingTime:"11 min read"
    },
    {
        id: 4,
        img:"https://miro.medium.com/fit/c/140/140/1*srAYmmJtaSkxfF_3Wmcs2Q.png",
        tagName:"Programming",
        title:"Religions, please migrate your Holy texts to JSON",
        authorName:"Moez Mustafa",
        authorImg:"https://miro.medium.com/fit/c/30/30/1*t6K1Kykzdi3SHwUh25N3yg.jpeg",
        postDate: "Aug 14",
        readingTime:"17 min read"
    },
    {
        id: 5,
        img:"https://miro.medium.com/fit/c/250/168/1*bGgPl4h8Y7p5C5Sg0IZfpw.jpeg",
        tagName:"Entrepreneurship",
        title:"I Asked 167 Successful Entrepreneurs How to Start a Business",
        authorName:"Toni Koraza",
        authorImg:"https://miro.medium.com/fit/c/25/25/1*Xt8-8wsEytgs1gyhWrA3Kw.jpeg",
        postDate: "Aug 16",
        readingTime:"14 min read"
    },
    {
        id: 6,
        img:"https://miro.medium.com/fit/c/140/140/0*3fLLMxN8gXjW7973",
        tagName:"Reactjs",
        title:"“JSX in React” : This is how it works",
        authorName:"Toni Koraza",
        authorImg:"https://miro.medium.com/fit/c/25/25/1*Xt8-8wsEytgs1gyhWrA3Kw.jpeg",
        postDate: "Aug 06",
        readingTime:"21 min read"
    },
    {
        id: 7,
        img:"https://miro.medium.com/fit/c/140/140/1*9wyRgOEBIasWrKSFjwTQMQ.jpeg",
        tagName:"Nodejs",
        title:"Writing neat asynchronous Node JS code with Promises",
        authorName:"Toni Koraza",
        authorImg:"https://miro.medium.com/fit/c/25/25/1*Xt8-8wsEytgs1gyhWrA3Kw.jpeg",
        postDate: "Aug 04",
        readingTime:"19 min read"
    },
    {
        id: 8,
        img:"https://miro.medium.com/fit/c/140/140/1*gEq_Om0oEILtB31526pCxw.png",
        tagName:"Programming",
        title:"How To Avoid Use Cases Boilerplate in Android",
        authorName:"Toni Koraza",
        authorImg:"https://miro.medium.com/fit/c/25/25/1*Xt8-8wsEytgs1gyhWrA3Kw.jpeg",
        postDate: "Aug 07",
        readingTime:"17 min read"
    },
    {
        id: 9,
        img:"https://miro.medium.com/fit/c/250/168/1*FBGetlrhusKH2xRaseYMeg.jpeg",
        tagName:"Programming",
        title:"Can machines learn how to behave?",
        authorName:"B Kean",
        authorImg:"https://miro.medium.com/fit/c/25/25/0*bAi-GVxew3EHlil-.png",
        postDate: "Aug 15",
        readingTime:"14 min read"
    },
    {
        id: 10,
        img:"https://miro.medium.com/fit/c/140/140/1*wb2sQt6Brc2N76J2wulV3w.png",
        tagName:"Entrepreneurship",
        title:"The ESG Term Sheet",
        authorName:"B Kean",
        authorImg:"https://miro.medium.com/fit/c/25/25/0*bAi-GVxew3EHlil-.png",
        postDate: "Aug 07",
        readingTime:"13 min read"
    },
    {
        id: 11,
        img:"https://miro.medium.com/fit/c/140/140/1*9DC9D2CILYEDLc-kpS0p8w.png",
        tagName:"Reactjs",
        title:"Use what Effect ?",
        authorName:"B Kean",
        authorImg:"https://miro.medium.com/fit/c/25/25/0*bAi-GVxew3EHlil-.png",
        postDate: "Aug 26",
        readingTime:"09 min read"
    },
    {
        id: 12,
        img:"https://miro.medium.com/max/875/1*B7JJcmwsqTbtLj4g9h76PQ.png",
        tagName:"Nodejs",
        title:"Introduction to Node.js",
        authorName:"B Kean",
        authorImg:"https://miro.medium.com/fit/c/25/25/0*bAi-GVxew3EHlil-.png",
        postDate: "Aug 07",
        readingTime:"11 min read"
    },
    {
        id: 13,
        img:"https://miro.medium.com/fit/c/250/168/0*_yhgFEnVBLpb89MC",
        tagName:"Entrepreneurship",
        title:"The 5 Most Important Lessons I Learned From 2 Years of Weekly Podcasting",
        authorName:"Aaron Dinin",
        authorImg:"https://miro.medium.com/fit/c/25/25/1*pKOfOAOvx-fWzfITATgGRg.jpeg",
        postDate: "Aug 24",
        readingTime:"14 min read"
    },
    {
        id: 14,
        img:"https://miro.medium.com/fit/c/140/140/1*cfHgEHsi8Xj4n8LGQXNQcQ.png",
        tagName:"Reactjs",
        title:"Rapidly create reusable React components in one line",
        authorName:"Aaron Dinin",
        authorImg:"https://miro.medium.com/fit/c/25/25/1*pKOfOAOvx-fWzfITATgGRg.jpeg",
        postDate: "Aug 01",
        readingTime:"17 min read"
    },
    {
        id: 15,
        img:"https://miro.medium.com/max/875/1*XCaM3Nxi7Jn-_IaEGnCq_A.png",
        tagName:"Nodejs",
        title:"Medium API: Get Posts Using Node.js",
        authorName:"Aaron Dinin",
        authorImg:"https://miro.medium.com/fit/c/25/25/1*pKOfOAOvx-fWzfITATgGRg.jpeg",
        postDate: "Aug 18",
        readingTime:"20 min read"
    },
    {
        id: 16,
        img:"https://miro.medium.com/fit/c/140/140/1*_k4B1gbtNLN83n68dE-exw.png",
        tagName:"Programming",
        title:"Most Software Developers Fail the Yellow Cat Test",
        authorName:"Aaron Dinin",
        authorImg:"https://miro.medium.com/fit/c/25/25/1*pKOfOAOvx-fWzfITATgGRg.jpeg",
        postDate: "Aug 18",
        readingTime:"17 min read"
    },
    {
        id: 17,
        img:"https://miro.medium.com/fit/c/140/140/1*KQI4x1Tc1fxt1Db_7KoQvw.png",
        tagName:"Reactjs",
        title:"Introduction to JavaScript and React.js",
        authorName:"Clive Thompson",
        authorImg:"https://miro.medium.com/fit/c/25/25/1*C6KlQUX7cSZiV7VlS12Vyw.jpeg",
        postDate: "Aug 14",
        readingTime:"12 min read"
    },
    {
        id: 18,
        img:"https://miro.medium.com/fit/c/140/140/1*-igaI4IhZkeNWhESz1D9sw.png",
        tagName:"Nodejs",
        title:"Renaming N-API to Node-API",
        authorName:"Clive Thompson",
        authorImg:"https://miro.medium.com/fit/c/25/25/1*C6KlQUX7cSZiV7VlS12Vyw.jpeg",
        postDate: "Aug 09",
        readingTime:"11 min read"
    },
    {
        id: 19,
        img:"https://miro.medium.com/fit/c/140/140/1*Qbfv1E6fNZmyad9Ey5BHxA.jpeg",
        tagName:"Entrepreneurship",
        title:"How we plan to survive the VC Deep Freeze",
        authorName:"Clive Thompson",
        authorImg:"https://miro.medium.com/fit/c/25/25/1*C6KlQUX7cSZiV7VlS12Vyw.jpeg",
        postDate: "Aug 23",
        readingTime:"10 min read"
    },
    {
        id: 20,
        img:"https://miro.medium.com/fit/c/140/140/1*dAOBOaiGmR19VDLNvHNwJw.jpeg",
        tagName:"Programming",
        title:"The Best SQL Template for Customer Lifetime Value",
        authorName:"Clive Thompson",
        authorImg:"https://miro.medium.com/fit/c/25/25/1*C6KlQUX7cSZiV7VlS12Vyw.jpeg",
        postDate: "Aug 15",
        readingTime:"14 min read"
    },
]

export default initialState;