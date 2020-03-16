import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Button, IconButton } from '@material-ui/core';
import { ShoppingCart, Menu } from '@material-ui/icons';

import Sidebar from '../sidebar/sidebar';
import Cart from '../cart/cart';

import styles from './navbar.module.scss';


@withRouter
@inject('AppStore')
@observer
export default class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scroll: {
        y: window.scrollY
      },
      window: {
        width: window.innerWidth
      },
      notification: {
        isOpen: false
      }
    }

    this.getScrollY = this.getScrollY.bind(this)
    this.getWindowWidth = this.getWindowWidth.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', debounce(this.getScrollY, 100))
    window.addEventListener('resize', debounce(this.getWindowWidth, 100))
    this.getScrollY()
    this.getWindowWidth()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', debounce(this.getScrollY, 100))
    window.removeEventListener('resize', debounce(this.getWindowWidth, 100))
  }

  getScrollY() {
    this.setState({
      ...this.state,
      scroll: {
        ...this.scroll,
        y: window.scrollY
      }
    })
  }

  getWindowWidth() {
    this.setState({
      ...this.state,
      window: {
        ...this.window,
        width: window.innerWidth
      }
    })
  }

  NotificationBtn = React.createRef()

  render() {
    const { AppStore } = this.props

    const home = this.props.location.pathname === '/' ? styles['homepage'] : null
    const scrolled = this.state.scroll.y > 0 ? styles['scrolled'] : null

    return (
      // for normal page
      <nav
        className={`${styles['navbar-container']} ${scrolled} ${home}`}
      >
        <div className={styles['navbar']}>
          {
            this.state.window.width <= Number(styles.breakpointOne) ? (
              <IconButton
                color='primary'
                
                onClick={() => AppStore.openSidebar()}
              >
                <Menu />
              </IconButton>
            ) : null
          }
          {
            this.state.window.width >= Number(styles.breakpointTwo) ? (
              <img alt='logo' src={require('../../static/dev/logo.png')} className={styles['logo']} />
            ) : (
              <img alt='logo' src={require('../../static/dev/logo.png')} className={styles['logo-small']} />
            )
          }
          

          {
            this.state.window.width >= Number(styles.breakpointOne) ? (
              <div className={styles['navbar-routes']}>
                <Button
                  className={styles['btn']}
                  variant='text'
                  color='primary'
                >
                  Home
                </Button>

                <Button
                  className={styles['btn']}
                  variant='text'
                  color='primary'
                >
                  Shop
                </Button>

                <Button
                  className={styles['btn']}
                  variant='text'
                  color='primary'
                >
                  Rentals
                </Button>

                <Button
                  className={styles['btn']}
                  variant='text'
                  color='primary'
                >
                  About Us
                </Button>

                <Button
                  className={styles['btn']}
                  variant='text'
                  color='primary'
                >
                  Contact Us
                </Button>
              </div>
            ) : null
          }
          

          <div className={styles['navbar-actions']}>
            <IconButton
              color='primary'
              className={styles['btn']}
              onClick={() => AppStore.openCart()}
            >
              <ShoppingCart />
            </IconButton>

            {/* <IconButton color='primary' className={styles['btn']} ref={ref => this.NotificationBtn = ref}>
              <Badge color='secondary' badgeContent='1'>
                <Notifications />
              </Badge>
            </IconButton> */}
          </div>
        </div>
        
        {
          AppStore.cart.isOpen ? <Cart /> : null
        }

        {
          AppStore.sidebar.isOpen && this.state.window.width <= Number(styles.breakpointOne) ? <Sidebar /> : null
        }
      </nav>
    );
  }
}
