import React, { PureComponent } from 'react';
import Image from 'react-image';
import { Button } from '@material-ui/core';

import { Section } from '../../components/page/page';

import globals from '../../utils/globals.scss';
import styles from './hero.module.scss';

export default class Hero extends PureComponent {
  render() {
    return (
      <div className={styles['hero']}>
        <Image
          alt='Hero'
          src={require('../../static/production/hero_cropped_1.jpg')}
          className={styles['img']} />
        
        <Section>
          <div className={styles['hero-content']}>
            <div className={styles['left']}>
              <h1 className={styles['title']}>
                Aiding you, to live a better life.
              </h1>

              <p className={styles['content']}>
                Helping you live a normal life with exceptional quality tools and equipment.
              </p>

              <div className={styles['actions']}>
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
            </div>

            <div className={styles['right']} />
          </div>
        </Section>
      </div>
    );
  }
}
