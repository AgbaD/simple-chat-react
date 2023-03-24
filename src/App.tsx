import React, { useEffect, useState } from 'react';
import './App.css';
import { Login, Chat } from './components';


function App() {
  const [id, setId] = useState('');
  const [messages, setMessages] = useState([['']]);

  useEffect(() => {
    const msg: any = window.localStorage.getItem('messages')
    const msgs = JSON.parse(msg)
    if (msgs) {
      if (msgs.length > 25) {
        const msgsPg = msgs.slice(-25)
        setMessages(msgsPg)
      } else {
        setMessages(msgs)
      }
    }
  }, [])

  const loadOldMessages = () => {
    const msg: any = window.localStorage.getItem('messages')
    const msgs = JSON.parse(msg)
    if (msgs) {
      if (msgs.length > 25) {
        setMessages(msgs)
      } else {
        alert('There are no old messages')
      }
    } else {
      alert('There are no messages')
    }
  }

  const handleSetId = (id: string) => {
    setId(id)
  }

  const handleSetMessages = (id: string, chat: string) => {
    let t = [id, chat]
    let m = [...messages]
    m.push(t)
    setMessages(m)
    window.localStorage.setItem('messages', JSON.stringify(m))
  }

  return id === '' ? (
    <div className="App">
      <Login handleSetId={handleSetId}/>
    </div>
  ) : (
    <div className="App">
      <Chat messages={messages} id={id} handleSetMessages={handleSetMessages} loadOldMessages={loadOldMessages} />
    </div>
  )
}

export default App;
