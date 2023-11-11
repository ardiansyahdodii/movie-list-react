import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { searchMovie, searchTv } from "../api";


export const searchContext = createContext()

const SearchProvider = ({children}) => {

    const [hasilSearchMovie, setHasilSearchMovie] = useState([])
    const [hasilSearchTv, setHasilSearchTv] = useState([])
    const [textSearch, setTextSearch] = useState('')

    return(
        <searchContext.Provider value={{hasilSearchMovie, setHasilSearchMovie, textSearch, setTextSearch, hasilSearchTv, setHasilSearchTv}}>
            {children}
        </searchContext.Provider>
    )
}

export default SearchProvider