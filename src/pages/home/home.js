import React, { Component } from 'react';

import { Page } from '../../components/page/page';

// Sections
import Hero from '../../sections/hero/hero';
import Suppliers from '../../sections/suppliers/suppliers';
import ShopSpecials from '../../sections/shop_specials/shop_specials';
import ShopFeatured from '../../sections/shop_featured/shop_featured';
import Testimonials from '../../sections/testimonials/testimonials';
import Collection from '../../sections/collection/collection';
import Benefit from '../../sections/benefit/benefit';
import RentalsCTA from '../../sections/rental_cta/rentals_cta';

export default class Home extends Component {
  render() {
    return (
      <Page
        title='Home | Gerimed Mobility'
      >
        <Hero />
        <Suppliers />
        <ShopSpecials />
        <ShopFeatured />
        <Testimonials />
        <Collection />
        <Benefit />
        <RentalsCTA />
      </Page>
    );
  }
}
