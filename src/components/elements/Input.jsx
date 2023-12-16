import { useContext } from 'react'
import { searchContext } from '../../contexts/searchContext'
import { useNavigate } from 'react-router-dom'
import { searchMovie, searchTv } from '../../api'

const Input = () => {

    const {setHasilSearchTv, setHasilSearchMovie, setTextSearch } = useContext(searchContext)
    const navigate = useNavigate()

    const search = async (isi) => {
        console.log(isi)
        if (isi.length >= 3) {
            const query = await searchMovie(isi)
            const query2 = await searchTv(isi)
            console.log("query Movie", query)
            console.log("query Tv", query2)
            navigate('/search')
            setTextSearch(isi)
            setHasilSearchMovie(query)
            setHasilSearchTv(query2)
        }
    }

return (
    <div className='flex justify-center items-center'>
        <input
            className="w-32 md:w-full text-base md:text-xl text-slate-900 placeholder-slate-500 placeholder:text-xs placeholder:md:text-xl shadow-sm pl-3 pr-10 h-6 md:h-14 rounded-md md:rounded-lg bg-stone-300 focus:outline-none"
            type="text"
            placeholder="Search Movie"
            onChange={({ target }) => search(target.value)}
        />
    </div>
)
}

export default Input