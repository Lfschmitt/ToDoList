import FulfillmentSlider from '../FulfillmentSlider/FulfillmentSlider'
import styles from './TodoRow.module.css'

function TodoRow({ task, priority, fulfillment }) {
  return (
    <div className={styles.row}>
      <span className={styles.task}>{task}</span>
      <span className={styles.priority}>{priority}</span>
      <FulfillmentSlider value={fulfillment} />
      <div className={styles.actions}>
        <div className={styles.iconPlaceholder} title="Editar" />
        <div className={styles.iconPlaceholder} title="Deletar" />
      </div>
    </div>
  )
}

export default TodoRow
