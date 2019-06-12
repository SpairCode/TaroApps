import Taro, { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import { Swiper, SwiperItem, Image } from '@tarojs/components'
import './banner.scss'

export default class Banner extends Component {

  static defaultProps = {
    focus: []
  }

  render () {
    const { focus } = this.props
    return (
      <Swiper
        className='bannerBox'
        indicatorColor='#fff'
        indicatorActiveColor='#333'
        vertical={false}
        circular={true}
        indicatorDots
        autoplay={true}>
        { 
          focus.map((item, index) => {
            return (
              <SwiperItem className='item'>
                <Image className='block' src={ item.img }></Image>
              </SwiperItem>
            )
          })
        }
      </Swiper>
    )
  }
}