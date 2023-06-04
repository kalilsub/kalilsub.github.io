import { useState } from "react"
import { Link } from "react-router-dom"
import { navLinks } from "../constants"
import { logo, menu, close } from "../assets"
import { styles } from "../styles"



const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center 
      py-5 fixed top-0 z-20 bg-primary`}
    >
      <div
        className="w-full flex justify-between items-center
      max-w-7xl mx-auto"
      >
        <Link
          to="/"
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18] font-bold cursor-pointer flex">
            Kalil &nbsp;
            <span className="sm:block hidden"> | React Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-8 items-center">
         
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}> {link.title}</a>
            </li>
          ))}
           <button
            className="bg-[#915eff] py-2 px-4 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl hover:bg-gray-200  hover:text-black-100 transition-colors duration-500"
            onClick={() => window.open("./Kalil_CV.pdf", "_blank")}
          >
            View CV
          </button>
        </ul>
        <div
          className="md:hidden flex flex-1 justify-end
        items-center"
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title)
                    setToggle(!toggle)
                  }}
                >
                  <a href={`#${link.id}`}> {link.title}</a>
                </li>
              ))}
              <button
                className=" 
              bg-[#915eff] font-poppins font-bold text-[16px] py-2 px-4 outline-none w-fit shadow-md shadow-primary rounded-xl hover:bg-gray-200  hover:text-black-100 transition-colors duration-500"
                onClick={() => window.open("./Kalil_CV.pdf", "_blank")}
              >
                View CV
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
