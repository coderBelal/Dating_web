 "use client"

import { useState } from "react"
import { ChevronDown, Menu, X, Globe } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className=" bg-gradient-to-r from-purple-100 via-purple-400 to-purple-300 px-4 py-3 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">

          <Link to={"/"} className="text-purple-800 font-bold text-2xl flex items-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              <path
                d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5Z"
                fill="#4B2D83"
              />
              <path
                d="M15 15C15 12.7909 16.7909 11 19 11C21.2091 11 23 12.7909 23 15C23 17.2091 21.2091 19 19 19C16.7909 19 15 17.2091 15 15Z"
                fill="#FF3366"
              />
              <path
                d="M25 20C25 17.7909 26.7909 16 29 16C31.2091 16 33 17.7909 33 20C33 22.2091 31.2091 24 29 24C26.7909 24 25 22.2091 25 20Z"
                fill="#FF3366"
              />
            </svg>
            <span className="text-purple-600">Dating</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700   hover:text-purple-800">
      Home
          </Link>
          <a href="#" className="text-gray-700   hover:text-purple-800">
            About Us
          </a>
          <a href="#" className="text-gray-700   hover:text-purple-800">
            Ask
          </a>
          <a href="#" className="text-gray-700   hover:text-purple-800">
          Instructions
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-800">
             Contact
          </a>
        </div>

        {/* Language and Login */}
        <div className="hidden md:flex items-center space-x-4">
          {/* <div className="flex items-center text-gray-700 hover:text-purple-800 cursor-pointer">
            <Globe size={18} className="mr-1" />
            <span>বাংলা</span>
            <ChevronDown size={16} />
          </div> */}
     <a href="#_" class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white">
    <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
    <span class="relative">Log In</span>
</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
    {/* Mobile Menu */}
    <div
  className={`md:hidden absolute left-0 right-0 bg-purple-50 mt-2 py-2 px-4 rounded-lg shadow-md transition-all duration-500 transform z-50 ${
    isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
  }`}
>
  <div className="flex flex-col space-y-3">
    <a href="#" className="text-gray-700 hover:text-purple-800 py-1">
   Home
    </a>
    <a href="#" className="text-gray-700 hover:text-purple-800 py-1">
   About Us
    </a>
    <a href="#" className="text-gray-700 hover:text-purple-800 py-1">
   Ask
    </a>
    <a href="#" className="text-gray-700 hover:text-purple-800 py-1">
    Instructions
    </a>
    <a href="#" className="text-gray-700 hover:text-purple-800 py-1">
      Contact Us
    </a>

    <div className="border-t border-pink-200 pt-2 mt-1">
     
    <a href="#_" class="rounded relative inline-flex group items-center justify-center px-15 py-2 m-1 cursor-pointer border-b-4 border-l-2   active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white">
    <span class="absolute w-0 h-0 transition-all  duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
    <span class="relative ">Log In</span>
</a>
    </div>
  </div>
</div>

    </nav>
  )
}

export default Navbar
