/* eslint-disable react/prop-types */
import { imgURL } from '../api'
import { Link } from 'react-router-dom'

const Hero = ({banner}) => {
    return (
        <div className='flex flex-col justify-center w-full h-[250px] md:h-[650px]'>
            <div className='flex w-full h-full bg-cover'>
                <img
                    src={`${imgURL}${banner.backdrop_path}`}
                    alt=""
                    className='w-full h-full object-fill'
                />
            </div>
            <div className='flex absolute bg-gradient-to-t from-slate-900 to-transparent h-[250px] md:h-[650px] w-full'>
                <div className='flex flex-col justify-center w-[400px] md:w-[860px] text-white px-10'>
                    <div className=' pb-5 font-bold text-base md:text-5xl'>
                        {banner.title}
                    </div>
                    <div className=' pb-5 text-xs md:text-2xl'>
                        {banner.overview}
                    </div>
                    <div className=' text-xs md:text-3xl font-bold'>
                        <span>⭐</span>{banner.vote_average}
                    </div>
                    <Link 
                    className='mt-3 md:mt-5'
                    to={`/movie/${banner.id}`}
                    // onClick={() => getDetailTopRated(banner.id)}
                    >
                        <button className='bg-yellow-500 text-black font-semibold text-xs md:text-xl px-3 md:px-5 py-1 md:py-2 rounded-lg' >
                            See Detail
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero