import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Search() {

  const [show, setShow] = useState(false);

  return (
    <div className="flex items-center justify-center py-4 text-sm">
      <button className="flex relative -right-8 transform active:scale-75 transition-transform" onClick={() => setShow(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="#7D7D7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 21L16.65 16.65" stroke="#7D7D7D" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" />
        </svg>
      </button>
      <input type="text" placeholder="Search anything you want"
        className="w-5/6 lg:w-1/2 py-2 px-2 flex items-center justify-center rounded-2xl bg-neutral-700/30 text-white border border-1 border-[#494949] placeholder-[#7D7D7D] text-right sm:text-center" />

      {show && <motion.div className="alert shadow-lg bg-neutral-900/80 border-neutral-500 lg:w-1/2 fixed lg:left-1/2 top-60 lg:top-4"
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <div>
          <h3 className="font-bold text-neutral-300">Attention !</h3>
          <div className="text-xs text-neutral-300">This fuction is under development.</div>
        </div>
        <button className="btn btn-sm text-neutral-300" onClick={() => setShow(!show)}>OK</button>
      </motion.div>}
    </div>
  )
}
