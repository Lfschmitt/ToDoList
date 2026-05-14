import { useState } from 'react'
import styles from './Modal.module.css'

function Modal({ initialData, onClose, onSave }) {
  const [task,        setTask]        = useState(initialData?.task        ?? '')
  const [priority,    setPriority]    = useState(initialData?.priority    ?? 'Medium')
  const [fulfillment, setFulfillment] = useState(initialData?.fulfillment ?? 0)

  function handleSubmit(e) {
    e.preventDefault()
    if (!task.trim()) return
    onSave({ task: task.trim(), priority, fulfillment })
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.card} onClick={e => e.stopPropagation()}>
        <h2 className={styles.title}>
          {initialData ? 'Editar Tarefa' : 'Nova Tarefa'}
        </h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Task
            <input
              className={styles.input}
              value={task}
              onChange={e => setTask(e.target.value)}
              placeholder="Nome da tarefa"
              maxLength={200}
              required
            />
            <span className={styles.counter}>{task.length}/200</span>
          </label>
          <label className={styles.label}>
            Priority
            <select
              className={styles.input}
              value={priority}
              onChange={e => setPriority(e.target.value)}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </label>
          <label className={styles.label}>
            Fulfillment — {fulfillment}%
            <input
              type="range"
              min="0"
              max="100"
              value={fulfillment}
              onChange={e => setFulfillment(Number(e.target.value))}
              className={styles.slider}
            />
          </label>
          <div className={styles.buttons}>
            <button type="button" className={styles.cancel} onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className={styles.save}>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
