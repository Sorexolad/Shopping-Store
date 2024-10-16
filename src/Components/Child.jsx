import React from 'react'
import { useContext } from 'react'
import DataContext from './DataContext'

const Child = () => {
    const student = useContext(DataContext)
  return (
    <div>
      {student.name} {student.age}
    </div>
  )
}

export default Child
