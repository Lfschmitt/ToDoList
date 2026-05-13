import TodoRow from '../TodoRow/TodoRow'
import styles from './TodoTable.module.css'

const todos = [
  { id: 1, task: 'Learn React',     priority: 'High',   fulfillment: 30  },
  { id: 2, task: 'Shopping',        priority: 'High',   fulfillment: 0   },
  { id: 3, task: 'Buy the tickets', priority: 'Medium', fulfillment: 100 },
]

function TodoTable() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>Task</span>
        <span>Priority</span>
        <span>Fulfillment</span>
        <span></span>
      </div>
      <div className={styles.list}>
        {todos.map(todo => (
          <TodoRow key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  )
}

export default TodoTable
