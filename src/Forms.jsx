import React from 'react'
import { useState } from 'react'

const Forms = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handlesubmit =(e) => {

        e.preventDefault()
        axios.post('endpoint',{username,password})
    }
  return (
    <div className='w-screen h-full'>
    <form className='bg-cyan-300 h-40 w-60'>
        <label>Username</label>
        <input placeholder='Username' type='text' value={username} name='username' onChange={(e) => {setUsername(e.target.value)}}></input>

        <label>Password</label>
        <input placeholder='Password' type='password' value={password} name='password' onChange={(e) => {setPassword(e.target.value)}}></input> <br></br>

        <button onClick={handlesubmit}>Submit</button>


    </form>




    </div>
  )
}

export default Forms