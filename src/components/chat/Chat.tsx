import React, { useState } from 'react';
import './chat.css';

interface mProps {
    message: string[],
    id: string
}
interface Props {
    messages: string[][],
    id: string,
    handleSetMessages: (id: string, chat: string) => void;
}

function Chat({ messages, id, handleSetMessages }: Props) {
    
    let messageList = messages.map((msg, index)=>{
        return <ChatMessage message={ msg } id={ id }/>
    })
    
    const [chat, setChat] = useState('')
    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setChat(e.currentTarget.value)
    }
    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        if (!chat) {
            return
        }
        handleSetMessages(id, chat);
        setChat("")
    }

    return (
        <div className='chat'>
            <div className='header'>

            </div>
            <div className="main">
                { messageList }
            </div>
            <form>
                <input type="text" placeholder="..." value={chat} onChange={ handleChange }/>
                <button type="submit" className='button' onClick={ handleSubmit }>🚀</button>
            </form>
        </div>
    )
}

function ChatMessage({ message, id }: mProps) {
    const messageClass = id === message[0] ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            <p className="name">{message[0]}</p>
            <p>{message[1]}</p>
        </div>
    )
}

export default Chat