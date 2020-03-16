import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Spring, config } from 'react-spring/renderprops';
import { observer, inject } from 'mobx-react';
import { Button, ButtonGroup } from '@material-ui/core';

import styles from './sidebar.module.scss';

@withRouter
@inject('AppStore')
@observer
export default class Sidebar extends Component {
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
      this.props.AppStore.closeSidebar()
    }
  }

  render() {
    return (
      <div className={`${styles['sidebar']} ${!this.state.isOpen ? styles['click-through'] : null}`}>
        <Spring
          to={{
            opacity: this.state.isOpen ? 1 : 0,
            translateX: this.state.isOpen ? 0 : -100
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
                <img alt='logo' src={require('../../static/dev/logo.png')} className={styles['logo']} />

                <div className={styles['content']}>
                  <ButtonGroup
                    fullWidth
                    variant='text'
                    color='primary'
                    orientation='vertical'
                  >
                    <Button
                      variant={this.props.location.pathname === '/' ? 'contained' : 'text'}
                    >
                      Home
                    </Button>
                    <Button>
                      Shop
                    </Button>
                    <Button>
                      Rentals
                    </Button>
                    <Button>
                      About Us
                    </Button>
                    <Button>
                      Contact Us
                    </Button>
                    <Button>
                      T & C
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </Fragment>
          )}
        </Spring>
      </div>
    );
  }
}
