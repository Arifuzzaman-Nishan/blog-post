import React from 'react';
import { useSelector } from 'react-redux';
import Bloglist from '../Bloglist/Bloglist';

export default function Blogs() {
    const blogs = useSelector((state) => state.blogs);
    const searchQuery = useSelector(state => state.searchText);

    const searchFilter = () => {
        return blogs.filter(blog => {
            if(searchQuery === ""){
                return true;
            }else if(blog.title.toLowerCase().includes(searchQuery.toLowerCase())){
                return true;
            }
        })
    }
    
  return (
    <div className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
        <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
                <h2
                    className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
                >
                    ALL BLOGS ARE HERE
                </h2>
                <p
                    className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Ipsa libero labore natus atque, ducimus sed.
                </p>
            </div>

            {/* card grid  */}
            <div className={`mt-12 max-w-lg mx-auto ${searchFilter().length > 0 && "grid gap-5 lg:grid-cols-3 lg:max-w-none"}`}>
                {searchFilter().length > 0 ?(
                    searchFilter()
                        .map(blog => (
                            <Bloglist key={blog.id} blog={blog}/>
                        ))
                ):(
                    <div className='flex justify-center'>
                        <h1>No result found</h1>
                    </div>
                )}
            </div>
            
        </div>
    </div>
  )
}
