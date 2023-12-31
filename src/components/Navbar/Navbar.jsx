'use client';

import { useEffect, useState } from 'react';
import './Navbar.scss';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Logo from '@public/logo.png';
import { navVariants, fadeIn, staggerContainer } from '@/utils/motion';

function Navbar() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  const [scrolled, setScrolled] = useState(0);

  const scrollProgress = () => {
    const { scrollTop } = document.documentElement;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${(scrollTop / windowHeight) * 100}%`;
    setScrolled(scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollProgress);
    return () => {
      window.removeEventListener('scroll', scrollProgress);
    };
  }, []);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="Navbar"
      >
        <div>
          <Link to="home" spy smooth duration={500}>
            <Image src={Logo} alt="Logo" className="logo" />
          </Link>
        </div>

        {/* menu */}
        <ul className="Navbar-list">
          <li className="Navbar-list-item">
            <Link to="home" spy smooth duration={500}>
              Accueil
            </Link>
          </li>
          <li className="Navbar-list-item">
            <Link to="about" spy smooth duration={500}>
              À propos
            </Link>
          </li>
          <li className="Navbar-list-item">
            <Link to="skills" spy smooth duration={500}>
              Skills
            </Link>
          </li>
          <li className="Navbar-list-item">
            <Link to="work" spy smooth duration={500}>
              Projets
            </Link>
          </li>
          <li className="Navbar-list-item">
            <Link to="contact" spy smooth duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
        <IconContext.Provider value={{ size: '1.5em' }}>
          <div onClick={handleClick} className="Navbar-burger">
            {!nav ? <FaBars /> : <FaTimes />}
          </div>
        </IconContext.Provider>

        {/* Mobile menu */}
        <ul className={!nav ? 'Navbar-mobile-hidden' : 'Navbar-mobile'}>
          <li className="Navbar-mobile-item">
            <Link onClick={handleClick} to="home" spy smooth duration={500} offset={-80}>
              Accueil
            </Link>
          </li>
          <li className="Navbar-mobile-item">
            <Link onClick={handleClick} to="about" spy smooth duration={500} offset={-80}>
              À propos
            </Link>
          </li>
          <li className="Navbar-mobile-item">
            <Link onClick={handleClick} to="skills" spy smooth duration={500} offset={-80}>
              Skills
            </Link>
          </li>
          <li className="Navbar-mobile-item">
            <Link onClick={handleClick} to="work" spy smooth duration={500} offset={0}>
              Projets
            </Link>
          </li>
          <li className="Navbar-mobile-item">
            <Link onClick={handleClick} to="contact" spy smooth duration={500} offset={-50}>
              Contact
            </Link>
          </li>
        </ul>
        <span style={{ width: `${scrolled}` }} className="Navbar-progress" />
      </motion.nav>
      {/* Social icons */}
      <motion.div
        className="Navbar-social"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.ul variants={fadeIn('up', 'tween', 1, 1)}>
          <li className="Navbar-social-item Navbar-social-item-blue">
            <a className="Navbar-social-link" href="https://www.linkedin.com/in/erwannrousseauwebdev/" target="blank">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="Navbar-social-item Navbar-social-item-black">
            <a className="Navbar-social-link" href="https://github.com/ErwannRousseau" target="blank">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="Navbar-social-item Navbar-social-item-green">
            <a className="Navbar-social-link" href="mailto:erwann.rousseau@icloud.com">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="Navbar-social-item Navbar-social-item-grey">
            <a
              className="Navbar-social-link"
              href={`${baseUrl}/CV_ErwannRousseau.pdf`}
              target="_blank"
              // download="CV_ErwannRousseau.pdf"
              rel="noreferrer"
            >
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </motion.ul>
      </motion.div>
    </>
  );
}

export default Navbar;
