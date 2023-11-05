import React, { Component } from 'react'
import NavBar from './nav-bar'
import Navbar2 from './nav-bar2'

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
           <button>按钮</button>
           {/* <h2>我是标题</h2>
           <i>斜体文字</i> */}
        </NavBar>

        <Navbar2
          leftSlot={1}
          centerSlot={2}
          rightSlot={3}
        />
      </div>
    )
  }
}

export default App