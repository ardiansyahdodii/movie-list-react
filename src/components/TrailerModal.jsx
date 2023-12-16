import { useEffect, useState } from "react"
// import ReactPlayer from 'react-player/youtube'
import YouTube from 'react-youtube'
import { movieTrailer } from '../api'

const TrailerModal = (props) => {

    const [trailers, setTrailers] = useState([])

    useEffect(() => {
        if (props.id) {
            movieTrailer(props.id)
                .then((result) => {
                    setTrailers(result)
                })
        }
    }, [])

    const hasil = trailers.filter(trailer => trailer.type === "Trailer").map((trailer) => trailer.key)

    return (
        <div className="m-5">
            <YouTube videoId={hasil[0]} className="w-full h-full"/>
            {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${hasil[0]}`} /> */}
        </div>
    )
}

export default TrailerModal