import { Card } from './components/card'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
      </header>
      <body className="Body">
        <Card/>
        <Card/>
        <Card/>
      </body>
    </div>
  )
}

export default App
