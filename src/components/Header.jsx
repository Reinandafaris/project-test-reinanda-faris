import { useRef, useState } from 'react';
import Headroom from 'react-headroom';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon } from "@heroicons/react/24/outline";
import NavToggle from './NavToggle';

const Header = () => {
  const headerRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(true);
  }

  let {pathname} = useLocation();
  let subpage = pathname.split('/')?.[1]
  // console.log(subpage);

  function Linkness (type = null) {
    if (subpage === '') {
      subpage = 'home'
    }

    let classes = 'hover:underline hover:text-white';

    if (type === subpage) {
      classes += ' bg-green-500 px-3 rounded-md';
    }
    return classes
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
            <Link to="/work" className={Linkness('work')}>
              <p>Work</p>
            </Link>
            <Link to="/about" className={Linkness('about')}>
              <p>About</p>
            </Link>
            <Link to="/services" className={Linkness('services')}>
              <p>Services</p>
            </Link>
            <Link to="/" className={Linkness('home')}>
              <p>Ideas</p>
            </Link>
            <Link to="/careers" className={Linkness('careers')}>
              <p>Careers</p>
            </Link>
            <Link to="/contact" className={Linkness('contact')}>
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
