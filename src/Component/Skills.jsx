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
import Spline from '@splinetool/react-spline';

export default function Skills({ setActiveSection }) {
  useEffect(() => {
    setActiveSection('skills');
  }, [setActiveSection]);

  return (
    <section id="#skills" className={styles.skills}>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsDiv}>
          <h1>Habilidades Técnicas:</h1>
          <div className={styles.skillsDiv}>
            <div className={`${styles.nameSkill}`}>
              Javascript
              <div className={styles.teal}>
                <div className={styles.circleInner}>
                  <img className={styles.js} src={js} alt="js" width={'50px'} />
                </div>
              </div>
              60%
            </div>
            <div className={`${styles.nameSkill}`}>
              HMTL5
              <div className={styles.html}>
                <div className={styles.circleInner}>
                  <img src={html} alt="js" width={'50px'} />
                </div>
              </div>
              60%
            </div>
            <div className={`${styles.nameSkill}`}>
              CCS3
              <div className={styles.teal}>
                <div className={styles.circleInner}>
                  <img src={css} alt="js" width={'50px'} />
                </div>
              </div>
              60%
            </div>
            <div className={`${styles.nameSkill}`}>
              React JS
              <div className={styles.teal}>
                <div className={styles.circleInner}>
                  <img src={reactjs} alt="js" width={'50px'} />
                </div>
              </div>
              60%
            </div>

            <div className={`${styles.nameSkill}`}>
              Redux
              <div className={styles.teal}>
                <div className={styles.circleInner}>
                  <img src={redux} alt="js" width={'50px'} />
                </div>
              </div>
              60%
            </div>
            <div className={`${styles.nameSkill}`}>
              Ant-Design
              <div className={styles.teal}>
                <div className={styles.circleInner}>
                  <img src={antDesign} alt="js" width={'50px'} />
                </div>
              </div>
              60%
            </div>
            <div className={`${styles.nameSkill}`}>
              Bootstrap
              <div className={styles.teal}>
                <div className={styles.circleInner}>
                  <img src={bootstrap} alt="js" width={'50px'} />
                </div>
              </div>
              60%
            </div>
            <div className={`${styles.nameSkill}`}>
              SASS
              <div className={styles.teal}>
                <div className={styles.circleInner}>
                  <img src={sass} alt="sass" width={'50px'} />
                </div>
              </div>
              60%
            </div>
            <div className={`${styles.nameSkill}`}>
              Node JS
              <div className={styles.teal}>
                <div className={styles.circleInner}>
                  <img src={nodejs} alt="js" width={'50px'} />
                </div>
              </div>
              60%
            </div>
            <div className={`${styles.nameSkill}`}>
              Express JS
              <div className={styles.teal}>
                <div className={styles.circleInner}>
                  <img src={express} alt="js" width={'50px'} />
                </div>
              </div>
              60%
            </div>
            <div className={`${styles.nameSkill}`}>
              Sequelize
              <div className={styles.teal}>
                <div className={styles.circleInner}>
                  <img src={sequelize} alt="js" width={'50px'} />
                </div>
              </div>
              60%
            </div>
            <div className={`${styles.nameSkill}`}>
              MongoDB
              <div className={styles.teal}>
                <div className={styles.circleInner}>
                  <img src={mongoDb} alt="js" width={'50px'} />
                </div>
              </div>
              60%
            </div>
            <div className={`${styles.nameSkill}`}>
              Firebase
              <div className={styles.teal}>
                <div className={styles.circleInner}>
                  <img src={firebase} alt="js" width={'50px'} />
                </div>
              </div>
              60%
            </div>
            <div className={`${styles.nameSkill}`}>
              PostgreSQL
              <div className={styles.teal}>
                <div className={styles.circleInner}>
                  <img src={postgre} alt="js" width={'50px'} />
                </div>
              </div>
              60%
            </div>
            <div className={`${styles.nameSkill}`}>
              Postman
              <div className={styles.teal}>
                <div className={styles.circleInner}>
                  <img src={postman} alt="js" width={'50px'} />
                </div>
              </div>
              60%
            </div>
            <div className={`${styles.nameSkill}`}>
              Google Cloud
              <div className={styles.teal}>
                <div className={styles.circleInner}>
                  <img src={googlecloud} alt="js" width={'50px'} />
                </div>
              </div>
              60%
            </div>
            <div className={`${styles.nameSkill}`}>
              Wordpress
              <div className={styles.teal}>
                <div className={styles.circleInner}>
                  <img src={wordpress} alt="js" width={'50px'} />
                </div>
              </div>
              60%
            </div>
            <div className={`${styles.nameSkill}`}>
              Git
              <div className={styles.teal}>
                <div className={styles.circleInner}>
                  <img src={git} alt="js" width={'50px'} />
                </div>
              </div>
              60%
            </div>
            <div className={`${styles.nameSkill}`}>
              Slack
              <div className={styles.teal}>
                <div className={styles.circleInner}>
                  <img src={slack} alt="js" width={'50px'} />
                </div>
              </div>
              60%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
