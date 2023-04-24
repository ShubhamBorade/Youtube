const Shimmer = () =>{
    return(
        <div className="flex flex-wrap mt-[90px] ml-[180px]">
         {
          Array(50).fill("").map((e,index)=> <div key={index}  className="bg-gray-200 h-72 w-80 rounded m-3 "></div>) 
         }
        </div>
    )
}
export default Shimmer;