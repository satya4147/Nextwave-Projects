// Write your code here
import './index.css'

function TodoItems(props) {
  const {initialTodosList, OndeleteTodo} = props
  const {title, id} = initialTodosList

  const OnDeleteList = () => {
    OndeleteTodo(id)
  }

  return (
    <div className="card-container">
      <li>
        <div className="card">
          <p className="text-title">{title}</p>
          <button type="delete" className="button" onClick={OnDeleteList}>
            Delete
          </button>
        </div>
      </li>
    </div>
  )
}

export default TodoItems
