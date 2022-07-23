import React from "react"

class EditForm extends React.Component{
    render() {
        const {
            editDescription,
            handleTaskDescriptionChange,
            handleStatusChange,
            handleSubmit,
            reset
        } = this.props

        return (
            <form onSubmit={handleSubmit} className="flex gap-3">
                <input type="text" onChange={handleTaskDescriptionChange} value={editDescription}/>
                <select onChange={handleStatusChange}>
                    <option value="To Do">To Do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
                <button onClick={reset}>Cancel</button>
                <button type="submit" className="">Confirm</button>
            </form>
        )
    }
}

export default EditForm