import React from "react";
import HelloWorld from "./HelloWorld";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            message:"hello world"
        }
    }
    render(){
        return (
            <div>
                哈哈哈
                <HelloWorld/>
            </div>
        )
    }
}

export default App;