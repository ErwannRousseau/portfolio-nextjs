import TaskManager from '@public/projects/taskmanager.png';
import Chatroom from '@public/projects/chatroom.png';
import oRecipes from '@public/projects/orecipes.png';

import HTML from '@public/html.png';
import CSS from '@public/css.png';
import JavaScript from '@public/javascript.png';
import ReactImg from '@public/react.png';
import GitHub from '@public/github.png';
import Git from '@public/git.png';
import Laravel from '@public/laravel.png';
import MySQL from '@public/mysql.png';
import PHP from '@public/php.png';
import SCSS from '@public/scss.png';
import Tailwind from '@public/tailwind.png';
import Motion from '@public/framer-motion.png';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const data = {
  projects: [
    {
      id: 1,
      image: TaskManager,
      // video: `${baseUrl}/projects/taskmanager-video.mp4`,
      video: `https://www.youtube.com/embed/KJII3TMt9ek?controls=0`,
      title: 'Task Manager',
      description:
        'Task-Manager est une application web permettant de gérer les tâches en utilisant JavaScript pour la partie frontend et Laravel pour gérer la partie backend.',
      stack: 'JavaScript / Laravel',
      link: 'https://github.com/ErwannRousseau/Task-Manager',
    },
    {
      id: 2,
      image: Chatroom,
      // video: `${baseUrl}/projects/chatroom-video.mp4`,
      video: `https://www.youtube.com/embed/E62ZEjFCKrI?controls=0`,
      title: 'Chatroom',
      description:
        "Chatroom est une application web de messagerie instantannée, alimentée par Express pour l'API, React pour le front-end et WebSocket pour une expérience de messagerie instantanée.",
      stack: 'React.js / TailWind / Express',
      link: 'https://github.com/ErwannRousseau/Chatroom',
    },
    {
      id: 3,
      image: oRecipes,
      // video: `${baseUrl}/projects/orecipes-video.mp4`,
      video: `https://www.youtube.com/embed/RXjE2DrgJCw?controls=0`,
      title: 'oRecipes',
      description:
        "oRecipes est un projet de site web dédié aux recettes culinaires. Alimentée par Express pour l'API, React et SCSS pour le front-end pour offrir une expérience utilisateur conviviale et une gestion de connexion avec token JWT.",
      stack: 'React.js / SCSS / Express',
      link: 'https://github.com/ErwannRousseau/oRecipes',
    },
  ],

  skills: [
    {
      id: 1,
      image: HTML,
      name: 'HTML',
    },
    {
      id: 2,
      image: CSS,
      name: 'CSS',
    },
    {
      id: 3,
      image: SCSS,
      name: 'SCSS',
    },
    {
      id: 4,
      image: Tailwind,
      name: 'Tailwind',
    },
    {
      id: 5,
      image: JavaScript,
      name: 'JAVASCRIPT',
    },
    {
      id: 6,
      image: ReactImg,
      name: 'REACT',
    },
    {
      id: 12,
      image: Motion,
      name: 'Framer Motion',
    },
    {
      id: 7,
      image: PHP,
      name: 'PHP',
    },
    {
      id: 8,
      image: Laravel,
      name: 'Laravel',
    },
    {
      id: 9,
      image: MySQL,
      name: 'MySQL',
    },

    {
      id: 10,
      image: GitHub,
      name: 'GITHUB',
    },
    {
      id: 11,
      image: Git,
      name: 'Git',
    },
  ],
};

export default data;
