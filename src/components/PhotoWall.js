import React,{useState} from "react";
import Photo from "./Photo";
import {Link,Navigate,useNavigate} from 'react-router-dom';
function PhotoWall(props){

        // use history can be only used in function level component not in class level component
        let history=useNavigate()
        const [auth,setauth]= useState(false)
        if(auth){
            return (<> <Navigate to ="/fetch"/></>)
        }

        return(

            <div>
                <button onClick={()=>setauth(true)}>Click to fetch </button>
                <button onClick={()=>history('/axios')}>Click to axiox</button>
                <Link className="addIcon" to="/AddPhoto"></Link>
                <div className='photoGrid'>
                        {props.posts.map((post,ind)=> <Photo key={ind} post={post} removephoto={props.removephoto}/> )}
                </div>
            </div>
        )
    
}

export default PhotoWall;