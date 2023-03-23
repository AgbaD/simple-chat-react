import React, { useEffect, useState } from 'react';
import './App.css';
import { Login, Chat } from './components';
import { useImmer } from 'use-immer';


function App() {
  const [id, setId] = useState('');
  const [messages, setMessages] = useState([['']]);

  useEffect(() => {
    const msg: any = window.localStorage.getItem('messages')
    const msgs = JSON.parse(msg)
    if (msgs) {
      if (msgs.length > 25) {
        const msgsPg = msgs.slice(0, 25)
        setMessages(msgsPg)
      } else {
        setMessages(msgs)
      }
    }
  }, [])

  const handleSetId = (id: string) => {
    setId(id)
  }

  const handleSetMessages = (id: string, chat: string) => {
    let t = [id, chat]
    let m = [...messages]
    m.push(t)
    setMessages(m)
    // setMessages(draft => {draft.push([id, chat])})
    window.localStorage.setItem('messages', JSON.stringify(m))
  }

  return id === '' ? (
    <div className="App">
      <Login handleSetId={handleSetId}/>
    </div>
  ) : (
    <div className="App">
      <Chat messages={messages} id={id} handleSetMessages={handleSetMessages} />
    </div>
  )
}

export default App;
