import React from 'react'
import Blogs from './component/Blogs/Blogs'
import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'
import Searchbar from './component/Searchbar/Searchbar'

function App() {
  return (
    <>
      <Navbar/>
      <Searchbar/>
      <Blogs/>
      <Footer/>
    </>
  )
}

export default App