import styles from './FilterBar.module.css'

function FilterBar() {
  return (
    <div className={styles.bar}>
      <button className={styles.addButton}>+ Add a new to-do</button>
      <div className={styles.filters}>
        <button className={`${styles.filter} ${styles.active}`}>All</button>
        <button className={styles.filter}>To-do</button>
        <button className={styles.filter}>Completed</button>
      </div>
    </div>
  )
}

export default FilterBar
