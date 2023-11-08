import React, { Component } from 'react'
import HomeInfo from './HomeInfo';
import HomeBanner from './HomeBanner';

export class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home</h3>
        <HomeInfo/>
        <HomeBanner />
      </div>
    )
  }
}

export default Home