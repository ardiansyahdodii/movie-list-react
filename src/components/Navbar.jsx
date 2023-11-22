import { PiFilmSlate } from 'react-icons/pi'
import { FiSearch } from 'react-icons/fi'
import Input from './elements/Input'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex justify-center items-center w-full h-14 md:h-24 px-10 bg-slate-800'>
            <div className='flex justify-between items-center w-full'>
                <Link
                to={'/'}
                className='flex justify-center items-center h-14'>
                    <div>
                        <PiFilmSlate className='text-white text-2xl md:text-5xl' />
                    </div>
                    <div className='text-white text-lg md:text-3xl font-bold p-2'>
                        DooMov
                    </div>   
                </Link>
                <div className='flex justify-center items-center bg-stone-300 rounded-lg h-full'>
                {/* <input class=" focus:outline-none appearance-none w-full text-sm text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 shadow-sm" type="text" /> */}
                    <Input />
                    <div className='mx-2 absolute right-10 h-14 flex items-center'>
                        <FiSearch className='text-lg md:text-3xl'/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar