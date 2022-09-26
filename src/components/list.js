import React,{Component} from 'react';

class List extends Component{
    render(){
        return(
            <>
                <ul>
                    {this.props.task.map(
                        (data,ind)=>
                            <li key={ind}>
                                    {data}
                            </li>
                    )}
                </ul>
            </>
        )
    }
}
export default List