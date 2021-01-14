import React from 'react'
import { useHistory } from 'react-router-dom'

export const TodosAbout: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Страница информации</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae itaque cupiditate consequuntur ea? Est nulla incidunt, optio nobis odit aliquid distinctio a. Perspiciatis facere ullam qui. Nisi atque placeat sunt.</p>

      <button className="btn" onClick={() => history.push('/')}>К списку дел</button>
    </>
  )
}
