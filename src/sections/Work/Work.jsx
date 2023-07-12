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
    <section name="work" className="mb-20 min-h-[85dvh] w-full px-6 text-[#ccd6f6] sm:pt-40 md:pt-20 lg:pt-0">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto my-0 flex max-w-[1000px] flex-col items-center justify-center"
      >
        <motion.h2
          variants={fadeIn('up', 'tween', 0, 1)}
          className="inline self-baseline border-b-4 border-solid border-b-[#ec407a] text-4xl font-bold leading-10"
        >
          Projets
        </motion.h2>
        <TypingText
          subtitle="// Découvrez quelques-uns de mes projets récents"
          textStyles="py-4 self-baseline break-words"
        />

        <div className="mx-auto my-0 flex max-w-[1000px] flex-col items-center gap-8 text-black md:mt-5 ">
          <div className="gap-5 space-y-10 md:grid md:grid-cols-2 md:space-y-0 md:px-4 lg:grid-cols-3">
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
