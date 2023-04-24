import React,{useState,useEffect} from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Shimmer from './Shimmer';


const VideoContainer = () => {
   
   const [videos, setVideos] = useState([]);
   useEffect(()=>{
  
     getVideos();

   },[])

   const getVideos = async () =>{
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
    //   console.log(json.items);
      setVideos(json.items);
   }
   const isMenuOpen = useSelector(store=>store.app.isMenuOpen);


    return videos.length === 0 ? <Shimmer/> :(
        <div className={"  flex flex-wrap mt-[100px] " + (isMenuOpen && "ml-[180px]")}>
       {videos.map((video)=> 
         <Link className='relative ' to={"/watch?v=" + video.id} >
            <VideoCard key={video.id} info={video}/>
          </Link>
          )} 
        </div>
    )
}

export default VideoContainer;
