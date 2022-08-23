import { render } from '@testing-library/react'
import React from 'react'
import logo from '../assets/images/navbar-logo.png'
import { Link } from 'react-scroll'
import resumePdf from '../assets/pdf/ADiepResume.pdf'

function NavBar() {
  return (
    <nav className='sticky p-2 z-50 object-top bg-black top-0 '>
      <div className='flex items-center justify-between'>
        {/* <!-- Logo --> */}
        <div className='p-2'>
          <a href='index.html'>
            <img
              src={logo}
              alt='Logo'
              width='100'
              className='hover:animate-bounce'
            />
          </a>
        </div>
        {/* <!-- Menu Items --> */}
        <div className='hidden md:flex space-x-10'>
          <Link
            to='about'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='link link-hoverMe text-greyIsh'
          >
            About Me
          </Link>
          <Link
            to='projects'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='link link-hoverMe text-greyIsh'
          >
            Projects
          </Link>
          <Link
            to='skills'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className='link link-hoverMe text-greyIsh'
          >
            Skills
          </Link>
          <a
            href={resumePdf}
            target='_blank'
            rel='noreferrer'
            className='link link-hoverMe text-greyIsh'
          >
            Resume
          </a>
        </div>

        {/* <!-- Button --> */}
        <a
          href='#contact'
          className='hidden md:block p-3 px-6 text-winter bg-lightBlue rounded-full baseline hover:bg-lightGrey hover:text-winter transition'
        >
          Contact
        </a>
      </div>
    </nav>
  )
}

export default NavBar
