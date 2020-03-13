import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

import styles from './page.module.scss';

export class Page extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <meta name='keywords' content={this.props.keywords ? this.props.keywords.join(', ') : ''} />
          <meta name='description' content={this.props.description} />
          <title>
            {this.props.title}
          </title>
        </Helmet>

        <div className={styles['page']}>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export class Section extends Component {
  render() {
    return (
      <section className={styles['section']}>
        {this.props.children}
      </section>
    )
  }
}
