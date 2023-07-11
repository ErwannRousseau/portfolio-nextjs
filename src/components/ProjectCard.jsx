'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '@/utils/motion';
import Image from 'next/image';
import GitHub from '@public/github.png';
import SVGCode from './SVGCode';
import Video from './Video';

function ProjectCard({ project, index, activeProject, setActiveProject }) {
  return (
    <motion.article
      variants={fadeIn('up', 'tween', index * 0.3 + 1, 1)}
      className="shadow-[0px_4px_14px_rgba(0,0,0,0.4)] hover:scale-105 perspective-800 max-w-sm  transform md:hover:scale-105 transition duration-500"
    >
      <div
        className={`Project-card transform-style-preserve relative h-full transition-transform duration-[0.5s] bg-white px-3 py-3 rounded-xl ${
          activeProject === project.id ? 'rotateY-180' : ''
        }`}
      >
        <div className="h-full rounded-lg inset-0 backface-hidden flex flex-col justify-between">
          <div>
            <Image
              className="w-full rounded shadow-[0px_2px_14px_rgba(0,0,0,0.2)] "
              src={project.image}
              alt="project"
            />
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{project.title}</h1>
            <p className="my-4">{project.description}</p>
          </div>
          <div>
            <div className="flex space-x-1 items-center">
              <SVGCode />
              <p>{project.stack}</p>
            </div>
            <button
              onClick={() => {
                setActiveProject(project.id);
              }}
              className="mt-4 text-xl w-full text-white bg-[#ec407a] py-2 rounded-xl shadow-lg"
              type="button"
            >
              Voir le projet
            </button>
          </div>
        </div>
        <div className="h-full rounded-lg inset-0 backface-hidden absolute flex flex-col justify-around gap-2 p-4 lg:gap-4 rotateY-180 ">
          <Video url={project.video} />
          <a href={project.link} target="blank">
            <div className="bg-[linear-gradient(-20deg,#2b2b2b_0%,#434343_100%)] px-0 py-2 rounded-[0.6rem] flex items-center justify-center h-[175px] shadow-[0px_4px_14px_rgba(0,0,0,0.4)] active:translate-x-px active:translate-y-0.5">
              <Image className="h-[90%] w-auto" src={GitHub} alt="logo GitHub" />
            </div>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
