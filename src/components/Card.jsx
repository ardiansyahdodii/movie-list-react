import { imgURL } from '../api'
// import { Link } from 'react-router-dom'

const Card = (props) => {

    // console.log(props)
    return (
        <div className='max-w-max group transition'>
            <img
                src={`${imgURL}${props.image}`}
                alt=""
                className='h-[200px] md:h-[250px] w-[250px] object-cover rounded-t-xl group-hover:scale-110 transition duration-300'
            />
            <div className='bg-gray-900 text-white p-3 rounded-b-xl max-w-[250px] flex flex-col justify-between min-h-[100px] md:min-h-[120px] max-h-max group-hover:scale-110 transition duration-300'>
                <div className='text-sm md:text-lg font-bold bg-green-500'>
                    {props.title}
                </div>
                <div className='text-xs md:text-sm mt-5'>{props.release}</div>
            </div>
        </div>
    )
}

export default Card