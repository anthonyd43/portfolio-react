import { render } from '@testing-library/react'
import React from 'react'
import careerPic from '../assets/images/about-pic.jpg'

function About() {
  // render() {
  //   const imageStyle = {
  //     width: "300px",
  //     height: "300px",
  //     backgroundImage: "url(../assets/images/careerImg3.jpg)"
  //     backgroundSize: "cover",
  //     backgroundPosition: "top",
  //   };
  // };

  return (
    <section id='about' className=' bg-darkBlue'>
      {/* <!-- Picture & About Me --> */}
      <div className='container flex flex-col-reverse md:flex-row items-center px-6 pt-2 mx-auto mt-10 space-y-0 md:space-y-0'>
        {/* <!-- Left Side --> */}
        <div className='flex flex-col mb-32 space-y-8 md:w-1/2 items-center'>
          <h2 className='text-5xl text-greyIsh'>Anthony Diep</h2>

          {/* <!-- Image --> */}
          <div
            className='rounded-full'
            style={{
              width: '300px',
              height: '300px',
              backgroundImage: `url(${careerPic})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
          >
            {/* <img src={careerPic} className='max-h-full max-w-full ' alt='' /> */}
          </div>

          {/* <!-- Description --> */}
          <p className='max-w-sm text-center leading-7 text-greyIsh'>
            University of California, Irvine
            <br />
            B.S in Computer Science
            <br />
            Specialized in Software and Systems
          </p>
        </div>

        {/* <!-- Right Side --> */}
        <div className='flex flex-col mb-32 space-y-8 md:w-1/2 items-center'></div>
      </div>
    </section>
  )
}

export default About
