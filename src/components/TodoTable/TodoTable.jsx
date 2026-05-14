import TodoRow from '../TodoRow/TodoRow'
import styles from './TodoTable.module.css'

function TodoTable({ todos, onEdit, onDelete, onToggle }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>Task</span>
        <span>Priority</span>
        <span>Fulfillment</span>
        <span></span>
      </div>
      <div className={styles.list}>
        {todos.length === 0 && (
          <p className={styles.empty}>Nenhuma tarefa encontrada.</p>
        )}
        {todos.map(todo => (
          <TodoRow
            key={todo.id}
            todo={todo}
            onEdit={() => onEdit(todo)}
            onDelete={() => onDelete(todo.id)}
            onToggle={() => onToggle(todo.id, todo.completed)}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoTable
