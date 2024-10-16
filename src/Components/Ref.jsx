import React from 'react'
import { useState, useEffect } from 'react'
import { useRef } from 'react'

const Ref = () => {

const [username, setUsername] = useState('')
const inputRef = useRef()
const previousRef = useRef()
useEffect(() => {
  previousRef.current = username
}, [username])

const focusButton =() => {

    inputRef.current.focus()
}

const selectButton =() => {

    inputRef.current.select()
}
const selectPointer =() => {

    inputRef.current.blur()
}




  return (
    <div className='w-screen h-full'>
   
        <label className='ml-20 text-green-800 font-bold'>Username: {username} & Previous state: {previousRef.current}</label>
        <input className='ml-8' placeholder='Username' ref={inputRef} type='text' value={username} name='username' onChange={(e) => {setUsername(e.target.value)}}></input>
        <button className='ml-20' onDoubleClick={focusButton}>Focus</button>
        <button className='ml-20' onClick={selectButton}>Select Form Value</button>
        <button className='ml-20' onPointerEnter={selectPointer}>Lose Focus</button>







    </div>
  )
}

export default Ref
