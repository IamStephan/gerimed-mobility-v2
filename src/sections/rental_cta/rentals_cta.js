import React, { PureComponent } from 'react';
import { Button } from '@material-ui/core';

import { Section } from '../../components/page/page';

import styles from './rentals_cta.module.scss';

export default class RentalsCTA extends PureComponent {
  render() {
    return (
      <div className={styles['rentals_cta_container']}>
        <Section>
          <div className={styles['rentals_cta']}>
            <div className={styles['left']}>
              <h1 className={styles['title']}>
                Need a rental?
              </h1>

              <p className={styles['content']}>
                Download this form to get started or see how we do it.
              </p>
            </div>

            <div className={styles['right']}>
              <Button
                variant='contained'
                color='primary'
                size='large'
                className={styles['btn-1']}
              >
                Download
              </Button>

              <Button
                variant='outlined'
                color='primary'
                size='large'
                className={styles['btn-2']}
              >
                How It Works
              </Button>
            </div>
          </div>
        </Section>
      </div>
    );
  }
}
