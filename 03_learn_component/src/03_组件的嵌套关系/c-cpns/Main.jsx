import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'
import axios from 'axios'

export class Main extends Component {
    constructor(){
        super()
        this.state = {
            banners:["新歌曲","新歌单"],
            productList:["推荐商品","热门商品"]
        }
    }

    componentDidMount(){
        axios.post("http://codercba.com:5000/login",{"name":"coderwhy","password":"123456"}).then(res=>{
            console.log(res);
        })
    }
  render() {
    const {banners, productList} = this.state;
    return (
      <div>
        <div>Main</div>
        <MainBanner banners={banners} title="轮播图"/>
        <MainProductList productList={productList}/>
      </div>
    )
  }
}

export default Main