import React from 'react'
import Blobs from './Blobs'
import { motion } from 'framer-motion'
import { useState } from 'react';

export default function Projects() {

  const [show, setShow] = useState(true);

  return (
    <>
      <Blobs />

      <section className="text-gray-400 body-font bg-transparent lg:mx-32 mb-20 lg:mb-0">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-ADLaM title-font mb-2 text-white">My Projects</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80 font-Inter">I know this projects are not as good as professionals. But I hope you will love it. Thanks for supporting me.</p>
          </div>
          {/* project 01 */}
          <div className="flex flex-wrap -m-4">
            <motion.div className="xl:w-1/3 md:w-1/2 p-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3
              }}
            >
              <a href=''>
                <button className="border border-neutral-700 border-opacity-75 p-6 rounded-xl hover:ring-2 ring-neutral-300 bg-neutral-900/30 backdrop-blur-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-neutral-800 text-white mb-4">
                    <ion-icon name="checkmark-done"></ion-icon>
                  </div>
                  <p className="text-lg text-white font-medium title-font mb-2">Project 1</p>
                  <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </button>
              </a>
            </motion.div>
            {/* project 02 */}
            <motion.div className="xl:w-1/3 md:w-1/2 p-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6
              }}
            >
              <a href=''>
                <button className="border border-neutral-700 border-opacity-75 p-6 rounded-xl hover:ring-2 ring-neutral-300 bg-neutral-900/30 backdrop-blur-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-neutral-800 text-white mb-4">
                    <ion-icon name="checkmark-done"></ion-icon>
                  </div>
                  <h2 className="text-lg text-white font-medium title-font mb-2">Project 2</h2>
                  <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </button>
              </a>
            </motion.div>
            {/* project 03 */}
            <motion.div className="xl:w-1/3 md:w-1/2 p-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.2
              }}
            >
              <a href=''>
                <button className="border border-neutral-700 border-opacity-75 p-6 rounded-xl hover:ring-2 ring-neutral-300 bg-neutral-900/30 backdrop-blur-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-neutral-800 text-white mb-4">
                    <ion-icon name="checkmark-done"></ion-icon>
                  </div>
                  <h2 className="text-lg text-white font-medium title-font mb-2">Project 3</h2>
                  <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </button>
              </a>
            </motion.div>
            {/* project 04 */}
            <motion.div className="xl:w-1/3 md:w-1/2 p-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.8
              }}
            >
              <a href=''>
                <button className="border border-neutral-700 border-opacity-75 p-6 rounded-xl hover:ring-2 ring-neutral-300 bg-neutral-900/30 backdrop-blur-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-neutral-800 text-white mb-4">
                    <ion-icon name="checkmark-done"></ion-icon>
                  </div>
                  <h2 className="text-lg text-white font-medium title-font mb-2">Project 4</h2>
                  <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </button>
              </a>
            </motion.div>
            {/* project 05 */}
            <motion.div className="xl:w-1/3 md:w-1/2 p-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 2.4
              }}
            >
              <a href=''>
                <button className="border border-neutral-700 border-opacity-75 p-6 rounded-xl hover:ring-2 ring-neutral-300 bg-neutral-900/30 backdrop-blur-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-neutral-800 text-white mb-4">
                    <ion-icon name="checkmark-done"></ion-icon>
                  </div>
                  <h2 className="text-lg text-white font-medium title-font mb-2">Project 5</h2>
                  <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </button>
              </a>
            </motion.div>
            {/* project 06 */}
            <motion.div className="xl:w-1/3 md:w-1/2 p-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 3
              }}
            >
              <a href=''>
                <button className="border border-neutral-700 border-opacity-75 p-6 rounded-xl hover:ring-2 ring-neutral-300 bg-neutral-900/30 backdrop-blur-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-neutral-800 text-white mb-4">
                    <ion-icon name="checkmark-done"></ion-icon>
                  </div>
                  <h2 className="text-lg text-white font-medium title-font mb-2">Project 6</h2>
                  <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </button>
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Alert */}
        
        {show && <motion.div className="alert shadow-lg bg-neutral-900/80 border-neutral-500 lg:w-1/2 fixed lg:left-1/2 top-60 lg:top-4"
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{
          delay: 5
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <div>
          <h3 className="font-bold text-neutral-300">Attention !</h3>
          <div className="text-xs text-neutral-300">This page is under development. Projects will be added soon.</div>
        </div>
        <button className="btn btn-sm text-neutral-300" onClick={() => setShow(!show)}>OK</button>
      </motion.div>}

      </section >

    </>
  )
}
