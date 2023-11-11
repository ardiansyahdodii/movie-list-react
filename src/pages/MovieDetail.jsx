import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { detailMovie, imgURL } from '../api'

const MovieDetail = () => {

  const { id } = useParams()
  const [detail, setDetail] = useState([])

  useEffect(() => {
    detailMovie(id)
      .then((result) => {
        setDetail(result)
      })
  }, [id])

  console.log(detail)

  return (
    <div className='text-white'>
      <div className='h-[465px] bg-slate-600'>
        <img src={`${imgURL}${detail.backdrop_path}`} alt="" className='h-full w-full object-cover object-top' />
      </div>
      <div className='m-10'>
        <div className='relative'>
          <div className='absolute w-[205px] h-[308px]  -bottom-5'>
            <img src={`${imgURL}${detail.poster_path}`} alt="" className='h-full w-full object-cover rounded-xl' />
          </div>
          <div className='ms-[250px]'>
            <div className='font-bold text-4xl'>
              {detail.title} ({detail.release_date})
            </div>
            <div className='flex justify-start items-center mt-10 '>
              <div className='font-semibold text-3xl'>⭐{detail.vote_average}</div>
              <button className='text-black font-medium text-lg bg-yellow-500 py-1 px-4 mx-12 rounded-lg'>
                Play Trailer
              </button>
            </div>
          </div>
        </div>
        <div className='mt-[80px] w-2/3'>
          <div className='font-semibold text-3xl'>
            Overview
          </div>
          <div className='text-xl mt-5'>
            {detail.overview}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail