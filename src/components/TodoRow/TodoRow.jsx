import FulfillmentSlider from '../FulfillmentSlider/FulfillmentSlider'
import styles from './TodoRow.module.css'

function TodoRow({ todo, onEdit, onDelete, onToggle }) {
  return (
    <div className={`${styles.row} ${todo.completed ? styles.completed : ''}`}>
      <span className={styles.task}>{todo.task}</span>
      <span className={styles.priority}>{todo.priority}</span>
      <FulfillmentSlider value={todo.fulfillment ?? 0} />
      <div className={styles.actions}>
        <button className={styles.iconBtn} onClick={onToggle} title="Concluir">
          <div className={styles.iconPlaceholder} />
        </button>
        <button className={styles.iconBtn} onClick={onEdit} title="Editar">
          <div className={styles.iconPlaceholder} />
        </button>
        <button className={styles.iconBtn} onClick={onDelete} title="Deletar">
          <div className={styles.iconPlaceholder} />
        </button>
      </div>
    </div>
  )
}

export default TodoRow
