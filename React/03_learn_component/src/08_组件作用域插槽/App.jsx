import React, { Component } from 'react'
import { TabControl } from './TabControl'
export class App extends Component {
  constructor(){
    super()
    this.state = {
      titles:["流行","新款","精选"],
      tabIndex:0
    }
  }
  thistabClick(index){
    this.setState({tabIndex:index})
  }

  getTabItemType(item){
      if(item === "流行"){
        return <span>{item}</span>
      }else if(item === "新款"){
        return <button>{item}</button>
      }else{
        return <i>{item}</i>
      }
  }
  render() {
    const { titles,tabIndex } = this.state;
    return (
      <div className='app'>
        <TabControl titles = {titles} tabClick={index => this.thistabClick(index)} itemType={item => this.getTabItemType(item)}/>
        <h1>{titles[tabIndex]}</h1>
      </div>
    )
  }
}

export default App