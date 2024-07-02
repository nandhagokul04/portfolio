import { useState } from "react"
import nandha from "./assests/Nandha.png"
import html from './assests/html1.png'
import css from './assests/css1.jpg'
import js from './assests/js1.png'
import react from './assests/react.png'
import tailwind from './assests/download.jpg'
import java from './assests/download (1).png'
import hibernate from './assests/images.png'
import spring from './assests/download (2).png'
import springboot from './assests/download (3).png'
import sql from './assests/download (4).png'
import git from './assests/git.png'
import github from './assests/githiub.png'
import bitbucket from './assests/bitbucket.png'
import vscode from './assests/vscode.jpg'
import eclipse from './assests/ecplise.png'
import resume from './assests/Nandhagokul S- Resume.pdf'
import ecom from './assests/ecommerce.jpg'
import bookspot from './assests/bookstore.png'
import hoobank from './assests/hoobank.png'
import ency from './assests/ency.png'
import './Landingpage.css';

export default function Landingpage() {
    let [mobview, setmobview] = useState("hidden")
    var clickmobilenav = () => {
        if (mobview === "hidden") {
            setmobview("")
        }
        else {
            setmobview("hidden")
        }
    }
    return (
        <div className="full-page text-zinc-50 md:pb-5  px-0 pb-3">
            <navbar>
                <container className=" md:border-b border-zinc-500 w-full py-5 flex justify-between sticky top-0 px-5 md:px-10 navbar">
                    <div >
                        <a className=" md:text-2xl" href=""><b>Nandhagokul S</b></a>
                    </div>
                    <div className="hidden lg:flex mt-1">
                        <a className="mx-8 hover:underline" href="#">Home</a>
                        <a className="mx-8  hover:underline" href="#about">About</a>
                        <a className="mx-8  hover:underline" href="#skills">Skills</a>
                        <a className="mx-8  hover:underline" href="#projects">Projects</a>
                        <a className="mx-8  hover:underline" href={resume} download="Nandhagokul S-Resume">Resume</a>
                    </div>
                    <div className="hidden lg:flex">
                        <button className="border rounded-xl border-[#2563EB] p-1 px-2 hover:border-white">Contact me</button>
                    </div>
                    <div>
                        <button onClick={clickmobilenav} class="lg:hidden hover:border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-[#2563EB]" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                    </div>
                </container>
                <div className={`px-5 md-px-0 lg:hidden ${mobview} flex sticky top-16 justify-evenly mobnav`}>
                    <a className="border-b border-white lg:p-1 lg:m-2 m-1 hover:border-[#2563EB]" href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    </a>
                    <a className="border-b border-white lg:p-1 lg:m-2 m-1 hover:border-[#2563EB]" href="#about">About</a>
                    <a className="border-b border-white lg:p-1 lg:m-2 m-1 hoverborder-[#2563EB]" href="#skills">Skills</a>
                    <a className=" border-b border-white lg:p-1 lg:m-2 m-1 hover:border-[#2563EB]" href="#projects">Projects</a>
                    <a className="border-b border-white lg:p-1 lg:m-2 m-1 hover:border-[#2563EB]" href="#contact">Contact</a>
                </div>
            </navbar>
            <body className="body px-5 md:px-10 border-x border-zinc-700 md:border-0">
                <div id="home" className="mb-10 mt-16 lg:mb-24 lg:mt-36">
                    <div className="  flex flex-col items-center  bg-cover bg-center">
                        <img className=" h-[160px] md:h-[190px] lg:h-[220] " src={nandha} alt="nandha" />
                        <h1 className="text-2xl font-bold md:text-4xl lg:text-4xl py-1 md:py-2  ">Nandhagokul S</h1>
                        <h1 className="text-l home-text font-semiboldbold md:text-2xl lg:text-2xl py-1 md:py-2 ">Full stack developer</h1>
                        <p className="md:w-[67%] md:text-center p-1 md:py-2 ">Passionate full stack developer with a knack for creating dynamic web applications that users love. Skilled in both front-end and back-end development, I bring innovative ideas to life with a focus on performance and user experience. Ready to tackle exciting challenges and build the next big thing!</p>
                        <button className="p-2 border-2 border-[#2563EB] hover:border-white  rounded-2xl my-5">contact me</button>
                    </div>
                </div>
                <div id="about">
                    <div className="  flex flex-col items-center  bg-cover bg-center pt-24">
                        <h1 className="text-2xl font-bold md:text-4xl lg:text-4xl py-1 md:py-2  ">About me</h1>
                        <h1 className="text-l home-text font-semiboldbold md:text-2xl lg:text-2xl py-1 md:py-2 ">Get to know me</h1>
                        <p className="md:w-[67%] md:text-center p-1 md:py-2 ">Hello! I'm Nandhagokul S, a passionate full stack developer with a keen interest in crafting dynamic and user-centric web applications. With a solid foundation in both front-end and back-end technologies, I thrive on turning innovative ideas into functional, high-performing solutions. <br />

                            <br /> On the front-end, I am well-versed in HTML, CSS and JavaScript with experience in frameworks and libraries like React , Tailwind CSS. I love creating intuitive and responsive user interfaces that provide a seamless experience across all devices. <br />

                            < br />On the back-end, my expertise includes working with Java and frameworks like Hibernate, Spring, Spring Boot as well as database management with SQL. I enjoy designing scalable and efficient architectures that ensure smooth and secure operations. <br /> </p>
                        <p className=" hidden lg:flex flex-col md:w-[67%] md:text-center p-1 md:py-2 ">

                            <br />My journey as a developer is fueled by a deep curiosity and a drive to stay updated with the latest industry trends and technologies. Whether it’s learning a new programming language or experimenting with cutting-edge tools, I am always eager to expand my skill set. <br />

                            <br />Collaboration and problem-solving are at the heart of my approach. I believe that great software is built through teamwork and effective communication. I take pride in delivering projects that not only meet technical requirements but also exceed client and user expectations.

                            <br />When I'm not coding, you might find me exploring new tech blogs, participating in hackathons, or enjoying a good book. I'm excited to take on new challenges and contribute to projects that make a real impact.

                            Let's build something amazing together!

                        </p>
                        <a href={resume} download="Nandhagokul S_Resume">
                            <button className="p-2 border-2 border-[#2563EB] hover:border-white rounded-2xl my-10">
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>
                <div id="skills" className="mb-10 mt-16 lg:mb-24  flex flex-col items-center">
                    <h1 className="mt-24 lg:mt-20 text-2xl font-bold md:text-4xl lg:text-4xl py-1 md:py-2  ">My skills</h1>
                    <h1 className="text-l home-text font-semiboldbold md:text-2xl lg:text-2xl py-1 mb-5 md:py-2 ">Technologies Learned</h1>
                    <div className="flex flex-wrap justify-evenly ">
                        <img className=" h-20 w-20 md:h-36 md:w-36 px-1 my-2 md:px-2 md:py-4" src={html} alt="" />
                        <img className=" h-20 w-20 md:h-36 md:w-36 px-1 my-2 md:px-2 md:py-4" src={css} alt="" />
                        <img className=" h-20 w-20 md:h-36 md:w-36 px-1 my-2 md:px-2 md:py-4" src={js} alt="" />
                        <img className=" h-20 w-20 md:h-36 md:w-36 px-1 my-2 md:px-2 md:py-4" src={react} alt="" />
                        <img className=" h-20 w-20 md:h-36 md:w-36 px-1 my-2 md:px-2 md:py-4" src={tailwind} alt="" />
                    </div>
                    <div className="flex flex-wrap justify-evenly ">
                        <img className=" h-20 w-20 md:h-36 md:w-36 px-1 my-2 md:px-2 md:py-4" src={java} alt="" />
                        <img className=" h-20 w-20 md:h-36 md:w-36 px-1 my-2 md:px-2 md:py-4" src={hibernate} alt="" />
                        <img className=" h-20 w-20 md:h-36 md:w-36 px-1 my-2 md:px-2 md:py-4" src={spring} alt="" />
                        <img className=" h-20 w-20 md:h-36 md:w-36 px-1 my-2 md:px-2 md:py-4" src={springboot} alt="" />
                        <img className=" h-20 w-20 md:h-36 md:w-36 px-1 my-2 md:px-2 md:py-4" src={sql} alt="" />
                    </div>
                    <div className="flex flex-wrap justify-evenly ">
                        <img className=" h-20 w-20 md:h-36 md:w-36 px-2 py-2 md:px-2 md:py-4" src={git} alt="" />
                        <img className=" h-20 w-20 md:h-36 md:w-36 px-2 py-2 md:px-2 md:py-4" src={github} alt="" />
                        <img className=" h-20 w-20 md:h-36 md:w-36 px-2 py-2 md:px-2 md:py-4" src={bitbucket} alt="" />
                    </div>
                    <div className="flex flex-wrap justify-evenly">
                        <img className=" h-20 w-20 md:h-36 md:w-36 px-2 py-2 md:px-2 md:py-4" src={vscode} alt="" />
                        <img className=" h-20 w-20 md:h-36 md:w-36 px-2 py-2 md:px-2 md:py-4" src={eclipse} alt="" />
                    </div>

                </div>
                <div id="projects" className="mb-10 mt-16 lg:mb-24 lg:mt-36 flex flex-col items-center">
                    <h1 className="mt-24 lg:mt-10 text-2xl font-bold md:text-4xl lg:text-4xl py-1 md:py-2">Projects</h1>
                    <h1 className="md:mb-10 text-l home-text font-semiboldbold md:text-2xl lg:text-2xl py-1 md:py-2 ">Some of my works</h1>
                    <div className=" md:flex justify-evenly">
                        <div className="border-b border-white my-5 mb-10 md:mx-10 ">
                            <img className="h-32 w-full" src={hoobank} alt="" />
                            <div>
                                <h1 className="px-2 py-2 text-2xl home-text font-semiboldbold md:text-2xl lg:text-2xl ">HooBank UI</h1>
                                <p className="items-center px-2 py-2 text-zinc-300">Experience a modern and intuitive banking interface designed for ease of use and efficiency. Our banking page UI offers a clean layout with quick access to account information, transactions, and financial tools. Enjoy secure banking with robust features such as real-time updates, seamless navigation, and responsive design for a seamless user experience.</p>
                                <div className="flex pb-2">
                                    <a className="px-2  text-[#2563EB] text-xl hover:text-white" href="https://hoo-bank-t.vercel.app/" target="_blank" rel="noopener noreferrer">Click here to view </a>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 relative top-1">
                                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-white my-5 mb-10 md:mx-10 ">
                            <img className="h-32 w-full" src={ency} alt="" />
                            <div>
                                <h1 className="px-2 py-2 text-2xl home-text font-semiboldbold md:text-2xl lg:text-2xl ">Data Encryptor</h1>
                                <p className="items-center px-2 py-2 text-zinc-300">Secure your sensitive information with our advanced data encryptor application. Encrypt files, messages, and data with strong encryption algorithms to protect confidentiality and ensure privacy. Our user-friendly interface makes encryption effortless, ensuring your information remains secure during storage and transmission.</p>
                                <div className="flex pb-2">
                                    <a className="px-2  text-[#2563EB] text-xl hover:text-white" href="https://github.com/nandhagokul04/Data_Encryptor" target="_blank" rel="noopener noreferrer">Click here to view </a>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 relative top-1">
                                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex justify-evenly">
                        <div className="border-b border-white md:border-0 my-5 mb-10 md:mx-10 %]">
                            <img className="h-32 w-full md:w-[270px]" src={bookspot} alt="" />
                            <div>
                                <h1 className="px-2 py-2 text-2xl home-text font-semiboldbold md:text-2xl lg:text-2xl ">The Book spot</h1>
                                <p className="items-center px-2 py-2 text-zinc-300 md:w-[270px]">Discover a world of literature at your fingertips with our innovative book app. Browse through a vast library of titles across genres, from classics to bestsellers. Enjoy personalized recommendations, bookmark favorite reads, and seamlessly sync your progress across devices.</p>
                                <div className="flex pb-2">
                                    <a className="px-2  text-[#2563EB] text-xl hover:text-white" href="https://github.com/nandhagokul04/Book_Spot" target="_blank" rel="noopener noreferrer">Click here to view </a>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 relative top-1">
                                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-white md:border-0 my-5 mb-10 md:mx-10 md:w-[270px] ">
                            <img className="h-32 w-full" src={ecom} alt="" />
                            <div>
                                <h1 className="px-2 py-2 text-2xl home-text font-semiboldbold md:text-2xl lg:text-2xl ">E-commerce application</h1>
                                <p className="items-center px-2 py-2 text-zinc-300 md:w-[270px]">App offers a curated selection of fashion and lifestyle products. With a user-friendly interface, personalized recommendations, exclusive deals, and secure payment options, Stylofy provides a seamless shopping experience</p>
                                <div className="flex pb-2">
                                    <a className="px-2  text-[#2563EB] text-xl hover:text-white" href="https://github.com/nandhagokul04/Ecommerce-app" target="_blank" rel="noopener noreferrer">Click here to view </a>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 relative top-1">
                                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}
