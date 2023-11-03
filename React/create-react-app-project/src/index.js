import ReactDOM from "react-dom/client"
import React from "react"
import axios from "axios"
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount(){
        document.querySelector('#myButton').addEventListener('click', clickFn)
        async function clickFn(){
            let imgList =[]
            for(let i=0 ;i<5; i++){
                // imgList.push(MyAPI(i))
                let receiveData = await MyAPI(i)
                // console.log(receiveData);
                imgList.push(receiveData)
            }
            console.log(imgList);
            imgList.sort((a,b)=> b.id-a.id)  //倒序排列
            console.log(imgList);
            let myUl =  document.querySelector('#imgs ul')

            imgList.forEach((imgObj)=>{
                // console.log(imgObj);
                let newLi = document.createElement('li');
                let newImg = document.createElement('img')
                myUl.appendChild(newLi);
                newLi.appendChild(newImg);
     
                newImg.src = imgObj.img
                newImg.title = imgObj.id
            })
        }
       
        async function MyAPI(index){
            //axios从后端获取
            const res = await axios({
                method: 'POST',
                data: {
                    index
                },
                url: 'http://47.115.203.149:8880/image',
            })
            return res.data.data
        }
    }
    render(){
        return(
            <div>
              <button id="myButton">点击</button>
                <div id = 'imgs'>
                    <ul></ul>
                </div>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App/>)