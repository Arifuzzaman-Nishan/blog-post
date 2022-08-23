import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import searchSvg from '../../assets/search.svg';
import { blogSearch } from '../../redux/search/action';

export default function Searchbar() {

  const dispatch = useDispatch();
  const searchText = useSelector(state => state.searchText);

  return (
    <div
        className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
    >
        <input
            className="outline-none border-none bg-gray-50 h-full w-full mr-2"
            type="search"
            name="search"
            placeholder="Search"
            // value={searchText}
            onChange={(e) => dispatch(blogSearch(e.target.value))}
        />
        <img
            className="inline h-6 cursor-pointer"
            src={searchSvg}
            alt="Search"
        />
    </div>
  )
}
