import React from 'react'

export default function Error() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className='scale-75'>
                <img src="/404.png" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center mx-4">
                <p className="text-3xl md:text-4xl lg:text-5xl text-neutral-300 font-Inter">Oops! Page Not Found</p>
                <p className="md:text-lg lg:text-xl text-neutral-400 mt-8 text-center font-Inter">Sorry, the page you are looking for could not be found.</p>
                <a href="/" className="flex items-center space-x-2 bg-neutral-600 hover:bg-neutral-700 text-gray-100 px-4 py-2 mt-12 rounded-lg transition duration-150" title="Return Home">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                    </svg>
                    <span>Return Home</span>
                </a>
            </div>
        </div>
    )
}
