import React, { useState  } from "react";
import './login.css';

interface Props {
  handleSetId: (id: string) => void;
}

function Login( { handleSetId}: Props ) {
  const [name, setName] = useState('');


  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setName(e.currentTarget.value)
  }
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!name) {
      return alert("Name can't be empty");
    }
    handleSetId(name.toLowerCase())
  }

  return (
    <div className='login'>
        <h2>Get Started</h2>
        <input type="text" placeholder='username' onChange={ handleChange } />
        <button type='button' className='button' onClick={ handleSubmit }>
        Login</button>
        <p className='text'>Thanks for having me! 😃</p>
    </div>
  )
}


export default Login