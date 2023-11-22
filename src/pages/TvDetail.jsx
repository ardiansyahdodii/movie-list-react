import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { detailTv, imgURL } from '../api'

const TvDetail = () => {

    const { id } = useParams()
    const [detail, setDetail] = useState([])

    useEffect(() => {
        detailTv(id)
            .then((result) => {
                setDetail(result)
            })
    }, [id])

    // console.log(detail)

    // console.log(detail.name)
    return (
        <div className='text-white'>
            <div className='h-[225px] md:h-[465px] bg-slate-600'>
                <img src={`${imgURL}${detail.backdrop_path}`} alt="" className='h-full w-full object-cover object-top' />
            </div>
            <div className='mx-10 my-5 md:m-10'>
                <div className='relative'>
                    <div className='absolute w-[110px] h-[150px] md:w-[205px] md:h-[308px] -bottom-14 md:-bottom-28'>
                        <img src={`${imgURL}${detail.poster_path}`} alt="" className='h-full w-full object-cover rounded-xl' />
                    </div>
                </div>
                <div className='ms-[120px] md:ms-[250px]'>
                    <div className='font-bold text-xl md:text-4xl'>
                        {detail.name} ({detail.first_air_date})
                    </div>
                    <div className='flex justify-start items-center mt-3 md:mt-10 flex-wrap'>
                        <div className='font-semibold text:lg md:text-3xl'>⭐ {parseFloat(detail.vote_average).toFixed(1)}</div>
                        <button className='text-black font-medium text-sm md:text-lg bg-yellow-500 py-1 px-2 mx-2 md:mx-12 rounded-lg'>
                            Play Trailer
                        </button>
                    </div>
                </div>
                <div className='mt-[80px] w-full md:w-2/3'>
                    <div className='font-semibold text-xl md:text-3xl'>
                        Overview
                    </div>
                    <div className='text-base md:text-xl mt-5'>
                        {detail.overview}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TvDetail