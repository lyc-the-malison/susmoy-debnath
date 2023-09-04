import React from 'react'
import { motion } from 'framer-motion'

export default function Skills() {

    return (
        <motion.div className="text-neutral-400 body-font"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            type: "spring",
            duration: 0.5,
        }}
        >
            <div className="py-6 px-6 mx-auto">
                <div className="flex flex-col text-center w-full mb-4">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white font-ADLaM">
                        My Skills
                    </h1>
                </div>
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <button className="w-full h-full flex items-center border-neutral-700 border p-4 rounded-lg text-5xl hover:ring-2 ring-neutral-300 btn" onClick={() => window.my_modal_1.showModal()}>
                            <ion-icon name="logo-python"></ion-icon>
                            <div className="flex-grow">
                                <h2 className="text-neutral-300 title-font font-medium text-lg">
                                    &nbsp;Python
                                </h2>
                            </div>
                        </button>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <button className="w-full h-full flex items-center border-neutral-700 border p-4 rounded-lg text-5xl hover:ring-2 ring-neutral-300 btn" onClick={() => window.my_modal_2.showModal()}>
                            <ion-icon name="logo-html5"></ion-icon>
                            <div className="flex-grow">
                                <h2 className="text-neutral-300 title-font font-medium text-lg">
                                    &nbsp;HTML
                                </h2>
                            </div>
                        </button>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <button className="w-full h-full flex items-center border-neutral-700 border p-4 rounded-lg text-5xl hover:ring-2 ring-neutral-300 btn" onClick={() => window.my_modal_3.showModal()}>
                            <ion-icon name="logo-css3"></ion-icon>
                            <div className="flex-grow">
                                <h2 className="text-neutral-300 title-font font-medium text-lg">
                                    &nbsp;CSS
                                </h2>
                            </div>
                        </button>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <button className="w-full h-full flex items-center border-neutral-700 border p-4 rounded-lg text-5xl hover:ring-2 ring-neutral-300 btn" onClick={() => window.my_modal_4.showModal()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={50}
                                height={50}
                                viewBox="0 0 112 67"
                                fill="none"
                            >
                                <mask
                                    id="mask0_1_8"
                                    style={{ maskType: "luminance" }}
                                    maskUnits="userSpaceOnUse"
                                    x={0}
                                    y={0}
                                    width={112}
                                    height={67}
                                >
                                    <path d="M0 0H111.667V67H0V0Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_1_8)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M55.8333 0C40.9444 0 31.6389 7.44444 27.9167 22.3333C33.5 14.8889 40.0139 12.0972 47.4583 13.9583C51.7058 15.0192 54.7415 18.1024 58.1018 21.5124C63.5756 27.0688 69.9116 33.5 83.75 33.5C98.6389 33.5 107.944 26.0556 111.667 11.1667C106.083 18.6111 99.5694 21.4028 92.125 19.5417C87.8775 18.4808 84.8418 15.3976 81.4815 11.9876C76.0078 6.43117 69.6717 0 55.8333 0ZM27.9167 33.5C13.0278 33.5 3.72222 40.9444 0 55.8333C5.58333 48.3889 12.0972 45.5972 19.5417 47.4583C23.7891 48.5212 26.8248 51.6024 30.1852 55.0124C35.6589 60.5688 41.9949 67 55.8333 67C70.7222 67 80.0278 59.5556 83.75 44.6667C78.1667 52.1111 71.6528 54.9028 64.2083 53.0417C59.9609 51.9808 56.9252 48.8976 53.5648 45.4876C48.0911 39.9312 41.7551 33.5 27.9167 33.5Z"
                                        fill="#A3A3A3"
                                    />
                                </g>
                            </svg>

                            <div className="flex-grow">
                                <h2 className="text-neutral-300 title-font font-medium text-lg">
                                    &nbsp;Tailwind CSS
                                </h2>
                            </div>
                        </button>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <button className="w-full h-full flex items-center border-neutral-700 border p-4 rounded-lg text-5xl hover:ring-2 ring-neutral-300 btn" onClick={() => window.my_modal_5.showModal()}>
                            <ion-icon name="logo-react"></ion-icon>
                            <div className="flex-grow">
                                <h2 className="text-neutral-300 title-font font-medium text-lg">
                                    &nbsp;React Js
                                </h2>
                            </div>
                        </button>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <button className="w-full h-full flex items-center border-neutral-700 border p-4 rounded-lg text-5xl hover:ring-2 ring-neutral-300 btn" onClick={() => window.my_modal_6.showModal()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={40}
                                height={40}
                                viewBox="0 0 90 90"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M77.5 90C84.405 90 90 84.405 90 77.5V12.5C90 5.595 84.405 0 77.5 0H12.5C5.5975 0 0 5.595 0 12.5V77.5C0 84.405 5.5975 90 12.5 90H77.5ZM60.575 44.375C63.6 45.2 65.95 46.75 67.575 49C69.2 51.25 70 54 70 57.25C70 63.125 68.2 67.525 64.6 70.5C60.975 73.425 55.65 74.95 48.575 75H22.5V15H45.875C53.35 15 57.75 16.9 61.65 19.725C65.55 22.55 67.5 26.675 67.5 32.05C67.5 35.15 66.8 37.8 65.425 40C63.125 43.45 60.575 44.375 60.575 44.375ZM48.125 25H37.5V38.75H48.125C51.925 38.75 55 35.675 55 31.875C55 28.075 51.925 25 48.125 25ZM37.5 65H50C54.15 65 57.5 61.65 57.5 57.5C57.5 53.35 54.15 50 50 50H37.5V65Z"
                                    fill="#A3A3A3"
                                />
                            </svg>

                            <div className="flex-grow">
                                <h2 className="text-neutral-300 title-font font-medium text-lg">
                                    &nbsp;Bootstrap
                                </h2>
                            </div>
                        </button>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <button className="w-full h-full flex items-center border-neutral-700 border p-4 rounded-lg text-5xl hover:ring-2 ring-neutral-300 btn" onClick={() => window.my_modal_7.showModal()}>
                            <ion-icon name="logo-figma"></ion-icon>
                            <div className="flex-grow">
                                <h2 className="text-neutral-300 title-font font-medium text-lg">
                                    &nbsp;Figma
                                </h2>
                            </div>
                        </button>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <button className="w-full h-full flex items-center border-neutral-700 border p-4 rounded-lg text-5xl hover:ring-2 ring-neutral-300 btn" onClick={() => window.my_modal_8.showModal()}>
                            <ion-icon name="play-circle"></ion-icon>
                            <div className="flex-grow">
                                <h2 className="text-neutral-300 title-font font-medium text-lg">
                                    &nbsp;Video Editing
                                </h2>
                            </div>
                        </button>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <button className="w-full h-full flex items-center border-neutral-700 border p-4 rounded-lg text-5xl hover:ring-2 ring-neutral-300 btn" onClick={() => window.my_modal_9.showModal()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={40}
                                height={40}
                                viewBox="0 0 80 88"
                                fill="none"
                            >
                                <path
                                    d="M51.7656 0L0 17.6016V70.3984L20 63.7969V19.7969L52 13.2031V77L0 70.3984L51.7656 88L80 81.3984V6.60156L51.7656 0Z"
                                    fill="#A3A3A3"
                                />
                            </svg>

                            <div className="flex-grow">
                                <h2 className="text-neutral-300 title-font font-medium text-lg">
                                    &nbsp;Microsoft Office
                                </h2>
                            </div>
                        </button>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <button className="w-full h-full flex items-center border-neutral-700 border p-4 rounded-lg text-5xl hover:ring-2 ring-neutral-300 btn" onClick={() => window.my_modal_10.showModal()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={45}
                                height={45}
                                viewBox="0 0 78 78"
                                fill="none"
                            >
                                <path
                                    d="M7.09091 0C3.17318 0 0 3.17318 0 7.09091V70.9091C0 74.8268 3.17318 78 7.09091 78H70.9091C74.8268 78 78 74.8268 78 70.9091V7.09091C78 3.17318 74.8268 0 70.9091 0H7.09091ZM14.1818 21.245H28.2875C35.2685 21.245 40.0456 26.0205 40.0456 33.0724C40.0456 40.0038 35.0941 44.7544 28.0174 44.7544H20.4348V56.2218H14.1818V21.245ZM20.4348 26.4801V39.5678H26.6186C31.0788 39.5678 33.6957 37.2419 33.6957 33.0724C33.6957 28.786 31.1457 26.4801 26.6394 26.4801H20.4348ZM53.9158 29.1669C60.2161 29.1669 64.1715 31.9553 64.6076 36.7772H58.964C58.5279 34.9123 56.7551 33.7234 53.9435 33.7234C51.2064 33.7234 49.1447 35.0357 49.1447 36.9503C49.1447 38.4536 50.4048 39.3737 53.071 39.9764L57.7452 41.0428C62.8117 42.1809 65.1616 44.3653 65.1616 48.2653C65.1616 53.3601 60.4832 56.755 53.8674 56.755C47.2515 56.755 43.0825 53.8904 42.6216 49.0685H48.563C49.1445 51.0327 51.0062 52.1985 54.0128 52.1985C57.0406 52.1985 59.1509 50.8665 59.1509 48.9023C59.1509 47.3991 58.0155 46.4503 55.4947 45.8901L50.7928 44.8029C45.7015 43.64 43.3072 41.2889 43.3072 37.2896C43.3072 32.489 47.6617 29.1669 53.9158 29.1669Z"
                                    fill="#A3A3A3"
                                />
                            </svg>

                            <div className="flex-grow">
                                <h2 className="text-neutral-300 title-font font-medium text-lg">
                                    &nbsp;Photoshop
                                </h2>
                            </div>
                        </button>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <button className="w-full h-full flex items-center border-neutral-700 border p-4 rounded-lg text-5xl hover:ring-2 ring-neutral-300 btn" onClick={() => window.my_modal_11.showModal()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={48}
                                height={48}
                                viewBox="0 0 131 102"
                                fill="none"
                            >
                                <path
                                    d="M28.1798 0C22.6947 0 16.8309 0.236593 10.7566 0.710431C9.2556 0.821923 8.11952 2.10451 8.17563 3.59571C8.23174 5.08691 9.46624 6.2714 10.9813 6.2714C30.4948 6.29927 48.3927 8.65376 59.8258 12.4584C56.3327 12.1657 52.7996 11.9984 49.2223 11.9984C22.5684 11.9984 2.5645 20.1102 1.73683 20.4446C0.376075 21.016 -0.312192 22.5079 0.136716 23.9015C0.52951 25.0583 1.62427 25.8096 2.80265 25.8096C3.02711 25.8096 3.25189 25.781 3.49037 25.7252C3.7008 25.6695 25.9638 20.235 48.3812 20.235C51.271 20.235 54.0485 20.3318 56.6859 20.4991C31.8697 24.4292 13.3094 38.3391 12.4115 39.022C11.2332 39.9279 10.9674 41.571 11.7951 42.7974C12.3422 43.5917 13.2234 44.025 14.1212 44.025C14.6122 44.025 15.1053 43.8978 15.5542 43.633C15.8208 43.4797 42.0524 28.1641 68.4538 28.1641C69.1833 28.1641 69.9001 28.1662 70.6156 28.1941H70.6978C67.2047 31.0928 62.6178 36.6669 62.9685 45.7534C63.4174 57.2231 71.8065 64.1209 79.9149 65.8769C83.2536 66.6016 86.1029 66.7688 88.8525 66.9221C93.9167 67.2287 98.307 67.4787 105.125 71.2555C112.742 75.4643 118.509 86.5573 119.827 99.4903C119.968 100.898 121.158 101.986 122.589 102H122.619C124.036 102 125.226 100.955 125.408 99.5611C125.493 98.8782 126.898 86.572 119.224 74.4891C122.1 77.0674 124.554 80.6483 125.367 85.5539C125.592 86.8918 126.771 87.8812 128.132 87.8812H128.173C129.562 87.8533 130.727 86.838 130.924 85.4723C130.966 85.1238 132.002 76.8438 124.918 69.2902C117.567 61.444 105.222 57.4742 88.2058 57.4742C83.0434 57.4742 79.0461 56.0669 76.3667 53.2796C73.4207 50.2276 72.509 45.9348 72.6212 43.1893C72.8036 38.7994 76.3388 33.6706 85.7098 33.6706C90.8301 33.6706 100.019 37.9471 104.423 40.2605C104.704 41.7935 105.348 43.5495 106.821 44.4414C107.214 44.6923 107.649 44.8744 108.196 45.0974C109.796 45.7803 112.476 46.9096 115.646 50.4216C116.193 51.0208 116.965 51.3416 117.737 51.3416C118.27 51.3416 118.802 51.1882 119.279 50.8816L123.501 48.1215C124.455 47.4944 124.934 46.3672 124.723 45.2662C124.499 44.1652 123.643 43.2871 122.534 43.0641C121.075 42.7575 119.237 42.0459 118.241 41.4745C118.199 40.8334 118.001 40.1772 117.58 39.5501C117.384 39.2574 117.148 38.9805 116.896 38.66C116.348 38.0189 115.617 37.1398 114.986 35.8019C114.761 35.342 114.202 34.4782 113.038 33.9347C113.36 33.6559 113.639 33.3208 113.808 32.9167C114.243 31.8714 114.005 30.6733 113.191 29.879C101.043 17.8657 90.7176 15.3569 90.2827 15.2593C90.0723 15.2036 89.8605 15.1749 89.6361 15.1749C88.4858 15.1749 87.4348 15.8864 87.014 17.0014C86.523 18.3114 87.0971 19.7896 88.3456 20.4446C88.4157 20.4725 92.2175 22.4501 96.5242 25.2652H96.442C95.7967 25.307 95.2059 25.5878 94.757 25.992C93.3962 25.4624 91.6563 24.8889 89.7484 24.5684C88.051 24.2757 86.2562 24.2343 84.6851 24.2064C83.3103 24.1785 81.2206 24.1237 80.6875 23.8171C80.5051 23.6638 80.266 23.4815 80.0135 23.2864C78.6527 22.2829 76.5899 20.7659 75.8324 11.4703C75.7763 10.7178 75.3972 10.0061 74.794 9.5323C74.317 9.14208 62.5072 0 28.1798 0ZM28.1798 2.78729C61.918 2.78729 73.0404 11.7071 73.0404 11.7071C73.9943 23.4974 77.1661 24.5287 78.9477 25.992C80.7152 27.4693 85.4279 26.6599 89.2717 27.3149C93.1154 27.9699 96.2037 29.7401 96.2037 29.7401L96.6503 28.0525C97.8848 30.9374 100.859 31.9286 100.859 31.9286V29.6558C101.967 32.3037 105.067 34.1307 105.067 34.1307V31.9558C105.067 31.9558 106.106 33.5302 107.13 34.6451C108.169 35.774 109.262 36.4008 109.262 36.4008C109.262 36.4008 109.952 36.2347 110.695 36.2347C111.396 36.2347 112.154 36.3867 112.449 36.986C113.515 39.2576 114.805 40.4439 115.254 41.0989C115.689 41.7539 115.254 42.5333 115.254 42.5333C115.984 43.8991 119.827 45.3483 121.959 45.7943L117.737 48.5543C113.22 43.5651 109.375 42.7423 108.295 42.0733C107.201 41.4044 107.032 38.5048 107.032 38.5048C107.032 38.5048 93.3693 30.8834 85.7098 30.8834C74.4169 30.8834 70.04 37.6007 69.8155 43.0777C69.5911 48.5408 72.6063 60.2615 88.2058 60.2615C106.176 60.2615 116.923 64.8603 122.871 71.1874C129.128 77.863 128.146 85.0939 128.146 85.0939C125.41 68.7465 106.821 65.4305 106.821 65.4305C125.184 78.7676 122.619 99.2127 122.619 99.2127C121.371 86.9208 115.872 74.0149 106.487 68.8166C95.32 62.6288 89.7346 65.1533 80.5039 63.1604C73.8124 61.711 66.181 56.0799 65.7742 45.6554C65.2832 33.0987 75.6653 28.2077 75.6653 28.2077L70.9088 14.7013C61.7342 7.85852 37.4949 3.51198 10.9813 3.48411C17.28 3.01027 23.0033 2.78729 28.1798 2.78729ZM49.2223 14.7857C55.3106 14.7857 61.7207 15.2178 68.3141 16.2909C68.3141 16.3049 68.3274 16.3042 68.3415 16.3181L69.073 19.3422C62.5498 17.9765 55.4515 17.4478 48.3812 17.4478C25.3325 17.4478 2.80265 23.0223 2.80265 23.0223C2.80265 23.0223 22.8209 14.7857 49.2223 14.7857ZM89.6799 17.9785C90.3533 18.1458 99.9061 20.6808 111.213 31.8578H108.843C103.316 25.1265 90.4795 18.3966 89.6799 17.9785ZM69.4237 22.2547H69.5333L70.7142 25.4068C69.9567 25.3789 69.2113 25.3768 68.4538 25.3768C41.365 25.3768 14.9654 40.7502 14.1377 41.2241C14.9092 40.6527 39.5152 22.2547 69.4237 22.2547ZM112.142 39.6481C112.142 39.6481 112.016 40.4404 112.142 40.6606C112.383 41.0843 113.824 41.665 113.824 41.665L112.142 39.6481Z"
                                    fill="#A3A3A3"
                                />
                            </svg>

                            <div className="flex-grow">
                                <h2 className="text-neutral-300 title-font font-medium text-lg">
                                    &nbsp;Kali Linux
                                </h2>
                            </div>
                        </button>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <button className="w-full h-full flex items-center border-neutral-700 border p-4 rounded-lg text-5xl hover:ring-2 ring-neutral-300 btn" onClick={() => window.my_modal_12.showModal()}>
                            <ion-icon name="shapes"></ion-icon>
                            <div className="flex-grow">
                                <h2 className="text-neutral-300 title-font font-medium text-lg">
                                    &nbsp;UI Design
                                </h2>
                            </div>
                        </button>
                    </div>
                </div>

                {/* modal 01 */}
                <dialog id="my_modal_1" className="modal">
                    <form method="dialog" className="modal-box bg-neutral-900 w-11/12 md:w-1/2 max-w-5xl">
                        <h3 className="font-bold text-2xl text-center mb-6 text-neutral-200">Python</h3>
                        <div className='flex justify-center'>
                            <p className='w-1/2 flex items-center mx-4'>I am new in this field and learning this language. As a beginner I am not perfect. But it's my favourite programing language.</p>
                            <div className="radial-progress text-xl bg-neutral-800 opacity-90" style={{ "--value": "40", "--size": "8rem", "--thickness": "0.6rem" }}>40%
                            </div>
                        </div>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                {/* modal 02 */}
                <dialog id="my_modal_2" className="modal">
                    <form method="dialog" className="modal-box bg-neutral-900 w-11/12 md:w-1/2 max-w-5xl">
                        <h3 className="font-bold text-2xl text-center mb-6 text-neutral-200">HTML</h3>
                        <div className='flex justify-center'>
                            <p className='w-1/2 flex items-center mx-4'>HTMl is not a programing language and it's so easy to learn. It's very beginner friendly. Literally I learned HTML just by playing with templates !</p>
                            <div className="radial-progress text-xl bg-neutral-800 opacity-90" style={{ "--value": "80", "--size": "8rem", "--thickness": "0.6rem" }}>80%
                            </div>
                        </div>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                {/* modal 03 */}
                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box bg-neutral-900 w-11/12 md:w-1/2 max-w-5xl">
                        <h3 className="font-bold text-2xl text-center mb-6 text-neutral-200">CSS</h3>
                        <div className='flex justify-center'>
                            <p className='w-1/2 flex items-center mx-4'>I am very new in CSS. I even don't like to use it more. But it's essential for web development. That's why I learned it.</p>
                            <div className="radial-progress text-xl bg-neutral-800 opacity-90" style={{ "--value": "50", "--size": "8rem", "--thickness": "0.6rem" }}>50%
                            </div>
                        </div>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                {/* modal 04 */}
                <dialog id="my_modal_4" className="modal">
                    <form method="dialog" className="modal-box bg-neutral-900 w-11/12 md:w-1/2 max-w-5xl">
                        <h3 className="font-bold text-2xl text-center mb-6 text-neutral-200">Tailwind CSS</h3>
                        <div className='flex justify-center'>
                            <p className='w-1/2 flex items-center mx-4'>I like Tailwind CSS the most for designing web pages. It's very easy and beginner friendly. I use it every time in web development.</p>
                            <div className="radial-progress text-xl bg-neutral-800 opacity-90" style={{ "--value": "75", "--size": "8rem", "--thickness": "0.6rem" }}>75%
                            </div>
                        </div>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                {/* modal 05 */}
                <dialog id="my_modal_5" className="modal">
                    <form method="dialog" className="modal-box bg-neutral-900 w-11/12 md:w-1/2 max-w-5xl">
                        <h3 className="font-bold text-2xl text-center mb-6 text-neutral-200">React Js</h3>
                        <div className='flex justify-center'>
                            <p className='w-1/2 flex items-center mx-4'>Actually I'm very beginner in React Js. I don't even know Javascript at all. I learned it a little bit because it gives amazing result. I will learn it properly in future.</p>
                            <div className="radial-progress text-xl bg-neutral-800 opacity-90" style={{ "--value": "20", "--size": "8rem", "--thickness": "0.6rem" }}>20%
                            </div>
                        </div>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                {/* modal 06 */}
                <dialog id="my_modal_6" className="modal">
                    <form method="dialog" className="modal-box bg-neutral-900 w-11/12 md:w-1/2 max-w-5xl">
                        <h3 className="font-bold text-2xl text-center mb-6 text-neutral-200">Bootstrap</h3>
                        <div className='flex justify-center'>
                            <p className='w-1/2 flex items-center mx-4'>It's very simple and easy to use. I think it is just copy paste task. But it can be used professionally too.</p>
                            <div className="radial-progress text-xl bg-neutral-800 opacity-90" style={{ "--value": "65", "--size": "8rem", "--thickness": "0.6rem" }}>65%
                            </div>
                        </div>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                {/* modal 07 */}
                <dialog id="my_modal_7" className="modal">
                    <form method="dialog" className="modal-box bg-neutral-900 w-11/12 md:w-1/2 max-w-5xl">
                        <h3 className="font-bold text-2xl text-center mb-6 text-neutral-200">Figma</h3>
                        <div className='flex justify-center'>
                            <p className='w-1/2 flex items-center mx-4'>It's easy for designing and I love to use it. I created many cool designs using it.</p>
                            <div className="radial-progress text-xl bg-neutral-800 opacity-90" style={{ "--value": "70", "--size": "8rem", "--thickness": "0.6rem" }}>70%
                            </div>
                        </div>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                {/* modal 08 */}
                <dialog id="my_modal_8" className="modal">
                    <form method="dialog" className="modal-box bg-neutral-900 w-11/12 md:w-1/2 max-w-5xl">
                        <h3 className="font-bold text-2xl text-center mb-6 text-neutral-200">Video Editing</h3>
                        <div className='flex justify-center'>
                            <p className='w-1/2 flex items-center mx-4'>Video editing is fun. I generally edit montage type videos, memes and sometimes documentaries.</p>
                            <div className="radial-progress text-xl bg-neutral-800 opacity-90" style={{ "--value": "60", "--size": "8rem", "--thickness": "0.6rem" }}>60%
                            </div>
                        </div>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                {/* modal 09 */}
                <dialog id="my_modal_9" className="modal">
                    <form method="dialog" className="modal-box bg-neutral-900 w-11/12 md:w-1/2 max-w-5xl">
                        <h3 className="font-bold text-2xl text-center mb-6 text-neutral-200">Microsoft Office</h3>
                        <div className='flex justify-center'>
                            <p className='w-1/2 flex items-center mx-4'>It's the thing which I learned at the very beginning of using computer. I am very familiar to this except MS Access.</p>
                            <div className="radial-progress text-xl bg-neutral-800 opacity-90" style={{ "--value": "90", "--size": "8rem", "--thickness": "0.6rem" }}>90%
                            </div>
                        </div>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                {/* modal 10 */}
                <dialog id="my_modal_10" className="modal">
                    <form method="dialog" className="modal-box bg-neutral-900 w-11/12 md:w-1/2 max-w-5xl">
                        <h3 className="font-bold text-2xl text-center mb-6 text-neutral-200">Photoshop</h3>
                        <div className='flex justify-center'>
                            <p className='w-1/2 flex items-center mx-4'>It's not easy at all for me. But I somehow learned it because I like to edit memes and photos of my friends 🐸.</p>
                            <div className="radial-progress text-xl bg-neutral-800 opacity-90" style={{ "--value": "40", "--size": "8rem", "--thickness": "0.6rem" }}>40%
                            </div>
                        </div>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                {/* modal 11 */}
                <dialog id="my_modal_11" className="modal">
                    <form method="dialog" className="modal-box bg-neutral-900 w-11/12 md:w-1/2 max-w-5xl">
                        <h3 className="font-bold text-2xl text-center mb-6 text-neutral-200">Kali Linux</h3>
                        <div className='flex justify-center'>
                            <p className='w-1/2 flex items-center mx-4'>It's OS for hacking. I like it and sounds cool too. "Lyc The Malison" it's my anonymous name. Oops, I reveled it !</p>
                            <div className="radial-progress text-xl bg-neutral-800 opacity-90" style={{ "--value": "50", "--size": "8rem", "--thickness": "0.6rem" }}>50%
                            </div>
                        </div>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                {/* modal 12 */}
                <dialog id="my_modal_12" className="modal">
                    <form method="dialog" className="modal-box bg-neutral-900 w-11/12 md:w-1/2 max-w-5xl">
                        <h3 className="font-bold text-2xl text-center mb-6 text-neutral-200">UI Design</h3>
                        <div className='flex justify-center'>
                            <p className='w-1/2 flex items-center mx-4'>I like to design user interface. It really gives amazing experience. I love it.</p>
                            <div className="radial-progress text-xl bg-neutral-800 opacity-90" style={{ "--value": "70", "--size": "8rem", "--thickness": "0.6rem" }}>70%
                            </div>
                        </div>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>

            </div>
        </motion.div>

    )
}
