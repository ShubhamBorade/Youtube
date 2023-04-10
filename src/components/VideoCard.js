import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);

    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
    const {viewCount,likeCount} = statistics;

    return (
        <div className='p-2 m-2 w-64 shadow-lg rounded'>
            <img className='rounded' src={thumbnails.medium.url} alt="thumbnail" />
            <ul>
                <li className='font-bold'>{title}</li>
                <li>{channelTitle}</li>
                <li>{viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard
