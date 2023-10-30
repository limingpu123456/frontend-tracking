import { Component } from "react";
//类组件
class App extends Component {
    constructor(){
      //因为有继承，所以需要写一下super
       super();
       this.state = {
        message:"App component"
       }
    }
    render(){
      const { message } = this.state;
      return(
        <h2>{ message }</h2>
      )
    }
}

export default App;
