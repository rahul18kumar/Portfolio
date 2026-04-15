import React from 'react'
import {motion} from 'framer-motion'
import { assets } from '../assets/assets'

const Dashboard = () => {
  return (
    <motion.div
     initial={{ opacity: 0, y:50 }}
     whileInView={{opacity: 1}}
    viewport={{once:true}}
    transition={{ duration: 0.6, ease: "easeOut" }}
    id="home"
    className="min-h-screen flex items-center pt-20 pb-16 
    bg-linear-to-r  from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]"
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row
      items-center justify-between '>

        {/* left section */}
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>Hi, I'm <span className='text-purple'>Rahul Kumar</span> </h1>
          <h2 className=' typewriter text-2xl md:text-2xl font-semibold mb-4'>Aspiring Software Developer</h2>
          <p className='text-lg text-gray-300 mb-8'>Bridging software development with system-level understanding to build efficient and scalable applications.
          </p>
          <div className='flex space-x-4'>
            <a href="#projects" className='px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition duration-300'>View Work</a>
            <a href="#contact" className='px-6 py-3 border border-purple-600 rounded-lg font-medium hover:bg-purple-600/20 transition duration-300 decoration-purple-300'>Contact Me</a>
          </div>
        </div>

        {/* right section */}

        <div className='md:w-1/2 flex justify-center'>
          <div className='relative w-64 h-64 md:w-80 md:h-80'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-slate-800 opacity 70'>
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
                  className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float"
                    src={assets.profile}
                    alt="Profile"
               />
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Dashboard