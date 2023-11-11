import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import MovieDetail from './pages/MovieDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/detail/:id' element={<MovieDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App