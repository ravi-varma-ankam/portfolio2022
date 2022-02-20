import React from 'react'
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import photo from '../images/boy.png'

const Card = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col justify-center  mx-auto max-w-xs dark:bg-gray-800 dark:text-white bg-white shadow-xl rounded-xl p-5 pt-2 ">
        <div className=" mx-auto">
          <img
            src={photo}
            alt="photo"
            className="w-60 shadow-xl dark:hover:bg-gray-700 hover:shadow-2xl dark:bg-gray-600 drop-shadow-sm rounded-full"
          />
        </div>

        <div className=" text-center mt-5  ">
          <p className=" text-xl sm:text-2xl text-gray-900 hover:text-gray-600 dark:text-white font-bold hover:shadow-xl">
            {' '}
            Ravi Varma Ankam
          </p>

          <p className=" text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 dark:text-white w-auto inline-block border-b-2 ">
            {' '}
            React Developer
          </p>

          <div className="flex  align-center justify-center mt-4  space-x-3">
            <a
              className=" text-xl text-gray-800 hover:bg-gray-900 rounded-full hover:text-white transition-colors dark:text-white dark:hover:text-gray-800 dark:hover:bg-white  duration-200"
              href="https://www.github.com/ravi-varma-ankam"
              target="_blank"
            >
              <FaGithub />
            </a>
            {/* <span className='sr-only lg:not-sr-only '>LinkedIn</span> */}

            <a
              className=" text-xl text-gray-800 hover:bg-gray-900 dark:text-white dark:hover:text-gray-800 dark:hover:bg-white  rounded-full hover:text-white transition-colors duration-200 "
              href="https://www.instagram.com/ravi.varma.ankam"
              target="_blank"
            >
              <FaInstagram />
            </a>
            {/* <span className='sr-only lg:not-sr-only '>LinkedIn</span> */}

            <a
              className=" text-xl text-gray-800 hover:bg-gray-900 dark:text-white dark:hover:text-gray-800 dark:hover:bg-white rounded-full hover:text-white transition-colors duration-200"
              href="https://www.linkedin.com/in/ravi-varma-ankam"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            {/* <span className='sr-only lg:not-sr-only '>LinkedIn</span> */}

            <a
              className=" text-xl text-gray-800 hover:bg-gray-900 dark:text-white dark:hover:text-gray-800 dark:hover:bg-white rounded-full hover:text-white transition-colors duration-200"
              href="https://www.twitter.com/ravivarmaankam1"
              target="_blank"
            >
              <FaTwitter />
            </a>
            {/* <span className='sr-only lg:not-sr-only '>LinkedIn</span> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
