import React from 'react'
import { PiFilmSlate } from 'react-icons/pi'

const Footer = () => {
    return (
        <footer className=''>
            <div className='px-10 py-20'>
                <div className='flex justify-start items-center'>
                    <div>
                        <PiFilmSlate className='text-white text-5xl' />
                    </div>
                    <div className='text-white text-2xl font-bold'>
                        DooMov
                    </div>
                    <div className='text-white text-2xl p-2'>
                        ©️ 2023
                    </div>
                </div>
                <div className='text-white text-xl p-1 mt-8'>
                    Powered by TMDB
                </div>
            </div>
        </footer>
    )
}

export default Footer