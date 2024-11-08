import antDesign from '../assets/Images/Icons/antdesign.png';
import bootstrap from '../assets/Images/Icons/bootstrap.png';
import css from '../assets/Images/Icons/css3.png';
import express from '../assets/Images/Icons/express.png';
import html from '../assets/Images/Icons/html5.png';
import js from '../assets/Images/Icons/javascript.png';
import nodejs from '../assets/Images/Icons/nodejs.png';
import reactjs from '../assets/Images/Icons/react.png';
import redux from '../assets/Images/Icons/redux.png';
import sequelize from '../assets/Images/Icons/sequelize.png';
import pf from '../assets/Images/PF.jpg';
import clima from '../assets/Images/WeatherApp.png';
import todo from '../assets/Images/todo.jpeg';
import riders from '../assets/Images/RidersCafe.jpeg';
import CVHTML from '../assets/Images/cvpage.jpeg';
import github from '../assets/Images/Icons/github-fill.png';
import deploy from '../assets/Images/Icons/console.png';

export const projectsData = [
  {
    title: 'Museo Patagonico de Ciencias Naturales "Juan Carlos Salgado"',
    summary:
      'Este proyecto fue concebido como el proyecto final para el Bootcamp Henry, para el Museo de Ciencias Naturales de Río Negro. La plataforma cuenta con varias de funcionalidades que incluyen una página de eventos, una pasarela de pago, un panel de control tanto para administradores y usuarios, una base de datos, filtros, y muchas otras características.',
    technologies: [
      {
        name: 'Javascript',
        image: `${js}`,
      },
      {
        name: 'React JS',
        image: `${reactjs}`,
      },
      {
        name: 'Redux',
        image: `${redux}`,
      },
      {
        name: 'Bootstrap',
        image: `${bootstrap}`,
      },
      {
        name: 'Ant Design',
        image: `${antDesign}`,
      },
      {
        name: 'Node JS',
        image: `${nodejs}`,
      },
      {
        name: 'Express JS',
        image: `${express}`,
      },
      {
        name: 'Sequelize',
        image: `${sequelize}`,
      },
    ],
    deployLink: {
      url: 'https://pf-museo-front-end-pf09henry.vercel.app/',
      image: `${deploy}`,
    },
    githubLink: {
      url: 'https://github.com/Pf09Henry/Pf_Museo_FrontEnd/',
      image: `${github}`,
    },
    image: `${pf}`,
  },
  {
    title: 'Food API',
    summary: '',
    technologies: [
      {
        name: 'Javascript',
        image: `${js}`,
      },
      {
        name: 'React JS',
        image: `${reactjs}`,
      },
      {
        name: 'Redux',
        image: `${redux}`,
      },
      {
        name: 'Node JS',
        image: `${nodejs}`,
      },
      {
        name: 'Express JS',
        image: `${express}`,
      },
      {
        name: 'Sequelize',
        image: `${sequelize}`,
      },
    ],
    deployLink: {
      url: '',
      image: `${deploy}`,
    },
    githubLink: {
      url: '',
      image: `${github}`,
    },
    image: '',
  },
  {
    title: 'ToDo List',
    summary:
      'Aplicación de registro de tareas desarrollada en ReactJS, que emplea conceptos de persistencia de datos mediante localStorage. Permite gestionar tareas, incluyendo la creación, eliminación y marcado como completadas, todo ello gestionado a través de estados.',
    technologies: [
      {
        name: 'Javascript',
        image: `${js}`,
      },
      {
        name: 'React JS',
        image: `${reactjs}`,
      },
    ],
    deployLink: {
      url: 'https://brayanmen.github.io/TodoList/',
      image: `${deploy}`,
    },
    githubLink: {
      url: 'https://github.com/BrayanMen/TodoList',
      image: `${github}`,
    },
    image: `${todo}`,
  },
  {
    title: 'Movie Api Js',
    summary: '',
    technologies: [
      {
        name: 'Javascript',
        image: `${js}`,
      },
      {
        name: 'HTML',
        image: `${html}`,
      },
      {
        name: 'CSS',
        image: `${css}`,
      },
    ],
    deployLink: {
      url: '',
      image: `${deploy}`,
    },
    githubLink: {
      url: '',
      image: `${github}`,
    },
    image: '',
  },
  {
    title: 'Weather App',
    summary:
      'Weather App construida con React.js, que implementa conceptos de modularización, llamadas a APIs, pasaje de Props, ciclos de vida y uso de estados.',
    technologies: [
      {
        name: 'Javascript',
        image: `${js}`,
      },
      {
        name: 'React JS',
        image: `${reactjs}`,
      },
    ],
    deployLink: {
      url: 'https://weather-52j1nztdj-brayanmen.vercel.app/',
      image: `${deploy}`,
    },
    githubLink: {
      url: 'https://github.com/BrayanMen/Weather-App',
      image: `${github}`,
    },
    image: `${clima}`,
  },
  {
    title: 'Riders Garage Cafe',
    summary:
      'Landing Page utilizando HTML, CSS y JS para Cursos de Talent Tech del GCBA para reforzar mis habilidades en desarrollo web y seguir sumando conocimientos.',
    technologies: [
      {
        name: 'HTML',
        image: `${html}`,
      },
      {
        name: 'CSS',
        image: `${css}`,
      },
      {
        name: 'Javascript',
        image: `${js}`,
      },
    ],
    deployLink: {
      url: 'https://riderscafegarage.vercel.app/',
      image: `${deploy}`,
    },
    githubLink: {
      url:  'https://github.com/BrayanMen/Talento-Tech',
      image: `${github}`,
    },
    image:`${riders}`,
  },
];

export const filterTech = [
  {
    name: 'Todos',
    image: '',
  },
  {
    name: 'Javascript',
    image: `${js}`,
  },
  {
    name: 'HTML',
    image: `${html}`,
  },
  {
    name: 'CSS',
    image: `${css}`,
  },
  {
    name: 'React JS',
    image: `${reactjs}`,
  },
  {
    name: 'Node JS',
    image: `${nodejs}`,
  },
];
