import React, { useState, useReducer } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import appReducer from './appReducer'
import TodoList from './components/TodoList'
import TodoContext from './context'

function App() {
  const [state, dispach] = useReducer(appReducer, [
    { id: Date.now(), text: 'Hello, World', completed: false }
  ])
  const [text, setText] = useState('')

  const handleAdd = () => {
    dispach({ type: 'ADD', payload: { text } })
    setText('')
  }

  return (
    <TodoContext.Provider value={dispach}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyPress={({ key }) => key === 'Enter' && handleAdd()}
      />
      <button onClick={handleAdd}>ADD</button>
      <TodoList todos={state} />
    </TodoContext.Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
