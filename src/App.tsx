import { Card } from './components/card'
import { HeroSection } from './components/heroSection'
// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Finance platform</h1>
      </header>
      <body className="Body">
        <HeroSection className="Hero-section"/>
        <Card style={{ backgroundColor: 'blue'}}/>
        <Card/>
        <Card/>
      </body>
    </div>
  )
}

export default App
