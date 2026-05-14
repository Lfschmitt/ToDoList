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

  useEffect(() => {
    if (!user) return

    const ref = collection(db, 'todos', user.uid, 'tasks')
    const q   = query(ref, orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    })

    return unsubscribe
  }, [user])

  async function addTodo(data) {
    const ref = collection(db, 'todos', user.uid, 'tasks')
    await addDoc(ref, { ...data, completed: false, createdAt: new Date() })
  }

  async function updateTodo(id, data) {
    const ref = doc(db, 'todos', user.uid, 'tasks', id)
    await updateDoc(ref, data)
  }

  async function deleteTodo(id) {
    const ref = doc(db, 'todos', user.uid, 'tasks', id)
    await deleteDoc(ref)
  }

  async function toggleComplete(id, current) {
    const ref = doc(db, 'todos', user.uid, 'tasks', id)
    await updateDoc(ref, { completed: !current })
  }

  return { todos, addTodo, updateTodo, deleteTodo, toggleComplete }
}
