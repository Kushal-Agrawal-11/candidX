import React from 'react';
import styles from './Home.module.css';
import Navbar from '../components/Navbar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  return (
    <div className={styles['home-container']}>
      <Navbar />
      <div className={styles['carousel-container']}>
        <Carousel>
          <div>
            <img src="/images/img-7jpg@2x.png" alt="Carousel Slide 1" />
            <p className={styles.legend}>Legend 1</p>
          </div>
          <div>
            <img src="carousel-image-2.jpg" alt="Carousel Slide 2" />
            <p className={styles.legend}>Legend 2</p>
          </div>
          <div>
            <img src="carousel-image-3.jpg" alt="Carousel Slide 3" />
            <p className={styles.legend}>Legend 3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
