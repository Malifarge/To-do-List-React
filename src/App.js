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

  addTask = str => {
    
    let newTasks = [{description: str, status: "To do"}, ...this.state.tasks]
    this.setState({
      tasks: newTasks
    })
    
  }

  deleteTask = i => {
    let taskDeleted = [...this.state.tasks]
    taskDeleted.splice(i, 1)
    this.setState({
      tasks: taskDeleted
    })
  }

  handleClickFilter = filtre =>{
    this.setState({
      Tab:filtre
    })
    }


  modifyTask = (i, description, status) => {
    let taskEdit = [...this.state.tasks]
    taskEdit[i].description = description
    taskEdit[i].status = status
    this.setState({
      tasks: taskEdit
    })
  } 


  render() {
    console.log(modifyTask)
    return(
      <div className='container mx-auto p-6'>
        <h1 className="text-3xl font-bold underline">ToDo List</h1>

        <div className='my-5'> 
          <Form
            addTask={this.addTask}
          />
        </div>

        <div className='flex gap-5'>
        <button className='border-2 solid transition-colors border-violet-400 text-violet-500 hover:bg-violet-300 hover:text-white p-1 rounded-lg w-24' onClick={() => this.handleClickFilter("All")}>All</button>
        <button className='border-2 solid transition-colors border-orange-300 text-orange-400 hover:bg-orange-200 hover:text-orange-500 p-1 rounded-lg w-24' onClick={() => this.handleClickFilter("To do")}>To do</button>
        <button className='border-2 solid transition-colors border-yellow-300 text-yellow-400 hover:bg-yellow-100 hover:text-yellow-400 p-1 rounded-lg w-24' onClick={() => this.handleClickFilter("Doing")}>Doing</button>
        <button className='border-2 solid transition-colors border-green-300 text-green-400 hover:bg-green-100 hover:text-green-500 p-1 rounded-lg w-24' onClick={() => this.handleClickFilter("Done")}>Done</button>
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
