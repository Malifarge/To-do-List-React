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

  addTask(str) {
    this.setState({
      tasks: [{
        description: str, 
        status: "To do",
        ...this.state.tasks
      }]
    })
    // console.log(this.state.tasks)
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
      </div>
    )
  }
}




export default App;
