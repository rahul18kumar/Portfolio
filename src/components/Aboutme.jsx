import React from 'react'
import { portimg, aboutInfo } from '../assets/assets'
import { motion } from 'framer-motion'

const Aboutme = () => {
  return (
    <motion.div
  initial={{opacity:0, y:50}}
  whileInView={{opacity:1, y:0}}
  transition={{duration: 0.6, ease: 'easeOut'}}
  viewport={{once: true}}
  id='about'
  className='py-20 bg-dark-100'
>
  <div className='container mx-0 px-6'>
    {/* Heading */}
    <h2 className='text-3xl font-bold text-center mb-4'>
      About <span className='text-purple'>Me</span>
    </h2>
    <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
      Get to know more about my background and passion
    </p>

    {/* Image + My journey , Full width */}
    <div className='flex flex-col md:flex-row items-center space-between gap-12'>
      {/* image in Half width */}
      <div className='md:w-1/2 rounded-2xl overflow-hidden'>
        <motion.img
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 0.9, ease: 'easeOut'}}
        viewport={{once: false, amount: 0.2}}
        src={portimg.Img_Rahul} alt="MainImage" 
        className='w-full h-full object-cover'
        />
      </div>
      {/* text content */}
      <motion.div
      initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 0.9, ease: 'easeOut'}}
        viewport={{once: false, amount: 0.2}}
        className='md:w-1/2'
        >
            <div className='rounded-2xl p-8'>
              <h3 className='text-3xl font-semiboLD mb-6'>My Journey</h3>
              <p className='text-gray-300 mb-6'>
                 I’m a Software Developer with a background in Electronics and Communication Engineering, which has given me a strong understanding of how systems work from both hardware and software perspectives. What started as an interest in electronics gradually turned into a passion for building software and creating meaningful digital solutions.
              </p>
              <p className='text-gray-300 mb-12'>
                  Currently,Working with modern web technologies, especially the MERN stack, and enjoy developing scalable, efficient applications that solve real-world problems. I like writing clean, optimized code and continuously improving the way I design and build systems. Curious to learn system design and emerging technologies like Artificial Intelligence
              </p>
                  {/* cards   */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                  aboutInfo.map((data, index) => (
                      <div
                        key={index}
                        className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                      >
                        <div className="text-purple text-4xl mb-4">
                          <data.icon />
                        </div>

                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                      </div>
                    ))
                }
              </div>
             </div>
      </motion.div>
    </div>
  </div>
</motion.div>
  )
}

export default Aboutme