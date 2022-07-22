import React from 'react'
import Form from './compnents/Form'
import List from './compnents/List'
import './index.css'

class App extends React.Component {
  constructor () {
    super ()

    this.state = {
    tasks: [],
    Todo: [],
    Doing: [],
    Done: [],
    Tab: "All"
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

  handleClickFilter = (filtre) =>{
    this.setState({
      Tab:filtre
    })
    }


  modifyTask = (i) => {
    let taskEdit = [...this.state.tasks]

    this.setState({
      tasks: taskEdit
    })
  }


  render() {
    return(
      <div className='container p-6'>
        <h1 className="text-3xl font-bold underline">ToDo List</h1>

        <div className='my-5'> 
          <Form
            addTask={this.addTask}
          />
        </div>

        <div className='flex gap-5'>
        <button className='border border solid border-black p-1 rounded-lg w-24' onClick={() => this.handleClickFilter("All")}>All</button>
        <button className='border border solid border-black p-1 rounded-lg w-24' onClick={() => this.handleClickFilter("To do")}>To do</button>
        <button className='border border solid border-black p-1 rounded-lg w-24' onClick={() => this.handleClickFilter("Doing")}>Doing</button>
        <button className='border border solid border-black p-1 rounded-lg w-24' onClick={() => this.handleClickFilter("Done")}>Done</button>
        </div>

        <div className='shadow-md'>
          {this.state.Tab==="All" && <List
            deleteTask={this.deleteTask}
            tasks={this.state.tasks}
            modifyTask={this.modifyTask}
          />}

          {this.state.Tab==="To do" && <List
            deleteTask={this.deleteTask}
            tasks={this.state.Todo}
            modifyTask={this.modifyTask}
          />}

          {this.state.Tab==="Doing" && <List
            deleteTask={this.deleteTask}
            tasks={this.state.Doing}
            modifyTask={this.modifyTask}
          />}

          {this.state.Tab==="Done" && <List
            deleteTask={this.deleteTask}
            tasks={this.state.Done}
            modifyTask={this.modifyTask}
          />}
        </div>
      </div>
    )
  }
}




export default App;
