import React, { Component } from 'react'
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context'

export class HomeInfo extends Component {
  render() {
    console.log(this.context);
    return (
      <div>
        <h2>HemoInfo:{this.context.color}</h2>
        <UserContext.Consumer>
            {
              value =>{
                return <h2>Info User :{value.nickname}</h2>
              }
            }
        </UserContext.Consumer>
      </div>
    )
  }
}

HomeInfo.contextType = ThemeContext

export default HomeInfo