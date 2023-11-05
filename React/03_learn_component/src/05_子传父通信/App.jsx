import React, { Component } from 'react'
import { AddCounter } from './AddCounter'
export class App extends Component {
    constructor(){
        super()
        this.state = {
            counter:100
        }
    }
  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>
            当前计数:{counter}
        </h2>
        <AddCounter/>
      </div>
    )
  }
}

export default App