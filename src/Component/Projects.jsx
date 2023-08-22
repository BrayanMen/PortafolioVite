import React, { useEffect } from 'react'

export default function Projects({setActiveSection}) {
    useEffect(() => {
        setActiveSection('projects'); 
      }, [setActiveSection]);

  return (
    <div>Projects</div>
  )
}
