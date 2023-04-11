import React from 'react'

const Button = ({name}) => {
    return (
        <div>
            <button className='px-4 py-1 m-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer'>{name}</button>
        </div>
    )
}

export default Button
