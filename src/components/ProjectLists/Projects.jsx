import React from 'react'
import ProjectsItem from './ProjectItem'

export default function Projects() {
  const projects = [
    {
      name: 'Project 1',
      description: '',
      path: '',
    }
  ]
  return (
    <section className='dr-projects'>
      <ul className='list'>
        {
          projects.map((project, index) => {
            return <ProjectsItem key={index} project={project} />
          })
        }
      </ul>
    </section>
  )
}
