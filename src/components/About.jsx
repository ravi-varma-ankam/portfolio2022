import React from 'react'
import scrollIntoView from 'scroll-into-view'
import { FaChevronDown } from 'react-icons/fa'

const About = () => {
  return (
    <div className=' max-w-4xl mt-14 mx-auto'>
        
    <p className=' text-2xl text-black dark:text-white md:text-4xl font-bold text-center'>
        Hey 👋
    </p>  

    <p className=' text-sm text-gray-800 dark:text-white mt-4 leading-relaxed md:text-xl text-center'>
        I'm a passionate react web developer who loves to build things using code
    </p>   
    <a href="#tech">
    <scrollIntoView selector = '#tech'>
        <div className="mx-auto p-20">
            <FaChevronDown className=' animate-bounce mx-auto text-3xl text-blue-500'/>
        </div>    
    </scrollIntoView>   
    </a> 
    </div>
  )
}

export default About