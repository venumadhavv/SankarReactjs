import React,{useEffect,useState} from "react";

const Fetchdata =()=>{
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos').then(
            res=>res.json()
        ).then( res => setdata(res))
    },[])
    return (
        <div>
            <h1>helo</h1>
            {data.map(item => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}
export default Fetchdata