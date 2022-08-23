import React from 'react'

function Cards({ project }) {
  return (
    <div className='w-96 h-[514px] relative bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  transition hover:animate-pulse'>
      <a href={project.url} target='_blank' rel='noreferrer'>
        {/* <!-- Image --> */}
        <div className='h-auto w-auto max-h-52 max-w-96 relative group flex align-center justify-center'>
          <img
            className='rounded-t-lg max-w-sm max-h-sm h-auto w-auto'
            src={require(`../assets/images/proj-imgs/${project.image}`)}
            alt=''
          />
        </div>
        <div className='pt-5 px-5 '>
          {/* <!-- Project Title --> */}
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {project.name}
          </h5>
          {/* <!-- Project Description --> */}
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            {project.description}
            <br />
            <br />
            <br />
          </p>
          {/* <!-- Logos --> */}
          <div className='absolute left-0 bottom-0 container flex flex-row p-5 mx-auto space-x-8 items-center justify-center'>
            {project.tools.map((item) => (
              <div className='container flex flex-col mx-auto items-center'>
                <img
                  src={require(`../assets/images/prog-lang-logos/${item.img}`)}
                  alt=''
                  className='max-h-14'
                />
                <h2 className='text-sm text-greyIsh'>{item.tool}</h2>
              </div>
            ))}
          </div>
        </div>
      </a>
    </div>
  )
}

export default Cards
