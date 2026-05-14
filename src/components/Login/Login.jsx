import { useState } from 'react'
import styles from './Login.module.css'
import { useAuth } from '../../context/AuthContext'

function Login() {
  const { login }         = useAuth()
  const [error, setError] = useState(null)

  async function handleLogin() {
    try {
      setError(null)
      await login()
    } catch (err) {
      if (err.code === 'auth/popup-closed-by-user' ||
          err.code === 'auth/cancelled-popup-request') return

      console.error('Erro ao fazer login:', err)
      setError('Não foi possível fazer login. Tente novamente.')
    }
  }

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <div className={styles.iconArea}>
          {/* Espaço reservado para seu ícone */}
        </div>
        <h1 className={styles.title}>React To-Do List</h1>
        <p className={styles.subtitle}>Organize suas tarefas com praticidade</p>
        {error && <p className={styles.error}>{error}</p>}
        <button className={styles.button} onClick={handleLogin}>
          <div className={styles.googleIcon} />
          Entrar com Google
        </button>
      </div>
    </div>
  )
}

export default Login
