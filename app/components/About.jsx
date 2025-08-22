import React from 'react'
import {Dancing_Script } from 'next/font/google'
import { AboutCard } from '../atoms'
import {easeIn, motion} from 'motion/react'

const edu = Dancing_Script({
    subsets: ["latin"],
    weight: "700"
})

const About = () => {
  return (
    <section id='about' className='relative mx-auto max-w-[1280px] bg-bgone scroll-mt-[74px]'>
      <div className='w-full p-5 flex justify-center items-center text-white flex-col bg-black'>
        <motion.p 
        initial={{opacity: 0, x:-100}}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{duration: 1, ease: easeIn, type: 'spring'}}
        viewport={{ once: true, amount: 0.2 }}
        className={`w-[50%] max-md:w-[90%] ${edu.className} text-[20px] leading-relaxed`}>
          "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." -- Martin Fowler
        </motion.p>
      </div>
      <div className='mt-5 py-2'>
        <div className='px-5'>
          <AboutCard />
        </div>
      </div>
    </section>
  )
}

export default About
