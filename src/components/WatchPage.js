import React,{useEffect} from 'react'
import { closeMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch = useDispatch();

    useEffect(()=>{  //as useEffect is called first so we are dispatching an action in it which will result in the state to be false everytime when we are moving to /watch page and hece the sidebar panel will be hidden everytime
     dispatch(closeMenu())
    },[])

    return (
       <div> 
            <div className='px-5 flex'>
                <iframe width="800" height="430" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <LiveChat/>
            </div>
            <CommentsContainer/>
        </div>
    )
}

export default WatchPage
