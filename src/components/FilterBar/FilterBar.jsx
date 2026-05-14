import styles from './FilterBar.module.css'

function FilterBar({ filter, setFilter, onAdd }) {
  return (
    <div className={styles.bar}>
      <button className={styles.addButton} onClick={onAdd}>
        + Add a new to-do
      </button>
      <div className={styles.filters}>
        <button
          className={`${styles.filter} ${filter === 'all'       ? styles.active : ''}`}
          onClick={() => setFilter('all')}
        >All</button>
        <button
          className={`${styles.filter} ${filter === 'todo'      ? styles.active : ''}`}
          onClick={() => setFilter('todo')}
        >To-do</button>
        <button
          className={`${styles.filter} ${filter === 'completed' ? styles.active : ''}`}
          onClick={() => setFilter('completed')}
        >Completed</button>
      </div>
    </div>
  )
}

export default FilterBar
