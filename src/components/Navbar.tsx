import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="flex p-3 w-full fixed top-0 left-0 items-center justify-around text-white bg-cyan-950 z-50 shadow-lg">
        <NavLink className="text-4xl hover:text-fuchsia-500 sm:text-6xl transition-colors duration-300" to='/'>{"</>"}</NavLink>
        <div className="flex gap-3 font-bitcount sm:text-3xl sm:gap-10 justify-evenly">
          <NavLink 
            className={({ isActive }) => 
              `hover:text-fuchsia-500 transition-colors duration-300 ${
                isActive ? 'text-fuchsia-400' : ''
              }`
            } 
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink 
            className={({ isActive }) => 
              `hover:text-fuchsia-500 transition-colors duration-300 ${
                isActive ? 'text-fuchsia-400' : ''
              }`
            } 
            to="/likes"
          >
            Likes
          </NavLink>
          <NavLink 
            className={({ isActive }) => 
              `hover:text-fuchsia-500 transition-colors duration-300 ${
                isActive ? 'text-fuchsia-400' : ''
              }`
            } 
            to="/writes"
          >
            Writes
          </NavLink>
          <NavLink 
            className={({ isActive }) => 
              `hover:text-fuchsia-500 transition-colors duration-300 ${
                isActive ? 'text-fuchsia-400' : ''
              }`
            } 
            to="/contact"
          >
            FindMe
          </NavLink>
        </div>
      </nav>
    </>
  )
}

export default Navbar