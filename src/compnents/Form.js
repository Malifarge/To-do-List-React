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
                <input type="text" className="shadow-md border border-solid border-stone-800" onChange={this.handleTaskDescriptionChange} value={this.state.task}/>
                <button type="submit" className="border border solid border-black p-1 rounded-lg">Add Task</button>
            </form>
            
        );
    }
}

export default Form