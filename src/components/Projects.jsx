import React from 'react'
import Cards from './Cards'
import projects from '../data/projectData'

function Projects() {
  return (
    <section id='projects' className='bg-darkBlue'>
      <h1 class='text-center text-3xl text-greyIsh'>Projects</h1>

      <div class='container flex flex-col md:flex-row items-center px-6 pt-2 mx-auto mt-10 space-y-0 max-w-screen-lg md:space-y-0'>
        {/* <!-- Left Side --> */}
        <div class='flex flex-col space-y-8 px-3 md:w-1/2 items-center'>
          <Cards project={projects[0]} />
          <Cards project={projects[1]} />
        </div>

        {/* <!-- Right Side --> */}
        <div class='flex flex-col space-y-8 py-7 px-3 md:w-1/2 items-start '>
          <Cards project={projects[2]} />
          <Cards project={projects[3]} />
        </div>
      </div>
    </section>
  )
}

export default Projects
