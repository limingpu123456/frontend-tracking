import ReactDOM from "react-dom/client"
import React from "react"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message:"hello react"
        }
    }
    render(){
        const {message} = this.state
        return(
            <div>
                {message}
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App/>)