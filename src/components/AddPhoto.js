import React,{Component} from "react";

class AddPhoto extends Component{
    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        
        const link=event.target.elements.link.value
        const desc =event.target.elements.description.value
        const post ={
            id:0,
            description:desc,
            imageLink:link
        }
        if(link && desc){
            this.props.addPhoto(post)
        }
    }
    render(){
        return( 
        <div className="form">
            <h2>Add photo</h2>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Link" name="link"/>
                <input type="text "placeholder="Description" name="description"/>
                <button>Post</button>
            </form>
        </div>
        )
    }

}
export default AddPhoto