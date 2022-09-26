import React,{Component} from "react";

function Photo(props){

    const photo =props.post
        return(
            <>
                <figure className="figure">
                    <img className="photo" src={photo.imageLink}/>
                    

                    <figcaption>
                        <p> {photo.description}</p>
                    </figcaption>
                    <div className="button-container">
                        <button  onClick={()=>{props.removephoto(photo)}}>Remove</button>
                    </div>
                </figure>
            </>
        )
}


export default Photo;