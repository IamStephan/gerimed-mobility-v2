import React, { PureComponent } from 'react';
import { Button } from '@material-ui/core';

import styles from './footer.module.scss';

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className={styles['footer-container']}>
        <div className={styles['footer']}>
          <div className={styles['top']}>
            <div className={styles['column']}>
              <h3 className={styles['title']}>
                Gerimed Mobility
              </h3>
              <br />
              <div className={styles['content']}>
                <p>
                  844@Oostewal Building, 
                </p>
                <p>
                  Oostewal Rd 
                </p>
                <p>
                  Langebaan, 7357 
                </p>

                <br/>

                <p>            
                  Tel: 022 772 1273 
                </p>
                <p>
                  Cell: 082 079 4173 
                </p>
              </div>

              <br />

              <div className={styles['action']}>
                <Button
                  variant='contained'
                  color='primary'
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className={styles['column']}>
              <h3 className={styles['title']}>
                Gerimed Langebaan
              </h3>
              <br />
              <div className={styles['content']}>
                <p>
                  Langebaan Retirement
                </p>
                <p>
                  Village, Aftree-Oord 
                </p>

                <br/>

                <p>            
                  Tel: 022 772 1252 / 2385 
                </p>
                <p>
                  Fax: 022 772 2061 
                </p>
              </div>

              <br />

              <div className={styles['action']}>
                <Button
                  variant='contained'
                  color='primary'
                >
                  Visit
                </Button>
              </div>
            </div>

            <div className={styles['column']}>
              <h3 className={styles['title']}>
                Gerimed Kleinmond
              </h3>
              <br />
              <div className={styles['content']}>
                <p>
                  Kogelpark Retirement
                </p>
                <p>
                  Village, Botrivier Road
                </p>

                <br/>

                <p>            
                  Tel: 028 271 3994 
                </p>
                <p>
                  Fax: 028 271 3488
                </p>
              </div>

              <br />

              <div className={styles['action']}>
                <Button
                  variant='contained'
                  color='primary'
                >
                  Visit
                </Button>
              </div>
            </div>
          </div>

          <div className={styles['seperator']} />

          <div className={styles['bottom']}>
            <div className={styles['left']}>
              <Button
                variant='text'
                color='primary'
              >
                Terms & Conditions
              </Button>
            </div>

            <div className={styles['right']}>
              ©2020 - Gerimed Mobility  |   All right reserved
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
