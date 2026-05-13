import styles from './App.module.css'
import Header from './components/Header/Header'
import FilterBar from './components/FilterBar/FilterBar'
import TodoTable from './components/TodoTable/TodoTable'

function App() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Header />
        <FilterBar />
        <TodoTable />
      </div>
    </div>
  )
}

export default App
