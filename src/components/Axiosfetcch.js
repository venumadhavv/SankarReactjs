import React,{useEffect, useState} from "react";

import axios from "axios";
//more about axios 
//https://www.freecodecamp.org/news/how-to-use-axios-with-react/
const baseURL='https://jsonplaceholder.typicode.com/posts/'
const Axiosfetch =()=>{
    const [data,setdata]=useState([])
    useEffect(()=>{
            axios.get(baseURL).then(
                res=>setdata(res.data)
            )
            
    },[])
    return(
        <div>
            {data.map(item => <li key={item.id}> {item.id}  {item.title }</li>)}
        </div>
    )
}
export default Axiosfetch
// post axios
// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function createPost() {
//     axios
//       .post(baseURL, {
//         title: "Hello World!",
//         body: "This is a new post."
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={createPost}>Create Post</button>
//     </div>
//   );
// }


// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function updatePost() {
//     axios
//       .put(`${baseURL}/1`, {
//         title: "Hello World!",
//         body: "This is an updated post."
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={updatePost}>Update Post</button>
//     </div>
//   );
// }