import React, { Component } from 'react'
import Home from './Home'
import Profile from './Profile'
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context'

export class App extends Component {
  render() {
    return (
      <div>
        <h2>App</h2>
        <UserContext.Provider value={{nickname:"kobe",age:30}}>
          <ThemeContext.Provider value={{color:"red",size:"30"}}>
            <Home/>
          </ThemeContext.Provider>
        </UserContext.Provider>
        <Profile/>
      </div>
    )
  }
}

export default App