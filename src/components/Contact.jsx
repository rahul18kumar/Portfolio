import React from 'react'
import {motion} from 'framer-motion'
import { FaDribbble, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'


const Contact = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id='contact'
      className='py-20 bg-dark-100'>
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4 '>
                Get In <span className='text-purple'>Touch</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                Have a project in mind or want to collaborate ? Let's talk!
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                {/* contact form */}
                <div >
                    <form className='space-y-6'>
                        <div>
                            <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                            <input type="text" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                        </div>                    
                        <div>
                            <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                            <input type="email" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                        </div>         
                        <div>
                            <label htmlFor="messege" className='block text-gray-300 mb-2'>Your Messege</label>
                            <textarea type="messege" className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                        </div>
                        <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>Send Messege</button>
                    </form>
                </div>
                {/* contact Info */}
                <div className='space-y-8 mx-auto'>
                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaMapMarkerAlt/>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Location</h3>
                            <p className='text-gray-400'>New Delhi, India</p>
                        </div>
                    </div>

                    <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaEnvelope/>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Email</h3>
                            <p className='text-gray-400'>rk4955528@gmail.com</p>
                        </div>
                    </div>

                      <div className='flex items-start'>
                        <div className='text-purple text-2xl mr-4'>
                            <FaPhone/>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                            <p className='text-gray-400'>+91 89690-54638</p>
                        </div>
                    </div>

                        <div className='pt-4'>
                            <h3 className='text-lg font-semibold mb-4 mx-10'>Follow me</h3>
                            <div className='flex space-x-4'>
                                <a href="https://github.com/rahul18kumar" target='blank' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'>
                                    <FaGithub/>
                                </a>
                                 <a href="https://www.linkedin.com/in/rahul18kumar" target='blank' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-orange hover:bg-orange-400 hover:text-white transition duration-300'>
                                    <FaLinkedin/>
                                </a>
                                 <a href="https://x.com/rahulku_18" target='blank' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300'>
                                    <FaTwitter/>
                                </a>
                            </div>
                        </div>

                </div>
            </div>
        </div>

    </motion.div>
  )
}

export default Contact