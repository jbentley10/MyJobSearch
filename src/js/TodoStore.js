import { computed, observable } from "mobx"

class Todo {
  @observable value
  @observable location
  @observable id
  @observable complete

  constructor(value, location) {
    this.value = value
    this.location = location
    this.id = Date.now()
    this.complete = false
  }
}

export class TodoStore {
  @observable todos = []
  @observable filter = ""
  @computed get filteredTodos() {
    var matchesFilter = new RegExp(this.filter, "i")
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
  }

  createTodo(value) {
    this.todos.push(new Todo(value, location))
  }

  clearComplete = () => {
    const incompleteTodos = this.todos.filter(todo => !todo.complete)
    this.todos.replace(incompleteTodos)
  }

}

export default new TodoStore
