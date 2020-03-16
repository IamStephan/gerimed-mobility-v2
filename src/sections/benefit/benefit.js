import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { VerifiedUser } from '@material-ui/icons';
import { Spring } from 'react-spring/renderprops';

import { Section } from '../../components/page/page';

import styles from './benefit.module.scss';

export default class Benefit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      carousel: {
        index: 0
      }
    }

    this.setCarouselIndex = this.setCarouselIndex.bind(this)
  }

  setCarouselIndex(index) {
    this.setState({
      ...this.state,
      carousel: {
        ...this.state.carousel,
        index
      }
    })
  }

  render() {
    return (
      <Section>
        <div className={styles['benefit']}>
          <div className={styles['carousel']}>
            <Spring
              to={{
                xPos: this.state.carousel.index === 0 ? 0 : this.state.carousel.index === 1 ? -100 : -200
              }}
            >
              {props => (
                <div
                  className={styles['carousel-item']}
                  style={{
                    transform: `translateX(${props.xPos}%)`
                  }}
                >
                  <img alt='High Quality At a Low Price' src={require('../../static/production/benefit_1.jpg')} className={styles['carousel-img']} />
                  <div className={styles['info']}>
                    <h3 className={styles['info-title']}>
                      High Quality At a Low Price
                    </h3>

                    <div className={styles['info-action']}>
                      <Button
                        variant='contained'
                        color='primary'
                      >
                        See Our Store
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Spring>

            <Spring
              to={{
                xPos: this.state.carousel.index === 1 ? -100 : this.state.carousel.index === 0 ? 0 : -200
              }}
            >
              {props => (
                <div
                  className={styles['carousel-item']}
                  style={{
                    transform: `translateX(${props.xPos}%)`
                  }}
                >
                  <img alt='Fast, Reliable and Friendly' src={require('../../static/production/benefit_1.jpg')} className={styles['carousel-img']} />
                  <div className={styles['info']}>
                    <h3 className={styles['info-title']}>
                      Fast, Reliable and Friendly
                    </h3>

                    <div className={styles['info-action']}>
                      <Button
                        variant='contained'
                        color='primary'
                      >
                        About Us
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Spring>

            <Spring
              to={{
                xPos: this.state.carousel.index === 2 ? -200 : this.state.carousel.index === 0 ? 0 : -100
              }}
            >
              {props => (
                <div
                  className={styles['carousel-item']}
                  style={{
                    transform: `translateX(${props.xPos}%)`
                  }}
                >
                  <img alt='Need a hand from us?' src={require('../../static/production/benefit_1.jpg')} className={styles['carousel-img']} />
                  <div className={styles['info']}>
                    <h3 className={styles['info-title']}>
                      Need a hand from us?
                    </h3>

                    <div className={styles['info-action']}>
                      <Button
                        variant='contained'
                        color='primary'
                      >
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Spring>
          </div>

          <div className={styles['controls']}>
            <div
              className={styles['controls-item']}
              onClick={() => this.setCarouselIndex(0)}
            >
              <h4
                className={`${styles['controls-title']} ${this.state.carousel.index === 0 ? styles['active'] : null}`}
              >
                <VerifiedUser color='secondary' className={styles['controls-icon']} />
                First Class Quality
              </h4>

              <p
                className={`${styles['controls-content']} ${this.state.carousel.index === 0 ? styles['active'] : null}`}
              >
                The highest quality brands at the lowest prices.
              </p>
            </div>

            <div
              className={styles['controls-item']}
              onClick={() => this.setCarouselIndex(1)}
            >
              <h4
                className={`${styles['controls-title']} ${this.state.carousel.index === 1 ? styles['active'] : null}`}
              >
                <VerifiedUser color='secondary' className={styles['controls-icon']} />
                Fast Service
              </h4>

              <p
                className={`${styles['controls-content']} ${this.state.carousel.index === 1 ? styles['active'] : null}`}
              >
                Fast, reliable service provided by the friendliest staff around.
              </p>
            </div>

            <div
              className={styles['controls-item']}
              onClick={() => this.setCarouselIndex(2)}
            >
              <h4
                className={`${styles['controls-title']} ${this.state.carousel.index === 2 ? styles['active'] : null}`}
              >
                <VerifiedUser color='secondary' className={styles['controls-icon']} />
                Friendly Support
              </h4>

              <p
                className={`${styles['controls-content']} ${this.state.carousel.index === 2 ? styles['active'] : null}`}
              >
                Enjoy expert support from our friendly support staff.
              </p>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
