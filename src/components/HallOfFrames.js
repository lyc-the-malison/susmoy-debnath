import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react';

export default function HallOfFrames() {

  const [show, setShow] = useState(true);

  return (
    <>
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
          <div className="text-xs text-neutral-300">This page is under development.</div>
        </div>
        <button className="btn btn-sm text-neutral-300" onClick={()=> setShow(!show)}>OK</button>
      </motion.div>}

      <div className='mb-24 lg:mb-0'>
        <motion.div className='flex justify-center'
          initial={{ y: 2000 }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.3
          }}
        >
          <h1 className='text-white font-ADLaM lg:text-3xl text-2xl text-center m-2 p-2 w-4/5 md:w-1/3 border border-dashed rounded-2xl'>
            Hall of Frames</h1>
        </motion.div>
        <motion.div className="container mx-auto p-4 md:p-8 gallerys"
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 1.8
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div className='cursor-pointer' onClick={() => window.my_modal_1.showModal()}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://picsum.photos/700/1000"
                  alt=""
                />

              </div>
              <div className='cursor-pointer' onClick={() => window.my_modal_2.showModal()}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://picsum.photos/700/600"
                  alt=""
                />

              </div>
              <div className='cursor-pointer' onClick={() => window.my_modal_3.showModal()}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://picsum.photos/800"
                  alt=""
                />

              </div>
            </div>
            <div className="grid gap-4">
              <div className='cursor-pointer' onClick={() => window.my_modal_4.showModal()}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://picsum.photos/700/400"
                  alt=""
                />

              </div>
              <div className='cursor-pointer' onClick={() => window.my_modal_5.showModal()}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://picsum.photos/700/650"
                  alt=""
                />

              </div>
              <div className='cursor-pointer' onClick={() => window.my_modal_6.showModal()}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://picsum.photos/800/1200"
                  alt=""
                />

              </div>
            </div>
            <div className="grid gap-4">
              <div className='cursor-pointer' onClick={() => window.my_modal_7.showModal()}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://picsum.photos/500"
                  alt=""
                />

              </div>
              <div className='cursor-pointer' onClick={() => window.my_modal_8.showModal()}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://picsum.photos/600/1000"
                  alt=""
                />

              </div>
              <div className='cursor-pointer' onClick={() => window.my_modal_9.showModal()}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://picsum.photos/600/300"
                  alt=""
                />

              </div>
            </div>
            <div className="grid gap-4">
              <div className='cursor-pointer' onClick={() => window.my_modal_10.showModal()}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://picsum.photos/600/400"
                  alt=""
                />

              </div>
              <div className='cursor-pointer' onClick={() => window.my_modal_11.showModal()}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://picsum.photos/600/800"
                  alt=""
                />

              </div>
              <div className='cursor-pointer' onClick={() => window.my_modal_12.showModal()}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://picsum.photos/700"
                  alt=""
                />

              </div>
            </div>
          </div>
        </motion.div>

        {/* modals 1*/}
        <dialog id="my_modal_1" className="modal bg-transparent">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
            <img src="https://picsum.photos/700/1000" alt="image" />
          </form>
        </dialog>
        {/* modals 2*/}
        <dialog id="my_modal_2" className="modal bg-transparent">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
            <img src="https://picsum.photos/700/600" alt="image" />
          </form>
        </dialog>
        {/* modals 3*/}
        <dialog id="my_modal_3" className="modal bg-transparent">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
            <img src="https://picsum.photos/800" alt="image" />
          </form>
        </dialog>
        {/* modals 4*/}
        <dialog id="my_modal_4" className="modal bg-transparent">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
            <img src="https://picsum.photos/700/400" alt="image" />
          </form>
        </dialog>
        {/* modals 5*/}
        <dialog id="my_modal_5" className="modal bg-transparent">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
            <img src="https://picsum.photos/700/650" alt="image" />
          </form>
        </dialog>
        {/* modals 6*/}
        <dialog id="my_modal_6" className="modal bg-transparent">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
            <img src="https://picsum.photos/800/1200" alt="image" />
          </form>
        </dialog>
        {/* modals 7*/}
        <dialog id="my_modal_7" className="modal bg-transparent">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
            <img src="https://picsum.photos/500" alt="image" />
          </form>
        </dialog>
        {/* modals 8*/}
        <dialog id="my_modal_8" className="modal bg-transparent">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
            <img src="https://picsum.photos/600/1000" alt="image" />
          </form>
        </dialog>
        {/* modals 9*/}
        <dialog id="my_modal_9" className="modal bg-transparent">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
            <img src="https://picsum.photos/600/300" alt="image" />
          </form>
        </dialog>
        {/* modals 10*/}
        <dialog id="my_modal_10" className="modal bg-transparent">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
            <img src="https://picsum.photos/600/400" alt="image" />
          </form>
        </dialog>
        {/* modals 11*/}
        <dialog id="my_modal_11" className="modal bg-transparent">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
            <img src="https://picsum.photos/600/800" alt="image" />
          </form>
        </dialog>
        {/* modals 12*/}
        <dialog id="my_modal_12" className="modal bg-transparent">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
            <img src="https://picsum.photos/700" alt="image" />
          </form>
        </dialog>
      </div>
    </>
  )
}