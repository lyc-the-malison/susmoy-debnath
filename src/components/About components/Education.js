import React from 'react'
import { motion } from 'framer-motion'

export default function Education() {
    return (
        <div>
            <motion.div className="flex flex-col text-center w-full p-4 border-b"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5
                }}
            >
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-white font-ADLaM">
                    Education
                </h1>
            </motion.div>
            <motion.div className='md:flex'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    duration: 1,
                    delay: 0.2
                }}
            >
                <div className='m-4 text-justify lg:w-1/2'>
                    <img className='rounded-xl mb-4 lg:w-1/2' src="/gsc.jpg" alt="" />
                    <h1 className='text-2xl font-Quicksand font-bold border-b-2 border-neutral-400 pb-1 mb-4'>College</h1>
                    <p className='font-Inter'>'Government Science College' is a very well-known name in producing skilled manpower by conducting the education program in a life-oriented, contemporary, scientific and well-planned manner. The principal, vice-principal and experienced teaching staff of the college are always eager to spread the light of their skills and knowledge among the students. The aim of this college is to create science-minded, modern and competent citizens who can successfully face the challenges of the 21st century and present the country in a bright light before the world.</p>

                </div>
                <div className='m-4 text-justify lg:w-1/2'>
                    <img className='rounded-xl mb-4 lg:w-1/2' src="/frii.jpg" alt="" />
                    <h1 className='text-2xl font-Quicksand font-bold border-b-2 border-neutral-400 pb-1 mb-4'>High School</h1>
                    <p className='font-Inter'>Faizur Rahman Ideal Institute is an educational institute situated in Dhaka, Bangladesh. It has three campuses. It was founded in 1998 by Md Faizur Rahman, an eminent educationist and former founder and Principal of Motijheel Ideal School and College, Dhaka with a mission to introduce the students to their Creator as well as to provide modern education on the basis of religious context for making them worthy citizens.</p>

                </div>
                <div className='m-4 text-justify lg:w-1/2'>
                    <img className='rounded-xl mb-4 lg:w-1/2' src="/pallima.jpg" alt="" />
                    <h1 className='text-2xl font-Quicksand font-bold border-b-2 border-neutral-400 pb-1 mb-4'>School</h1>
                    <p className='font-Inter'>Shahid Babul Academy is an educational wing of the prestigious social organization Pallima Sangsad of Khilgaon Residential Area, Dhaka. It is named after the freedom fighter Shahid Amirus Salam Babul who fought alongside Shahid Abdullah-Hel-Baki Bir Pratik. The school was established on 15 January, 1976. There is also a rich library, Shahid Baki Smrity Pathagar named after Shahid Abdullah-Hel-Baki Bir Pratik.</p>

                </div>
            </motion.div>
        </div>
    )
}
