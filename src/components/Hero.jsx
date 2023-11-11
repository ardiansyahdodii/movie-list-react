import React from 'react'
import { imgURL } from '../api'
// import contoh from '../assets/img/Kingsman2.jpg'
// import contoh2 from '../assets/img/Toy-Story.jpg'

const Hero = ({banner}) => {
    return (
        <div className='flex flex-col justify-center w-full h-[650px]'>
            <div className='flex w-full h-full bg-cover'>
                <img
                    src={`${imgURL}${banner.backdrop_path}`}
                    alt=""
                    className='w-full h-full object-fill'
                />
            </div>
            <div className='flex absolute bg-gradient-to-t from-slate-900 to-transparent h-[650px] w-full'>
                <div className='flex flex-col justify-center w-[860px] text-white px-10'>
                    <div className=' pb-5 font-bold text-5xl'>
                        {banner.title}
                    </div>
                    <div className=' pb-5 text-2xl'>
                        {banner.overview}
                    </div>
                    <div className=' text-3xl font-bold'>
                        <span>⭐</span>{banner.vote_average}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero