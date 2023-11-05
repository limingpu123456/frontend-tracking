import React, { Component } from 'react'

export class AddCounter extends Component {
  addCound(count){
      
  }
  render() {
    return (
      <div>
        <button onClick={e => this.addCount(1)}>+1</button>
        <button>+5</button>
        <button>+10</button>
      </div>
    )
  }
}

export default AddCounter