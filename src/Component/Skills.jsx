import React, { useEffect } from 'react';
import styles from './Skills.module.scss';
import antDesign from '../assets/Images/Icons/antdesign.png';
import bootstrap from '../assets/Images/Icons/bootstrap.png';
import css from '../assets/Images/Icons/css3.png';
import express from '../assets/Images/Icons/express.png';
import git from '../assets/Images/Icons/git-wordmark.png';
import googlecloud from '../assets/Images/Icons/googlecloud.png';
import html from '../assets/Images/Icons/html5.png';
import js from '../assets/Images/Icons/javascript.png';
import mongoDb from '../assets/Images/Icons/mongodb-wordmark.png';
import nodejs from '../assets/Images/Icons/nodejs.png';
import postgre from '../assets/Images/Icons/postgresql-wordmark.png';
import postman from '../assets/Images/Icons/postman.png';
import reactjs from '../assets/Images/Icons/react.png';
import redux from '../assets/Images/Icons/redux.png';
import sequelize from '../assets/Images/Icons/sequelize.png';
import wordpress from '../assets/Images/Icons/wordpress.png';
import sass from '../assets/Images/Icons/sass.png';
import firebase from '../assets/Images/Icons/firebase.png';
import slack from '../assets/Images/Icons/slack.png';

const softSkills = [
  'Comunicación efectiva',
  'Resolución de problemas',
  'Pensamiento crítico',
  'Colaboración',
  'Adaptabilidad',
  'Creatividad',
  'Gestión del tiempo',
  'Aprendizaje continuo',
  'Empatía',
  'Autodidacta',
];

export default function Skills() {
  ;

  return (
    <section id="#skills" className={styles.skills}>
      <h1 className={styles.h1Skill}>Stack Tech:</h1>
      <div className={styles.skiDiv}>
        <div>
        <div>
          <div className={styles.skillsDiv}>
            <div className={styles.skillsContainer}>
              <div className={`${styles.nameSkill}`}>
                Javascript
                <div className={styles.teal}>
                  <div className={styles.circleInner}>
                    <img
                      className={styles.js}
                      src={js}
                      alt="js"
                      width={'50px'}
                    />
                  </div>
                </div>
                65%
              </div>
              <div className={`${styles.nameSkill}`}>
                HMTL
                <div className={styles.html}>
                  <div className={styles.circleInner}>
                    <img src={html} alt="js" width={'50px'} />
                  </div>
                </div>
                60%
              </div>
              <div className={`${styles.nameSkill}`}>
                CSS
                <div className={styles.css}>
                  <div className={styles.circleInner}>
                    <img src={css} alt="js" width={'50px'} />
                  </div>
                </div>
                60%
              </div>
              <div className={`${styles.nameSkill}`}>
                React JS
                <div className={styles.react}>
                  <div className={styles.circleInner}>
                    <img src={reactjs} alt="js" width={'50px'} />
                  </div>
                </div>
                65%
              </div>
              <div className={`${styles.nameSkill}`}>
                Redux
                <div className={styles.redux}>
                  <div className={styles.circleInner}>
                    <img src={redux} alt="js" width={'50px'} />
                  </div>
                </div>
                50%
              </div>
              <div className={`${styles.nameSkill}`}>
                AntDesign
                <div className={styles.ant}>
                  <div className={styles.circleInner}>
                    <img src={antDesign} alt="js" width={'50px'} />
                  </div>
                </div>
                50%
              </div>
              <div className={`${styles.nameSkill}`}>
                Bootstrap
                <div className={styles.boot}>
                  <div className={styles.circleInner}>
                    <img src={bootstrap} alt="js" width={'50px'} />
                  </div>
                </div>
                50%
              </div>
              <div className={`${styles.nameSkill}`}>
                SASS
                <div className={styles.sass}>
                  <div className={styles.circleInner}>
                    <img src={sass} alt="sass" width={'50px'} />
                  </div>
                </div>
                70%
              </div>
              <div className={`${styles.nameSkill}`}>
                NodeJS
                <div className={styles.node}>
                  <div className={styles.circleInner}>
                    <img src={nodejs} alt="js" width={'50px'} />
                  </div>
                </div>
                65%
              </div>
              <div className={`${styles.nameSkill}`}>
                ExpressJS
                <div className={styles.express}>
                  <div className={styles.circleInner}>
                    <img src={express} alt="js" width={'50px'} />
                  </div>
                </div>
                65%
              </div>
              <div className={`${styles.nameSkill}`}>
                Sequelize
                <div className={styles.seque}>
                  <div className={styles.circleInner}>
                    <img src={sequelize} alt="js" width={'50px'} />
                  </div>
                </div>
                70%
              </div>
              <div className={`${styles.nameSkill}`}>
                MongoDB
                <div className={styles.mongo}>
                  <div className={styles.circleInner}>
                    <img src={mongoDb} alt="js" width={'50px'} />
                  </div>
                </div>
                50%
              </div>
              <div className={`${styles.nameSkill}`}>
                Firebase
                <div className={styles.fire}>
                  <div className={styles.circleInner}>
                    <img src={firebase} alt="js" width={'50px'} />
                  </div>
                </div>
                50%
              </div>
              <div className={`${styles.nameSkill}`}>
                PostgreSQL
                <div className={styles.postgre}>
                  <div className={styles.circleInner}>
                    <img src={postgre} alt="js" width={'50px'} />
                  </div>
                </div>
                70%
              </div>
              <div className={`${styles.nameSkill}`}>
                Postman
                <div className={styles.post}>
                  <div className={styles.circleInner}>
                    <img src={postman} alt="js" width={'50px'} />
                  </div>
                </div>
                80%
              </div>
              <div className={`${styles.nameSkill}`}>
                Google Cloud
                <div className={styles.gc}>
                  <div className={styles.circleInner}>
                    <img src={googlecloud} alt="js" width={'50px'} />
                  </div>
                </div>
                50%
              </div>
              <div className={`${styles.nameSkill}`}>
                Wordpress
                <div className={styles.wordpress}>
                  <div className={styles.circleInner}>
                    <img src={wordpress} alt="js" width={'50px'} />
                  </div>
                </div>
                55%
              </div>
              <div className={`${styles.nameSkill}`}>
                Git
                <div className={styles.git}>
                  <div className={styles.circleInner}>
                    <img src={git} alt="js" width={'50px'} />
                  </div>
                </div>
                70%
              </div>
              <div className={`${styles.nameSkill}`}>
                Slack
                <div className={styles.slack}>
                  <div className={styles.circleInner}>
                    <img src={slack} alt="js" width={'50px'} />
                  </div>
                </div>
                100%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.softDiv}>
          <h1>Soft Skill:</h1>
          <br />
          <ul className={styles.ulSkills}>
            {softSkills.map((skill, index) => (
              <li key={index} className={styles.liSkill}>
                {skill}
                <div className={styles.check}>
                  <div className={styles.tick}></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}
