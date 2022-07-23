import React from "react";

class Form extends React.Component{

    constructor () {
        super ()
    
        this.state = {
            task: ""
        }
      
      }

      handleTaskDescriptionChange = e =>{
        this.setState({
            task: e.target.value
        })
      }

      handleSubmit = e =>{
        e.preventDefault()
        this.props.addTask (this.state.task)
        this.setState({
            task: ""
        })
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="flex gap-3">
                <input type="text" className="w-1/2 px-1 shadow-md border border-solid border-stone-800" onChange={this.handleTaskDescriptionChange} value={this.state.task}/>
                <button type="submit" className="border-2 border-blue-500 solid transition-colors text-blue-500 hover:bg-blue-500 hover:text-white py-1 px-3 rounded-lg font-semibold">Add Task</button>
            </form>
            
        );
    }
}

export default Form