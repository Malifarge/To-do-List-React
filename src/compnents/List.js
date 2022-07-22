import React from "react";

class List extends React.Component{
   render() {
    console.log(this.props.tasks);
    this.props.tasks.map((task)=>{
        return(
        <li>
        <p>{task}</p>
        <button onClick={() => deleteTask(i)}>Delete</button>
        </li>
        )
    })
   }
}

export default List