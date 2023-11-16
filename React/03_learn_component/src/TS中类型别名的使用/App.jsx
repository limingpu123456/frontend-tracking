import React, { memo,useState } from 'react'


const App = memo((props) => {
  const [message,setMessage] = useState("hello world")

  function changeMessage(event){
    console.log(event);
    setMessage("你好啊，李银河")
  }

  return ( 
    <div>
      <h2>App:{message}</h2>      
      <button onClick={changeMessage}>修改文本</button>
    </div>
  )
})

export default App