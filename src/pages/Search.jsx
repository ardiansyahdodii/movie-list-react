import React, { useContext} from 'react'
import Card from '../components/Card'
import { searchContext } from '../contexts/searchContext'

function Search() {

  const {hasilSearchMovie, hasilSearchTv, textSearch} = useContext(searchContext)

  return (
    <div className='m-10'>
      <h1 className='font-bold text-5xl text-white'>
        Hasil Pencarian {'>'} {textSearch}
      </h1>
      <div className='text-white mt-10 text-3xl font-semibold'>
        Movie
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10'>
      {hasilSearchMovie.map((movie, index) => (
              <Card key={index} title={movie.title} image={movie.poster_path} release={movie.release_date} id={movie.id} />
            ))}
      </div>

      <div className='text-white mt-10 text-3xl font-semibold'>
        TV
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10'>
      {hasilSearchTv.map((tvShow, index) => (
              <Card key={index} title={tvShow.name} image={tvShow.poster_path} release={tvShow.first_air_date} id={tvShow.id} />
            ))}
      </div>
    </div>
  )
}

export default Search