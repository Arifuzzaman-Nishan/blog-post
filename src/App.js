import React from 'react'
import { Provider } from 'react-redux'
import Blogs from './component/Blogs/Blogs'
import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'
import Searchbar from './component/Searchbar/Searchbar'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Navbar/>
      <Searchbar/>
      <Blogs/>
      <Footer/>
    </Provider>
  )
}

export default App