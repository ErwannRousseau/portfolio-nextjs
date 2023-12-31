/* eslint-disable react/require-default-props */

'use client';

/* eslint-disable react/no-array-index-key */
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { textContainer, textVariant2 } from '../utils/motion';

export default function TypingText({ subtitle, textStyles, link = null, linkStyle = null }) {
  return (
    <motion.p variants={textContainer} className={`${textStyles} w-full`}>
      {Array.from(subtitle).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
      {link && (
        <motion.a href={`mailto:${link}`} className={`${linkStyle} w-full`}>
          {Array.from(link).map((linkLetter, linkIndex) => (
            <motion.span variants={textVariant2} key={linkIndex}>
              {linkLetter}
            </motion.span>
          ))}
        </motion.a>
      )}
    </motion.p>
  );
}

TypingText.propTypes = {
  subtitle: PropTypes.string.isRequired,
  textStyles: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkStyle: PropTypes.string,
};
