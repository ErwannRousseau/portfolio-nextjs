import TaskManager from '@public/projects/taskmanager.png';
import Chatroom from '@public/projects/chatroom.png';
import oRecipes from '@public/projects/orecipes.png';
import Atma from '@public/projects/atma-studio.png';

import HTML from '@public/html.png';
import CSS from '@public/css.png';
import JavaScript from '@public/javascript.png';
import ReactImg from '@public/react.png';
import GitHub from '@public/github.png';
import Git from '@public/git.png';
// import Laravel from '@public/laravel.png';
import MySQL from '@public/mysql.png';
import PHP from '@public/php.png';
import SCSS from '@public/scss.png';
import Tailwind from '@public/tailwind.png';
import NextJS from '@public/nextjs.png';
import TypeScript from '@public/typescript.png';
import Sanity from '@public/sanity.png';

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const data = {
  projects: [
    {
      id: 4,
      image: Atma,
      title: 'ATMA Studio',
      description:
        'ATMA Studio est un site web administrable via un CMS headless, cela permet aux clients du site de modifier le contenu de leur site',
      stack: 'NextJS / Tailwind / Sanity',
      link: 'https://studio-atma.com',
    },
    {
      id: 1,
      image: TaskManager,
      // video: `${baseUrl}/projects/taskmanager-video.mp4`,
      video: `https://www.youtube.com/embed/KJII3TMt9ek`,
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
      video: `https://www.youtube.com/embed/E62ZEjFCKrI`,
      title: 'Chatroom',
      description:
        "Chatroom est une application web de messagerie instantannée, alimentée par Express pour l'API, React pour le front-end et WebSocket pour une expérience de messagerie instantanée.",
      stack: 'React.js / Tailwind / Express',
      link: 'https://github.com/ErwannRousseau/Chatroom',
    },
    {
      id: 3,
      image: oRecipes,
      // video: `${baseUrl}/projects/orecipes-video.mp4`,
      video: `https://www.youtube.com/embed/RXjE2DrgJCw`,
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
      name: 'JavaScript',
    },
    {
      id: 14,
      image: TypeScript,
      name: 'TypeScript',
    },
    {
      id: 13,
      image: NextJS,
      name: 'NextJS',
    },
    {
      id: 6,
      image: ReactImg,
      name: 'REACT',
    },
    {
      id: 12,
      image: Sanity,
      name: 'Sanity',
    },
    {
      id: 7,
      image: PHP,
      name: 'PHP',
    },
    // {
    //   id: 8,
    //   image: Laravel,
    //   name: 'Laravel',
    // },
    {
      id: 9,
      image: MySQL,
      name: 'MySQL',
    },
    {
      id: 11,
      image: Git,
      name: 'Git',
    },
    {
      id: 10,
      image: GitHub,
      name: 'GITHUB',
    },
  ],
};

export default data;
