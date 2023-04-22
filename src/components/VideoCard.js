import React from 'react'
import { useSelector } from 'react-redux';

const VideoCard = ({info}) => {
    // console.log(info);

    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
    const {viewCount,likeCount} = statistics;

    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

    return (
        <div className={(isMenuOpen && ' w-[336px] ' ) + (!isMenuOpen && ' w-[299px] ' ) + ' p-2 m-2  shadow-md hover:shadow-lg hover:shadow-xl rounded transition delay-150'}>
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
