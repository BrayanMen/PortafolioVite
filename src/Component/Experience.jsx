import React, { useEffect } from 'react'

export default function Experience({setActiveSection}) {
    useEffect(() => {
        setActiveSection('experience'); 
      }, [setActiveSection]);
  return (
    <div >Experience</div>
  )
}
