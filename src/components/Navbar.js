import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (

        <nav>
            <div className="flex justify-center">
                <ul
                    className="fixed h-14 w-auto sm:w-4/5 top-[85%] lg:w-16 2xl:h-fit lg:h-1/2 lg:left-8 lg:top-1/4 flex bg-neutral-700/30 backdrop-blur-md text-neutral-400 text-sm text-center items-center justify-center rounded-full border border-1 border-[#494949] lg:flex-col">
                    <li
                        className="mx-4 sm:mx-14 lg:my-4 2xl:my-8 transform hover:scale-125 transition-transform active:scale-75 list-none">
                        <NavLink to="/" className={"text-2xl"}>
                            <ion-icon name="home"></ion-icon>
                        </NavLink>
                    </li>
                    <li
                        className="mx-4 sm:mx-14 lg:my-4 2xl:my-8 transform hover:scale-125 transition-transform active:scale-75 list-none">
                        <NavLink to="About/Me" className={"text-2xl"}>
                            <ion-icon name="person"></ion-icon>
                        </NavLink>
                    </li>
                    <li
                        className="mx-4 sm:mx-14 lg:my-4 2xl:my-8 transform hover:scale-125 transition-transform active:scale-75 list-none">
                        <NavLink to="HallOfFrames" className={"text-2xl"}>
                            <ion-icon name="images"></ion-icon>
                        </NavLink>
                    </li>
                    <li
                        className="mx-4 sm:mx-14 lg:my-4 2xl:my-8 transform hover:scale-125 transition-transform active:scale-75 list-none">
                        <NavLink to="Projects" className={"text-2xl"}>
                            <ion-icon name="folder-open"></ion-icon>
                        </NavLink>
                    </li>
                    <li
                        className="mx-4 sm:mx-14 lg:my-4 2xl:my-8 transform hover:scale-125 transition-transform active:scale-75 list-none">
                        <NavLink to="Contact" className={"text-2xl"}>
                            <ion-icon name="mail"></ion-icon>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
