'use client';

import './Work.scss';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { fadeIn, staggerContainer } from '@/utils/motion';
import data from '@/data/data';
import { TypingText, ProjectCard } from '@/components';

function Work() {
  const works = data.projects;
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    // Ajoute un écouteur d'événement de clic sur le document
    const clickRemoveRotateHandler = (event) => {
      // Vérifie si l'élément cliqué est un enfant de '.Project-card'
      const isProject = event.target.closest('.Project-card');

      // Si l'élément n'est pas une carte on setActiveProject à null
      if (!isProject) {
        setActiveProject(null);
      }
    };

    document.addEventListener('click', clickRemoveRotateHandler);

    // supprime l'écouteur d'événements lorsque le composant est démonté
    return () => {
      document.removeEventListener('click', clickRemoveRotateHandler);
    };
  }, [activeProject]);

  return (
    <section name="work" className="w-full min-h-[100dvh] text-[#ccd6f6] mb-20 px-6 md:pt-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-[1000px] flex flex-col justify-center items-center mx-auto my-0"
      >
        <motion.h2
          variants={fadeIn('up', 'tween', 0, 1)}
          className="self-baseline text-4xl leading-10 font-bold inline border-b-4 border-b-[#ec407a] border-solid"
        >
          Projets
        </motion.h2>
        <TypingText subtitle="// Découvrez quelques-uns de mes projets récents" textStyles="py-4 self-baseline" />

        <div className="text-black max-w-[1000px] flex flex-col items-center gap-8 mx-auto max-[800px]:mt-5 my-0 pt-10 ">
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-10 md:space-y-0">
            {works.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                activeProject={activeProject}
                setActiveProject={() => setActiveProject(project.id)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Work;
