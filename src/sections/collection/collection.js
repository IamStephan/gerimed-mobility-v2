import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import { Section } from '../../components/page/page';

import styles from './collection.module.scss';

export default class Collection extends Component {
  render() {
    return (
      <Section>
        <div className={styles['collection']}>
          <div className={styles['left']}>
            <div className={styles['item']}>
              <img alt='shopping' src={require('../../static/production/collection_shop.jpg')} className={styles['img']} />
              <h3 className={styles['header']}>
                SHOP
              </h3>

              <p className={styles['content']}>
                The best prices
              </p>

              <Button
                variant='contained'
                color='primary'
              >
                Shop now
              </Button>
            </div>
          </div>

          <div className={styles['right']}>
            <div className={styles['item']}>
              <img alt='renting' src={require('../../static/production/collection_rentals.jpg')} className={styles['img']} />
              <h3 className={styles['header']}>
                RENTALS
              </h3>

              <p className={styles['content']}>
                The friendliest service
              </p>

              <Button
                variant='contained'
                color='primary'
              >
                Rent now
              </Button>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
