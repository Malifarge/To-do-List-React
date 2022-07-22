import React from "react";

class Form extends React.Component{

    constructor{
        super()

        this.state = {
            task: ""
        },

    }

    
    render() {
        return (
            <article>
                <input type="text" />
                <button type="submit">Add Task</button>
            </article>
            
        );
    }
}

export default Form