import { useState, useEffect } from 'react'
import {
  collection, addDoc, updateDoc,
  deleteDoc, doc, onSnapshot, query, orderBy
} from 'firebase/firestore'
import { db } from '../services/firebase'
import { useAuth } from '../context/AuthContext'

export function useTodos() {
  const { user }          = useAuth()
  const [todos, setTodos] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!user) {
      setTodos([])
      return
    }

    const ref = collection(db, 'todos', user.uid, 'tasks')
    const q   = query(ref, orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(q,
      (snapshot) => {
        setTodos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      },
      (err) => {
        console.error('Erro ao escutar tarefas:', err)
        setError('Não foi possível carregar as tarefas. Verifique sua conexão.')
      }
    )

    return unsubscribe
  }, [user])

  async function addTodo(data) {
    try {
      const ref = collection(db, 'todos', user.uid, 'tasks')
      await addDoc(ref, { ...data, completed: false, createdAt: new Date() })
    } catch (err) {
      console.error('Erro ao adicionar tarefa:', err)
      setError('Não foi possível adicionar a tarefa.')
      throw err
    }
  }

  async function updateTodo(id, data) {
    try {
      const ref = doc(db, 'todos', user.uid, 'tasks', id)
      await updateDoc(ref, data)
    } catch (err) {
      console.error('Erro ao atualizar tarefa:', err)
      setError('Não foi possível atualizar a tarefa.')
      throw err
    }
  }

  async function deleteTodo(id) {
    try {
      const ref = doc(db, 'todos', user.uid, 'tasks', id)
      await deleteDoc(ref)
    } catch (err) {
      console.error('Erro ao deletar tarefa:', err)
      setError('Não foi possível deletar a tarefa.')
      throw err
    }
  }

  async function toggleComplete(id, current) {
    try {
      const ref = doc(db, 'todos', user.uid, 'tasks', id)
      await updateDoc(ref, { completed: !current })
    } catch (err) {
      console.error('Erro ao atualizar tarefa:', err)
      setError('Não foi possível atualizar a tarefa.')
      throw err
    }
  }

  return { todos, addTodo, updateTodo, deleteTodo, toggleComplete, error, setError }
}
