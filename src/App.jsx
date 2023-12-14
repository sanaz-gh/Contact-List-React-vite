import { useState } from 'react'
import Contacts from './components/Contacts'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Contacts/>
    </>
  )
}

export default App
