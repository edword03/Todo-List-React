import React, { useState, useEffect } from 'react'

import { TodoForm } from '../Components/TodoForm';
import TodoList from '../Components/TodoList';

import { ITodo } from '../interfaces'


export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('todos') ||' []') as ITodo[];
    setTodos(storage);
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false 
    }

    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo
    }))
  }

  const removeHandler =(id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
    </>
  )
}
