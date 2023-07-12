'use client';

import './Home.scss';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import { slideIn, staggerContainer, textVariant } from '@/utils/motion';

function Home() {
  return (
    <header name="home" className="Home">
      <motion.div
        className="Home-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="left">
          <motion.div variants={textVariant(1.1)}>
            <span className="Home-hello">Bonjour, je m&apos;appelle</span>
            <h1 className="Home-name">Erwann Rousseau</h1>
            <h2 className="Home-title">Je suis développeur web Full-Stack.</h2>
          </motion.div>
          <motion.p variants={textVariant(1.2)} className="Home-pres">
            Je suis un développeur web full-stack junior passionné par la création d&apos;expériences interactives en
            ligne. J&apos;ai une préférence marquée pour React, que j&apos;utilise avec enthousiasme pour développer des
            applications web dynamiques.
          </motion.p>
          <motion.div variants={textVariant(1.3)}>
            <Link to="work" smooth duration={500}>
              <button type="button" className="Home-btn">
                Voir mes travaux
                <span className="Home-arrow">
                  <HiArrowNarrowRight />
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
        <motion.div className="hero-img" variants={slideIn('right', 'spring', 0.1, 1)} />
      </motion.div>
    </header>
  );
}

export default Home;
