import React from 'react'
import Form from './compnents/Form'

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
        description: "Description de ma tache", 
        status: "To do",
      }]
    })
    console.log(str)
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
