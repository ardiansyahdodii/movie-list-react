import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import MovieDetail from './pages/MovieDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Error404 from './pages/Error404'
import TvDetail from './pages/TvDetail'

const App = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path='/tv/:id' element={<TvDetail />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App