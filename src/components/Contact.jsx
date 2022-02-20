import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className=' max-w-lg w-full text-center  mx-auto pt-36 pb-10'>
        <h1 className=' text-4xl'>Interested in working together ?</h1>

        <a href="mailto:ravivarmaankam@gmail.com">
            <span className=' mt-10 inline-block w-auto text-white text-base py-4 px-7 cursor-pointer md:text-xl bg-black'>

                <div className="flex flex-row items-center">
                    <span className="mr-3">
                        Get in touch 
                    </span>
                    <FaArrowRight color='white'/>
                </div>

            </span>
        </a>

    </div>
  )
}

export default Contact