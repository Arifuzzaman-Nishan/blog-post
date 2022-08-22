import React from 'react';
import { useDispatch } from 'react-redux';
import { author, category } from '../../redux/blogs/action';

export default function Bloglist({blog}) {

    const dispatch = useDispatch();

    const {img,tagName,title,authorName,authorImg,postDate,readingTime} = blog;

    const filterByCategory = (tag) => {
        dispatch(category(tag));
    }

    const filterByAuthor = (name) => {
        dispatch(author(name));
    }

  return (
        <div
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
            <div className="flex-shrink-0">
                <img
                    className="h-48 w-full object-cover"
                    src={img}
                    alt=""
                />
            </div>

            <div
                className="flex-1 bg-white p-6 flex flex-col justify-between"
            >
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600 cursor-pointer" onClick={() => filterByCategory(tagName)}>
                        <span
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                        >
                            {tagName}
                        </span>
                    </p>
                    <a href="/" className="block mt-1">
                        <p
                            className="text-xl font-semibold text-gray-900"
                        >
                            {title}
                        </p>
                    </a>
                </div>

                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0 cursor-pointer"
                    onClick={() => filterByAuthor(authorName)}
                    >
                        <img
                            className="h-10 w-10 rounded-full"
                            src={authorImg}
                            alt=""
                        />
                    </div>
                    <div className="ml-3">
                        <p
                            className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
                            onClick={() => filterByAuthor(authorName)}
                        >
                            {authorName}
                        </p>
                        <div
                            className="flex space-x-1 text-sm text-gray-500"
                        >
                            <time dateTime="2020-03-16">
                                {postDate}
                            </time>
                            <span aria-hidden="true">
                                &middot;
                            </span>
                            <span> {readingTime} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
