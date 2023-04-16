import React from 'react'

const ChatMessage = ({name,message}) => {
    return (<div>
            <div className='flex px-2 m-2 shadow-sm'>
                <img className='h-7 cursor-pointer ' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
                <span className='ml-2 font-bold'>{name}</span>
                <span className='ml-2'>{message}</span>
            </div>
        </div>
    )
}

export default ChatMessage
