import React,{useState} from "react";

const App =()=>{

    const [data,setdata]=useState({
        uname:'',
        pass:''
    })

    const {uname,pass}=data;

    const changehandler = e=>{
        setdata({...data,[e.target.name]:[e.target.value]})
    }

    const submithandle =e=>{
        e.preventDefault()
        console.log(data)
    }

    return(
        <div>
                <form onSubmit={submithandle}>
                    <input type="text" name="username" value={uname} onChange={changehandler}/>
                    <input type="password" name="password" value={pass} onChange={changehandler}/>
                    {uname !== pass ? <p> passnot mathc</p> :null }
                    <input type="submit" name="submit"> </input>

                </form>
        </div>
    )
}