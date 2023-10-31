'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '@/utils/motion';
import Image from 'next/image';
import GitHub from '@public/github.png';
import Link from 'next/link';
import SVGCode from './SVGCode';
import Video from './Video';

function ProjectCard({ project, index, activeProject, setActiveProject }) {
  return (
    <motion.article
      variants={fadeIn('up', 'tween', index * 0.3 + 1, 1)}
      className="perspective-800 max-w-sm transform shadow-[0px_4px_14px_rgba(0,0,0,0.4)]  transition duration-500 hover:scale-105 md:hover:scale-105"
    >
      <div
        className={`Project-card transform-style-preserve relative h-full rounded-xl bg-white px-3 py-3 transition-transform duration-[0.5s] ${
          activeProject === project.id ? 'rotateY-180' : ''
        }`}
      >
        <div className="backface-hidden inset-0 flex h-full flex-col justify-between rounded-lg">
          <div>
            <Image
              className="w-full rounded shadow-[0px_2px_14px_rgba(0,0,0,0.2)] "
              src={project.image}
              alt="project"
            />
            <h1 className="mt-4 cursor-pointer text-2xl font-bold text-gray-800">{project.title}</h1>
            <p className="my-4">{project.description}</p>
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <SVGCode />
              <p>{project.stack}</p>
            </div>
            {project.link.includes('github.com') ? (
              <button
                onClick={() => {
                  setActiveProject(project.id);
                }}
                className="mt-4 w-full rounded-xl bg-[#ec407a] py-2 text-xl text-white shadow-lg"
                type="button"
              >
                Voir le projet
              </button>
            ) : (
              <Link
                target="_blank"
                href={project.link}
                className=" mt-4 block w-full rounded-xl bg-[#ec407a] py-2 text-center text-xl text-white shadow-lg"
              >
                Voir le projet
              </Link>
            )}
          </div>
        </div>
        {project.video && (
          <div className="backface-hidden absolute inset-0 flex h-full flex-col justify-around gap-2 rounded-lg p-4 rotateY-180 lg:gap-4 ">
            <Video url={project.video} />
            <a href={project.link} target="blank">
              <div className="flex h-[175px] items-center justify-center rounded-[0.6rem] bg-[linear-gradient(-20deg,#2b2b2b_0%,#434343_100%)] px-0 py-2 shadow-[0px_4px_14px_rgba(0,0,0,0.4)] active:translate-x-px active:translate-y-0.5">
                <Image className="h-[90%] w-auto" src={GitHub} alt="logo GitHub" />
              </div>
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
