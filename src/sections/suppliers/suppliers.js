import React, { Component } from 'react';

import { Section } from '../../components/page/page';

import styles from './suppliers.module.scss';

export default class Suppliers extends Component {
  render() {
    return (
      <Section>
        <div className={styles['suppliers']}>
          <div className={styles['supps']}>
            <div className={styles['supps-item']}>
              <img alt='supplier' src={require('../../static/dev/primacare_logo.png')} className={styles['supps-img']} />
            </div>

            <div className={styles['supps-item']}>
              <img alt='supplier' src={require('../../static/dev/primacare_logo.png')} className={styles['supps-img']} />
            </div>

            <div className={styles['supps-item']}>
              <img alt='supplier' src={require('../../static/dev/primacare_logo.png')} className={styles['supps-img']} />
            </div>

            <div className={styles['supps-item']}>
              <img alt='supplier' src={require('../../static/dev/primacare_logo.png')} className={styles['supps-img']} />
            </div>
          </div>
        </div>
      </Section>

    );
  }
}
