import React, { useContext, useState } from 'react'
import { searchContext } from '../../contexts/searchContext'
import { useNavigate } from 'react-router-dom'
import { searchMovie, searchTv } from '../../api'

const Input = () => {

    const {setHasilSearchTv, setHasilSearchMovie, setTextSearch } = useContext(searchContext)
    const navigate = useNavigate()

    const search = async (isi) => {
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
    <div className=''>
        <input
            className="w-full text-xl text-slate-900 placeholder-slate-500 shadow-sm pl-3 pr-10 h-14 rounded-lg bg-stone-300 focus:outline-none"
            type="text"
            placeholder="Search Movie"
            onChange={({ target }) => search(target.value)}
        />
    </div>
)
}

export default Input