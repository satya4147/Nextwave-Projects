import {Component} from 'react'
import TodoItems from '../simpleTodoItems'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  OndeleteTodo = id => {
    const {todoList} = this.state

    const deleteTodoList = todoList.filter(
      eachTodoList => eachTodoList.id !== id,
    )

    this.setState({todoList: deleteTodoList})
  }

  render() {
    const {todoList} = this.state

    return (
      <div className="simple-container">
        <div className="simple-card-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="card-list-container">
            {todoList.map(eachItems => (
              <TodoItems
                initialTodosList={eachItems}
                key={eachItems.id}
                OndeleteTodo={this.OndeleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
