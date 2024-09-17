import './App.css'
import Student from './components/Student'
import Button from './components/Button'

function App() {
  return (
    <div>
      <Student name={Peter} age={28} />
      <Button />
    </div>
  )
}

export default App
