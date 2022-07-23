import React from "react"
// import EditForm from './EditForm'

class List extends React.Component{
   render() {
      return(
         this.props.tasks.map((task)=>{
            return(
            <li key={this.props.tasks.indexOf(task)} className="flex justify-between border-b-2 border-dashed border-stone-900 p-6">
               <p className="text-stone-700">{task.description}</p>
               <p>{task.status}</p>
               <button className="text-red-600" onClick={() => this.props.deleteTask(this.props.tasks.indexOf(task))}>Delete</button>
               <button onClick={() => this.props.modifyTask(this.props.tasks.indexOf(task))}>Edit</button>
            </li>)
         })
      )
   }
}

export default List