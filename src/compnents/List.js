import React from "react";

class List extends React.Component{
   render() {
    console.log(this.props);
    return(
    this.props.tasks.map((task)=>{
        return(
        <li key={this.props.tasks.indexOf(task)} className="flex-1">
        <p>{task.description}</p>
        <p>{task.status}</p>
        <button onClick={() => this.props.deleteTask(this.props.tasks.indexOf(task))}>Delete</button>
        </li>)
        })
    )
   }
}

export default List