import React from "react";

class List extends React.Component{
   render() {
    return(
    this.props.tasks.map((task)=>{
        return(
        <li key={this.props.tasks.indexOf(task)} className="flex justify-between">
        <p>{task.description}</p>
        <p>{task.status}</p>
        <button onClick={() => this.props.deleteTask(this.props.tasks.indexOf(task))}>Delete</button>
        <button onClick={() => this.props.modifyTask(this.props.tasks.indexOf(task))}>Edit</button>
        </li>)
        })
    )
   }
}

export default List