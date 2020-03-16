import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import debounce from 'lodash/debounce';

import { Section } from '../../components/page/page';

import styles from './shop_specials.module.scss';

const dummyProducts = [
  {
    name: 'Dummy Product',
    price: 799.00,
    discount: 50,
    img: require('../../static/dev/dummy_product_1.png')
  },
  {
    name: 'Dummy Product',
    price: 799.00,
    discount: 50,
    img: require('../../static/dev/dummy_product_1.png')
  },
  {
    name: 'Dummy Product',
    price: 799.00,
    discount: 50,
    img: require('../../static/dev/dummy_product_1.png')
  },
  {
    name: 'Dummy Product',
    price: 799.00,
    discount: 50,
    img: require('../../static/dev/dummy_product_1.png')
  }
]

export default class ShopSpecials extends Component {
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
        <div className={styles['specials']}>
          <div className={styles['column']}>
            {
              dummyProducts.slice(0, 2).map((item, i) => (
                <div key={item} className={styles['item']}>
                  <div className={styles['item-discount']}>
                    -{item.discount}%
                  </div>
                  <img alt={'row1' + i} src={require('../../static/dev/dummy_product_1.png')} className={styles['item-img']} />

                  <div className={styles['item-name']}>
                    {item.name}
                  </div>

                  <div className={styles['item-prices']}>
                    <div className={styles['actual']}>
                      <s>R{item.price.toFixed(2)}</s>
                    </div>
                    <div className={styles['discount']}>
                      R{(item.price - (item.discount / 100 * item.price)).toFixed(2)}
                    </div>
                  </div>

                  <Button
                    variant='contained'
                    color='secondary'
                  >
                    Add to cart
                  </Button>
                </div>
              ))
            }
          </div>
          <div className={styles['column']}>
          {
              dummyProducts.slice(2, 4).map((item, i) => (
                <div key={i} className={styles['item']}>
                  <div className={styles['item-discount']}>
                    -{item.discount}%
                  </div>
                  <img alt={'row2' + i} src={require('../../static/dev/dummy_product_1.png')} className={styles['item-img']} />

                  <div className={styles['item-name']}>
                    {item.name}
                  </div>

                  <div className={styles['item-prices']}>
                    <div className={styles['actual']}>
                      <s>R{item.price.toFixed(2)}</s>
                    </div>
                    <div className={styles['discount']}>
                      R{(item.price - (item.discount / 100 * item.price)).toFixed(2)}
                    </div>
                  </div>

                  <Button
                    variant='contained'
                    color='secondary'
                  >
                    Add to cart
                  </Button>
                </div>
              ))
            }
          </div>

          <div className={styles['column']}>
            <h2 className={styles['title']}>
              Our specials
            </h2>
            <br />

            <p className={styles['content']}>
              Don't compansate, get only the best from us.
              Having these items on sale provides you affordable options at exeptional quality.
            </p>
            <br/>

            {
              this.state.window.width > Number(styles.breakpointTwo) ? (
                <div className={styles['action']}>
                  <Button
                    variant='contained'
                    color='primary'
                  >
                    Contact Us
                  </Button>
                </div>

              ) : null
            }

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
