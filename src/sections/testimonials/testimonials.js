import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { FormatQuote } from '@material-ui/icons';
import debounce from 'lodash/debounce';

import { Section } from '../../components/page/page';

import styles from './testimonials.module.scss';

export default class Testimonials extends Component {
  constructor(props) {
    super(props)

    this.state = {
      window: {
        width: window.innerWidth
      }
    }

    this.getWindowWidth = this.getWindowWidth.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', debounce(this.getWindowWidth, 500))
    this.getWindowWidth()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', debounce(this.getWindowWidth, 500))
  }

  getWindowWidth() {
    this.setState({
      ...this.state,
      window: {
        ...this.state.window,
        width: window.innerWidth
      }
    })
  }

  render() {
    return (
      <Section>
        <div className={styles['testimonials']}>
          <div className={styles['column']}>
            <h2 className={styles['title']}>
              What people say
            </h2>
            <br />

            <p className={styles['content']}>
              From the best products and services come the 
              best customer experiences. Here are a few 
              things people say about us.
            </p>
            <br/>

            {
              this.state.window.width > Number(styles.breakpointTwo) ? (
                <Button
                  variant='contained'
                  color='primary'
                >
                  Contact Us
                </Button>
              ) : null
            }

          </div>
          <div className={styles['column']}>
            <div className={styles['item']}>
              <FormatQuote fontSize='large' color='primary' />
              <br />
              <p className={styles['item-content']}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu.
              </p>
              <br />

              <div className={styles['item-name']}>
                Erest Nicolas
              </div>

              <div className={styles['item-occupation']}>
                Student, 23
              </div>
            </div>
            <div className={styles['item']}>
              <FormatQuote fontSize='large' color='primary' />
              <br />
              <p className={styles['item-content']}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu.
              </p>
              <br />

              <div className={styles['item-name']}>
                Erest Nicolas
              </div>

              <div className={styles['item-occupation']}>
                Student, 23
              </div>
            </div>
          </div>
          <div className={styles['column']}>
            <div className={styles['item']}>
              <FormatQuote fontSize='large' color='primary' />
              <br />
              <p className={styles['item-content']}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu.
              </p>
              <br />

              <div className={styles['item-name']}>
                Erest Nicolas
              </div>

              <div className={styles['item-occupation']}>
                Student, 23
              </div>
            </div>
            <div className={styles['item']}>
              <FormatQuote fontSize='large' color='primary' />
              <br />
              <p className={styles['item-content']}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu.
              </p>
              <br />

              <div className={styles['item-name']}>
                Erest Nicolas
              </div>

              <div className={styles['item-occupation']}>
                Student, 23
              </div>
            </div>
          </div>

          {
            this.state.window.width < Number(styles.breakpointTwo) ? (
              <div className={styles['column']}>
                <div className={styles['action']}>
                  <Button
                    variant='contained'
                    color='primary'
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            ) : null
          }
        </div>
      </Section>
    );
  }
}
