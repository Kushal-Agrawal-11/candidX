import React from 'react';
import styles from './About.module.css'; // Check the correct file path and name
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className={styles['about-container']}>
      <Navbar />

      <h1>Hello Martin!</h1>
    </div>
  );
}

export default About;
