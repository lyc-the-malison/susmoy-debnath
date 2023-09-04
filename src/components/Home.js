import React from 'react'
import Blobs from './Blobs'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Blobs />
      <motion.section className="text-gray-400 body-font mx-3 lg:mx-24 xl:mx-36 lg:my-20 2xl:my-36"
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          duration: 0.5,
          delay: 0.4,
        }}
      >
        <div className="container flex lg:px-12 lg:py-10 lg:flex-row flex-col items-end">
          <div className="flex justify-center items-center content-center lg:hidden">
            <p className="text-neutral-300 text-3xl sm:text-4xl font-lemon">Hey!</p>
            <div className="w-3/4 sm:w-2/5 lg:w-1/12 lg:scale-0 relative left-4 sm:left-24 lg:left-0 top-4">
              <img className="object-cover object-center rounded scale-100" alt="hero" src="/Lyc.png" />
            </div>
          </div>
          <div className="container lg:flex-grow lg:w-1/2 lg:pr-6 flex flex-col text-center lg:text-right md:mb-0">
            <h1 className="scale-0 lg:scale-100 text-sm lg:text-3xl 2xl:text-4xl mb-2 font-lemon text-neutral-300">Hi
              There, <b className="font-Bellota font-bold">I'm</b></h1>
            <div>
              <p
                className="mx-4 sm:mx-20 my-2 md:my-0 font-Bellota font-bold text-3xl 2xl:text-5xl lg:hidden text-left text-white">
                I'm
              </p>
              <p
                className="mx-4 sm:mx-20 lg:mx-0 text-3xl 2xl:text-4xl font-bold text-white font-Bellota text-left lg:text-right 2xl:mb-10">
                Susmoy
                Debnath</p>
              <p className="mx-2 sm:mx-20 lg:mx-0 my-6 text-sm md:text-lg 2xl:text-2xl font-Inter">I am a student
                currently studying in class 10
                in
                Faizur Rahman Ideal Institute in Dhaka, Bangladesh. I am a young individual with a passion for
                programming and ethical hacking.</p>
            </div>
          </div>

          <div className="w-0 lg:w-1/3 scale-0 lg:scale-100">
            <img className="object-cover object-center rounded scale-100" alt="hero" src="/Lyc.png" />
          </div>
        </div>
        <motion.div className="flex justify-center py-4 lg:absolute left-56 bottom-0"
          initial={{ y: -1100 }}
          animate={{ y: 0 }}
          transition={{
            delay: "1",
          }}
        >
          <a href='https://www.facebook.com/profile.php?id=100076989741792' className="mx-2" target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 144 144" fill="none">
              <path
                d="M104.1 117.3C95.1 123.6 84 127.5 72 127.5C41.4 127.5 16.5 102.6 16.5 72C16.5 63 18.6 54.6 22.5 46.8"
                stroke="#BFBFBF" strokeWidth="9" strokeMiterlimit="10" strokeLinecap="round"
                strokeLinejoin="round" />
              <path
                d="M41.7 25.5C50.4 19.8 60.6 16.5 72 16.5C102.6 16.5 127.5 41.4 127.5 72C127.5 82.2 124.8 91.8 120 99.9"
                stroke="#BFBFBF" strokeWidth="9" strokeMiterlimit="10" strokeLinecap="round"
                strokeLinejoin="round" />
              <path
                d="M51 87H63V126.6C66 127.2 69 127.5 72 127.5C75 127.5 78 127.2 81 126.6V87H91.8C93.3 87 94.5 85.8 94.8 84.3L96 75.3C96 74.4 95.7 73.5 95.4 72.9C94.8 72.3 93.9 72 93 72H81V61.5C81 58.2 83.7 55.5 87 55.5H93C94.8 55.5 96 54.3 96 52.5V42.3C96 40.8 94.8 39.3 93.3 39.3C93 39.3 88.8 39 83.4 39C70.2 39 63 46.8 63 61.2V72H51C49.2 72 48 73.2 48 75V84C48 85.8 49.2 87 51 87Z"
                fill="#BFBFBF" />
            </svg>
          </a>
          <a href='/contact' className="mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 144 144" fill="none">
              <path d="M124.5 63.3V49.5C124.5 33 111 19.5 94.5 19.5H49.5C33 19.5 19.5 33 19.5 49.5V58.5"
                stroke="#BFBFBF" strokeWidth="9" strokeMiterlimit="10" strokeLinecap="round"
                strokeLinejoin="round" />
              <path d="M19.5 76.8V94.5C19.5 111 33 124.5 49.5 124.5H94.5C111 124.5 124.5 111 124.5 94.5V80.7"
                stroke="#BFBFBF" strokeWidth="9" strokeMiterlimit="10" strokeLinecap="round"
                strokeLinejoin="round" />
              <path
                d="M72 46.5C57.9 46.5 46.5 57.9 46.5 72C46.5 86.1 57.9 97.5 72 97.5C86.1 97.5 97.5 86.1 97.5 72C97.5 57.9 86.1 46.5 72 46.5Z"
                stroke="#BFBFBF" strokeWidth="9" strokeMiterlimit="10" />
              <path
                d="M102 36C98.7 36 96 38.7 96 42C96 45.3 98.7 48 102 48C105.3 48 108 45.3 108 42C108 38.7 105.3 36 102 36Z"
                fill="#BFBFBF" />
            </svg>
          </a>
          <a href='/projects' className="mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 144 144" fill="none">
              <path
                d="M134.1 30.9C133.2 30 132 29.7 130.8 30.3L130.2 30.6C129.9 30.9 129.3 30.9 129 31.2C130.2 29.4 131.1 27.3 132 24.9C132.3 23.7 132 22.5 131.1 21.6C130.2 20.7 128.7 20.7 127.8 21.3C123 24.3 118.5 26.1 113.7 27L111 27.6C117.3 32.1 121.5 39.6 121.5 48C121.5 48.3 121.5 48.9 121.5 49.2L121.8 48.9C131.1 41.1 134.4 34.8 134.7 34.5C135.3 33.3 135 31.8 134.1 30.9Z"
                fill="#BFBFBF" />
              <path
                d="M49.5 100.5C49.5 100.5 39 109.5 13.5 109.5C13.5 109.5 24 121.5 52.5 121.5C72.3 121.5 87.3 114 98.1 103.5"
                stroke="#BFBFBF" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M38.7 42.3C27.6 34.8 24 25.5 24 25.5C24 25.5 19.5 31.5 19.5 40.5C19.5 55.5 31.5 61.5 31.5 61.5C22.5 61.5 16.5 58.5 16.5 58.5C16.5 58.5 18 75 37.5 82.5L25.5 85.5C25.5 85.5 31.5 96 49.5 100.5"
                stroke="#BFBFBF" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M111 86.4C118.2 73.5 121.5 59.1 121.5 48C121.5 33.9 110.1 22.5 96 22.5C81.9 22.5 70.5 33.9 70.5 48V52.5C64.5 52.2 59.4 51.3 54.9 50.1"
                stroke="#BFBFBF" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

      </motion.section>

    </>
  )
}