import styles from './Header.module.css'

function Header({ onLogout, userName }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>React To-Do List</h1>
      <div className={styles.user}>
        <span className={styles.name}>{userName}</span>
        <button className={styles.logout} onClick={onLogout}>Sair</button>
      </div>
    </div>
  )
}

export default Header
