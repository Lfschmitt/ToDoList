import styles from './Login.module.css'
import { useAuth } from '../../context/AuthContext'

function Login() {
  const { login } = useAuth()

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <div className={styles.iconArea}>
          {/* Espaço reservado para seu ícone */}
        </div>
        <h1 className={styles.title}>React To-Do List</h1>
        <p className={styles.subtitle}>Organize suas tarefas com praticidade</p>
        <button className={styles.button} onClick={login}>
          <div className={styles.googleIcon} />
          Entrar com Google
        </button>
      </div>
    </div>
  )
}

export default Login
