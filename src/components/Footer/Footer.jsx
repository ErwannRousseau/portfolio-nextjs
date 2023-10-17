'use client';

import './Footer.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { footerVariants } from '@/utils/motion';

function Footer() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <motion.footer
      id="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="Footer"
    >
      <div className="Footer-container">
        <div className="Footer-top">
          <div className="Footer-link">
            <div>
              <a className=" block " href="https://www.linkedin.com/in/erwannrousseauwebdev/" target="blank">
                <FaLinkedin size={30} />
              </a>
            </div>
            <div>
              <a href="https://github.com/ErwannRousseau" target="blank">
                <FaGithub size={30} />
              </a>
            </div>
            <div>
              <a href="mailto:erwann.rousseau@icloud.com">
                <HiOutlineMail size={30} />
              </a>
            </div>
            <div>
              <a
                href={`${baseUrl}/CV_ErwannRousseau.pdf`}
                target="_blank"
                // download="CV_ErwannRousseau.pdf"
                rel="noreferrer"
              >
                <BsFillPersonLinesFill size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="Footer-bottom">
          <div className="Footer-legal">
            <span>Copyright © 2023 Erwann Rousseau</span>
            <Link href="/legal/conditions" onClick={handleScrollToTop}>
              Conditions d&apos;utilisation
            </Link>
            <Link href="/legal/confidentialite" onClick={handleScrollToTop}>
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
