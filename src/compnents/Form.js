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
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleTaskDescriptionChange} value={this.state.task}/>
                <button type="submit">Add Task</button>
            </form>
            
        );
    }
}

export default Form