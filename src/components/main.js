import React,{Component} from "react";

// import List from './list';

import { Route,Routes } from "react-router-dom";

import Heading from "./heading";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import Fetchdata from "./Fetchdata";
import Axiosfetch from "./Axiosfetcch";
class Main extends Component{

    constructor(){
        console.log("constructor")
        super()
        this.state={
                posts:[
                                {
                                    id: "0",
                                    description: "beautiful landscape",
                                    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                                    "3919321_1443393332_n.jpg"
                                    }, 
                                    {
                                    id: "1",
                                    description: "Aliens???",
                                    imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
                                    }, 
                                    {
                                    id: "2",
                                    description: "On a vacation!",
                                    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
                                    }
                            ]
                
            
        }
        console.log(this.state.posts)
        this.removePhoto=this.removePhoto.bind(this)
        this.addPhoto=this.addPhoto.bind(this)

    }
    removePhoto(postremoved){

        this.setState((state)=>({
                posts:state.posts.filter(post=> post!==postremoved)
        }))
    }
    addPhoto(postadded){
        this.setState((state)=>({
            posts:state.posts.concat([postadded])
        }))
    }
    // componentDidUpdate(prevProps,prevState){
    //     console.log(prevState.posts)
    //     console.log(this.state)
    // }
    // componentDidMount(){
    //     console.log("mount")
    //   const  data=SimulateFunction()
    //   this.setState({
    //     posts:data 
    //   })
    // }

    render(){
        console.log("remder")
        return(
            <div>
                <Routes>

                        <Route  path="/" 
                            element ={
                                <>
                                    <Heading title={'phtoshop'}/>
                                    <PhotoWall posts={this.state.posts} removephoto={this.removePhoto}/>
                                    
                                </>
                            }
                        />

                        <Route path ="/AddPhoto" element={<AddPhoto addPhoto={(addpost)=>{this.addPhoto(addpost)}}/>}/>
                        <Route path="/fetch" element={<Fetchdata/>}/>
                        <Route path="/axios" element={<Axiosfetch/>}/>

                </Routes>

            </div>
        )
    }
}

// function SimulateFunction(){
//     return [{
//             id: "0",
//             description: "beautiful landscape",
//             imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//             "3919321_1443393332_n.jpg"
//             }, 
//             {
//             id: "1",
//             description: "Aliens???",
//             imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
//             }, 
//             {
//             id: "2",
//             description: "On a vacation!",
//             imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
//             }
//     ]
// }
export default Main