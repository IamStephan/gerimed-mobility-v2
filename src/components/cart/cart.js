import React, { Component, Fragment } from 'react';
import { Spring, config } from 'react-spring/renderprops';
import { observer, inject } from 'mobx-react';
import { Button } from '@material-ui/core';

import styles from './cart.module.scss';

@inject('AppStore')
@observer
export default class Cart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this.closeDrawer = this.closeDrawer.bind(this)
    this.onRestClose = this.onRestClose.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ...this.state,
        isOpen: true
      })
    }, 10)
  }

  closeDrawer() {
    if(this.state.isOpen) {
      this.setState({
        ...this.state,
        isOpen: false
      })
    }
  }

  onRestClose() {
    if(!this.state.isOpen) {
      this.props.AppStore.closeCart()
    }
  }

  render() {
    return (
      <div className={`${styles['cart']} ${!this.state.isOpen ? styles['click-through'] : null}`}>
        <Spring
          to={{
            opacity: this.state.isOpen ? 1 : 0,
            translateX: this.state.isOpen ? 0 : 100
          }}

          config={config.stiff}

          onRest={this.onRestClose}
        >
          {props => (
            <Fragment>
              <div
                className={styles['dimmer']}
                onClick={() => this.closeDrawer()}
                style={{
                  opacity: props.opacity
                }}
              />

              <div
                className={styles['menu']}
                style={{
                  opacity: props.opacity,
                  transform: `translateX(${props.translateX}%)`
                }}
              >
                <div className={styles['header']}>
                  <h3 className={styles['title']}>
                    Your Cart
                  </h3>
                </div>

                <div className={styles['content']}>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>

                <div className={styles['actions']}>
                  <Button
                    fullWidth
                    variant='contained'
                    color='secondary'
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </Fragment>
          )}
        </Spring>
      </div>
    );
  }
}
