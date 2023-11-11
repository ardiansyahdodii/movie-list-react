import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import { getMovieList, getTvShowList, topRated } from '../api'
import { Link } from 'react-router-dom'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [tvShows, setTvShows] = useState([])
  const [banner, setBanner] = useState([])

  const i = Math.floor(Math.random() * 10)

  useEffect(() => {
    getMovieList()
      .then((result) => {
        setMovies(result)
      })

    getTvShowList()
      .then((result) => {
        setTvShows(result)
      })

    topRated()
      .then((result) => {
        setBanner(result[i])
      })
  }, [])

  // console.log(movies)
  // console.log(tvShows)
  console.log(banner)

  return (
    <div className=''>
      <Hero banner={banner} />
      <div className='m-10'>
        <div className='mt-10'>
          <h1 className='font-bold text-5xl text-white'>
            Trending Movies
          </h1>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10'>
            {movies.map((movie, index) => (
              <Link to={`/movie/${movie.id}`}>
                <Card key={index} title={movie.title} image={movie.poster_path} release={movie.release_date} />
              </Link>
            ))}
          </div>
        </div>

        <div className='mt-10'>
          <h1 className='font-bold text-5xl text-white'>
            Trending TVs
          </h1>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10'>
            {tvShows.map((tvShow, index) => (
              <Link to={`/tv/${tvShow.id}`}>
                <Card key={index} title={tvShow.name} image={tvShow.poster_path} release={tvShow.first_air_date} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home