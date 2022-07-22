import React from "react";

class List extends React.Component{
   render() {
    return(
    this.props.tasks.map((task)=>{
        return(
        <li key={this.props.tasks.indexOf(task)} className="flex justify-between border-b-2 border-dashed border-stone-900 p-6">
        <p>{task.description}</p>
        <p>{task.status}</p>
        <button onClick={() => this.props.deleteTask(this.props.tasks.indexOf(task))}>Delete</button>
        </li>)
        })
    )
   }
}

export default List