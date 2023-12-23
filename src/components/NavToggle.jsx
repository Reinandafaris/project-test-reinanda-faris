import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

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
        <div className='p-5 space-y-6'>
          <Link to="/work" className='hover:underline'>
            <p className="mt-4 mb-4">Work</p>
          </Link>
          <Link to="/about" className='hover:underline'>
            <p className="mt-4 mb-4">About</p>
          </Link>
          <Link to="/services" className='hover:underline'>
            <p className="mt-4 mb-4">Services</p>
          </Link>
          <Link to="/" className='hover:underline'>
            <p className="mt-4 mb-4">Ideas</p>
          </Link>
          <Link to="/careers" className='hover:underline'>
            <p className="mt-4 mb-4">Careers</p>
          </Link>
          <Link to="/contact" className='hover:underline'>
            <p className="mt-4 mb-4">Contact</p>
          </Link>
        </div>
    </div>
  )
}

export default NavToggle