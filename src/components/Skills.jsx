import React from 'react'
import { SiReact, SiJavascript, SiTailwindcss, SiBootstrap, SiWordpress,  } from 'react-icons/si'
import { FaGit } from 'react-icons/fa'

const Skills = () => {
    return (
        <div children='max-w-4xl mx-auto justify-center py-12' id='tech'>
            <div className="text-4xl dark:text-white text-center text-black sm:text-2xl font-bold">
                Tech I use and familiar with
            </div>
            <div className='flex flex-wrap space-x-4 max-w-3xl mx-auto justify-center pt-2'>
                <div className="flex flex-col w-60 dark:bg-gray-800 bg-white shadow-2xl p-10 overflow-hidden mt-5 rounded-xl">

                    <SiReact color='#61dbfb' className=' mx-auto text-5xl'/>
                    <p className=' mt-6 text-base dark:text-white font-bold sm:text-2xl text-center'> React Js</p>

                </div>

                <div className="flex dark:bg-gray-800 flex-col w-60 bg-white shadow-2xl p-10 overflow-hidden mt-5 rounded-xl">

                    <SiJavascript color='#61dbfb' className=' mx-auto text-5xl'/>
                    <p className=' mt-6 text-base sm:text-2xl font-bold text-center'> JavaScript</p>

                </div>

                <div className="flex dark:bg-gray-800 flex-col w-60 bg-white shadow-2xl p-10 overflow-hidden mt-5 rounded-xl">

                    <SiTailwindcss color='#61dbfb' className=' mx-auto text-5xl'/>
                    <p className=' mt-6 text-base sm:text-2xl font-bold text-center'> TailwindCss</p>

                </div>

                <div className="flex dark:bg-gray-800 flex-col w-60 bg-white shadow-2xl p-10 overflow-hidden mt-5 rounded-xl">

                    <SiBootstrap color='#61dbfb' className=' mx-auto text-5xl'/>
                    <p className=' mt-6 text-base sm:text-2xl font-bold text-center'> Bootstrap</p>

                </div>

                <div className="flex dark:bg-gray-800 dark:bg-gray-800 flex-col w-60 bg-white shadow-2xl p-10 overflow-hidden mt-5 rounded-xl">

                    <SiWordpress color='#61dbfb' className=' mx-auto text-5xl'/>
                    <p className=' mt-6 text-base sm:text-2xl font-bold text-center'> Wordpress</p>

                </div>

                <div className="flex dark:bg-gray-800 flex-col w-60 bg-white shadow-2xl p-10 overflow-hidden mt-5 rounded-xl">

                    <FaGit color='#61dbfb' className=' mx-auto text-5xl'/>
                    <p className=' mt-6 text-base sm:text-2xl font-bold text-center'> Git </p>

                </div>

            </div>


        </div>
    )
}

export default Skills