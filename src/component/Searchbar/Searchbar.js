import React from 'react';
import { useDispatch } from 'react-redux';
import searchSvg from '../../assets/search.svg';
import { blogSearch } from '../../redux/search/action';

export default function Searchbar() {

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(blogSearch(e.target.value)); 
  }

  const debouncer = (fn,delay) => {
    let clearSetTimeout = null;
    return (...args) => {
      if(clearSetTimeout){
        clearTimeout(clearSetTimeout);
      }
      clearSetTimeout = setTimeout(() => {
        fn(...args);
      },delay)
    }
  }

  return (
    <div
        className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
    >
        <input
            className="outline-none border-none bg-gray-50 h-full w-full mr-2"
            type="search"
            name="search"
            placeholder="Search"
            onChange={debouncer(handleOnChange,1000)}
        />
        <img
            className="inline h-6 cursor-pointer"
            src={searchSvg}
            alt="Search"
        />
    </div>
  )
}
