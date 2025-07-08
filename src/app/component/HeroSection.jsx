'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div id="home" className="mb-[5px]">
      <div className="min-h-screen">
        <header className=" fixed inset-x-0 top-0 z-50 bg-[#1a1a1a]">
          <nav
            className="flex items-center justify-center  p-6 lg:px-8  w-full"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <Link href="#home" className="text-2xl font-semibold text-white">
                Kerolos Nabil
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-between rounded-md p-2.5 text-gray-700"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link href="#home" className="text-l font-semibold text-[#c1cffb] hover:text-white">
                Home
              </Link>
              <Link href="#about" className="text-l font-semibold text-[#c1cffb] hover:text-white">
                About
              </Link>
              <Link href="#projects" className="text-l font-semibold text-[#c1cffb] hover:text-white">
                Projects
              </Link>
              <Link href="#education" className="text-l font-semibold text-[#c1cffb] hover:text-white">
                Education
              </Link>
              <Link href="#contact" className="text-l font-semibold text-[#c1cffb] hover:text-white">
                Contact
              </Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link href="#contact" className="text-sm/6 bg-[#c1cffb] text-black p-3 hover:bg-[#1a1a1a] hover:text-[#c1cffb] border-2 border-transparent hover:border-[#c1cffb]">
                Contact Me 
              </Link>
            </div>
          </nav>
          {/* Mobile menu, show/hide based on menu open state. */}
          {isOpen && (
            <div className="lg:hidden" role="dialog" aria-modal="true">
                {/* Background backdrop, show/hide based on slide-over state.  */}
                <div className="fixed inset-0 z-50"></div>
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={toggleMenu}
                    >
                    <span className="sr-only">Close menu</span>
                    <svg
                        className="size-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                        <Link
                        href="#home"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        onClick={toggleMenu}
                        >
                        Home
                        </Link>
                        <Link
                        href="#about"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        onClick={toggleMenu}
                        >
                        About
                        </Link>
                        <Link
                        href="#projects"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        onClick={toggleMenu}
                        >
                        Projects
                        </Link>
                        <Link
                        href="#education"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        onClick={toggleMenu}
                        >
                        Education
                        </Link>
                        <Link
                        href="#contact"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        onClick={toggleMenu}
                        >
                        Contact
                        </Link>
                    </div>
                    <div className="py-6">
                        <Link
                        href="#contact"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold bg-indigo-600 text-sm 
                        text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 
                        focus-visible:outline-indigo-600 max-w-1/2"
                        onClick={toggleMenu}
                        >
                        Contact Me
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          )}
        </header>

        <div className="relative isolate px-6 pt-24  lg:px-8">
            <div className="w-full justify-center mt-12 mb-8">
                <h1 className="text-6xl text-[#c1cffb] mx-auto text-center">Full-Stack Developer</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 min-h-[calc(100vh-12rem)] md:min-h-[500px] gap-4 mt-6">
                {/* left column */}
                <div className="col-span-1 row-start-1 md:col-start-1 md:row-start-2">
                    <p className="text-[#c1cffb] text-xl">
                        Professional Full-Stack developer
                    </p>
                </div>
                <div className="col-span-1 row-start-2 md:col-start-1  md:row-start-2 self-end mb-4"> 
                    <p className="text-[#c1cffb] text-l mb-4">
                        As a junior full-stack developer, I build responsive and dynamic web applications. 
                        My expertise spans HTML, CSS, JavaScript, React.js, and Next.js for front-end development, 
                        complemented by Python, Django, Flask, and PostgreSQL for robust back-end solutions. 
                        I am committed to writing clean, maintainable code and crafting user-focused designs, 
                        always seeking to integrate new technologies to deliver impactful solutions.
                    </p>
                    <Link href={'https://github.com/kerolosNabil247'} className="m-5 bg-[#c1cffb] text-black p-3 hover:bg-[#1a1a1a] hover:text-[#c1cffb] border-2 border-transparent hover:border-[#c1cffb]">View Github</Link>
                </div>
                {/* right colums */}
                <div className="relative col-span-1 md:col-start-2 min-h-[450px] md:min-h-[900px] md:row-span-full overflow-hidden rounded-lg">
                    <Image 
                        src="/me.jpeg" 
                        alt="personal photo" 
                        layout="fill" // Or 'responsive', 'intrinsic', 'fixed'
                        objectFit="cover" 
                        // className="rounded-lg " // Add any other Tailwind classes directly here
                        priority // If it's a hero image, mark it as priority for LCP
                    />
                </div>
            </div>
        </div>
      </div>
      
    </div>
  );
}
