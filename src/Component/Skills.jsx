import React, { useEffect } from 'react';
import styles from './Skills.module.scss';
import antDesign from '../assets/Images/Icons/antdesign.png'
import bootstrap from '../assets/Images/Icons/bootstrap.png'
import css from '../assets/Images/Icons/css3.png'
import express from '../assets/Images/Icons/express.png'
import git from '../assets/Images/Icons/git-wordmark.png'
import googlecloud from '../assets/Images/Icons/googlecloud.png'
import html from '../assets/Images/Icons/html5.png'
import js from '../assets/Images/Icons/javascript.png'
import mongoDb from '../assets/Images/Icons/mongodb-wordmark.png'
import nodejs from '../assets/Images/Icons/nodejs.png'
import postgre from '../assets/Images/Icons/postgresql-wordmark.png'
import postman from '../assets/Images/Icons/postman.png'
import reactjs from '../assets/Images/Icons/react.png'
import redux from '../assets/Images/Icons/redux.png'
import sequelize from '../assets/Images/Icons/sequelize.png'
import wordpress from '../assets/Images/Icons/wordpress.png'
import sass from '../assets/Images/Icons/sass.png'
import firebase from '../assets/Images/Icons/firebase.png'
import slack from '../assets/Images/Icons/slack.png'
import Spline from '@splinetool/react-spline';


export default function Skills({setActiveSection}) {

    useEffect(() => {
        setActiveSection('skills'); 
      }, [setActiveSection]);

    return (
        <section id='#skills' className={styles.skills}>
        <div className={styles.skillsContainer}>
            <div className={styles.skillsDiv}>
                <h1>Habilidades Técnicas:</h1>
                <div>
                    <h2>Programación:</h2>
                <img src={js} alt="js" width={'50px'}/>
                </div>
                <div>
                    <h2>Front-End:</h2>
                <img src={html} alt="js" width={'50px'}/>
                <img src={css} alt="js" width={'50px'}/>
                <img src={reactjs} alt="js" width={'50px'}/>
                <img src={redux} alt="js" width={'50px'}/>
                <img src={antDesign} alt="js" width={'50px'}/>
                <img src={bootstrap} alt="js" width={'50px'}/>
                <img src={sass} alt="sass" width={'50px'}/>
                </div>
                <div>
                    <h2>Back-End:</h2>
                <img src={nodejs} alt="js" width={'50px'}/>
                <img src={express} alt="js" width={'50px'}/>
                <img src={sequelize} alt="js" width={'50px'}/>
                <img src={mongoDb} alt="js" width={'50px'}/>
                <img src={postgre} alt="js" width={'50px'}/>
                <img src={firebase} alt="js" width={'50px'}/>
                </div>
                <div>
                    <h2>Herramientas y Otros:</h2>
                <img src={postman} alt="js" width={'50px'}/>
                <img src={googlecloud} alt="js" width={'50px'}/>
                <img src={wordpress} alt="js" width={'50px'}/>
                <img src={git} alt="js" width={'50px'}/>
                <img src={slack} alt="js" width={'50px'}/>
                </div>
            </div>
        </div>
    </section>
  )
}
