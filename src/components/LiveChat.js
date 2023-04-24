import React,{useEffect,useState} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch ,useSelector} from 'react-redux'
import {addMessage} from '../utils/ChatSlice'
import { generateRandomName,makeRandomMessage } from '../utils/helper'

const LiveChat = () => {

    const [liveMessage,setLiveMessage] = useState("");

    //reading the store
    const chatMessages = useSelector(store=>store.chat.messages)

    const dispatch = useDispatch()
    useEffect(()=>{

      // API Polling (fetching the data from store after every 800ms)
        const i = setInterval(() => {
            console.log("API polling");
            dispatch(addMessage({
                name:generateRandomName(),
                message:makeRandomMessage(20) + "🔥", // length of the msg will be 20 characters
        }))
        }, 800);

      return () => clearInterval(i); //it will clear the setinterval function
  
    },[])


    return (
         <div>
          <div className='border-2 boder-black h-[400px] w-[400px] bg-slate-100 rounded  overflow-y-scroll flex flex-col-reverse'>          
              {chatMessages.map((c,index)=><ChatMessage key={index} name={c.name} message={c.message}/>)}
          </div>

          <form className='w-[400px] ml-1 ' onSubmit={(e)=>{
            e.preventDefault();                                  //preventdefault will avoid our page form refreshing when we hit enter button after entering the message
            dispatch(addMessage({
              name:"Shubham",
              message:liveMessage + "🌈",
            }))

            setLiveMessage(""); //it will clear the message from inputbox once we hit the enter
          }}>
            <div className='bg-slate-200 -ml[3px] h-[35px]'>
              <input 
              value={liveMessage}
              onChange={(e)=> setLiveMessage(e.target.value) }
              className='w-[323px] h-8 bg-slate-200 px-2 rounded border border-black boder-2 outline-none' type="text" placeholder='Type here.....'/>
              <button className='bg-blue-300 hover:bg-blue-200 px-4 py-1 rounded font-bold ml-1'>Send</button>
              </div>
          </form>
        </div>
    )
}

export default LiveChat
