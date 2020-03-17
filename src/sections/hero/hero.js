import React, { useState } from 'react';
import Image from 'react-image';
import { Button } from '@material-ui/core';
import { Spring } from 'react-spring/renderprops';

import { Section } from '../../components/page/page';

import styles from './hero.module.scss';

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={styles['hero']}>
      <Image
        alt='Hero'
        src={require('../../static/production/hero_cropped_1.jpg')}
        className={styles['img']} 
        onLoad={() => setLoaded(true)}
      />
      
      <Section>
        <div className={styles['hero-content']}>
          <div className={styles['left']}>
            <Spring
              from={{
                opacity: 0,
                x: -100
              }}

              to={{
                opacity: 1,
                x: 0
              }}

              immediate={!loaded}
              reverse={!loaded}
              reset={loaded}

              config={{
                delay: 200
              }}
            >
              {props => (
                <h1
                  className={styles['title']}
                  style={{
                    opacity: props.opacity,
                    transform: `translateX(${props.x}px)`
                  }}
                >
                  Aiding you, to live a better life.
                </h1>
              )}
            </Spring>

            <Spring
              from={{
                opacity: 0,
                x: -100
              }}

              to={{
                opacity: 1,
                x: 0
              }}

              immediate={!loaded}
              reverse={!loaded}
              reset={loaded}

              config={{
                delay: 400
              }}
            >
              {props => (
                <p
                  className={styles['content']}
                  style={{
                    opacity: props.opacity,
                    transform: `translateX(${props.x}px)`
                  }}
                >
                  Helping you live a normal life with exceptional quality tools and equipment.
                </p>
              )}
            </Spring>
            
            
            <Spring
              from={{
                opacity: 0,
                x: -100
              }}

              to={{
                opacity: 1,
                x: 0
              }}

              immediate={!loaded}
              reverse={!loaded}
              reset={loaded}

              config={{
                delay: 600
              }}
            >
              {props => (
                <div
                  className={styles['actions']}
                  style={{
                    opacity: props.opacity,
                    transform: `translateX(${props.x}px)`
                  }}
                >
                  <Button
                    variant='contained'
                    color='primary'
                    size='large'
                    className={styles['btn-1']}
                  >
                    Our Shop
                  </Button>

                  <Button
                    variant='outlined'
                    color='primary'
                    className={styles['btn-2']}
                    size='large'
                  >
                    Learn More
                  </Button>
                </div>
              )}
            </Spring>

          </div>

          <div className={styles['right']} />
        </div>
      </Section>
    </div>
  )
}

