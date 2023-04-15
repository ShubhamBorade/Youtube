import React from 'react'


    const commentsData = [{
        name:"Shubham",
        text:"nice video",
        replies:[{
            name:"om",
            text:"best",
        }]
    },
    {
        name:"Shubham",
        text:"nice video",
        replies:[{
            name:"Shubham",
            text:"nice video",
        }]  
    },
    {
        name:"Shubham",
        text:"nice video",
        replies:[{
            name:"Shubham",
            text:"nice video",
        }]    
    }]

    //first we are creating single comment
    const Comment = ({data}) =>{
        const {name,text,replies} = data;
       return <div className='flex p-2 m-2 bg-gray-100 rounded shadom-lg'>
          <img className='w-6 h-6 ' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="logo" />
           <div className='ml-1'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
           </div>
       </div>
    }

    //rendering nested comments using the concept of recurssion
   const CommentList = ({comments}) =>{
    return comments.map((comment,index)=>(
    <div>
      <Comment key={index} data={comment}/>
       <div className='pl-5 ml-5 border border-l-black'>
       <Comment key={index} data={comment}/>
       <Comment key={index} data={comment}/>
       {/* <CommentList comments={comment.replies}/> */}
       </div>
    </div>
    ))
   }

    const CommentsContainer = () => {
    return (
        <>
            <div className='p-3 m-3 font-bold'>
                <h1>Comments:</h1>
            </div>
            {/* <Comment data={commentsData[0]}/> */}
            <CommentList comments={commentsData}/>
           
        </>
    )
}

export default CommentsContainer
