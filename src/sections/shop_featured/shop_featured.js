import React, { Component } from 'react';
import { Spring, config } from 'react-spring/renderprops';
import { Button } from '@material-ui/core';

import { Section } from '../../components/page/page';

import styles from './shop_featured.module.scss';

const dummyProducts = [
  {
    name: 'Dummy Product',
    price: 799.00,
    img: require('../../static/dev/dummy_product_1.png')
  },
  {
    name: 'Dummy Product',
    price: 799.00,
    img: require('../../static/dev/dummy_product_1.png')
  },
  {
    name: 'Dummy Product',
    price: 799.00,
    img: require('../../static/dev/dummy_product_1.png')
  },
  {
    name: 'Dummy Product',
    price: 799.00,
    img: require('../../static/dev/dummy_product_1.png')
  }
]

export default class ShopFeatured extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: {
        index: 0
      }
    }

    this.setViewIndex = this.setViewIndex.bind(this)
  }

  setViewIndex(index) {
    this.setState({
      ...this.state,
      view: {
        ...this.state.view,
        index
      }
    })
  }

  render() {
    return (
      <Section>
        <div className={styles['shop-featured']}>
          <div className={styles['header']}>
            <div className={styles['title']}>
              More Items you might like
            </div>

            <div className={styles['actions']}>
              <Spring
                config={config.stiff}
                to={{
                  x: this.state.view.index === 0 ? 0 : this.state.view.index === 1 ? 100 : 200
                }}
              >
                {props => (
                  <div
                    className={styles['indicator']}
                    style={{
                      transform: `translateX(${props.x}%)`
                    }}
                  />
                )}
              </Spring>
              
              <div
                className={`${styles['action-item']} ${this.state.view.index === 0 ? styles['active'] : null}`}
                onClick={() => this.setViewIndex(0)}
              >
                Featured
              </div>
              <div
                className={`${styles['action-item']} ${this.state.view.index === 1 ? styles['active'] : null}`}
                onClick={() => this.setViewIndex(1)}
              >
                Arrivals
              </div>
              <div
                className={`${styles['action-item']} ${this.state.view.index === 2 ? styles['active'] : null}`}
                onClick={() => this.setViewIndex(2)}
              >
                Best Sellers
              </div>
            </div>
          </div>

          <div className={styles['products']}>
            <Spring
              config={config.stiff}
              to={{
                x: this.state.view.index === 0 ? 0 : this.state.view.index === 1 ? -100 : -200
              }}
            >
              {props => (
                <div
                  className={styles['products-item']}
                  style={{
                    transform: `translateX(${props.x}%)`
                  }}
                >
                  {
                    dummyProducts.map((item, i) => (
                      <div key={'featured' + i} className={styles['product']}>
                        <div className={styles['product-img']}>
                          <img alt={item.name} src={item.img} />
                        </div>
                        <div className={styles['product-info']}>
                          <h4 className={styles['product-name']}>
                            {item.name}
                          </h4>
                          <p className={styles['product-price']}>
                            R{item.price.toFixed(2)}
                          </p>
                        </div>
                        <Button
                          fullWidth
                          variant='outlined'
                          color='secondary'
                        >
                          Add to cart
                        </Button>
                      </div>
                    ))
                  }
                </div>
              )}
            </Spring>
            
            <Spring
              config={config.stiff}
              to={{
                x: this.state.view.index === 0 ? 0 : this.state.view.index === 1 ? -100 : -200
              }}
            >
              {props => (
                <div
                  className={styles['products-item']}
                  style={{
                    transform: `translateX(${props.x}%)`
                  }}
                >
                  {
                    dummyProducts.map((item, i) => (
                      <div key={'arrivals' + i} className={styles['product']}>
                        <div className={styles['product-img']}>
                          <img alt={item.name} src={item.img} />
                        </div>
                        <div className={styles['product-info']}>
                          <h4 className={styles['product-name']}>
                            {item.name}
                          </h4>
                          <p className={styles['product-price']}>
                            R{item.price.toFixed(2)}
                          </p>
                        </div>
                        <Button
                          fullWidth
                          variant='outlined'
                          color='secondary'
                        >
                          Add to cart
                        </Button>
                      </div>
                    ))
                  }
                </div>
              )}
            </Spring>

            <Spring
              config={config.stiff}
              to={{
                x: this.state.view.index === 0 ? 0 : this.state.view.index === 1 ? -100 : -200
              }}
            >
              {props => (
                <div
                  className={styles['products-item']}
                  style={{
                    transform: `translateX(${props.x}%)`
                  }}
                >
                  {
                    dummyProducts.map((item, i) => (
                      <div key={'sellers' + i} className={styles['product']}>
                        <div className={styles['product-img']}>
                          <img alt={item.name} src={item.img} />
                        </div>
                        <div className={styles['product-info']}>
                          <h4 className={styles['product-name']}>
                            {item.name}
                          </h4>
                          <p className={styles['product-price']}>
                            R{item.price.toFixed(2)}
                          </p>
                        </div>
                        <Button
                          fullWidth
                          variant='outlined'
                          color='secondary'
                        >
                          Add to cart
                        </Button>
                      </div>
                    ))
                  }
                </div>
              )}
            </Spring>
          </div>

          <div className={styles['actions']}>
            <Button
              variant='contained'
              color='primary'
            >
              Go To Shop
            </Button>
          </div>
        </div>
      </Section>
    );
  }
}
