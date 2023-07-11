'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { TypingText } from '@/components';
import data from '@/data/data';
import { fadeIn, staggerContainer, zoomIn } from '@/utils/motion';
import './Skills.scss';

function Skills() {
  const { skills } = data;

  return (
    <section name="skills" className="Skills">
      <motion.div
        className="Skills-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.h2 className="Skills-title" variants={fadeIn('up', 'tween', 0, 1)}>
          Skills
        </motion.h2>
        <TypingText subtitle="// Voici les technologies avec lesquelles je travaille" textStyles="py-4 self-baseline" />

        <div className="Skills-tech-container">
          {/* Skills */}
          {skills.map((skill) => (
            <Tilt key={skill.id}>
              <motion.div className="Skills-tech-card" variants={zoomIn(0.5, 1)}>
                <div className="w-full">
                  <Image className="Skills-tech-img" src={skill.image} alt={`${skill.name} icon`} />
                  <p className="Skills-tech-name">{skill.name}</p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
