import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";

const NavToggle = ({ setNavOpen }) => {
  const handleCloseNav = () => {
    setNavOpen(false);
  }

  return (
    <div className="z-20 fixed top-0 right-0 w-1/2 h-screen bg-white">
        <div className="flex justify-between">
          <p className="text-black p-4">NavToggle</p>
          <XMarkIcon 
            className="h-6 w-6 mt-4 me-6"
            onClick={handleCloseNav}
          />
        </div>
        <div className='p-2'>
          <Sidebar 
            path="/work"
            href="/work"
            name="Work"
            handleCloseNav={handleCloseNav}
          />
          <Sidebar 
            path="/about"
            href="/about"
            name="About"
            handleCloseNav={handleCloseNav}
          />
          <Sidebar 
            path="/services"
            href="/services"
            name="Services"
            handleCloseNav={handleCloseNav}
          />
          <Sidebar 
            path="/"
            href="/"
            name="Ideas"
            handleCloseNav={handleCloseNav}
          />
          <Sidebar 
            path="/careers"
            href="/careers"
            name="Careers"
            handleCloseNav={handleCloseNav}
          />
          <Sidebar 
            path="/contact"
            href="/contact"
            name="Contact"
            handleCloseNav={handleCloseNav}
          />
        </div>
    </div>
  )
}

NavToggle.propTypes = {
  setNavOpen: PropTypes.func.isRequired,
};

export default NavToggle