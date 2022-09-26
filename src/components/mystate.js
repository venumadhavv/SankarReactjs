import React,{useState,useEffect} from "react";

function mystate(props){
    const [count,setcount]=useState(0);
    const [user,setuser]=useState("");

    const handler = e=>{
        setuser(e.target.value)
    }


    useEffect(()=> console.log(count,[count]))
        return(<>
                    <h1>{count}</h1>
                    <input type="text" value={user} name="user" onChange={handler}/>
                    <button onClick={()=>{setcount(count+1)}}>Change</button>
        </>)
    
}
export default mystate



function app(as){

}

