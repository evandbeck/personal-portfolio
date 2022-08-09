import React from 'react'
import ProjectCard from './ProjectCard'

let projects = ["Project 1", "Project 2", "Project 3"]

const displayProjectCards = projects.map(project => <ProjectCard {...project}/>)

function Projects() {
  return (
    <div>
      <p>Here are some of my projects.</p>
      {displayProjectCards}
    </div>
  )
}

export default Projects