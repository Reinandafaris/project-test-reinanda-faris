import { useRef, useState } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';
import { Bars3Icon } from "@heroicons/react/24/outline";
import NavToggle from './NavToggle';

const Header = () => {
  const headerRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(true);
  }

  return (
    <section>
      <Headroom
      onPin={() => {document.querySelector('header').style.opacity = '0.5';}}
      onUnfix={() => {headerRef.current.style.opacity = '1';}}>
        <header
        ref={headerRef}
        className="flex justify-between bg-blue-500 text-white p-4 sm:px-20">
          <Link to="/">
            <h2 className="md:text-2xl text-lg font-bold">Reinanda Faris</h2>
          </Link>
          <div className='md:flex md:gap-3 hidden'>
            <Link to="/work" className='hover:underline hover:text-white'>
              <p>Work</p>
            </Link>
            <Link to="/about" className='hover:underline hover:text-white'>
              <p>About</p>
            </Link>
            <Link to="/services" className='hover:underline hover:text-white'>
              <p>Services</p>
            </Link>
            <Link to="/" className='hover:underline hover:text-white'>
              <p>Ideas</p>
            </Link>
            <Link to="/careers" className='hover:underline hover:text-white'>
              <p>Careers</p>
            </Link>
            <Link to="/contact" className='hover:underline hover:text-white'>
              <p>Contact</p>
            </Link>
          </div>
            <Bars3Icon 
              className='w-6 h-6 md:hidden'
              onClick={handleNavToggle}
            />
        </header>
      </Headroom>

      {navOpen && (
        <NavToggle 
          setNavOpen={setNavOpen}
        />
      )}
    </section>
  );
};

export default Header;
