import React, { Component } from 'react'

export class MainBanner extends Component {
constructor(props) {
    super(props);
    console.log(props);
}
  render() {
    console.log("render:"+this.props.banners);
    return (
      <div>MainBanner</div>
    )
  }
}

export default MainBanner