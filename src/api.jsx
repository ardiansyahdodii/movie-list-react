import axios from "axios"

export const baseURL = 'https://api.themoviedb.org/3'
const apiKey = '416f4c3e63184c09eb924a672af65100'
export const imgURL = 'https://image.tmdb.org/t/p/w500'

export const getMovieList = async () =>{
    const movie = await axios.get(`${baseURL}/movie/popular?page=1&api_key=${apiKey}`)

    return movie.data.results
    // console.log("Movie List : ", movie.data.results)
}

export const getTvShowList = async () => {
    const tvShow = await axios.get(`${baseURL}/tv/popular?page=1&api_key=${apiKey}`)

    // console.log(tvShow.data.results) 
    return tvShow.data.results
}
export const searchMovie = async (isi) => {
    const searchMovie = await axios.get(`${baseURL}/search/movie?query=${isi}&page=1&api_key=${apiKey}`)
    // console.log(search.data.results) 
    return searchMovie.data.results
}

export const searchTv = async (isi) => {
    // const searchMovie = await axios.get(`${baseURL}/search/movie${isi}?page=1&api_key=${apiKey}`)
    const searchTv = await axios.get(`${baseURL}/search/tv?query=${isi}&page=1&api_key=${apiKey}`)

    // console.log(search.data.results) 
    return searchTv.data.results
}

export const detailMovie = async (id) => {
    const detailMovie = await axios.get(`${baseURL}/movie/${id}?api_key=${apiKey}`)

    // console.log(search.data.results) 
    return detailMovie.data
}

export const detailTv = async (id) => {
    const detailTv = await axios.get(`${baseURL}/tv/${id}?api_key=${apiKey}`)

    // console.log(search.data.results) 
    return detailTv.data
}

export const topRated = async (id) => {
    const topRated = await axios.get(`${baseURL}/movie/top_rated?page=1&api_key=${apiKey}`)

    //console.log(topRated.data.results) 
    return topRated.data.results
}


