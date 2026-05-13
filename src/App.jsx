import styles from './App.module.css'
import Header from './components/Header/Header'

function App() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Header />
      </div>
    </div>
  )
}

export default App
