import React from 'react'
import Students from '../components/Students'

export default function Home({students}) {
  return (
    <div>
      {students != null  ?  <Students students={students}/> : "no students to show"}
    </div>
  )
}
