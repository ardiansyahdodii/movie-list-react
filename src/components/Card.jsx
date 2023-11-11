import React from 'react'
import { imgURL } from '../api'
import { Link } from 'react-router-dom'

const Card = (props) => {

    //console.log("Movie : ", props.title)
    return (
        <Link 
        className='max-w-max group transition'
        to={`/detail/${props.id}`}
        >
            <img
                src={`${imgURL}${props.image}`}
                alt=""
                className='h-[250px] w-[250px] object-cover rounded-t-xl group-hover:scale-110 transition duration-300'
            />
            <div className='bg-gray-900 text-white p-3 rounded-b-xl max-w-[250px] flex flex-col justify-between min-h-[120px] max-h-max group-hover:scale-110 transition duration-300'>
                <div className='text-lg font-bold'>
                    {props.title}
                </div>
                <div className='text-sm mt-5'>{props.release}</div>
            </div>
        </Link>
    )
}

export default Card