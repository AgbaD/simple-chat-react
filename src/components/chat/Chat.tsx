import React, { useEffect, useState } from 'react';
import './chat.css';

interface mProps {
    message: string[],
    id: string
}
interface Props {
    messages: string[][],
    id: string,
    handleSetMessages: (id: string, chat: string) => void;
    loadOldMessages: () => void;
}

interface oldProps {
    loadOldMessages: () => void;
}

function Chat({ messages, id, handleSetMessages, loadOldMessages }: Props) {
    const [chat, setChat] = useState('');
    // const messageRef = useRef(null);

    let messageList = messages.map((msg, index)=>{
        return msg.length < 2 ? null : <ChatMessage message={ msg } id={ id }/>
    })
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

    const handleScroll = () => {
        const element = document.getElementById('base');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        handleScroll()
    }, [])

    return (
        <div className='chat'>
            <div className='header'>
                <LoadOld loadOldMessages={loadOldMessages} />
            </div>
            <div className="main">
                { messageList }
                <div id='base' />
            </div>
            <form>
                <input type="text" placeholder="..." value={chat} onChange={ handleChange }/>
                <button type="submit" className='button' onClick={ handleSubmit }>🚀</button>
            </form>
        </div>
    )
}

function LoadOld( {loadOldMessages}: oldProps ) {
    const handleLoadOld = (e: React.SyntheticEvent) => {
        e.preventDefault()
        loadOldMessages()
    }
    return (
        <button className="load-old" onClick={handleLoadOld}>Load Old</button>
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