import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header/Header'
import FilterBar from './components/FilterBar/FilterBar'
import TodoTable from './components/TodoTable/TodoTable'
import Modal from './components/Modal/Modal'
import Login from './components/Login/Login'
import { useAuth } from './context/AuthContext'
import { useTodos } from './hooks/useTodos'

function App() {
  const { user, loading, logout }                             = useAuth()
  const { todos, addTodo, updateTodo, deleteTodo, toggleComplete } = useTodos()

  const [filter, setFilter]           = useState('all')
  const [modalOpen, setModalOpen]     = useState(false)
  const [editingTodo, setEditingTodo] = useState(null)

  if (loading) return null
  if (!user)   return <Login />

  const filteredTodos = todos.filter(todo => {
    if (filter === 'todo')      return !todo.completed
    if (filter === 'completed') return  todo.completed
    return true
  })

  function handleOpenAdd() {
    setEditingTodo(null)
    setModalOpen(true)
  }

  function handleOpenEdit(todo) {
    setEditingTodo(todo)
    setModalOpen(true)
  }

  async function handleSave(data) {
    if (editingTodo) {
      await updateTodo(editingTodo.id, data)
    } else {
      await addTodo(data)
    }
    setModalOpen(false)
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Header onLogout={logout} userName={user.displayName} />
        <FilterBar
          filter={filter}
          setFilter={setFilter}
          onAdd={handleOpenAdd}
        />
        <TodoTable
          todos={filteredTodos}
          onEdit={handleOpenEdit}
          onDelete={deleteTodo}
          onToggle={toggleComplete}
        />
        {modalOpen && (
          <Modal
            initialData={editingTodo}
            onClose={() => setModalOpen(false)}
            onSave={handleSave}
          />
        )}
      </div>
    </div>
  )
}

export default App
