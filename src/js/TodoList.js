import React from "react"
import { observer } from "mobx-react"


@observer
export default class TodoList extends React.Component {
  createNew(e) {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value)
      e.target.value = ""
      this.props.store.createTodo(e.target.location)
      e.target.location = ""
    }
  }

  filter(e) {
    this.props.store.filter = e.target.value
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete
  }

  deleteTodo (todo) {
    todo.value = ""
    todo.location = ""
    todo.id = null
    todo.complete = false
  }

  render() {
    const { deleteTodo, clearComplete, filter, filteredTodos, todos } = this.props.store

    const todoLis = filteredTodos.map(todo => (
      <li key={todo.id}>
       <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />
       <span>{todo.value} | {todo.location}</span>
       <strong onClick={this.deleteTodo.bind(this, todo)}>X</strong>
      </li>
    ))
    return <div>
      <h1>Jobs</h1>
      <input className="name" onKeyPress={this.createNew.bind(this)} placeholder="Name" />
      <input className="location" onKeyPress={this.createNew.bind(this)} placeholder="Location" />
      <input className="filter" value={filter} onChange={this.filter.bind(this)} placeholder="Filter"/>
      <ul>{todoLis}</ul>
      <a href="#" onClick={clearComplete}>Clear Complete</a>
    </div>
  }
}
