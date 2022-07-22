import React from 'react'
import Form from './compnents/Form'
import List from './compnents/List'

class App extends React.Component {
  constructor () {
    super ()

    this.state = {
    tasks: []
    }
  }

  addTask = (str) => {
    
    let newTasks = [{description: str, status: "To do"}, ...this.state.tasks]
    this.setState({
      tasks: newTasks
    })
  }

  deleteTask = (i) => {
    let taskDeleted = [...this.state.tasks]
    taskDeleted.splice(i, 1)
    this.setState({
      tasks: taskDeleted
    })
  }


  render() {
    return(
      <div className='container'>
        <h1 className="text-3xl font-bold underline">ToDo List</h1>
        <div>
          <Form
            addTask={this.addTask}
          />
        </div>
        <div>
          <List
            deleteTask={this.deleteTask}
          />
        </div>
      </div>
    )
  }
}




export default App;
