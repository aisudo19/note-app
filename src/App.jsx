import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { useState } from 'react'

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: Math.random().toString(36).substr(2, 9),
      title: '新しいノート',
      content: '新しいノートの内容',
      lastModified: Date.now(),
    }
    setNotes([...notes, newNote]);
    console.log(notes);
  }

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote}/>
      <Main />
    </div>
  )
}

export default App
