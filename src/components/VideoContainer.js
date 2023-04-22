import React,{useState,useEffect} from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


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

    return (
        <div className={"  flex flex-wrap relative z-0 mt-[90px] " + (isMenuOpen && "ml-[180px]")}>
       {videos.map((video)=> 
         <Link to={"/watch?v=" + video.id} >
            <VideoCard key={video.id} info={video}/>
          </Link>
          )} 
        </div>
    )
}

export default VideoContainer;
