import React from 'react'
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=" py-5 border-t-3">
      <div className="flex justify-center mt-4 space-x-4">
        <a
          className=" text-xl dark:text-white dark:hover:text-gray-800 dark:hover:bg-white  text-gray-800 hover:bg-gray-900 rounded-full hover:text-white transition-colors duration-200"
          href="https://www.github.com/ravi-varma-ankam"
          target="_blank"
        >
          <FaGithub />
        </a>
        {/* <span className='sr-only lg:not-sr-only '>LinkedIn</span> */}

        <a
          className=" text-xl dark:text-white dark:hover:text-gray-800 dark:hover:bg-white  text-gray-800 hover:bg-gray-900 rounded-full hover:text-white transition-colors duration-200 "
          href="https://www.instagram.com/ravi.varma.ankam"
          target="_blank"
        >
          <FaInstagram />
        </a>
        {/* <span className='sr-only lg:not-sr-only '>LinkedIn</span> */}

        <a
          className=" text-xl dark:text-white dark:hover:text-gray-800 dark:hover:bg-white  text-gray-800 hover:bg-gray-900 rounded-full hover:text-white transition-colors duration-200"
          href="https://www.linkedin.com/in/ravi-varma-ankam"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        {/* <span className='sr-only lg:not-sr-only '>LinkedIn</span> */}

        <a
          className=" text-xl dark:text-white dark:hover:text-gray-800 dark:hover:bg-white  text-gray-800 hover:bg-gray-900 rounded-full hover:text-white transition-colors duration-200"
          href="https://www.twitter.com/ravivarmaankam1"
          target="_blank"
        >
          <FaTwitter />
        </a>
        {/* <span className='sr-only lg:not-sr-only '>LinkedIn</span> */}
      </div>
      <div className="flex justify-center text-xl mt-3">
        <p>Made with 💙 by <span className=' text-blue-500 hover:text-red-500'> Ravi Varma Ankam </span></p>
      </div>
    </div>
  )
}

export default Footer
