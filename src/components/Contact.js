import React, { useState } from 'react'
import Blobs from './Blobs'
import { motion } from 'framer-motion'

export default function Contact() {

  const [show, setShow] = useState(false);
  const [submit, setSubmit] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { username, email, message } = userData;

    if (username && email && message) {
      const res = fetch(
        "https://susmoy-debnath-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          username: "",
          email: "",
          message: "",
        });
        setSubmit(true);
      } else {
        setShow(true);
      }
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <Blobs />
      <section className="text-gray-600 body-font relative" style={{ backgroundImage: `url(/map.png)` }}>
        <motion.form method='POST' className="container px-4 py-20 2xl:py-36 mx-auto"
          initial={{ y: 2000 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-ADLaM title-font mb-4 text-gray-200">Feel Free To Contact</h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                  <input type="text" id="name" name="username" autoComplete='off' required className="w-full bg-transparent backdrop-blur-md opacity-80 rounded-lg border border-neutral-700 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400 text-base outline-none text-neutral-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={userData.username} onChange={postUserData} />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                  <input type="email" id="email" name="email" autoComplete='off' required className="w-full bg-transparent backdrop-blur-md opacity-80 rounded-lg border border-neutral-700 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400 text-base outline-none text-neutral-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={userData.email} onChange={postUserData} />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                  <textarea id="message" name="message" autoComplete='off' required className="w-full bg-transparent backdrop-blur-md opacity-80 rounded-lg border border-neutral-700 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400 h-32 text-base outline-none text-neutral-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={userData.message} onChange={postUserData}></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-neutral-400 font-ADLaM bg-transparent border-2 border-neutral-600 py-2 px-8 hover:border-white hover:text-white ring-white active:scale-95 transition-all rounded-lg text-lg"
                  onClick={submitData} type="submit">Send</button>
              </div>
            </div>
          </div>
        </motion.form>

        {show && <motion.div className="alert shadow-lg bg-neutral-900/80 border-neutral-500 lg:w-1/2 fixed lg:left-1/2 top-60 lg:top-4"
          initial={{ x: 2000 }}
          animate={{ x: 0 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <div>
            <h3 className="font-bold text-neutral-300">Please fill the form !</h3>
          </div>
          <button className="btn btn-sm text-neutral-300" onClick={() => setShow(!show)}>OK</button>
        </motion.div>}

        {submit && <motion.div className="alert shadow-lg bg-neutral-900/80 border-neutral-500 lg:w-1/2 fixed lg:left-1/2 top-60 lg:top-4"
          initial={{ x: 2000 }}
          animate={{ x: 0 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <div>
            <h3 className="font-bold text-neutral-300">Submitted Successfully</h3>
            <p className="text-neutral-300 text-sm">Thanks for contacting me. You will receive a reply in your mail soon.</p>
          </div>
          <button className="btn btn-sm text-neutral-300" onClick={() => setSubmit(!submit)}>OK</button>
        </motion.div>}
      </section>

    </>
  )
}
