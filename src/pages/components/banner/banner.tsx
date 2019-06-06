import Taro, { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import { Swiper, SwiperItem, Image } from '@tarojs/components'
import './banner.scss'

export default class Banner extends Component {
  render () {
    return (
      <Swiper
        className='bannerBox'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        vertical={false}
        circular={true}
        indicatorDots
        autoplay={true}>
        <SwiperItem>
          <Image className='block' src='https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2382afcc12db1449f1479b937e83e981.jpg?thumb=1&w=720&h=360'></Image>
        </SwiperItem>
        <SwiperItem>
          <Image className='block' src='https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/863749388223d749c36cc0364e8b4830.jpg?thumb=1&w=720&h=360'></Image>
        </SwiperItem>
      </Swiper>
    )
  }
}